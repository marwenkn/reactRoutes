
const View = ({name, rate, description, postUrl}) => {
	return (
		<div>
			<h1>{name}</h1><span>rate</span>
			<p>{description}</p>
		</div>
	);
}

export default View;