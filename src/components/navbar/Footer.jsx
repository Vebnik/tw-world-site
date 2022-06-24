import React from 'react';
import {Card} from "react-bootstrap";

const Footer = () => {
	return (
		<Card className={'myFooter'}>
			<Card.Header>Evil | yellow | fevers | lead to | the urchin.</Card.Header>
			<Card.Body>
				<blockquote className="blockquote mb-0">
					<div className={'mediaContact'}>
						<i className={'fa-brands fa-telegram'} style={{color: '#2a749a'}} title={'telegram'}/>
						<i className={'fa-brands fa-instagram'} style={{color: '#ad762f'}} title={'instagram'}/>
						<i className={'fa-brands fa-vk'} style={{color: '#2a4d9a'}} title={'vk'}/>
						<i className={'fa-brands fa-youtube'} style={{color: '#cc3a3a'}} title={'youtube'}/>
					</div>
					<footer className={'myFooterContacts'}>
						Russia / Irkutsk / 380004
					</footer>
				</blockquote>
			</Card.Body>
		</Card>
	);
};

export default Footer;