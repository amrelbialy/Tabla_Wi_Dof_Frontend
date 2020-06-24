import React from "react";

import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter
} from "mdbreact";

const ErrorModal = props => {
  return (
    <MDBContainer>
      <MDBModal isOpen={!!props.error}>
        <MDBModalHeader toggle={props.onClear}>
          An Error Occurred!
        </MDBModalHeader>
        <MDBModalBody>{props.error}</MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="blue-grey" type="button" onClick={props.onClear}>
            okay
          </MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
  );
};

export default ErrorModal;
