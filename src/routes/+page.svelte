<script lang="ts">
    import Hero from "$lib/components/Hero.svelte";
    import TrustedBy from "$lib/components/TrustedBy.svelte";
    import Services from "$lib/components/Services.svelte";
    import WhyUs from "$lib/components/WhyUs.svelte";
    import HowItWorks from "$lib/components/HowItWorks.svelte";
    import Testimonials from "$lib/components/Testimonials.svelte";
    import Team from "$lib/components/Team.svelte";
    import CTABanner from "$lib/components/CTABanner.svelte";
</script>

<svelte:head>
    <title>Five Digital Hawks | Marketing to Fly High</title>
    <meta
        name="description"
        content="We architect data-driven Email, SMS, & 360° marketing systems that transform your traffic into loyal, high-LTV customers."
    />
</svelte:head>

<Hero />
<TrustedBy />
<Services />
<WhyUs />
<HowItWorks />
<Testimonials />
<Team />
<CTABanner />
