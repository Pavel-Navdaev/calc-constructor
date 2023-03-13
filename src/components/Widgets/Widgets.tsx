import React, { FC } from "react";
import s from "./Widgets.module.scss";
import Display from "./Display/Display";
import NumbersBlock from "./NumbersBlock/NumbersBlock";
import OperationButtons from "./OperationButtons/OperationButtons";
import ResultButton from "./ResultButton/ResultButton";

const Widgets: FC = () => {
  return (
    <div className={s.container}>
      <Display />
      <OperationButtons />
      <NumbersBlock />
      <ResultButton />
    </div>
  );
};

export default Widgets;
