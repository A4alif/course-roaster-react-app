import { BsCurrencyDollar, BsBook } from "react-icons/bs";
import Cart from "../Cart/Cart";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [selectCourse, setSelectCourse] = useState([]);
  const [creditRemaining, setCreditRemaining] = useState(0);
  const [totalCredit, setTotalCredit] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const handleCourseAdd = (course) => {
    const isExist = selectCourse.find((item) => item.id === course.id);
    let credit = course.credit;
    let price = course.price;
    if (isExist) {
      Swal.fire({
        icon: "warning",
        title: "Course Already Added",
      });
    } else {
      selectCourse.forEach((item) => {
         credit = credit + item.credit;
         price = price + item.price;
      });
      setTotalCredit(credit)
      setTotalPrice(price)
      setSelectCourse([...selectCourse, course]);
    }
  };

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
                        <button
                          onClick={() => handleCourseAdd(course)}
                          className="btn btn-info w-full text-white"
                        >
                          Select
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* right side */}
            <div className="w-full md:w-1/4">
              <Cart
                selectCourse={selectCourse}
                creditRemaining={creditRemaining}
                totalCredit={totalCredit}
                totalPrice={totalPrice}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Courses;
