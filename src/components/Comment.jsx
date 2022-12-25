import React from "react";

const comment = ({nickName, text}) => {
    return (
        <div>
            <span class='text-[14px] font-medium mr-5'>{nickName}</span>
            <span>{text}</span>
        </div>
    )
}
export default comment