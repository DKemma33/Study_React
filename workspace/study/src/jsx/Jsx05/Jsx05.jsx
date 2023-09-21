import React from "react";
import PassComponent from "./PassComponent";
import RejectComponent from "./RejectComponent";
import WinComponent from "./WinComponent";

const Jsx05 = () => {
  const adult = 19;
  const age = 22;
  const win = "당첨";
  const Even = age % 2 === 0 && <WinComponent win={win}/>;
  const pass = "입장 가능";
  const reject = "입장 불가";
  
  {/* <PassComponent pass={"입장 가능"}/> */}
  {/* <RejectComponent reject={"입장 "}/> */}

  return (
    <div>
      <div>
        {age >= adult ? <PassComponent pass={pass}/> : <RejectComponent reject={reject}/>}
        {Even}
      </div>
    </div>
  );
};

export default Jsx05;


// const Jsx05 = () => {
//   const age = 15;
//   const isChild = age < 20;
//   const isEven = age % 2 === 0;
//   // const errorComponent = (<div><h1>{error} 😫</h1></div>);
//   // const passComponent = (<div><h1>{pass} 😎</h1></div>);
//   // const winComponent = (<div><h2>{win} 🎊</h2></div>)
//   const enter = isChild ? <ErrorComponent /> : <PassComponent />;
//   const lucky = isEven && <WinComponent />
//   return (
//     <div>
//       {enter}
//       {lucky}
//     </div>
//   );
// };
