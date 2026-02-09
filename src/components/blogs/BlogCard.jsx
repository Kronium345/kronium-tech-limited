import React from 'react';

const BlogCard = ({ img }) => {
  return (
    <>
      <div className="p-4 shadow-lg">
        <div className="overflow-hidden">
          <img
            src={img}
            alt="Blog 1"
            className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
          />
        </div>
        <div className="flex justify-between pt-2 text-slate-600">
          <p>April 22, 2023</p>
          <p className="line-clamp-1">By John Doe</p>
        </div>
        <div>
          <h1 className="line-clamp-1 font-bold">How to grow your business.</h1>
          <h1 className="line-clamp-1">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. At,
            officia..
          </h1>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
