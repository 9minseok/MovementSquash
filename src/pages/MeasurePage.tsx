import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const MeasurePage = () => {
  const pageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.5 } }
  };

  const sectionVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };

  const defaultColors = Array(6).fill("lightgray");
  const [colors, setColors] = useState(defaultColors);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // 랜덤 인덱스를 생성하여 해당 색상만 빨간색으로 바꿔주기
      setColors((prevColors) => {
        const newColors = [...prevColors];
        
        // 현재 빨간색인 섹션을 다시 gray로 되돌리기
        const redIndex = newColors.findIndex(color => color === "gray");
        if (redIndex !== -1) {
          newColors[redIndex] = "lightgray";
        }

        // 새로 빨간색으로 변경할 랜덤 인덱스를 선택
        const randomIndex = Math.floor(Math.random() * 6); 
        newColors[randomIndex] = "gray"; // 랜덤 색상은 회색으로

        return newColors;
      });
    }, 1000); // 1초마다 색상 변경

    // 10초 후에 interval을 멈추기
    const timer = setTimeout(() => {
      clearInterval(intervalId);
    }, 10000); // 10초 후에 interval 멈추기

    // cleanup 함수: 컴포넌트가 언마운트되거나 타이머 종료 시 정리
    return () => {
      clearInterval(intervalId);
      clearTimeout(timer);
    };
  }, []);

  return (
    <motion.div
      className="Measure_Container"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageVariants}
    >
      <div className="MeasurePage_Container">
        <div className="MeasurePage_Content">
          {Array.from({ length: 6 }).map((_, index) => (
            <motion.div
              key={index}
              className={`MeasurePage_Section section-${index + 1}`}
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              style={{ backgroundColor: colors[index] }}
            >
              <span className="section-label">{`Section ${index + 1}`}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default MeasurePage;
