import React from 'react';

const NavBtn = ({children, myRoutes}) => {

	return (
		<button className={'NavBtn'} onClick={(ev) => myRoutes(ev)}>
			<i className={'fa fa-circle btnIco'}/>
			{children}
		</button>
	)
}

export default NavBtn;