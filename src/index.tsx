import React from "react";
import ReactDOM from "react-dom/client";
import { extendTheme, ChakraProvider, ThemeConfig } from "@chakra-ui/react";
import {Provider} from 'react-redux';
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import { store } from "./redux-toolkit/store";
import { App } from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const mainTheme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  } as ThemeConfig,
});


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ChakraProvider theme={mainTheme} resetCSS={true}>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
