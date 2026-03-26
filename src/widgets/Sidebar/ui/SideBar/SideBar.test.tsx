import { fireEvent, screen } from "@testing-library/react";
import { withTranslation } from "react-i18next";

import renderWIthTranslation from "shared/lib/tests/renderWIthTranslation/renderWIthTranslation";
import SideBar from "./SideBar";

describe("SideBar", () => {
  test("should render", () => {
    const SideBarWithTranslation = withTranslation()(SideBar);
    renderWIthTranslation(<SideBarWithTranslation />);
  });

  test("should toggle collapsed", async () => {
    renderWIthTranslation(<SideBar />);
    const toggleBtn = screen.getByTestId("sidebar-toggle");

    expect(screen.getByTestId("sidebar")).not.toHaveClass("collapsed");
    fireEvent.click(toggleBtn);

    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
  });
});
