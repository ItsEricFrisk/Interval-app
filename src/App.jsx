import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Loader from "./pages/Loader/Loader";
import MainPage from "./pages/MainPage/MainPage";
import ToggleBtn from "./components/toggleBtn/ToggleBtn";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Show loadingPage for 5 sec
  useEffect(() => {
    const loadingTime = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(loadingTime);
  }, []);

  return (
    <div>
      <AnimatePresence>
        {isLoading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.75 }}
          >
            <Loader />
          </motion.div>
        ) : (
          <motion.div>
            <ToggleBtn />
            <MainPage />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
