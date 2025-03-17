import { useState } from "react";
import { motion } from "framer-motion";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(3);
  const [countVisible, setCountVisible] = useState(false);

  const handleStart = () => {
    setCountVisible(true);
    let counter = 3;
    const countdownInterval = setInterval(() => {
      setCountdown(counter);
      counter -= 1;
      console.log(counter)
      if (counter < 0) {
        clearInterval(countdownInterval);
        setCountVisible(false);
        navigate("/Measure");
      }
    }, 1000);
  };

  const pageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: 50, transition: { duration: 0.5 } }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  const wordVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        repeat: Infinity,
        repeatType: "loop" as "loop"
      }
    }
  };

  return (
    <motion.div
      className="MainPage_Container"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageVariants}
    >
      <div className="MainPage_Container">
        <div className="MainPage_Top_Content">
          <motion.div className="MainPage_Logo" variants={wordVariants} initial="hidden" animate="visible">
            {"Movement".split("").map((char, index) => (
              <motion.span key={index} variants={letterVariants}>
                {char}
              </motion.span>
            ))}
          </motion.div>

          <motion.div className="MainPage_Logo" variants={wordVariants} initial="hidden" animate="visible">
            {"Squash".split("").map((char, index) => (
              <motion.span key={index} variants={letterVariants}>
                {char}
              </motion.span>
            ))}
          </motion.div>
        </div>

        <div className="MainPage_Btm_content">
          <Button onClick={handleStart}>START</Button>
          {countVisible && countdown > 0 && (
            <div className="MainPage_Countdown">
              {countdown}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default MainPage;