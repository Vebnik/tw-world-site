import React, {useState} from 'react';
import NewFeedback from "./NewFeedForm";
import ModalForm from "./ModalForm";
import BtnShowModal from "./BtnShowModal";
import FeedBackElement from "../General/FeedBackElement";
import {feedList as testFeed} from "../../utils/testItemList";


const Feedback = () => {

	const [email, setEmail] = useState('')
	const [name, setName] = useState('')
	const [comment, setComment] = useState('')

	const [show, setShow] = useState(false)
	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)
	const [feedList, setFeedList] = useState(testFeed)

	const setNedFeedBack = (ev) => {
		const feedBackModal = { email, name, comment }
		handleClose();setEmail(' ');setName(' ');setComment(' ')

		console.log(feedBackModal)
		setFeedList([...feedList, feedBackModal])
	}

	return (
		<div className={'Feedback'}>
			<BtnShowModal handleShow={handleShow}/>
			<ModalForm show={show} handleClose={handleClose} setNedFeedBack={setNedFeedBack}>
				<NewFeedback setEmail={setEmail} setName={setName} setComment={setComment}/>
			</ModalForm>
			<div className={'FeedBackWrapper'}>
				<div className={'FeedBackList'}>
					{feedList.map((el, i) => <FeedBackElement key={i} config={el}/>)}
				</div>
			</div>
		</div>
	)
}

export default Feedback