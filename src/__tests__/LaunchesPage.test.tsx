import { render, screen } from "@testing-library/react";
import LaunchesPage from "../pages/LaunchesPage";

test("renders loading spinner when inProgress is true", () => {
  render(<LaunchesPage />);
  const spinner = screen.getByRole("progressbar");
  expect(spinner).toBeDefined();
});

test("renders Header component", () => {
  render(<LaunchesPage />);
  const header = screen.getByText("SpaceX Launches");
  expect(header).toBeDefined();
});
