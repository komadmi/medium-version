import React from "react";

declare const VERSION: string; 

function App() {
  let versionToDisplay = "unknown";
  try {
    versionToDisplay = VERSION;
  } catch (error) {
    console.log("Cannot get version of application.");
  }
  return (
    <div>{`Version: ${versionToDisplay}`}</div>
  );
}

export default App;
