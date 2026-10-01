import BookingForm from "./BookingForm";

function BookingPage({ availableTimes, dispatch, submitForm }) {
  return (
    <section className="container booking-page" aria-labelledby="booking-title">
      <h1 id="booking-title">Reserve a Table</h1>
      <p>Choose a date, time and number of guests for your visit.</p>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </section>
  );
}

export default BookingPage;
