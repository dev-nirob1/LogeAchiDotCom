import {
  FaHeadset,
  FaShippingFast,
  FaTags,
  FaUndo,
} from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <div className="section-padding">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="why-choose-card text-gray-600 border border-gray-600 p-4 grid grid-cols-4 items-center">
            <FaShippingFast className="text-5xl" />
            <div className="col-span-3">
              <h5 className="sub-title">Fast Shipping</h5>
              <p className="mt-2">
                Receive your products in 2-3 business days.
              </p>
            </div>
          </div>

          <div className="why-choose-card text-gray-600 border border-gray-600 p-4 grid grid-cols-4 items-center">
            <FaTags className="text-5xl" />
            <div className="col-span-3">
              <h5 className="sub-title">Exclusive Deals</h5>
              <p className="mt-2">
                Members enjoy special discounts on every order.
              </p>
            </div>
          </div>

          <div className="why-choose-card text-gray-600 border border-gray-600 p-4 grid grid-cols-4 items-center">
            <FaUndo className="text-5xl" />
            <div className="col-span-3">
              <h5 className="sub-title">Hassle-Free Returns</h5>
              <p className="mt-2">
                Return your order within 7 days if you’re not satisfied.
              </p>
            </div>
          </div>

          <div className="why-choose-card text-gray-600 border border-gray-600 p-4 grid grid-cols-4 items-center">
            <FaHeadset className="text-5xl" />
            <div className="col-span-3">
              <h5 className="sub-title">24/7 Customer Care</h5>
              <p className="mt-2">
                Our team is available anytime to assist you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
