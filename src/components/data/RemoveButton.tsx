import React from "react";
import styles from "./Row.module.css";
interface P {
  id: string;
  onRemove: (id: string) => void;
}

const RemoveButton = ({ id, onRemove }: P) => {
  return (
    <div
      className={styles.removeButton}
      role="button"
      onClick={() => onRemove(id)}
    >
      Remove Color
    </div>
  );
};

export default RemoveButton;
