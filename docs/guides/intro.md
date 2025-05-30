---
sidebar_position: 1
---

# Introduction


**Docbox** is a modern, multi-tenant file management, processing, and search platform designed to seamlessly integrate into your application. It provides powerful capabilities for securely storing, processing, and retrieving documents.

**Docbox** is designed to run **behind your main service**, where your application acts as a **proxy**, forwarding requests to Docbox **after performing authentication and access control**. This keeps the core service secure and private.

Files, folders, and links are organized into logical groups called **Document Boxes**. Each Document Box is uniquely identified by a **scope string** (e.g. `user:xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx:files`). The scope is embedded directly in the URL (e.g. `/box/user:xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx:files/file/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`), enabling efficient and reliable access control without requiring inspecting requests beyond the request path.
