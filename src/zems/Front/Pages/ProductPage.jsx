import BreadCrumb from "../../../Components/Widgets/BreadCrumb";
import ProductCard from "../Components/Widget/ProductCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";

const ProductPage = () => {
  const allProducts = [
    {
      id: 1,
      name: "Classic Cotton T-Shirt",
      price: 29.99,
      category: "tshirt",
      image:
        "https://images.unsplash.com/photo-1740711152088-88a009e877bb?q=80&w=580&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Premium Sports Hoodie",
      price: 49.99,
      category: "hoodie",
      image:
        "https://images.unsplash.com/photo-1740711152088-88a009e877bb?q=80&w=580&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Slim Fit Denim Jacket",
      price: 69.99,
      category: "jacket",
      image:
        "https://images.unsplash.com/photo-1740711152088-88a009e877bb?q=80&w=580&auto=format&fit=crop",
    },
    {
      id: 4,
      name: "Casual Summer Shorts",
      price: 24.99,
      category: "shorts",
      image:
        "https://images.unsplash.com/photo-1740711152088-88a009e877bb?q=80&w=580&auto=format&fit=crop",
    },
    {
      id: 5,
      name: "Everyday Track Pants",
      price: 34.99,
      category: "pants",
      image:
        "https://images.unsplash.com/photo-1740711152088-88a009e877bb?q=80&w=580&auto=format&fit=crop",
    },
    {
      id: 6,
      name: "Sports Performance Tee",
      price: 27.99,
      category: "tshirt",
      image:
        "https://images.unsplash.com/photo-1740711152088-88a009e877bb?q=80&w=580&auto=format&fit=crop",
    },
    {
      id: 7,
      name: "Winter Fleece Jacket",
      price: 89.99,
      category: "jacket",
      image:
        "https://images.unsplash.com/photo-1740711152088-88a009e877bb?q=80&w=580&auto=format&fit=crop",
    },
    {
      id: 8,
      name: "Urban Cargo Pants",
      price: 39.99,
      category: "pants",
      image:
        "https://images.unsplash.com/photo-1740711152088-88a009e877bb?q=80&w=580&auto=format&fit=crop",
    },
    {
      id: 9,
      name: "Minimalist Polo Shirt",
      price: 32.99,
      category: "tshirt",
      image:
        "https://images.unsplash.com/photo-1740711152088-88a009e877bb?q=80&w=580&auto=format&fit=crop",
    },
    {
      id: 10,
      name: "Premium Leather Jacket",
      price: 129.99,
      category: "jacket",
      image:
        "https://images.unsplash.com/photo-1740711152088-88a009e877bb?q=80&w=580&auto=format&fit=crop",
    },
  ];

  return (
    <div>
      <BreadCrumb routeName={"Products"} />
      <section className="my-container">
        <div className="flex justify-between items-center pb-5 mb-6 border-b border-b-accent">
          <h4 className="text-2xl font-medium">All Product</h4>
          <select className="rounded">
            <option value="" disabled>
              Price
            </option>
            <option value="low-high">Low to High</option>
            <option value="high-low">Hight to Low</option>
          </select>
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          <div className="border border-accent rounded-md p-3 h-fit">
            {/* filter option  */}
            <div>
              <h5 className="sub-title bg-secondary rounded-md p-2 mb-2">
                Category
              </h5>

              <Accordion
                type="single"
                collapsible
                className="w-full"
                defaultValue="item-1"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger>Mens</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance pl-4">
                    <div className="flex items-center gap-3">
                      <Checkbox id="t-shirt" defaultChecked />
                      <label htmlFor="t-shirt">T-shirt</label>
                    </div>
                    <div className="flex items-center gap-3">
                      <Checkbox id="shirt" />
                      <label htmlFor="shirt">Shirt</label>
                    </div>
                    <div className="flex items-center gap-3">
                      <Checkbox id="jacket" />
                      <label htmlFor="jacket">Jacket</label>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Women</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance pl-4">
                    <div className="flex items-center gap-3">
                      <Checkbox id="t-shirt" />
                      <label htmlFor="t-shirt">T-shirt</label>
                    </div>
                    <div className="flex items-center gap-3">
                      <Checkbox id="shirt" />
                      <label htmlFor="shirt">Shirt</label>
                    </div>
                    <div className="flex items-center gap-3">
                      <Checkbox id="jacket" />
                      <label htmlFor="jacket">Jacket</label>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Baby</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance pl-4">
                    <div className="flex items-center gap-3">
                      <Checkbox id="t-shirt" />
                      <label htmlFor="t-shirt">T-shirt</label>
                    </div>
                    <div className="flex items-center gap-3">
                      <Checkbox id="shirt" />
                      <label htmlFor="shirt">Shirt</label>
                    </div>
                    <div className="flex items-center gap-3">
                      <Checkbox id="jacket" />
                      <label htmlFor="jacket">Jacket</label>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Accessories</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance pl-4">
                    <div className="flex items-center gap-3">
                      <Checkbox id="t-shirt" />
                      <label htmlFor="t-shirt">T-shirt</label>
                    </div>
                    <div className="flex items-center gap-3">
                      <Checkbox id="shirt" />
                      <label htmlFor="shirt">Shirt</label>
                    </div>
                    <div className="flex items-center gap-3">
                      <Checkbox id="jacket" />
                      <label htmlFor="jacket">Jacket</label>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          {/* product card  */}
          <div className="md:col-span-4 grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {allProducts.map((item) => {
              return <ProductCard item={item} key={item.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
