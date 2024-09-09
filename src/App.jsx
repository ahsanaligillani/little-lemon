import { Route, Routes } from "react-router-dom";
import "./App.css";
import Container from "./components/Container";
import Home from "./pages/Home";
import Bookings from "./pages/Bookings";
import ConfirmedBooking from "./pages/Bookings/ConfirmedBooking";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Container />}>
          <Route index element={<Home />} />
          <Route path="/booking" element={<Bookings />} />
          <Route path="/booking-confirmed" element={<ConfirmedBooking />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
