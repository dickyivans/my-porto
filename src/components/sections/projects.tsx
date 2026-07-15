import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { CheckCircle2, ExternalLink, Wrench } from "lucide-react"
import { featuredProject, projects } from "@/data/portfolio"

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-4 py-16 md:py-24">
      <h2 className="text-3xl font-bold tracking-tight">
        What I'm working on
      </h2>
      <p className="mt-2 text-muted-foreground">
        Recent work — from a multi-platform HR system to government data
        platforms.
      </p>

      <Card className="mt-8">
        <CardHeader>
          <div className="flex flex-wrap items-start justify-between gap-2">
            <CardTitle className="text-xl md:text-2xl">
              {featuredProject.name}
            </CardTitle>
            <Badge>Latest project</Badge>
          </div>
          <CardDescription className="text-base">
            {featuredProject.tagline}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-sm text-muted-foreground">
            {featuredProject.overview}
          </p>
          <p className="text-sm italic text-muted-foreground">
            {featuredProject.role}
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="mb-3 flex items-center gap-2 font-semibold">
                <CheckCircle2 className="size-4 text-muted-foreground" />
                Key features
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                {featuredProject.features.map((feature) => (
                  <li key={feature.slice(0, 32)}>{feature}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-3 flex items-center gap-2 font-semibold">
                <Wrench className="size-4 text-muted-foreground" />
                Technical highlights
              </h3>
              <div className="space-y-3">
                {featuredProject.challenges.map((challenge) => (
                  <div key={challenge.title} className="text-sm">
                    <p className="font-medium">{challenge.title}</p>
                    <p className="mt-1 text-muted-foreground">
                      {challenge.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Separator />
          <div className="flex flex-wrap gap-2">
            {featuredProject.stack.map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <h3 className="mt-12 text-xl font-semibold">
        Government projects · Diskominfo Kabupaten Sanggau
      </h3>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.name} className="flex flex-col">
            <CardHeader>
              <div className="flex items-start justify-between gap-2">
                <CardTitle className="text-lg">{project.name}</CardTitle>
                <Badge
                  variant={project.status === "Ongoing" ? "default" : "secondary"}
                >
                  {project.status}
                </Badge>
              </div>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="mt-auto space-y-3">
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium underline-offset-4 hover:underline"
                >
                  <ExternalLink className="size-4" />
                  {project.url.replace("https://", "")}
                </a>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
