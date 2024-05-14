import styles from './Paper.module.css'
import { ReactNode } from 'react'

export default function Paper({children}: {children: ReactNode}) {
    return (
        <main className={styles.paper}>
            {children}
        </main>
    )
}
