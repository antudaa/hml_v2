import type { Metadata } from "next";
import { ContactMap } from "@/components/contact/ContactMap";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "CONTACT - HML",
};

export default function ContactPage() {
  return (
    <main className={styles.page}>
      <ContactMap />
    </main>
  );
}
