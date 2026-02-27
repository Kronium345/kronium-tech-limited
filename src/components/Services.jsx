import React from 'react';

const services = [
  {
    id: 'web-dev',
    title: 'Web Development',
    description:
      'Modern, responsive web applications built with scalable architectures, clean code, and a focus on performance.',
    points: [
      'SPA & dashboard applications',
      'API-first & microservice-friendly backends',
      'SEO-aware marketing sites',
    ],
  },
  {
    id: 'mobile-dev',
    title: 'Mobile Development',
    description:
      'Cross-platform mobile experiences for Android and iOS that feel native, performant, and App Store ready.',
    points: [
      'Cross-platform app development',
      'App Store & Play Store readiness',
      'In-app analytics & engagement',
    ],
  },
  {
    id: 'design',
    title: 'Product Design (UI/UX)',
    description:
      'Interfaces designed for clarity, usability, and conversion—rooted in real user needs and product goals.',
    points: [
      'User journeys & wireframes',
      'Design systems & components',
      'Developer-friendly handoff',
    ],
  },
  {
    id: 'consulting',
    title: 'Technical Consulting',
    description:
      'Hands-on guidance on architecture, stack choices, and delivery practices so your team can move confidently.',
    points: [
      'Architecture & codebase reviews',
      'Scaling & performance strategy',
      'Team enablement & best practices',
    ],
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="bg-white dark:bg-slate-900 py-16 md:py-20 border-t border-slate-100 dark:border-slate-800"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-sm font-semibold tracking-wide text-primary uppercase mb-2">
            Services
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            What we build at Kronium Tech
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            From medical education platforms like PharmaQue to consumer-facing
            products, we help you design, build, and scale digital experiences
            that users trust and enjoy.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.id}
              id={service.id}
              className="rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-700 p-6 flex flex-col justify-between hover:border-primary hover:-translate-y-1 transition-all duration-200"
            >
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  {service.points.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-4">
                <a
                  href={`/#${service.id}`}
                  className="text-sm font-medium text-primary hover:text-primary/80"
                >
                  Learn more
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

