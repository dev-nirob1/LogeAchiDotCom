import ProductSuggetion from "../Components/Section/ProductSuggetion";
import BreadCrumb from "../../../Components/Widgets/BreadCrumb";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import ProductReviews from "../Components/Section/ProductReviewSection";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
  const [productDetails, setProductDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const productId = parseInt(id);
  console.log(productId);
  useEffect(() => {
    const getSingleProduct = async () => {
      const res = await axios.get(`https://dummyjson.com/products/${productId}`);
      setProductDetails(res.data);
      
      setIsLoading(false)
    };
    getSingleProduct();
  }, [productId]);
  console.log(productDetails);

  if(isLoading){
    return <h1>Loading...</h1>
  }
  return (
    <>
      <BreadCrumb routeName={"Product Details"} />
      <section className="">
        <div className="my-container">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="w-full h-full">
              <img
                className="w-full h-full object-cover"
                src={productDetails.images[0]}
                alt=""
              />

            </div>
            {/* details content  */}
            <div className="space-y-2">
              <h3 className="text-2xl font-medium">{productDetails.title}</h3>
              <h3 className="text-xl font-medium text-primary">
                Price: $ {productDetails.price}
              </h3>

              {/* sizes  */}
                {/* available sizes  */}
              {/* <div>
                <h5 className="sub-title mb-1">Size</h5>
                <ToggleGroup type="single" className="gap-2">
                  <ToggleGroupItem className="border border-accent" value="m">
                    M
                  </ToggleGroupItem>
                  <ToggleGroupItem className="border border-accent" value="l">
                    L
                  </ToggleGroupItem>
                  <ToggleGroupItem className="border border-accent" value="xl">
                    XL
                  </ToggleGroupItem>
                  <ToggleGroupItem className="border border-accent" value="xxl">
                    XXL
                  </ToggleGroupItem>
                </ToggleGroup>
              </div> */}

              {/* quantity update  */}
              <div className="flex items-center gap-4 mt-8">
                <input
                  type="number"
                  className="max-w-20 border border-gray-200 rounded-sm"
                  placeholder="1"
                />
                {/* <Button></Button> */}
                <Button className="rounded-sm text-white">Add To Cart</Button>
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
                  <AccordionContent className="flex flex-col text-balance">
                    <p>
                      {productDetails.description}
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Shipping Details</AccordionTrigger>
                  <AccordionContent className="flex flex-col text-balance">
                    <p>
                     {productDetails.shippingInformation}
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Return Policy</AccordionTrigger>
                  <AccordionContent className="flex flex-col text-balance">
                    <p>
                     {productDetails.returnPolicy}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>

        {/* suggested product  */}
      </section>
      <ProductReviews rating={productDetails.rating} reviews={productDetails.reviews} />
      <ProductSuggetion />
    </>
  );
};

export default ProductDetails;
