import { notFound } from "next/navigation";
import NewsEventDetailClient from "@/components/news-events/NewsEventDetailClient";
import { siteConfig } from "@/config/site";
import styles from "./page.module.css";

export const dynamicParams = false;

export async function generateStaticParams() {
  return siteConfig.latestNews.items.map((event) => ({ id: event.id }));
}

export default async function NewsEventDetailPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { id } = await params;
  const resolvedSearchParams = await searchParams;
  const event = siteConfig.latestNews.items.find((item) => item.id === id);

  if (!event) {
    return notFound();
  }

  const queryValue = resolvedSearchParams[siteConfig.latestNews.returnQueryKey];
  const backHref = typeof queryValue === "string" && queryValue ? queryValue : "/news-events";

  return (
    <main className={styles.page}>
      <section className={styles.section}>
        <div className={styles.header}>
          <h1 className={styles.heading}>LATEST NEWS</h1>
        </div>

        <div className={styles.board}>
          <div
            className={styles.mapBackdrop}
            style={{ backgroundImage: `url(${siteConfig.latestNews.backgroundImage})` }}
          />

          <div className={styles.boardInner}>
            <NewsEventDetailClient backHref={backHref} event={event} />
          </div>
        </div>
      </section>
    </main>
  );
}
