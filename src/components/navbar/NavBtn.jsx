import React from 'react';

const NavBtn = ({children}) => {
	return (
		<button className={'NavBtn'}>
			<i className={'fa fa-circle btnIco'}/>
			{children}
		</button>
	)
}

export default NavBtn;