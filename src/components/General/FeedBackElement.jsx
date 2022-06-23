import React from 'react';

const FeedBackElement = () => {
	return (
		<div className={'FeedBackElement'}>
			<span><i className={'fa fa-id-card'}/> Evsyukov Nikita Viktorovich</span>
			<span><i className={'fa fa-list'}/> Tremble without understanding, and we won’t command a space suit.</span>
			<span><i className={'fa-solid fa-clock'}/> {new Date().toISOString()}</span>
		</div>
	)
}

export default FeedBackElement;