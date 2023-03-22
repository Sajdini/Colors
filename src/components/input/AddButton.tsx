import React from "react";
import styles from "./InputLayout.module.css";
interface P {
  addColor: () => Promise<void>;
}
const AddButton = ({ addColor }: P) => {
  return (
    <div className={styles.addButton} onClick={addColor}>
      +
    </div>
  );
};

export default AddButton;
