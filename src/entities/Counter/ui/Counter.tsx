import { useDispatch, useSelector } from "react-redux";

import { Button } from "shared/ui/Button/Button";
import { getCounter } from "../model/selectors/getCounter/getCounter";
import { counterActions } from "../model/slice/counterSlice";

export function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector(getCounter);

  function onIncrement() {
    dispatch(counterActions.increment());
  }

  function onDecrement() {
    dispatch(counterActions.decrement());
  }
  return (
    <div>
      <h1 data-testid="counter-value">{counter.value}</h1>
      <Button onClick={onIncrement} data-testid="increment-button">
        Increment
      </Button>
      <Button onClick={onDecrement} data-testid="decrement-button">
        Decrement
      </Button>
    </div>
  );
}
