import type { Metadata } from "next";
import { EngineeringHero } from "@/components/engineering/Hero";
import { EngineeringStandards } from "@/components/engineering/EngineeringStandards";
import { EngineeringWorkGallary } from "@/components/engineering/EngineeringWorkGallary";
import { EngineeringWorkFlow } from "@/components/engineering/WorkFlow";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "ENGINEERING - HML",
};

export default function EngineeringPage() {
  return (
    <main className={styles.page}>
      <EngineeringHero />
      <div className={styles.workflowOffset}>
        <EngineeringWorkFlow />
      </div>
      <EngineeringWorkGallary />
      <EngineeringStandards />
    </main>
  );
}
