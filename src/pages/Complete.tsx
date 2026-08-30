import { useEffect } from 'react'
import { DISCORD_INVITE } from '../data'

export function CompletePage() {
  useEffect(() => {
    window.location.replace(DISCORD_INVITE)
  }, [])

  return (
    <div className="site-bg grid min-h-svh place-items-center px-4 text-center">
      <p className="text-ink">Opening Discord…</p>
    </div>
  )
}
