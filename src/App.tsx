import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import User from "./Componentes/User";
import Posts from "./Componentes/Posts";
import Stories from "./Componentes/Stories";
import Form from "./Componentes/Forms";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <User />
      <div className="home">
        <div>
          <Form />
          <Posts />
        </div>
        <Stories />
      </div>
    </Provider>
  );
}

export default App;
