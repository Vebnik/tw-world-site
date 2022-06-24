import React from 'react';

const FeedBackElement = ({config}) => {

	const {email, name, comment, date} = config

	return (
		<div className={'FeedBackElement'}>
			<span><i className={'fa fa-id-card'}/> {name} || {email}</span>
			<span><i className={'fa fa-list'}/> {comment}</span>
			<span><i className={'fa-solid fa-clock'}/> {date || 'No date'}</span>
		</div>
	)
}

export default FeedBackElement;