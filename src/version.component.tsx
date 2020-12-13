import * as React from "react";

const Version: React.FC = () => {
  return (
    <div>
      {
        //@ts-ignore
        `Version: ${VERSION}`
      }
    </div>
  );
};

export default Version;
