
import ProductSuggetion from "../Components/Section/ProductSuggetion";
import BreadCrumb from "../../../Components/Widgets/BreadCrumb";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
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
                {/* <Button></Button> */}
                <button className="px-4 py-2 bg-neutral-900 rounded-sm text-white font-medium">
                  Add To Cart
                </button>
              </div>

              {/* description  */}
              <Accordion
                type="single"
                collapsible
                className="w-full"
                defaultValue="item-1"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger>Product Information</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                      Our flagship product combines cutting-edge technology with
                      sleek design. Built with premium materials, it offers
                      unparalleled performance and reliability.
                    </p>
                    <p>
                      Key features include advanced processing capabilities, and
                      an intuitive user interface designed for both beginners
                      and experts.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Shipping Details</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                      We offer worldwide shipping through trusted courier
                      partners. Standard delivery takes 3-5 business days, while
                      express shipping ensures delivery within 1-2 business
                      days.
                    </p>
                    <p>
                      All orders are carefully packaged and fully insured. Track
                      your shipment in real-time through our dedicated tracking
                      portal.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Return Policy</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                      We stand behind our products with a comprehensive 30-day
                      return policy. If you&apos;re not completely satisfied,
                      simply return the item in its original condition.
                    </p>
                    <p>
                      Our hassle-free return process includes free return
                      shipping and full refunds processed within 48 hours of
                      receiving the returned item.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
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
