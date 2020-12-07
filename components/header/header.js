import Link from 'next/link';
import css from './header.module.css';

export default function Header() {
	return (
		<Link href="/">
			<header className={css.header}>
				<h1>Fresh Food</h1>
			</header>
		</Link>
	);
}
