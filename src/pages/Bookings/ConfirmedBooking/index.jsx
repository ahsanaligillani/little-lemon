import "./styles.css";
const ConfirmedBooking = () => {
  return (
    <section className="booking-confirmation">
      <header className="booking-confirmation-header">
        <h1 className="booking-confirmation-title">Reservation Confirmed!</h1>
      </header>
      <div className="booking-confirmation-details">
        <p className="booking-confirmation-text">
          Thank you for booking with us. Your reservation is now confirmed. We
          look forward to welcoming you soon.
        </p>
        <p className="booking-confirmation-text">
          If you need any assistance or have any special requests, please don’t
          hesitate to reach out.
        </p>
      </div>
    </section>
  );
};

export default ConfirmedBooking;
