const CustomerInfoForm = () => {
  return (
    <div className="shadow-sm rounded p-3 h-fit">
      <div>
        <h5 className="sub-title">Customer Information</h5>
        <p>Provide Information to deliver your order.</p>
      </div>
      <div className="py-4">
        <form>
          <label>
            Your Name
            <input
              className="my-2 w-full border-gray-200 rounded"
              type="text"
              placeholder="Your name"
            />
          </label>
          <label>
            Your Email
            <input
              className="my-2 w-full border-gray-200 rounded"
              type="email"
              placeholder="Your Email"
            />
          </label>
          <label>
            Your Number
            <input
              className="my-2 w-full border-gray-200 rounded"
              type="number"
              placeholder="Your Phone Number"
            />
          </label>
          <label>
            Your Full Address
            <input
              className="my-2 w-full border-gray-200 rounded"
              type="text"
              placeholder="Your Full Address"
            />
          </label>
          <label>
            Special message
            <textarea
              rows={3}
              className="my-2 w-full border-gray-200 rounded"
              placeholder="Any Special Instructions"
            />
          </label>
        </form>
      </div>
    </div>
  );
};

export default CustomerInfoForm;
