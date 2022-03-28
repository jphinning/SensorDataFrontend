import { useState, useEffect, useContext } from "react";
import Router from "next/router";

import axiosHttp from "../../config/axiosHttp";

export interface IUseSensorDataProps {
  limit: string;
  order: "ASC" | "DESC";
}

interface ISensorDataItem {
  id: string;
  data: string;
  createDateColumn: string;
  updateDateColumn: string;
}

export interface ISensorDataItens extends Array<ISensorDataItem> {}

export function useSensorData({ limit, order }: IUseSensorDataProps) {
  const [sensorData, setSensorData] = useState<ISensorDataItens>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axiosHttp.get(
          `sensor-information?limit=${limit}&order=${order}`
        );
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
