import { BsCurrencyDollar, BsBook } from "react-icons/bs";
import Cart from "../Cart/Cart";
import { useEffect, useState } from "react";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <>
      <main>
        <div className="container mx-auto px-4 pb-16">
          {/* flex */}
          <div className="flex flex-col  md:flex-row md:space-x-6 space-y-6 md:space-y-0">
            {/* left side */}
            <div className=" w-full md:w-3/4">
              {/* grid container */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* single card */}
                {courses.map((course) => (
                  <div
                    key={course.id}
                    className="card card-compact  bg-base-100 shadow-xl"
                  >
                    <figure className="pt-4">
                      <img src={course.img} alt="Shoes" />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title text-lg font-semibold">
                        {course.title}
                      </h2>
                      <p className="text-sm font-normal leading-6">
                        {course.desc}
                      </p>
                      <div className="flex justify-between text-base text-gray-600 py-4">
                        <div className="flex items-center space-x-3">
                          <BsCurrencyDollar />
                          <span>Price: {course.price}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <BsBook />
                          <p>Credit: {course.credit}hr</p>
                        </div>
                      </div>
                      <div className="card-actions  ">
                        <button className="btn btn-info w-full text-white">
                          Select
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                {/* <div className="card card-compact  bg-base-100 shadow-xl">
                  <figure className="pt-4">
                    <img src={python} alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title text-lg font-semibold">
                      Introduction to OOP Python
                    </h2>
                    <p className="text-sm font-normal leading-6">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                    <div className="flex justify-between text-base text-gray-600 py-4">
                      <div className="flex items-center space-x-3">
                        <BsCurrencyDollar />
                        <span>Price: 15000</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <BsBook />
                        <p>Credit: 1hr</p>
                      </div>
                    </div>
                    <div className="card-actions  ">
                      <button className="btn btn-primary w-full">Select</button>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            {/* right side */}
            <div className="w-full md:w-1/4">
              <Cart />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Courses;
