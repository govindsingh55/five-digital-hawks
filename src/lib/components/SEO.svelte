<script lang="ts">
  import { siteConfig } from "$lib/config";

  interface Props {
    title?: string;
    description?: string;
    image?: string;
    canonical?: string;
    type?: "website" | "article";
    author?: string;
    publishedDate?: string;
    keywords?: string[];
    jsonLd?: Record<string, any>;
  }

  let {
    title = siteConfig.name,
    description = siteConfig.description,
    image = siteConfig.ogImage,
    canonical,
    type = "website",
    author,
    publishedDate,
    keywords = [],
    jsonLd,
  }: Props = $props();

  const fullTitle = title === siteConfig.name ? title : `${title} | ${siteConfig.name}`;
  const ogImage = image.startsWith("http") ? image : `${siteConfig.url}${image}`;
  const keywordsString = keywords.length > 0 ? keywords.join(", ") : undefined;

  // Default Organization JSON-LD
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteConfig.name,
    "url": siteConfig.url,
    "logo": `${siteConfig.url}/logo.png`,
    "sameAs": Object.values(siteConfig.links)
  };

  // Default WebSite JSON-LD
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteConfig.name,
    "url": siteConfig.url,
    "description": siteConfig.description
  };
</script>

<svelte:head>
  <!-- Primary Meta Tags -->
  <title>{fullTitle}</title>
  <meta name="title" content={fullTitle} />
  <meta name="description" content={description} />
  {#if keywordsString}
    <meta name="keywords" content={keywordsString} />
  {/if}

  <!-- Canonical -->
  {#if canonical}
    <link rel="canonical" href={canonical} />
  {/if}

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content={type} />
  <meta property="og:url" content={canonical || siteConfig.url} />
  <meta property="og:title" content={fullTitle} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={ogImage} />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content={canonical || siteConfig.url} />
  <meta property="twitter:title" content={fullTitle} />
  <meta property="twitter:description" content={description} />
  <meta property="twitter:image" content={ogImage} />
  {#if siteConfig.twitterHandle}
    <meta name="twitter:site" content={siteConfig.twitterHandle} />
    <meta name="twitter:creator" content={siteConfig.twitterHandle} />
  {/if}

  <!-- Article Meta Tags -->
  {#if type === "article"}
    {#if author}
      <meta name="author" content={author} />
    {/if}
    {#if publishedDate}
      <meta property="article:published_time" content={publishedDate} />
    {/if}
  {/if}

  <!-- JSON-LD -->
  <script type="application/ld+json">
    {JSON.stringify(organizationJsonLd)}
  </script>
  <script type="application/ld+json">
    {JSON.stringify(websiteJsonLd)}
  </script>

  {#if jsonLd}
    <script type="application/ld+json">
      {JSON.stringify(jsonLd)}
    </script>
  {/if}
</svelte:head>
