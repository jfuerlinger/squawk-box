import React, { useState, useEffect } from 'react';

function Message() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const  text  = await (await fetch(`http://localhost:7071/api/message?name=Joe`)).text();
      setData(text);
    })();
  });

  return <div>Message from server: {data}</div>;
}

export default Message;