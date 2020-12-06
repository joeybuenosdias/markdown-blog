import PropTypes from 'prop-types';
import Link from 'next/link';
import css from './post-list.module.css';

export default function PostsList({ posts = [] }) {
	return (
		<div className={css.postListContainer}>
			<h2>Articles</h2>
			<div>
				{posts.map((item) => (
					<Link key={item.title} href={`/posts/${item.slug}`}>
						<div className={css.post}>
							<img alt={item.thumbnailAlt} className={css.thumbnail} src={item.thumbnail} />
							<div className={css.postText}>
								<h3 className={css.title}>{item.title}</h3>
								<p className={css.description}>{item.description}</p>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}

PostsList.propTypes = {
	posts: PropTypes.array.isRequired,
};
