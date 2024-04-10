import React, { useEffect, useState } from "react";
// import Lottie from "react-lottie";
import * as animationData from "constants/lottie/cloverfield-loading.json";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("react-lottie"), {
  ssr: false,
});

export default function LottieCloverfield({
  height = 175,
  width = 135,
}: {
  height?: number;
  width?: number;
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      {isLoaded && (
        <Lottie options={defaultOptions} height={height} width={width} />
      )}
    </div>
  );
}
