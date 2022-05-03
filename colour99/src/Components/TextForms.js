import React, {useState} from 'react'
//import PropTypes from 'prop-types'

// const [state, setState] = useState(initialState);
// in this case of TextForms

export default function TextForms(props) {


	// always put this statement in the Function  
	// Note: don't put this statement outside
	// This statement tells us that 
	// 1. We have to use a variable called text and strore the text in it
	// 2. we cannot use like text = "jsdhfjh" to update the text in the textarea => WRONG WAY TO CHANGE THE STATE
	// 3. we must use function to update it
	// 4. to change the text we have to provide the function name in the below statement so we provide "setText" name
	const [text, setText] = useState('Text goes here.....');
	
	// 2. CORRECT WAY IS: 
	// setText("This is set text");
	// 5. so we have to create setText frunction to modify the text
	// setText('kjdsfkjsdhfjk');

	// to handel the click event
	const handleUpClick = () =>{
		// alert('Btn has been clicked by you.....');
		let newText = text.toUpperCase();
		setText(newText);
	}
	const handleDownClick = () =>{
		// alert('Btn has been clicked by you.....');
		let newText = text.toLowerCase();
		setText(newText);
	}

	// in the onChange event we have an object called event
	const handleOnChange = (event) =>{
		// we now able to type in th Textarea and set the text using the setText function
		setText(event.target.value)
	}



	return (
		<>
			<div className="container my-5">
				<h1 htmlFor="myBox" className="form-label text-info">{props.label}</h1>
				<textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8" /* placeholder={props.placeholder} */></textarea>
				<button type="button" onClick={handleUpClick} className="me-3 mt-3 btn btn-warning">Convert to Uppercase</button>
				<button type="button" onClick={handleDownClick} className="mt-3 btn btn-danger">Convert to Lowercase</button>
			</div>

			<div className="container my-5 text-center">
				<h1 className='text-info'>Your Text Summary</h1>
				<p className='text-danger'>{text.split(" ").length} words, {text.length} characters</p>
				<p className='text-danger'>{0.008*text.split(" ").length} minutes read</p>

				<h2 className='text-start text-success'>Preview for Text</h2>
				<p className='text-start text-danger'>{text}</p>
			</div>

		</>
  )
}


TextForms.defaultProps = {
	label: "Enter label name here...."
}




// TextForms.protoTypes = {
// 	label: PropTypes.string,
// 	placeholder: PropTypes.string.isRequired
// }