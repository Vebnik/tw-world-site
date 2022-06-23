import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Slider = () => {


	const SlideContent = ({title, content, link}) => {
		return (
			<Carousel.Caption>
				<h3>{title}</h3>
				<p>{content}</p>
				<a href={link}>Some link text</a>
			</Carousel.Caption>
		)
	}

	return (
		<div className={'Slider'}>
			<Carousel>
				<Carousel.Item>
					<div className={'listItem1'}/>
					<SlideContent title={'First slide label'} content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} link={''}/>
				</Carousel.Item>
				<Carousel.Item>
					<div className={'listItem1'}/>
					<SlideContent title={'Second slide label'} content={'Lorem consectetur dolor sit amet, consectetur dolor elit.'} link={''}/>
				</Carousel.Item>
				<Carousel.Item>
					<div className={'listItem1'}/>
					<SlideContent title={'Third slide label'} content={'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'} link={''}/>
				</Carousel.Item>
			</Carousel>
		</div>
	)
}

export default Slider;