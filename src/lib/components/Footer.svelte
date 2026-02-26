<script lang="ts">
    import {
        Linkedin,
        Twitter,
        Github,
        Mail,
        MapPin,
        Phone,
    } from "@lucide/svelte";
</script>

<footer
    class="bg-base-300 text-base-content relative pt-20 pb-10 border-t border-base-200"
>
    <div class="container mx-auto px-4 max-w-7xl">
        <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
        >
            <!-- Brand details -->
            <div class="lg:col-span-1">
                <a href="/" class="flex items-center gap-2 mb-6 group">
                    <img
                        src="/logo.png"
                        alt="Five Digital Hawks"
                        class="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                </a>
                <p class="text-base-content/70 leading-relaxed mb-6">
                    Architecting predictable, scalable, and highly profitable
                    marketing systems for visionary brands since 2011.
                </p>
                <div class="flex gap-4">
                    <a
                        href="/"
                        class="btn btn-circle btn-sm btn-ghost hover:bg-brand-primary hover:text-white transition-colors"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={18} />
                    </a>
                    <a
                        href="/"
                        class="btn btn-circle btn-sm btn-ghost hover:bg-brand-primary hover:text-white transition-colors"
                        aria-label="Twitter"
                    >
                        <Twitter size={18} />
                    </a>
                    <a
                        href="/"
                        class="btn btn-circle btn-sm btn-ghost hover:bg-brand-primary hover:text-white transition-colors"
                        aria-label="GitHub"
                    >
                        <Github size={18} />
                    </a>
                </div>
            </div>

            <!-- Services Links -->
            <div>
                <h4 class="font-bold text-lg mb-6 uppercase tracking-wider">
                    Services
                </h4>
                <ul class="flex flex-col gap-3">
                    <li>
                        <a
                            href="/services"
                            class="link link-hover text-base-content/70 hover:text-brand-accent transition-colors"
                            >Email Marketing</a
                        >
                    </li>
                    <li>
                        <a
                            href="/services"
                            class="link link-hover text-base-content/70 hover:text-brand-accent transition-colors"
                            >SMS Marketing</a
                        >
                    </li>
                    <li>
                        <a
                            href="/services"
                            class="link link-hover text-base-content/70 hover:text-brand-accent transition-colors"
                            >Push Marketing</a
                        >
                    </li>
                    <li>
                        <a
                            href="/services"
                            class="link link-hover text-base-content/70 hover:text-brand-accent transition-colors"
                            >Lifecycle Management</a
                        >
                    </li>
                    <li>
                        <a
                            href="/services"
                            class="link link-hover text-base-content/70 hover:text-brand-accent transition-colors"
                            >CRM Management</a
                        >
                    </li>
                    <li>
                        <a
                            href="/services"
                            class="link link-hover text-base-content/70 hover:text-brand-accent transition-colors"
                            >Website Development</a
                        >
                    </li>
                </ul>
            </div>

            <!-- Company Links -->
            <div>
                <h4 class="font-bold text-lg mb-6 uppercase tracking-wider">
                    Company
                </h4>
                <ul class="flex flex-col gap-3">
                    <li>
                        <a
                            href="/about"
                            class="link link-hover text-base-content/70 hover:text-brand-accent transition-colors"
                            >About Us</a
                        >
                    </li>
                    <li>
                        <a
                            href="/about"
                            class="link link-hover text-base-content/70 hover:text-brand-accent transition-colors"
                            >Our Team</a
                        >
                    </li>
                    <li>
                        <a
                            href="/portfolio"
                            class="link link-hover text-base-content/70 hover:text-brand-accent transition-colors"
                            >Testimonials</a
                        >
                    </li>
                    <li>
                        <a
                            href="/portfolio"
                            class="link link-hover text-base-content/70 hover:text-brand-accent transition-colors"
                            >Case Studies</a
                        >
                    </li>
                    <li>
                        <a
                            href="/contact"
                            class="link link-hover text-base-content/70 hover:text-brand-accent transition-colors"
                            >Careers</a
                        >
                    </li>
                    <li>
                        <a
                            href="/contact"
                            class="link link-hover text-base-content/70 hover:text-brand-accent transition-colors"
                            >Privacy Policy</a
                        >
                    </li>
                </ul>
            </div>

            <!-- Contact Info -->
            <div>
                <h4 class="font-bold text-lg mb-6 uppercase tracking-wider">
                    Contact
                </h4>
                <ul class="flex flex-col gap-4">
                    <li class="flex items-start gap-3 text-base-content/70">
                        <MapPin
                            size={20}
                            class="text-brand-accent mt-1 shrink-0"
                        />
                        <span
                            >123 Market St, Suite 400<br />San Francisco, CA
                            94105</span
                        >
                    </li>
                    <li class="flex items-center gap-3 text-base-content/70">
                        <Phone size={20} class="text-brand-accent shrink-0" />
                        <a
                            href="tel:+18005550199"
                            class="hover:text-brand-accent transition-colors"
                            >+1 (800) 555-0199</a
                        >
                    </li>
                    <li class="flex items-center gap-3 text-base-content/70">
                        <Mail size={20} class="text-brand-accent shrink-0" />
                        <a
                            href="mailto:hello@fivedigitalhawks.com"
                            class="hover:text-brand-accent transition-colors"
                            >hello@fivedigitalhawks.com</a
                        >
                    </li>
                </ul>
            </div>
        </div>

        <!-- Bottom Bar -->
        <div
            class="pt-8 border-t border-base-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-base-content/50"
        >
            <p>
                &copy; {new Date().getFullYear()} Five Digital Hawks. All rights
                reserved.
            </p>
            <div class="flex gap-4">
                <a href="/" class="hover:text-brand-accent transition-colors"
                    >Terms of Service</a
                >
                <a href="/" class="hover:text-brand-accent transition-colors"
                    >Privacy Policy</a
                >
            </div>
        </div>
    </div>
</footer>
