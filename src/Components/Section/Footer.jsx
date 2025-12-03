import Button from "../Elements/Button";
import InputField from "../Elements/InputField";

const Footer = () => {
  return (
    <div className="">
      <div className="grid grid-cols-3">npm install -D @tailwindcss/forms</div>

      {/* foooter bottom part  */}
      <div>
        <div className="flex">
            <InputField placeholder="input your name"/><Button>Subscribe</Button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
