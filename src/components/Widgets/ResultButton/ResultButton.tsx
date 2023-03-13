import React, { FC } from "react";
import s from "./ResultButton.module.scss";

const ResultButton: FC = () => {
  return (
    <div className={s.container}>
      <div className={s.field}>=</div>
    </div>
  );
};

export default ResultButton;
