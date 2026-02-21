<script lang="ts">
    import { Linkedin, Twitter, Mail } from "@lucide/svelte";
    import { inview } from "$lib/actions/inview";

    const team = [
        {
            name: "Avinash Singh",
            role: "CEO & Founder",
            image: "https://i.pravatar.cc/300?u=a042581f4e29026024d",
            social: { linkedin: "/" },
        },
        {
            name: "David Okafor",
            role: "Head of Growth",
            image: "https://i.pravatar.cc/300?u=a042581f4e29026704b",
            social: { linkedin: "/", twitter: "/" },
        },
        {
            name: "Samantha Lee",
            role: "Creative Director",
            image: "https://i.pravatar.cc/300?u=a04258114e29026702c",
            social: { linkedin: "/", mail: "/" },
        },
        {
            name: "James Wilson",
            role: "Lead Strategist",
            image: "https://i.pravatar.cc/300?u=a04258a2462d826712d",
            social: { linkedin: "/" },
        },
    ];

    const delays = ["", "delay-100", "delay-200", "delay-300"];
</script>

<section id="team" class="py-24 bg-base-200">
    <div class="container mx-auto px-4 max-w-7xl">
        <div class="text-center max-w-3xl mx-auto mb-16 reveal" use:inview>
            <h2
                class="text-brand-accent font-semibold tracking-wide uppercase mb-3"
            >
                Our Team
            </h2>
            <h3 class="text-4xl md:text-5xl font-bold text-base-content mb-6">
                The Hawks Behind the Magic
            </h3>
            <p class="text-lg text-base-content/70 items-center justify-center">
                Meet the experts who will be scaling your brand.
            </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {#each team as member, i}
                <div
                    class="card bg-base-100 card-premium overflow-hidden group reveal {delays[
                        i
                    ]}"
                    use:inview
                >
                    <figure
                        class="px-6 pt-6 relative overflow-hidden bg-brand-primary/5"
                    >
                        <div
                            class="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg relative z-10 transition-transform duration-500 group-hover:scale-105"
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                class="w-full h-full object-cover"
                            />
                        </div>
                    </figure>
                    <div class="card-body items-center text-center">
                        <h4 class="card-title text-xl mb-1">{member.name}</h4>
                        <p class="text-brand-accent font-medium text-sm mb-4">
                            {member.role}
                        </p>

                        <div
                            class="card-actions flex gap-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                        >
                            {#if member.social.linkedin}
                                <a
                                    href={member.social.linkedin}
                                    class="btn btn-circle btn-sm btn-ghost hover:bg-brand-primary hover:text-white transition-colors"
                                >
                                    <Linkedin size={18} />
                                </a>
                            {/if}
                            {#if member.social.twitter}
                                <a
                                    href={member.social.twitter}
                                    class="btn btn-circle btn-sm btn-ghost hover:bg-brand-primary hover:text-white transition-colors"
                                >
                                    <Twitter size={18} />
                                </a>
                            {/if}
                            {#if member.social.mail}
                                <a
                                    href={member.social.mail}
                                    class="btn btn-circle btn-sm btn-ghost hover:bg-brand-primary hover:text-white transition-colors"
                                >
                                    <Mail size={18} />
                                </a>
                            {/if}
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>
