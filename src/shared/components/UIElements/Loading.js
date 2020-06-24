import React from "react";

const Loading = () => {
  return (
    <>
      <div className="modal-backdrop show"></div>
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </>
  );
};

export default Loading;
