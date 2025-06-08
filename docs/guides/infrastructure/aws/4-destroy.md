# Destroy Infrastructure

To remove all infrastructure run 

```sh
terraform -chdir=./terraform destroy
```

:::important
You will need to manually delete things such as RDS databases and empty S3 bucket contents and delete S3 buckets. As terraform will not be able to delete this.

I recommend starting the database delete before running the destroy command as the deletion requires creating a database snapshot so the terraform destroy will fail and you'll have to run it again after deleting the database to fully destroy.

S3 buckets created by docbox are not destroyed by terraform as terraform is not aware of them, thus they will need to be emptied and destroyed manually
:::