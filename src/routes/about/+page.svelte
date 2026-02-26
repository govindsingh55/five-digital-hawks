<script lang="ts">
    import { Users, Target, Eye, Heart, ArrowRight } from "@lucide/svelte";
    import { inview } from "$lib/actions/inview";
    import Team from "$lib/components/Team.svelte";
    import CTABanner from "$lib/components/CTABanner.svelte";

    const milestones = [
        {
            year: "2011",
            title: "Founded",
            desc: "Five Digital Hawks was born with a mission to make marketing measurable.",
        },
        {
            year: "2014",
            title: "100th Client",
            desc: "Crossed our first century of happy clients and built a core team of 12.",
        },
        {
            year: "2017",
            title: "Retention Core",
            desc: "Shifted focus to long-term customer lifetime value and retention systems.",
        },
        {
            year: "2020",
            title: "Global Expansion",
            desc: "Expanded operations to serve brands across North America, Europe, and Asia.",
        },
        {
            year: "2023",
            title: "500+ Campaigns",
            desc: "Hit the 500-campaign milestone with a 98% client retention rate.",
        },
        {
            year: "2026",
            title: "Lifecycle Focus",
            desc: "Launched our full-service lifecycle and retention marketing powerhouse.",
        },
    ];

    const values = [
        {
            title: "Mission",
            desc: "To architect predictable, scalable, and profitable retention systems for every ambitious brand.",
            icon: Target,
        },
        {
            title: "Vision",
            desc: "A world where every business has access to top-tier lifecycle marketing usually reserved for giants.",
            icon: Eye,
        },
        {
            title: "Integrity",
            desc: "Transparency in reporting, honesty in strategy, and accountability in results.",
            icon: Heart,
        },
        {
            title: "Innovation",
            desc: "We stay ahead of the curve with cutting-edge retention tools, AI, and creative techniques.",
            icon: Users,
        },
    ];
</script>

<svelte:head>
    <title>About | Five Digital Hawks</title>
    <meta
        name="description"
        content="Learn about Five Digital Hawks — our mission to drive sustainable growth through retention and lifecycle marketing."
    />
</svelte:head>

<!-- Page Hero -->
<section
    class="relative pt-32 pb-20 bg-gradient-to-br from-brand-primary via-brand-primary/80 to-brand-accent/60 text-white overflow-hidden"
>
    <div class="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
    <div
        class="absolute top-[30%] -right-20 w-[400px] h-[400px] bg-brand-accent/40 rounded-full blur-[100px] mix-blend-screen animate-float"
    ></div>

    <div class="container mx-auto px-4 max-w-5xl relative z-10 text-center">
        <h1
            class="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 animate-[fade-in-up_0.8s_ease-out]"
        >
            About <span
                class="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white"
                >Five Digital Hawks</span
            >
        </h1>
        <p
            class="text-lg md:text-2xl text-blue-100 font-light max-w-3xl mx-auto animate-[fade-in-up_0.8s_ease-out_0.2s_both]"
        >
            We've been on a mission since 2011 to make marketing measurable,
            sustainable, and wildly profitable through advanced retention
            systems.
        </p>
    </div>
</section>

