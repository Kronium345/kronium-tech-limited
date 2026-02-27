import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="bg-slate-50 dark:bg-slate-950 py-16 md:py-20"
    >
      <div className="container mx-auto px-4 grid gap-10 md:grid-cols-2 items-start">
        {/* Text Column */}
        <div>
          <p className="text-sm font-semibold tracking-wide text-primary uppercase mb-2">
            About us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Kronium Tech Limited in a nutshell
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            Kronium Tech Limited is a London-based digital product studio focused
            on building high-quality web and mobile applications. From concept
            to deployment, we help teams launch products that are fast,
            reliable, and delightful to use.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            We have hands-on experience in medical education, data-driven
            assessment platforms, and consumer-grade apps. Products like
            PharmaQue showcase our ability to blend performance, usability, and
            analytics into a single cohesive experience.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Whether you&apos;re validating an MVP or scaling an existing
            platform, we act as an extension of your team—covering engineering,
            architecture, and product thinking so you can focus on your
            business.
          </p>
        </div>

        {/* Highlights Column */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-700 p-5">
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
              Proven delivery
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              We&apos;ve successfully shipped products across multiple domains,
              from healthcare and education to B2C utilities.
            </p>
            <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>• 4+ active clients</li>
              <li>• 50+ completed projects</li>
              <li>• Award-winning digital experiences</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-700 p-5">
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
              How we work
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              We combine modern engineering practices with clear communication
              and measurable outcomes.
            </p>
            <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>• Discovery & product definition</li>
              <li>• UX & technical architecture</li>
              <li>• Incremental delivery & iteration</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-slate-900 text-white dark:bg-primary/10 dark:text-white border border-slate-800 dark:border-primary/40 p-5 sm:col-span-2">
            <h3 className="text-lg font-semibold mb-2">Who we partner with</h3>
            <p className="text-sm text-slate-100/90 mb-3">
              We collaborate with teams that care about quality and long-term
              impact.
            </p>
            <div className="grid gap-2 text-sm sm:grid-cols-3">
              <p>• Health & medical education startups</p>
              <p>• Product-led SaaS companies</p>
              <p>• Enterprises building internal tools</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

