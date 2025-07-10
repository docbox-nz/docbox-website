import type { ReactNode } from "react";
import clsx from "clsx";
import styles from "./ScopingSection.module.css";

export default function ScopingSection(): ReactNode {
  return (
    <section className={styles.section}>
      <div className={clsx("container", styles.feature)}>
        <img src="/undraw_file-analysis_dg81.svg" height={300} alt="" />
        <div className={clsx("card", styles.content)}>
          <h1>Document Box Scopes</h1>
          <p>
            Document box scopes are a concept for organizing collections and
            allows easy separation and access control over files by dividing
            content into scopes.
            <br />
            See an example scope below:
          </p>
          <pre>
            <code>user:xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx:files</code>
          </pre>
          This scope can be used to represent files that belong to a specific
          user. Scopes are provided in the URL when querying docbox which makes
          it quick and easy to check access control rules without having to
          inspect the payload itself.
        </div>
      </div>
    </section>
  );
}
