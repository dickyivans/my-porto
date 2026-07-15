import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { profile } from "@/data/portfolio"
import photo from "@/assets/profile.jpg"

export function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-20 text-center md:py-28">
      <div className="flex justify-center">
        <img
          src={photo}
          alt={profile.name}
          className="size-36 rounded-full border-4 border-border object-cover shadow-lg md:size-44"
        />
      </div>
      <Badge variant="secondary" className="mt-8">
        Available for new opportunities
      </Badge>
      <h2 className="mt-4 text-lg font-medium text-muted-foreground">
        {profile.name}
      </h2>
      <h1 className="mt-2 text-4xl font-extrabold tracking-tight md:text-6xl">
        {profile.role}
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
        {profile.tagline}
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Button asChild size="lg">
          <a href="#contact">
            <Mail /> Contact me
          </a>
        </Button>
      </div>
    </section>
  )
}
