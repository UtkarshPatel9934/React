import React, { useState } from 'react'

export default function About() {

	const [myStyle, setmyStyle] = useState(
		{
			color: 'white',
			backgroundColor: 'black',
			border: '1px solid white'
		}	
	)

	const [btnText, setBtnText] = useState('Enable Dark Mode');



	let toggleStyle = () => {
		if(myStyle.color === 'white')
		{
			setmyStyle({
				color: 'black',
				backgroundColor: 'white'
			})

			setBtnText('Enable Dark Mode')
		}

		else
		{
			setmyStyle({
				color: 'white',
				backgroundColor: 'black'
			})
			setBtnText('Enable Light Mode')
		}
	}

	
	return ( 
		<>
		<div className="mt-5 container" style={myStyle}>

			<h2>About Us</h2>
			
			<div className="accordion" id="accordionExample" style={myStyle}>
				<div className="accordion-item">
						<h2 className="accordion-header" id="headingOne">
						<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" style={myStyle} aria-expanded="true" aria-controls="collapseOne">
							<strong>Analyze Your Text</strong>
						</button>
						</h2>
					<div id="collapseOne" className="accordion-collapse collapse show" style={myStyle} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
						<div className="accordion-body" style={myStyle}>
							ediText gives you a way to analyze your text quickly and effeciently. Be it word, character
						</div>
					</div>
				</div>
				<div className="accordion-item">
					<h2 className="accordion-header" id="headingTwo">
					<button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
						<strong>Free to Use</strong>
					</button>
					</h2>
					<div id="collapseTwo" className="accordion-collapse collapse" style={myStyle} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
						<div className="accordion-body" style={myStyle}>
							ediText is a free character counter tool that provides instant character count and word count statistics for a given text. ediText reports the number of words and characters. Thus it is suitable for writing text with word/character limit.
						</div>
					</div>
				</div>
				<div className="accordion-item">
					<h2 className="accordion-header" id="headingThree">
					<button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
						<strong>Browser Compatible</strong>
					</button>
					</h2>
					<div id="collapseThree" className="accordion-collapse collapse" style={myStyle} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
						<div className="accordion-body" style={myStyle}>
							This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in Facebook, blog, excel document, pdf document, essays, etc.
						</div>
					</div>
				</div>
			</div>
			<div className="my-5 container">
			<button onClick={toggleStyle} on type="button" className="btn btn-primary">{btnText}</button>
			</div>
		</div>
		</>
	)
}