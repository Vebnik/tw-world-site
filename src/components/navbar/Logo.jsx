import React from 'react';

const Logo = () => {

	const contactInfo = {
		phone: '+7 (956) 700-70-08',
		telegram: '@CatalogHome',
		mail: 'work@gmail.com',
	}

	return (
		<div className={'Logo'}>
			<i className={'fa-brands fa-battle-net'}/>
			<div className={'infoHeader'}>
				<span><i className={'fa fa-phone'}/> {contactInfo.phone}</span>
				<span><i className={'fa-brands fa-telegram'}/> {contactInfo.telegram}</span>
				<span><i className={'fa fa-mail-bulk'}/> {contactInfo.mail}</span>
			</div>
		</div>
	)
}

export default Logo;