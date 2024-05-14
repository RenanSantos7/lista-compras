import styles from './Header.module.css'
import Menu from '../../assets/Icons/Menu.tsx'
import { useEffect } from 'react'

interface CToolbarProps {
	title: string
}

export default function Header({ title }: CToolbarProps) {
	return (
		<header className={styles.cabecalho}>
			<div className={styles.flex_container}>
				<Menu cor='#ffffff' tamanho={32} />
				<h1>{title}</h1>
			</div>

			{/* Search */}
		</header>
	)
}
