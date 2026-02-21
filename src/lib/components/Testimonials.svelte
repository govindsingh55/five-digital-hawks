<script lang="ts">
    import { Star, ChevronLeft, ChevronRight, Quote } from "@lucide/svelte";
    import { inview } from "$lib/actions/inview";

    const testimonials = [
        {
            name: "Sarah Jenkins",
            title: "CMO, EcoLife",
            quote: "Five Digital Hawks transformed our email marketing. We saw a 300% increase in campaign revenue within the first 60 days.",
            avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        },
        {
            name: "Michael Chen",
            title: "Founder, TechWear",
            quote: "Their strategic approach to SMS marketing helped us reach customers we were previously missing. Phenomenal ROI.",
            avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
        },
        {
            name: "Emma Rostova",
            title: "VP Growth, FitStream",
            quote: "The 360° marketing strategy they deployed aligned our entire pipeline. They are true partners, not just an agency.",
            avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
        },
    ];

    let activeIndex = $state(0);

    function nextSlide() {
        activeIndex = (activeIndex + 1) % testimonials.length;
    }

    function prevSlide() {
        activeIndex =
            (activeIndex - 1 + testimonials.length) % testimonials.length;
    }
</script>

<section
    id="testimonials"
    class="py-24 bg-base-200/50 relative overflow-hidden scroll-mt-24"
>
    <!-- Decorative background elements -->
    <div
        class="absolute top-0 left-0 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
    ></div>
    <div
        class="absolute bottom-0 right-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"
    ></div>

    <div class="container mx-auto px-4 max-w-7xl relative z-10">
        <div class="text-center max-w-3xl mx-auto mb-16 reveal" use:inview>
            <h2
                class="text-brand-accent font-semibold tracking-wide uppercase mb-3 text-sm md:text-base"
            >
                Testimonials
            </h2>
            <h3
                class="text-2xl sm:text-4xl md:text-5xl font-bold text-base-content mb-6"
            >
                What Our Clients Say
            </h3>
        </div>

        <div class="max-w-5xl mx-auto relative group">
            <!-- Large Quote Icon Background -->
            <div
                class="absolute -top-10 -left-10 text-brand-primary/10 select-none hidden md:block"
            >
                <Quote size={160} />
            </div>

            <!-- Content Card -->
            <div
                class="card bg-base-100 shadow-2xl border border-base-200/60 overflow-hidden reveal-scale"
                use:inview
            >
                <div class="card-body p-0">
                    <div class="carousel w-full">
                        {#each testimonials as t, i}
                            <div
                                id="testimonial-slide-{i}"
                                class="carousel-item relative w-full flex flex-col items-center text-center px-6 py-12 md:px-20 md:py-20"
                            >
                                <!-- Rating -->
                                <div
                                    class="flex gap-1 text-brand-highlight mb-6 md:mb-8"
                                >
                                    {#each Array(5) as _, si}
                                        <Star
                                            fill="currentColor"
                                            size={18}
                                            class="animate-[star-pop_0.4s_ease_both]"
                                            style="animation-delay: {si *
                                                100}ms"
                                        />
                                    {/each}
                                </div>

                                <!-- Quote -->
                                <blockquote
                                    class="text-base sm:text-xl md:text-2xl lg:text-3xl font-medium text-base-content leading-relaxed mb-8 md:mb-10 italic max-w-xs sm:max-w-none"
                                >
                                    "{t.quote}"
                                </blockquote>

                                <!-- Author -->
                                <div
                                    class="flex flex-col md:flex-row items-center gap-4 mt-auto"
                                >
                                    <div class="avatar">
                                        <div
                                            class="w-14 h-14 md:w-16 md:h-16 rounded-full ring-4 ring-brand-primary/10 ring-offset-base-100 ring-offset-2"
                                        >
                                            <img src={t.avatar} alt={t.name} />
                                        </div>
                                    </div>
                                    <div class="text-center md:text-left">
                                        <h4
                                            class="font-bold text-lg md:text-xl text-base-content"
                                        >
                                            {t.name}
                                        </h4>
                                        <span
                                            class="text-xs md:text-sm text-brand-accent/80 font-bold tracking-wider uppercase"
                                            >{t.title}</span
                                        >
                                    </div>
                                </div>
                            </div>
                        {/each}
                    </div>
                </div>
            </div>

            <!-- Navigation Buttons - Hidden on Mobile to prevent overlap -->
            <div
                class="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-8 z-20 hidden md:block"
            >
                <a
                    href="#testimonial-slide-{(activeIndex -
                        1 +
                        testimonials.length) %
                        testimonials.length}"
                    class="btn btn-circle btn-primary shadow-xl hover:scale-110 transition-transform border-none"
                    onclick={prevSlide}
                    aria-label="Previous testimonial"
                >
                    <ChevronLeft size={24} />
                </a>
            </div>
            <div
                class="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-8 z-20 hidden md:block"
            >
                <a
                    href="#testimonial-slide-{(activeIndex + 1) %
                        testimonials.length}"
                    class="btn btn-circle btn-primary shadow-xl hover:scale-110 transition-transform border-none"
                    onclick={nextSlide}
                    aria-label="Next testimonial"
                >
                    <ChevronRight size={24} />
                </a>
            </div>
        </div>

        <!-- Pagination Dots -->
        <div class="flex justify-center items-center py-10 gap-3">
            {#each testimonials as _, i}
                <a
                    href="#testimonial-slide-{i}"
                    class="w-3 h-3 rounded-full transition-all duration-300 {activeIndex ===
                    i
                        ? 'bg-brand-primary w-8'
                        : 'bg-base-300 hover:bg-brand-highlight'}"
                    onclick={() => (activeIndex = i)}
                    aria-label="Go to testimonial {i + 1}"
                ></a>
            {/each}
        </div>
    </div>
</section>

<style>
    @keyframes star-pop {
        from {
            opacity: 0;
            transform: scale(0);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }

    /* Hide scrollbar but keep functionality */
    .carousel {
        -ms-overflow-style: none;
        scrollbar-width: none;
        scroll-behavior: smooth;
    }
    .carousel::-webkit-scrollbar {
        display: none;
    }
</style>
