<script lang="ts">
    import { ShieldCheck, Award, TrendingUp, Users } from "@lucide/svelte";
    import { inview } from "$lib/actions/inview";

    const stats = [
        { value: "15+", label: "Years Experience" },
        { value: "500+", label: "Campaigns Executed" },
        { value: "3x", label: "Average ROI Increase" },
        { value: "98%", label: "Client Retention" },
    ];

    const differentiators = [
        {
            title: "Expert Team",
            desc: "A dedicated squad of marketing veterans who live and breathe performance.",
            icon: Users,
        },
        {
            title: "ESP Specialists",
            desc: "Masters of Klaviyo, Mailchimp, and modern tech stacks.",
            icon: Award,
        },
        {
            title: "Strategy-First",
            desc: "We build comprehensive marketing architectures, not just campaigns.",
            icon: TrendingUp,
        },
        {
            title: "Full-Service",
            desc: "From creative to code, we handle everything under one roof.",
            icon: ShieldCheck,
        },
    ];

    const cardDelays = ["", "delay-200", "delay-400", "delay-600"];
</script>

<section id="why-us" class="py-24 bg-base-100">
    <div class="container mx-auto px-4 max-w-7xl">
        <div class="flex flex-col lg:flex-row gap-16 items-center">
            <!-- Text & Stats Column -->
            <div class="lg:w-1/2 reveal-left" use:inview>
                <h2
                    class="text-brand-accent font-semibold tracking-wide uppercase mb-3 text-left"
                >
                    Why Us
                </h2>
                <h3
                    class="text-4xl md:text-5xl font-bold text-base-content mb-6 leading-tight"
                >
                    We Don't Guess. <br />
                    <span
                        class="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-highlight"
                        >We Guarantee Growth.</span
                    >
                </h3>
                <p
                    class="text-lg text-base-content/70 mb-10 leading-relaxed max-w-lg"
                >
                    Unlike ordinary agencies, Five Digital Hawks combines data
                    science with creative excellence to deliver scalable
                    marketing systems. We become your dedicated growth partners.
                </p>

                <!-- Stats Grid -->
                <div class="grid grid-cols-2 gap-8">
                    {#each stats as stat, i}
                        <div
                            class="flex flex-col border-l-4 border-brand-accent pl-4 reveal {cardDelays[
                                i
                            ]}"
                            use:inview
                        >
                            <span
                                class="text-4xl font-extrabold text-base-content mb-1"
                                >{stat.value}</span
                            >
                            <span
                                class="text-sm text-base-content/60 font-medium uppercase tracking-wider"
                                >{stat.label}</span
                            >
                        </div>
                    {/each}
                </div>
            </div>

            <!-- Differentiators Column (Cards) -->
            <div
                class="lg:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 gap-6 relative"
            >
                <div
                    class="absolute inset-0 bg-brand-primary/5 rounded-3xl -m-6 -z-10"
                ></div>

                {#each differentiators as diff, i}
                    <div
                        class="card bg-base-100 card-premium border border-base-200/40 p-6 reveal {cardDelays[
                            i
                        ]} {i === 1 || i === 3 ? 'sm:mt-8' : ''}"
                        use:inview
                    >
                        <div
                            class="w-12 h-12 rounded-xl bg-brand-highlight/20 text-brand-highlight flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                        >
                            <diff.icon size={24} strokeWidth={2} />
                        </div>
                        <h4 class="text-xl font-bold mb-2">{diff.title}</h4>
                        <p class="text-base-content/70 text-sm">{diff.desc}</p>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>
