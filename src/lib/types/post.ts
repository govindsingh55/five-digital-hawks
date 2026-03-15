export interface Post {
	title: string;
	slug: string;
	description: string;
	date: string;
	categories: string[];
	published: boolean;
	image?: string;
	author?: string;
}
