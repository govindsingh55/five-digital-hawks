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
            title: "TechWear SMS Launch",
            category: "SMS",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
            metrics: {
                before: "0 SMS revenue",
                after: "$22K/mo",
                growth: "New Channel",
            },
            desc: "Launched an SMS program from scratch, reaching 50K subscribers in 90 days.",
        },
        {
            title: "FitStream Organic Growth",
            category: "SEO",
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
            metrics: {
                before: "2K visitors",
                after: "45K visitors",
                growth: "+2,150%",
            },
            desc: "Technical SEO overhaul and content strategy that dominated fitness SERPs.",
        },
        {
            title: "LuxHome Social Takeover",
            category: "Social",
            image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=400&fit=crop",
            metrics: {
                before: "500 followers",
                after: "85K followers",
                growth: "+16,900%",
            },
            desc: "Built a social presence from near-zero with influencer partnerships and viral content.",
        },
        {
            title: "PetCare 360° Strategy",
            category: "Full-Stack",
            image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=400&fit=crop",
            metrics: { before: "$80K/mo", after: "$320K/mo", growth: "+300%" },
            desc: "Full omnichannel deployment aligning email, SMS, paid, and organic for compound growth.",
        },
        {
            title: "FinEdge Lead Gen",
            category: "Email",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
            metrics: {
                before: "50 leads/mo",
                after: "800 leads/mo",
                growth: "+1,500%",
            },
            desc: "Email-driven lead nurture funnel with 12 automated sequences and dynamic segmentation.",
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
        content="See real results. Explore our case studies and portfolio of marketing campaigns that delivered 3× average ROI."
    />
</svelte:head>

<!-- Page Hero -->
<section
    class="relative pt-32 pb-20 bg-gradient-to-br from-brand-primary via-brand-primary/80 to-brand-accent/60 text-white overflow-hidden"
>
    <div class="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
    <div
        class="absolute top-[40%] -left-20 w-[400px] h-[400px] bg-brand-highlight/30 rounded-full blur-[100px] mix-blend-screen animate-float"
    ></div>

    <div class="container mx-auto px-4 max-w-5xl relative z-10 text-center">
        <h1
            class="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 animate-[fade-in-up_0.8s_ease-out]"
        >
            Our <span
                class="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white"
                >Portfolio</span
            >
        </h1>
        <p
            class="text-xl md:text-2xl text-blue-100 font-light max-w-3xl mx-auto animate-[fade-in-up_0.8s_ease-out_0.2s_both]"
        >
            Real campaigns. Real metrics. Real growth. See how we've transformed
            businesses across industries.
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
                        : 'btn-ghost border border-base-300 hover:border-brand-accent'}"
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
                            class="bg-base-200 rounded-xl p-3 sm:p-4 flex flex-row items-center justify-between gap-2 sm:gap-4"
                        >
                            <div class="text-center">
                                <p
                                    class="text-[10px] sm:text-xs text-base-content/50 uppercase mb-1"
                                >
                                    Before
                                </p>
                                <p class="font-bold text-xs sm:text-sm">
                                    {project.metrics.before}
                                </p>
                            </div>
                            <TrendingUp
                                size={18}
                                class="text-brand-accent shrink-0"
                            />
                            <div class="text-center">
                                <p
                                    class="text-[10px] sm:text-xs text-base-content/50 uppercase mb-1"
                                >
                                    After
                                </p>
                                <p
                                    class="font-bold text-xs sm:text-sm text-brand-accent"
                                >
                                    {project.metrics.after}
                                </p>
                            </div>
                            <div
                                class="badge badge-success badge-outline badge-xs sm:badge-sm font-bold"
                            >
                                {project.metrics.growth}
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
