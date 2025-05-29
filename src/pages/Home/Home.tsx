import styles from "./styles.module.scss";
import TypingAnimation from "@components/TypingAnimation/TypingAnimation";
import { useState } from "react";

const HomePage = () => {
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [showSecondaryTitle, setShowSecondaryTitle] = useState(false);
  const [showFirstDescription, setShowFirstDescription] = useState(false);
  const [showGithubSection, setShowGithubSection] = useState(false);
  const [showGithubConst, setShowGithubConst] = useState(false);
  const [showGithubFunction, setShowGithubFunction] = useState(false);
  const [showGithubEquals, setShowGithubEquals] = useState(false);

  return (
    <div className={styles.home}>
      <div className={styles.home__body}>
        <div className={styles.home__body__head}>
          <div className={styles.home__body__head__subtitle}>
            <TypingAnimation
              text="Hi, I'm"
              speed={80}
              delay={500}
              onComplete={() => setShowSubtitle(true)}
              hideCursorWhenComplete={true}
            />
          </div>
          {showSubtitle && (
            <div className={styles.home__body__head__title}>
              <TypingAnimation
                text="Danh Doan"
                speed={120}
                delay={300}
                onComplete={() => setShowTitle(true)}
                hideCursorWhenComplete={true}
              />
            </div>
          )}
          {showTitle && (
            <div className={styles.home__body__head__secondaryTitle}>
              <TypingAnimation
                text="Front-end developer"
                speed={90}
                delay={400}
                onComplete={() => setShowSecondaryTitle(true)}
                hideCursorWhenComplete={true}
              />
            </div>
          )}
        </div>
        {showSecondaryTitle && (
          <div className={styles.home__body__bot}>
            <div className={styles.home__body__bot__description}>
              <TypingAnimation
                text="// Wellcome to my portfolio"
                speed={60}
                delay={600}
                onComplete={() => setShowFirstDescription(true)}
                hideCursorWhenComplete={true}
              />
            </div>
            {showFirstDescription && (
              <div className={styles.home__body__bot__description}>
                <TypingAnimation
                  text="// find my work on Github"
                  speed={60}
                  delay={300}
                  onComplete={() => setShowGithubSection(true)}
                  hideCursorWhenComplete={true}
                />
              </div>
            )}
            {showGithubSection && (
              <div className={styles.home__body__bot__github}>
                <div className={styles.home__body__bot__github__const}>
                  <TypingAnimation
                    text="const"
                    speed={80}
                    delay={400}
                    onComplete={() => setShowGithubConst(true)}
                    hideCursorWhenComplete={true}
                  />
                </div>
                {showGithubConst && (
                  <div className={styles.home__body__bot__github__function}>
                    <TypingAnimation
                      text="githubLink"
                      speed={80}
                      delay={200}
                      onComplete={() => setShowGithubFunction(true)}
                      hideCursorWhenComplete={true}
                    />
                  </div>
                )}
                {showGithubFunction && (
                  <TypingAnimation
                    text=" = "
                    speed={100}
                    delay={200}
                    onComplete={() => setShowGithubEquals(true)}
                    hideCursorWhenComplete={true}
                  />
                )}
                {showGithubEquals && (
                  <div className={styles.home__body__bot__github__link}>
                    <TypingAnimation
                      text='"https://github.com/danhdoan263"'
                      speed={50}
                      delay={200}
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
