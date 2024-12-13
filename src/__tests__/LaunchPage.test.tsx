import { render, screen, fireEvent } from "@testing-library/react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import LaunchPage from "../pages/LaunchPage";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
  useParams: jest.fn(),
}));
jest.mock("../hooks/useFetch");

describe("LaunchPage", () => {
  const mockUseFetch = useFetch as jest.Mock;
  const mockNavigate = jest.fn();
  (useParams as jest.Mock).mockReturnValue({ id: "1" }); 

  beforeEach(() => {
    jest.clearAllMocks();
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
  });

  test("renders loading spinner when loading is true", () => {
    mockUseFetch.mockReturnValue({
      data: null,
      error: null,
      loading: true,
    });

    render(<LaunchPage />);

    const spinner = screen.getByRole("progressbar");
    expect(spinner).toBeDefined();
  });

  test("renders error message and 'Go Back' button when error occurs", () => {
    mockUseFetch.mockReturnValue({
      data: null,
      error: "Failed to fetch launch details.",
      loading: false,
    });

    render(<LaunchPage />);

    const errorMessage = screen.getByText("Oops! Something went wrong.");
    expect(errorMessage).toBeDefined();

    const errorDetails = screen.getByText("Failed to fetch launch details.");
    expect(errorDetails).toBeDefined();

    const goBackButton = screen.getByRole("button", { name: /go back/i });
    expect(goBackButton).toBeDefined();

    fireEvent.click(goBackButton);
    expect(mockNavigate).toHaveBeenCalledWith("/");
  });
});
