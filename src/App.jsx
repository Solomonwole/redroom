import React from "react";
import PricingPackage from "./temp/PricingPackage";
import data from "./data/Data";
import "./index.css";
import styled from "styled-components";
import Logo from "./assets/logo.png"

function App() {
  return (
    <>
      <div className="container">
        <header>
          <img src={Logo} alt="" />
          <p className="about"> 
            RedRoom Magic Factory is an exciting and innovative music camp that
            offers a unique opportunity for artists to connect with like-minded
            individuals, industry professionals, and experienced gurus. The camp
            is organized by RedRoom Studios, a well-known name in the music
            industry, and is designed to help artists take their music to the
            next level, without having to break the bank.
          </p>
        </header>

        <h3>Select a package</h3>
        <GridStyle>
          {data.map((packageData, index) => (
            <PricingPackage
              key={index}
              title={packageData.title}
              price={packageData.price}
              features={packageData.features}
              buttonText={packageData.buttonText}
              buttonLink={packageData.buttonLink}
            />
          ))}
        </GridStyle>
      </div>
    </>
  );
}

export default App;

const GridStyle = styled.div`
  margin: 30px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 20px;

  @media screen and (max-width: 428px) {
    grid-template-columns: 1fr;
    row-gap: 20px;
    width: 100%;
    padding: 0 20px;
  }
`;
