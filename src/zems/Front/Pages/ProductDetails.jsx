import { FaAngleDown } from "react-icons/fa";
import ProductSuggetion from "../Components/Section/ProductSuggetion";
import BreadCrumb from "../../../Components/Widgets/BreadCrumb";

const ProductDetails = () => {
  return (
    <>
      <BreadCrumb routeName={"Product Details"} />
      <section className="">
        <div className="container mx-auto px-2">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="w-full-h-full">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1740711152088-88a009e877bb?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            {/* details content  */}
            <div className="space-y-2">
              <h3 className="text-2xl font-medium">Classic Cotton T-Shirt</h3>
              <h3 className="text-xl font-medium text-amber-500">
                Price: ৳ 1490
              </h3>
              {/* sizes  */}
              <div>
                {/* available sizes  */}
                <h5 className="sub-title mb-1">Size</h5>

                <div className="flex gap-4">
                  <div className="border border-gray-200 px-4 py-2 rounded-sm font-bold">
                    S
                  </div>
                  <div className="border border-gray-200 px-4 py-2 rounded-sm font-bold">
                    M
                  </div>
                  <div className="border border-gray-200 px-4 py-2 rounded-sm font-bold">
                    L
                  </div>
                  <div className="border border-gray-200 px-4 py-2 rounded-sm font-bold">
                    XL
                  </div>
                  <div className="border border-gray-200 px-4 py-2 rounded-sm font-bold">
                    XXL
                  </div>
                </div>
              </div>

              {/* quantity update  */}
              <div className="flex items-center gap-4 mt-8">
                <input
                  type="number"
                  className="max-w-20 border border-gray-200 rounded-sm"
                  placeholder="1"
                />
                <button className="px-4 py-2 bg-neutral-900 rounded-sm text-white font-medium">
                  Add To Cart
                </button>
              </div>

              {/* description  */}
              <div className="mt-6 space-y-4">
                <div className="accordion border rounded-sm border-gray-300">
                  <div className="accordion-title flex justify-between items-center p-4">
                    <h5 className="sub-title">Description</h5>
                    <FaAngleDown />
                  </div>
                  <p className="p-4">
                    The Chocolate Brown With Herringbone Pattern Shirt from Arjo
                    is the perfect choice for effortless summer style. Crafted
                    for comfort and breathability, this lightweight shirt keeps
                    you warn during cool days. With its relaxed fit and timeless
                    stripes, it’s ideal for both casual outings and laid-back
                    occasions. If you're looking for premium Full-sleeve shirts
                    for men in BD, this versatile piece is a must-have. Stay
                    stylish and comfortable all season long with Arjo. GSM
                    220-240.
                  </p>
                </div>
                <div className="accordion border rounded-sm border-gray-300">
                  <div className="accordion-title flex justify-between items-center p-4">
                    <h5 className="sub-title">Description</h5>
                    <FaAngleDown />
                  </div>
                </div>
                <div className="accordion border rounded-sm border-gray-300">
                  <div className="accordion-title flex justify-between items-center p-4">
                    <h5 className="sub-title">Description</h5>
                    <FaAngleDown />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* suggested product  */}
      </section>
      <ProductSuggetion />
    </>
  );
};

export default ProductDetails;
