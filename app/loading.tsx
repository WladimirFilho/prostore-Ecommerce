import loader from "@/assets/loader.gif";

import Image from "next/image";

const LoadingPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vh",
      }}
    >
      <Image alt="Loading..." src={loader} height={150} width={150} />
    </div>
  );
};

export default LoadingPage;
