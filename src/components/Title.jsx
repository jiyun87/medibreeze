import React from 'react';

const Title = ({mainTitile, subTitle}) => {
  return (
    <div className="px-2 pt-6">
    <h1 className="text-4.5xl font-black text-white max-w-3/4">
      {/* 지윤닝! */}
      {mainTitile}
    </h1>
    {subTitle && (
        <span className="block text-sm mt-3 text-white break-keep pr-7">
        {/*무엇을 물어 볼까요?*/}
        {subTitle}
        </span>
    )}
    </div>
  );
};

export default Title;