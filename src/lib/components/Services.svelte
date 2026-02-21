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
    } from "@lucide/svelte";
    import { inview } from "$lib/actions/inview";

    const services = [
        {
            title: "Email Marketing",
            description:
                "Automated flows, striking templates, and strategic campaigns that convert.",
            icon: Mail,
        },
        {
            title: "SMS Marketing",
            description:
                "High-open-rate text campaigns to reach customers directly on their phones.",
            icon: MessageSquare,
        },
        {
            title: "Website Design",
            description:
                "Modern, high-converting stores and landing pages optimized for speed.",
            icon: Monitor,
        },
        {
            title: "SEO",
            description:
                "Data-driven search engine optimization to rank you higher and drive organic traffic.",
            icon: Search,
        },
        {
            title: "Social Media",
            description:
                "Engaging content and community management across platforms.",
            icon: Share2,
        },
        {
            title: "PPC Management",
            description:
                "Targeted ad campaigns on Google, Meta, and more for instant ROI.",
            icon: MousePointerClick,
        },
        {
            title: "Content Marketing",
            description:
                "Compelling blogs, guides, and copy that tell your brand story.",
            icon: Edit3,
        },
        {
            title: "Influencer Marketing",
            description:
                "Strategic partnerships to amplify your brand reach and authenticity.",
            icon: Heart,
        },
        {
            title: "360° Marketing",
            description:
                "Comprehensive omnichannel strategy aligning all efforts for maximum growth.",
            icon: Target,
        },
    ];

    const delays = [
        "",
        "delay-100",
        "delay-200",
        "delay-300",
        "delay-100",
        "delay-200",
        "delay-300",
        "delay-100",
        "delay-200",
    ];
</script>

<section id="services" class="py-24 bg-base-200">
    <div class="container mx-auto px-4 max-w-7xl">
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto mb-16 reveal" use:inview>
            <h2
                class="text-brand-accent font-semibold tracking-wide uppercase mb-3"
            >
                Our Services
            </h2>
            <h3 class="text-4xl md:text-5xl font-bold text-base-content mb-6">
                Full-Stack Solutions for <br />
                <span
                    class="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-highlight"
                    >Exponential Growth</span
                >
            </h3>
            <p class="text-lg text-base-content/70">
                We do not just execute tasks; we build systems. Explore our
                comprehensive suite of services designed to scale your business.
            </p>
        </div>

        <!-- Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {#each services as service, i}
                <div
                    class="card bg-base-100 card-premium border border-base-200/50 group reveal {delays[
                        i
                    ]}"
                    use:inview
                >
                    <div
                        class="card-body items-center text-center md:items-start md:text-left"
                    >
                        <!-- Icon -->
                        <div
                            class="w-14 h-14 rounded-2xl bg-brand-primary/5 text-brand-primary flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-white group-hover:scale-110 transition-all duration-300 mx-auto md:mx-0"
                        >
                            <service.icon size={28} strokeWidth={1.5} />
                        </div>

                        <h4 class="card-title text-xl mb-2">{service.title}</h4>
                        <p class="text-base-content/70 flex-grow">
                            {service.description}
                        </p>

                        <div class="card-actions mt-6">
                            <button
                                class="btn btn-ghost btn-sm text-brand-accent p-0 hover:bg-transparent hover:text-brand-primary group-hover:translate-x-1 transition-all"
                            >
                                Learn more &rarr;
                            </button>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>
