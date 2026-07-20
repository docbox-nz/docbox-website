# Server Environment Variables

## Core Configuration

| Variable                          | Default                                        | Description                                                                                                                                                                                                                            |
| --------------------------------- | ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `DOCBOX_MAX_FILE_SIZE_BYTES`      | `102400000` (100MB)                            | Maximum allowed file upload size in bytes.                                                                                                                                                                                             |
| `DOCBOX_API_KEY`                  | _None_                                         | API key required to authenticate all incoming API requests. Recommended as an additional security layer                                                                                                                                |
| `SERVER_ADDRESS`                  | `0.0.0.0:8080` (HTTP) / `0.0.0.0:8443` (HTTPS) | Network address and port to bind the server to.                                                                                                                                                                                        |
| `DOCBOX_DISABLE_BACKGROUND_TASKS` | `false`                                        | Disables automatic background processing tasks such as failed presigned upload cleanup. If you have multiple nodes running docbox its a good idea to only enable background tasks on one of them to prevent race conditions in cleanup |
| `DOCBOX_USE_HTTPS`                | `false`                                        | Enables HTTPS. If `true`, the certificate and private key paths below must be valid.                                                                                                                                                   |
| `DOCBOX_HTTPS_CERTIFICATE_PATH`   | `docbox.cert.pem`                              | Path to the PEM-formatted HTTPS TLS certificate.                                                                                                                                                                                       |
| `DOCBOX_HTTPS_PRIVATE_KEY_PATH`   | `docbox.key.pem`                               | Path to the PEM-formatted HTTPS TLS private key.                                                                                                                                                                                       |

---

## Web Scraper

Controls the behavior of the web scraper that handles scraping the websites behind links for OGP metadata and favicons

| Variable                                     | Default        | Description                                                           |
| -------------------------------------------- | -------------- | --------------------------------------------------------------------- |
| `DOCBOX_WEB_SCRAPE_HTTP_PROXY`               | _None_         | Proxy server address to route HTTP scraping requests through.         |
| `DOCBOX_WEB_SCRAPE_HTTPS_PROXY`              | _None_         | Proxy server address to route HTTPS scraping requests through.        |
| `DOCBOX_WEB_SCRAPE_METADATA_CACHE_DURATION`  | `172800` (48h) | Time in seconds before cached metadata is considered expired.         |
| `DOCBOX_WEB_SCRAPE_METADATA_CONNECT_TIMEOUT` | `5` (5s)       | Timeout duration in seconds when initially establishing a connection. |
| `DOCBOX_WEB_SCRAPE_METADATA_READ_TIMEOUT`    | `10` (10s)     | Timeout duration in seconds when reading responses from target sites. |

:::note Deprecated / Unused
`DOCBOX_WEB_SCRAPE_METADATA_CACHE_CAPACITY` is no longer used. Caching has migrated from an in-memory limit to an unbounded database store
this variable will no longer have an effect.
:::

---

## Secrets Manager

Docbox secrets manger, set using `DOCBOX_SECRET_MANAGER`

### AWS Secrets Manager (`aws`)

Used when fetching credentials directly from AWS Secrets Manager.

| Variable                           | Default | Description                                                                  |
| ---------------------------------- | ------- | ---------------------------------------------------------------------------- |
| `DOCBOX_SECRETS_ENDPOINT`          | _None_  | Custom endpoint URL (useful for local development or alternative providers). |
| `DOCBOX_SECRETS_ACCESS_KEY_ID`     | _None_  | Proxy server address to route HTTPS scraping requests through.               |
| `DOCBOX_SECRETS_ACCESS_KEY_SECRET` | _None_  | Time in seconds before cached metadata is considered expired.                |

### Memory Secrets Manager (`memory`)

Used for local development or testing environments where secrets are passed directly via environment configs.

