import React from "react";
import Icon from "@/icomoon/Icon";
import styles from "./styles.module.scss";

type TabProps = {
  title: string;
  onClick: () => void;
  onClose: () => void;
};

const Tab = React.memo(({ title, onClick, onClose }: TabProps) => {
  const handleCloseClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent tab click when closing
    onClose();
  };

  return (
    <div className={styles.tab} onClick={onClick}>
      {title}{" "}
      <div className={styles.tab__close} onClick={handleCloseClick}>
        <Icon icon="close" size={20} color="red" />
      </div>
    </div>
  );
});

Tab.displayName = "Tab";

export default Tab;
