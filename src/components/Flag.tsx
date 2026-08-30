import type { Region } from '../data'

const flagFrame = 'overflow-hidden rounded-[2px] ring-2 ring-[#22c55e]'

export function FlagUK({ className = 'h-4 w-6' }: { className?: string }) {
  return (
    <svg
      className={`${className} ${flagFrame}`}
      viewBox="0 0 60 30"
      aria-label="United Kingdom"
      role="img"
    >
      <rect width="60" height="30" fill="#012169" />
      <path d="M0 0 L60 30 M60 0 L0 30" stroke="#fff" strokeWidth="10" />
      <path d="M0 0 L60 30 M60 0 L0 30" stroke="#C8102E" strokeWidth="6" />
      <path d="M30 0 V30 M0 15 H60" stroke="#fff" strokeWidth="16" />
      <path d="M30 0 V30 M0 15 H60" stroke="#C8102E" strokeWidth="10" />
    </svg>
  )
}

export function FlagUS({ className = 'h-4 w-6' }: { className?: string }) {
  return (
    <svg className={`${className} ${flagFrame}`} viewBox="0 0 60 30" aria-label="United States" role="img">
      <rect width="60" height="30" fill="#B22234" />
      <path
        d="M0 3.3h60M0 8.3h60M0 13.3h60M0 18.3h60M0 23.3h60M0 28.3h60"
        stroke="#fff"
        strokeWidth="2.5"
      />
      <rect width="24" height="16.5" fill="#3C3B6E" />
      {Array.from({ length: 9 }, (_, i) => (
        <circle
          key={i}
          cx={3 + (i % 5) * 4.5}
          cy={2.4 + Math.floor(i / 5) * 4}
          r="0.85"
          fill="#fff"
        />
      ))}
      {Array.from({ length: 8 }, (_, i) => (
        <circle
          key={`b${i}`}
          cx={5.2 + (i % 4) * 4.5}
          cy={4.4 + Math.floor(i / 4) * 4}
          r="0.85"
          fill="#fff"
        />
      ))}
    </svg>
  )
}

export function RegionFlag({ region, className }: { region: Region; className?: string }) {
  return region === 'EU' ? <FlagUK className={className} /> : <FlagUS className={className} />
}

export function RegionChip({
  region,
  active,
  onClick,
}: {
  region: Region
  active?: boolean
  onClick?: () => void
}) {
  const label = region === 'EU' ? 'EU · United Kingdom' : 'NA · USA Texas'
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold ${
        active ? 'bg-[#22c55e] text-white' : 'border border-line bg-paper text-ink'
      }`}
    >
      <RegionFlag region={region} className="h-4 w-6" />
      {label}
    </button>
  )
}
