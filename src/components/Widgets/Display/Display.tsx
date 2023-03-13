import React, { FC } from "react";
import s from "./Display.module.scss";

const Display: FC = () => {
  return (
    <div className={s.container}>
      <div className={s.field}>0</div>
    </div>
  );
};

export default Display;
