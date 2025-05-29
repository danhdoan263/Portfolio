import { Outlet } from "react-router-dom";
import styles from "./mainLayout.module.scss";
import { HeaderIndex } from "@/template/Header";
import Footer from "@/template/Footer";

const MainLayout = () => {
  return (
    <div className={styles.mainLayout}>
      <HeaderIndex />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
