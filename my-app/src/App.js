import Todos from "./modules/todos/components/Todos/Todos";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Todos />
    </Provider>
  );
}

export default App;
