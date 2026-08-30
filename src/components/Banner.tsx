import { useState } from 'react'
import { DISCORD_INVITE } from '../data'
import { CloseIcon, DiscordIcon } from './Icons'

export function Banner() {
  const [open, setOpen] = useState(true)
  if (!open) return null

  return (
    <div className="relative z-50 bg-[#14532d] px-4 py-2.5 text-sm text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-3 pr-8">
        <DiscordIcon className="hidden h-5 w-5 shrink-0 sm:block" />
        <p className="text-center font-medium">
          Join our Discord for support, updates, and billing tickets.
        </p>
        <a
          href={DISCORD_INVITE}
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-full bg-white px-3 py-1 text-xs font-bold text-[#14532d] sm:inline-flex"
        >
          Join Now
        </a>
        <button
          type="button"
          aria-label="Dismiss banner"
          onClick={() => setOpen(false)}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-white/80 hover:bg-white/10 hover:text-white"
        >
          <CloseIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
