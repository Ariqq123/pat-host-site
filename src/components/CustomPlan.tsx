import { useMemo, useState } from 'react'
import {
  CPU_STEP,
  CPU_STEP_PRICE,
  DISCORD_INVITE,
  MAX_CPU,
  MAX_RAM,
  MAX_STORAGE,
  MIN_CPU,
  MIN_RAM,
  MIN_STORAGE,
  RAM_PRICE,
  STORAGE_PRICE,
  customPrice,
  type Region,
} from '../data'
import { RegionChip, RegionFlag } from './Flag'

export function CustomPlan() {
  const [ram, setRam] = useState(MIN_RAM)
  const [storage, setStorage] = useState(MIN_STORAGE)
  const [cpu, setCpu] = useState(MIN_CPU)
  const [region, setRegion] = useState<Region>('EU')
  const price = useMemo(() => customPrice(ram, storage, cpu), [ram, storage, cpu])

  return (
    <section id="custom" className="scroll-mt-28 px-4 pb-8">
      <div className="glass mx-auto max-w-6xl overflow-hidden rounded-3xl">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
          <div className="p-6 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#16a34a]">
              Make your own plan
            </p>
            <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
              Dial in RAM, storage, and CPU
            </h2>
            <p className="mt-3 max-w-xl text-muted">
              ${RAM_PRICE}/GB RAM · ${STORAGE_PRICE.toFixed(2)}/GB storage · ${CPU_STEP_PRICE} extra
              for every +100% CPU. Starts at 200% CPU.
            </p>

            <div className="mt-8 space-y-8">
              <Slider label="RAM" value={ram} min={MIN_RAM} max={MAX_RAM} suffix="GB" onChange={setRam} />
              <Slider
                label="Storage"
                value={storage}
                min={MIN_STORAGE}
                max={MAX_STORAGE}
                suffix="GB"
                onChange={setStorage}
              />
              <Slider
                label="CPU"
                value={cpu}
                min={MIN_CPU}
                max={MAX_CPU}
                step={CPU_STEP}
                suffix="%"
                onChange={setCpu}
                hint={`+$${((cpu / 100 - 1) * CPU_STEP_PRICE).toFixed(0)} CPU`}
              />
            </div>

            <div className="mt-8">
              <p className="mb-2 text-sm text-muted">Location</p>
              <div className="flex flex-wrap gap-2">
                <RegionChip region="EU" active={region === 'EU'} onClick={() => setRegion('EU')} />
                <RegionChip region="NA" active={region === 'NA'} onClick={() => setRegion('NA')} />
              </div>
            </div>
          </div>

          <div className="border-t border-line bg-panel p-6 md:border-l md:border-t-0 md:p-10">
            <p className="text-sm text-muted">Your custom server</p>
            <p className="font-display mt-1 text-2xl font-bold text-ink">Pat Custom</p>
            <dl className="mt-6 space-y-3 text-sm">
              <Row label="RAM" value={`${ram} GB`} />
              <Row label="Storage" value={storage >= 1024 ? `${storage / 1024} TB` : `${storage} GB`} />
              <Row label="CPU" value={`${cpu}%`} />
              <div className="flex items-center justify-between">
                <dt className="text-faint">Location</dt>
                <dd className="inline-flex items-center gap-2 font-medium text-ink">
                  <RegionFlag region={region} />
                  {region === 'EU' ? 'United Kingdom' : 'USA Texas'}
                </dd>
              </div>
              <Row label="Uptime" value="24/7" />
            </dl>
            <div className="mt-8 border-t border-line pt-6">
              <p className="text-sm text-muted">Estimated monthly</p>
              <p className="font-display text-5xl font-extrabold text-ink">${price.toFixed(2)}</p>
            </div>
            <a
              href={DISCORD_INVITE}
              target="_blank"
              rel="noreferrer"
              className="mt-6 block rounded-full bg-[#22c55e] py-3 text-center font-bold text-white glow-btn"
            >
              Order on Discord
            </a>
            <p className="mt-3 text-center text-xs text-faint">
              Named plans are usually cheaper for the same RAM.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Slider({
  label,
  value,
  min,
  max,
  suffix,
  onChange,
  step = 1,
  hint,
}: {
  label: string
  value: number
  min: number
  max: number
  suffix: string
  onChange: (value: number) => void
  step?: number
  hint?: string
}) {
  const fill = ((value - min) / (max - min)) * 100

  return (
    <label className="block">
      <span className="mb-3 flex items-center justify-between gap-3 text-sm">
        <span className="font-medium text-ink">{label}</span>
        <span className="flex items-center gap-2 font-bold text-[#16a34a]">
          <input
            type="number"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={(e) => {
              const next = Number(e.target.value)
              if (Number.isNaN(next)) return
              const snapped = step > 1 ? Math.round(next / step) * step : Math.round(next)
              onChange(Math.min(max, Math.max(min, snapped)))
            }}
            className="w-20 rounded-lg border border-line bg-paper px-2 py-1 text-right text-ink outline-none focus:border-emerald-400"
          />
          {suffix}
          {hint ? <span className="hidden text-xs font-medium text-faint sm:inline">· {hint}</span> : null}
        </span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{ ['--fill' as string]: `${fill}%` }}
      />
    </label>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <dt className="text-faint">{label}</dt>
      <dd className="font-medium text-ink">{value}</dd>
    </div>
  )
}
