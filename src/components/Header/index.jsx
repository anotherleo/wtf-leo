import React from 'react'
import styles from './Header.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>WTF, LEO?</h1>
			<p className={styles.subtitle}>What the heck you&apos;ve been studying, bro?</p>
    </header>
  )
}
