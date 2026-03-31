import { fireEvent, screen } from "@testing-library/react";
import { withTranslation } from "react-i18next";

import { componentRender } from "shared/config/componentRender/componentRender";
import SideBar from "./SideBar";

describe("SideBar", () => {
  test("should render", () => {
    const SideBarWithTranslation = withTranslation()(SideBar);
    componentRender(<SideBarWithTranslation />);
  });

  test("should toggle collapsed", async () => {
    componentRender(<SideBar />);
    const toggleBtn = screen.getByTestId("sidebar-toggle");

    expect(screen.getByTestId("sidebar")).not.toHaveClass("collapsed");
    fireEvent.click(toggleBtn);

    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
  });
});
