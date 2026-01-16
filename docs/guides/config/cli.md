# CLI Configuration


## ServerConfigData

This is the configuration JSON structure for the CLI tool

#### Fields

| Field      | Type                                                      | Required | Description                   |
| ---------- | --------------------------------------------------------- | -------- | ----------------------------- |
| `api`      | [APIConfig](#apiconfig)                                   | Yes      | Docbox API configuration      |
| `database` | [AdminDatabaseConfiguration](#admindatabaseconfiguration) | Yes      | Database configuration        |
| `secrets`  | [SecretsManagerConfig](#secretsmanagerconfig)             | Yes      | Secrets manager configuration |
| `search`   | [SearchIndexFactoryConfig](#searchindexfactoryconfig)     | Yes      | Search configuration          |
| `storage`  | [StorageLayerFactoryConfig](#storagelayerfactoryconfig)   | Yes      | Search configuration          |


#### JSON Example 
 
```json
{
    "api": {
        // See section docs... 
    },   
    "database": {
        // See section docs... 
    },   
    "secrets": {
        // See section docs... 
    },   
    "search": {
        // See section docs... 
    },   
    "storage": {
        // See section docs... 
    }
}
```
#### JSON Example (AWS)
 
```json
{
    "api": {
        "url": "http://<YOUR DOCBOX SERVER IP AND PORT>",   
        "api_key": "..."
    },
    "database": {
        "host": "<YOUR DATABASE HOST>",
        "port": 5432,
        "root_secret_name": "postgres/docbox/config",
        "setup_user_secret_name": "docbox-setup-user"
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

## APIConfig

The API configuration is JSON object which specifies the details of the docbox server being operated on

#### Fields

| Field     | Type   | Required | Description                                                    |
| --------- | ------ | -------- | -------------------------------------------------------------- |
| `url`     | string | Yes      | HTTP(s) URL of the docbox server                               |
| `api_key` | string | No       | Optional API key if the docbox server is configured to use one |

#### JSON Example (AWS Official)
 
Example using the AWS secret manager with the official endpoint

```json
{
    "url": "http://localhost:8080",   
    "api_key": "..."
}
```

## AdminDatabaseConfiguration

The database setup user is a high privilege database user with permission to manage databases. This high privilege account
is required to perform root and tenant setup actions.  

#### Fields

| Field                    | Type                                                          | Required | Description                                                                                                                                                                                                                     |
| ------------------------ | ------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `host`                   | string                                                        | Yes      | Database host                                                                                                                                                                                                                   |
| `port`                   | number (Port)                                                 | Yes      | Database port                                                                                                                                                                                                                   |
| `root_secret_name`       | string                                                        | No       | Secret name for a secret manager secret that should contain the root database setup (It's recommended you name this `postgres/docbox/config` if you are using the provided AWS infra scripts to ensure correct access policies) |
| `setup_user_secret_name` | string                                                        | No       | Secret name for a secret manager secret that contains a [AdminDatabaseSetupUserConfig](#admindatabasesetupuserconfig) (Recommended over `setup_user` if hosting on AWS)                                                         |
| `setup_user`             | [AdminDatabaseSetupUserConfig](#admindatabasesetupuserconfig) | No       | Setup user if not using a secret to store the user details                                                                                                                                                                      |

:::important
Must specify either `setup_user_secret_name` or `setup_user`
:::

#### JSON Example (Setup User Secret)
 
```json
{
    "host": "localhost",   
    "port": 5432,
    "root_secret_name": "postgres/docbox/config",
    "setup_user_secret_name": "docbox-setup-user"
}
```

#### JSON Example (Setup User Inline)
 
```json
{
    "host": "localhost",   
    "port": 5432,
    "root_secret_name": "postgres/docbox/config",
    "setup_user": {
        "username": "...",
        "password": "..."
    }
}
```

### AdminDatabaseSetupUserConfig

The database setup user is a high privilege database user with permission to manage databases. This high privilege account
is required to perform root and tenant setup actions.  

#### Fields

| Field                  | Type   | Required | Description            |
| ---------------------- | ------ | -------- | ---------------------- |
| `username` (or `user`) | string | Yes      | Database user username |
| `password`             | string | Yes      | Database user password |

#### JSON Example
 
```json
{
    "username": "...",   
    "password": "..."
}
```

## SecretsManagerConfig 

> *Secrets Manager Configuration* - This section describes the secret manager configuration options.

The secrets manager configuration is a JSON object with a required provider field that determines which backend is used.

#### Fields

| Field      | Type                                                          | Required | Description                        |
| ---------- | ------------------------------------------------------------- | -------- | ---------------------------------- |
| `provider` | [SecretsManagerConfigProvider](#secretsmanagerconfigprovider) | Yes      | The secret manager provider to use |

#### SecretsManagerConfigProvider

| `provider` value  | Structure                                         | Description                                                                                     |
| ----------------- | ------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| "aws" *(Default)* | [AwsSecretManagerConfig](#AwsSecretManagerConfig) | AWS Secret Manager (or compatible alternative e.g [Loker](https://github.com/jacobtread/loker)) |
| "memory"          | Undocumented                                      | In-memory only secret manager for testing                                                       |


#### JSON Example (AWS Official)
 
Example using the AWS secret manager with the official endpoint

```json
{
    "provider": "aws",   
}
```

#### JSON Example (AWS Custom)

Example using the AWS secret manager with a custom endpoint
 
```json
{
    "provider": "aws", 
    "endpoint": {
        "type": "custom",   
        "endpoint": "https://localhost:9090",
        "access_key_id": "...",
        "access_key_secret": "..."
    }
}
```

### AwsSecretManagerConfig

Configuration for the AWS compatible secret manager

#### Fields

| Field      | Type                                      | Required | Description                        |
| ---------- | ----------------------------------------- | -------- | ---------------------------------- |
| `endpoint` | [AwsSecretsEndpoint](#AwsSecretsEndpoint) | No       | The secret manager endpoint to use |

### AwsSecretsEndpoint

AWS secret manager endpoint configuration

#### Fields

| Field  | Type                                              | Required | Description                         |
| ------ | ------------------------------------------------- | -------- | ----------------------------------- |
| `type` | [AwsSecretsEndpointType](#AwsSecretsEndpointType) | Yes      | The type of secrets endpoint to use |


#### JSON Example (AWS)
 
```json
{ 
    "type": "aws",   
}
```

#### JSON Example (Custom)
 
```json
{ 
    "type": "custom",   
    "endpoint": "https://localhost:9090",
    "access_key_id": "...",
    "access_key_secret": "..."
}
```

### AwsSecretsEndpointType

Available endpoints for `AwsSecretsEndpoint`

| `type` value      | Structure                                           | Description                                                            |
| ----------------- | --------------------------------------------------- | ---------------------------------------------------------------------- |
| "aws" *(Default)* | No additional fields                                | AWS official secrets endpoint                                          |
| "custom"          | [CustomAwsSecretEndpoint](#CustomAwsSecretEndpoint) | Custom AWS secrets manager endpoint for compatible alternative servers |


### CustomAwsSecretEndpoint

Custom endpoint configuration AWS secret manager

#### Fields

| Field               | Type         | Required | Description                                        |
| ------------------- | ------------ | -------- | -------------------------------------------------- |
| `endpoint`          | string (URL) | Yes      | URL of the secret manager endpoint                 |
| `access_key_id`     | string       | Yes      | Access key ID for accessing the secret manager     |
| `access_key_secret` | string       | Yes      | Access key secret for accessing the secret manager |

## SearchIndexFactoryConfig

#### Fields

| Field      | Type                                                                  | Required | Description                |
| ---------- | --------------------------------------------------------------------- | -------- | -------------------------- |
| `provider` | [SearchIndexFactoryConfigProvider](#searchindexfactoryconfigprovider) | Yes      | The search provider to use |

#### SearchIndexFactoryConfigProvider

| `provider` value | Structure                                       | Description                                      |
| ---------------- | ----------------------------------------------- | ------------------------------------------------ |
| "typesense"      | [TypesenseSearchConfig](#typesensesearchconfig) | Search backed by a Typesense compatible server   |
| "open_search"    | [OpenSearchConfig](#opensearchconfig)           | Search backed by an OpenSearch compatible server |
| "database"       | No additional configuration                     | Database backed searching                        |

#### JSON Example (Typesense)
 
Example using the AWS secret manager with the official endpoint

```json
{
    "provider": "typesense",
    "url": "http://localhost:8000",
    "api_key_secret_name": "typesense/credentials/docbox"
}
```

#### JSON Example (OpenSearch)
 
Example using the AWS secret manager with the official endpoint

```json
{
    "provider": "open_search",
    "url": "http://localhost:8000"
}
```

#### JSON Example (Database)
 
Example using the AWS secret manager with the official endpoint

```json
{
    "provider": "database"
}
```

### TypesenseSearchConfig

#### Fields

| Field                 | Type         | Required | Description                                                                                                                                                                                                                                                                             |
| --------------------- | ------------ | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `url`                 | string (URL) | Yes      | URL for the typesense server                                                                                                                                                                                                                                                            |
| `api_key_secret_name` | string       | No       | Name of the secret manager secret containing the typesense API key, the secret should contain the value directly (Ensure the docbox server has permission to access this secret, it's recommended you name this `typesense/credentials/docbox` if you are using the official AWS infra) |
| `api_key`             | string       | No       | API key if not using `api_key_secret_name` to store the API key                                                                                                                                                                                                                         |


:::important
Must specify either `api_key_secret_name` or `api_key`
:::

#### JSON Example (Secret)
 
Example using the AWS secret manager with the official endpoint

```json
{
    "url": "http://localhost:8000",
    "api_key_secret_name": "typesense/credentials/docbox"
}
```

#### JSON Example (Inline)
 
Example using the AWS secret manager with the official endpoint

```json
{
    "url": "http://localhost:8000",
    "api_key": "..."
}
```

### OpenSearchConfig

#### Fields

| Field | Type         | Required | Description                  |
| ----- | ------------ | -------- | ---------------------------- |
| `url` | string (URL) | Yes      | URL of the OpenSearch server |

#### JSON Example
 
Example using the AWS secret manager with the official endpoint

```json
{
    "url": "http://localhost:8000"
}
```

## StorageLayerFactoryConfig

#### Fields

| Field      | Type                                                                    | Required | Description                 |
| ---------- | ----------------------------------------------------------------------- | -------- | --------------------------- |
| `provider` | [StorageLayerFactoryConfigProvider](#storagelayerfactoryconfigprovider) | Yes      | The storage provider to use |

#### StorageLayerFactoryConfigProvider

| `provider` value | Structure                                                   | Description                                      |
| ---------------- | ----------------------------------------------------------- | ------------------------------------------------ |
| "s3" *(Default)* | [S3StorageLayerFactoryConfig](#s3storagelayerfactoryconfig) | Storage backed by S3 or a S3 compatible provider |



#### JSON Example (AWS Official)
 
Example using the AWS secret manager with the official endpoint

```json
{
    "provider": "s3",
    "endpoint": {
        "type": "aws"
    }
}
```

#### JSON Example (AWS Custom)

Example using the AWS secret manager with a custom endpoint
 
```json
{
    "provider": "s3", 
    "endpoint": {
        "type": "custom",   
        "endpoint": "https://storage:9090",
        "external_endpoint": "https://localhost:9090",
        "access_key_id": "...",
        "access_key_secret": "..."
    }
}
```


### S3StorageLayerFactoryConfig

#### Fields

| Field      | Type                      | Required | Description                     |
| ---------- | ------------------------- | -------- | ------------------------------- |
| `endpoint` | [S3Endpoint](#s3endpoint) | No       | Endpoint to use for S3 requests |


### S3Endpoint

| Field  | Type                              | Required | Description             |
| ------ | --------------------------------- | -------- | ----------------------- |
| `type` | [S3EndpointType](#s3endpointtype) | No       | Type of endpoint to use |



#### S3EndpointType

Available endpoints for `S3Endpoint`

| `type` value      | Structure                             | Description                                           |
| ----------------- | ------------------------------------- | ----------------------------------------------------- |
| "aws" *(Default)* | No additional fields                  | AWS official S3 endpoint                              |
| "custom"          | [S3CustomEndpoint](#s3customendpoint) | Custom S3 endpoint for compatible alternative servers |



#### JSON Example (AWS Official)

```json
{
    "type": "aws"
}
```

#### JSON Example (AWS Custom)

Example using the AWS secret manager with a custom endpoint
 
```json
{
    "type": "custom",   
    "endpoint": "https://storage:9090",
    "access_key_id": "...",
    "access_key_secret": "..."
}
```

### S3CustomEndpoint

Custom endpoint configuration for S3

#### Fields

| Field               | Type         | Required | Description                                                                                                                                                                                         |
| ------------------- | ------------ | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `endpoint`          | string (URL) | Yes      | URL of the S3 endpoint                                                                                                                                                                              |
| `external_endpoint` | string (URL) | No       | Optional external facing URL for the S3 endpoint, required for system behind docker where the public facing S3 endpoint URL is different to the one that the server should use (For presigned URLs) |
| `access_key_id`     | string       | Yes      | Access key ID for accessing the S3 server                                                                                                                                                           |
| `access_key_secret` | string       | Yes      | Access key secret for accessing the S3 server                                                                                                                                                       |

#### JSON Example

Example using the AWS secret manager with a custom endpoint
 
```json
{
    "type": "custom",   
    "endpoint": "https://storage:9090",
    "external_endpoint": "https://localhost:9090",
    "access_key_id": "...",
    "access_key_secret": "..."
}
```