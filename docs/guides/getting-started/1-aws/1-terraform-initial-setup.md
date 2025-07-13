# Terraform Initial Setup


## Create state bucket

**Docbox** uses terraform to setup AWS infrastructure, to ensure your setup can be shared amongst team members and to prevent loss of terraform state, **Docbox** makes use of the "S3" backend which stores the terraform state in a S3 bucket that can be accessed by multiple users.

Create a S3 bucket in your AWS console or use the following commands with the AWS CLI

:::note

The commands below assume you are using the bucket name `docbox-infra-bucket` and the AWS region `ap-southeast-2`
adjust the commands accordingly to your specific setups 

:::

### Create bucket

```sh
aws s3api create-bucket --bucket docbox-infra-bucket --region ap-southeast-2
```

### Block public access

Block public access to the bucket to ensure your private infrastructure state and credentials are secret

```sh
aws s3api put-public-access-block --bucket docbox-infra-bucket --public-access-block-configuration "BlockPublicAcls=true,IgnorePublicAcls=true,BlockPublicPolicy=true,RestrictPublicBuckets=true"
```

### Enable bucket versioning

Terraform recommends enabling versioning on the bucket, this step is not required but is recommended

```sh
aws s3api put-bucket-versioning --bucket docbox-infra-bucket --versioning-configuration Status=Enabled
```

### Enable bucket encryption

Enable encryption on the bucket

```sh
aws s3api put-bucket-encryption --bucket docbox-infra-bucket --server-side-encryption-configuration '{"Rules":[{"ApplyServerSideEncryptionByDefault":{"SSEAlgorithm":"AES256"}}]}'
```

## Setup Initial Terraform

### Download Infrastructure

Download the terraform infrastructure as code from [Docbox AWS Infra Repository](https://github.com/docbox-nz/docbox-aws-infra) the project contains the required 
infrastructure as code

### Setup Infrastructure backend

After creating the bucket create a `s3.tfbackend` file in the root folder of the docbox infrastructure project. Put the following content in this file:

```r
bucket =  "docbox-infra-bucket" # The S3 bucket name
key    = "docbox.tfstate" 
region = "ap-southeast-2" # The AWS region you are using
# profile = "<YOUR AWS PROFILE>" # Optionally configure a specific AWS profile to use for creating infrastructure 
```

### Initialize Terraform

After setting up the bucket and the `s3.tfbackend` file you can now initialize terraform using the backend:

```sh
terraform init -backend-config=s3.tfbackend
```


## SSH Key

The terraform setup depend on you having a SSH key for accessing the created resources. This is using during the initial setup and will also be the keys you use later to SSH into the systems.

- `~/.ssh/docbox.pub` (The public key)
- `~/.ssh/docbox` (The private key)

Theses keys can be named anything but keep them in an accessible place as you will need to set them as the following variables in a later step:

```ini
# SSH keys
ssh_public_key_path  = "~/.ssh/docbox.pub"
ssh_private_key_path = "~/.ssh/docbox"
```

