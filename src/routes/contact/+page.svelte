<script lang="ts">
    import {
        MapPin,
        Phone,
        Mail,
        Send,
        Clock,
        ArrowRight,
    } from "@lucide/svelte";
    import { inview } from "$lib/actions/inview";

    const officeInfo = [
        {
            icon: MapPin,
            title: "Visit Us",
            detail: "123 Market St, Suite 400\nSan Francisco, CA 94105",
        },
        {
            icon: Phone,
            title: "Call Us",
            detail: "+1 (800) 555-0199",
            href: "tel:+18005550199",
        },
        {
            icon: Mail,
            title: "Email Us",
            detail: "hello@fivedigitalhawks.com",
            href: "mailto:hello@fivedigitalhawks.com",
        },
        {
            icon: Clock,
            title: "Working Hours",
            detail: "Mon – Fri: 9AM – 6PM PST\nSat – Sun: Closed",
        },
    ];

    const serviceOptions = [
        "Email Marketing",
        "SMS Marketing",
        "Push Marketing",
        "Lifecycle Management",
        "CRM Management",
        "Website Development",
        "Other",
    ];

    const faqs = [
        {
            q: "What happens after I book a call?",
            a: "You'll receive a confirmation email with a meeting link. During the call, we'll discuss your current retention setup and identify immediate growth opportunities.",
        },
        {
            q: "Is the consultation really free?",
            a: "Absolutely. The initial strategy session is 100% free, with no commitment or obligations. We'll audit your current setup and share actionable recommendations.",
        },
        {
            q: "Which platforms do you support?",
            a: "We work with Klaviyo, Attentive, Postscript, HubSpot, and most major e-commerce and CRM platforms.",
        },
        {
            q: "Do you work with international clients?",
            a: "Yes! We serve brands across North America, Europe, and Asia. All communication and meetings can be conducted remotely.",
        },
    ];
</script>

<svelte:head>
    <title>Contact | Five Digital Hawks</title>
    <meta
        name="description"
        content="Get in touch with Five Digital Hawks. Book a free consultation and start building your high-performance retention marketing engine."
    />
</svelte:head>

<!-- Page Hero -->
<section
    class="relative pt-32 pb-20 bg-gradient-to-br from-brand-primary via-brand-primary/80 to-brand-accent/60 text-white overflow-hidden"
>
    <div class="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
    <div
        class="absolute top-[50%] -right-24 w-[400px] h-[400px] bg-brand-accent/40 rounded-full blur-[100px] mix-blend-screen animate-float"
    ></div>

    <div class="container mx-auto px-4 max-w-5xl relative z-10 text-center">
        <h1
            class="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 animate-[fade-in-up_0.8s_ease-out]"
        >
            Build Your <span
                class="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white"
                >Revenue Engine</span
            >
        </h1>
        <p
            class="text-lg md:text-2xl text-blue-100 font-light max-w-3xl mx-auto animate-[fade-in-up_0.8s_ease-out_0.2s_both] mb-10"
        >
            Ready to transform your retention? Book a direct consultation or
            send us a message below.
        </p>

        <div
            class="flex flex-col sm:flex-row gap-4 justify-center animate-[fade-in-up_0.8s_ease-out_0.3s_both]"
        >
            <a
                href="https://calendar.app.google/UmcGwtPbfFQkmUPb9"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-primary bg-brand-accent border-none text-white hover:bg-brand-highlight btn-lg rounded-full px-10 shadow-lg transition-all"
            >
                Book Free Consultation
                <ArrowRight size={20} class="ml-2" />
            </a>
            <a
                href="#contact-form"
                class="btn btn-outline btn-lg rounded-full px-10 text-white border-white/40 hover:bg-white hover:text-brand-primary transition-all backdrop-blur-sm"
            >
                Send Message
            </a>
        </div>
    </div>
</section>

