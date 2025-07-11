
# Initial setup

You will need to install terraform you can find the various install and download guides [Here](https://developer.hashicorp.com/terraform/install?product_intent=terraform)

## 1. Setup SSH Key

The terraform scripts depend on you having a SSH key for accessing the EC2 instances. This is using during the initial setup and will also be the keys you use later to SSH into the systems.

- `~/.ssh/docbox.pub` (The public key)
- `~/.ssh/docbox` (The private key)

Theses keys can be named anything but keep them in an accessible place as you will need to set them as the following variables in a later step:

```t
# SSH keys
ssh_public_key_path  = "~/.ssh/docbox.pub"
ssh_private_key_path = "~/.ssh/docbox"
```

## 2. Terraform State

> [!IMPORTANT]
> Terraform uses a state file to track the currently deployed infrastructure. In order to keep this in sync and backed up we will be using the S3 "backend" for terraform which will allow it to store the state in an S3 bucket so we don't have to manually share the state file.

You will need to follow [Setup Terraform S3](/docs/guides/infrastructure/aws/setup-terraform-s3) to setup a bucket to store the state. The same bucket can be reused for multiple infrastructures as long as the key used in the terraform config is different

## 3. Initialize Terraform

Run the init command

```sh
terraform -chdir=./terraform init -backend-config=s3.tfbackend
```

## 4. Terraform config

You will need a terraform config file named `terraform.tfvars` and it should be placed in the `terraform` folder.
It should include the following:

```t
# AWS configuration
aws_profile = "YOUR AWS PROFILE"
aws_region  = "ap-southeast-2"  

# ID of the security group your VPN is within to allow access to the 
# services through the VPN
vpn_security_group_id = ""

vpc_id = "ID OF THE TARGET VPC"
vpc_cidr = "CIDR BLOCK OF VPC"

# Subnet & VPC configuration (!!Ensure these are different from existing ones!!)
private_subnet_cidr   = "10.0.1.0/24"
public_subnet_cidr    = "10.0.3.0/24"

# SSH keys (Update theses paths to be the paths to your SSH key files)
ssh_public_key_path  = "~/.ssh/docbox.pub"
ssh_private_key_path = "~/.ssh/docbox"

# API Instance
api_instance_type = "t4g.micro"
```

# Infrastructure deploy

After the terraform initial setup is complete you can deploy the infrastructure using terraform. You can
run this any time you change a part of the infrastructure.

## 1. Terraform apply

You can deploy the infrastructure using the terraform apply command:

```sh
terraform -chdir=./terraform apply
```

> This will create and update all the resources for this project on AWS

## 2. Allow database access

1. Visit the RDS page on the AWS console, 
2. Find the database
3. Visit its security group 
4. Edit inbound rules
5. Add an allow rule for the docbox security group


## 3. Update route table

Go to "VPC" in the AWS console then "Route Tables" and find "docbox-private-route-table" click edit routes and add a new route
for "`{DESTINATION}`/16" (The CIDR block for the subnet containing your main API VPC) from the "Target" dropdown select "Peering Connection"
and select the peering connection then save the changes

## 4. Wait for setup

:::important
You will need to be connected to a VPN that can access the private subnet 
in order to perform these actions
:::

You will now need to wait for the docbox instance to set itself up, this may take a few minutes as it
has to install LibreOffice which can be quite large. You can monitor this process by ssh'ing into the
server and tailing the logs

```sh
sh ./scripts/ssh.sh
```

:::note 
On windows use git-bash to run the shell scripts.

i.e `git-bash` then run the command from the git-bash window that opens
:::

Then once you're ssh'ed in you can use the following command to tail the logs:

```sh
sudo tail -f /var/log/cloud-init-output.log
```

When setup is complete the following command:

```sh
sudo cloud-init status
```

Will report "status: done"

## 4. Environment variables

You will need to create a `.env.production` file in the project root. It should contain the following:

```sh
# Logging configuration
RUST_LOG=debug,docbox_core::notifications::sqs=info

# URL for the office converter server (This should be running on the same server)
CONVERT_SERVER_ADDRESS=http://127.0.0.1:8081

# URL for the SQS queue for notifications of when a new file is created
DOCBOX_SQS_URL={SQS QUEUE ARN}

# Database host and port
POSTGRES_HOST={DATABASE HOST}
POSTGRES_PORT={DATABASE PORT}

# AWS secrets manager key for the root database username and password
DOCBOX_DB_CREDENTIAL_NAME=postgres/docbox/config

# Use the typesense search index
DOCBOX_SEARCH_INDEX_FACTORY=typesense
TYPESENSE_URL={TYPESENSE URL}
TYPESENSE_API_KEY={TYPESENSE API KEY}

# URL for the HTTP proxy server to use for scraping
HTTP_PROXY=http://{PROXY SERVER IP}:3128/
HTTPS_PROXY=http://{PROXY SERVER IP}:3128/

# AWS region for AWS services to use
AWS_REGION=ap-southeast-2
```

You can then deploy this to the EC2 instance using (Use this anytime you want to upload the env to the EC2 instance)

```sh
sh ./scripts/deploy.sh --env
```

:::note 
On windows use git-bash to run the shell scripts.

i.e `git-bash` then run the command from the git-bash window that opens
:::
