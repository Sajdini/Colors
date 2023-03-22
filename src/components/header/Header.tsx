import styles from "./Header.module.css";
interface P {
  isTitle: boolean;
  value: string;
}

const Header = ({ isTitle, value }: P) => {
  return (
    <>
      {isTitle ? (
        <h1 className={styles.title}>{value}</h1>
      ) : (
        <h2 className={styles.subtitle}>{value}</h2>
      )}
    </>
  );
};

export default Header;
