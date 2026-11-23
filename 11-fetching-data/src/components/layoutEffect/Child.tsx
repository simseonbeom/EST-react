import React from "react";

type Props = {
  message: string;
};

 function Child({ message }: Props) {
  return <p>{message}</p>;
}


export default React.memo(Child)