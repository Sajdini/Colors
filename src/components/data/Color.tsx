import styles from "./Row.module.css";
interface P {
  colorHex: string;
  colorText: string;
}
const Color = ({ colorHex, colorText }: P) => {
  return (
    <div className={styles.colorContainer}>
      <div
        className={styles.colorBox}
        style={{ backgroundColor: `${colorHex}` }}
      />
      <p>{colorText}</p>
    </div>
  );
};

export default Color;
