import styles from "./styles.module.scss";
import Icon from "@icomoon/Icon";
import { useCallback } from "react";
const Footer = () => {
  const handleNavigate = useCallback((url: string) => {
    window.open(url, "_blank");
  }, []);

  return (
    <div className={styles.footer}>
      <div className={styles.footer__left}>
        <div className={`${styles.footer__left__title} ${styles.item}`}>
          <p>Find me in: </p>
        </div>
        <div
          className={`${styles.footer__left__facebook} ${styles.item}`}
          onClick={() => handleNavigate("https://www.facebook.com/fakecosy/")}
        >
          <Icon icon="facebook" size={32} />
        </div>
        <div
          className={`${styles.footer__left__linkedin} ${styles.item}`}
          onClick={() =>
            handleNavigate(
              "https://www.linkedin.com/in/doan-duong-danh-756158340"
            )
          }
        >
          <Icon icon="linkedin" size={32} />
        </div>
      </div>
      <div
        className={`${styles.footer__right__github} ${styles.item}`}
        onClick={() => handleNavigate("https://github.com/danhdoan263")}
      >
        @danhdoan263
        <Icon icon="github" size={32} />
      </div>
    </div>
  );
};

export default Footer;