<!-- Brand Story -->
<section class="py-16 md:py-24 bg-base-100">
    <div class="container mx-auto px-4 max-w-6xl">
        <div class="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            <div class="lg:w-1/2 reveal-left" use:inview>
                <h2
                    class="text-brand-accent font-semibold tracking-wide uppercase mb-3 text-sm md:text-base"
                >
                    Our Story
                </h2>
                <h3
                    class="text-2xl sm:text-3xl md:text-4xl font-bold text-base-content mb-6 leading-tight"
                >
                    From One Idea to a <span
                        class="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-highlight"
                        >Full-Service Powerhouse</span
                    >
                </h3>
                <p
                    class="text-base sm:text-lg text-base-content/70 leading-relaxed mb-6"
                >
                    Five Digital Hawks started with a simple belief: marketing
                    should no longer be a guessing game. Our founder, Avinash
                    Singh, spent years watching businesses pour money into
                    campaigns with no measurable ROI.
                </p>
                <p
                    class="text-base sm:text-lg text-base-content/70 leading-relaxed"
                >
                    Today, we've grown into a team of 30+ marketing veterans,
                    data scientists, and creative experts who have deployed over
                    500 campaigns across 20+ industries — all while maintaining
                    a 98% client retention rate.
                </p>
            </div>
            <div class="lg:w-1/2 reveal-right" use:inview>
                <div
                    class="mockup-browser bg-base-300 border border-base-200/50 shadow-2xl"
                >
                    <div class="mockup-browser-toolbar">
                        <div class="input">fivedigitalhawks.com/about</div>
                    </div>
                    <div class="bg-base-200 p-8 flex flex-col gap-4">
                        <div class="flex gap-4">
                            <div class="stat bg-base-100 rounded-xl shadow p-4">
                                <div class="stat-title text-xs">
                                    Clients Served
                                </div>
                                <div
                                    class="stat-value text-2xl text-brand-primary"
                                >
                                    500+
                                </div>
                            </div>
                            <div class="stat bg-base-100 rounded-xl shadow p-4">
                                <div class="stat-title text-xs">Team Size</div>
                                <div
                                    class="stat-value text-2xl text-brand-accent"
                                >
                                    30+
                                </div>
                            </div>
                        </div>
                        <div class="stat bg-base-100 rounded-xl shadow p-4">
                            <div class="stat-title text-xs">
                                Average ROI Increase
                            </div>
                            <div
                                class="stat-value text-3xl text-brand-highlight"
                            >
                                3×
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Mission / Vision / Values -->
<section class="py-24 bg-base-200">
    <div class="container mx-auto px-4 max-w-7xl">
        <div class="text-center max-w-3xl mx-auto mb-16 reveal" use:inview>
            <h2
                class="text-brand-accent font-semibold tracking-wide uppercase mb-3"
            >
                What Drives Us
            </h2>
            <h3 class="text-4xl md:text-5xl font-bold text-base-content mb-6">
                Our Core Values
            </h3>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {#each values as val, i}
                <div
                    class="card bg-base-100 shadow-xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-base-200/50 reveal delay-{(i +
                        1) *
                        100}"
                    use:inview
                >
                    <div
                        class="w-14 h-14 rounded-2xl bg-brand-primary/10 text-brand-primary flex items-center justify-center mb-6"
                    >
                        <svelte:component
                            this={val.icon}
                            size={28}
                            strokeWidth={1.5}
                        />
                    </div>
                    <h4 class="text-xl font-bold mb-3 text-base-content">
                        {val.title}
                    </h4>
                    <p class="text-base-content/70">{val.desc}</p>
                </div>
            {/each}
        </div>
    </div>
</section>

<!-- Timeline -->
<section class="py-24 bg-base-100">
    <div class="container mx-auto px-4 max-w-4xl">
        <div class="text-center max-w-3xl mx-auto mb-16 reveal" use:inview>
            <h2
                class="text-brand-accent font-semibold tracking-wide uppercase mb-3"
            >
                Our Journey
            </h2>
            <h3 class="text-4xl md:text-5xl font-bold text-base-content mb-6">
                Milestones
            </h3>
        </div>

        <div class="relative">
            <!-- Timeline Line -->
            <div
                class="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-brand-accent/20 -translate-x-1/2"
            ></div>

            {#each milestones as ms, i}
                <div
                    class="relative flex items-center mb-12 {i % 2 === 0
                        ? 'md:flex-row'
                        : 'md:flex-row-reverse'} reveal"
                    use:inview
                >
                    <!-- Dot -->
                    <div
                        class="absolute left-4 md:left-1/2 w-4 h-4 bg-brand-accent rounded-full border-4 border-base-100 -translate-x-1/2 z-10 shadow"
                    ></div>

                    <!-- Content Card -->
                    <div
                        class="ml-12 md:ml-0 md:w-[45%] {i % 2 === 0
                            ? 'md:pr-12 md:text-right'
                            : 'md:pl-12 md:ml-auto'}"
                    >
                        <div
                            class="card bg-base-100 shadow-lg border border-base-200/50 p-6 hover:shadow-xl transition-shadow"
                        >
                            <span
                                class="text-brand-accent font-extrabold text-2xl mb-2"
                                >{ms.year}</span
                            >
                            <h4
                                class="text-xl font-bold text-base-content mb-2"
                            >
                                {ms.title}
                            </h4>
                            <p class="text-base-content/70 text-sm">
                                {ms.desc}
                            </p>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>

<!-- Team Section (reused) -->
<Team />

<!-- CTA Banner (reused) -->
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
