import React from "react";

const TellMeContext = React.createContext();

export const TellMeProvider = TellMeContext.Provider;
export const TellMeConsumer = TellMeContext.Consumer;

export default TellMeContext;