The in memory store is generally only an internal tool and shouldn't be used outside of testing. If you are looking for
a self-hostable open source secrets manager you can use that is compatible with docbox use [Loker](https://github.com/jacobtread/loker)
with the `"aws"` configuration above pointing to your Loker server

---

## Database

Database configuration options

| Variable                               | Default      | Description                                                                                                                                                                                                                                                                                                 |
| -------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `DOCBOX_DB_HOST`                       | Required     | Database host address.                                                                                                                                                                                                                                                                                      |
| `DOCBOX_DB_PORT`                       | Required     | Database connection port.                                                                                                                                                                                                                                                                                   |
| `DOCBOX_DB_CREDENTIAL_NAME`            | _None_       | If you are authenticating with your database using a username and password stored in a secret, this is the Secrets Manager entry name containing `{"user": "username", "password": "password"}` or `{"username": "username", "password": "password"}`                                                       |
| `DOCBOX_DB_ROOT_IAM`                   | false        | Set to `true` to authenticate the root database via AWS IAM instead of a password. This approach is recommended over storing a secret if you are hosted on AWS and using RDS1. Ensure IAM access is enabled on your database                                                                                |
| `DOCBOX_DB_MAX_CONNECTIONS`            | 10           | Maximum connection pool size allowed _per tenant_.                                                                                                                                                                                                                                                          |
| `DOCBOX_DB_MAX_ROOT_CONNECTIONS`       | 2            | Maximum connection pool size for the core root `docbox` pool.                                                                                                                                                                                                                                               |
| `DOCBOX_DB_ACQUIRE_TIMEOUT`            | 60           | Maximum time to wait in seconds before throwing an error when acquiring a connection.                                                                                                                                                                                                                       |
| `DOCBOX_DB_POOL_TIMEOUT`               | 60           | Maximum duration in seconds a connection can live inside a pool before being recycled. If you are using `DOCBOX_DB_ROOT_IAM` this defaults to 600 (6s) to align with the refresh requirements of IAM based database authentication, I do not recommend changing this variable when using IAM authentication |
| `DOCBOX_DB_IDLE_TIMEOUT`               | 600          | Idle duration threshold in seconds before a connection is closed to save server resources.                                                                                                                                                                                                                  |
| `DOCBOX_DB_CACHE_DURATION`             | 172800 (48h) | Time a database pool can live in the cache                                                                                                                                                                                                                                                                  |
| `DOCBOX_DB_CACHE_CAPACITY`             | 50           | Maximum number of concurrent tenant database pools to hold in memory.                                                                                                                                                                                                                                       |
| `DOCBOX_DB_CREDENTIALS_CACHE_DURATION` | 172800 (48h) | Duration in seconds database credentials fetched from the secret manager remain cached.                                                                                                                                                                                                                     |
| `DOCBOX_DB_CREDENTIALS_CACHE_CAPACITY` | 50           | Maximum number of individual database credentials to cache.                                                                                                                                                                                                                                                 |

:::note
The `DOCBOX_DB_CACHE_DURATION` / `DOCBOX_DB_CACHE_CAPACITY` refer to the cache of per-tenant databases and the `DOCBOX_DB_ACQUIRE_TIMEOUT` / `DOCBOX_DB_POOL_TIMEOUT` / `DOCBOX_DB_IDLE_TIMEOUT` variables refer
to the individual database pools within each of those cached tenants
:::

---

## Search Backend

Set `DOCBOX_SEARCH_INDEX_FACTORY` to choose your search backend `"opensearch"`, `"typesense"`, or `"database"`.

### OpenSearch Configuration (`"opensearch"`)

| Variable         | Default  | Description                                          |
| ---------------- | -------- | ---------------------------------------------------- |
| `OPENSEARCH_URL` | Required | Connection URL for your OpenSearch cluster instance. |

### Typesense Configuration (`"typesense"`)

| Variable                        | Default  | Description                                                                                          |
| ------------------------------- | -------- | ---------------------------------------------------------------------------------------------------- |
| `TYPESENSE_URL`                 | Required | Connection URL for your Typesense instance                                                           |
| `TYPESENSE_API_KEY`             | _None_   | API key provided directly in plaintext.                                                              |
| `TYPESENSE_API_KEY_SECRET_NAME` | _None_   | Secrets Manager entry name containing the API key (Recommended over providing your API key directly) |

You _must_ specifier either `TYPESENSE_API_KEY` or `TYPESENSE_API_KEY_SECRET_NAME`

### Database Configuration (`"database"`)

The database search backend does not currently have any additional configuration, it inherits all previous database configuration environment
variables.

## Object Storage (S3)

Docbox currently only supports S3 or S3-compatible storage providers (Such as AWS S3 or MinIO).

| Variable                      | Default         | Description                                                                                                                                                                                                                                 |
| ----------------------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `DOCBOX_S3_ENDPOINT`          | AWS S3 Endpoint | Custom S3 endpoint URL (required for non-AWS setups like MinIO).                                                                                                                                                                            |
| `DOCBOX_S3_EXTERNAL_ENDPOINT` | _None_          | User-facing external endpoint. Essential if the server runs inside a isolated network where the public facing S3 endpoint differs from that which users access, used to generate presigned URLs since the URL cannot be altered once signed |
| `DOCBOX_S3_ACCESS_KEY_ID`     | _None_          | AWS Access Key ID for authentication. (Omit if hosting on AWS as your server should assume its identity automatically)                                                                                                                      |
| `DOCBOX_S3_ACCESS_KEY_SECRET` | _None_          | AWS Secret Access Key for authentication. (Omit if hosting on AWS as your server should assume its identity automatically)                                                                                                                  |

---

## Office Document Converter

Set `DOCBOX_OFFICE_CONVERTER` to either `"server"` (uses a dedicated file conversion server) or `"lambda"` (uses AWS Lambda).

### Lambda Office Converter (`"lambda"`)

| Variable                               | Default  | Description                                                                                   |
| -------------------------------------- | -------- | --------------------------------------------------------------------------------------------- |
| `DOCBOX_CONVERT_LAMBDA_FUNCTION_NAME`  | Required | Name, ARN, version, or alias of the conversion Lambda function to invoke for file conversion. |
| `DOCBOX_CONVERT_LAMBDA_TMP_BUCKET`     | Required | S3 bucket used to pass temporary input/output payloads to Lambda.                             |
| `DOCBOX_CONVERT_LAMBDA_QUALIFIER`      | _None_   | _Optional._ Explicit function version or alias to invoke.                                     |
| `DOCBOX_CONVERT_LAMBDA_TENANT_ID`      | _None_   | _Optional._ Contextual tenant identifier for multi-tenant Lambda routers.                     |
| `DOCBOX_CONVERT_LAMBDA_RETRY_ATTEMPTS` | `3`      | Max retry counts on unexpected function failures.                                             |
| `DOCBOX_CONVERT_LAMBDA_RETRY_WAIT`     | `1` (1s) | Delay duration in seconds between retry iterations.                                           |

### Server Office Converter (`"server"`)

| Variable                          | Default  | Description                                                                                                       |
| --------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------- |
| `DOCBOX_CONVERT_SERVER_ADDRESS`   | Required | Comma-separated string of backend conversion server addresses.                                                    |
| `DOCBOX_CONVERT_SERVER_USE_PROXY` | `false`  | Set to `true` to use system proxy variables (`HTTP_PROXY` / `HTTPS_PROXY`) when routing to the conversion cluster |

---

## File Processing

| Variable                            | Default                       | Description                                                                                                                                                               |
| ----------------------------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `DOCBOX_MAX_FILE_UNPACK_ITERATIONS` | `1` (Only immediate children) | Maximum depth to unpack files to. When unpacking things like email attachments, this limits the number of nested unpacking that can occur to prevent unbounded unpacking. |
| `DOCBOX_FILE_PROCESSING_TIMEOUT`    | `300` (300s)                  | Total time in seconds for document processing tasks before triggering a timeout failure.                                                                                  |

---

## File Creation Notifications

Determines how upload notifications are dispatched across infrastructure pipelines.

| Variable            | Default | Description                                                                                                          |
| ------------------- | ------- | -------------------------------------------------------------------------------------------------------------------- |
| `DOCBOX_MPSC_QUEUE` | `false` | Set to `true` to use a local, memory-based webhook notification loop (typically paired with custom/local S3 setups). |
| `DOCBOX_SQS_URL`    | _None_  | The target AWS SQS queue URL used to consume events (typically paired with AWS S3 infrastructures).                  |
