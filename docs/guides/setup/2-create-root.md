# Create Root

Before you can use use docbox you must setup the initial "root" docbox database that will store information about the tenants contained within.

First create a configuration file for the cli to use, the information in the config file will be used to setup the root and any 
tenants when performing the tenant commands

```json title="cli-config.json"
{
    // Database credentials
    "database": {
        "host": "localhost",
        "port": 5432,
        // Credentials to use when setting up tenants 
        // (This is not used after tenants are created) 
        "username": "docbox",
        "password": "test",
        // Name of the root secret
        "root_secret_name": "postgres/docbox/config"
    },
    // Secrets provider
    "secrets": {
        "provider": "aws",
    },
    // Search provider and credentials
    "search": {
        "provider": "typesense",
        "url": "http://localhost:8108",
        "api_key": "typesensedev"
    },
    // Storage provider and credentials
    "storage": {
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
        "provider": "memory",
        "default": "{\"username\": \"docbox\", \"password\": \"test\"}"
    }
    // ...
}
```

:::info
The above snippet will create a fake secrets manager to provide the secrets
:::


After you've setup your config with the settings relevant to you then you can run the following command:

```
docbox-cli --config cli-config.json create-root
```

The root will be created and you will now be able to create tenants