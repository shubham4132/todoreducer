import store from "./store";
import { Provider } from "react-redux";
import TodoCounter from "./components/todoCounter";
export default function App() {
  return (
    <Provider store={store}>
      <>
        <h1>Todo List</h1>
        <TodoCounter />
      </>
    </Provider>
  );
}
