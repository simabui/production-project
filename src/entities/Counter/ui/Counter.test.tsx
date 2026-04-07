import { fireEvent, screen } from "@testing-library/react";
import { withTranslation } from "react-i18next";

import { componentRender } from "shared/config/componentRender/componentRender";
import { Counter } from "./Counter";

const initialState = { counter: { value: 10 }, user: { authData: { id: "1", username: "test" } } };

describe("Counter", () => {
  test("should render", () => {
    const CounterWithTranslation = withTranslation()(Counter);
    componentRender(<CounterWithTranslation />, { initialState });

    expect(screen.getByTestId("counter-value")).toHaveTextContent("10");
  });

  test("should increment counter value", () => {
    componentRender(<Counter />, { initialState });
    const incrementBtn = screen.getByTestId("increment-button");

    fireEvent.click(incrementBtn);
    expect(screen.getByTestId("counter-value")).toHaveTextContent("11");
  });

  test("should decrement counter value", () => {
    componentRender(<Counter />, { initialState });
    const decrementBtn = screen.getByTestId("decrement-button");

    fireEvent.click(decrementBtn);
    expect(screen.getByTestId("counter-value")).toHaveTextContent("9");
  });
});
