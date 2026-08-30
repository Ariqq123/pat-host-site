export const DISCORD_INVITE = 'https://discord.gg/XEAJVPVj7b'
export const PANEL_URL = 'https://panel.pathost.xyz/'
export const TICKETS_CHANNEL = '#tickets'

export const RAM_PRICE = 1
export const STORAGE_PRICE = 0.5
export const CPU_STEP_PRICE = 4

export const MIN_RAM = 5
export const MAX_RAM = 64
export const MIN_STORAGE = 9
export const MAX_STORAGE = 1024
export const MIN_CPU = 200
export const MAX_CPU = 1000
export const CPU_STEP = 100

export const PROMO_CODES: Record<string, number> = {
  XP: 0.05,
  WOW: 0.05,
}

export type Region = 'EU' | 'NA'

export type PlanId = 'dirt' | 'iron' | 'obsidian' | 'diamond' | 'netherite'

export type Plan = {
  id: PlanId
  name: string
  ram: number
  storage: number
  cpu: number
  price: number
  tag?: string
  note: string
  accent: string
  glow: string
  image: string
}

export const PLANS: Plan[] = [
  {
    id: 'dirt',
    name: 'Dirt',
    ram: 6,
    storage: 12,
    cpu: 150,
    price: 4.99,
    tag: 'Recommended',
    note: 'Best for 5 players',
    accent: '#a16207',
    glow: 'rgba(161, 98, 7, 0.35)',
    image: '/blocks/dirt.webp',
  },
  {
    id: 'iron',
    name: 'Iron',
    ram: 12,
    storage: 20,
    cpu: 200,
    price: 19.99,
    note: 'Small communities',
    accent: '#cbd5e1',
    glow: 'rgba(203, 213, 225, 0.28)',
    image: '/blocks/iron.webp',
  },
  {
    id: 'obsidian',
    name: 'Obsidian',
    ram: 16,
    storage: 40,
    cpu: 200,
    price: 30,
    tag: 'Popular',
    note: 'Mods, plugins, and events',
    accent: '#7c3aed',
    glow: 'rgba(124, 58, 237, 0.4)',
    image: '/blocks/obsidian.webp',
  },
  {
    id: 'diamond',
    name: 'Diamond',
    ram: 32,
    storage: 100,
    cpu: 400,
    price: 50,
    note: 'Large public servers',
    accent: '#22d3ee',
    glow: 'rgba(34, 211, 238, 0.35)',
    image: '/blocks/diamond.webp',
  },
  {
    id: 'netherite',
    name: 'Netherite',
    ram: 64,
    storage: 200,
    cpu: 800,
    price: 100,
    tag: 'Big Networks',
    note: 'Recommended for big networks',
    accent: '#f59e0b',
    glow: 'rgba(245, 158, 11, 0.4)',
    image: '/blocks/netherite.webp',
  },
]

export type CheckoutItem =
  | { kind: 'plan'; planId: PlanId; region: Region }
  | {
      kind: 'custom'
      ram: number
      storage: number
      cpu: number
      region: Region
    }

export function customPrice(ram: number, storage: number, cpu: number) {
  const extraCpu = Math.max(0, Math.round(cpu / CPU_STEP) - 1)
  return ram * RAM_PRICE + storage * STORAGE_PRICE + extraCpu * CPU_STEP_PRICE
}

export function applyPromo(total: number, code: string) {
  const rate = PROMO_CODES[code.trim().toUpperCase()]
  if (!rate) return { ok: false as const, total, discount: 0, rate: 0 }
  const discount = Math.round(total * rate * 100) / 100
  const next = Math.round((total - discount) * 100) / 100
  return { ok: true as const, total: next, discount, rate }
}

export function itemPrice(item: CheckoutItem) {
  if (item.kind === 'custom') {
    return customPrice(item.ram, item.storage, item.cpu)
  }
  const plan = PLANS.find((p) => p.id === item.planId)
  return plan?.price ?? 0
}

export function itemLabel(item: CheckoutItem) {
  if (item.kind === 'custom') return 'Custom plan'
  return PLANS.find((p) => p.id === item.planId)?.name ?? 'Plan'
}

export function encodeCheckout(item: CheckoutItem) {
  const params = new URLSearchParams()
  if (item.kind === 'plan') {
    params.set('plan', item.planId)
    params.set('region', item.region)
  } else {
    params.set('type', 'custom')
    params.set('ram', String(item.ram))
    params.set('storage', String(item.storage))
    params.set('cpu', String(item.cpu))
    params.set('region', item.region)
  }
  return `/checkout?${params.toString()}`
}

