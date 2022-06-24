import React from 'react';

const ItemElement = ({config}) => {

	const { picture, description } = config.content


	return (
		<div className={'ItemElement'}>
			<img src={picture} alt={'item pic'}/>
			<span>{description}</span>
			<a><i className={'fa fa-list'}/> More info</a>
		</div>
	)
}

export default ItemElement;