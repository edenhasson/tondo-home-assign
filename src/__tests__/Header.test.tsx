import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../components/Header";

describe("Header Component", () => {
  test("renders header with title and search input, and handles input changes correctly", () => {
    const mockOnInputChange = jest.fn();

    render(<Header onInputChange={mockOnInputChange} />);

    const titleElement = screen.getByRole("heading", { name: /spacex launches/i });
    expect(titleElement).toBeDefined();

    const searchInput = screen.getByPlaceholderText("Search launches...");
    expect(searchInput).toBeDefined();

    fireEvent.change(searchInput, { target: { value: "Falcon" } });

    expect(mockOnInputChange).toHaveBeenCalledWith("Falcon");
    expect(mockOnInputChange).toHaveBeenCalledTimes(1);
  });
});
