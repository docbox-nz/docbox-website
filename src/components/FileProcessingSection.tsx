import type { ReactNode } from "react";
import clsx from "clsx";
import styles from "./FileProcessingSection.module.css";
import Heading from "@theme/Heading";

export default function FileProcessingSection(): ReactNode {
  return (
    <section className={styles.section}>
      <div className={clsx("container", styles.feature)}>
        <img
          src="/undraw_my-files_yynz.svg"
          height={300}
          alt=""
          className={styles.featureImage}
        />
        <div className={clsx("card", styles.content)}>
          <Heading as="h3">File Processing</Heading>
          <p style={{ marginBottom: "1rem" }}>
            <b>Docbox</b> has powerful file processing capabilities it can
            handle all sorts of files. Integrations with software like{" "}
            <b>LibreOffice</b> and <b>Poppler</b> allows <b>Docbox</b> to handle
            many different formats such as:
          </p>

          <ul>
            <li>
              Office Documents{" "}
              <span className={styles.fileTypes}>
                (.doc, .docx, .dot, .dotm. dotx, .ods, .odt)
              </span>
            </li>
            <li>
              Spreadsheets{" "}
              <span className={styles.fileTypes}>
                (.xls, .xlsb, .xlsm, .xlsx, .xlt, .xltm, .xltx)
              </span>
            </li>
            <li>
              Image Files{" "}
              <span className={styles.fileTypes}>
                (.gif, .ico, .jpg, .png, .tif, .webp)
              </span>
            </li>

            <li>
              PDF Files <span className={styles.fileTypes}>(.pdf)</span>
            </li>

            <li>
              Email Files <span className={styles.fileTypes}>(.eml)</span>
            </li>
          </ul>

          <p style={{ marginBottom: "0.5rem" }}>
            With this file processing you get access to the following
          </p>
          <ul>
            <li>Extracted text and HTML content from files</li>
            <li>Thumbnail images</li>
            <li>Full-text search over file contents</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
