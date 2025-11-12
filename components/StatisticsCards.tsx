'use client';

type StatCard = {
  number: string;
  label: string;
  badge: string;
  color: string;
};

type Props = {
  stats: StatCard[];
};

export default function StatisticsCards({ stats }: Props) {
  return (
    <section
      className="stats-grid"
      aria-labelledby="stats-heading"
      role="region"
    >
      <h2 id="stats-heading" className="visually-hidden">
        Application Statistics
      </h2>
      {stats.map((stat, idx) => (
        <article
          key={idx}
          className={`stat-card ${stat.color}`}
          aria-labelledby={`stat-${idx}-heading`}
        >
          <div className="stat-number" aria-describedby={`stat-${idx}-desc`}>
            {stat.number}
          </div>
          <h3 id={`stat-${idx}-heading`} className="stat-label">
            {stat.label}
          </h3>
          <div className="stat-badge" role="status" aria-live="polite">
            <span className="stat-badge-text">{stat.badge}</span>
          </div>
          <span id={`stat-${idx}-desc`} className="visually-hidden">
            {stat.number} {stat.label} applications with {stat.badge} status
          </span>
        </article>
      ))}
    </section>
  );
}
