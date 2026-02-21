<script lang="ts">
    import { ArrowRight, Play, CheckCircle } from "@lucide/svelte";
</script>

<section
    class="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-gradient-to-br from-brand-primary via-brand-primary/80 to-brand-accent/60"
>
    <!-- Dynamic floating gradient blobs typical of DaisyUI -->
    <div class="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
    <div
        class="absolute top-[20%] -right-20 w-[600px] h-[600px] bg-brand-accent/50 rounded-full blur-[100px] mix-blend-screen animate-float"
    ></div>
    <div
        class="absolute bottom-10 -left-64 w-[500px] h-[500px] bg-brand-highlight/40 rounded-full blur-[120px] mix-blend-screen animate-float-delayed"
    ></div>

    <div class="container mx-auto px-4 max-w-7xl relative z-10">
        <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
            <!-- Text Content (Left) -->
            <div
                class="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left text-white"
            >
                <!-- Badge -->
                <div
                    class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 animate-[fade-in-up_0.8s_ease-out]"
                >
                    <span class="relative flex h-3 w-3">
                        <span
                            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-highlight opacity-75"
                        ></span>
                        <span
                            class="relative inline-flex rounded-full h-3 w-3 bg-brand-highlight"
                        ></span>
                    </span>
                    <span
                        class="text-sm font-semibold tracking-wide uppercase text-brand-highlight"
                        >Top Marketing Agency 2026</span
                    >
                </div>

                <!-- Headline -->
                <h1
                    class="text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1] animate-[fade-in-up_0.8s_ease-out_0.2s_both]"
                >
                    Marketing to <br class="hidden lg:block" />
                    <span
                        class="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white"
                        >Fly High!</span
                    >
                </h1>

                <!-- Subheadline -->
                <p
                    class="text-xl md:text-2xl text-blue-100 max-w-2xl mb-10 font-light animate-[fade-in-up_0.8s_ease-out_0.4s_both]"
                >
                    We architect data-driven Email, SMS, & 360° marketing
                    systems that transform your traffic into loyal, high-LTV
                    customers.
                </p>

                <!-- CTAs -->
                <div
                    class="flex flex-col sm:flex-row gap-4 mb-16 animate-[fade-in-up_0.8s_ease-out_0.5s_both]"
                >
                    <a
                        href="#contact"
                        class="btn btn-primary bg-brand-accent border-none text-white hover:bg-brand-highlight btn-lg rounded-full px-8 shadow-[0_10px_40px_-10px_rgba(79,99,186,0.7)] hover:shadow-[0_15px_50px_-10px_rgba(133,152,219,0.8)] transition-all"
                    >
                        Get Free Consultation
                        <ArrowRight size={20} class="ml-2" />
                    </a>
                    <a
                        href="#work"
                        class="btn btn-outline btn-lg rounded-full px-8 text-white border-white/40 hover:bg-white hover:text-brand-primary transition-all backdrop-blur-sm"
                    >
                        <Play size={20} class="mr-2" />
                        View Our Work
                    </a>
                </div>

                <!-- Trust Stats -->
                <div
                    class="grid grid-cols-2 md:grid-cols-4 gap-6 w-full animate-[fade-in_1s_ease-out_0.8s_both]"
                >
                    <div class="flex flex-col">
                        <span class="text-3xl font-bold text-white mb-1"
                            >15+</span
                        >
                        <span
                            class="text-xs text-blue-200 uppercase tracking-wider font-semibold"
                            >Years Exp</span
                        >
                    </div>
                    <div class="flex flex-col">
                        <span class="text-3xl font-bold text-white mb-1"
                            >500+</span
                        >
                        <span
                            class="text-xs text-blue-200 uppercase tracking-wider font-semibold"
                            >Campaigns</span
                        >
                    </div>
                    <div class="flex flex-col">
                        <span class="text-3xl font-bold text-white mb-1"
                            >3x</span
                        >
                        <span
                            class="text-xs text-blue-200 uppercase tracking-wider font-semibold"
                            >Avg ROI</span
                        >
                    </div>
                    <div class="flex flex-col">
                        <span class="text-3xl font-bold text-white mb-1"
                            >98%</span
                        >
                        <span
                            class="text-xs text-blue-200 uppercase tracking-wider font-semibold"
                            >Retention</span
                        >
                    </div>
                </div>
            </div>

            <!-- Floating Mockup (Right) -->
            <div
                class="lg:w-1/2 relative w-full max-w-lg mx-auto lg:max-w-none mt-10 lg:mt-0 perspective-1000 animate-[fade-in-up_1s_ease-out_0.6s_both]"
            >
                <!-- Main Browser Mockup -->
                <div
                    class="mockup-browser bg-base-300 border border-base-200/50 shadow-2xl animate-float relative z-20"
                >
                    <div class="mockup-browser-toolbar">
                        <div class="input">https://fivedigitalhawks.com</div>
                    </div>
                    <div class="bg-base-200 flex flex-col p-6 h-[400px]">
                        <!-- Fake Skeleton UI for the Mockup -->
                        <div class="w-1/3 h-6 bg-base-300 rounded mb-4"></div>
                        <div
                            class="w-full h-8 bg-brand-primary rounded mb-8 flex items-center px-4"
                        >
                            <span
                                class="text-xs text-white font-bold tracking-widest"
                                >+300% Revenue Increase</span
                            >
                        </div>

                        <div class="grid grid-cols-2 gap-4 mb-4">
                            <div
                                class="h-24 bg-base-100 rounded shadow-sm border border-base-300 p-3 flex flex-col justify-end"
                            >
                                <div
                                    class="w-8 h-8 rounded-full bg-brand-accent/20 mb-2"
                                ></div>
                                <div
                                    class="w-full h-2 bg-base-300 rounded"
                                ></div>
                            </div>
                            <div
                                class="h-24 bg-base-100 rounded shadow-sm border border-base-300 p-3 flex flex-col justify-end"
                            >
                                <div
                                    class="w-8 h-8 rounded-full bg-brand-highlight/20 mb-2"
                                ></div>
                                <div
                                    class="w-full h-2 bg-base-300 rounded"
                                ></div>
                            </div>
                        </div>

                        <div class="mt-auto flex justify-end gap-2">
                            <div class="w-16 h-8 bg-base-300 rounded"></div>
                            <div class="w-24 h-8 bg-brand-accent rounded"></div>
                        </div>
                    </div>
                </div>

                <!-- Floating Abstract Components (like daisyUI home) -->
                <div
                    class="absolute -right-12 top-20 z-30 animate-float-delayed"
                >
                    <div
                        class="card bg-base-100 shadow-xl border border-base-200 p-4 rounded-xl flex items-center gap-3"
                    >
                        <div class="p-2 bg-green-100 text-green-600 rounded-lg">
                            <ArrowRight size={24} class="-rotate-45" />
                        </div>
                        <div>
                            <p class="text-xs font-bold text-base-content/50">
                                Conversion
                            </p>
                            <p class="text-lg font-black text-base-content">
                                +14.2%
                            </p>
                        </div>
                    </div>
                </div>

                <div
                    class="absolute -left-10 bottom-24 z-30 animate-float"
                    style="animation-delay: 1.5s;"
                >
                    <div
                        class="card bg-brand-highlight text-white shadow-lg p-4 rounded-xl flex items-center gap-3 transform -rotate-3"
                    >
                        <CheckCircle size={28} />
                        <div>
                            <p class="text-sm font-bold">Campaign Deployed</p>
                            <p class="text-xs text-amber-100">
                                Zero errors in flow
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    @keyframes fade-in-up {
        from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
        }
        to {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }
    @keyframes fade-in {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
</style>
