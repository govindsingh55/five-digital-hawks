<script lang="ts">
  import { Calendar } from "@lucide/svelte";

  let {
    text = "Get Free Consultation",
    className = "",
    centered = false,
    small = false,
  } = $props();
</script>

<div class={centered ? "flex justify-center my-12" : ""}>
  <a
    href="https://calendar.app.google/UmcGwtPbfFQkmUPb9"
    target="_blank"
    rel="noopener noreferrer"
    class="group btn btn-primary rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-brand-accent/25 flex items-center gap-2 font-bold border-none text-white
    {small
      ? 'px-6 py-2 h-10 min-h-0 text-sm'
      : 'px-8 py-2 h-auto min-h-0 text-lg'} 
    {className}"
  >
    <Calendar
      size={small ? 16 : 20}
      class="group-hover:rotate-12 transition-transform"
    />
    <span>{text}</span>
    {#if !small}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="group-hover:translate-x-1 transition-transform"
      >
        <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
      </svg>
    {/if}
  </a>
</div>

<style>
  /* Ensure the button looks premium with a solid brand color */
  .btn-primary {
    background-color: var(--color-brand-primary, #4f46e5);
    color: white;
  }

  .btn-primary:hover {
    background-color: var(--color-brand-accent, #4338ca);
  }
</style>

