import React from "react";
import { render, screen } from "@testing-library/react";
import InfoCard from "../Components/InfoCard";

describe("KeyValuePair Component", () => {
  it("renders the label correctly", () => {
    render(<InfoCard label="Test Label" value="Test Value" />);
    const labelElement = screen.getByText("Test Label");
    expect(labelElement).toBeInTheDocument();
  });

  it("renders the value correctly", () => {
    render(<InfoCard label="Test Label" value="Test Value" />);
    const valueElement = screen.getByText("Test Value");
    expect(valueElement).toBeInTheDocument();
  });

  it("uses the correct typography level for the label", () => {
    render(<InfoCard label="Test Label" value="Test Value" />);
    const labelElement = screen.getByText("Test Label");
    expect(labelElement.tagName).toBe("H5"); // Ant Design Typography.Title level={5} renders as <h5>
  });

  it("does not render anything unexpected", () => {
    render(<InfoCard label="Label Only" value="Value Only" />);
    expect(screen.queryByText("Unexpected Text")).not.toBeInTheDocument();
  });
});
