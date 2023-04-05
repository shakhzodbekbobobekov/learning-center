import { useDispatch, useSelector } from "react-redux";
import { minusCount, plusCount, resetCount } from "./reducers/countSlice";
import { addedEven } from "./reducers/copySlice";
function App() {
  const state = useSelector((state) => state);
  // console.log(state);
  const dispatch = useDispatch(plusCount, minusCount, resetCount, addedEven);
  return (
    <div className="card container mt-2 p-3">
      <h5 className="card-title">Card counter: {state.countReducer.count} </h5>
      <h5>{state.copySlice.copyCount}</h5>
      <div className="card-body">
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => dispatch(minusCount())}
          >
            Minus
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => dispatch(resetCount())}
          >
            Reset
          </button>
          <button
            type="button"
            className="btn btn-warning"
            onClick={() => dispatch(plusCount())}
          >
            Plus
          </button>
          <button
            type="button"
            className="btn btn-info"
            onClick={() => dispatch(addedEven())}
          >
            Plus x2
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
