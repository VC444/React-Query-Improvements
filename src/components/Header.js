import React from "react";
import { useCoffeeTypesQuery } from "../queries/coffee-queries";

export const Header = () => {
  const { data: coffeeTypes, isLoading: areCoffeeTypesLoading } =
    useCoffeeTypesQuery();
  return (
    <div style={{ width: "100%", backgroundColor: "#575765" }}>Header</div>
  );
};
