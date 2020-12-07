import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import css from './markdown-post.module.css';

export default function MarkdownPost({ frontmatter, content }) {
	return (
		<div className={css.postContainer}>
			<h1 className={css.title}>{frontmatter.title}</h1>
			<div>{frontmatter.date}</div>
			<div>
				Written by:&nbsp;
				<span className={css.author}>{frontmatter.author}</span>
			</div>
			<ReactMarkdown unwrapDisallowed source={content} />
		</div>
	);
}

MarkdownPost.propTypes = {
	content: PropTypes.string.isRequired,
	frontmatter: PropTypes.shape({
		author: PropTypes.string,
		title: PropTypes.string,
		date: PropTypes.string,
	}).isRequired,
};
