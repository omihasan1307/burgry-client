import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routers.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AuthProviders from "./providers/AuthProviders";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SnackbarProvider } from "notistack";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProviders>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <SnackbarProvider />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  </AuthProviders>
);
