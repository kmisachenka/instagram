import React from 'react';

const Сomment = ({ userName, commentText }) => {
  return (
    <div>
      <span className="mt-2 mr-2 text-sm font-bold leading-[18px]">
        {userName}
      </span>
      <span className="mr-2 truncate">{commentText}</span>
    </div>
  );
};
export default Сomment;
