import HomePage from "../../app/page";
import { render, screen } from "../test-utils";

describe("HomePage", () => {
  it("should render the heading", () => {
    const textToFind = "Homepage";
    render(<HomePage />);
    const heading = screen.getByText(textToFind);
    expect(heading).toBeInTheDocument();
  });

  it("renders the Action section", () => {
    render(<HomePage />);
    const actionSection = screen.getByRole("region", {
      name: "Most Action Packed Shows",
    });
    expect(actionSection).toBeInTheDocument();
  });

  it("renders the Science-Fiction section", () => {
    render(<HomePage />);
    const scienceFictionSection = screen.getByRole("region", {
      name: "Science-Fiction Classics",
    });
    expect(scienceFictionSection).toBeInTheDocument();
  });

  it("renders the Comedy section", () => {
    render(<HomePage />);
    const comedySection = screen.getByRole("region", {
      name: "Funniest Comedy Shows",
    });
    expect(comedySection).toBeInTheDocument();
  });
});
