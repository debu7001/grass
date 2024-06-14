import Image from "next/image";
import CheckAuth from "./component/checkAuth";

export default function Home() {
  return (
    <>
     <div style={{height:'100vh'}}>
     <CheckAuth/>
     </div>
    </>
  );
}
