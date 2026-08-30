import { Link } from 'react-router-dom'
import { DISCORD_INVITE, PANEL_URL } from '../data'
import { useTheme } from '../theme'
import { DiscordIcon } from './Icons'

export function Footer() {
  const { theme, setTheme } = useTheme()

  return (
    <footer className="border-t border-line bg-paper px-4 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div>
          <img src="/logo.png?v=2" alt="Pat Host" className="h-20 w-auto object-contain" />
          <p className="mt-3 max-w-sm text-sm text-faint">
            Minecraft hosting with a free 4GB EU server, 24/7 paid plans, and
            custom RAM, storage, and CPU.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-3">
          <div>
            <p className="font-bold text-ink">Product</p>
            <div className="mt-3 flex flex-col gap-2 text-muted">
              <Link to="/#plans">Plans</Link>
              <Link to="/#custom">Custom plan</Link>
              <Link to="/#regions">Regions</Link>
              <a href={PANEL_URL} target="_blank" rel="noreferrer">
                Free panel
              </a>
            </div>
          </div>
          <div>
            <p className="font-bold text-ink">Pay</p>
            <div className="mt-3 flex flex-col gap-2 text-muted">
              <span>PayPal</span>
              <span>Cash App</span>
            </div>
          </div>
          <div>
            <p className="font-bold text-ink">Help</p>
            <div className="mt-3 flex flex-col gap-2 text-muted">
              <a href={DISCORD_INVITE} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                <DiscordIcon className="h-4 w-4" />
                Discord
              </a>
              <Link to="/#buy">Billing steps</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-faint">
          © {new Date().getFullYear()} Pat Host · pat.networkak.com ·{' '}
          <a href="http://pro.networkak.com/" target="_blank" rel="noreferrer" className="font-semibold text-ink hover:text-[#16a34a]">
            Developer
          </a>
        </p>
        <div>
          <p className="mb-2 text-xs font-semibold text-ink">Page look</p>
          <div className="inline-flex rounded-full border border-line bg-soft p-1">
            <button
              type="button"
              onClick={() => setTheme('white')}
              className={`rounded-full px-3.5 py-1.5 text-xs font-bold ${
                theme === 'white' ? 'bg-paper text-ink shadow-sm' : 'text-muted'
              }`}
            >
              White
            </button>
            <button
              type="button"
              onClick={() => setTheme('old')}
              className={`rounded-full px-3.5 py-1.5 text-xs font-bold ${
                theme === 'old' ? 'bg-[#14532d] text-white' : 'text-muted'
              }`}
            >
              Old page
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
