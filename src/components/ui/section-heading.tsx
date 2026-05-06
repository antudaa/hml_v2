import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  align?: "left" | "center";
  description: string;
  eyebrow?: string;
  title: string;
};

export function SectionHeading({
  align = "left",
  description,
  eyebrow,
  title,
}: SectionHeadingProps) {
  return (
    <div
      className={cn("max-w-2xl space-y-4", align === "center" && "mx-auto text-center")}
    >
      {eyebrow ? (
        <span className="inline-flex rounded-full border border-primary/15 bg-primary/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
          {eyebrow}
        </span>
      ) : null}
      <div className="space-y-3">
        <h2 className="font-display text-4xl leading-tight tracking-tight text-foreground sm:text-5xl">
          {title}
        </h2>
        <p className="text-base leading-8 text-muted-foreground sm:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
}
