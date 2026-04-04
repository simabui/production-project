import { fireEvent, screen } from "@testing-library/react";
import { withTranslation } from "react-i18next";

import { componentRender } from "shared/config/componentRender/componentRender";
import { Counter } from "./Counter";

describe("Counter", () => {
  test("should render", () => {
    const CounterWithTranslation = withTranslation()(Counter);
    componentRender(<CounterWithTranslation />, { initialState: { counter: { value: 10 } } });

    expect(screen.getByTestId("counter-value")).toHaveTextContent("10");
  });

  test("should increment counter value", () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
    const incrementBtn = screen.getByTestId("increment-button");

    fireEvent.click(incrementBtn);
    expect(screen.getByTestId("counter-value")).toHaveTextContent("11");
  });

  test("should decrement counter value", () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
    const decrementBtn = screen.getByTestId("decrement-button");

    fireEvent.click(decrementBtn);
    expect(screen.getByTestId("counter-value")).toHaveTextContent("9");
  });
});
