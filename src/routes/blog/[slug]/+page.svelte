<script lang="ts">
	import type { PageData } from './$types';
	import { Calendar, User, ArrowLeft, Clock } from '@lucide/svelte';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>{data.meta.title} | Five Digital Hawks</title>
	<meta name="description" content={data.meta.description} />
</svelte:head>

<article class="pt-32 pb-20 min-h-screen">
	<div class="container mx-auto px-4 max-w-4xl">
		<!-- Back Button -->
		<a href="/blog" class="btn btn-ghost btn-sm rounded-full gap-2 mb-8 hover:bg-base-200">
			<ArrowLeft size={16} />
			Back to Blog
		</a>

		<!-- Header -->
		<header class="mb-12">
			<div class="flex flex-wrap items-center gap-4 text-slate-500 mb-6">
				<span class="flex items-center gap-1.5">
					<Calendar size={18} />
					{new Date(data.meta.date).toLocaleDateString('en-US', {
						month: 'long',
						day: 'numeric',
						year: 'numeric'
					})}
				</span>
				{#if data.meta.author}
					<span class="flex items-center gap-1.5">
						<User size={18} />
						{data.meta.author}
					</span>
				{/if}
				<span class="flex items-center gap-1.5">
					<Clock size={18} />
					5 min read
				</span>
			</div>

			<h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-primary leading-tight mb-8">
				{data.meta.title}
			</h1>

			{#if data.meta.image}
				<div class="rounded-3xl overflow-hidden shadow-2xl mb-12">
					<img
						src={data.meta.image}
						alt={data.meta.title}
						class="w-full h-auto object-cover max-h-[500px]"
					/>
				</div>
			{/if}
		</header>

		<!-- Content -->
		<div class="prose prose-lg md:prose-xl max-w-none prose-headings:text-brand-primary prose-a:text-brand-accent hover:prose-a:text-brand-highlight prose-img:rounded-3xl prose-pre:bg-slate-900 prose-pre:shadow-lg">
			<data.content />
		</div>

		<!-- Footer -->
		<footer class="mt-20 pt-10 border-t border-base-300">
			<div class="flex flex-wrap gap-2 mb-8">
				{#each data.meta.categories as category}
					<span class="badge badge-primary badge-outline px-4 py-3">{category}</span>
				{/each}
			</div>
			
			<div class="bg-base-200 rounded-3xl p-8 md:p-12 text-center">
				<h3 class="text-2xl font-bold text-brand-primary mb-4">Enjoyed this post?</h3>
				<p class="text-slate-600 mb-8 max-w-lg mx-auto">
					Subscribe to our newsletter to get the latest insights delivered straight to your inbox.
				</p>
				<button class="btn btn-primary rounded-full px-8">Subscribe Now</button>
			</div>
		</footer>
	</div>
</article>

<style>
	/* Custom prose overrides for premium look */
	:global(.prose h2) {
		margin-top: 2.5em;
		margin-bottom: 1em;
	}
	:global(.prose p) {
		line-height: 1.8;
		color: #475569; /* slate-600 */
	}
</style>
