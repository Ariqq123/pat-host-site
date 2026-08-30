import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { DISCORD_INVITE, PANEL_URL } from '../data'
import { FlagUK, FlagUS } from './Flag'

const links = [
  { to: '/', label: 'Home', hash: '' },
  { to: '/#plans', label: 'Plans', hash: 'plans' },
  { to: '/#custom', label: 'Custom', hash: 'custom' },
  { to: '/#regions', label: 'Regions', hash: 'regions' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2.5">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <img src="/logo.png?v=2" alt="Pat Host" className="h-16 w-auto object-contain sm:h-[4.5rem]" />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const onHome = location.pathname === '/'
            const active = link.hash
              ? onHome && location.hash === `#${link.hash}`
              : onHome && !location.hash
            return (
              <Link
                key={link.label}
                to={link.to}
                className={`rounded-full px-3.5 py-1.5 text-sm font-semibold transition ${
                  active
                    ? 'bg-mint text-ink'
                    : 'text-muted hover:bg-soft hover:text-ink'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <span className="inline-flex items-center gap-1.5" title="EU United Kingdom · NA USA Texas">
            <FlagUK className="h-4 w-6" />
            <FlagUS className="h-4 w-6" />
          </span>
          <a
            href={DISCORD_INVITE}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-muted hover:text-ink"
          >
            Discord
          </a>
          <a
            href={PANEL_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#22c55e] px-4 py-2 text-sm font-bold text-white glow-btn"
          >
            Claim Free
          </a>
        </div>

        <button
          type="button"
          className="rounded-lg border border-line p-2 text-ink md:hidden"
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-0.5 w-5 bg-ink" />
          <span className="mt-1 block h-0.5 w-5 bg-ink" />
          <span className="mt-1 block h-0.5 w-5 bg-ink" />
        </button>
      </div>

      {open ? (
        <div className="border-t border-line px-4 py-3 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-muted"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={PANEL_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-2 rounded-full bg-[#22c55e] px-4 py-2 text-center text-sm font-bold text-white"
            >
              Claim Free Server
            </a>
          </div>
        </div>
      ) : null}
    </header>
  )
}
