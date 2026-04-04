<script lang="ts">
    import { Linkedin, Twitter, Mail } from "@lucide/svelte";
    import { inview } from "$lib/actions/inview";

    interface TeamMember {
        name: string;
        role: string;
        image: string;
        social: {
            linkedin: string;
            twitter?: string;
            mail?: string;
        };
    }

    const team: TeamMember[] = [
        {
            name: "Aaron",
            role: "Co-founder",
            image: "https://i.pravatar.cc/300?u=aaron",
            social: { linkedin: "/", twitter: "", mail: "" },
        },
        {
            name: "Alphonso",
            role: "Co-founder",
            image: "https://i.pravatar.cc/300?u=alphonso",
            social: { linkedin: "/", twitter: "", mail: "" },
        },
        {
            name: "Harper",
            role: "Co-founder",
            image: "https://i.pravatar.cc/300?u=harper",
            social: { linkedin: "/", twitter: "", mail: "" },
        },
        {
            name: "David",
            role: "Co-founder",
            image: "https://i.pravatar.cc/300?u=david",
            social: { linkedin: "/", twitter: "", mail: "" },
        },
        {
            name: "Allie",
            role: "Co-founder",
            image: "https://i.pravatar.cc/300?u=allie",
            social: { linkedin: "/", twitter: "", mail: "" },
        },
    ];

    function getInitials(name: string) {
        return name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase();
    }

    const delays = ["", "delay-100", "delay-200", "delay-300", "delay-400"];
</script>

<section id="team" class="py-24 bg-base-200">
    <div class="container mx-auto px-4 max-w-7xl">
        <div class="text-center max-w-3xl mx-auto mb-16 reveal" use:inview>
            <h2
                class="text-brand-accent font-semibold tracking-wide uppercase mb-3"
            >
                Co-founders
            </h2>
            <h3 class="text-4xl md:text-5xl font-bold text-base-content mb-6">
                Team Directly Working on Your Strategies
            </h3>
            <p class="text-lg text-base-content/70 items-center justify-center">
                Meet the experts who will be scaling your brand.
            </p>
        </div>

        <div class="flex flex-wrap justify-center gap-8">
            {#each team as member, i}
                <div
                    class="card bg-base-100 card-premium overflow-hidden group reveal w-full max-w-xs {delays[
                        i
                    ]}"
                    use:inview
                >
                    <div class="pt-10 flex justify-center">
                        <div
                            class="w-24 h-24 rounded-full bg-brand-primary text-white flex items-center justify-center text-3xl font-bold shadow-xl ring-4 ring-white transition-all duration-500 group-hover:scale-110 group-hover:bg-brand-accent"
                        >
                            {getInitials(member.name)}
                        </div>
                    </div>
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
