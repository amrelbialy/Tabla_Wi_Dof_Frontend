import React from "react";

import Header from "../components/Header";
import FormInput from "../components/FormInput";

const Form = props => {
  return (
    <div className="form">
      <div>
        <FormInput
          changeId={props.changeId}
          spinnerOpen={props.spinnerOpen}
          spinnerClose={props.spinnerClose}
        />
      </div>
      <Header />
    </div>
  );
};

export default Form;
