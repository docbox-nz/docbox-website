# Configure Terraform

You will need a terraform config file named `terraform.tfvars` and it should be placed in the `terraform` folder.
It should include the following:

```t
aws_profile = "YOUR AWS PROFILE"
aws_region  = "ap-southeast-2"   

igw_id = "igw-xxxxxxxxxxxxxxxxx"

vpn_security_group_id = ""

vpc_id = "ID OF THE TARGET VPC"
vpc_cidr = "CIDR BLOCK OF VPC"

private_subnet_cidr   = "10.0.1.0/24"
public_subnet_cidr    = "10.0.3.0/24"

ssh_public_key_path  = "~/.ssh/docbox.pub"
ssh_private_key_path = "~/.ssh/docbox"

api_instance_type = "t4g.nano"
converter_instance_type = "t4g.micro"
```


| Key                     | Description                                                                                    |
| ----------------------- | ---------------------------------------------------------------------------------------------- |
| aws_profile             | AWS CLI profile to use when setting up infrastructure                                          |
| aws_region              | AWS Region to setup resources in                                                               |
| igw_id                  | Internet gateway to use for public resources                                                   |
| vpn_security_group_id   | ID of the security group your "Bastion" VPN is using                                           |
| vpc_id                  | ID of the VPC to create resources within                                                       |
| vpc_cidr                | CIDR block of the VPC                                                                          |
| private_subnet_cidr     | Subnet to use for the docbox private subnet - This must be unique and cannot be in use already |
| public_subnet_cidr      | Subnet to use for the docbox public subnet - This must be unique and cannot be in use already  |
| ssh_public_key_path     | Path to the SSH public key setup in the previous step                                          |
| ssh_private_key_path    | Path to the SSH private key setup in the previous step                                         |
| api_instance_type       | Type of instance to use for the API server                                                     |
| converter_instance_type | Type of instance to use for the office conversion server                                       |

:::note
Adjust this configuration according to your specific setup
:::