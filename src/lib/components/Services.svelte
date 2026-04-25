<script lang="ts">
  import {
    Mail,
    MessageSquare,
    Bell,
    Users,
    Settings,
    Monitor,
    Check,
  } from "@lucide/svelte";
  import { inview } from "$lib/actions/inview";

  interface ServiceItem {
    title: string;
    description: string;
    icon: any;
    slug?: string;
    features?: string[];
  }

  let {
    title = "Our Services",
    subtitle = "Exponential Growth",
    description = "We do not just execute tasks; we build systems. Explore our comprehensive suite of services designed to scale your business.",
    items = [],
    background = "bg-base-200",
    showTitle = true,
  } = $props<{
    title?: string;
    subtitle?: string;
    description?: string;
    items?: ServiceItem[];
    background?: string;
    showTitle?: boolean;
  }>();

  const defaultServices: ServiceItem[] = [
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

  const finalItems = $derived(items.length > 0 ? items : defaultServices);
</script>

<section id="services" class="py-24 {background}">
  <div class="container mx-auto px-4 max-w-7xl">
    <!-- Header -->
    {#if showTitle}
      <div class="text-center max-w-3xl mx-auto mb-16 reveal" use:inview>
        <h2
          class="text-brand-accent font-semibold tracking-wide uppercase mb-3"
        >
          {title}
        </h2>
        <h3 class="text-4xl md:text-5xl font-bold text-base-content mb-6">
          Full-Stack Solutions for <br />
          <span
            class="text-transparent bg-clip-text bg-linear-to-r from-brand-primary to-brand-highlight"
            >{subtitle}</span
          >
        </h3>
        <p class="text-lg text-base-content/70">
          {description}
        </p>
      </div>
    {/if}

    <!-- Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each finalItems as service, i}
        <svelte:element
          this={service.slug ? "a" : "div"}
          href={service.slug ? `/services/${service.slug}` : undefined}
          class="card bg-base-100 card-premium border border-base-200/50 group reveal hover:border-brand-accent transition-all duration-300"
          use:inview
        >
          <div
            class="card-body items-center text-center md:items-start md:text-left"
          >
            <!-- Icon -->
            <div
              class="w-14 h-14 rounded-2xl bg-brand-primary/5 text-brand-primary flex items-center justify-center mb-4 group-hover:bg-brand-primary group-hover:text-white group-hover:scale-110 transition-all duration-300 mx-auto md:mx-0"
            >
              <service.icon size={28} strokeWidth={1.5} />
            </div>

            <h3 class="card-title text-xl mb-2">{service.title}</h3>
            <p class="text-base-content/70 text-sm mb-4">
              {service.description}
            </p>

            {#if service.features && service.features.length > 0}
              <ul class="flex flex-col gap-2">
                {#each service.features as feat}
                  <li
                    class="flex items-center gap-2 text-sm text-base-content/60"
                  >
                    <Check size={16} class="text-brand-accent shrink-0" />
                    {feat}
                  </li>
                {/each}
              </ul>
            {/if}

            {#if service.slug}
              <div class="card-actions mt-6">
                <span
                  class="btn btn-ghost btn-sm text-brand-accent p-0 hover:bg-transparent hover:text-brand-primary group-hover:translate-x-1 transition-all"
                >
                  Learn more &rarr;
                </span>
              </div>
            {:else if !service.features}
              <div class="card-actions mt-6">
                <button
                  class="btn btn-ghost btn-sm text-brand-accent p-0 hover:bg-transparent hover:text-brand-primary group-hover:translate-x-1 transition-all"
                >
                  Explore &rarr;
                </button>
              </div>
            {/if}
          </div>
        </svelte:element>
      {/each}
    </div>
  </div>
</section>
