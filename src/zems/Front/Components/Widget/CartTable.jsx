import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {Button} from "@/components/ui/button";
// import { useDispatch } from "react-redux";
// import { clearCart } from "../../../../store/cartSlice";
const CartTable = ({ cart }) => {
  console.log(cart);
  // const dispatch = useDispatch();
  // const handleDeleteCart = () => {
  //   dispatch(clearCart());
  // };
  return (
    <Table className="text-base mb-6">
      <TableHeader>
        <TableRow className="border-b border-b-accent">
          <TableHead>Product</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead>Total</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {cart.cart &&
          cart.cart.map((item) => (
            <TableRow className="border-b border-b-accent" key={item.id}>
              <TableCell className="font-medium flex gap-3 items-center">
                <img className="h-16 w-16" src="https://images.unsplash.com/photo-1740711152088-88a009e877bb?q=80&w=580&auto=format&fit=crop" alt="image" />
                <div>
                  <p>{item.name}</p>
                  <small>L size</small>
                </div>
              </TableCell>
              <TableCell>৳ {item.price}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>৳ 49.99</TableCell>
              <TableCell>
                <Button className="bg-red-600 text-white">Remove</Button>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

export default CartTable;
