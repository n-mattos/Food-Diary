import styles from './header.module.css';
import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<header className={styles.headerWrapper}>
			<div className={styles.header}>Food Diary</div>
			<nav className={styles.nav}>
				<Link to="/" className={styles.navLink}>Home</Link>
				<Link to="/diary" className={styles.navLink}>Diary</Link>
				<Link to="/about" className={styles.navLink}>About</Link>
			</nav>
		</header>
	);
}
