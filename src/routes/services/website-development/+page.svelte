<script lang="ts">
  import {
    Monitor,
    Zap,
    Layout,
    Code2,
    Check,
    ArrowRight,
    Search,
    ShoppingBag,
    Globe,
    Smartphone,
    Layers,
    Server,
    ShieldCheck,
    Play,
  } from "@lucide/svelte";
  import { inview } from "$lib/actions/inview";
  import CTABanner from "$lib/components/CTABanner.svelte";

  const platforms = [
    {
      name: "Shopify & Plus",
      desc: "Custom Liquid themes and high-performance Headless (Hydrogen) stores.",
      icon: ShoppingBag,
    },
    {
      name: "WordPress / WooCommerce",
      desc: "Scalable, secure, and SEO-optimized enterprise WordPress solutions.",
      icon: Globe,
    },
    {
      name: "Headless Commerce",
      desc: "Separating frontend from backend for ultimate speed and flexibility.",
      icon: Layers,
    },
    {
      name: "Custom Landing Pages",
      desc: "Bespoke, high-converting React/Svelte engines for marketing campaigns.",
      icon: Layout,
    },
  ];

  const techStack = [
    {
      category: "Frontend",
      tools: ["SvelteKit", "Next.js", "React", "Tailwind CSS", "TypeScript"],
    },
    {
      category: "Infrastructure",
      tools: ["Cloudflare Workers", "Vercel", "Netlify", "Node.js", "AWS"],
    },
    {
      category: "Content & Data",
      tools: ["Sanity CMS", "Contentful", "Supabase", "PostgreSQL", "GraphQL"],
    },
  ];

  const process = [
    {
      step: "01",
      title: "Technical Audit",
      desc: "We analyze your current site speed, SEO, and conversion bottlenecks.",
    },
    {
      step: "02",
      title: "Strategic Blueprint",
      desc: "Mapping out the optimal tech stack and user journey for your goals.",
    },
    {
      step: "03",
      title: "Agile Development",
      desc: "Performance-first coding with regular deployments and feedback loops.",
    },
    {
      step: "04",
      title: "Launch & Optimize",
      desc: "Seamless migration followed by continuous CRO and performance tuning.",
    },
  ];
</script>

<svelte:head>
  <title>Website Development | Five Digital Hawks</title>
  <meta
    name="description"
    content="Performance-first e-commerce and web development using SvelteKit, Next.js, and Shopify Headless."
  />
</svelte:head>

<!-- Hero Section -->
<section
  class="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-linear-to-br from-brand-primary via-brand-primary/80 to-brand-accent/60"
