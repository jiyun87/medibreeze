import React, { useCallback, useEffect, useState } from 'react';
import PrevButton from '../components/PrevButton';
import MessageBox from '../components/MessageBox';

const Chat = ({ userInfo, partnerInfo }) => {
  // logic
    const endpoint = process.env.REACT_APP_SERVER_ADDRESS;  
    const [value, setValue] = useState('')
    const [messages, setMessages] = useState([])

    const [infoMessage, setInfoMessage] = useState([]) ;

    // console.log("🚀~endpoint", endpoint);

    const handleSubmit = (event) => {
      event.preventDefault();
      // console.log("value", value);
    
      const result = {
      role: 'user',
      content: value,
    };

    // const assistantResult = {
    //   role: 'assistnat',
    //   content: '안녕'
    // }

   // const assistantResult = {
   //    role: 'assistant',
   //   content: '저는 인공지능의사 입니다'
   //}

    setMessages((prev) =>[...prev, result]);
    sendMessage(result);
    setValue("");
    // setMessages((prev) =>[...prev, result, assistantResult])
  };

  const sendMessage = async(userMessage) => {
    try {
      const response = await fetch(`${endpoint}/message`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          userMessage,
          messages:[...infoMessage, ...messages]
        }),
      });

      const result = await response.json()
      setMessages((prev) => [...prev, result.data])
      console.log("🚀~result:", result);
    } catch(error) {
      console.error(error);
    }
  };

  const sendInfo = useCallback(async() => {
    // console.log("userInfo", userInfo);
    try {
      const response = await fetch(`${endpoint}/info`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({userInfo, partnerInfo}),
    });

    const result = await response.json();
    // console.log("🚀~result:", result);
    setInfoMessage(result.data)
    } catch(error) {
      console.error(error);
    }
  },[endpoint, partnerInfo, userInfo])

  useEffect(() => {
    sendInfo();
  }, [sendInfo]);

  // view
  return (
    <div className="w-full h-full px-6 pt-10 break-keep overflow-auto bg-dat">
      {/* START:뒤로가기 버튼 */}
      <PrevButton />
      {/* END:뒤로가기 버튼 */}
      <div className="h-full flex flex-col">
        {/* START:헤더 영역 */}
        <div className="-mx-6 -mt-10 py-7 bg-date-blue-600">
          <span className="block text-xl text-center text-white">
            {partnerInfo.name}
          </span>
        </div>
        {/* END:헤더 영역 */}
        {/* START:채팅 영역 */}
        <div className="overflow-auto">
        <MessageBox messages = {messages} partnerInfo ={partnerInfo} />
        </div>
        {/* END:채팅 영역 */}
        {/* START:메시지 입력 영역 */}
        <div className="mt-auto flex py-5 -mx-2 border-t border-gray-100">
          <form id = "sendForm" className="w-full px-2 h-full" onSubmit={handleSubmit}>
            <input
              className="w-full text-sm px-3 py-2 h-full block rounded-xl bg-gray-100 focus:"
              type="text"
              value={value}
              onChange={(event) => setValue(event.target.value)}
            />
          </form>
          <button
            type="submit"
            form="sendForm" 
            className="w-10 min-w-10 h-10 inline-block rounded-full bg-date-blue-600 text-none px-2 bg-[url('../public/images/send.svg')] bg-no-repeat bg-center"
          >
            보내기
          </button>
        </div>
        {/* END:메시지 입력 영역 */}
      </div>
    </div>
  );
};

export default Chat;
