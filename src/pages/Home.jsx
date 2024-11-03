import React from 'react';
import Title from '../components/Title';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const history = useNavigate();

  // logic
    const handleClick = () => {
      history("/user-info");
    };
  

  // view
  return (
    <div className="w-full h-full px-6 pt-10 break-keep overflow-auto">
      <i className="w-168 h-168 rounded-full bg-medi-green fixed -z-10 -left-60 -top-56"></i>
      <div className="fixed left-0 top-1/2 transform -translate-y-1/2 -z-10">
        <img src="./images/medi-BReeze.png" alt="hero" />
      </div>
      <div className="h-full flex flex-col">
        {/* START:타이틀 영역 */}
        <Title 
          mainTitile={"Medibreeze!"} 
          subTitle={
            "무엇을 물어 볼까요?"
          }
        />
        {/* END:타이틀 영역 */}
        {/* START:Button 영역 */}
        < Button 
          text={"시작"}
          color={""}
          onClick={handleClick}
           />
        {/* END:Button 영역 */}
      </div>
    </div>
  );
};

export default Home;
