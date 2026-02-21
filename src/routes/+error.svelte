<script lang="ts">
    import { page } from "$app/state";
    import { Home, ArrowLeft, Search } from "@lucide/svelte";
</script>

<svelte:head>
    <title>{page.status} | Five Digital Hawks</title>
</svelte:head>

<section
    class="min-h-[80vh] flex items-center justify-center bg-base-100 overflow-hidden relative py-20"
>
    <!-- Decorative background elements -->
    <div
        class="absolute top-1/4 -left-20 w-80 h-80 bg-brand-primary/5 rounded-full blur-3xl animate-float"
    ></div>
    <div
        class="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl animate-float-delayed"
    ></div>

    <div class="container mx-auto px-4 max-w-2xl text-center relative z-10">
        <!-- Hawk Illustration / SVG placeholder -->
        <div class="mb-8 relative inline-block">
            <div
                class="text-[12rem] md:text-[16rem] font-black text-base-200 select-none leading-none"
            >
                {page.status}
            </div>
            <div class="absolute inset-0 flex items-center justify-center">
                <div
                    class="w-32 h-32 md:w-48 md:h-48 rounded-3xl bg-base-100 shadow-2xl border border-base-200 flex items-center justify-center rotate-12 hover:rotate-0 transition-transform duration-500 group"
                >
                    <Search
                        size={64}
                        class="text-brand-accent group-hover:scale-110 transition-transform"
                        strokeWidth={1.5}
                    />
                </div>
            </div>
        </div>

        <h1 class="text-3xl md:text-5xl font-bold text-base-content mb-6">
            Oops! This Hawk <br />
            <span
                class="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-highlight"
                >Lost Its Way</span
            >
        </h1>

        <p class="text-lg text-base-content/60 mb-10 max-w-md mx-auto">
            The page you are looking for might have been moved, deleted, or
            never existed. Don't worry, even the best hawks need a map
            sometimes.
        </p>

        <div
            class="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
            <a
                href="/"
                class="btn btn-primary btn-lg rounded-full px-8 shadow-xl hover:scale-105 transition-transform"
            >
                <Home size={20} class="mr-2" />
                Back to Ground
            </a>
            <button
                onclick={() => history.back()}
                class="btn btn-ghost btn-lg rounded-full px-8 hover:bg-base-200 transition-colors"
            >
                <ArrowLeft size={20} class="mr-2" />
                Previous Page
            </button>
        </div>

        <!-- Custom 404 Search Link or Support -->
        <div class="mt-16 pt-8 border-t border-base-200">
            <p class="text-sm text-base-content/50">
                Need immediate help? <a
                    href="/contact"
                    class="text-brand-accent hover:underline font-medium"
                    >Contact our strategy team</a
                >
            </p>
        </div>
    </div>
</section>

<style>
    @keyframes float {
        0%,
        100% {
            transform: translate(-50%, -50%) translateY(0);
        }
        50% {
            transform: translate(-50%, -50%) translateY(-20px);
        }
    }
</style>
