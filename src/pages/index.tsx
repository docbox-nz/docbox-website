import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
// import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <div className={styles.headingSplit}>
          <div>
            <Heading as="h1" className="hero__title">
              <span className={styles.srOnly}> {siteConfig.title}</span>

              <img src="/logo.svg" />
            </Heading>

            <p className={clsx("hero__subtitle", styles.heroSubtitle)}>
              {siteConfig.tagline}
            </p>

            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="/docs/guides/intro"
              >
                Getting Started
              </Link>

              <Link
                className="button button--secondary button--lg"
                to="/docs/api/docbox"
              >
                API
              </Link>
            </div>
          </div>

          <div>
            <div className={styles.docArea}>
              <img
                src="/ppt.svg"
                width={92}
                height={92}
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  transform: "rotate(-30deg)",
                }}
              />
              <img
                src="/pdf.svg"
                width={92}
                height={92}
                style={{
                  position: "absolute",
                  left: 55,
                  top: 55,
                  transform: "rotate(20deg)",
                }}
              />
              <img
                src="/txt.svg"
                width={92}
                height={92}
                style={{
                  position: "absolute",
                  right: 0,
                  top: 0,
                  transform: "rotate(30deg)",
                }}
              />
              <img
                src="/video.svg"
                width={92}
                height={92}
                style={{
                  position: "absolute",
                  left: 50,
                  top: 120,
                  transform: "rotate(-45deg)",
                }}
              />
              <img
                src="/xls.svg"
                width={92}
                height={92}
                style={{
                  position: "absolute",
                  left: 135,
                  top: 75,
                  transform: "rotate(-35deg)",
                }}
              />
              <img
                src="/image.svg"
                width={92}
                height={92}
                style={{
                  position: "absolute",
                  left: 150,
                  top: 0,
                  transform: "rotate(30deg)",
                }}
              />

              <img
                src="/document.svg"
                width={92}
                height={92}
                style={{
                  position: "absolute",
                  left: 75,
                  top: -50,
                  transform: "rotate(-10deg)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="File management and processing solution"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
