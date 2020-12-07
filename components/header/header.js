import Link from 'next/link';
import css from './header.module.css';

export default function Header() {
	return (
		<Link href="/">
			<header className={css.header}>
				<h1>Freshy</h1>
			</header>
		</Link>
	);
}
