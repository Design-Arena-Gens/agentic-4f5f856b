"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import styles from "./page.module.css";

const metrics = [
  {
    label: "Monthly Flow",
    value: "$12,480",
    trend: "+12.4%",
    positive: true,
    description: "Net inflow after savings targets"
  },
  {
    label: "Goal Funding",
    value: "78%",
    trend: "+6.1%",
    positive: true,
    description: "Progress across 5 active goals"
  },
  {
    label: "Spending Efficiency",
    value: "92",
    trend: "-3.5%",
    positive: false,
    description: "Score vs. last 30-day baseline"
  },
  {
    label: "Insights Generated",
    value: "34",
    trend: "+18",
    positive: true,
    description: "Actionable nudges pushed this week"
  }
];

const features = [
  {
    title: "Intentional Planning",
    body: "Set dynamic budgets around your real habits. Astra highlights adjustments that preserve lifestyle while accelerating savings.",
    bullets: ["Goal-aware budgeting", "Predictive cash flow scenarios", "Real-time allocation alerts"]
  },
  {
    title: "Intuitive Analytics",
    body: "Visualize every pattern with adaptive dashboards that surface the 'why' behind changes in your spend and saving velocity.",
    bullets: ["AI summarized insights", "Category deep dives", "Historical comparisons"]
  },
  {
    title: "Confident Automation",
    body: "Automate transfers, vaults, and paydowns with guardrails tailored to your comfort, ensuring each move aligns with your strategy.",
    bullets: ["Trigger-based automations", "Smart thresholds", "Audit trail transparency"]
  }
];

