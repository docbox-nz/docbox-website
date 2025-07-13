# AWS Setup

Running **Docbox** on Amazon Web Services infrastructure

## Details

Docbox uses the following infrastructure, all the Docbox infrastructure EC2 instances use optimized ARM linux instances

The following EC2 instances are provisioned:
- Docbox server 
  - Main API server and point of access
- Office Conversion server
  - Used for converting office file formats
- Proxy server
  - Used for private subnet resources to communicate without public resources
- Typesense server
  - Search indexing server

## Prerequisites

- [Terraform](https://developer.hashicorp.com/terraform/install?product_intent=terraform) Infrastructure as code
- [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) AWS CLI 
- [Docbox AWS Infra Repository](https://github.com/docbox-nz/docbox-aws-infra) 
  - You must download a copy of the docbox terraform infrastructure from git

:::note 
This guide contains shell scripts on windows use git-bash to run the shell scripts.

i.e run `git-bash` then run the command from the git-bash window that opens
:::


## Prerequisites Infrastructure

The following infrastructure will not be provisioned by docbox:

- VPC
  - Docbox assumes you have a VPC created already
- Database
  - Docbox asssumes you have a postgres database setup
- VPN
  - Docbox assumes you have a VPN setup with a security group attached


Docbox assumes that your main application and your "data layer" (where docbox will live) are located
on separate VPCs.