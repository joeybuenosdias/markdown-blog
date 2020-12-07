import PropTypes from 'prop-types';
import matter from 'gray-matter';
import MarkdownPost from '../../components/markdown-post/markdown-post';

export default function PostTemplate({ frontmatter, content }) {
	return <MarkdownPost frontmatter={frontmatter} content={content} />;
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
