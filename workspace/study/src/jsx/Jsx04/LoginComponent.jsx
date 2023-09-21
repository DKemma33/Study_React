import React from "react";

const LoginComponent = () => {
  const login = true;
  const name = undefined || "한동석";
  return (
    <div>
      <div>
        <h1>{name}님 환영합니다. 🎊</h1>
      </div>
    </div>
  );
};

export default LoginComponent;
