import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MenuItem from "./MenuItem";

describe("MenuItem Component", () => {
  const mockAdd = jest.fn();
  const mockRemove = jest.fn();

  const props = {
    name: "Test Item",
    description: "This is a test item",
    price: 100,
    image: "/test-image.jpg",
    onAdd: mockAdd,
    onRemove: mockRemove,
  };

  it("renders the menu item details", () => {
    render(<MenuItem {...props} />);

   
    expect(screen.getByText(/Test Item/i)).toBeInTheDocument();

    expect(screen.getByText(/This is a test item/i)).toBeInTheDocument();

    expect(screen.getByText(/100 MAD/i)).toBeInTheDocument();
  });

  it("calls onAdd when the add button is clicked", () => {
    render(<MenuItem {...props} />);

    const addButton = screen.getByTestId("add-button");
    fireEvent.click(addButton);

    expect(mockAdd).toHaveBeenCalledTimes(1);
  });

  it("calls onRemove when the remove button is clicked", () => {
    render(<MenuItem {...props} />);

    const removeButton = screen.getByTestId("remove-button");
    fireEvent.click(removeButton);

    expect(mockRemove).toHaveBeenCalledTimes(1);
  });
});
