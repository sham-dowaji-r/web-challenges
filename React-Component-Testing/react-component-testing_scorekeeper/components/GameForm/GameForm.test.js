import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GameForm from "./index";

jest.mock("next/router", () => ({
  useRouter() {
    return { push: jest.fn() };
  },
}));

test("renders two input fields and a button", () => {
  render(<GameForm />);

  const gameNameInput = screen.getByLabelText("Name of game");
  expect(gameNameInput).toBeInTheDocument();
  const playerNameInput = screen.getByLabelText(
    "Player names, separated by comma"
  );
  expect(playerNameInput).toBeInTheDocument();
  const addPlayButton = screen.getByRole("button", { name: "Create game" });
  expect(addPlayButton).toBeInTheDocument();
});

test("renders a form with the accessible name 'Create a new game'", () => {
  render(<GameForm />);
  const gameForm = screen.getByRole("form", { name: "Create a new game" });
  expect(gameForm).toBeInTheDocument();
});

/*test("submits the correct form data when every field is filled out", async () => {
  const user = userEvent.setup();
  render(<GameForm />);
  const gameNameInput = screen.getByLabelText("Name of game");
  const playerNameInput = screen.getByLabelText(
    "Player names, separated by comma"
  );
  const addPlayButton = screen.getByRole("button", { name: "Create game" });

  await user.type(gameNameInput, "Chess");
  await user.type(playerNameInput, "Lana");
  await user.click(addPlayButton);
  expect(mockPush).toHaveBeenCalled(); // تأكد إن التنقّل تم
});
*/
test("does not submit form if one input field is left empty", async () => {
  const user = userEvent.setup();
  const mockPush = jest.fn();

  jest.mock("next/router", () => ({
    useRouter() {
      return { push: mockPush };
    },
  }));

  render(<GameForm />);

  const gameNameInput = screen.getByLabelText("Name of game");
  const startGameButton = screen.getByRole("button", { name: "Create game" });

  await user.type(gameNameInput, "Checkers");
  await user.click(startGameButton);

  expect(mockPush).not.toHaveBeenCalled(); // ما يوديناش على /game
});
