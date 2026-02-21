<script lang="ts">
    import { Search, PenTool, Rocket } from "@lucide/svelte";
    import { inview } from "$lib/actions/inview";

    const steps = [
        {
            step: "01",
            title: "Discover & Audit",
            desc: "We analyze your current stack, uncover hidden revenue gaps, and define your ideal customer profile.",
            icon: Search,
        },
        {
            step: "02",
            title: "Strategize & Build",
            desc: "Our experts architect a bespoke marketing funnel, craft compelling copy, and design stunning visuals.",
            icon: PenTool,
        },
        {
            step: "03",
            title: "Execute & Scale",
            desc: "We launch campaigns, rigorously A/B test every variable, and optimize for maximum ROI.",
            icon: Rocket,
        },
    ];

    const stepDelays = ["", "delay-200", "delay-400"];
</script>

<section class="py-24 bg-base-200 relative">
    <div class="container mx-auto px-4 max-w-7xl">
        <div class="text-center max-w-3xl mx-auto mb-20 reveal" use:inview>
            <h2
                class="text-brand-accent font-semibold tracking-wide uppercase mb-3"
            >
                Process
            </h2>
            <h3 class="text-4xl md:text-5xl font-bold text-base-content mb-6">
                How It Works
            </h3>
            <p class="text-lg text-base-content/70">
                A streamlined, three-step methodology proven to generate
                measurable results consistently.
            </p>
        </div>

        <div class="relative max-w-5xl mx-auto">
            <!-- Desktop Timeline Line -->
            <div
                class="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-brand-accent to-brand-highlight -translate-y-1/2 z-0 opacity-20"
            ></div>

            <div
                class="grid grid-cols-1 md:grid-cols-3 gap-12 text-center relative z-10"
            >
                {#each steps as step, i}
                    <div
                        class="flex flex-col items-center reveal {stepDelays[
                            i
                        ]}"
                        use:inview
                    >
                        <!-- Step Number Badge -->
                        <div
                            class="w-16 h-16 rounded-full bg-base-100 shadow-xl border-4 border-base-200 flex items-center justify-center mb-6 relative group hover:scale-110 transition-transform duration-300"
                        >
                            <span class="text-2xl font-bold text-brand-primary"
                                >{step.step}</span
                            >
                            <div
                                class="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-brand-highlight text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all"
                            >
                                <svelte:component this={step.icon} size={16} />
                            </div>
                        </div>

                        <h4 class="text-2xl font-bold text-base-content mb-4">
                            {step.title}
                        </h4>
                        <p
                            class="text-base-content/70 leading-relaxed text-center px-4"
                        >
                            {step.desc}
                        </p>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>
