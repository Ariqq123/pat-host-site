import { FlagUK, FlagUS } from './Flag'

const REVIEWS = [
  {
    name: 'Alex',
    place: 'United Kingdom',
    flag: 'EU' as const,
    text: 'Claimed the free 4GB in the UK and was in-game fast. No ads, just the panel.',
  },
  {
    name: 'Jordan',
    place: 'United States',
    flag: 'NA' as const,
    text: 'Texas ping is solid for our SMPs. Dirt to start, easy to jump to Iron later.',
  },
  {
    name: 'Sam',
    place: 'United Kingdom',
    flag: 'EU' as const,
    text: 'Billing was simple — PayPal in a Discord ticket and the server stayed 24/7.',
  },
]

export function Reviews() {
  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-extrabold text-ink">
            Minecraft Hosting <span className="text-[#16a34a]">Reviews</span>
          </h2>
          <p className="mt-3 text-muted">Players in the UK and USA Texas spinning up worlds on Pat Host.</p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {REVIEWS.map((review) => (
            <article key={review.name} className="rounded-2xl border border-line bg-paper p-6">
              <p className="text-[#16a34a]">★★★★★</p>
              <p className="mt-3 text-sm leading-relaxed text-ink">{review.text}</p>
              <div className="mt-5 flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-mint text-sm font-bold text-ink">
                  {review.name[0]}
                </span>
                <div>
                  <p className="text-sm font-bold text-ink">{review.name}</p>
                  <p className="inline-flex items-center gap-1.5 text-xs text-faint">
                    {review.flag === 'EU' ? <FlagUK className="h-3 w-4" /> : <FlagUS className="h-3 w-4" />}
                    {review.place}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
