import React from 'react';
import NavBtn from "./NavBtn";

const NavBar = () => {
	return (
		<div className={'NavBar'}>
			<NavBtn>General</NavBtn>
			<NavBtn>Catalog</NavBtn>
			<NavBtn>Contacts</NavBtn>
			<NavBtn>FeedBack</NavBtn>
		</div>
	)
}

export default NavBar;