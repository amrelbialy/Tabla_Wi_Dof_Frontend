import React, { useState, useCallback } from "react";

import Form from "./Trips/pages/Form";
import ModalPage from "./shared/components/UIElements/ModalPage";
import { AuthContext } from "./shared/context/auth-context";

import Loading from "./shared/components/UIElements/Loading";

function App() {
  const [inputId, setInputId] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const [destination, setDestination] = useState("");
  const [destinationValid, setDestinationValid] = useState(false);
  const [loading, setLoading] = useState(false);

  const spinnerOpen = useCallback(() => {
    setLoading(true);
  }, [setLoading]);

  const spinnerClose = useCallback(() => {
    setLoading(false);
  }, [setLoading]);

  const changeId = useCallback(
    id => {
      setIsTouched(true);

      setInputId(id);
    },
    [setInputId]
  );

  const changeValue = useCallback(
    value => {
      setDestination(value);
      setDestinationValid(true);
    },
    [setDestination]
  );

  return (
    <AuthContext.Provider
      value={{
        inputId,
        isTouched,
        destination,
        changeId,
        changeValue,
        destinationValid
      }}
    >
      <div className="application">
        <Form
          changeId={changeId}
          spinnerOpen={spinnerOpen}
          spinnerClose={spinnerClose}
          loading={loading}
          setLoading={loading}
        />
        <ModalPage changeValue={changeValue} />
        {loading && <Loading />}
      </div>
    </AuthContext.Provider>
  );
}

export default App;
