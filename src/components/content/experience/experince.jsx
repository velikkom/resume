import React from 'react'
import "./experience.css"

const Experience = (props) => {
const{company,title,date,desc} = props;

/* let classNames = ["resume-item"];
    if(index === 0) {
        classNames.push("top-item");
    }
 */

  return (
    <div className={`resume-item ${index === 0 ? "top-item" : ""}`}>
			<h2>{company}</h2>
			<span>
				{title} | {date}
			</span>
			<p>{desc}</p>
		</div>
  )
}

export default Experience