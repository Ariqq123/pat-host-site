import type { ReactNode } from 'react'
import { PLANS, DISCORD_INVITE, type Plan } from '../data'
import { FlagUK, FlagUS } from './Flag'
import { CheckIcon } from './Icons'

export function Plans() {
  return (
    <section id="plans" className="scroll-mt-28 px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#16a34a]">Paid servers</p>
          <h2 className="font-display mt-3 text-4xl font-extrabold tracking-tight text-ink md:text-5xl">
            Minecraft Server <span className="text-[#22c55e]">Hosting Plans</span>
          </h2>
          <p className="mt-3 text-muted">
            Every paid plan includes 24/7 uptime in EU (UK) and NA (Texas) — same
            price in both regions. You can pay with PayPal or Cash App.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {PLANS.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  )
}

function PlanCard({ plan }: { plan: Plan }) {
  const featured = plan.id === 'obsidian' || plan.id === 'dirt'

  return (
    <article
      className={`plan-card relative flex flex-col rounded-2xl border bg-paper p-5 transition duration-300 hover:-translate-y-1 ${
        featured
          ? 'border-[#22c55e] shadow-[0_10px_30px_rgba(34,197,94,0.12)]'
          : 'border-line hover:border-[#22c55e]'
      }`}
    >
      {plan.tag ? (
        <span
          className={`mb-3 inline-flex w-fit max-w-full whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-bold uppercase leading-tight tracking-wide ${
            plan.id === 'dirt' || plan.id === 'obsidian'
              ? 'bg-[#22c55e] text-white'
              : 'text-ink'
          }`}
          style={
            plan.id === 'dirt' || plan.id === 'obsidian' ? undefined : { background: plan.accent }
          }
        >
          {plan.tag}
        </span>
      ) : (
        <span className="mb-3 h-[26px]" />
      )}

      <div className="mb-4 grid place-items-center rounded-2xl bg-[#14532d]">
        <img
          src={plan.image}
          alt={`${plan.name} block`}
          className="plan-block h-28 w-28 object-contain sm:h-32 sm:w-32"
        />
      </div>
      <h3 className="font-display text-2xl font-bold text-ink">{plan.name}</h3>
      <p className="mt-1 text-sm text-faint">{plan.note}</p>
      <p className="mt-4 flex items-end gap-1">
        <span className="font-display text-4xl font-extrabold text-ink">
          ${plan.price.toFixed(2)}
        </span>
        <span className="mb-1 text-sm text-faint">/mo</span>
      </p>
      <ul className="mt-5 flex-1 space-y-2 text-sm text-ink">
        <Spec>{plan.ram} GB RAM</Spec>
        <Spec>{plan.storage} GB storage</Spec>
        <Spec>{plan.cpu}% CPU</Spec>
        <Spec>
          <span className="inline-flex items-center gap-1.5">
            <FlagUK className="h-3.5 w-5" />
            <FlagUS className="h-3.5 w-5" />
            UK + Texas · 24/7
          </span>
        </Spec>
      </ul>
      <a
        href={DISCORD_INVITE}
        target="_blank"
        rel="noreferrer"
        className={`mt-6 block rounded-full py-3 text-center text-sm font-bold ${
          featured
            ? 'bg-[#22c55e] text-white glow-btn'
            : 'border border-line text-ink hover:border-[#22c55e]'
        }`}
      >
        Get {plan.name}
      </a>
    </article>
  )
}

function Spec({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-center gap-2">
      <CheckIcon className="h-4 w-4 text-[#22c55e]" />
      {children}
    </li>
  )
}
