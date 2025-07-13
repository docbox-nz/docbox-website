import type { ReactNode } from "react";
import clsx from "clsx";
import styles from "./GatewaySection.module.css";
import Heading from "@theme/Heading";

export default function GatewaySection(): ReactNode {
  return (
    <section className={styles.section}>
      <div className={clsx("container", styles.feature)}>
        <img
          src="/undraw_server-status_f685.svg"
          height={300}
          alt=""
          className={styles.featureImage}
        />
        <div className={clsx("card", styles.content)}>
          <Heading as="h3">Gateway</Heading>
          <p>
            Gateways sit between your frontend app and Docbox, authenticating
            incoming traffic and enforcing access rules. With Docbox’s
            scope-based document boxes, your server controls exactly what your
            frontend can access. Ensuring secure, precise file management
            without sacrificing flexibility.
            <br />
            <br />
            You can even use your backend as a gateway, docbox provides out of
            the box library support for gateways with <b>HAPI</b>
          </p>
        </div>
      </div>
    </section>
  );
}
