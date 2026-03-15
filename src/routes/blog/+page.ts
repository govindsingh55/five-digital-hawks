import { fetchPosts } from '$lib/utils/posts';

export async function load() {
	const posts = await fetchPosts();
	return { posts };
}
