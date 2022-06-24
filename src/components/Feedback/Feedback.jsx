import React, {useMemo, useState} from 'react';
import NewFeedback from "./NewFeedForm";
import ModalForm from "./ModalForm";
import BtnShowModal from "./BtnShowModal";
import FeedBackElement from "../General/FeedBackElement";
import {getFeed, saveFeed} from "../../utils/saveGetFeed";
import {getDate} from "../../utils/dateNormalize";


const Feedback = () => {

	// State
	const [email, setEmail] = useState('')
	const [name, setName] = useState('')
	const [comment, setComment] = useState('')
	const [show, setShow] = useState(false)
	const [feedList, setFeedList] = useState([])

	// Func
	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)

	const setNedFeedBack = (ev) => {
		const feedBackModal = { email, name, comment, date: getDate() }
		handleClose();setEmail(' ');setName(' ');setComment(' ')

		console.log(feedBackModal)
		setFeedList([...feedList, feedBackModal])

		// to back
		saveFeed(feedBackModal).catch(err => console.error(err))
	}
	const freshGetFeed = async () => getFeed().then(data => setFeedList(data))

	// Cache data
	useMemo(() => freshGetFeed().catch(err => console.error(err)), feedList)
		.catch(err => console.error(err))


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