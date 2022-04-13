import { render, screen } from "@testing-library/react";
import { Input } from ".";

describe("<Input />", () => {
  it("should render default", () => {
    render(<Input label="My input" />);

    expect(screen.getByLabelText("My input")).toBeInTheDocument();
  });
});
