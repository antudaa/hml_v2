import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/config/site";

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="bg-[linear-gradient(180deg,transparent,hsla(221,83%,53%,0.05)_35%,transparent)] py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Results"
          title="Teams notice the difference when the structure is sound."
          description="These testimonials are placeholder content, but the section is built to scale like the rest of the system."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {siteConfig.testimonials.map((testimonial) => (
            <Card
              key={testimonial.author}
              className="border-border/70 bg-card/90 backdrop-blur-sm"
            >
              <CardHeader className="p-7">
                <p className="font-display text-5xl leading-none text-primary/35">
                  &ldquo;
                </p>
                <p className="mt-4 text-lg leading-8 text-foreground">
                  {testimonial.quote}
                </p>
              </CardHeader>
              <CardContent className="space-y-1 p-7 pt-0">
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <CardDescription>
                  {testimonial.role}, {testimonial.company}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
