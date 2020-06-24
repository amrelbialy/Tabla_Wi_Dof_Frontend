import React, { useState, useContext, useEffect } from "react";
import ReactDOM from "react-dom";

import { AuthContext } from "../../context/auth-context";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBIcon
} from "mdbreact";

import sharm from "../../../img/sharm.jpg";
import taba from "../../../img/taba.jpg";
import dahab from "../../../img/dahab.jpg";
import hurghada from "../../../img/hurghada.jpg";
import nuweiba from "../../../img/nuweiba.jpg";

const ModalPage = props => {
  const auth = useContext(AuthContext);
  const [opener, setOpener] = useState(false);
  const [check, setCheck] = useState(false);

  const [destination, setDestination] = useState("");
  const [imgId, useImgId] = useState({
    dahab: "Dahab",
    hurghada: "Hurghada",
    sharm: "Sharm El Sheikh",
    taba: "Taba",
    nuweiba: "Nuweiba"
  });

  const toggle = () => {
    setOpener(!opener);
    auth.changeId("");
  };

  useEffect(() => {
    if (auth.inputId === "destination" && auth.isTouched) {
      toggle();
    }
  }, [auth.inputId]);

  const change = (value, e) => {
    e.preventDefault();
    props.changeValue(value);
    toggle();
  };

  const imageHandler = (value, e, id) => {
    e.preventDefault();
    setDestination(value);
    setCheck(true);
  };

  const content = (
    <MDBContainer>
      <MDBModal isOpen={opener} toggle={toggle} size="lg">
        <MDBModalHeader toggle={toggle}>Choose A Destination</MDBModalHeader>
        <MDBModalBody>
          <figure
            className="image__shape"
            onClick={e => imageHandler("Dahab", e, imgId)}
          >
            <img src={dahab} alt="dahab" className="image__shape-img" />
            <figcaption className="image__shape-caption">Dahab</figcaption>
            {check && destination === imgId.dahab && (
              <MDBIcon icon="check" className="figure__icon-check" />
            )}
          </figure>

          <figure
            className="image__shape"
            onClick={e => imageHandler("Hurghada", e)}
          >
            <img src={hurghada} alt="hurghada" className="image__shape-img" />
            <figcaption className="image__shape-caption">Hurghada</figcaption>
            {check && destination === imgId.hurghada && (
              <MDBIcon icon="check" className="figure__icon-check" />
            )}
          </figure>
          <figure
            className="image__shape"
            onClick={e => imageHandler("Sharm El Sheikh", e)}
          >
            <img src={sharm} alt="sharm" className="image__shape-img" />
            <figcaption className="image__shape-caption">
              Sharm El Sheikh
            </figcaption>
            {check && destination === imgId.sharm && (
              <MDBIcon icon="check" className="figure__icon-check" />
            )}
          </figure>
          <figure
            className="image__shape"
            onClick={e => imageHandler("Taba", e)}
          >
            <img src={taba} alt="taba" className="image__shape-img" />
            <figcaption className="image__shape-caption">Taba</figcaption>
            {check && destination === imgId.taba && (
              <MDBIcon icon="check" className="figure__icon-check" />
            )}
          </figure>
          <figure
            className="image__shape"
            onClick={e => imageHandler("Nuweiba", e)}
          >
            <img src={nuweiba} alt="nuweiba" className="image__shape-img" />
            <figcaption className="image__shape-caption">Nuweiba</figcaption>
            {check && destination === imgId.nuweiba && (
              <MDBIcon icon="check" className="figure__icon-check" />
            )}
          </figure>
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn
            color="blue-grey"
            type="button"
            onClick={e => change(destination, e)}
          >
            Save changes
          </MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
  );
  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
};

export default ModalPage;
