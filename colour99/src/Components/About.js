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
							Accordion Item #1
						</button>
						</h2>
					<div id="collapseOne" className="accordion-collapse collapse show" style={myStyle} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
						<div className="accordion-body" style={myStyle}>
							<strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
						</div>
					</div>
				</div>
				<div className="accordion-item">
					<h2 className="accordion-header" id="headingTwo">
					<button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
						Accordion Item #2
					</button>
					</h2>
					<div id="collapseTwo" className="accordion-collapse collapse" style={myStyle} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
						<div className="accordion-body" style={myStyle}>
							<strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
						</div>
					</div>
				</div>
				<div className="accordion-item">
					<h2 className="accordion-header" id="headingThree">
					<button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
						Accordion Item #3
					</button>
					</h2>
					<div id="collapseThree" className="accordion-collapse collapse" style={myStyle} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
						<div className="accordion-body" style={myStyle}>
							<strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
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