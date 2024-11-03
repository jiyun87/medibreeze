import React, { useEffect, useRef } from 'react'
// import PartnerInfo from './../pages/PartnerInfo';

const MessageBox = ({messages, partnerInfo }) => {
   // logic
   const ref = useRef(null)
   useEffect(() => {
    // TODO : 자동스크롤
    if(!messages.length) return
    ref.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
    })
    console.log('ref',ref.current);
   }, [messages.length]);

   // view  
  return (
    <>
    {messages.map((message, index) => (
        <div key={index}>
            {message.role === 'user' ? (
                <div className="py-4 max-w-3/4 ml-auto text-right">
                <span className="inline-block px-4 py-3 text-sm rounded-xl text-left bg-date-blue-600 text-white rounded-tr-none">
                    {message.content}
                </span>
            </div>
            ) : (
                <div className="py-4 max-w-3/4 flex">
                <div className="min-w-12 w-12 h-12 bg-date-blue-500 rounded-full">
                    <img src={`./images/doctor.svg`} alt="인공지능 의사 캐릭터" />
                </div>
                    <div className="pl-3">
                        <span className="text-base font-medium">{partnerInfo.name}</span>
                        <div className="pt-3 pl-2">
                            <span className="inline-block px-4 py-3 text-sm rounded-xl text-left bg-date-gray-100 rounded-tl-none">
                                {message.content}
                            </span>
                        </div>
                    </div>
                </div>
            )} 
        </div>
    ))}          
    <div ref={ref}></div>    
    </>
  )
}

export default MessageBox