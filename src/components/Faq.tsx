import { useState } from 'react'
import { FlagUK, FlagUS } from './Flag'

const FAQS = [
  {
    q: 'How quickly can I get my server running?',
    a: 'Free servers go live from the panel in under a minute. Paid plans start after you open a Billing ticket in Discord.',
  },
  {
    q: 'What’s the difference between free and paid servers?',
    a: 'Free is 4GB RAM, 100% CPU, 8GB storage, EU (United Kingdom) only. Paid plans are 24/7 in both the United Kingdom and USA Texas.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'You can pay with PayPal or Cash App. Open #tickets → Billing in Discord and we will take it from there.',
  },
  {
    q: 'Can I install mods and plugins?',
    a: 'Yes. Paid and custom plans are built for plugins, modpacks, and networks. Tell us what you need in the Billing ticket.',
  },
  {
    q: 'Can I upgrade or downgrade later?',
    a: 'Yes. Open a Billing ticket with the plan you want next — Dirt through Netherite, or a custom RAM / storage / CPU mix.',
  },
  {
    q: 'Where are the servers located?',
    a: 'EU servers are in the United Kingdom. NA servers are in USA Texas. Free servers are UK only.',
  },
]

export function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="scroll-mt-28 px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#16a34a]">FAQ</p>
          <h2 className="font-display mt-3 text-4xl font-extrabold text-ink">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-muted">Everything you need to know about Pat Host.</p>
        </div>
        <div className="mt-10 grid gap-3 md:grid-cols-2">
          {FAQS.map((item, i) => {
            const expanded = open === i
            return (
              <button
                key={item.q}
                type="button"
                onClick={() => setOpen(expanded ? -1 : i)}
                className="rounded-2xl border border-line bg-paper p-5 text-left"
              >
                <span className="flex items-start justify-between gap-3">
                  <span className="font-semibold text-ink">{item.q}</span>
                  <span className="text-[#16a34a]">{expanded ? '−' : '+'}</span>
                </span>
                {expanded ? (
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.a}</p>
                ) : null}
              </button>
            )
          })}
        </div>
        <p className="mt-6 flex items-center justify-center gap-2 text-sm text-faint">
          <FlagUK className="h-3.5 w-5" />
          United Kingdom
          <FlagUS className="h-3.5 w-5" />
          USA Texas
        </p>
      </div>
    </section>
  )
}
