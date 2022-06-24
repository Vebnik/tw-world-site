import React, {useState} from 'react';
import ItemType from "./ItemType";
import ItemContent from "./ItemContent";
import {itemList} from "../../utils/testItemList";

const Catalog = () => {

	const [itemsList, setItemsList] = useState(itemList)

	const [selectItem, setSelect] = useState('Item 1')

	return (
		<div className={'Catalog'}>
			<ItemType setSelect={setSelect}/>
			<ItemContent itemsList={itemsList} selectItem={selectItem}/>
		</div>
	)
}

export default Catalog;