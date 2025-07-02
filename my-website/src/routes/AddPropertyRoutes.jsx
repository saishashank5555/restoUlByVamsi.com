import React from "react";
import { Routes, Route } from "react-router-dom";
import PropertySelector from "../components/AddProperty/PropertySelector";
import AddHotelForm from "../pages/ownerWorkspace/AddProperty/AddHotelForm";
import AddGuestHouseForm from "../pages/ownerWorkspace/AddProperty/AddGuestHouseForm";
import AddServiceApartmentForm from "../pages/ownerWorkspace/AddProperty/AddServiceApartmentForm";
import AddBanquetHallForm from "../pages/ownerWorkspace/AddProperty/AddBanquetHallForm";

const AddPropertyRoutes = () => (
  <Routes>
    <Route index element={<PropertySelector />} />
    <Route path="hotel" element={<AddHotelForm />} />
    <Route path="guest-house" element={<AddGuestHouseForm />} />
    <Route path="service-apartment" element={<AddServiceApartmentForm />} />
    <Route path="banquet-hall" element={<AddBanquetHallForm />} />
  </Routes>
);

export default AddPropertyRoutes;
