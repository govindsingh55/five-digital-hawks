<script lang="ts">
    import { ArrowRight } from "@lucide/svelte";
    import { inview } from "$lib/actions/inview";
</script>

<section class="py-24 relative overflow-hidden bg-brand-primary text-white">
    <!-- Decorative background -->
    <div class="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
    <div
        class="absolute -top-64 -right-64 w-[500px] h-[500px] bg-brand-accent/40 rounded-full blur-[120px] mix-blend-screen animate-float"
    ></div>
    <div
        class="absolute -bottom-64 -left-64 w-[500px] h-[500px] bg-brand-highlight/30 rounded-full blur-[120px] mix-blend-screen animate-float-delayed"
    ></div>

    <div class="container mx-auto px-4 max-w-5xl relative z-10 text-center">
        <div
            class="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-10 md:p-16 shadow-2xl reveal-scale"
            use:inview
        >
            <h2 class="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
                Ready to <span
                    class="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-highlight"
                    >Fly High?</span
                >
            </h2>
            <p
                class="text-lg md:text-2xl text-slate-300 font-light mb-10 max-w-2xl mx-auto"
            >
                Join the 500+ ambitious brands scaling effortlessly with our
                data-driven marketing systems. Let's build your growth engine
                today.
            </p>

            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                    href="/contact"
                    class="btn btn-primary btn-md md:btn-lg rounded-full px-6 md:px-10 hover:scale-105 shadow-[0_10px_40px_-10px_rgba(79,99,186,0.7)] transition-all animate-pulse-glow"
                >
                    Book Free Consultation
                    <ArrowRight size={18} class="ml-2" />
                </a>
            </div>

            <p class="mt-8 text-sm text-slate-400 font-medium">
                No commitment. 100% free strategy session.
            </p>
        </div>
    </div>
</section>
