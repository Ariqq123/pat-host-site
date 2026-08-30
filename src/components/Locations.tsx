import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { PING_ZONES, zoneFromGeo, type PingZoneId } from '../data'
import { FlagUK, FlagUS } from './Flag'

export function Locations() {
  const [zoneId, setZoneId] = useState<PingZoneId>('us-east')
  const [detected, setDetected] = useState('')
  const zone = useMemo(
    () => PING_ZONES.find((z) => z.id === zoneId) ?? PING_ZONES[0],
    [zoneId],
  )
  const better = zone.eu <= zone.na ? 'EU' : 'NA'

  useEffect(() => {
    let cancelled = false
    fetch('https://ipwho.is/')
      .then((r) => r.json())
      .then((data: { success?: boolean; country?: string; country_code?: string; region?: string }) => {
        if (cancelled || data.success === false) return
        const next = zoneFromGeo(data.country_code, data.region)
        setZoneId(next)
        setDetected(data.region ? `${data.region}, ${data.country}` : data.country ?? '')
      })
      .catch(() => undefined)
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <section id="regions" className="scroll-mt-28 px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#16a34a]">Regions</p>
          <h2 className="font-display mt-3 text-4xl font-extrabold text-ink">
            EU in the UK. NA in Texas.
          </h2>
          <p className="mt-3 text-muted">
            Pick where you play and see what your ping would be to each region. Free
            servers are UK only. Paid plans are the same price in both.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <article className="glass rounded-3xl p-8">
            <div className="flex items-center gap-4">
              <FlagUK className="h-10 w-16" />
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#16a34a]">EU</p>
                <h3 className="font-display text-2xl font-bold text-ink">United Kingdom</h3>
              </div>
            </div>
            <p className="mt-4 text-muted">Best for Europe, the UK, and nearby.</p>
            <p className="mt-2 text-sm text-faint">Free servers run here only.</p>
            <p className="mt-5 font-display text-4xl font-extrabold text-ink">
              ~{zone.eu}ms
            </p>
            <p className="text-sm text-faint">Estimated ping from {zone.label}</p>
          </article>

          <article className="glass rounded-3xl p-8">
            <div className="flex items-center gap-4">
              <FlagUS className="h-10 w-16" />
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#16a34a]">NA</p>
                <h3 className="font-display text-2xl font-bold text-ink">USA Texas</h3>
              </div>
            </div>
            <p className="mt-4 text-muted">Best for the US, Canada, and LATAM.</p>
            <p className="mt-2 text-sm text-faint">Paid plans only.</p>
            <p className="mt-5 font-display text-4xl font-extrabold text-ink">
              ~{zone.na}ms
            </p>
            <p className="text-sm text-faint">Estimated ping from {zone.label}</p>
          </article>
        </div>

        <div className="glass mt-8 rounded-3xl p-6 md:p-8">
          <h3 className="font-display text-xl font-bold text-ink">
            What would my ping be?
          </h3>
          <p className="mt-1 text-sm text-muted">
            {detected
              ? `We detected ${detected}. Change it if that’s not right.`
              : 'Choose where you play to compare UK vs Texas.'}
          </p>
          <label className="mt-5 block text-sm font-semibold text-ink">
            I play from
            <select
              value={zoneId}
              onChange={(e) => setZoneId(e.target.value as PingZoneId)}
              className="mt-2 w-full rounded-xl border border-line bg-paper px-4 py-3 text-base font-medium text-ink outline-none focus:border-[#22c55e]"
            >
              {PING_ZONES.map((z) => (
                <option key={z.id} value={z.id}>
                  {z.label}
                </option>
              ))}
            </select>
          </label>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <PingResult
              flag={<FlagUK className="h-5 w-8" />}
              name="EU · United Kingdom"
              ms={zone.eu}
              best={better === 'EU'}
            />
            <PingResult
              flag={<FlagUS className="h-5 w-8" />}
              name="NA · USA Texas"
              ms={zone.na}
              best={better === 'NA'}
            />
          </div>
          <p className="mt-4 text-xs text-faint">
            Estimates for Minecraft, not a live test. Real ping depends on your ISP
            and routing.
          </p>
        </div>
      </div>
    </section>
  )
}

function PingResult({
  flag,
  name,
  ms,
  best,
}: {
  flag: ReactNode
  name: string
  ms: number
  best: boolean
}) {
  return (
    <div
      className={`rounded-2xl border p-4 ${
        best ? 'border-[#22c55e] bg-mint' : 'border-line bg-paper'
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-2 font-semibold text-ink">
          {flag}
          {name}
        </span>
        {best ? (
          <span className="rounded-full bg-[#22c55e] px-2 py-0.5 text-[10px] font-bold uppercase text-white">
            Better for you
          </span>
        ) : null}
      </div>
      <p className="mt-2 font-display text-3xl font-extrabold text-ink">~{ms}ms</p>
    </div>
  )
}
