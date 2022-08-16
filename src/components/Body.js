import React from "react";
import { useCoffeeTypesQuery } from "../queries/coffee-queries";

export const Body = () => {
  const { data: coffeeTypes = [] } = useCoffeeTypesQuery();
  return (
    <>
      {coffeeTypes.map((coffee) => {
        return <p>{coffee?.title}</p>;
      })}
    </>
  );
};
