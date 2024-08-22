import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import Head from "./components/Head";
import appStore from "./utility/appStore";
import { Provider } from "react-redux";
import WatchPage from "./components/WatchPage";
import MainContainer from "./components/MainContainer";

function App() {
  const router = createBrowserRouter([
    {
    path : "/",
    element : <Body />,
    children : [{
      path:"/",
      element: <MainContainer />
    },
    {
      path: "/watch",
      element: <WatchPage />
    }],
    },
  ])
  return (
    <Provider store={appStore}>
      <div>
        <Head />
        <RouterProvider router={router} />
      </div>
    </Provider>
  );
}

export default App;
