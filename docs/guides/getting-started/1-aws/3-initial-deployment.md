# Initial Deployment

Now that we have setup our terraform configuration we can "apply" the terraform infrastructure configuration to setup all of our infrastructure.

## Deploy infrastructure

Run the following command to deploy the infrastructure

```sh
terraform apply
```

## Allow database access

After deployment is complete you must now allow the docbox API access to your database

To do this you must get the security group ID that the API is using, you can do this using the following command:

```sh
terraform output docbox_api_sg
```

Visit the security settings for your database add allow inbound rules access to the database port for the provided security group ID


## Update route table

Docbox expects that you are setting up Docbox in a separate "data layer" VPC isolated from your main VPC. To allow your "Gateway" from the main VPC to access Docbox routes you must update the "Route Tables".

- Visit "VPC" in the AWS console
- Click on "Route Tables"
- Find the "docbox-private-route-table" route table
- Click "Edit" and "Add a new route"
- Add "`{DESTINATION}`/16" as your route 
  - The CIDR block for the subnet containing your main API VPC
  - From the "Target" dropdown select "Peering Connection" and select the peering connection for your two VPCs
- Save changes

## Wait for software to setup

After your initial infrastructure is setup there will be a period of time that you must wait while software is installed onto the EC2 instances. 

The software being installed is:
- Squid Proxy - The proxy service
- Docbox - The main API service
- LibreOffice & Conversion API - The office conversion service
- Poppler - PDF utilities
- Typesense - Search indexing

You can monitor the progress of this setup using the following commands:

### SSH into the instance

To monitor installation progress for proxy:

```sh
sh ./scripts/ssh-proxy.sh
```

To monitor installation progress for Docbox:

```sh
sh ./scripts/ssh.sh
```

To monitor installation progress for LibreOffice:

```sh
sh ./scripts/ssh-converter.sh
```
To monitor installation progress for Typesense:

```sh
sh ./scripts/ssh-typesense.sh
```

### Tail log progress

Once ssh'ed into the desired machine you can use the following command to tail the log output of 
the setup process:

```sh
sudo tail -f /var/log/cloud-init-output.log
```

### View complete status

You can get the "status" of completion using the following command:

```sh
sudo cloud-init status
```

This will report "status: done" when the setup is complete
