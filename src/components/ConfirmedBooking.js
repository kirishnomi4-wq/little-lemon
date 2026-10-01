import { Link, useLocation } from "react-router-dom";

function ConfirmedBooking() {
  const { state } = useLocation();

  return (
    <section className="container confirmed" aria-live="polite">
      <h1>Booking Confirmed! 🎉</h1>
      {state ? (
        <p>
          Your table for {state.guests} on {state.date} at {state.time} (
          {state.occasion}) is reserved. See you soon!
        </p>
      ) : (
        <p>Your reservation has been received. See you soon!</p>
      )}
      <Link to="/" className="button">Back to Home</Link>
    </section>
  );
}

export default ConfirmedBooking;
