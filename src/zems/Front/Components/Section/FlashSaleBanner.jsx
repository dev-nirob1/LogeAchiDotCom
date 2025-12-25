import { Button } from "@/components/ui/Button";
import { BsLightningFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const FlashSaleBanner = () => {
  return (
    <section
      className="h-[450px] bg-cover bg-top flex items-center"
      style={{
        backgroundImage: `
      linear-gradient(to right, rgba(0,0,0,0.2), transparent),
      url('/flash-sale-banner.jpg')
    `,
      }}
    >
      <div className="my-container">
        <div className="text-white w-fit">
          <span className="border p-2 font-medium rounded flex items-center gap-1 w-fit mb-5">
            <BsLightningFill className="text-yellow-400 text-xl" />
            Flash Sale
          </span>
          <h3 className="text-4xl md:text-6xl font-extrabold text-white my-3">
            Up to <span className="text-yellow-400">50% OFF</span>
          </h3>

          <p className="my-4 text-base md:text-lg text-white">
            Limited time deals — don’t miss out!
          </p>
          <Button asChild className="px-8 py-6 text-base">
            <Link to="/flash-sale">Shop Now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FlashSaleBanner;
