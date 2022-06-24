import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function ModalForm({show, handleClose, children, setNedFeedBack}) {

	return (
		<>
			<Modal show={show} onHide={handleClose} className={'myModal'}>
				<Modal.Header closeButton>
					<Modal.Title><span>Add new Feed</span></Modal.Title>
				</Modal.Header>
				<Modal.Body children={children} />
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={setNedFeedBack}>
						Save new FeedBack
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	)
}

export default ModalForm
