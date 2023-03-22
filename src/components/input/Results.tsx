import styles from "./InputLayout.module.css";
interface P {
  searchResults: string[];
  selectColor: (color: string) => void;
}
const Results = ({ searchResults, selectColor }: P) => {
  const searchedItem = searchResults.map((result, index) => {
    return (
      <div
        key={index}
        className={styles.result}
        role="button"
        onClick={() => selectColor(result)}
      >
        <p>{result}</p>
      </div>
    );
  });
  return (
    <div className={styles.resultsContainer}>
      {searchResults.length >= 1 ? (
        searchedItem
      ) : (
        <p className={styles.noResults}>No results</p>
      )}
    </div>
  );
};

export default Results;
