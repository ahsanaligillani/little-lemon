import React, { useState } from 'react';
import "./styles.css";

const BookingForm = ({
  date,
  setDate,
  availableTimes,
  updateTimes,
  submitForm,
}) => {
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("Birthday");
  const [formErrors, setFormErrors] = useState({
    date: false,
    time: false,
    guests: false,
    occasion: false,
  });

  const handleDateChange = (event) => {
    const newDate = event.target.value;
    setDate(newDate);
    updateTimes(newDate);
    setFormErrors((prev) => ({ ...prev, date: !newDate }));
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
    setFormErrors((prev) => ({ ...prev, time: !event.target.value }));
  };

  const handleGuestsChange = (event) => {
    setGuests(event.target.value);
    setFormErrors((prev) => ({ ...prev, guests: !event.target.value }));
  };

  const handleOccasionChange = (event) => {
    setOccasion(event.target.value);
    setFormErrors((prev) => ({ ...prev, occasion: !event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!date || !time || !guests || !occasion) {
      setFormErrors({
        date: !date,
        time: !time,
        guests: !guests,
        occasion: !occasion,
      });
      return;
    }

    const formData = {
      date,
      time,
      guests: parseInt(guests, 10),
      occasion,
    };

    submitForm(formData);
  };

  return (
    <form className="reservation-form" onSubmit={handleSubmit}>
      <fieldset className="reservation-fieldset">
        <legend className="reservation-legend">Reservation Details</legend>

        <div className="reservation-field">
          <label htmlFor="res-date" className="reservation-label">
            Choose date
          </label>
          <input
            type="date"
            id="res-date"
            value={date}
            onChange={handleDateChange}
            className={`reservation-input ${formErrors.date ? "error" : ""}`}
            required
            aria-label="Date of reservation"
          />
        </div>

        <div className="reservation-field">
          <label htmlFor="res-time" className="reservation-label">
            Choose time
          </label>
          <select
            id="res-time"
            className={`reservation-select ${formErrors.time ? "error" : ""}`}
            value={time}
            onChange={handleTimeChange}
            required
            aria-label="Reservation time"
          >
            <option value="">Select a time</option>
            {availableTimes.length ? (
              availableTimes.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))
            ) : (
              <option>No times available</option>
            )}
          </select>
        </div>

        <div className="reservation-field">
          <label htmlFor="guests" className="reservation-label">
            Number of guests
          </label>
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            value={guests}
            onChange={handleGuestsChange}
            className={`reservation-input ${formErrors.guests ? "error" : ""}`}
            required
            aria-label="Number of guests"
          />
        </div>

        <div className="reservation-field">
          <label htmlFor="occasion" className="reservation-label">
            Occasion
          </label>
          <select
            id="occasion"
            className={`reservation-select ${formErrors.occasion ? "error" : ""}`}
            value={occasion}
            onChange={handleOccasionChange}
            required
            aria-label="Occasion"
          >
            <option value="">Select an occasion</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Engagement">Engagement</option>
          </select>
        </div>

        <div className="reservation-field">
          <button
            type="submit"
            className="reservation-submit"
            disabled={Object.values(formErrors).some((error) => error)}
            aria-label="Submit reservation form"
          >
            Make Your reservation
          </button>
        </div>
      </fieldset>
    </form>
  );
};

export default BookingForm;
