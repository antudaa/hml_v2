import Image from "next/image";
import Link from "next/link";
import { LinkedInIcon, YouTubeIcon } from "@/components/ui/icons";
import styles from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.socialWrap}>
          <ul className={styles.socialList}>
            <li>
              <a
                aria-label="Visit HML on LinkedIn"
                className={`${styles.socialLink} ${styles.linkedinLink}`}
                href="https://www.linkedin.com/company/hml-korea/"
                rel="noreferrer"
                target="_blank"
              >
                <LinkedInIcon />
              </a>
            </li>
            <li>
              <a
                aria-label="Visit HML on YouTube"
                className={`${styles.socialLink} ${styles.youtubeLink}`}
                href="https://www.youtube.com/@HML-Korea"
                rel="noreferrer"
                target="_blank"
              >
                <YouTubeIcon />
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.copyWrap}>
          <div className={styles.copy}>
            <p>
              11th Floor, Kwanghwamoon Building, 149 Sejong-daero, Jongno-gu,
              Seoul, Republic of Korea 03186
            </p>
            <p>
              TEL: +82-2-752-3400, FAX: +82-2-6280-3402, EMAIL:
              {" "}
              marketing@hi-megaline.com
            </p>
            <p>© {year} HML All rights reserved</p>
          </div>
        </div>

        <div className={styles.brandWrap}>
          <Link
            href="/"
            className={styles.brandLink}
          >
            <Image
              alt="HML logo"
              className={styles.brandImage}
              height={200}
              src="/logo/HML_Logo_White.png"
              width={900}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
