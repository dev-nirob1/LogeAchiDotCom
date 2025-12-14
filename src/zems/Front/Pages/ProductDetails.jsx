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
              <details
                class="collapse bg-base-100 border border-base-300"
                name="my-accordion-det-1"
                open
              >
                <summary class="collapse-title font-semibold">
                  How do I create an account?
                </summary>
                <div class="collapse-content text-sm">
                  Click the "Sign Up" button in the top right corner and follow
                  the registration process.
                </div>
              </details>
              <details
                class="collapse bg-base-100 border border-base-300"
                name="my-accordion-det-1"
              >
                <summary class="collapse-title font-semibold">
                  I forgot my password. What should I do?
                </summary>
                <div class="collapse-content text-sm">
                  Click on "Forgot Password" on the login page and follow the
                  instructions sent to your email.
                </div>
              </details>
              <details
                class="collapse bg-base-100 border border-base-300"
                name="my-accordion-det-1"
              >
                <summary class="collapse-title font-semibold">
                  How do I update my profile information?
                </summary>
                <div class="collapse-content text-sm">
                  Go to "My Account" settings and select "Edit Profile" to make
                  changes.
                </div>
              </details>
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
