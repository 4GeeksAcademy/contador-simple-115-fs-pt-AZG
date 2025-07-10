import React from "react";

//include images into your bundle
import SecondsCounter from "./SecondsCounter";

//create your first component
const Home = ({counter}) => {
	return (
		<div className="text-center">
			<SecondsCounter seconds={counter} />

		</div>
		
	);
};

export default Home;