import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown'

export default function PostTemplate({ slug, frontmatter, content }) {
	console.log('slug', slug);
	console.log('frontmatter', frontmatter);
	console.log('content', content);
	return (
		<div>
			<h1>{frontmatter.title}</h1>
			<span>{frontmatter.date}</span>
			<ReactMarkdown source={content} />
		</div>
	);
}

PostTemplate.getInitialProps = async (context) => {
	const { slug } = context.query;

	const post = await import(`../../content/${slug}/${slug}.md`);
	// console.log('content', content);
	const { data, content } = matter(post.default);

	return { slug, frontmatter: data, content };
};
