import React from 'react'
import Lottie from 'react-lottie-player'
import LearningAnimation from '/public/animation/learning.json'

export default function Animation() {
	return (
		<Lottie 
			loop
			animationData={LearningAnimation} 
			play
		/>
	)
}
