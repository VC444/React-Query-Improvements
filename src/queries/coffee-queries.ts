import React from "react";
import { useQuery } from "@tanstack/react-query"

export const useCoffeeTypesQuery = () => {
  return useQuery(["coffee"], () => {
    return fetch("https://api.sampleapis.com/coffee/hot").then((res) => {
      return res.json();
    });
  }, {
    notifyOnChangeProps: ["data", "isLoading"]
  });
};

