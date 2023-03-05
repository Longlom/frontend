import Link from "next/link";
import { useCallback } from "react";
import styles from "./index.module.css";

const Button = () => {

  //TODO
  const handleClcik = useCallback((e: React.MouseEvent<HTMLButtonElement>): void => {
    console.log('CLICKED', e);
  }, []);

  const buttonComponent = <button onClick={handleClcik} className={styles.button}>
    Вход
  </button>
  return (
    <div className={styles.buttonWrapper}>
      {buttonComponent}
    </div>
  );
};
export default Button;
