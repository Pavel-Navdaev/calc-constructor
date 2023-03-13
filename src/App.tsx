import "./App.module.scss";
import { FC } from "react";
import Header from "./components/Header/Header";
import s from "./App.module.scss";
import Widgets from "./components/Widgets/Widgets";
import Canvas from "./components/Сanvas/Canvas";

const App: FC = () => {
  return (
    <div className={s.app}>
      <Header />
      <Widgets />
      <Canvas />
    </div>
  );
};

export default App;
