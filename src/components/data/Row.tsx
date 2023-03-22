import Color from "./Color";
import RemoveButton from "./RemoveButton";
import styles from "./Row.module.css";

export interface P {
  color: string;
  hexCode: string;
  id: string;
  onRemove: (e: string) => void;
}

const Row = ({ color, hexCode, id, onRemove }: P) => {
  return (
    <div className={styles.row} id={id}>
      <Color colorHex={hexCode} colorText={color} />
      <RemoveButton id={id} onRemove={onRemove} />
    </div>
  );
};

export default Row;
