import NameBox from "../../components/NameBox/NameBox";

import { useState } from "react";

import { Header } from "../../components/Header/Header";
import "./SketchPage.css";

function SketchPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNameSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    <div className="bg-black font-pretendard">
      {!isSubmitted && <Header />}
      <div className="SketchPage">
        <NameBox isSubmitted={isSubmitted} onNameSubmit={handleNameSubmit} />
      </div>
    </div>
  );
}

export default SketchPage;
