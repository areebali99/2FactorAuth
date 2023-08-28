import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Space, Input, Button } from 'antd';

function AddCodePage({ addCode }) {
  const navigate = useNavigate();
  const [codeName, setCodeName] = useState('');

  const handleAddCode = () => {
    const newCode = {
      id: Date.now(), 
      name: codeName,
      countdown: 60,
      code: generateRandomNumber(),
    };
    addCode(newCode);
    navigate('/');
  };

  const generateRandomNumber = () => {
    return Math.floor(100000 + Math.random() * 900000);
  };

  return (
    <div className="center-screen">
      <Space direction="vertical" size={16}>
        <Card title="Add Code" style={{ width: 300 }}>
          <h1>Add Code Page</h1>
          <Input
            type="text"
            placeholder="Enter code name"
            value={codeName}
            onChange={(e) => setCodeName(e.target.value)}
          />
          <Button
            type="primary"
            className="btn-addCode"
            onClick={handleAddCode}
          >
            
            Add Code
          </Button>
        </Card>
      </Space>
    </div>
  );
}

export default AddCodePage;
