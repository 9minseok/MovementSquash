import { motion } from "framer-motion";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const MenuPage = () => {
  const navigate = useNavigate();

  const pageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, x: 50, transition: { duration: 0.3 } }
  };

  return (
    <motion.div
      className="MenuPage_Container"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageVariants}
    >
      <div className="MenuPage_Container">
        <Button onClick={() => {navigate('/Measure')}}>VO2 MAX TEST</Button>
        <Button onClick={() => {navigate('/Measure')}}>LEVEL PRACTICE</Button>
        <Button onClick={() => {navigate('/Measure')}}>CUSTOM GHOSTING</Button>
      </div>
    </motion.div>
  );
};

export default MenuPage;