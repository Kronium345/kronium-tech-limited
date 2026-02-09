import React from 'react';
import BlogCard from './BlogCard';
import blog1 from '../../assets/blog1.jpg';
import blog2 from '../../assets/blog2.jpg';
import blog3 from '../../assets/blog3.jpg';

const Blogs = () => {
  return (
    <>
      <section className="container mb-10 py-8">
        <h1 className="mb-8 border-l-8 py-2 pl-2 text-center text-3xl font-bold">
          Our Latest Blogs
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          <BlogCard img={blog1} />
          <BlogCard img={blog2} />
          <BlogCard img={blog3} />
        </div>
      </section>
    </>
  );
};

export default Blogs;
