import {Button,Modal} from 'react-bootstrap'


const DeleteAppModal = ({appName,appId}) =>{
  return (
    <Modal.Dialog>
      <Modal.Header>
        <Modal.Title> Delete App </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Are you sure you want to delete App ""</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary"> Yes </Button>
        <Button variant="secondary"> No </Button>
      </Modal.Footer>
    </Modal.Dialog>
  )
}
