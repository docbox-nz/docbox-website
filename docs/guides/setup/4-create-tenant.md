# Create Tenant

> You must [Create Root](/docs/guides/setup/create-root) before you can create tenants

The docbox CLI handles the setup of tenants automatically based on a configuration file. It will
automatically:
- Setup the database
- Create and setup the S3 bucket 
- Create and setup the search index

To create a tenant you must create a JSON configuration which defines the tenant

```json title="tenant.json"
{
    // Unique ID for the tenant
    "id": "2155f87a-a353-4a62-87fe-3827b6ab10fc",
    // Display name for the tenant
    "name": "Demo Tenant",
    // Tenant environment
    "env": "Development",
    // Name of the database 
    "db_name": "docbox-test-dev",
    // Name of the secret to store the database credentials in
    "db_secret_name": "postgres/docbox/dev/test",
    // Name of the database role to create
    "db_role_name": "docbox_test_dev_api",
    // Name for the S3 storage bucket 
    // (Will be created on tenant creation)
    "storage_bucket_name": "docbox-test-dev",
    // Define CORS origins, these will be added to the tenant S3 bucket to 
    // allow the origin access to perform presigned uploads
    "storage_cors_origins": [
        "https://example.com"
    ],
    // ARN for the queue to use for S3 file upload notifications. This will be 
    // attached to the bucket on creation
    "storage_s3_queue_arn": "arn:minio:sqs::primary:webhook",
    // Name for the search index collection
    // (Will be created on tenant creation)
    "search_index_name": "docbox-test-dev",
    // Optional SQS event notification URL, when specified on file creation and deletion a notification
    // will be pushed to this queue. Set to null to omit:
    // "event_queue_url": null, 
    "event_queue_url": "https://sqs.ap-southeast-2.amazonaws.com/000000000000/docbox-events-dev"
}
```

After you've setup your config with the settings relevant to you then you can run the following command:

```
docbox-cli --config cli-config.json create-tenant --file tenant.json
```

The tenant will then be created and setup for you.