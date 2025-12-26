// ===== React Icons =====
import {
  FaShoppingBasket,
  FaLaptop,
  FaMobileAlt,
  FaCar,
  FaMotorcycle,
  FaGlasses,
  FaTabletAlt,
  FaClock,
  FaShoppingBag,
} from "react-icons/fa";

import {
  GiLipstick,
  GiPerfumeBottle,
  GiSofa,
  GiTShirt,
  GiShirt,
  GiDress,
  GiHighHeel,
  GiRunningShoe,
  GiDiamondRing,
  GiWatch,
  GiSportMedal,
} from "react-icons/gi";

import {
  MdOutlineChair,
  MdOutlineKitchen,
} from "react-icons/md";

// ===== Category Config (DummyJSON Categories + Icons) =====
export const categories = [
  { slug: "beauty", name: "Beauty", icon: <GiLipstick /> },
  { slug: "fragrances", name: "Fragrances", icon: <GiPerfumeBottle /> },
  { slug: "furniture", name: "Furniture", icon: <GiSofa /> },
  { slug: "groceries", name: "Groceries", icon: <FaShoppingBasket /> },
  { slug: "home-decoration", name: "Home Decoration", icon: <MdOutlineChair /> },
  { slug: "kitchen-accessories", name: "Kitchen Accessories", icon: <MdOutlineKitchen /> },
  { slug: "laptops", name: "Laptops", icon: <FaLaptop /> },
  { slug: "mens-shirts", name: "Mens Shirts", icon: <GiShirt /> },
  { slug: "mens-shoes", name: "Mens Shoes", icon: <GiRunningShoe /> },
  { slug: "mens-watches", name: "Mens Watches", icon: <GiWatch /> },
  { slug: "mobile-accessories", name: "Mobile Accessories", icon: <FaMobileAlt /> },
  { slug: "motorcycle", name: "Motorcycle", icon: <FaMotorcycle /> },
  { slug: "skin-care", name: "Skin Care", icon: <GiLipstick /> },
  { slug: "smartphones", name: "Smartphones", icon: <FaMobileAlt /> },
  { slug: "sports-accessories", name: "Sports Accessories", icon: <GiSportMedal /> },
  { slug: "sunglasses", name: "Sunglasses", icon: <FaGlasses /> },
  { slug: "tablets", name: "Tablets", icon: <FaTabletAlt /> },
  { slug: "tops", name: "Tops", icon: <GiTShirt /> },
  { slug: "vehicle", name: "Vehicle", icon: <FaCar /> },
  { slug: "womens-bags", name: "Womens Bags", icon: <FaShoppingBag /> },
  { slug: "womens-dresses", name: "Womens Dresses", icon: <GiDress /> },
  { slug: "womens-jewellery", name: "Womens Jewellery", icon: <GiDiamondRing /> },
  { slug: "womens-shoes", name: "Womens Shoes", icon: <GiHighHeel /> },
  { slug: "womens-watches", name: "Womens Watches", icon: <FaClock /> },
];

// ===== Helper (Optional, for fetched categories) =====
// export const getCategoryWithIcon = (slug) =>
//   categories.find((cat) => cat.slug === slug);
