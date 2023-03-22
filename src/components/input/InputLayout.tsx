import AddButton from "./AddButton";
import Input from "./Input";
import styles from "./InputLayout.module.css";
interface P {
  setColor: React.Dispatch<React.SetStateAction<string>>;
  color: string;
  colorHexCode: string;
  searchResults: string[];
  selectColor: (color: string) => void;
  addColor: () => Promise<void>;
}

const InputLayout = ({
  setColor,
  colorHexCode,
  searchResults,
  color,
  selectColor,
  addColor,
}: P) => {
  return (
    <div className={styles.inputLayoutContainer}>
      <Input
        setColor={setColor}
        color={color}
        colorHexCode={colorHexCode}
        searchResults={searchResults}
        selectColor={selectColor}
      />
      <AddButton addColor={addColor} />
    </div>
  );
};

export default InputLayout;