const testimonials = [
  {
    quote:
      "Astra turned a messy spreadsheet into a living plan. I finally understand the trade-offs behind every decision.",
    name: "Rina Patel",
    title: "Founder, Harbor & Pine",
    initials: "RP"
  },
  {
    quote:
      "The goal forecasting and weekly insight briefs are remarkable. It's like having a CFO for my family finances.",
    name: "Damien Cole",
    title: "Product Director, Lume",
    initials: "DC"
  },
  {
    quote:
      "I trust Astra with automations because it explains every recommendation with data I can drill into instantly.",
    name: "Amanda Reyes",
    title: "Operations Lead, Brightwave",
    initials: "AR"
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

const chartValues = [32, 46, 40, 60, 72, 68, 94, 118, 110, 132];

function buildChartPath(values) {
  if (!values.length) return "";
  const max = Math.max(...values) * 1.1;
  const min = Math.min(...values) * 0.85;
  const verticalRange = max - min || 1;
  const spacing = 100 / (values.length - 1);
  const coordinates = values.map((value, index) => {
    const x = index * spacing;
    const y = 90 - ((value - min) / verticalRange) * 70;
    return `${x},${y}`;
  });
  return `M ${coordinates[0]} L ${coordinates.slice(1).join(" ")}`;
}

const chartPath = buildChartPath(chartValues);

function ChartGradients() {
  return (
    <defs>
      <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#66D6FF" stopOpacity="0.18" />
        <stop offset="50%" stopColor="#7B8CFF" stopOpacity="0.45" />
        <stop offset="100%" stopColor="#C18BFF" stopOpacity="0.65" />
      </linearGradient>
      <linearGradient id="gradientFill" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="rgba(123, 140, 255, 0.45)" />
        <stop offset="100%" stopColor="rgba(33, 49, 96, 0.05)" />
      </linearGradient>
    </defs>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M3.75 8H12.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.75 4.75L12.25 8L8.75 11.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path
        d="M9.99967 2.08337L10.7913 5.45837C11.0926 6.73896 11.1741 6.74212 12.4547 7.04338L15.833 7.83337L12.4547 8.62504C11.1741 8.92629 11.1741 9.00788 10.8729 10.2885L9.99967 13.75L9.12742 10.2885C8.82616 9.00788 8.74349 8.92629 7.4629 8.62504L4.16634 7.83337L7.54467 7.04338C8.82527 6.74212 8.90786 6.73896 9.20825 5.45837L9.99967 2.08337Z"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinejoin="round"
      />
      <circle cx="15.5" cy="5.25" r="1" fill="currentColor" />
      <circle cx="3.75" cy="9.75" r="1.15" fill="currentColor" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
      <path
        d="M10.9998 2.75L4.58317 5.04167V10.0833C4.58317 14.4958 7.93733 18.5742 10.9998 19.25C14.0623 18.5742 17.4165 14.4958 17.4165 10.0833V5.04167L10.9998 2.75Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.7915 10.8542L9.96984 12.8333L14.2082 8.25"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PulseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
      <path
        d="M2.75 11.4583H6.41667L8.25 6.875L13.75 16.5L15.5833 11.4583H19.25"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Page() {
  return (
    <main className={styles.main}>
      <div className={styles.backgroundMesh}>
        <div className={styles.gridOverlay} />
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 0.45, scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className={clsx(styles.orb, styles.orbPrimary)}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.45, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.15, ease: "easeOut" }}
          className={clsx(styles.orb, styles.orbSecondary)}
        />
      </div>

      <div className={styles.content}>
        <motion.nav
          className={styles.nav}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className={styles.brand}>
            <span className={styles.brandIcon}>
              <SparkleIcon />
            </span>
            Astra Finance
          </span>
          <div className={styles.navActions}>
            <button className={styles.ghostButton}>Product tour</button>
            <button className={styles.ghostButton}>Pricing</button>
            <button className={styles.navCta}>Launch tracker</button>
          </div>
        </motion.nav>

        <section className={styles.hero}>
          <motion.div
            className={styles.heroContent}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.span className={styles.heroPill} variants={fadeUp}>
              <span className={styles.pip} />
              Smarter finance intelligence
            </motion.span>
            <motion.h1 className={styles.heroTitle} variants={fadeUp}>
              Clarity that makes your <span className={styles.highlight}>decisions effortless.</span>
            </motion.h1>
            <motion.p className={styles.heroSubtitle} variants={fadeUp}>
              Astra helps you steward every dollar with confidence. Track expenses, reconcile cash flow, and
              project your goals through interactive dashboards designed for calm, focused action.
            </motion.p>
            <motion.div className={styles.heroActions} variants={fadeUp}>
              <button className={styles.primaryButton}>Start free trial</button>
              <button className={styles.secondaryButton}>
                Explore live demo
                <span className={styles.arrow}>
                  <ArrowIcon />
                </span>
              </button>
            </motion.div>
            <motion.div className={styles.trustBar} variants={fadeUp}>
              <div className={styles.avatars}>
                <span className={styles.avatar} />
                <span className={styles.avatar} />
                <span className={styles.avatar} />
                <span className={styles.avatar} />
              </div>
              Trusted by finance leaders at 1,200+ high-growth teams.
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.heroVisual}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          >
            <div className={styles.visualTopBar}>
              <div className={styles.visualHeading}>
                <span>Insight feed</span>
                <strong>Financial runway</strong>
              </div>
              <div className={styles.visualStats}>
                <span className={styles.visualStat}>
                  <ShieldIcon />
                  97% stable
                </span>
                <span className={styles.visualStat}>
                  <PulseIcon />
                  +18% YoY
                </span>
              </div>
            </div>

            <div className={styles.visualChart}>
              <div className={styles.chartHeader}>
                <span>Projected cash balance</span>
                <span>Next 12 months</span>
              </div>
              <div className={styles.chart}>
                <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                  <ChartGradients />
                  <g className={styles.chartGrid}>
                    {[20, 40, 60, 80].map((y) => (
                      <line key={y} x1="0" y1={y} x2="100" y2={y} />
                    ))}
                  </g>
                  <path
                    d={`${chartPath} L 100,100 L 0,100 Z`}
                    fill="url(#gradientFill)"
                    opacity="0.55"
                  />
                  <path d={chartPath} stroke="url(#gradientStroke)" strokeWidth="2.2" fill="none" />
                  <g className={styles.chartDots}>
                    {chartValues.map((value, index) => {
                      const max = Math.max(...chartValues) * 1.1;
                      const min = Math.min(...chartValues) * 0.85;
                      const verticalRange = max - min || 1;
                      const spacing = 100 / (chartValues.length - 1);
                      const cx = index * spacing;
                      const cy = 90 - ((value - min) / verticalRange) * 70;
                      return <circle key={value + index} cx={cx} cy={cy} r="1.8" />;
                    })}
                  </g>
                </svg>
              </div>
              <div className={styles.confidenceRibbon}>
                <span className={styles.confidenceDot} />
                Confidence uplift after automated saving triggers.
              </div>
              <div className={styles.pillBadge}>
                <span>Runway</span>
                <strong>18.5 months</strong>
              </div>
            </div>
          </motion.div>
        </section>

        <section className={styles.featureSection}>
          <motion.div
            className={styles.sectionTitle}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <h2>Every signal. One intelligent command center.</h2>
            <p>
              From personal wealth to team operations, Astra unifies your accounts, categorizes every
              transaction, and pairs it with explanations you can act on immediately.
            </p>
          </motion.div>

          <motion.div
            className={styles.metricsGrid}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {metrics.map((metric) => (
              <motion.div key={metric.label} className={styles.metricCard} variants={fadeUp}>
                <div className={styles.metricHeader}>
                  <span className={styles.metricIcon}>
                    <SparkleIcon />
                  </span>
                  <span className={styles.metricLabel}>{metric.label}</span>
                </div>
                <span className={styles.metricValue}>{metric.value}</span>
                <span
                  className={clsx(
                    styles.metricTrend,
                    !metric.positive && styles.metricTrendNegative
                  )}
                >
                  {metric.trend}
                </span>
                <p className={styles.featureBody}>{metric.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className={styles.featureCards}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
          >
            {features.map((feature) => (
              <motion.div key={feature.title} className={styles.featureCard} variants={fadeUp}>
                <span className={styles.featureIcon}>
                  <SparkleIcon />
                </span>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureBody}>{feature.body}</p>
                <div className={styles.featureList}>
                  {feature.bullets.map((bullet) => (
                    <span key={bullet} className={styles.listItem}>
                      <span className={styles.bullet} />
                      {bullet}
                    </span>
                  ))}
                </div>
                <div className={styles.insightsPanel}>
                  <strong>Instant insight</strong>
                  <span>
                    Astra continuously compares your spend cadence to your savings intent, prompting actions
                    when momentum drifts.
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section>
          <motion.div
            className={styles.sectionTitle}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <h2>Stories from teams building a calmer money culture.</h2>
            <p>
              Empower your people with clarity. When everyone understands the plan, every choice becomes a
              confident step forward.
            </p>
          </motion.div>

          <motion.div
            className={styles.testimonials}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
          >
            {testimonials.map((testimonial) => (
              <motion.article key={testimonial.name} className={styles.testimonialCard} variants={fadeUp}>
                <p>“{testimonial.quote}”</p>
                <div className={styles.testimonialMeta}>
                  <span className={styles.avatar} aria-hidden>
                    {testimonial.initials}
                  </span>
                  <span className={styles.testimonialMetaText}>
                    <strong>{testimonial.name}</strong>
                    <small>{testimonial.title}</small>
                  </span>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <motion.section
          className={styles.ctaSection}
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-40px" }}
        >
          <div>
            <h3>Bring focused financial intelligence to your workflow.</h3>
            <p>
              Link your accounts, set your intent, and let Astra choreograph every move with data-backed
              guidance, from the first transaction to long-term goals.
            </p>
          </div>
          <div className={styles.ctaActions}>
            <button className={styles.primaryButton}>Create your workspace</button>
            <button className={styles.secondaryButton}>
              Download strategy brochure
              <span className={styles.arrow}>
                <ArrowIcon />
              </span>
            </button>
          </div>
        </motion.section>

        <footer className={styles.footer}>
          <span>© {new Date().getFullYear()} Astra Finance. Purpose-built for clarity & trust.</span>
          <span>Security • Support • Privacy center</span>
        </footer>
      </div>
    </main>
  );
}
