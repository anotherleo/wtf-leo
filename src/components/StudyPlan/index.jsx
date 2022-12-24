import { ArrowSquareUpRight } from 'phosphor-react'
import React from 'react'
import styles from './StudyPlan.module.scss'

export default function StudyPlan() {
  return (
    <div className={styles.card}>
			<h2>Plano de Estudos</h2>
			<p>Dev React em T</p>
			<a href="https://cursos.alura.com.br/back-l-t-vinicius-tardem-1666654071105-p468849">
				<ArrowSquareUpRight size={16} color="white" />
				Ver na Alura
			</a>
		</div>
  )
}
