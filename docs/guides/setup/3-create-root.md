# Create Root

Before you can use use docbox you must setup the initial "root" docbox database that will store information about the tenants contained within.

After you've setup your config with the settings relevant to you then you can run the following command:

```
docbox-cli --config cli-config.json create-root
```

The root will be created and you will now be able to create tenants