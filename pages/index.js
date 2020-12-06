import PropTypes from 'prop-types';
import FeaturedArticle from '../components/featured-article/featured-article';
import PostsList from '../components/posts-list/posts-list';

export default function Index({ posts = [], featuredArticle = {} }) {
	console.log('featuredArticle', featuredArticle);
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
	// console.log('feaured', featured);
	const posts = config.default;
	const featuredArticle = featured.default;
	// console.log('featuredArticle', featuredArticle);

	return { posts, featuredArticle };
};
