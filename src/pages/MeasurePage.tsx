import { useState, useEffect } from "react";
import Button from "../components/Button";
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

  const [round, setRound] = useState(1) // 라운드 상태
  const [visibleNumber, setVisibleNumber] = useState<number | null>(null);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (!isRunning || round > 10) return; // 10 라운드 이후엔 종료

    const intervalId = setInterval(() => {
      setVisibleNumber(Math.floor(Math.random() * 6) + 1); // 1~6 중 랜덤 숫자
    }, 1000); // 1초마다 변경

    // 10초 후에 interval을 멈추기
    const timer = setTimeout(() => {
      clearInterval(intervalId);
      setVisibleNumber(null); // 모든 숫자 숨기기
      setRound((prevRound) => prevRound + 1); // 다음 라운드로 이동
    }, 10000); // 10초 후 정지

    // cleanup 함수: 컴포넌트 언마운트 시 정리
    return () => {
      clearInterval(intervalId);
      clearTimeout(timer);
    };
  }, [round, isRunning]);

  const handleStop = () => {
    setIsRunning(false);
    setVisibleNumber(null);
  };

  return (
    <motion.div
      className="Measure_Container"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageVariants}
    >
      <div className="MeasurePage_Container">
        <div>
          <h1 className="round-title">Round {round}/10</h1>
        </div>
        <div className="MeasurePage_Content">
          {Array.from({ length: 6 }).map((_, index) => (
            <motion.div
              key={index}
              className={`MeasurePage_Section section-${index + 1}`}
              variants={sectionVariants}
              initial="hidden"
              animate={visibleNumber === index + 1 ? "visible" : "hidden"} // 랜덤 숫자일 때만 보이게
            >
              <div className="section-label"></div>
            </motion.div>
          ))}
        </div>

        <div className="MeasurePage_Btn">
          <Button onClick={handleStop}>STOP</Button>
        </div>
      </div>
    </motion.div>
  );
};

export default MeasurePage;
