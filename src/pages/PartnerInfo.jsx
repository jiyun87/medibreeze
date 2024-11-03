import React, { useState } from 'react';
import Title from '../components/Title';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import PrevButton from './../components/PrevButton';
import { mediContentList } from '../data/common';
import { initialPartnerInfo } from '../data/initialState';
import Input from '../components/Input';

const PartnerInfo = ({handlePartnerInfo}) => {
  // logic
  const history = useNavigate()

  const [partnerInfo, setPartnerInfo] = useState(initialPartnerInfo)

  const handleClick = () => {
    history('/chat');
    handlePartnerInfo(partnerInfo);
  };


const handleInfoContent = (label, value) => {
  // console.log("label", label);
  // console.log("value", value);
  const resultData = {...partnerInfo, [label]: value}
  setPartnerInfo(resultData)
  // console.log("resultData", resultData);
};

// useEffect ( () => {
//  console.log('partnerInfo', partnerInfo);
// }, [partnerInfo]) 

  // view
  return (
    <div className="w-full h-full px-6 pt-10 break-keep overflow-auto">
      <i className="w-168 h-168 rounded-full bg-medi-green fixed -z-10 -left-60 -top-104"></i>
      {/* START:뒤로가기 버튼 */}
      <PrevButton />
      {/* END:뒤로가기 버튼 */}
      <div className="h-full flex flex-col">
        {/* START:타이틀 영역*/}
        <Title mainTitile={"사용자님의 건강고민과 현재 복용 중인 약을 알려주세요"} />
        {/* START:info 영역 */}
        {/* END:타이틀 영역*/}
        <form className="pt-20">
          {/* START:input 영역 */}
          <div>
            {mediContentList.map ((mediContent) => (
              <Input 
                key = {mediContent.id}
                label={mediContent.label}
                inputType={mediContent.inputType} 
                text={mediContent.text}  
                placeholder={mediContent.placeholder}
                onChange={handleInfoContent}
              />
            ))}
          </div>
          {/* END:input 영역 */}
        </form>
        {/* END:info 영역 */}

        {/* START:Button 영역 */}
        <Button 
          text = {'상담 시작'} 
          color = {"bg-medi-green"} 
          onClick={handleClick} 
        />
        {/* END:Button 영역 */}
      </div>
    </div>
  );
};

export default PartnerInfo;
