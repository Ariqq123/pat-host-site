import { DISCORD_INVITE } from '../data'
import { ArrowIcon } from './Icons'

export function Features() {
  const items = [
    {
      icon: 'cpu',
      title: 'Premium hardware & free tier',
      body: 'Start on 4GB RAM, 100% CPU, and 8GB storage for free in the UK. Paid plans stay 24/7 in the United Kingdom and USA Texas.',
    },
    {
      icon: 'bolt',
      title: 'Instant setup',
      body: 'Claim a free server from the panel in under a minute. Paid plans go live after a Billing ticket in Discord — PayPal or Cash App.',
    },
    {
      icon: 'shield',
      title: '24/7 Discord support',
      body: 'Open #tickets for billing and help. Expert support around the clock on Discord.',
    },
  ]

  return (
    <section id="why" className="px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-extrabold text-ink">
            Why choose <span className="text-[#16a34a]">Pat Host?</span>
          </h2>
          <p className="mt-3 text-muted">
            Free 4GB in the UK, 24/7 paid plans in EU and NA, and custom RAM, storage, and CPU.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {items.map((item) => (
            <article key={item.title} className="rounded-2xl border border-line bg-paper p-6">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-400/10 text-[#16a34a]">
                {item.icon === 'cpu' ? <CpuIcon /> : item.icon === 'bolt' ? <BoltIcon /> : <ShieldIcon />}
              </span>
              <h3 className="font-display mt-4 text-lg font-bold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function BuySteps() {
  return (
    <section id="buy" className="scroll-mt-28 px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#16a34a]">
            How paid orders work
          </p>
          <h2 className="font-display mt-3 text-4xl font-extrabold text-ink">
            Open Discord, then a ticket
          </h2>
          <p className="mt-3 text-muted">You can pay with PayPal or Cash App.</p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            ['01', 'Join Discord', 'Every paid order is fulfilled in our Discord.'],
            ['02', 'Open #tickets', 'Open a ticket in the Billing category.'],
            ['03', 'Send your plan', 'Tell us the plan and region. Pay with PayPal or Cash App.'],
            ['04', 'Get online', 'We spin up your 24/7 server in the UK or USA Texas.'],
          ].map(([n, title, body]) => (
            <article key={n} className="rounded-2xl border border-line p-5">
              <p className="font-display text-sm font-bold text-[#16a34a]">{n}</p>
              <h3 className="mt-2 text-lg font-bold text-ink">{title}</h3>
              <p className="mt-2 text-sm text-muted">{body}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a
            href={DISCORD_INVITE}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#16a34a] hover:text-ink"
          >
            Open Discord
            <ArrowIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

function CpuIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4" strokeLinecap="round" />
    </svg>
  )
}

function BoltIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13 2 4 14h7l-1 8 10-14h-7l0-6z" />
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 3 5 6v6c0 5 3.5 8 7 9 3.5-1 7-4 7-9V6z" />
    </svg>
  )
}
