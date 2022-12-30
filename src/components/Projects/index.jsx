import React from 'react'
import styles from './Projects.module.scss'
import projects from './projects.json'
import { GitBranch, Globe } from 'phosphor-react'

export default function Projects() {
	return (
		<>
		<h2 className={styles.title}>Projetos</h2>

		<div className="row gy-4">
			{projects.map((project) => {
				return (
					<div className='col-md-4' key={project.id}>
						<div className={styles.card}>
							<p className={styles.type}>{project.type}</p>
							<p className={styles.tech}>{project.tech}</p>
							<h3 className={styles.title}>{project.title}</h3>
							<p className={styles.description}>{project.description}</p>
							<div className={styles.buttons}>
								<a href={project.deploy} className={styles.deploy}>
									<Globe size={16} />
									Live
								</a>
								<a href={project.repo}  className={styles.repo}>
									<GitBranch size={16} color="white" />
									Repo
								</a>
							</div>
						</div>
					</div>
				)
			})}
		</div>
		</>
	)
}
