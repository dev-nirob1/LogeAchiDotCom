const CheckoutPage = () => {
  return (
    <div className="section-padding">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-4">
          {/* customer information  */}
          <div className="border border-gray-100 rounded p-3">
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
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
