import type { ReactNode } from "react";
import clsx from "clsx";
import styles from "./UsersSection.module.css";

export default function UsersSection(): ReactNode {
  return (
    <section className={styles.section}>
      <div className={clsx("container", styles.content)}>
        <h2>Who's using Docbox?</h2>
        <div className={clsx("row", styles.brands)}>
          <a href="https://provida.nz">
            <img src="/provida_primary_with_kea.png" width={256} />
          </a>
        </div>
      </div>
    </section>
  );
}
