import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import MenuList from "./MenuList";

jest.mock("axios");

test("renders the menu list", async () => {
    const mockMenu = [
        {
          category: "Entrées",
          items: [{ name: "Salade", description: "Test", price: 20 }],
        },
      ];
      axios.get.mockResolvedValueOnce({ data: mockMenu });
      


  render(<MenuList />);

  await waitFor(() => {
    expect(screen.getByText(/Entrées/i)).toBeInTheDocument();
  });
});
