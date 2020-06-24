import React, { useState, useContext, useEffect } from "react";

import Input from "../../shared/components/FormElements/Input";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
  VALIDATOR_EMAIL
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/FormHook";
import { useHttpClient } from "../../shared/hooks/http-hook";
import ImageUpload from "../../shared/components/FormElements/ImageUpload";
import ErrorModal from "../../shared/components/UIElements/ErrorModel";
import { MDBBtn } from "mdbreact";
import { AuthContext } from "../../shared/context/auth-context";
import SuccesModal from "../../shared/components/UIElements/SuccesModal";

const FormInput = props => {
  const auth = useContext(AuthContext);
  const [side, useSide] = useState("");
  const {
    isLoading,
    error,
    sendRequest,
    clearError,
    success,
    clearSuccess
  } = useHttpClient();
  const [formState, inputHandler] = useForm(
    {
      firstName: {
        value: "",
        isValid: false
      },
      lastName: {
        value: "",
        isValid: false
      },
      phoneNumber: {
        value: "",
        isValid: false
      },
      email: {
        value: "",
        isValid: false
      },
      opinion: {
        value: "",
        isValid: false
      },
      frontImage: {
        value: null,
        isValid: false
      },
      backImage: {
        value: null,
        isValid: false
      }
    },
    false
  );

  const tripSubmitHandler = async event => {
    event.preventDefault();
    try {
      const formData = new FormData();

      formData.append("firstName", formState.inputs.firstName.value);
      formData.append("lastName", formState.inputs.lastName.value);
      formData.append("phoneNumber", formState.inputs.phoneNumber.value);
      formData.append("email", formState.inputs.email.value);
      formData.append("opinion", formState.inputs.opinion.value);
      formData.append("destination", auth.destination);
      formData.append("frontImage", formState.inputs.frontImage.value);
      formData.append("backImage", formState.inputs.backImage.value);

      // for (var pair of formData.entries()) {
      //   console.log(pair);
      // }

      await sendRequest(
        process.env.REACT_APP_BACKEND_URL + "/trips",
        "POST",
        formData
      );
    } catch (err) {
      console.log(err);
    }
  };

  const loadingOpen = () => {
    props.spinnerOpen();
  };
  const loadingClose = () => {
    props.spinnerClose();
  };
  useEffect(() => {
    if (isLoading) {
      loadingOpen();
    } else {
      loadingClose();
    }
  }, [isLoading]);

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <SuccesModal success={success} onClear={clearSuccess} />

      <div className="containerClass">
        <form className="trip__form" onSubmit={tripSubmitHandler}>
          <div className="trip__form-main">
            <h1 className="heading"> Kindly fill the form </h1>

            <Input
              id="firstName"
              element="input"
              type="text"
              label="First Name"
              placeholder="First Name *"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter a valid name"
              onInput={inputHandler}
              lesswidth={true}
            />
            <Input
              id="lastName"
              element="input"
              type="text"
              label="Last Name"
              placeholder="Last Name *"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter a valid name"
              onInput={inputHandler}
              lesswidth={true}
            />
            <Input
              element="input"
              id="email"
              type="email"
              label="E-Mail"
              placeholder="E-Mail (optional)"
              validators={[VALIDATOR_EMAIL()]}
              errorText="Please enter a valid email address."
              onInput={inputHandler}
            />
            <Input
              id="phoneNumber"
              element="input"
              type="number"
              label="Phone Number"
              placeholder="Phone Number *"
              validators={[VALIDATOR_MINLENGTH(11)]}
              errorText="Please enter a valid number(at least 11 needed)."
              onInput={inputHandler}
            />
            <Input
              id="opinion"
              element="input"
              type="text"
              label="How did you find us?"
              placeholder="How did you find us?(optional)"
              validators={[]}
              errorText="Please tell us how did you find us"
              onInput={inputHandler}
            />
            <div>
              <Input
                id="destination"
                element="input"
                type="text"
                label="destination"
                placeholder="destination *"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please choose a destination."
                lesswidth={true}
                changeId={props.changeId}
                readOnly={true}
              />
            </div>
            <div className="image__upload-box">
              <ImageUpload
                id="frontImage"
                onInput={inputHandler}
                side="National ID Front Image *"
              />
              <ImageUpload
                id="backImage"
                onInput={inputHandler}
                side="National ID Back Image *"
              />
            </div>
          </div>

          <MDBBtn
            color="white"
            type="submit"
            className="btn__sumbit"
            disabled={!auth.destinationValid || !formState.isValid}
          >
            Submit
          </MDBBtn>
        </form>
      </div>
    </React.Fragment>
  );
};

export default FormInput;
