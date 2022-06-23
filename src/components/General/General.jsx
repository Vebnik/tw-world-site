import React from 'react';
import Slider from "./Slider";
import GeneralContent from "./GeneralContent";
import Divider from "./Divider";


const General = () => {
	return (
		<div className={'General'}>
			<Slider/>
			<Divider/>
			<GeneralContent/>
		</div>
	)
}

export default General;