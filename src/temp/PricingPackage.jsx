import React from "react";
import { PricingStyle } from "./styled";

const PricingPackage = ({ title, price, features, buttonText, buttonLink }) => {
  return (
    <PricingStyle>
      <span>{title}</span>
      <h2>{price}</h2>
      <ul>
        {features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <a href={buttonLink}>{buttonText}</a>
    </PricingStyle>
  );
};

export default PricingPackage;
