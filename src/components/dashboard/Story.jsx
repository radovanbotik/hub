import React from "react";

const Story = () => {
  const image = "https://www.yourtechstory.com/wp-content/uploads/2019/08/voicemail.png";
  return (
    <div className="flex space-x-4 py-4">
      <div className="w-20 h-20 shrink-0">
        {image ? (
          <img src={image} alt="" className="w-full h-full" />
        ) : (
          <div className="w-full h-full bg-pink-400">hello</div>
        )}
      </div>
      <div className="overflow-hidden">
        <h4 className="font-semibold truncate">Lorem ipsum dolor, sit amet </h4>
        <span className="text-xs">10 days ago</span>
      </div>
    </div>
  );
};

export default Story;
