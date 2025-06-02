import type { IconNames } from "@/icomoon/Icon";
import IconText from "../IconText/IconText";
import styles from "./styles.module.scss";
import { data, type DataMockup } from "@/mock/Data";
import { useState } from "react";
import type { IconContainerProps } from "../type";

const IconContainer = ({ setDataShow }: IconContainerProps) => {
  const [active, setActive] = useState(false);
  const [dataShowChildId, setDataShowChildId] = useState<number | null>(null);
  const dataItem = data;
  const handleDataShow = (data: DataMockup) => {
    setDataShowChildId(data.id);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderList = (item: any) => {
    return (
      <li
        key={item.id}
        onClick={() => {
          handleDataShow(item);
        }}
      >
        <IconText
          icon={item.icon as IconNames}
          text={item.title}
          icolor={item.color}
          onClick={() => {}}
        />
        {dataShowChildId === item.id && (
          <ul
            style={{
              listStyleType: "none",
            }}
          >
            {item.data?.map((item: DataMockup) => {
              return (
                <li
                  key={item.id}
                  style={{ borderBottom: "1px solid rgb(110, 79, 58)" }}
                >
                  <IconText
                    icon={item.icon as IconNames}
                    text={item.title}
                    icolor={item.color}
                    style={{
                      padding: "5px 16px",
                      borderLeft: "1px solid rgb(110, 79, 58)",
                    }}
                    onClick={() => {
                      setDataShow(item);
                    }}
                  />
                </li>
              );
            })}
          </ul>
        )}
      </li>
    );
  };

  const renderListSingle = (item: DataMockup) => {
    return (
      <li
        key={item.id}
        onClick={() => {
          setDataShow(item);
        }}
      >
        <IconText
          icon={item.icon as IconNames}
          text={item.title}
          icolor={item.color}
        />
      </li>
    );
  };
  const handleClick = () => {
    const list = document.querySelector(`.${styles.iconContainer__list}`);
    setActive(!active);
    list?.classList.toggle(styles.active);
  };

  return (
    <div className={styles.iconContainer}>
      <div className={styles.iconContainer__title} onClick={handleClick}>
        <IconText
          icon={active ? "arrow-down-bold" : "arrow-right-bold"}
          text="Personal Info"
        />
      </div>
      <ul className={styles.iconContainer__list}>
        {dataItem
          .filter((item) => item.data)
          .map((item) => {
            return renderList(item);
          })}
        {dataItem
          .filter((item) => !item.data)
          .map((item) => {
            return renderListSingle(item);
          })}
      </ul>
    </div>
  );
};

export default IconContainer;
