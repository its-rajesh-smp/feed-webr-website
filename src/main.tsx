import { ApolloProvider } from "@apollo/client";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./app/App.tsx";
import "./index.css";
import client from "./setup/apolloClient.setup.ts";
import reduxStore from "./store/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <Provider store={reduxStore}>
        <App />
      </Provider>
    </ApolloProvider>
  </StrictMode>
);
