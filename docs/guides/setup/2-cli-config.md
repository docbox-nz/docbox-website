# CLI Config

Before the CLI can access anything you must create a configuration file for the cli to use, the information in the config file will be used to setup the root and any 
tenants when performing the tenant commands

```json title="cli-config.json"
{
    // Database credentials
    "database": {
        "__description": "Database details and credentials",
        "host": "localhost",
        "port": 5432,
        "root_secret_name": "postgres/docbox/config",
        "setup_user": {
            "__description": "User to use when migrating and setting up database, should have higher permissions",
            "username": "docbox",
            "password": "test"
        },
        // Optional: (As of 0.3.0) Alternative to "setup_user" the name of a secret that contains the username and password
        // in JSON format, will be loaded at runtime instead of being baked into the config
        "setup_user_secret_name": "pg-master"
    },
    // Secrets provider
    "secrets": {
        "__description": "Secrets manager configurations",
        "provider": "aws",
    },
    // Search provider and credentials
    "search": {
        "__description": "Search index factory configuration",
        "provider": "typesense",
        "url": "http://localhost:8108",
        "api_key": "typesensedev"
    },
    // Storage provider and credentials
    "storage": {
        "__description": "Storage bucket provider",
        "provider": "s3",
        "endpoint": {
            "type": "custom",
            "endpoint": "http://localhost:9090",
            "access_key_id": "minioadmin",
            "access_key_secret": "minioadmin"
        }
    }
}
```

:::note 
If you are deploying to AWS ensure you have the following environment variables set, you
can create a .env file in the directory you will use the docbox-cli in and these will be 
loaded when you use the cli:
```ini
# AWS region the services are within
AWS_REGION=ap-southeast-2

# AWS credentials
AWS_ACCESS_KEY_ID={YOUR AWS KEY ID}
AWS_SECRET_ACCESS_KEY={YOUR AWS SECRET ACCESS KEY}
```

Or an alternate method for providing the credentials, these are loaded through the AWS SDK
so options like `AWS_PROFILE=my-profile` are also valid.

These must be credentials with enough permissions to do the following:
- s3:CreateBucket
- s3:PutBucketNotification
- s3:PutBucketCORS
- secretsmanager:GetSecretValue
- secretsmanager:CreateSecret
:::
