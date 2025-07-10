import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./HomepageFeatures.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Multi-Tenant",
    Svg: require("@site/static/undraw_factory_4d61.svg").default,
    description: (
      <>
        Designed from the ground up for multi-tenancy, prioritizing strict
        separation and robust security.
      </>
    ),
  },
  {
    title: "Open Source",
    Svg: require("@site/static/undraw_open-source_g069.svg").default,
    description: (
      <>
        Docbox is fully open source under the MIT license, allowing anyone to
        freely self-host and modify it.
      </>
    ),
  },
  {
    title: "Performant & Reliable",
    Svg: require("@site/static/undraw_powerful_e1sw.svg").default,
    description: (
      <>
        Powered by the Rust language at its core, the server is performant out
        of the box, with Rust’s guarantees further cementing its reliability.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
