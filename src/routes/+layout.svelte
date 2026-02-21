<script lang="ts">
  import "../app.css";
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";
  let { children } = $props();
</script>

<div class="min-h-screen flex flex-col overflow-x-hidden">
  <Navbar />

  <main class="flex-grow overflow-x-hidden">
    {@render children()}
  </main>

  <Footer />
</div>
