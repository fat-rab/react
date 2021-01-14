import React, { useState, useEffect, useRef } from "react";
export default function HookCount() {
  const maxTime = 10;
  const [countDownText, setCountDownText] = useState("获取验证码");
  const [timerNum, setTimerNum] = useState(maxTime);
  const [boolCountDown, setBoolCountDown] = useState(false);
  const refCountDown = useRef(null);
  const handleClick = () => {
    if (!boolCountDown) {
      setBoolCountDown(true);
    }
  };
  refCountDown.current = () => {
    if (timerNum > 0) {
      setTimerNum(timerNum - 1);
    } else {
      setTimerNum(maxTime);
      setBoolCountDown(false);
      setCountDownText("重新获取");
    }
  };
  useEffect(() => {
    if (boolCountDown) {
      const timer = setInterval(() => {
        refCountDown.current();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [boolCountDown]);
  return (
    <button onClick={handleClick}>
      {boolCountDown ? `${timerNum}s` : countDownText}
    </button>
  );
}
