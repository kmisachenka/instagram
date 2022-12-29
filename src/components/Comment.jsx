import React from 'react';

const comment = ({ nickName, text }) => {
  return (
    <div>
      <span className="mt-2 mr-2 text-sm font-bold leading-[18px]">
        {nickName}
      </span>
      <span className="mr-2 truncate">{text}</span>
    </div>
  );
};
export default comment;
