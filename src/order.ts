export const ORDER_KEY = 'pathost-order'

export type SavedOrder = {
  name: string
  kind: 'plan' | 'custom'
  ram: number
  storage: number
  cpu: number
  region: 'EU' | 'NA'
  pay: 'PayPal' | 'Cash App'
  code?: string
  subtotal: number
  discount: number
  total: number
}
