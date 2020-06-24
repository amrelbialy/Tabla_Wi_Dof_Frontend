import { createContext } from "react";

export const AuthContext = createContext({
  inputId: "",
  isTouched: false,
  destination: "",
  destinationValid: null,
  changeId: () => {},
  changeValue: () => {},
  spinner: () => {}
});
