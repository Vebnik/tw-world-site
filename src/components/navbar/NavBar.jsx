import React from 'react';
import NavBtn from "./NavBtn";

const NavBar = () => {


	return (
		<div className={'NavBar'}>
			<div className={'BtnWrapper'}>
				<NavBtn>General</NavBtn>
				<NavBtn>Catalog</NavBtn>
				<NavBtn>Contacts</NavBtn>
				<NavBtn>FeedBack</NavBtn>
			</div>
		</div>
	)
}

export default NavBar;