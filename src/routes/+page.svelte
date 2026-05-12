<script lang="ts">
    import SEO from "$lib/components/SEO.svelte";
    import Hero from "$lib/components/Hero.svelte";
    import TrustedBy from "$lib/components/TrustedBy.svelte";
    import Services from "$lib/components/Services.svelte";
    import WhyUs from "$lib/components/WhyUs.svelte";
    import HowItWorks from "$lib/components/HowItWorks.svelte";
    import Testimonials from "$lib/components/Testimonials.svelte";
    import Team from "$lib/components/Team.svelte";
    import CTABanner from "$lib/components/CTABanner.svelte";
</script>

<SEO 
    title="Marketing to Fly High" 
    description="We architect data-driven Email, SMS, & 360° marketing systems that transform your traffic into loyal, high-LTV customers."
    keywords={["email marketing", "sms marketing", "data-driven marketing", "marketing systems", "LTV optimization"]}
/>

<Hero />
<TrustedBy />
<Services />
<WhyUs />
<HowItWorks />
<Testimonials />
<Team />
<CTABanner />
