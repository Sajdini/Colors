import { v4 as uuid } from "uuid";
import { useState, useEffect } from "react";
import "./App.css";
import DataDisplay from "./components/DataDisplay";
import InputSection from "./components/InputSection";

const colorsObject = {
  aliceblue: "#F0F8FF",
  antiquewhite: "#FAEBD7",
  aqua: "#00FFFF",
  aquamarine: "#7FFFD4",
  azure: "#F0FFFF",
  beige: "#F5F5DC",
  bisque: "#FFE4C4",
  black: "#000000",
  blanchedalmond: "#FFEBCD",
  blue: "#0000FF",
  blueviolet: "#8A2BE2",
  brown: "#A52A2A",
  burlywood: "#DEB887",
  cadetblue: "#5F9EA0",
  chartreuse: "#7FFF00",
  chocolate: "#D2691E",
  coral: "#FF7F50",
  cornflowerblue: "#6495ED",
  cornsilk: "#FFF8DC",
  crimson: "#DC143C",
  cyan: "#00FFFF",
  darkblue: "#00008B",
  darkcyan: "#008B8B",
  darkgoldenrod: "#B8860B",
  darkgray: "#A9A9A9",
  darkgrey: "#A9A9A9",
  darkgreen: "#006400",
  darkkhaki: "#BDB76B",
  darkmagenta: "#8B008B",
  darkolivegreen: "#556B2F",
  darkorange: "#FF8C00",
};

const getKeyByValue = (object: typeof colorsObject, value: string) => {
  return Object.keys(object).find(
    (key) => object[key as keyof typeof colorsObject] === value
  );
};
export interface Data {
  color: string;
  hexCode: string;
  id: string;
}

const App = () => {
  const [color, setColor] = useState("");
  const [colorHexCode, setColorHexCode] = useState("");
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    if (color.length > 2 && !colorHexCode.length) {
      const searchedResults = Object.keys(colorsObject).filter(
        (key) => key.slice(0, color.length) === color
      );
      setSearchResults(searchedResults);
    }
  }, [color, colorHexCode]);

  useEffect(() => {
    const storedData = localStorage.getItem("myItems");
    if (!storedData) return;
    const stringifiedData = JSON.parse(storedData);
    setData(stringifiedData);
  }, []);

  // selecting color from the Results component (autosuggest component)
  const selectColor = (color: string) => {
    setSearchResults([]);
    const hexCode = colorsObject[color as keyof typeof colorsObject];
    setColorHexCode(hexCode);
    setColor("");
    setSearchResults([]);
  };
  //
  const addColor = async () => {
    const colorName = getKeyByValue(colorsObject, colorHexCode);
    if (!colorName) return;
    const item = { color: colorName, hexCode: colorHexCode, id: uuid() };
    const items = await JSON.parse(localStorage.getItem("myItems") || "[]");
    items.unshift(item);
    localStorage.setItem("myItems", JSON.stringify(items));
    setColorHexCode("");
    setColor("");
    setData(items);
  };

  const removeColorHandler = async (id: string) => {
    const dataFromLs = localStorage.getItem("myItems");
    if (dataFromLs) {
      const filteredData = await JSON.parse(dataFromLs).filter(
        (item: Data) => item.id !== id
      );
      localStorage.setItem("myItems", JSON.stringify(filteredData));
      setData(filteredData);
    }
  };

  return (
    <div className="App">
      <InputSection
        setColor={setColor}
        color={color}
        colorHexCode={colorHexCode}
        searchResults={searchResults}
        selectColor={selectColor}
        addColor={addColor}
      />
      <DataDisplay data={data} onRemove={removeColorHandler} />
    </div>
  );
};

export default App;
