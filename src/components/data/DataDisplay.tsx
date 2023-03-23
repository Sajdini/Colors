import Header from "../header/Header";
import styles from "./Row.module.css";
import { Data } from "../../App";
import Row from "./Row";
import Spinner from "../spinner/Spinner";
export interface P {
  data: Data[];
  onRemove: (e: string) => void;
  isLoading: boolean;
}
const DataDisplay = ({ data, onRemove, isLoading }: P) => {
  const rowData = data.map((row) => {
    const { color, hexCode, id } = row;
    return <Row color={color} hexCode={hexCode} id={id} onRemove={onRemove} />;
  });

  return (
    <div>
      <div className={styles.headerContainer}>
        <Header isTitle={false} value="Color Collection" />
        {isLoading && <Spinner />}
      </div>
      <div className={styles.rowsContainer}>
        {rowData.length > 0 ? (
          rowData
        ) : (
          <div className={styles.noColor}>No colors, add some</div>
        )}
      </div>
    </div>
  );
};

export default DataDisplay;
