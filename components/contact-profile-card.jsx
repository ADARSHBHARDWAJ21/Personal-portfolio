import { useState } from 'react'
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { profile } from '@/lib/portfolio-data'

const contactMethods = [
  { title: 'Email', value: profile.email, icon: Mail, href: 'mailto:' + profile.email },
  { title: 'Phone', value: profile.phone, icon: Phone, href: 'tel:' + profile.phone.replace(/\s/g, '') },
  { title: 'Based in', value: profile.location, icon: MapPin },
]

export function ContactProfileCard() {
  const [portraitFailed, setPortraitFailed] = useState(false)

  return (
    <Card aria-label="Contact profile" className="rounded-2xl border-white/10 bg-[#0e151e]/90 text-slate-200">
      <CardContent className="space-y-6">
        <div className="flex items-center gap-4">
          {profile.avatar && !portraitFailed ? (
            <img src={profile.avatar} alt={profile.name} width="64" height="64" loading="lazy" onError={() => setPortraitFailed(true)} className="h-16 w-16 shrink-0 rounded-2xl border border-cyan-300/20 object-cover" />
          ) : (
            <div aria-label={profile.name} className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-xl font-semibold text-cyan-300">AB</div>
          )}
          <div className="min-w-0">
            <h2 className="font-semibold text-white">{profile.name}</h2>
            <p className="mt-1 text-sm text-cyan-300">{profile.title}</p>
          </div>
        </div>
        <p className="text-sm leading-relaxed text-slate-400">I build full-stack web applications and explore machine learning through hands-on projects. I enjoy turning a practical idea into a clear, usable product.</p>
        <div className="space-y-5 border-t border-white/10 pt-6">
          {contactMethods.map(({ title, value, icon: Icon, href }) => (
            <div key={title} className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-300"><Icon aria-hidden="true" className="h-4 w-4" /></div>
              <div className="min-w-0 pt-0.5">
                <p className="mb-1 text-xs text-slate-500">{title}</p>
                {href ? <a href={href} className="break-all rounded text-sm text-slate-200 hover:text-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300">{value}</a> : <p className="text-sm text-slate-200">{value}</p>}
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3 border-t border-white/10 pt-6">
          <Button asChild variant="outline" className="h-11 border-white/10 bg-transparent text-slate-200 hover:border-cyan-300/40 hover:bg-cyan-300/5 hover:text-cyan-300 focus-visible:ring-cyan-300/30">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="Adarsh's GitHub profile (opens in a new tab)"><Github aria-hidden="true" /> GitHub</a>
          </Button>
          <Button asChild variant="outline" className="h-11 border-white/10 bg-transparent text-slate-200 hover:border-cyan-300/40 hover:bg-cyan-300/5 hover:text-cyan-300 focus-visible:ring-cyan-300/30">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Adarsh's LinkedIn profile (opens in a new tab)"><Linkedin aria-hidden="true" /> LinkedIn</a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
