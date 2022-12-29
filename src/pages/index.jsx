import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Header from '../components/Header'
import StudyPlan from '../components/StudyPlan'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import Animation from '../components/Animation'

export default function Home() {
  return (
    <>
      <Head>
        <title>WTF, Leo?</title>
        <meta name="description" content="What the heck you've been doing, Leo?" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="container">
				<Header />

				<div className="row">
					<div className="col-md-3">
						<StudyPlan />
						<Animation />
					</div>
					<div className="col-md-9">
						<Projects />
					</div>
				</div>

				<Footer />
			</div>
    </>
  )
}
