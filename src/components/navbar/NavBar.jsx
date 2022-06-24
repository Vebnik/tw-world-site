import React from 'react';
import NavBtn from "./NavBtn";
import General from "../General/General";
import Catalog from "../Catalog/Catalog";

const NavBar = ({setPage}) => {

	const myRoutes = (ev) => {
		switch (ev.target.innerText) {
			case 'General': setPage(<General/>)
				break
			case 'Catalog': setPage(<Catalog/>)
				break
			case 'Contacts': setPage(<div/>)
				break
			case 'FeedBack': setPage(<div/>)
				break
		}
	}

	return (
		<div className={'NavBar'}>
			<div className={'BtnWrapper'}>
				<NavBtn myRoutes={myRoutes}>General</NavBtn>
				<NavBtn myRoutes={myRoutes}>Catalog</NavBtn>
				<NavBtn myRoutes={myRoutes}>Contacts</NavBtn>
				<NavBtn myRoutes={myRoutes}>FeedBack</NavBtn>
			</div>
		</div>
	)
}

export default NavBar;