export function parseCheckout(search: string): CheckoutItem | null {
  const params = new URLSearchParams(search)
  const region = params.get('region') === 'NA' ? 'NA' : 'EU'
  const type = params.get('type')
  if (type === 'custom') {
    const ram = Number(params.get('ram') ?? MIN_RAM)
    const storage = Number(params.get('storage') ?? MIN_STORAGE)
    const cpu = Number(params.get('cpu') ?? MIN_CPU)
    if (![ram, storage, cpu].every(Number.isFinite)) return null
    return {
      kind: 'custom',
      ram: clamp(ram, MIN_RAM, MAX_RAM),
      storage: clamp(storage, MIN_STORAGE, MAX_STORAGE),
      cpu: clamp(Math.round(cpu / CPU_STEP) * CPU_STEP, MIN_CPU, MAX_CPU),
      region,
    }
  }
  const planId = params.get('plan') as PlanId | null
  if (planId && PLANS.some((p) => p.id === planId)) {
    return { kind: 'plan', planId, region }
  }
  return null
}

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, Math.round(n)))
}

export function regionPlace(region: Region) {
  return region === 'EU' ? 'United Kingdom' : 'USA Texas'
}

export const PING_ZONES = [
  { id: 'uk', label: 'United Kingdom', eu: 8, na: 108 },
  { id: 'eu-west', label: 'Western Europe', eu: 18, na: 118 },
  { id: 'eu-east', label: 'Eastern Europe', eu: 32, na: 138 },
  { id: 'mena', label: 'Middle East / North Africa', eu: 68, na: 158 },
  { id: 'us-east', label: 'USA East', eu: 78, na: 32 },
  { id: 'us-texas', label: 'USA Texas', eu: 108, na: 10 },
  { id: 'us-central', label: 'USA Central', eu: 100, na: 18 },
  { id: 'us-west', label: 'USA West', eu: 142, na: 38 },
  { id: 'canada', label: 'Canada', eu: 88, na: 36 },
  { id: 'latam', label: 'Latin America', eu: 138, na: 68 },
  { id: 'asia', label: 'Asia', eu: 176, na: 158 },
  { id: 'oceania', label: 'Australia / NZ', eu: 258, na: 168 },
  { id: 'africa', label: 'Africa', eu: 118, na: 178 },
] as const

export type PingZoneId = (typeof PING_ZONES)[number]['id']

export function zoneFromGeo(country?: string, region?: string): PingZoneId {
  const c = (country ?? '').toUpperCase()
  const r = (region ?? '').toLowerCase()
  if (c === 'GB' || c === 'IE') return 'uk'
  if (['FR', 'DE', 'NL', 'BE', 'ES', 'PT', 'IT', 'CH', 'AT', 'LU', 'DK', 'SE', 'NO', 'FI'].includes(c)) {
    return 'eu-west'
  }
  if (['PL', 'CZ', 'SK', 'HU', 'RO', 'BG', 'GR', 'UA', 'RS', 'HR', 'SI', 'LT', 'LV', 'EE'].includes(c)) {
    return 'eu-east'
  }
  if (['AE', 'SA', 'QA', 'KW', 'IL', 'TR', 'EG', 'JO', 'LB', 'MA', 'TN'].includes(c)) return 'mena'
  if (c === 'US') {
    if (r.includes('texas') || r === 'tx') return 'us-texas'
    if (['california', 'oregon', 'washington', 'nevada', 'arizona', 'ca', 'or', 'wa', 'nv', 'az'].some((x) => r.includes(x))) {
      return 'us-west'
    }
    if (['illinois', 'missouri', 'oklahoma', 'kansas', 'colorado', 'nebraska'].some((x) => r.includes(x))) {
      return 'us-central'
    }
    return 'us-east'
  }
  if (c === 'CA') return 'canada'
  if (['MX', 'BR', 'AR', 'CL', 'CO', 'PE', 'VE', 'EC'].includes(c)) return 'latam'
  if (['AU', 'NZ'].includes(c)) return 'oceania'
  if (['JP', 'KR', 'CN', 'IN', 'SG', 'PH', 'ID', 'TH', 'VN', 'MY', 'HK', 'TW'].includes(c)) return 'asia'
  if (['ZA', 'NG', 'KE', 'GH', 'EG'].includes(c)) return 'africa'
  return 'eu-west'
}

export const BUY_STEPS = [
  {
    n: '01',
    title: 'Join Discord',
    body: 'Every paid order is fulfilled in our Discord. Jump in with one click.',
  },
  {
    n: '02',
    title: 'Open #tickets',
    body: 'Head to the #tickets channel and open a ticket in the Billing category.',
  },
  {
    n: '03',
    title: 'Send your plan',
    body: 'Tell us the plan and region. You can pay with PayPal or Cash App.',
  },
  {
    n: '04',
    title: 'Get online',
    body: 'We spin up your 24/7 server in the United Kingdom or USA Texas.',
  },
]
