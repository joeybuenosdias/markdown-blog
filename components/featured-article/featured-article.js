import Link from 'next/link';
import css from './featured-article.module.css';

export default function FeaturedArticle({ featuredArticle }) {
	if (!featuredArticle) return null;
	return (
		<div className={css.featuredContainer}>
			<Link href={featuredArticle.slug}>
				<div>
					<img alt="food" className={css.featuredImage} src={featuredArticle.imgLink} />
					<h3>{featuredArticle.title}</h3>
					<p>{featuredArticle.description}</p>
				</div>
			</Link>
		</div>
	);
}
