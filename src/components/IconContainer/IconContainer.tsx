/**
 * 1. render tab collection
 * 2. render tab folder
 * 3. render tab file
 * 4. render tab single
 */

import Icon from "@/icomoon/Icon";
import type { IconNames } from "@/icomoon/Icon";
import type { IconContainerProps } from "../type";
import styles from './styles.module.scss'
import { useState } from "react";
import type { DataMockup } from "@/mock/Data";
import IconText from "../IconText/IconText";

// Component đệ quy để render từng item trong tree
const TreeItem = ({ item, level = 0, setDataShow }: { 
  item: DataMockup; 
  level?: number; 
  setDataShow?: (data: DataMockup) => void;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasChildren = item.data && item.data.length > 0;
  const isFile = item.content && !hasChildren;

  const handleToggle = () => {
    if (hasChildren) {
      setIsExpanded(!isExpanded);
    } else if (isFile && setDataShow) {
      // Nếu là file, hiển thị content
      setDataShow(item);
    }
  };

  return (
    <div className={styles.treeItem} style={{ marginLeft: `${level * 20}px` }}>
      {/* Render item hiện tại */}
      <div className={styles.treeItemContent} onClick={handleToggle}>
        {hasChildren && (
          <Icon 
            icon={isExpanded ? "arrow-down-bold" : "arrow-right-bold"} 
            size={10} 
          />
        )}
        <IconText 
          text={item.title} 
          icon={item.icon as IconNames} 
          icolor={item.color} 
        />
      </div>

      {/* Render các item con nếu có và đang được expand */}
      {hasChildren && isExpanded && (
        <div className={styles.treeChildren}>
          {item.data?.map((childItem) => (
            <TreeItem 
              key={childItem.id} 
              item={childItem} 
              level={level + 1}
              setDataShow={setDataShow}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const IconContainer = ({ data, setDataShow }: IconContainerProps) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className={styles.iconContainer}>
      <div className={styles.iconContainer__collection} onClick={handleClick}>
        <Icon icon={active ? "arrow-down-bold" : "arrow-right-bold"} size={16} />
        <div className={styles.iconContainer__title}>{data.title}</div>
      </div>

      {/* Render toàn bộ cây đệ quy */}
      {active && data.data && (
        <div style={{ paddingLeft: '10px' }}>
          {data.data.map((item) => (
            <TreeItem 
              key={item.id} 
              item={item} 
              level={0}
              setDataShow={setDataShow}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default IconContainer;
