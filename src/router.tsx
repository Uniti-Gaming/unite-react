import { createHashRouter } from "react-router-dom";
import Home from "./pages/home";
import SignIn from "./pages/auth/sign-in";
import SignUp from "./pages/auth/sign-up";
import NotFound from "./pages/404";
import Profile from "./pages/account/outlets/Profile";
import Account from "./pages/account";
import Balance from "./pages/account/outlets/Balance";
import NewsList from "./pages/news/news-list";
import NewsPost from "./pages/news/news-post";
import LauncherForAndroid from "./pages/launcher/android";
import LauncherForPC from "./pages/launcher/pc";
import Mumble from "./pages/voice/Mumble";
import Teamspeak from "./pages/voice/Teamspeak";
import Test from "./test";

const router = createHashRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/sign-up",
        element: <SignUp />,
    },
    {
        path: "/sign-in",
        element: <SignIn />,
    },
    {
        path: "/account",
        element: <Account />,
        children: [
            {
              path: "profile",
              element: <Profile />,
            },
            {
              path: "balance",
              element: <Balance />,
            },
          ],
    },
    {
        path: "/launcheer-for-android",
        element: <LauncherForAndroid />,
    },
    {
        path: "/launcheer-for-pc",
        element: <LauncherForPC />,
    },
    {
        path: "/mumble",
        element: <Mumble />,
    },
    {
        path: "/teamspeak",
        element: <Teamspeak />,
    },
    {
        path: "/news",
        element: <NewsList />,
    },
    {
        path: "/news/:id",
        element: <NewsPost />,
    },
    {
        path: "/test",
        element: <Test />,
    },
    {
        path: "*",
        element: <NotFound />,
    }
]);

export default router;