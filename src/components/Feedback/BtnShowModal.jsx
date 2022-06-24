import React from 'react';

const BtnShowModal = ({handleShow}) => {
	return (
		<div className={'addFeedback'}>
			<button className={'NavBtn'} onClick={handleShow}>
				<i className={'fa fa-mail-bulk'}/>Add new Feedback
			</button>
		</div>
	)
}

export default BtnShowModal;