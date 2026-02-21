<script lang="ts">
    import { Menu, X } from "@lucide/svelte";
    import { fade, slide } from "svelte/transition";
    import { page } from "$app/state";

    let isScrolled = $state(false);
    let isMobileMenuOpen = $state(false);

    function handleScroll() {
        isScrolled = window.scrollY > 10;
    }

    function toggleMobileMenu() {
        isMobileMenuOpen = !isMobileMenuOpen;
    }

    function closeMobileMenu() {
        isMobileMenuOpen = false;
    }

    const navLinks = [
        { href: "/about", label: "About" },
        { href: "/services", label: "Services" },
        { href: "/portfolio", label: "Portfolio" },
        { href: "/contact", label: "Contact" },
    ];
</script>

<svelte:window on:scroll={handleScroll} />

<div
    class="fixed top-0 z-50 w-full transition-all duration-300 {isScrolled
        ? 'bg-base-100/90 backdrop-blur-md shadow-sm text-base-content'
        : page.url.pathname === '/'
          ? 'bg-transparent text-white'
          : 'bg-base-100/90 backdrop-blur-md shadow-sm text-base-content'}"
>
    <div class="navbar container mx-auto px-4 max-w-7xl h-20">
        <!-- Logo -->
        <div class="navbar-start">
            <a href="/" class="flex items-center gap-2 group">
                <img
                    src="/logo.png"
                    alt="Five Digital Hawks"
                    class="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                />
            </a>
        </div>

        <!-- Desktop Navigation -->
        <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal px-1 gap-2 font-medium">
                {#each navLinks as link}
                    <li>
                        <a
                            href={link.href}
                            class="hover:text-brand-highlight transition-colors relative {page
                                .url.pathname === link.href
                                ? 'text-brand-accent font-semibold'
                                : ''}"
                        >
                            {link.label}
                            {#if page.url.pathname === link.href}
                                <span
                                    class="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-brand-accent rounded-full"
                                ></span>
                            {/if}
                        </a>
                    </li>
                {/each}
            </ul>
        </div>

        <!-- Desktop CTA -->
        <div class="navbar-end hidden lg:flex">
            <a
                href="/contact"
                class="btn btn-primary rounded-full hover:scale-105 transition-transform"
                >Get Free Consultation</a
            >
        </div>

        <!-- Mobile Menu Toggle -->
        <div class="navbar-end lg:hidden">
            <button
                class="btn btn-ghost btn-circle"
                onclick={toggleMobileMenu}
                aria-label="Toggle menu"
            >
                {#if isMobileMenuOpen}
                    <X size={24} />
                {:else}
                    <Menu size={24} />
                {/if}
            </button>
        </div>
    </div>

    <!-- Mobile Menu Dropdown -->
    {#if isMobileMenuOpen}
        <div
            class="bg-base-100 lg:hidden shadow-lg absolute w-full left-0 origin-top text-base-content"
            transition:slide={{ duration: 300 }}
        >
            <ul class="menu p-4 gap-2 text-lg font-medium">
                {#each navLinks as link}
                    <li>
                        <a
                            href={link.href}
                            onclick={closeMobileMenu}
                            class={page.url.pathname === link.href
                                ? "text-brand-accent font-semibold"
                                : ""}>{link.label}</a
                        >
                    </li>
                {/each}
                <li class="mt-4">
                    <a
                        href="/contact"
                        onclick={closeMobileMenu}
                        class="btn btn-primary w-full rounded-full"
                        >Get Free Consultation</a
                    >
                </li>
            </ul>
        </div>
    {/if}
</div>
