import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  GithubIcon,
  GitlabIcon,
  InstagramIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "@/components/icons"
import { profile } from "@/data/portfolio"

const contacts = [
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
  { label: "LinkedIn", href: profile.socials.linkedin, icon: LinkedinIcon },
  { label: "GitHub", href: profile.socials.github, icon: GithubIcon },
  { label: "GitLab", href: profile.socials.gitlab, icon: GitlabIcon },
  { label: "Instagram", href: profile.socials.instagram, icon: InstagramIcon },
  { label: "WhatsApp", href: profile.socials.whatsapp, icon: WhatsappIcon },
]

export function Contact() {
  return (
    <section id="contact" className="border-t bg-muted/40 py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight">Get in touch</h2>
        <p className="mx-auto mt-2 max-w-xl text-muted-foreground">
          Have a project in mind or just want to say hi? Reach out through any
          of these channels.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {contacts.map((contact) => (
            <Button key={contact.label} asChild variant="outline">
              <a
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <contact.icon /> {contact.label}
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}
