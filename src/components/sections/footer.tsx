import { Separator } from "@/components/ui/separator"
import { profile } from "@/data/portfolio"

export function Footer() {
  return (
    <footer className="py-8">
      <div className="mx-auto max-w-5xl px-4">
        <Separator className="mb-6" />
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}.
        </p>
      </div>
    </footer>
  )
}
