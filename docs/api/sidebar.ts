import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/docbox-api",
    },
    {
      type: "category",
      label: "Document Box",
      link: {
        type: "doc",
        id: "api/document-box",
      },
      items: [
        {
          type: "doc",
          id: "api/document-box-create",
          label: "Create document box",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/document-box-get",
          label: "Get document box by scope",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/document-box-delete",
          label: "Delete document box by scope",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/document-box-search",
          label: "Search document box",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/document-box-stats",
          label: "Get document box stats by scope",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "File",
      link: {
        type: "doc",
        id: "api/file",
      },
      items: [
        {
          type: "doc",
          id: "api/file-upload",
          label: "Upload file",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/file-create-presigned",
          label: "Create presigned file upload",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/file-get-presigned",
          label: "Get presigned file upload",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/file-get",
          label: "Get file by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/file-update",
          label: "Update file",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/file-delete",
          label: "Delete file by ID",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/file-get-children",
          label: "Get file children",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/file-edit-history",
          label: "Get file edit history",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/file-get-generated",
          label: "Get generated file",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/file-get-generated-raw",
          label: "Get generated file raw",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/file-get-raw",
          label: "Get file raw",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/file-search",
          label: "Search",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Link",
      link: {
        type: "doc",
        id: "api/link",
      },
      items: [
        {
          type: "doc",
          id: "api/link-create",
          label: "Create link",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/link-get",
          label: "Get link by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/link-update",
          label: "Update link",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/link-delete",
          label: "Delete a link by ID",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/link-get-edit-history",
          label: "Get link edit history",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/link-get-favicon",
          label: "Get link favicon",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/link-get-image",
          label: "Get link social image",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/link-get-metadata",
          label: "Get link website metadata",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Folder",
      link: {
        type: "doc",
        id: "api/folder",
      },
      items: [
        {
          type: "doc",
          id: "api/folder-create",
          label: "Create folder",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/folder-get",
          label: "Get folder by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/folder-update",
          label: "Update folder",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/folder-delete",
          label: "Delete a folder by ID",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/folder-edit-history",
          label: "Get folder edit history",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Task",
      link: {
        type: "doc",
        id: "api/task",
      },
      items: [
        {
          type: "doc",
          id: "api/task-get",
          label: "Get task by ID",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Admin",
      link: {
        type: "doc",
        id: "api/admin",
      },
      items: [
        {
          type: "doc",
          id: "api/admin-flush-database-pool-cache",
          label: "Flush database cache",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/admin-purge-expired-presigned-tasks",
          label: "Purge Presigned Tasks",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/admin-search-tenant",
          label: "Admin Search",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Utils",
      link: {
        type: "doc",
        id: "api/utils",
      },
      items: [
        {
          type: "doc",
          id: "api/options",
          label: "Get options",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
