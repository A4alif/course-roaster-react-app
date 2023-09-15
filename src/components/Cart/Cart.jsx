const Cart = () => {
  return (
    <>
      <div>
        <div className="card  bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Credit Hour Remaining 7 hr</h2>
            <div className="divider"></div> 
            <h3 className="font-bold text-xl">Course Name</h3>
            <ol>
                <li>Introduction to Python</li>
            </ol>
            <div className="divider mt=0 mb-0"></div> 
           <h3 className="text-base font-semibold">Total Credit Hour: 12</h3>
           <div className="divider mt=0 mb-0"></div> 
           <h3 className="text-base font-bold">Total Price: 12000</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;