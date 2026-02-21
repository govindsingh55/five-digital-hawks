<script lang="ts">
    import { inview } from "$lib/actions/inview";

    const partners = [
        { name: "Klaviyo", id: 1 },
        { name: "Mailchimp", id: 2 },
        { name: "SendGrid", id: 3 },
        { name: "HubSpot", id: 4 },
        { name: "ActiveCampaign", id: 5 },
        { name: "Google Ads", id: 6 },
        { name: "Meta", id: 7 },
    ];
</script>

<section
    class="py-12 bg-base-100 border-b border-base-200 overflow-hidden reveal"
    use:inview
>
    <div class="container mx-auto px-4 max-w-7xl">
        <p
            class="text-center text-sm font-semibold tracking-wider text-base-content/60 uppercase mb-8"
        >
            Trusted by 5000+ brands & powered by industry leaders
        </p>

        <!-- Marquee Container -->
        <div class="relative flex overflow-x-hidden group">
            <!-- Gradient Masks -->
            <div
                class="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-base-100 to-transparent z-10 pointer-events-none"
            ></div>
            <div
                class="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-base-100 to-transparent z-10 pointer-events-none"
            ></div>

            <!-- Marquee Track -->
            <div
                class="flex animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused] items-center"
            >
                {#each [...partners, ...partners] as partner, i}
                    <div
                        class="mx-8 md:mx-16 flex items-center justify-center opacity-50 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
                    >
                        <span
                            class="text-xl md:text-2xl font-bold text-base-content whitespace-nowrap"
                        >
                            {partner.name}
                        </span>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>

<style>
    @keyframes marquee {
        0% {
            transform: translateX(0%);
        }
        100% {
            transform: translateX(-50%);
        }
    }
    .animate-marquee {
        animation: marquee 30s linear infinite;
        width: max-content;
    }
</style>
