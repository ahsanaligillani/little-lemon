import { useState, useReducer, useEffect } from "react";
import BookingForm from "./BookingForm";
import { fetchAPI, submitAPI } from "../../api/api";
import { useNavigate } from "react-router-dom";

const timesReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return action.payload;
    case "INITIALIZE_TIMES":
      return action.payload;
    default:
      return state;
  }
};

const Bookings = () => {
  const [date, setDate] = useState("");
  const [availableTimes, dispatch] = useReducer(timesReducer, [], () =>
    fetchAPI(new Date())
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (date) {
      const fetchTimes = async () => {
        const times = await fetchAPI(new Date(date));
        dispatch({ type: "UPDATE_TIMES", payload: times });
      };

      fetchTimes();
    }
  }, [date]);

  const updateTimes = async (selectedDate) => {
    setDate(selectedDate);
    const times = await fetchAPI(new Date(selectedDate));
    dispatch({ type: "UPDATE_TIMES", payload: times });
  };

  const submitData = (formData) => {
    const response = submitAPI(formData);
    console.log(response);
    if (response) navigate("/booking-confirmed");
  };
  return (
    <div>
      <BookingForm
        date={date}
        setDate={setDate}
        availableTimes={availableTimes}
        updateTimes={updateTimes}
        submitForm={submitData}
      />
    </div>
  );
};

export default Bookings;
