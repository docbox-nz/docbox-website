# Closing Notes

Your Docbox infrastructure is now setup, this section contains some helpful information for maintaining your infrastructure

## Deploy Infrastructure Changes

If any changes are made to the infrastructure or configuration you can deploy these 
changes using the following command:

```sh
terraform apply
```

## Plan Infrastructure Changes

To view infrastructure changes without deploying them use the following command:

```sh
terraform plan
```


# Destroy Infrastructure

To remove all infrastructure run 

```sh
terraform destroy
```

:::important
You will need to manually delete things such as RDS databases and empty S3 bucket contents and delete S3 buckets. As terraform will not be able to delete this.

S3 buckets created by docbox are not destroyed by terraform as terraform is not aware of them, thus they will need to be emptied and destroyed manually
:::


