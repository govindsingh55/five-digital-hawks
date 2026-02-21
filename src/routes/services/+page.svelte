<script lang="ts">
    import {
        Mail,
        MessageSquare,
        Monitor,
        Search,
        Share2,
        MousePointerClick,
        Edit3,
        Heart,
        Target,
        Check,
        ArrowRight,
    } from "@lucide/svelte";
    import { inview } from "$lib/actions/inview";
    import CTABanner from "$lib/components/CTABanner.svelte";

    const services = [
        {
            title: "Email Marketing",
            description:
                "From welcome flows to win-back sequences, we design and deploy email automations that nurture subscribers into loyal customers. Our campaigns average 35%+ open rates and 4× industry-standard click rates.",
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
                "Direct, personal, and high-converting. Our SMS campaigns reach customers where they're most engaged — their phones. Average 98% open rates within 3 minutes of delivery.",
            icon: MessageSquare,
            features: [
                "Campaign Automation",
                "Segmentation",
                "Compliance Management",
                "Two-Way Messaging",
            ],
        },
        {
            title: "Website Design",
            description:
                "Modern, lightning-fast websites and landing pages built for conversion. CRO-optimized layouts with stunning visuals that tell your brand's story and drive action.",
            icon: Monitor,
            features: [
                "Responsive Design",
                "CRO Optimization",
                "Speed Optimization",
                "Custom Development",
            ],
        },
        {
            title: "SEO",
            description:
                "Dominate organic search with data-driven SEO strategies. From technical audits to content strategy, we build sustainable organic traffic engines.",
            icon: Search,
            features: [
                "Technical SEO Audit",
                "Keyword Research",
                "Content Strategy",
                "Link Building",
            ],
        },
        {
            title: "Social Media",
            description:
                "Engaging content calendars, community management, and paid social advertising across Instagram, Facebook, LinkedIn, and TikTok.",
            icon: Share2,
            features: [
                "Content Creation",
                "Community Management",
                "Paid Advertising",
                "Analytics Reporting",
            ],
        },
        {
            title: "PPC Management",
            description:
                "Targeted pay-per-click campaigns on Google Ads, Meta, and more. We optimize every dollar for maximum ROAS and lead quality.",
            icon: MousePointerClick,
            features: [
                "Google Ads",
                "Meta Ads",
                "Retargeting",
                "Landing Page Testing",
            ],
        },
        {
            title: "Content Marketing",
            description:
                "Compelling blogs, guides, video scripts, and copy that build authority, attract organic traffic, and convert readers into customers.",
            icon: Edit3,
            features: [
                "Blog Strategy",
                "Video Scripts",
                "Whitepapers",
                "Brand Copywriting",
            ],
        },
        {
            title: "Influencer Marketing",
            description:
                "Strategic influencer partnerships that amplify your brand reach and build authentic trust with new audiences.",
            icon: Heart,
            features: [
                "Influencer Sourcing",
                "Campaign Management",
                "Performance Tracking",
                "Contract Negotiation",
            ],
        },
        {
            title: "360° Marketing",
            description:
                "A fully integrated omnichannel strategy that aligns email, SMS, paid, organic, and content for compounding growth.",
            icon: Target,
            features: [
                "Omnichannel Strategy",
                "Marketing Audit",
                "Funnel Architecture",
                "Data Analytics",
            ],
        },
    ];

    const plans = [
        {
            name: "Starter",
            price: "$2,500",
            period: "/month",
            desc: "Perfect for startups and small businesses looking to get off the ground.",
            features: [
                "1 Marketing Channel",
                "Monthly Strategy Call",
                "Email or SMS Setup",
                "Basic Reporting Dashboard",
                "Email Support",
            ],
            accent: false,
        },
        {
            name: "Growth",
            price: "$5,500",
            period: "/month",
            desc: "For scaling brands that need multi-channel firepower and dedicated strategy.",
            features: [
                "Up to 3 Channels",
                "Weekly Strategy Calls",
                "Dedicated Account Manager",
                "Advanced A/B Testing",
                "Custom Reporting Dashboard",
                "Priority Support",
            ],
            accent: true,
        },
        {
            name: "Enterprise",
            price: "Custom",
            period: "",
            desc: "Full-service 360° marketing for brands ready to dominate their market.",
            features: [
                "All Channels",
                "Daily Slack Access",
                "Dedicated Team of 5+",
                "Executive Strategy Sessions",
                "Custom Integrations",
                "White-Label Reporting",
                "24/7 Priority Support",
            ],
            accent: false,
        },
    ];

    const faqs = [
        {
            q: "How quickly can we expect results?",
            a: "Most clients see measurable improvements within the first 30 days. Significant ROI typically materializes within 60-90 days, depending on the channel and strategy.",
        },
        {
            q: "Do you require long-term contracts?",
            a: "No. We operate on month-to-month agreements. We believe our results should keep you, not a contract. That said, 98% of our clients stay beyond 12 months.",
        },
        {
            q: "Which ESPs do you work with?",
            a: "We're certified partners with Klaviyo, Mailchimp, SendGrid, HubSpot, ActiveCampaign, and many more. We'll recommend the best fit for your tech stack.",
        },
        {
            q: "Can you work with our existing team?",
            a: "Absolutely. We frequently collaborate with in-house teams, acting as an extension of your marketing department rather than a replacement.",
        },
        {
            q: "What industries do you specialize in?",
            a: "We've served 20+ industries, with deep expertise in e-commerce, SaaS, health & wellness, fintech, and professional services.",
        },
    ];

    let openFaq = $state(-1);
    function toggleFaq(i: number) {
        openFaq = openFaq === i ? -1 : i;
    }
</script>

<svelte:head>
    <title>Our Services | Five Digital Hawks</title>
    <meta
        name="description"
        content="Explore our full suite of marketing services — email, SMS, SEO, PPC, social media, content, and 360° strategies."
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
            Our <span
                class="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white"
                >Services</span
            >
        </h1>
        <p
            class="text-lg md:text-2xl text-blue-100 font-light max-w-3xl mx-auto animate-[fade-in-up_0.8s_ease-out_0.2s_both]"
        >
            Full-stack marketing solutions engineered for exponential growth.
            Choose one channel or combine them all.
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
                No long-term contracts. No hidden fees. Just results.
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
                            href="/contact"
                            class="btn {plan.accent
                                ? 'btn-secondary'
                                : 'btn-primary'} rounded-full w-full hover:scale-105 transition-transform"
                        >
                            Get Started <ArrowRight size={18} class="ml-1" />
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
