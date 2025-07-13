import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
// import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import { useColorMode } from "@docusaurus/theme-common";

import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";
import ScopingSection from "../components/ScopingSection";
import GatewaySection from "../components/GatewaySection";
import FileProcessingSection from "../components/FileProcessingSection";
import UsersSection from "../components/UsersSection";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const { colorMode } = useColorMode();

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <div className={styles.headingSplit}>
          <div>
            <Heading as="h1" className="hero__title">
              <span className={styles.srOnly}> {siteConfig.title}</span>

              <img
                src={
                  colorMode === "dark" ? "/logo-light.svg" : "/logo-dark.svg"
                }
                width={480}
                className={styles.logo}
              />
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

          <div className={styles.heroRight}>
            <div className={styles.docArea}>
              {/* Central icon (anchor) */}
              <img
                src="/document.svg"
                width={92}
                height={92}
                style={{
                  position: "absolute",
                  left: "34.67%",
                  top: "34.67%",
                  zIndex: 3,
                  transform: "rotate(-5deg)",
                }}
              />

              {/* Top Left */}
              <img
                src="/ppt.svg"
                width={92}
                height={92}
                style={{
                  position: "absolute",
                  left: "13.33%",
                  top: "5%",
                  zIndex: 2,
                  transform: "rotate(-25deg)",
                }}
              />

              {/* Top Right */}
              <img
                src="/pdf.svg"
                width={92}
                height={92}
                style={{
                  position: "absolute",
                  left: "56.67%",
                  top: "5%",
                  zIndex: 2,
                  transform: "rotate(15deg)",
                }}
              />

              {/* Bottom Left */}
              <img
                src="/video.svg"
                width={92}
                height={92}
                style={{
                  position: "absolute",
                  left: "16.67%",
                  top: "63.33%",
                  zIndex: 1,
                  transform: "rotate(-40deg)",
                }}
              />

              {/* Bottom Right */}
              <img
                src="/xls.svg"
                width={92}
                height={92}
                style={{
                  position: "absolute",
                  left: "60%",
                  top: "63.33%",
                  zIndex: 1,
                  transform: "rotate(25deg)",
                }}
              />

              {/* Middle Left */}
              <img
                src="/txt.svg"
                width={92}
                height={92}
                style={{
                  position: "absolute",
                  left: "3.33%",
                  top: "33.33%",
                  zIndex: 2,
                  transform: "rotate(-10deg)",
                }}
              />

              {/* Middle Right */}
              <img
                src="/image.svg"
                width={92}
                height={92}
                style={{
                  position: "absolute",
                  left: "66.67%",
                  top: "30%",
                  zIndex: 2,
                  transform: "rotate(10deg)",
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

        <FileProcessingSection />
        <ScopingSection />

        <GatewaySection />
        <UsersSection />
      </main>
    </Layout>
  );
}
