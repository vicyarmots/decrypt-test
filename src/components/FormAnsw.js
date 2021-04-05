import React from 'react';
import Decrypt from '../Decrypt';

const FormAnsw = ({ decrypt }) => {
	return (
		<div>
			<>
				<h2>Decrypt</h2>
			</>
			{decrypt.map((item, index) => {
				return item.length > 0 && <Decrypt key={index} value={item.join('')} />;
			})}
		</div>
	);
};

export default FormAnsw;
