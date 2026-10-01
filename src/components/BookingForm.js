import { useState } from "react";

// Today's date in YYYY-MM-DD format (local time) – used as the minimum date
const today = () => {
  const d = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
};

// Validation rules – returns an object with an error message per invalid field
export const validate = ({ date, time, guests, occasion }) => {
  const errors = {};
  if (!date) {
    errors.date = "Please choose a date.";
  } else if (date < today()) {
    errors.date = "The date cannot be in the past.";
  }
  if (!time) errors.time = "Please choose a time.";
  const n = Number(guests);
  if (!guests || Number.isNaN(n)) {
    errors.guests = "Please enter the number of guests.";
  } else if (n < 1 || n > 10) {
    errors.guests = "Number of guests must be between 1 and 10.";
  }
  if (!occasion) errors.occasion = "Please choose an occasion.";
  return errors;
};

function BookingForm({ availableTimes = [], dispatch, submitForm }) {
  const [form, setForm] = useState({
    date: "",
    time: "",
    guests: 1,
    occasion: "Birthday",
  });
  const [touched, setTouched] = useState({});

  const errors = validate(form);
  const isValid = Object.keys(errors).length === 0;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // A new date means new available times – ask the parent to update them
    if (name === "date" && dispatch) {
      dispatch({ type: "UPDATE_TIMES", date: value });
    }
  };

  const handleBlur = (e) =>
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ date: true, time: true, guests: true, occasion: true });
    if (isValid && submitForm) submitForm(form);
  };

  const showError = (field) =>
    touched[field] && errors[field] ? (
      <p className="error" id={`${field}-error`} role="alert">
        {errors[field]}
      </p>
    ) : null;

  return (
    <form className="booking-form" onSubmit={handleSubmit} noValidate>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        name="date"
        min={today()}
        required
        value={form.date}
        onChange={handleChange}
        onBlur={handleBlur}
        aria-invalid={Boolean(touched.date && errors.date)}
        aria-describedby="date-error"
      />
      {showError("date")}

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        name="time"
        required
        value={form.time}
        onChange={handleChange}
        onBlur={handleBlur}
        aria-invalid={Boolean(touched.time && errors.time)}
        aria-describedby="time-error"
      >
        <option value="">-- Select a time --</option>
        {availableTimes.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>
      {showError("time")}

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        name="guests"
        placeholder="1"
        min="1"
        max="10"
        required
        value={form.guests}
        onChange={handleChange}
        onBlur={handleBlur}
        aria-invalid={Boolean(touched.guests && errors.guests)}
        aria-describedby="guests-error"
      />
      {showError("guests")}

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        name="occasion"
        required
        value={form.occasion}
        onChange={handleChange}
        onBlur={handleBlur}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
        <option>Business</option>
        <option>Other</option>
      </select>
      {showError("occasion")}

      <button
        type="submit"
        className="button"
        disabled={!isValid}
        aria-label="On Click: make your reservation"
      >
        Make Your Reservation
      </button>
    </form>
  );
}

export default BookingForm;
