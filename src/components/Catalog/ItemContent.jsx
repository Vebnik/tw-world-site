import ItemElement from "./ItemElement";

const ItemContent = ({itemsList, selectItem}) => {

	return (
		<div className={'ItemContent'}>
			<div className={'itemWrapper'}>
				{itemsList.filter(el => (el.item === selectItem)).map((el, i) =>
					<ItemElement config={el} key={i}/>)}
			</div>
		</div>
	)
}

export default ItemContent;