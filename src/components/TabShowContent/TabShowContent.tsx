import { useEffect, useState, useCallback, useMemo } from "react";
import styles from "./styles.module.scss";
import type { DataMockup } from "@/mock/Data";
import Tab from "../Tab/Tab";

type TabShowContentProps = {
  dataShow: DataMockup | null;
};

const TabShowContent = ({ dataShow }: TabShowContentProps) => {
  const [dataContent, setDataContent] = useState<DataMockup[]>([]);
  const [dataShowContent, setDataShowContent] = useState<string>("");

  // Memoized handlers for performance
  const handleAddTab = useCallback((newData: DataMockup) => {
    setDataContent((prev) => {
      const exists = prev.some(
        (existingItem) => existingItem.content === newData.content
      );
      return exists ? prev : [...prev, newData];
    });
  }, []);

  const handleRemoveTab = useCallback((targetId: number) => {
    setDataContent((prev) => {
      const currentIndex = prev.findIndex((p) => p.id === targetId);
      return prev.filter((_, index) => index !== currentIndex);
    });
  }, []);

  const handleTabClick = useCallback((content: string | undefined) => {
    setDataShowContent(content || "");
  }, []);

  // Effect for adding new data
  useEffect(() => {
    if (dataShow) {
      handleAddTab(dataShow);
    }
  }, [dataShow, handleAddTab]);

  // Effect for setting default content
  useEffect(() => {
    if (dataContent.length > 0) {
      setDataShowContent(dataContent[0].content || "");
    } else {
      setDataShowContent("");
    }
  }, [dataContent]);

  // Memoized tab components
  const tabComponents = useMemo(
    () =>
      dataContent.map((item) => (
        <Tab
          title={item.title}
          key={item.id} // Use unique ID instead of index
          onClose={() => handleRemoveTab(item.id)}
          onClick={() => handleTabClick(item.content)}
        />
      )),
    [dataContent, handleRemoveTab, handleTabClick]
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
        <div>{contentDisplay}</div>
      </div>
    </div>
  );
};

export default TabShowContent;
