import React from 'react'
import SectionHeader from '../section-header'
import Experience from './experince'
import experiences from "../../../data/experience.json"

const Experiences = () => {
  return (
    <section id='experiences' className="resume">
        <SectionHeader title="Experiences"/>

        <div className="row">
				{experiences.map((item, index) => (
					<div
						key={item.company}
						className="col-md-12 col-sm-12 col-xs-12"
					>
						<Experience {...item} index={index} />
					</div>
				))}
			</div>

    </section>
  )
}

export default Experiences