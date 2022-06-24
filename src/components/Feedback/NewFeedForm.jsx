import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function NewFeedback() {
	return (
		<div className={'NewFeedback'}>
			<FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
				<Form.Control type="email" placeholder="name@example.com" />
			</FloatingLabel>
			<FloatingLabel controlId="floatingUser" label="Full Name">
				<Form.Control type="text" placeholder="Full Name" />
			</FloatingLabel>
			<FloatingLabel controlId="floatingTextarea2" label="Comments">
				<Form.Control
					as="textarea"
					placeholder="Leave a comment here"
					style={{ height: '100px' }}
				/>
			</FloatingLabel>
		</div>
	)
}

export default NewFeedback;