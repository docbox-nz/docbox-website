# Configure Docbox

## Environment variables

You will need to create a `.env.production` file in the terraform project root. It should contain the following:

```sh
# Logging configuration
RUST_LOG=debug,docbox_core::notifications::sqs=info

# URL for the office converter server (This should be running on the same server)
CONVERT_SERVER_ADDRESS=http://127.0.0.1:8081

# URL for the SQS queue for notifications of when a new file is created
DOCBOX_SQS_URL={SQS QUEUE ARN}

# Database host and port
POSTGRES_HOST={DATABASE HOST}
POSTGRES_PORT={DATABASE PORT}

# AWS secrets manager key for the root database username and password
DOCBOX_DB_CREDENTIAL_NAME=postgres/docbox/config

# Use the typesense search index
DOCBOX_SEARCH_INDEX_FACTORY=typesense
TYPESENSE_URL={TYPESENSE URL}
TYPESENSE_API_KEY={TYPESENSE API KEY}

# URL for the HTTP proxy server to use for scraping
HTTP_PROXY=http://{PROXY SERVER IP}:3128/
HTTPS_PROXY=http://{PROXY SERVER IP}:3128/

# AWS region for AWS services to use
AWS_REGION=ap-southeast-2
```

## Deploy environment variables

You can then deploy this to the EC2 instance using (Use this anytime you want to upload the env to the EC2 instance)

```sh
sh ./scripts/deploy.sh --env
```