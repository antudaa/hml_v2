import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";

export function ServicesSection() {
  return (
    <section id="services" className="py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="A cleaner structure for both the UI and the code underneath it."
          description="The homepage is broken into reusable sections and primitive components so new routes can stay consistent without copy-pasting layouts or utility soup."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {siteConfig.services.map((service, index) => (
            <Card
              key={service.title}
              className={cn(
                "relative overflow-hidden border-border/70 bg-card/85 backdrop-blur-sm",
                index === 1 && "lg:-translate-y-4",
              )}
            >
              <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
              <CardHeader className="space-y-4 p-7">
                <span className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                  {service.category}
                </span>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 p-7 pt-0">
                <p className="text-sm leading-7 text-muted-foreground">
                  {service.detail}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
