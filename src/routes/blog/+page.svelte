<script lang="ts">
	import type { PageData } from './$types';
	import { ArrowRight, Calendar, User, Tag } from '@lucide/svelte';
	import { inview } from '$lib/actions/inview';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Blog | Five Digital Hawks</title>
	<meta name="description" content="Stay updated with the latest trends in digital marketing and web development." />
</svelte:head>

<div class="pt-32 pb-20 min-h-screen bg-base-200/30">
	<div class="container mx-auto px-4 max-w-7xl">
		<!-- Header -->
		<div class="text-center mb-16 reveal" use:inview>
			<h1 class="text-4xl md:text-5xl font-bold text-brand-primary mb-6">Our Blog</h1>
			<p class="text-xl text-slate-600 max-w-2xl mx-auto">
				Insights, trends, and strategies to help your business thrive in the digital age.
			</p>
		</div>

		<!-- Posts Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each data.posts as post, i}
				<article
					class="card bg-base-100 shadow-xl overflow-hidden card-premium reveal"
					style="transition-delay: {i * 100}ms"
					use:inview
				>
					{#if post.image}
						<figure class="aspect-video relative overflow-hidden">
							<img
								src={post.image}
								alt={post.title}
								class="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
							/>
						</figure>
					{/if}
					
					<div class="card-body">
						<div class="flex items-center gap-4 text-xs text-slate-500 mb-2">
							<span class="flex items-center gap-1">
								<Calendar size={14} />
								{new Date(post.date).toLocaleDateString('en-US', {
									month: 'short',
									day: 'numeric',
									year: 'numeric'
								})}
							</span>
							{#if post.author}
								<span class="flex items-center gap-1">
									<User size={14} />
									{post.author}
								</span>
							{/if}
						</div>

						<h2 class="card-title text-2xl font-bold text-brand-primary mb-3">
							<a href="/blog/{post.slug}" class="hover:text-brand-accent transition-colors">
								{post.title}
							</a>
						</h2>
						
						<p class="text-slate-600 mb-6 line-clamp-3">
							{post.description}
						</p>

						<div class="flex flex-wrap gap-2 mb-6">
							{#each post.categories as category}
								<span class="badge badge-outline badge-sm gap-1">
									<Tag size={12} />
									{category}
								</span>
							{/each}
						</div>

						<div class="card-actions justify-end mt-auto">
							<a href="/blog/{post.slug}" class="btn btn-primary btn-sm rounded-full gap-2">
								Read More
								<ArrowRight size={16} />
							</a>
						</div>
					</div>
				</article>
			{/each}
		</div>

		{#if data.posts.length === 0}
			<div class="text-center py-20">
				<p class="text-slate-500 text-lg">No posts found yet. Check back soon!</p>
			</div>
		{/if}
	</div>
</div>
