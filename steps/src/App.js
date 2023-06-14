import { useReducer } from "react";
import "./App.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "NEXT_STEP":
      return { ...state, step: state.step + 1 >= 4 ? 4 : state.step + 1 };
    case "PREV_STEP":
      return { ...state, step: state.step - 1 <= 1 ? 1 : state.step - 1 };
    default:
      return state;
  }
};

const initialState = { step: 1 };

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state.step);

  return (
    <div className="container">
      <div className="pages">
        {Array(4)
          .fill(1)
          .map((item, index) => {
            return (
              <>
                <div
                  style={{
                    borderColor: `${
                      index + 1 <= state.step ? "rgb(70,92,216)" : "gray"
                    }`,
                  }}
                >
                  {index + 1}
                </div>
                {index !== 3 && (
                  <span
                    style={{
                      backgroundColor: `${
                        index + 1 < state.step ? "rgb(70,92,216)" : "gray"
                      }`,
                    }}
                  ></span>
                )}
              </>
            );
          })}
        {/* <div>1</div>
        <span></span>
        <div>2</div>
        <span></span>
        <div>3</div>
        <span></span>
        <div>4</div> */}
      </div>
      <div className="btns">
        <button
          data-testid="prevBtn"
          className="prevBtn"
          onClick={() => dispatch({ type: "PREV_STEP" })}
          disabled={state.step === 1}
          style={{
            backgroundColor: `${state.step === 1 ? "gray" : "rgb(70,92,216)"}`,
          }}
        >
          Prev
        </button>
        <button
          data-testid="nextBtn"
          onClick={() => dispatch({ type: "NEXT_STEP" })}
          disabled={state.step === 4}
          style={{
            backgroundColor: `${state.step === 4 ? "gray" : "rgb(70,92,216)"}`,
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
