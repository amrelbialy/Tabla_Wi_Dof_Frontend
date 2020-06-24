import React from "react";

import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter
} from "mdbreact";

const SuccesModal = props => {
  return (
    <MDBContainer>
      <MDBModal isOpen={props.success}>
        <MDBModalHeader toggle={props.onClear}>DONE</MDBModalHeader>
        <MDBModalBody>Thank you for choosing us</MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="blue-grey" type="button" onClick={props.onClear}>
            okay
          </MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
  );
};

export default SuccesModal;
