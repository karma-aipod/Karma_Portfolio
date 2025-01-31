import { useEffect, useState } from "react";

interface MorphingTextProps {
  texts: string[];
}

export const MorphingText: React.FC<MorphingTextProps> = ({ texts }) => {
  const [currentText, setCurrentText] = useState(texts[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
      setCurrentText(texts[index]);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, [index, texts]);

  return (
    <h1 className="text-4xl font-bold text-center">
      {currentText}
    </h1>
  );
};
