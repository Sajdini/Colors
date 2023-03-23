import React from "react";
import Header from "../header/Header";
import InputLayout from "./InputLayout";

interface P {
  setColor: React.Dispatch<React.SetStateAction<string>>;
  color: string;
  colorHexCode: string;
  searchResults: string[];
  selectColor: (color: string) => void;
  addColor: () => Promise<void>;
}

const InputSection = ({
  setColor,
  color,
  colorHexCode,
  searchResults,
  selectColor,
  addColor,
}: P) => {
  return (
    <>
      <Header isTitle value="My Favorite Colors" />
      <InputLayout
        setColor={setColor}
        color={color}
        colorHexCode={colorHexCode}
        selectColor={selectColor}
        searchResults={searchResults}
        addColor={addColor}
      />
    </>
  );
};

export default InputSection;
