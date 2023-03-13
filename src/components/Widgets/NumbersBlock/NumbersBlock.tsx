import React, { FC } from "react";
import s from "./NumbersBlock.module.scss";

const NumbersBlock: FC = () => {
  return (
    <div className={s.container}>
      <div className={s.buttons}>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button className={s.zero}>0</button>
        <button>,</button>
      </div>
    </div>
  );
};

export default NumbersBlock;
