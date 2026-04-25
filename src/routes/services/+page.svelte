<script lang="ts">
  import {
    Mail,
    MessageSquare,
    Bell,
    Users,
    Settings,
    Monitor,
    Check,
    ArrowRight,
  } from "@lucide/svelte";
  import { inview } from "$lib/actions/inview";
  import CTABanner from "$lib/components/CTABanner.svelte";
  import Services from "$lib/components/Services.svelte";

  const services = [
    {
      title: "Email Marketing",
      description:
        "From welcome flows to win-back sequences, we design and deploy email automations that nurture subscribers into loyal customers. Our campaigns average 35%+ open rates.",
      icon: Mail,
      features: [
        "Automated Flow Design",
        "A/B Testing",
        "Template Design",
        "Deliverability Optimization",
      ],
    },
    {
      title: "SMS Marketing",
      description:
        "Direct, personal, and high-converting. Our SMS campaigns reach customers where they're most engaged — their phones. Average 98% open rates.",
      icon: MessageSquare,
      features: [
        "Campaign Automation",
        "Segmentation",
        "Compliance Management",
        "Two-Way Messaging",
      ],
    },
    {
      title: "Push Marketing",
      description:
        "Reach your audience instantly with high-impact browser and mobile notifications. Perfect for time-sensitive offers and re-engagement.",
      icon: Bell,
      features: [
        "Browser Push",
        "App Notifications",
        "Triggered Alerts",
        "Behavioral Targeting",
      ],
    },
    {
      title: "Lifecycle Management",
      description:
        "Strategic orchestration of the entire customer journey. We map every touchpoint to maximize retention and lifetime value.",
      icon: Users,
      features: [
        "Journey Mapping",
        "Churn Reduction",
        "Retention Audits",
        "LTV Optimization",
      ],
    },
    {
      title: "CRM Management",
      description:
        "Data-driven customer relationship management. We clean, segment, and leverage your data to build stronger customer bonds.",
      icon: Settings,
      features: [
        "Database Hygiene",
        "Advanced Segmentation",
        "Sync & Automation",
        "Predictive Analytics",
      ],
    },
    {
      title: "Website Development",
      slug: "website-development",
      description:
        "Modern, high-converting stores and landing pages optimized for performance and scale. Built for the modern e-commerce landscape.",
      icon: Monitor,
      features: [
        "High-Speed Stores",
        "CRO Layouts",
        "Custom UX/UI",
        "Svelte/Next.js Tech",
      ],
    },
  ];

  const plans = [
    {
      name: "Email Starter",
      price: "$1,200",
      period: "/month",
      desc: "Best for brands just starting with basic email automations and newsletter management.",
      features: [
        "Email Setup only",
        "Standard Lifecycle Flows",
        "Monthly Strategy Call",
        "Performance Dashboard",
        "20 hours for a month",
        "Email Support",
      ],
      accent: false,
    },
    {
      name: "Retention Starter",
      price: "$2,500",
      period: "/month",
      desc: "Ideal for startups looking to scale their email marketing or build data-driven retention systems.",
      features: [
        "Email or SMS Setup",
        "Basic Lifecycle Flows",
        "Monthly Strategy Call",
        "Performance Dashboard",
        "40 hours for a month",
        "Email and Chat Support",
      ],
      accent: false,
    },
    {
      name: "Lifecycle Growth",
      price: "$5,500",
      period: "/month",
      desc: "For scaling brands that need full-service lifecycle and retention focus.",
      features: [
        "Email, SMS & Push Setup",
        "Advanced Flows & Segments",
        "Weekly Strategy Calls",
        "Dedicated Account Lead",
        "Custom Data Reporting",
        "90 hours for a month",
        "Email and Chat Support",
      ],
      accent: true,
    },
    {
      name: "Custom",
      price: "Enterprise",
      period: "",
      desc: "Bespoke retention engines for brands ready to maximize LTV at scale.",
      features: [
        "Full Lifecycle Orchestration",
        "CRM & Data Integration",
        "Team of 5+ Dedicated Experts",
        "Daily Slack Access",
        "Bi-Weekly Exec Strategy",
        "Hours based on requirement",
        "Email and Chat Support",
      ],
      accent: false,
    },
  ];

  const faqs = [
    {
      q: "How quickly can we expect results from lifecycle marketing?",
      a: "Retention improvements are often seen within 30 days of flow deployment. Significant LTV growth typically materializes within 60-90 days.",
    },
    {
      q: "Do you require long-term contracts?",
      a: "No. We operate on month-to-month agreements. We believe our results should keep you, not a contract.",
    },
    {
      q: "Which platforms do you work with?",
      a: "We are certified experts in Klaviyo, Attentive, Postscript, HubSpot, and more. We'll work within your existing stack or recommend the best fits.",
    },
    {
      q: "Can you work with our existing team?",
      a: "Absolutely. We often act as an extension of in-house marketing departments, handling technical execution and strategy planning.",
    },
  ];

  let openFaq = $state(-1);
  function toggleFaq(i: number) {
    openFaq = openFaq === i ? -1 : i;
  }
</script>

<svelte:head>
  <title>Services | Five Digital Hawks</title>
  <meta
    name="description"
    content="Strategic lifecycle and retention marketing services including email, SMS, push, and CRM management."
  />
</svelte:head>

<!-- Page Hero -->
<section
  class="relative pt-32 pb-20 bg-linear-to-br from-brand-primary via-brand-primary/80 to-brand-accent/60 text-white overflow-hidden"
