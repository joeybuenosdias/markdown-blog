import matter from 'gray-matter';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

export default function PostTemplate({ frontmatter, content }) {
	return (
		<div>
			<h1>{frontmatter.title}</h1>
			<span>{frontmatter.date}</span>
			<ReactMarkdown source={content} />
		</div>
	);
}

PostTemplate.propTypes = {
	content: PropTypes.string.isRequired,
	frontmatter: PropTypes.shape({
		title: PropTypes.string,
		date: PropTypes.string,
	}).isRequired,
};

PostTemplate.getInitialProps = async (context) => {
	const { slug } = context.query;
	const post = await import(`../../content/${slug}.md`);
	const { data, content } = matter(post.default);

	return { frontmatter: data, content };
};
