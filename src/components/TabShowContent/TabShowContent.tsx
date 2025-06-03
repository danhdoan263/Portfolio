import { useEffect, useState, useCallback, useMemo } from "react";
import styles from "./styles.module.scss";
import type { DataMockup } from "@/mock/Data";
import Tab from "../Tab/Tab";

type TabShowContentProps = {
  dataShow: DataMockup | null;
};

// Tạo unique key cho mỗi tab để tránh conflict
const createTabKey = (item: DataMockup): string => {
  return `${item.id}-${item.title}-${(item.content || '').substring(0, 10)}`;
};

const TabShowContent = ({ dataShow }: TabShowContentProps) => {
  const [dataContent, setDataContent] = useState<DataMockup[]>([]);
  const [dataShowContent, setDataShowContent] = useState<string>("");
  const [activeTabKey, setActiveTabKey] = useState<string | null>(null);

  // Memoized handlers for performance
  const handleAddTab = useCallback((newData: DataMockup) => {
    const newTabKey = createTabKey(newData);
    
    setDataContent((prev) => {
      // Check duplicate dựa trên unique key
      const exists = prev.some(
        (existingItem) => createTabKey(existingItem) === newTabKey
      );
      
      if (exists) {
        // Nếu tab đã tồn tại, chỉ cần active nó
        setActiveTabKey(newTabKey);
        setDataShowContent(newData.content || "");
        return prev;
      }
      
      // Thêm tab mới và active nó
      setActiveTabKey(newTabKey);
      setDataShowContent(newData.content || "");
      return [...prev, newData];
    });
  }, []);

  const handleRemoveTab = useCallback((targetItem: DataMockup) => {
    const targetKey = createTabKey(targetItem);
    
    setDataContent((prev) => {
      // Filter theo unique key
      const newContent = prev.filter((item) => createTabKey(item) !== targetKey);
      
      // Nếu tab đang active bị remove
      if (activeTabKey === targetKey) {
        if (newContent.length > 0) {
          // Chuyển sang tab đầu tiên còn lại
          const firstTab = newContent[0];
          const firstTabKey = createTabKey(firstTab);
          setActiveTabKey(firstTabKey);
          setDataShowContent(firstTab.content || "");
        } else {
          // Không còn tab nào, clear tất cả
          setActiveTabKey(null);
          setDataShowContent("");
        }
      }
      
      return newContent;
    });
  }, [activeTabKey]);

  const handleTabClick = useCallback((item: DataMockup) => {
    const tabKey = createTabKey(item);
    setActiveTabKey(tabKey);
    setDataShowContent(item.content || "");
  }, []);

  // Effect for adding new data
  useEffect(() => {
    if (dataShow) {
      handleAddTab(dataShow);
    }
  }, [dataShow, handleAddTab]);

  // Memoized tab components
  const tabComponents = useMemo(
    () =>
      dataContent.map((item) => {
        const tabKey = createTabKey(item);
        return (
          <Tab
            title={item.title}
            key={tabKey}
            onClose={() => handleRemoveTab(item)}
            onClick={() => handleTabClick(item)}
            active={tabKey === activeTabKey}
          />
        );
      }),
    [dataContent, handleRemoveTab, handleTabClick, activeTabKey]
  );

  // Memoized content display
  const contentDisplay = useMemo(
    () => dataShowContent || "No content",
    [dataShowContent]
  );

  return (
    <div className={styles.tabShowContent}>
      <div className={styles.tabShowContent__header}>{tabComponents}</div>
      <div className={styles.tabShowContent__content}>
        <p>{contentDisplay}</p>
      </div>
    </div>
  );
};

export default TabShowContent;
