import PropTypes from 'prop-types';
import Link from 'next/link';
import css from './post-list.module.css';

export default function PostsList({ posts = [] }) {
	return (
		<div className={css.postListContainer}>
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

PostsList.propTypes = {
	posts: PropTypes.array.isRequired,
};
