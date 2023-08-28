import React, { useState, useEffect } from 'react';
import { Card, Space, Input, Form } from 'antd';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

function CodeItem({ code, index, reorderCodes }) {
  const [countdown, setCountdown] = useState(60);
  const [displayedCode, setDisplayedCode] = useState(code.code);

  useEffect(() => {
    const interval = setInterval(() => {
      if (countdown > 0) {
        setCountdown((prevCountdown) => prevCountdown - 1);
      } else {
        const newCodeValue = generateRandomNumber();
        setDisplayedCode(newCodeValue);
        setCountdown(60); // Reset countdown to restart the animation
      }
    }, 920); // Reduce interval to 1 second if countdown > 0, otherwise 60 seconds
  
    return () => clearInterval(interval);
  }, [countdown, index, reorderCodes, code]);
  
  
  const countdownPercentage = (countdown / 60) * 100;
  const generateRandomNumber = () => {
    return Math.floor(100000 + Math.random() * 900000);
  };

  return (
    <div className="center-screen mt">
      <Space direction="vertical" size={16}>
        <Card title="Codes List" style={{ width: 300 }}>
          <Form.Item label="Code Name">
            <Input type="text" className="mt" value={code.name} />
          </Form.Item>
          <div className="countdown">
            <div
              className="countdown-animation"
              style={{
                transform: `rotate(${360 - (360 * countdownPercentage) / 100}deg)`,
              }}
            />
            <Form.Item label="60 Seconds Timer">
              <div className="timer-container">
                <CountdownCircleTimer
                  key={displayedCode}
                  onComplete={() => {
                    setCountdown(60); 
                    return [true, 60000]; 
                  }}
                  isPlaying
                  duration={60}
                  colors={['#A30000']}
                >
                  {({ remainingTime }) => (
                    <div className="timer">
                      <div className="value">{remainingTime}</div>
                      <div className="text">seconds</div>
                    </div>
                  )}
                </CountdownCircleTimer>
              </div>
            </Form.Item>
          </div>
          <Form.Item label="Code Number">
            <Input type="text" className="mt" value={displayedCode} />
          </Form.Item>
        </Card>
      </Space>
    </div>
  );
}

export default CodeItem;