>
  <div class="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
  <div
    class="absolute bottom-10 -left-40 w-[400px] h-[400px] bg-brand-highlight/30 rounded-full blur-[100px] mix-blend-screen animate-float-delayed"
  ></div>

  <div class="container mx-auto px-4 max-w-5xl relative z-10 text-center">
    <h1
      class="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 animate-[fade-in-up_0.8s_ease-out]"
    >
      Lifecycle <span
        class="text-transparent bg-clip-text bg-linear-to-r from-blue-200 to-white"
        >Marketing</span
      >
    </h1>
    <p
      class="text-lg md:text-2xl text-blue-100 font-light max-w-3xl mx-auto animate-[fade-in-up_0.8s_ease-out_0.2s_both]"
    >
      We build data-driven retention engines that turn high-traffic stores into
      profitable brands through strategic Email, SMS, & Push notification
      marketing.
    </p>
  </div>
</section>

<!-- Expanded Service Cards -->
<Services
  items={services}
  background="bg-base-100"
  showTitle={false}
/>

<!-- Pricing -->
<section class="py-24 bg-base-200">
  <div class="container mx-auto px-4 max-w-7xl">
    <div class="text-center max-w-3xl mx-auto mb-16 reveal" use:inview>
      <h2
        class="text-brand-accent font-semibold tracking-wide uppercase mb-3 text-sm md:text-base"
      >
        Pricing
      </h2>
      <h3
        class="text-2xl sm:text-4xl md:text-5xl font-bold text-base-content mb-6"
      >
        Plans That <span
          class="text-transparent bg-clip-text bg-linear-to-r from-brand-primary to-brand-highlight"
          >Scale With You</span
        >
      </h3>
      <p class="text-base md:text-lg text-base-content/70">
        Data-driven retention for every stage of growth.
      </p>
    </div>

    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-full lg:max-w-7xl mx-auto items-stretch"
    >
      {#each plans as plan, i}
        <div
          class="card transition-all! duration-500! ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-4 hover:scale-[1.02] reveal h-full flex flex-col group {plan.accent
            ? 'bg-brand-primary text-white border-2 border-brand-accent shadow-[0_20px_50px_-15px_rgba(31,42,85,0.4)] hover:shadow-[0_40px_80px_-20px_rgba(79,99,186,0.5)]'
            : 'bg-base-100 border border-base-200/50 shadow-sm hover:shadow-2xl hover:border-brand-accent/30'}"
          use:inview
        >
          <div
            class="card-body p-8 flex flex-col items-center text-center relative overflow-hidden"
          >
            {#if plan.accent}
              <div
                class="absolute top-0 right-0 bg-secondary text-white text-[10px] uppercase tracking-widest font-bold py-1 px-4 rounded-bl-lg shadow-sm"
              >
                Most Popular
              </div>
            {/if}

            <h3 class="text-xl font-bold mb-1 opacity-90">{plan.name}</h3>
            <div class="flex items-baseline justify-center gap-1 mb-4 h-12">
              <span class="text-4xl font-extrabold tracking-tight"
                >{plan.price}</span
              >
              {#if plan.period}
                <span class="text-sm opacity-60 font-medium">{plan.period}</span
                >
              {/if}
            </div>
            <p class="text-xs opacity-70 mb-8 min-h-12 leading-relaxed">
              {plan.desc}
            </p>

            <div class="w-full grow mb-8 flex justify-center">
              <ul class="flex flex-col gap-3.5 text-left max-w-fit">
                {#each plan.features as feat}
                  <li class="flex items-start gap-3 group/feat">
                    <div
                      class="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 {plan.accent
                        ? 'bg-brand-highlight/20'
                        : 'bg-brand-primary/5'}"
                    >
                      <Check
                        size={12}
                        class="{plan.accent
                          ? 'text-brand-highlight'
                          : 'text-brand-accent'} group-hover/feat:scale-125 transition-transform"
                      />
                    </div>
                    <span class="text-sm opacity-80 leading-tight">{feat}</span>
                  </li>
                {/each}
              </ul>
            </div>

            <div class="mt-auto w-full">
              <a
                href="https://calendar.app.google/UmcGwtPbfFQkmUPb9"
                target="_blank"
                rel="noopener noreferrer"
                class="btn {plan.accent
                  ? 'btn-secondary text-white'
                  : 'btn-primary'} rounded-full w-full hover:scale-[1.03] transition-all hover:shadow-lg active:scale-95 group/btn"
              >
                Book Call
                <ArrowRight
                  size={18}
                  class="ml-1 group-hover/btn:translate-x-1 transition-transform"
                />
              </a>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- FAQ -->
<section class="py-24 bg-base-100">
  <div class="container mx-auto px-4 max-w-3xl">
    <div class="text-center mb-16 reveal" use:inview>
      <h2 class="text-brand-accent font-semibold tracking-wide uppercase mb-3">
        FAQ
      </h2>
      <h3 class="text-4xl md:text-5xl font-bold text-base-content">
        Frequently Asked Questions
      </h3>
    </div>

    <div class="flex flex-col gap-4">
      {#each faqs as faq, i}
        <div
          class="collapse collapse-arrow bg-base-200 border border-base-300/50 rounded-2xl reveal"
          use:inview
        >
          <input type="radio" name="faq-accordion" checked={i === 0} />
          <div class="collapse-title text-lg font-semibold">
            {faq.q}
          </div>
          <div class="collapse-content">
            <p class="text-base-content/70">{faq.a}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<CTABanner />

<style>
  @keyframes fade-in-up {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
