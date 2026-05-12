import Image from "next/image";
import { siteConfig } from "@/config/site";
import styles from "./ContactMap.module.css";

const inquiriesEmail = "marketing@hi-megaline.com";
const generalEmail = "am@hi-megaline.com";
const backgroundImage = "/contact/ContactPageMapBackground.jpg";

export function ContactMap() {
  return (
    <section className={styles.section}>
      <div className={styles.visualArea}>
        <Image
          alt="Marine themed background"
          className={styles.background}
          fill
          priority
          sizes="100vw"
          src={backgroundImage}
        />

        <div className={styles.overlay} />

        <div className={styles.content}>
          <div className={styles.headingBlock}>
            <h1 className={styles.heading}>
              <span className={styles.headingPrimary}>CONTACT</span>
              <span className={styles.headingSecondary}>US</span>
            </h1>
          </div>

          <div className={styles.mapPanel}>
            <div className={styles.contactRow}>
              <div className={styles.contactGroup}>
                <h2 className={styles.contactTitle}>INQUIRIES</h2>
                <p className={styles.contactEmail}>{inquiriesEmail}</p>
              </div>

              <span aria-hidden="true" className={styles.divider} />

              <div className={styles.contactGroup}>
                <h2 className={styles.contactTitle}>GENERAL</h2>
                <p className={styles.contactEmail}>{generalEmail}</p>
              </div>
            </div>

            <div className={styles.mapWrap}>
              <iframe
                allowFullScreen
                className={styles.mapFrame}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.379539986823!2d126.97372037629692!3d37.56967952394705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2ecd7b19257%3A0x22375d9684014ab!2s11%20f%2C%20149%20Sejong-daero%2C%20Jongno%20District%2C%20Seoul%2C%20South%20Korea!5e0!3m2!1sen!2sbd!4v1747040612735!5m2!1sen!2sbd"
                title="Our Location"
              />
            </div>

            <p className={styles.address}>{siteConfig.contact.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
