import React, {useEffect} from 'react';
import {Button, Card} from "react-bootstrap";


const Contact = () => {

	const createMap = async () => {
		const init = () => {
			const myMap = new window.ymaps.Map("map", {
				center: [55.76, 37.64],
				zoom: 7
			})
		}

		window.ymaps.ready(init)
	}
	createMap()

	return (
		<div className={'Contact'}>
			<Card style={{ width: '1500px', height: '1150px', margin: 'auto', backgroundColor: '#4f4f4f', color: '#d9d2d2'}}>
				<Card.Header>Company details</Card.Header>
				<Card.Body>
					<Card.Body>
						<div className={'mapWrapper'} style={{width: "1400px", height: "800px"}}>
							<div id={'map'} style={{width: "1389px", height: "789px"}}/>
						</div>
					</Card.Body>
					<Card.Title>About us</Card.Title>
					<Card.Text>
						This flight has only been feeded by an ordinary ship.<br/>
						Scream loudly like a gutless moon.<br/>
						When the lotus of control discovers the stigmas of the moon, the living will know follower.
						Not order or chaos, gain the heaven.<br/>
						To the muddy pork butt add watermelon, spinach, peppermint tea and sour meatballs.
					</Card.Text>
					<Button variant="dark">Get more info</Button>
				</Card.Body>
			</Card>
		</div>
	)
}

export default Contact;