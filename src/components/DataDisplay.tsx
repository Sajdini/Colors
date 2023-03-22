import Header from "./header/Header";
import styles from "./data/Row.module.css";
import { Data } from "../App";
import Row from "./data/Row";
export interface P {
  data: Data[];
  onRemove: (e: string) => void;
}
const DataDisplay = ({ data, onRemove }: P) => {
  const rowData = data.map((row) => {
    const { color, hexCode, id } = row;
    return <Row color={color} hexCode={hexCode} id={id} onRemove={onRemove} />;
  });

  return (
    <div>
      <Header isTitle={false} value="Color Collection" />
      <div className={styles.rowsContainer}>{rowData}</div>
    </div>
  );
};

export default DataDisplay;
