import PropTypes from 'prop-types';
import FeaturedArticle from '../components/featured-article/featured-article';
import PostsList from '../components/posts-list/posts-list';

// eslint-disable-next-line react/prop-types
export default function Index({ posts = [], featuredArticle = {} }) {
	return (
		<div>
			<FeaturedArticle featuredArticle={featuredArticle} />
			<PostsList posts={posts} />
		</div>
	);
}

Index.propTypes = {
	posts: PropTypes.array.isRequired,
};

Index.getInitialProps = async () => {
	const config = await import('../posts.json');
	const featured = await import('../featuredArticle.json');

	const posts = config.default;
	const featuredArticle = featured.default;

	return { posts, featuredArticle };
};
