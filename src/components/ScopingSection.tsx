import type { ReactNode } from "react";
import clsx from "clsx";
import styles from "./ScopingSection.module.css";
import Heading from "@theme/Heading";

export default function ScopingSection(): ReactNode {
  return (
    <section className={styles.section}>
      <div className={clsx("container", styles.feature)}>
        <img
          src="/undraw_file-analysis_dg81.svg"
          height={300}
          alt=""
          className={styles.featureImage}
        />
        <div className={clsx("card", styles.content)}>
          <Heading as="h3">Document Box Scopes</Heading>

          <p>
            Document box scopes are a concept for organizing collections and
            allows easy separation and access control over files by dividing
            content into scopes.
            <br />
            See an example scope below:
          </p>
          <code className={styles.exampleScope}>
            user:xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx:files
          </code>
          <p>
            This scope can be used to represent files that belong to a specific
            user. Scopes are provided in the URL when querying docbox which
            makes it quick and easy to check access control rules without having
            to inspect the payload itself.
          </p>
        </div>
      </div>
    </section>
  );
}
