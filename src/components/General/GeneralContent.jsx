import React, {useState} from 'react';
import FeedBackElement from "./FeedBackElement";

const GeneralContent = () => {

	const [feed, setFeed] = useState([1,2,3])

	return (
		<div className={'GeneralContent'}>
			<div className={'FeedBack'}>
				{feed.map(el => <FeedBackElement key={el}/>)}
			</div>
		</div>
	)
}

export default GeneralContent;