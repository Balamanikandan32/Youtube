import Body from "./components/Body";
import Head from "./components/Head";
import appStore from "./utility/appStore";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={appStore}>
      <div>
        <Head />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
