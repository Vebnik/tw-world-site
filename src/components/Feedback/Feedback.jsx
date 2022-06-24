import React, {useState} from 'react';
import NewFeedback from "./NewFeedForm";
import ModalForm from "./ModalForm";
import BtnShowModal from "./BtnShowModal";
import FeedBackElement from "../General/FeedBackElement";


const Feedback = () => {

	const [show, setShow] = useState(false)
	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)
	const [feedList, setFeedList] = useState([1,2,3,4,5,6,7,8,9])

	return (
		<div className={'Feedback'}>
			<BtnShowModal handleShow={handleShow}/>
			<ModalForm show={show} handleClose={handleClose}>
				<NewFeedback/>
			</ModalForm>
			<div className={'FeedBackWrapper'}>
				<div className={'FeedBackList'}>
					{feedList.map((el, i) => <FeedBackElement key={i}/>)}
				</div>
			</div>
		</div>
	)
}

export default Feedback