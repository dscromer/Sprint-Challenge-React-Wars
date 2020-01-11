import React, {useState} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const StarWarsCard = (props) => {
    const {
        buttonLabel,
        className
      } = props;

      const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
    
  return (
    <div className='container'>
      <Button className='character' color="danger" size='lg' onClick={toggle}>{props.character.name}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{props.character.name}</ModalHeader>
        <ModalBody>
            Birth Year: {props.character.birth_year}<br></br>
            Eye Color: {props.character.eye_color}<br></br>
            Gender: {props.character.gender}<br></br>
            Hair Color: {props.character.hair_color}<br></br>
            Height: {props.character.height}cm<br></br>
            Mass: {props.character.mass}kg<br></br>
            Skin Color: {props.character.skin_color}
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default StarWarsCard;