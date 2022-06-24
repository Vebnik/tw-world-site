import React, {useState} from 'react';
import FeedBackElement from "./FeedBackElement";
import {feedList} from "../../utils/testItemList";

const GeneralContent = () => {

	const [feed, setFeed] = useState(feedList.slice(0, 4))

	return (
		<div className={'GeneralContent'}>
			<div className={'FeedBack'}>
				{feed.map(el => <FeedBackElement key={el} config={el}/>)}
			</div>
		</div>
	)
}

export default GeneralContent;