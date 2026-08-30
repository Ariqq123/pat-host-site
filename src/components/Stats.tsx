import { FlagUK, FlagUS } from './Flag'

export function Stats() {
  return (
    <section className="px-4">
      <div className="glass mx-auto grid max-w-6xl gap-2 rounded-2xl p-3 sm:grid-cols-2 lg:grid-cols-4">
        <Stat value="4 GB" label="Free RAM" />
        <Stat value="24/7" label="Paid uptime" />
        <div className="rounded-xl px-4 py-5 text-center">
          <div className="flex items-center justify-center gap-2">
            <FlagUK className="h-5 w-8" />
            <FlagUS className="h-5 w-8" />
          </div>
          <p className="mt-2 text-sm text-faint">UK & Texas</p>
        </div>
        <Stat value="$4.99" label="Dirt plan" />
      </div>
    </section>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl px-4 py-5 text-center">
      <p className="font-display text-3xl font-extrabold text-ink">{value}</p>
      <p className="mt-1 text-sm text-faint">{label}</p>
    </div>
  )
}
