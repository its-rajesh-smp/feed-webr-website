import { ApolloProvider } from "@apollo/client";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./app/App.tsx";
import "./index.css";
import client from "./setup/apolloClient.setup.ts";
import reduxStore from "./store/store.ts";
import { Toaster } from "./common/components/shadcn/ui/sonner.tsx";

createRoot(document.getElementById("root")!).render(
  <ApolloProvider client={client}>
    <Provider store={reduxStore}>
      <App />
      <Toaster />
    </Provider>
  </ApolloProvider>
);
