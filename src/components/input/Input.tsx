import styles from "./InputLayout.module.css";
import Results from "./Results";

interface P {
  setColor: React.Dispatch<React.SetStateAction<string>>;
  color: string;
  colorHexCode: string;
  selectColor: (color: string) => void;
  searchResults: string[];
}

const Input = ({
  colorHexCode,
  setColor,
  searchResults,
  color,
  selectColor,
}: P) => {
  return (
    <div className={styles.inputWrapper}>
      <div className={styles.relativePositionContainer}>
        <input
          className={styles.input}
          value={color}
          placeholder="Add a color"
          onChange={(e) => setColor(e.target.value)}
        />
        <div className={styles.heartIcon} />
        {searchResults.length >= 1 && (
          <Results
            searchResults={[...searchResults]}
            selectColor={selectColor}
          />
        )}
      </div>
      <div className={styles.colorBox}>
        <div style={{ backgroundColor: `${colorHexCode}` }} />
      </div>
    </div>
  );
};

export default Input;
