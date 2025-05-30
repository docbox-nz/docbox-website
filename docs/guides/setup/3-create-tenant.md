# Create Tenant

> You must [Create Root](/docs/guides/setup/create-root) before you can create tenants

The docbox CLI handles the setup of tenants automatically based on a configuration file. It will
automatically:
- Setup the database
- Create and setup the S3 bucket 
- Create and setup the search index

:::note 
If you are deploying to AWS ensure you have the following environment variables set:
```ini
AWS_ACCESS_KEY_ID={YOUR AWS KEY ID}
AWS_SECRET_ACCESS_KEY={YOUR AWS SECRET ACCESS KEY}
```
These must be credentials with enough permissions to do the following:
- s3:CreateBucket
- s3:PutBucketNotification
- s3:PutBucketCORS
- secretsmanager:GetSecretValue
- secretsmanager:CreateSecret
:::

To create a tenant you must create a JSON configuration which defines the tenant

```json title="tenant.json"
{
    // Unique ID for the tenant
    "id": "2155f87a-a353-4a62-87fe-3827b6ab10fc",
    // Tenant environment
    "env": "Development",
    // Name of the database 
    "db_name": "docbox-test-dev",
    // Name of the secret to store the database credentials in
    "db_secret_name": "postgres/docbox/dev/test",
    // Name of the database role to create
    "db_role_name": "docbox_test_dev_api",
    // Password to give the role that will be created
    "db_password": "test",
    // Name for the S3 bucket 
    // (Will be created on tenant creation)
    "s3_name": "docbox-test-dev",
    // Name for the search index
    // (Will be created on tenant creation)
    "os_index_name": "docbox-test-dev",
    // ARN for the queue to use for S3 file upload notifications. This will be 
    // attached to the bucket on creation
    "s3_queue_arn": "arn:minio:sqs::primary:webhook",
    // Optional SQS event notification URL, when specified on file creation and deletion a notification
    // will be pushed to this queue. Set to null to omit:
    // "event_queue_url": null, 
    "event_queue_url": "https://sqs.ap-southeast-2.amazonaws.com/000000000000/docbox-events-dev",
    // Define CORS origins, these will be added to the tenant S3 bucket to 
    // allow the origin access to perform presigned uploads
    "origins": [
        "https://example.com"
    ]
}
```

After you've setup your config with the settings relevant to you then you can run the following command:

```
docbox-cli --config cli-config.json create-tenant --file tenant.json
```

The tenant will then be created and setup for you.