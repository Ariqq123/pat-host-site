import { Link } from 'react-router-dom'
import { DISCORD_INVITE, PANEL_URL } from '../data'
import { FlagUK } from './Flag'
import { ArrowIcon, DiscordIcon } from './Icons'

export function Hero() {
  return (
    <section className="hero-scene relative overflow-hidden">
      <div className="grid-fade pointer-events-none absolute inset-0 opacity-80" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-14 md:grid-cols-[1.15fr_0.85fr] md:pb-24 md:pt-20">
        <div className="text-center md:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-3 py-1.5 text-sm font-semibold text-ink">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22c55e] opacity-70" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#22c55e]" />
            </span>
            Free 4GB servers online ·{' '}
            <FlagUK className="h-3.5 w-5" />
            EU UK
          </div>

          <h1 className="font-display mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-ink md:text-7xl">
            Minecraft Servers{' '}
            <span className="text-[#22c55e]">That Are Just Good</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted md:mx-0">
            Claim a free 4GB RAM server with 100% CPU and 8GB storage — EU only,
            no ads. Paid plans stay 24/7 in the UK and USA Texas, from Dirt to
            Netherite.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <a
              href={PANEL_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#22c55e] px-6 py-3.5 text-sm font-bold text-white glow-btn"
            >
              Create free server
              <ArrowIcon className="h-4 w-4" />
            </a>
            <a
              href={DISCORD_INVITE}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-6 py-3.5 text-sm font-bold text-ink hover:border-[#22c55e]"
            >
              <DiscordIcon className="h-5 w-5 text-[#5865F2]" />
              Join Discord
            </a>
          </div>
          <Link
            to="/#plans"
            className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#16a34a] hover:text-ink"
          >
            View paid plans
            <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="glass relative rounded-3xl p-6">
            <img src="/logo.png?v=2" alt="Pat Host" className="mx-auto h-56 w-auto object-contain" />
            <div className="mt-5 grid grid-cols-3 gap-2 text-center text-xs">
              <Mini k="RAM" v="4 GB" />
              <Mini k="CPU" v="100%" />
              <Mini k="Disk" v="8 GB" />
            </div>
            <p className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-mint px-3 py-2 text-sm font-semibold text-ink">
              <FlagUK className="h-3.5 w-5" />
              Free tier · United Kingdom only
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Mini({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-xl bg-mint px-2 py-3">
      <p className="text-faint">{k}</p>
      <p className="mt-1 font-bold text-ink">{v}</p>
    </div>
  )
}
