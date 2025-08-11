import Btn from "./components/Btn";
import { inc, dec, cls, rnd } from "./store/counterSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const count = useSelector((state) => state.count.value);
  const dispatch = useDispatch();

  return (
    <div className="wrap">
      <div className="container content-wrap">
        <h1 className="title">{count}</h1>
        <Btn title="Increment" btnClick={() => dispatch(inc())} />
        <Btn title="Decrement" btnClick={() => dispatch(dec())} />
        <Btn title="Random" btnClick={() => dispatch(rnd())} />
        <Btn title="Clear" btnClick={() => dispatch(cls())} />
      </div>
    </div>
  );
}

export default App;
