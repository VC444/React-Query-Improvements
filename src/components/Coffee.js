import React from "react";
import { useCoffeeTypesQuery } from "../queries/coffee-queries";
import { Header } from "./Header";
import { Body } from "./Body";

export const Coffee = () => {
  const { data: coffeeTypes, isLoading: areCoffeeTypesLoading } =
    useCoffeeTypesQuery();

  // if (areCoffeeTypesLoading) return null;

  return (
    <>
      <Header coffeeTypes={coffeeTypes} />
      <Body coffeeTypes={coffeeTypes} />
    </>
  );
};
