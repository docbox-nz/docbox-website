import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/docbox-api",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "api/create-tenant",
          label: "Create a tenant",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-tenant",
          label: "Get a tenant",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/search-tenant",
          label: "Search within a tenant",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/admin-flush-database-cache",
          label: "Flush database cache",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/admin-purge-expired-presigned-tasks",
          label: "Flush database cache",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/create-document-box",
          label: "Create a document box",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-document-box",
          label: "Get a document box",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/delete-document-box",
          label: "Delete a document box",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/get-document-box-stats",
          label: "Get a document box file count stats",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/search-document-box",
          label: "Search within a document box",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/create-folder",
          label: "Create a folder",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-folder",
          label: "Get a folder",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/update-folder",
          label: "Update a folder",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/delete-folder",
          label: "Delete a folder",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/get-folder-edit-history",
          label: "Get folder edit history",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-task-state",
          label: "Get task state",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/upload-file",
          label: "Upload a file",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/create-presigned",
          label: "Create a presigned upload",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-presigned",
          label: "Get a presigned upload",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-file",
          label: "Get a file",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/update-file",
          label: "Update a file",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/delete-file",
          label: "Delete a file",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/get-raw-file",
          label: "Get raw file content",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-file-edit-history",
          label: "Get file edit history",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-generated-file",
          label: "Get generated file details",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-raw-generated-file",
          label: "Get raw generated file content",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/create-link",
          label: "Create a link",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-link",
          label: "Get a link",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/update-link",
          label: "Update a link",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/delete-link",
          label: "Delete a link",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/get-link-metadata",
          label: "Get link metadata",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-link-favicon",
          label: "Get link favicon",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-link-image",
          label: "Get link image",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-link-edit-history",
          label: "Get link edit history",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