>
  <!-- Floating gradient blobs -->
  <div class="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
  <div
    class="absolute top-[20%] -right-20 w-[600px] h-[600px] bg-brand-accent/50 rounded-full blur-[100px] mix-blend-screen animate-float"
  ></div>
  <div
    class="absolute bottom-10 -left-64 w-[500px] h-[500px] bg-brand-highlight/40 rounded-full blur-[120px] mix-blend-screen animate-float-delayed"
  ></div>

  <div class="container mx-auto px-4 max-w-7xl relative z-10">
    <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
      <div
        class="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left text-white"
      >
        <!-- Badge -->
        <div
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 animate-[fade-in-up_0.8s_ease-out]"
        >
          <span class="relative flex h-3 w-3">
            <span
              class="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-highlight opacity-75"
            ></span>
            <span
              class="relative inline-flex rounded-full h-3 w-3 bg-brand-highlight"
            ></span>
          </span>
          <span
            class="text-sm font-semibold tracking-wide uppercase text-brand-highlight"
            >Top Dev Partner 2026</span
          >
        </div>

        <h1
          class="text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight mb-8 leading-[1.2] animate-[fade-in-up_0.8s_ease-out_0.2s_both]"
        >
          Websites Built for <span
            class="text-transparent bg-clip-text bg-linear-to-r from-blue-200 to-white"
            >Profit & Scale</span
          >
        </h1>
        <p
          class="text-lg md:text-xl text-blue-100 max-w-2xl mb-10 font-light animate-[fade-in-up_0.8s_ease-out_0.4s_both] leading-relaxed"
        >
          We don’t just build websites; we architect high-performance sales
          engines that load instantly, convert visitor intent, and integrate
          seamlessly with your entire marketing stack.
        </p>

        <div
          class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-16 animate-[fade-in-up_0.8s_ease-out_0.5s_both]"
        >
          <a
            href="https://calendar.app.google/UmcGwtPbfFQkmUPb9"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-primary bg-brand-accent border-none text-white hover:bg-brand-highlight btn-lg rounded-full px-8 shadow-[0_10px_40px_-10px_rgba(79,99,186,0.7)] transition-all"
          >
            Start Your Build
            <ArrowRight size={20} class="ml-2" />
          </a>
          <a
            href="#platforms"
            class="btn btn-outline btn-lg rounded-full px-8 text-white border-white/40 hover:bg-white hover:text-brand-primary transition-all backdrop-blur-sm"
          >
            <Play size={20} class="mr-2" />
            View Expertise
          </a>
        </div>

        <!-- Trust Stats Grid -->
        <div
          class="grid grid-cols-2 md:grid-cols-4 gap-6 w-full animate-[fade-in_1s_ease-out_0.8s_both]"
        >
          <div class="flex flex-col">
            <span class="text-3xl font-bold text-white mb-1">99.9%</span>
            <span
              class="text-xs text-blue-200 uppercase tracking-wider font-semibold"
              >Uptime</span
            >
          </div>
          <div class="flex flex-col">
            <span class="text-3xl font-bold text-white mb-1">&lt;1s</span>
            <span
              class="text-xs text-blue-200 uppercase tracking-wider font-semibold"
              >Load Time</span
            >
          </div>
          <div class="flex flex-col">
            <span class="text-3xl font-bold text-white mb-1">250+</span>
            <span
              class="text-xs text-blue-200 uppercase tracking-wider font-semibold"
              >Builder Stores</span
            >
          </div>
          <div class="flex flex-col">
            <span class="text-3xl font-bold text-white mb-1">45%</span>
            <span
              class="text-xs text-blue-200 uppercase tracking-wider font-semibold"
              >Avg CRO Lift</span
            >
          </div>
        </div>
      </div>

      <!-- Browser Mockup (Right) -->
      <div
        class="lg:w-1/2 relative w-full max-w-lg mx-auto lg:max-w-none mt-10 lg:mt-0 perspective-1000 animate-[fade-in-up_1s_ease-out_0.6s_both]"
      >
        <div
          class="mockup-browser bg-base-300 border border-base-200/50 shadow-2xl animate-float relative z-20"
        >
          <div class="mockup-browser-toolbar">
            <div class="input">https://fivedigitalhawks.com/dev</div>
          </div>
          <div class="bg-base-200 flex flex-col p-6 h-[400px] overflow-hidden">
            <div class="w-1/3 h-6 bg-base-300 rounded mb-4"></div>
            <div
              class="w-full h-8 bg-brand-primary rounded mb-8 flex items-center px-4"
            >
              <span
                class="text-[10px] text-white font-bold tracking-widest uppercase"
                >Performance: 100/100</span
              >
            </div>

            <div class="grid grid-cols-2 gap-4 mb-4">
              <div
                class="h-24 bg-base-100 rounded shadow-sm border border-base-300 p-3 flex flex-col justify-end"
              >
                <div class="w-8 h-8 rounded-full bg-brand-accent/20 mb-2"></div>
                <div class="w-full h-2 bg-base-300 rounded"></div>
              </div>
              <div
                class="h-24 bg-base-100 rounded shadow-sm border border-base-300 p-3 flex flex-col justify-end"
              >
                <div
                  class="w-8 h-8 rounded-full bg-brand-highlight/20 mb-2"
                ></div>
                <div class="w-full h-2 bg-base-300 rounded"></div>
              </div>
            </div>

            <div class="mt-auto flex justify-end gap-2">
              <div class="w-16 h-8 bg-base-300 rounded"></div>
              <div class="w-24 h-8 bg-brand-accent rounded"></div>
            </div>
          </div>
        </div>

        <!-- Floating Cards -->
        <div class="absolute -right-12 top-20 z-30 animate-float-delayed">
          <div
            class="card bg-base-100 shadow-xl border border-base-200 p-4 rounded-xl flex items-center gap-3"
          >
            <div class="p-2 bg-green-100 text-green-600 rounded-lg">
              <Zap size={24} />
            </div>
            <div>
              <p class="text-xs font-bold text-base-content/50">Speed Index</p>
              <p class="text-lg font-black text-base-content">0.4s</p>
            </div>
          </div>
        </div>

        <div
          class="absolute -left-10 bottom-24 z-30 animate-float"
          style="animation-delay: 1.5s;"
        >
          <div
            class="card bg-brand-highlight text-white shadow-lg p-4 rounded-xl flex items-center gap-3 transform -rotate-3"
          >
            <ShieldCheck size={28} />
            <div>
              <p class="text-sm font-bold">Secure Build</p>
              <p class="text-xs text-amber-100">Enterprise Ready</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Platforms Section -->
