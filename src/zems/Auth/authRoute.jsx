import Login from "./Components/Pages/Login";
import Registration from "./Components/Pages/Registration";

export const authRoutes = [
      {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
]