import React, { FC } from "react";
import s from "./OperationButtons.module.scss";

const OperationButtons: FC = () => {
  return (
    <div className={s.container}>
      <div className={s.buttons}>
        <button>/</button>
        <button>x</button>
        <button>-</button>
        <button>+</button>
      </div>
    </div>
  );
};

export default OperationButtons;