<section id="platforms" class="py-24 bg-base-100">
  <div class="container mx-auto px-4 max-w-7xl">
    <div class="text-center max-w-3xl mx-auto mb-16 reveal" use:inview>
      <h2
        class="text-brand-accent font-semibold tracking-wide uppercase mb-3 text-sm"
      >
        Platform Expertise
      </h2>
      <h3 class="text-3xl md:text-5xl font-bold text-base-content mb-6">
        Modern Foundations for Your Store
      </h3>
      <p class="text-lg text-base-content/70">
        We specialize in industry-leading platforms, optimized for specific
        growth trajectories.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {#each platforms as platform}
        <div
          class="card bg-base-200 border border-base-300 p-8 hover:border-brand-accent/50 transition-all duration-300 group reveal"
          use:inview
        >
          <div
            class="w-12 h-12 rounded-xl bg-brand-primary/5 text-brand-primary flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors"
          >
            <platform.icon size={24} />
          </div>
          <h4 class="text-xl font-bold mb-3">{platform.name}</h4>
          <p class="text-sm text-base-content/60 leading-relaxed">
            {platform.desc}
          </p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Tech Stack Section -->
<section class="py-24 bg-brand-primary text-white overflow-hidden relative">
  <div
    class="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full bg-linear-to-l from-brand-accent/10 to-transparent"
  ></div>
  <div class="container mx-auto px-4 max-w-7xl relative z-10">
    <div class="flex flex-col lg:flex-row gap-16 items-center">
      <div class="lg:w-1/2 reveal" use:inview>
        <h2
          class="text-brand-highlight font-bold uppercase tracking-widest text-sm mb-4"
        >
          Tech Stack
        </h2>
        <h3 class="text-4xl md:text-5xl font-black mb-8 leading-tight">
          Engineered for <br />
          <span class="text-brand-highlight">Sub-Second</span> Load Times
        </h3>
        <p class="text-xl text-blue-100/70 mb-10">
          Speed isn't just a metric; it's a direct driver of conversion and SEO
          ranking. Our headless approach ensures your site remains
          lightning-fast regardless of content volume.
        </p>
        <div class="grid grid-cols-2 gap-6">
          <div class="flex items-center gap-3">
            <ShieldCheck class="text-brand-highlight" />
            <span class="font-medium">SEO Optimized</span>
          </div>
          <div class="flex items-center gap-3">
            <ShieldCheck class="text-brand-highlight" />
            <span class="font-medium">Accessibility (A11y)</span>
          </div>
          <div class="flex items-center gap-3">
            <ShieldCheck class="text-brand-highlight" />
            <span class="font-medium">Security-First Build</span>
          </div>
          <div class="flex items-center gap-3">
            <ShieldCheck class="text-brand-highlight" />
            <span class="font-medium">API-First Data</span>
          </div>
        </div>
      </div>
      <div class="lg:w-1/2 grid grid-cols-1 gap-6 reveal" use:inview>
        {#each techStack as stack}
          <div
            class="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl"
          >
            <h4
              class="text-brand-highlight font-bold uppercase tracking-widest text-xs mb-4"
            >
              {stack.category}
            </h4>
            <div class="flex flex-wrap gap-3">
              {#each stack.tools as tool}
                <span
                  class="px-3 py-1 bg-white/10 rounded-lg text-sm border border-white/5 hover:bg-white/20 transition-colors pointer-events-none"
                >
                  {tool}
                </span>
              {/each}
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<!-- Our Process -->
<section class="py-24 bg-base-100">
  <div class="container mx-auto px-4 max-w-7xl">
    <div class="text-center mb-20 reveal" use:inview>
      <h2
        class="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4"
      >
        Roadmap
      </h2>
      <h3 class="text-3xl md:text-5xl font-bold">Our Development Process</h3>
    </div>

    <div class="relative">
      <!-- Timeline Line -->
      <div
        class="absolute top-1/2 left-0 right-0 h-0.5 bg-base-300 -translate-y-1/2 hidden lg:block"
      ></div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {#each process as item, i}
          <div
            class="relative reveal"
            use:inview
            style="transition-delay: {i * 100}ms"
          >
            <div class="bg-base-100 relative z-10">
              <div
                class="w-16 h-16 rounded-full bg-brand-primary text-white flex items-center justify-center text-xl font-bold mb-6 ring-8 ring-base-100"
              >
                {item.step}
              </div>
              <h4 class="text-xl font-bold mb-3">{item.title}</h4>
              <p class="text-base-content/60 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<CTABanner />

<style>
  @keyframes fade-in-up {
    from {
      opacity: 0;
      transform: translateY(30px) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes float {
    0%,
    100% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-20px) rotate(1deg);
    }
  }

  @keyframes float-delayed {
    0%,
    100% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(20px) rotate(-1deg);
    }
  }

  .reveal {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .perspective-1000 {
    perspective: 1000px;
  }
</style>
