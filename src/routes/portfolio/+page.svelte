<script lang="ts">
    import { ExternalLink, TrendingUp, ArrowRight } from "@lucide/svelte";
    import { inview } from "$lib/actions/inview";
    import Testimonials from "$lib/components/Testimonials.svelte";
    import CTABanner from "$lib/components/CTABanner.svelte";

    const categories = ["All", "Email", "SMS", "SEO", "Social", "Full-Stack"];
    let activeFilter = $state("All");

    const projects = [
        {
            title: "EcoLife Revenue Engine",
            category: "Email",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
            metrics: { before: "$12K/mo", after: "$48K/mo", growth: "+300%" },
            desc: "Rebuilt the complete email automation stack on Klaviyo with 15 lifecycle flows.",
        },
        {
            title: "Glow & Co. Retention",
            category: "Lifecycle",
            image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&q=80",
            metrics: "45% Revenue from Email",
            desc: "Full lifecycle strategy for a leading skincare brand, focusing on high-converting welcome flows and win-back sequences.",
        },
        {
            title: "TechFlow SMS",
            category: "SMS Marketing",
            image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=800&q=80",
            metrics: "12x ROI on SMS",
            desc: "Personalized SMS campaigns for a SaaS platform, driving instant engagement and reducing churn by 15%.",
        },
        {
            title: "Elite Store Re-Dev",
            category: "Website Dev",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
            metrics: "3.2% Conversion Rate",
            desc: "Custom Svelte-built e-commerce store optimized for speed and lifecycle integration.",
        },
        {
            title: "Pure Bites CRM",
            category: "CRM",
            image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80",
            metrics: "25% Increase in LTV",
            desc: "Data-driven CRM audit and strategy for a health-food brand, cleaning 50k+ records and segmenting for profit.",
        },
        {
            title: "Vibe Fashion Email",
            category: "Email Marketing",
            image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
            metrics: "38% Open Rate",
            desc: "Weekly newsletter strategy and layout overhaul for a fast-fashion brand, hitting record engagement.",
        },
        {
            title: "Urban Gear Lifecycle",
            category: "Lifecycle",
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
            metrics: "2.5x Customer Frequency",
            desc: "Implementing a tiered loyalty program and cross-sell engine to increase repeat purchases.",
        },
    ];

    let filteredProjects = $derived(
        activeFilter === "All"
            ? projects
            : projects.filter((p) => p.category === activeFilter),
    );
</script>

<svelte:head>
    <title>Portfolio | Five Digital Hawks</title>
    <meta
        name="description"
        content="Case studies of high-performance lifecycle and retention marketing campaigns for global brands."
    />
</svelte:head>

<!-- Page Hero -->
<section
    class="relative pt-32 pb-20 bg-gradient-to-br from-brand-accent via-brand-accent/80 to-brand-primary/60 text-white overflow-hidden"
>
    <div class="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
    <div
        class="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-brand-accent/50 rounded-full blur-[100px] mix-blend-screen animate-pulse-glow"
    ></div>

    <div class="container mx-auto px-4 max-w-5xl relative z-10 text-center">
        <h1
            class="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 animate-[fade-in-up_0.8s_ease-out]"
        >
            Our <span
                class="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white"
                >Work</span
            >
        </h1>
        <p
            class="text-lg md:text-2xl text-blue-100 font-light max-w-3xl mx-auto animate-[fade-in-up_0.8s_ease-out_0.2s_both]"
        >
            Real results for ambitious brands. We don't just build systems; we
            build revenue engines.
        </p>
    </div>
</section>

<!-- Filter Tabs -->
<section class="py-24 bg-base-100">
    <div class="container mx-auto px-4 max-w-7xl">
        <div
            class="flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-3 mb-16 overflow-x-auto pb-4 hide-scrollbar reveal"
            use:inview
        >
            {#each categories as cat}
                <button
                    class="btn btn-sm rounded-full transition-all whitespace-nowrap {activeFilter ===
                    cat
                        ? 'btn-primary shadow-lg scale-105'
                        : 'btn-ghost border border-base-300 hover:border-brand-highlight'}"
                    onclick={() => (activeFilter = cat)}
                >
                    {cat}
                </button>
            {/each}
        </div>

        <!-- Project Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {#each filteredProjects as project, i (project.title)}
                <div
                    class="card bg-base-100 card-premium border border-base-200/50 overflow-hidden group reveal"
                    use:inview
                >
                    <!-- Image -->
                    <figure class="relative h-48 sm:h-52 overflow-hidden">
                        <img
                            src={project.image}
                            alt={project.title}
                            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                        >
                            <span class="badge badge-primary"
                                >{project.category}</span
                            >
                        </div>
                    </figure>

                    <div
                        class="card-body p-5 sm:p-8 items-center text-center md:items-start md:text-left"
                    >
                        <h3 class="card-title text-lg sm:text-xl">
                            {project.title}
                        </h3>
                        <p
                            class="text-base-content/70 text-sm mb-4 line-clamp-2 md:line-clamp-none"
                        >
                            {project.desc}
                        </p>

                        <!-- Metrics -->
                        <div
                            class="bg-brand-primary/5 rounded-xl p-3 sm:p-4 flex flex-row items-center justify-between gap-2"
                        >
                            <div class="flex items-center gap-2">
                                <TrendingUp
                                    size={18}
                                    class="text-brand-accent shrink-0"
                                />
                                <span
                                    class="text-sm font-bold text-brand-primary"
                                    >Result</span
                                >
                            </div>
                            <div class="badge badge-primary font-bold text-xs">
                                {#if typeof project.metrics === "object" && project.metrics !== null}
                                    {project.metrics.growth}
                                {:else}
                                    {project.metrics}
                                {/if}
                            </div>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>

<!-- Testimonials (reused) -->
<Testimonials />

<!-- CTA -->
<CTABanner />

<style>
    .hide-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
    .hide-scrollbar::-webkit-scrollbar {
        display: none;
    }

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
