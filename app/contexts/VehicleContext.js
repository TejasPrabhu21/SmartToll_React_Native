// VehicleContext.js
import React, { createContext, useState, useContext } from 'react';

const VehicleContext = createContext();

export const useVehicleContext = () => useContext(VehicleContext);

export const VehicleProvider = ({ children }) => {
    const [vehicleData, setVehicleData] = useState(null);

    const setVehicle = (data) => {
        setVehicleData(data);
    };

    return (
        <VehicleContext.Provider value={{ vehicleData, setVehicle }}>
            {children}
        </VehicleContext.Provider>
    );
};
