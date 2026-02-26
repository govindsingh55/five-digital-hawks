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
            name: "Retention Starter",
            price: "$2,500",
            period: "/month",
            desc: "Ideal for startups building their first data-driven retention systems.",
            features: [
                "Email or SMS Setup",
                "Basic Lifecycle Flows",
                "Monthly Strategy Call",
                "Performance Dashboard",
                "Email Support",
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
                "Priority Support",
            ],
            accent: true,
        },
        {
            name: "Enterprise",
            price: "Custom",
            period: "",
            desc: "Bespoke retention engines for brands ready to maximize LTV at scale.",
            features: [
                "Full Lifecycle Orchestration",
                "CRM & Data Integration",
                "Team of 5+ Dedicated Experts",
                "Daily Slack Access",
                "Bi-Weekly Exec Strategy",
                "24/7 Priority Support",
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
    class="relative pt-32 pb-20 bg-gradient-to-br from-brand-primary via-brand-primary/80 to-brand-accent/60 text-white overflow-hidden"
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
                class="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white"
                >Marketing</span
            >
        </h1>
        <p
            class="text-lg md:text-2xl text-blue-100 font-light max-w-3xl mx-auto animate-[fade-in-up_0.8s_ease-out_0.2s_both]"
        >
            We build data-driven retention engines that turn high-traffic stores
            into profitable brands through strategic Email, SMS, & Push
            notification marketing.
        </p>
    </div>
</section>

<!-- Expanded Service Cards -->
<section class="py-24 bg-base-100">
    <div class="container mx-auto px-4 max-w-7xl">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {#each services as svc, i}
                <div
                    class="card bg-base-100 card-premium border border-base-200/50 group reveal"
                    use:inview
                >
                    <div
                        class="card-body items-center text-center md:items-start md:text-left"
                    >
                        <div
                            class="w-14 h-14 rounded-2xl bg-brand-primary/5 text-brand-primary flex items-center justify-center mb-4 group-hover:bg-brand-primary group-hover:text-white group-hover:scale-110 transition-all duration-300 mx-auto md:mx-0"
                        >
                            <svc.icon size={28} strokeWidth={1.5} />
                        </div>
                        <h3 class="card-title text-xl mb-2">{svc.title}</h3>
                        <p class="text-base-content/70 text-sm mb-4">
                            {svc.description}
                        </p>
                        <ul class="flex flex-col gap-2">
                            {#each svc.features as feat}
                                <li
                                    class="flex items-center gap-2 text-sm text-base-content/60"
                                >
                                    <Check
                                        size={16}
                                        class="text-brand-accent shrink-0"
                                    />
                                    {feat}
                                </li>
                            {/each}
                        </ul>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>

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
                    class="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-highlight"
                    >Scale With You</span
                >
            </h3>
            <p class="text-base md:text-lg text-base-content/70">
                Data-driven retention for every stage of growth.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {#each plans as plan, i}
                <div
                    class="card shadow-xl border transition-all duration-300 hover:-translate-y-2 reveal {plan.accent
                        ? 'bg-brand-primary text-white border-brand-accent md:scale-105 shadow-[0_20px_60px_-15px_rgba(31,42,85,0.4)]'
                        : 'bg-base-100 border-base-200/50'}"
                    use:inview
                >
                    <div class="card-body p-8 items-center text-center">
                        {#if plan.accent}
                            <div class="badge badge-secondary mb-2">
                                Most Popular
                            </div>
                        {/if}
                        <h3 class="text-2xl font-bold mb-1">{plan.name}</h3>
                        <div class="flex items-end gap-1 mb-4">
                            <span class="text-4xl font-extrabold"
                                >{plan.price}</span
                            >
                            <span class="text-sm opacity-70 mb-1"
                                >{plan.period}</span
                            >
                        </div>
                        <p class="text-sm opacity-80 mb-6">{plan.desc}</p>

                        <ul class="flex flex-col gap-3 mb-8">
                            {#each plan.features as feat}
                                <li class="flex items-center gap-2 text-sm">
                                    <Check
                                        size={16}
                                        class="{plan.accent
                                            ? 'text-brand-highlight'
                                            : 'text-brand-accent'} shrink-0"
                                    />
                                    {feat}
                                </li>
                            {/each}
                        </ul>

                        <a
                            href="https://calendar.app.google/UmcGwtPbfFQkmUPb9"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="btn {plan.accent
                                ? 'btn-secondary'
                                : 'btn-primary'} rounded-full w-full hover:scale-105 transition-transform"
                        >
                            Book Call <ArrowRight size={18} class="ml-1" />
                        </a>
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
            <h2
                class="text-brand-accent font-semibold tracking-wide uppercase mb-3"
            >
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
                    <input
                        type="radio"
                        name="faq-accordion"
                        checked={i === 0}
                    />
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
