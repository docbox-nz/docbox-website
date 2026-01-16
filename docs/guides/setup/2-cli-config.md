# CLI Config

Before the CLI can access anything you must create a configuration file for the cli to use, the information in the config file will be used to setup the root and any 
tenants when performing the tenant commands.

The sample config below with minor edits (according to your infra) can be used with the official supported docbox
AWS automated infra:
```json title="cli-config.json"
{
    "api": {
        "url": "http://<YOUR DOCBOX SERVER IP AND PORT>"
    },
    "database": {
        "host": "<YOUR DATABASE HOST>",
        "port": 5432,
        "root_secret_name": "postgres/docbox/config",
        "setup_user": {
            "username": "<YOUR SETUP DB USERNAME>",
            "password": "<YOUR SETUP DB USER PASSWORD>"
        }
    },
    "secrets": {
        "provider": "aws",
    },
    "search": {
        "provider": "typesense",
        "url": "http://<YOUR TYPESENSE SERVER IP AND PORT>",
        "api_key_secret_name": "typesense/credentials/docbox"
    },
    "storage": {
        "provider": "s3",
        "endpoint": {
            "type": "aws"
        }
    }
}
```

You can find the full documentation for CLI configuration [Here](/docs/guides/config/cli)

:::tip
Using AWS Secret Manager? You can store your cli configuration file as an AWS secret instead of a 
local file. Create a secret using config JSON and specify the `--aws-config-secret <YOUR_SECRET_NAME>` or `-a <YOUR_SECRET_NAME>` 
argument when using docbox-cli
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

Or an alternate method for providing the credentials, these are loaded through the AWS SDK
so options like `AWS_PROFILE=my-profile` are also valid.

These must be credentials with enough permissions to do the following:
- s3:CreateBucket
- s3:PutBucketNotification
- s3:PutBucketCORS
- secretsmanager:GetSecretValue
- secretsmanager:CreateSecret
:::
