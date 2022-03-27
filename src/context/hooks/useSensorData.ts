import { useState, useEffect, useContext } from "react";
import Router from "next/router";

import axiosHttp from "../../config/axiosHttp";

interface ISensorDataItem {
  id: string;
  data: string;
  createDateColumn: string;
  updateDateColumn: string;
}

export interface ISensorDataItens extends Array<ISensorDataItem> {}

export function useSensorData() {
  const [sensorData, setSensorData] = useState<ISensorDataItens>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axiosHttp.get("sensor-information");
        setSensorData(data);
      } catch (error) {
        console.log(error);
        Router.push("/login");
      }
    };

    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return { sensorData };
}
