import { Outlet, useLocation } from "react-router-dom";
import styles from "./mainLayout.module.scss";
import { HeaderIndex } from "@/template/Header";
import Footer from "@/template/Footer";
import { memo } from "react";
import HomePage from "@/pages/Home/Home";

const MainLayout = memo(() => {
  const location = useLocation();
  const pathRoute = location.pathname;

  return (
    <div className={styles.mainLayout}>
      <HeaderIndex />
      <div
        style={{
          display: `${pathRoute === "/Portfolio" ? "block" : "none"}`,
        }}
      >
        <HomePage />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
});

export default MainLayout;
