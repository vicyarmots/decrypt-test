import React from 'react';
import { useState } from 'react';
import FormAnsw from './FormAnsw';

const FormDecrypt = () => {
	const [textDecrypt, setTextDecrypt] = useState('');
	const [decrypt, setDecrypt] = useState([]);

	const handleChange = (event) => {
		setTextDecrypt(event.target.value);
	};

	const submitDecrypt = (event) => {
		event.preventDefault();
		textDecrypt !== '' &&
			setDecrypt([
				...decrypt,
				[...textDecrypt].filter((item, i, arr) => item !== arr[i - 1] && item !== arr[i + 1]),
			]);

		setTextDecrypt('');
	};

	return (
		<form>
			<textarea placeholder="add decrypt" onChange={handleChange} value={textDecrypt}></textarea>
			<button onClick={submitDecrypt}>Submit</button>
			<FormAnsw decrypt={decrypt} />
		</form>
	);
};

export default FormDecrypt;
