import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { experiences } from "@/data/portfolio"

export function Experience() {
  return (
    <section id="experience" className="border-t bg-muted/40 py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
        <p className="mt-2 text-muted-foreground">
          5+ years across government, fintech, healthcare, and environmental
          sectors.
        </p>
        <div className="mt-8 space-y-6">
          {experiences.map((exp) => (
            <Card key={exp.company}>
              <CardHeader>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <CardTitle className="text-xl">{exp.company}</CardTitle>
                  <div className="flex items-center gap-2">
                    {exp.current && <Badge>Current</Badge>}
                    <span className="text-sm text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>
                </div>
                <CardDescription>
                  {exp.role} · {exp.location}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm italic text-muted-foreground">
                  {exp.description}
                </p>
                <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                  {exp.highlights.map((item) => (
                    <li key={item.slice(0, 32)}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
