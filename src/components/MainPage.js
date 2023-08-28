import React, { useState } from 'react';
import CodeItem from './CodeItem';
import AddCodePage from './AddCodePage';

function MainPage() {
  const [codes, setCodes] = useState([]);

  const addCode = (newCode) => {
    setCodes((prevCodes) => [...prevCodes, newCode]);
  };



  return (
    <div>
      {codes.map((code) => (
        <CodeItem key={code.id} code={code}  />
      ))}
      <AddCodePage addCode={addCode} />
    </div>
  );
}

export default MainPage;
