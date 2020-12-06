import PropTypes from 'prop-types';
import Link from 'next/link';

export default function Index({ posts = [] }) {
	return (
		<div>
			{posts.map((item) => (
				<Link key={item.title} href={`/posts/${item.slug}`}>
					<div>
						<h3>{item.title}</h3>
						<p>{item.description}</p>
					</div>
				</Link>
			))}
		</div>
	);
}

Index.propTypes = {
	posts: PropTypes.array.isRequired,
};

Index.getInitialProps = async () => {
	const config = await import('../config.json');
	const posts = config.default;

	return { posts };
};
