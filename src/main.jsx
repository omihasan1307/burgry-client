import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routers.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AuthProviders from "./providers/AuthProviders";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SnackbarProvider } from "notistack";
const queryClient = new QueryClient();
import "react-tabs/style/react-tabs.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProviders>
    <QueryClientProvider client={queryClient}>
      <SnackbarProvider />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </AuthProviders>
);
