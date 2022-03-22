import * as React from "react";
import { Chocolate } from "../type/Chocolate";

type Props = {
  chocolate: Chocolate;
};

const Choco: React.FC<Props> = ({ chocolate }) => {
  const { title, description } = chocolate;

  return (
    <div className="Card">
      <h1>{title}</h1>
      <span>{description}</span>
    </div>
  );
};

export default Choco;