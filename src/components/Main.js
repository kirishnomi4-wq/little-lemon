import { useReducer } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./HomePage";
import BookingPage from "./BookingPage";
import ConfirmedBooking from "./ConfirmedBooking";
import { fetchAPI, submitAPI } from "../api";

// Returns the available times for today
export const initializeTimes = () => fetchAPI(new Date());

// Reducer: when the user picks a new date, load the times for that date
export const updateTimes = (state, action) => {
  if (action.type === "UPDATE_TIMES") {
    return fetchAPI(new Date(action.date));
  }
  return state;
};

function Main() {
  // availableTimes state lives here (parent of BookingForm)
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      navigate("/confirmed", { state: formData });
    }
  };

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
}

export default Main;
