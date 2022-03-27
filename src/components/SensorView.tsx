import React, { Key, useContext, useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Progress,
  Center,
} from "@chakra-ui/react";

import { Wrapper } from "../components/Wrapper";
import { useSensorData } from "../context/hooks/useSensorData";

interface ISensorDataItem {
  id: string;
  data: string;
  createDateColumn: string;
  updateDateColumn: string;
}

export interface ISensorDataItens extends Array<ISensorDataItem> {}

export const formatDate = (date: string) => {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(new Date(date));
};

export const SensorView: React.FC = ({}) => {
  const { sensorData } = useSensorData();

  return (
    <Wrapper>
      <Center>{`Soil is ${
        sensorData[0] ? parseInt(sensorData[sensorData.length - 1].data) : 0
      }% moistered`}</Center>
      <Progress
        colorScheme="purple"
        hasStripe
        value={
          sensorData[0] ? parseInt(sensorData[sensorData.length - 1].data) : 0
        }
      />
      <Table size="md" mt="20">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Data</Th>
            <Th>Created At</Th>
            <Th>Updated At</Th>
          </Tr>
        </Thead>
        <Tbody>
          {sensorData.map(
            ({ id, data, createDateColumn, updateDateColumn }) => (
              <Tr key={id as Key}>
                <Td>{id}</Td>
                <Td>{`${data} %`}</Td>
                <Td>{formatDate(createDateColumn)}</Td>
                <Td>{formatDate(updateDateColumn)}</Td>
              </Tr>
            )
          )}
        </Tbody>
      </Table>
    </Wrapper>
  );
};
