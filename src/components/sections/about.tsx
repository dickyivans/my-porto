import { profile } from "@/data/portfolio"

export function About() {
  return (
    <section id="about" className="border-t bg-muted/40 py-16 md:py-24">
      <div className="mx-auto grid max-w-5xl gap-8 px-4 md:grid-cols-[1fr_2fr]">
        <h2 className="text-3xl font-bold tracking-tight">Who am I</h2>
        <div className="space-y-4 text-muted-foreground">
          {profile.about.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
