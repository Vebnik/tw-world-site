import React from 'react';

const ItemType = ({ setSelect }) => {

	const setItem = (ev) => {

		switch (ev.target.innerText) {
			case 'Item 1':setSelect('Item 1')
				break
			case 'Item 2':setSelect('Item 2')
				break
			case 'Item 3':setSelect('Item 3')
				break
			case 'Item 4':setSelect('Item 4')
				break
		}
	}

	return (
		<div className={'ItemType'}>
			<div className={'itemBtn'}>
				<button onClick={(ev) => setItem(ev)}><i className={'fa fa-circle'}/> Item 1</button>
				<button onClick={(ev) => setItem(ev)}><i className={'fa fa-circle'}/> Item 2</button>
				<button onClick={(ev) => setItem(ev)}><i className={'fa fa-circle'}/> Item 3</button>
				<button onClick={(ev) => setItem(ev)}><i className={'fa fa-circle'}/> Item 4</button>
			</div>
		</div>
	)
}

export default ItemType;