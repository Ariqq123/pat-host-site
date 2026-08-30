import { DISCORD_INVITE, PANEL_URL } from '../data'
import { FlagUK } from './Flag'
import { ArrowIcon, DiscordIcon } from './Icons'

export function ClaimFree() {
  return (
    <section id="free" className="px-4 pb-20">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-[#22c55e] bg-[#14532d] px-6 py-12 text-center md:px-12">
        <h2 className="font-display text-3xl font-extrabold text-white md:text-5xl">
          Ready to <span className="text-[#86efac]">Start?</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-emerald-100">
          Claim a free 4GB server in the United Kingdom, or get a 24/7 plan
          in Discord and pay with PayPal or Cash App.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={PANEL_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#22c55e] px-8 py-4 text-base font-bold text-white glow-btn"
          >
            Claim free server
            <ArrowIcon className="h-5 w-5" />
          </a>
          <a
            href={DISCORD_INVITE}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-base font-bold text-white"
          >
            <DiscordIcon className="h-5 w-5" />
            Join Discord
          </a>
        </div>
        <p className="mt-4 inline-flex items-center gap-2 text-xs text-emerald-100/80">
          <FlagUK className="h-3.5 w-5" />
          Free servers · United Kingdom only
        </p>
      </div>
    </section>
  )
}

export function StickyClaim() {
  return (
    <div className="sticky bottom-0 z-30 border-t border-line bg-paper/90 px-4 py-3 backdrop-blur-xl md:hidden">
      <a
        href={PANEL_URL}
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center gap-2 rounded-full bg-[#22c55e] py-3 text-sm font-bold text-white"
      >
        Claim free server
        <ArrowIcon className="h-4 w-4" />
      </a>
    </div>
  )
}