<!-- Contact Form + Info -->
<section id="contact-form" class="py-24 bg-base-100">
    <div class="container mx-auto px-4 max-w-7xl">
        <div class="flex flex-col lg:flex-row gap-16">
            <!-- Form Column -->
            <div class="lg:w-3/5 reveal-left" use:inview>
                <h2 class="text-3xl font-bold text-base-content mb-8">
                    Send Us a Message
                </h2>

                <form class="flex flex-col gap-6" action="/" method="POST">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="form-control">
                            <label class="label" for="name">
                                <span class="label-text font-medium"
                                    >Full Name *</span
                                >
                            </label>
                            <input
                                id="name"
                                type="text"
                                placeholder="John Doe"
                                class="input input-bordered w-full focus:input-primary transition-colors"
                                required
                            />
                        </div>
                        <div class="form-control">
                            <label class="label" for="email">
                                <span class="label-text font-medium"
                                    >Email *</span
                                >
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="john@company.com"
                                class="input input-bordered w-full focus:input-primary transition-colors"
                                required
                            />
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="form-control">
                            <label class="label" for="company">
                                <span class="label-text font-medium"
                                    >Company</span
                                >
                            </label>
                            <input
                                id="company"
                                type="text"
                                placeholder="Your Company"
                                class="input input-bordered w-full focus:input-primary transition-colors"
                            />
                        </div>
                        <div class="form-control">
                            <label class="label" for="service">
                                <span class="label-text font-medium"
                                    >Service Interest *</span
                                >
                            </label>
                            <select
                                id="service"
                                class="select select-bordered w-full focus:select-primary transition-colors"
                                required
                            >
                                <option disabled selected value=""
                                    >Select a service</option
                                >
                                {#each serviceOptions as opt}
                                    <option>{opt}</option>
                                {/each}
                            </select>
                        </div>
                    </div>

                    <div class="form-control">
                        <label class="label" for="message">
                            <span class="label-text font-medium">Message *</span
                            >
                        </label>
                        <textarea
                            id="message"
                            class="textarea textarea-bordered h-36 w-full focus:textarea-primary transition-colors"
                            placeholder="Tell us about your project, goals, and current marketing challenges..."
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        class="btn btn-primary btn-lg rounded-full w-full md:w-auto md:self-start px-10 hover:scale-105 transition-transform animate-pulse-glow"
                    >
                        Send Message
                        <Send size={20} class="ml-2" />
                    </button>

                    <p class="text-sm text-base-content/50">
                        By submitting this form, you agree to our privacy
                        policy. We'll never share your information.
                    </p>
                </form>
            </div>

            <!-- Info Column -->
            <div class="lg:w-2/5 reveal-right" use:inview>
                <h2 class="text-3xl font-bold text-base-content mb-8">
                    Get In Touch
                </h2>

                <div class="flex flex-col gap-6">
                    {#each officeInfo as info}
                        <div
                            class="card bg-base-100 card-premium p-6 flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 border border-base-200"
                        >
                            <div
                                class="w-12 h-12 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center shrink-0 group-hover:bg-brand-primary group-hover:text-white transition-colors"
                            >
                                <info.icon size={24} />
                            </div>
                            <div>
                                <h4 class="font-bold text-base-content mb-1">
                                    {info.title}
                                </h4>
                                {#if info.href}
                                    <a
                                        href={info.href}
                                        class="text-brand-accent hover:underline text-sm"
                                        >{info.detail}</a
                                    >
                                {:else}
                                    <p
                                        class="text-base-content/70 text-sm whitespace-pre-line"
                                    >
                                        {info.detail}
                                    </p>
                                {/if}
                            </div>
                        </div>
                    {/each}
                </div>

                <!-- Map Placeholder -->
                <div
                    class="mt-8 rounded-2xl overflow-hidden border border-base-300/50 shadow-lg h-64 bg-base-200 flex items-center justify-center"
                >
                    <div class="text-center text-base-content/40">
                        <MapPin size={48} class="mx-auto mb-2" />
                        <p class="font-medium">Map Integration</p>
                        <p class="text-sm">San Francisco, CA</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- FAQ -->
<section class="py-24 bg-base-200">
    <div class="container mx-auto px-4 max-w-3xl">
        <div class="text-center mb-16 reveal" use:inview>
            <h2
                class="text-brand-accent font-semibold tracking-wide uppercase mb-3"
            >
                FAQ
            </h2>
            <h3 class="text-4xl font-bold text-base-content">
                Common Questions
            </h3>
        </div>

        <div class="flex flex-col gap-4">
            {#each faqs as faq, i}
                <div
                    class="collapse collapse-arrow bg-base-100 border border-base-300/50 rounded-2xl reveal"
                    use:inview
                >
                    <input type="radio" name="contact-faq" checked={i === 0} />
                    <div class="collapse-title text-lg font-semibold">
                        {faq.q}
                    </div>
                    <div class="collapse-content">
                        <p class="text-base-content/70">{faq.a}</p>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>

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
