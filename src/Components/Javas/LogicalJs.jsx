import React from "react";

const LogicalJs = () => {
  //     function sum(a,b){
  //         return a+b
  //     }
  //     console.log(sum(2,3))

  // function a(a,b){
  //     if(a <= 0){
  //         throw new Error("Number should be a positive only")
  //     }
  //     const areaOfRectangle = a * b
  //     console.log(areaOfRectangle)
  // }
  // a(-2,3)
  function evenOrOdd(a) {
    // let a = 5;
    if (a % 2 == 0) {
      console.log("a is even");
    } else {
      console.log("a is odd");
    }
    console.log(evenOrOdd(5))
    // evenOrOdd(5);
  }
  return <div></div>;
};

export default LogicalJs;
