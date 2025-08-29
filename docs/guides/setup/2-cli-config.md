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
        "root_role_name": "docbox_config_api",
        "root_secret_password": "docbox_root_password",
        "setup_user": {
            "__description": "User to use when migrating and setting up database, should have higher permissions",
            "username": "docbox",
            "password": "test"
        }
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

If you are developing locally you can use the following "secrets" configuration:

```json title="cli-config.json"
{
    // ...
    "secrets": {
        "__description": "Secrets manager configurations",
        "provider": "json",
        "path": "D:\\absolute\\path\\to\\your\\secrets.json.age",
        "key": "YOUR_ENCRYPTION_KEY"
    }
    // ...
}
```

:::info
The above snippet will create a local secrets manager using an encrypted JSON file using [age](https://github.com/FiloSottile/age) encryption
:::


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
These must be credentials with enough permissions to do the following:
- s3:CreateBucket
- s3:PutBucketNotification
- s3:PutBucketCORS
- secretsmanager:GetSecretValue
- secretsmanager:CreateSecret
:::
