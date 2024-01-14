import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8OHx8TGFuZHNjYXBlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1682695794947-17061dc284dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8TGFuZHNjYXBlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TGFuZHNjYXBlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1511576661531-b34d7da5d0bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fExhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3DF",
  ];

  const rightClick = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };
  const leftClick = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };
  return (
    <>
      <div className="w-full h-screen flex items-center justify-between">
        <button
          onClick={rightClick}
          className="bg-white/40 px-10 py-6 text-2xl ml-10 text-gray-200  font-semibold shadow-xl inset-0 rounded-md"
        >
          <FaArrowLeft />
        </button>
        <div className="w-full h-screen absolute z-[-10] top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
        <img className="rounded w-full h-full object-center object-cover" src={images[currentIndex]} alt="carousel" />
        </div>
        <button
          onClick={leftClick}
          className="bg-white/40 px-10 py-6 text-2xl mr-10  text-gray-200 font-semibold shadow-xl inset-0 rounded-md"
        >
          <FaArrowRight />
        </button>
      </div>
    </>
  );
}

export default App;
