import React, {useEffect, useMemo, useState} from 'react';
import FeedBackElement from "./FeedBackElement";
import {getFeed} from "../../utils/saveGetFeed";

const GeneralContent = () => {

	const [feed, setFeed] = useState([])

	const testGetFeed = async () => {
		getFeed().then(data => setFeed(data.slice(0, 3)))
	}

	useMemo(() => {
		testGetFeed().catch(err => console.error(err))
	}, feed)


	return (
		<div className={'GeneralContent'}>
			<div className={'FeedBack'}>
				{feed.map((el, i) => <FeedBackElement key={i} config={el}/>)}
			</div>
		</div>
	)
}

export default GeneralContent;