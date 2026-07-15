import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { skillGroups } from "@/data/portfolio"
import { Server, MonitorSmartphone, Database, Container } from "lucide-react"

const icons = [Server, MonitorSmartphone, Database, Container]

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-4 py-16 md:py-24">
      <h2 className="text-3xl font-bold tracking-tight">Skills</h2>
      <p className="mt-2 text-muted-foreground">
        Technologies I work with daily to ship reliable software.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group, i) => {
          const Icon = icons[i % icons.length]
          return (
            <Card key={group.title}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon className="size-5 text-muted-foreground" />
                  {group.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
