const Cart = ({selectCourse, creditRemaining, totalCredit, totalPrice}) => {
  return (
    <>
      <div>
        <div className="card  bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Credit Hour Remaining {creditRemaining} hr</h2>
            <div className="divider"></div> 
            <h3 className="font-bold text-xl">Course Name</h3>
            <ol>
                {selectCourse.map((course, index) => (
                  <li key={course.id} className="py-1">{index+1}. {course.title}</li>
                ))}
            </ol>
            <div className="divider mt=0 mb-0"></div> 
           <h3 className="text-base font-semibold">Total Credit Hour: {totalCredit}</h3>
           <div className="divider mt=0 mb-0"></div> 
           <h3 className="text-base font-bold">Total Price: {totalPrice}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
