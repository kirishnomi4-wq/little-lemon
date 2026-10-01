import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm, { validate } from "./BookingForm";

const times = ["17:00", "18:00", "19:00"];

const futureDate = () => {
  const d = new Date();
  d.setDate(d.getDate() + 7);
  return d.toISOString().slice(0, 10);
};

describe("BookingForm", () => {
  test("renders the form heading labels", () => {
    render(<BookingForm availableTimes={times} />);
    expect(screen.getByText("Choose date")).toBeInTheDocument();
    expect(screen.getByText("Choose time")).toBeInTheDocument();
    expect(screen.getByText("Number of guests")).toBeInTheDocument();
    expect(screen.getByText("Occasion")).toBeInTheDocument();
  });

  test("shows the available times passed from the parent", () => {
    render(<BookingForm availableTimes={times} />);
    times.forEach((t) =>
      expect(screen.getByRole("option", { name: t })).toBeInTheDocument()
    );
  });

  test("applies HTML5 validation attributes", () => {
    render(<BookingForm availableTimes={times} />);
    const date = screen.getByLabelText("Choose date");
    expect(date).toHaveAttribute("type", "date");
    expect(date).toBeRequired();
    expect(date).toHaveAttribute("min");

    const guests = screen.getByLabelText("Number of guests");
    expect(guests).toHaveAttribute("type", "number");
    expect(guests).toHaveAttribute("min", "1");
    expect(guests).toHaveAttribute("max", "10");
    expect(guests).toBeRequired();

    expect(screen.getByLabelText("Choose time")).toBeRequired();
    expect(screen.getByLabelText("Occasion")).toBeRequired();
  });

  test("submit button is disabled while the form is invalid", () => {
    render(<BookingForm availableTimes={times} />);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  test("dispatches UPDATE_TIMES when the date changes", () => {
    const dispatch = jest.fn();
    render(<BookingForm availableTimes={times} dispatch={dispatch} />);
    const date = futureDate();
    fireEvent.change(screen.getByLabelText("Choose date"), {
      target: { value: date },
    });
    expect(dispatch).toHaveBeenCalledWith({ type: "UPDATE_TIMES", date });
  });

  test("shows an error message for invalid guests", () => {
    render(<BookingForm availableTimes={times} />);
    const guests = screen.getByLabelText("Number of guests");
    fireEvent.change(guests, { target: { value: "15" } });
    fireEvent.blur(guests);
    expect(
      screen.getByText("Number of guests must be between 1 and 10.")
    ).toBeInTheDocument();
  });

  test("submits the form when all fields are valid", () => {
    const submitForm = jest.fn();
    render(<BookingForm availableTimes={times} submitForm={submitForm} />);
    const date = futureDate();
    fireEvent.change(screen.getByLabelText("Choose date"), {
      target: { value: date },
    });
    fireEvent.change(screen.getByLabelText("Choose time"), {
      target: { value: "18:00" },
    });
    fireEvent.change(screen.getByLabelText("Number of guests"), {
      target: { value: "4" },
    });
    const button = screen.getByRole("button");
    expect(button).toBeEnabled();
    fireEvent.click(button);
    expect(submitForm).toHaveBeenCalledWith({
      date,
      time: "18:00",
      guests: "4",
      occasion: "Birthday",
    });
  });
});

describe("validate()", () => {
  test("returns errors for empty fields", () => {
    const errors = validate({ date: "", time: "", guests: "", occasion: "" });
    expect(Object.keys(errors)).toEqual(["date", "time", "guests", "occasion"]);
  });

  test("rejects a date in the past", () => {
    const errors = validate({
      date: "2000-01-01",
      time: "17:00",
      guests: 2,
      occasion: "Birthday",
    });
    expect(errors.date).toBe("The date cannot be in the past.");
  });

  test("returns no errors for valid data", () => {
    expect(
      validate({ date: futureDate(), time: "17:00", guests: 2, occasion: "Birthday" })
    ).toEqual({});
  });
});
