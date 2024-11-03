import React, { useEffect, useState } from 'react';
import Title from '../components/Title';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import PrevButton from './../components/PrevButton';
import RadioGroup from '../components/RadioGroup';
import { genderList, infoContentList } from '../data/common';
import { initialUserInfo } from '../data/initialState';
import Input from '../components/Input';

const UserInfo = ({handleUserInfo}) => {
  // logic
  const history = useNavigate()

  const [userInfo, setUserInfo] = useState(initialUserInfo)

  const handleClick = () => {
    handleUserInfo(userInfo);
    history('/partner-info');
  };

const handleGenderData = (gender) => {
  console.log("gender", gender);
  const resultData = {...userInfo, gender}
  setUserInfo(resultData)
};

const handleInfoContent = (label, value) => {
  // console.log("label", label);
  // console.log("value", value);
  const resultData = {...userInfo, [label]: value}
  setUserInfo(resultData)
  // console.log("resultData", resultData);
};

useEffect ( () => {
  console.log('userInfo', userInfo);
}, [userInfo]) 

  // view
  return (
    <div className="w-full h-full px-6 pt-10 break-keep overflow-auto">
      <i className="w-168 h-168 rounded-full bg-medi-green fixed -z-10 -left-60 -top-104"></i>
      {/* START:뒤로가기 버튼 */}
      <PrevButton />
      {/* END:뒤로가기 버튼 */}
      <div className="h-full flex flex-col">
        {/* START:타이틀 영역*/}
        <Title mainTitile={"당신의 정보를 알려주세요"} />
        {/* START:info 영역 */}
        {/* END:타이틀 영역*/}
        <form className="pt-20">
          {/* START:성별 체크 */}
          <RadioGroup items={genderList} defaultCheckedData= {userInfo.gender} onChange={handleGenderData}/>
          {/* END:성별 체크 */}
          {/* START:input 영역 */}
          <div>
            {infoContentList.map ((infoContent) => (
              <Input 
                key = {infoContent.id}
                label={infoContent.label}
                inputType={infoContent.inputType} 
                text={infoContent.text}  
                placeholder={infoContent.placeholder}
                onChange={handleInfoContent}
              />
            ))}
          </div>
          {/* END:input 영역 */}
        </form>
        {/* END:info 영역 */}

        {/* START:Button 영역 */}
        <Button text = {'다음'} onClick={handleClick} />
        {/* END:Button 영역 */}
      </div>
    </div>
  );
};

export default UserInfo;
