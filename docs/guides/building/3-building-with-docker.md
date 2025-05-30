# Building with docker

## Build image

Build the builder docker container image:

```
docker build -t docbox-builder -f containers/BuildDocbox.Dockerfile .
```

## Create container

Create a docker container for the builder:

```
docker create --name docbox-builder docbox-builder
```

## Copy built binary

Copy the built binary out of the builder container:

```
docker cp docbox-builder:/app/target/x86_64-unknown-linux-musl/release/docbox ./docbox
```

## Cleanup

Remove the builder container:

```
docker rm docbox-builder
```

You now have the server binary at `./docbox`