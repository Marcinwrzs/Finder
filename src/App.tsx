import { useEffect, useState } from "react";
import * as Styled from "./App.styled";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import {
  AiOutlineCreditCard,
  AiOutlineHome,
  AiFillHeart,
  AiFillCar,
  AiFillThunderbolt,
  AiFillBank,
  AiOutlineMobile,
  AiOutlineWifi,
  AiOutlineStock,
  AiOutlineCar,
  AiOutlineShop,
  AiFillStar,
} from "react-icons/ai";
import {
  PiHourglassSimpleHighFill,
  PiProjectorScreenBold,
} from "react-icons/pi";
import { BsGlobeAmericas } from "react-icons/bs";
import { FaRegMoneyBillAlt, FaUmbrella } from "react-icons/fa";
import { BiDollar } from "react-icons/bi";
import { MdPets } from "react-icons/md";
import {
  BsCurrencyBitcoin,
  BsFillCalendar2MonthFill,
  BsAirplaneFill,
} from "react-icons/bs";

interface ComponentItem {
  id: number;
  header: string;
  icon: React.ReactNode;
}

const components: ComponentItem[] = [
  { id: 0, header: "Credit Cards", icon: <AiOutlineCreditCard /> },
  { id: 1, header: "Home Loans", icon: <AiOutlineHome /> },
  { id: 2, header: "Health Insurance", icon: <AiFillHeart /> },
  { id: 3, header: "Car Insurance", icon: <AiFillCar /> },
  { id: 4, header: "High-Interest Savings", icon: <AiFillBank /> },
  { id: 5, header: "Electricity & Gas", icon: <AiFillThunderbolt /> },
  { id: 6, header: "Personal Loans", icon: <FaRegMoneyBillAlt /> },
  { id: 7, header: "Mobile Plans", icon: <AiOutlineMobile /> },
  { id: 8, header: "Broadband & NBN", icon: <AiOutlineWifi /> },
  { id: 9, header: "Super Funds", icon: <AiFillStar /> },
  { id: 10, header: "Share Trading", icon: <AiOutlineStock /> },
  { id: 11, header: "Life Insurance", icon: <FaUmbrella /> },
  { id: 12, header: "Home Insurance", icon: <AiOutlineHome /> },
  { id: 13, header: "Travel Insurance", icon: <BsAirplaneFill /> },
  { id: 14, header: "Travel Deals", icon: <BsFillCalendar2MonthFill /> },
  { id: 15, header: "Crypto", icon: <BsCurrencyBitcoin /> },
  { id: 16, header: "Car Loans", icon: <AiOutlineCar /> },
  { id: 17, header: "Pet Insurance", icon: <MdPets /> },
  { id: 18, header: "Transaction Accounts", icon: <BiDollar /> },
  { id: 19, header: "Money Transfers", icon: <BsGlobeAmericas /> },
  { id: 20, header: "Shopping Deals", icon: <AiOutlineShop /> },
  { id: 21, header: "Streaming", icon: <PiProjectorScreenBold /> },
  { id: 22, header: "Business Insurance", icon: <FaRegMoneyBillAlt /> },
  { id: 23, header: "Short Term Loans", icon: <PiHourglassSimpleHighFill /> },
];

const App: React.FC = () => {
  const [showAllElements, setShowAllElements] = useState<boolean>(false);
  const [maxVisibleComponents, setMaxVisibleComponents] = useState<number>(
    window.innerWidth < 960 ? 4 : 6
  );

  const visibleComponents = showAllElements
    ? components
    : components.slice(0, maxVisibleComponents);

  const resizeWindow = () => {
    const handleResize = () => {
      setMaxVisibleComponents(
        window.innerWidth < 960 && window.innerWidth > 600 ? 4 : 6
      );
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  };

  useEffect(() => {
    resizeWindow();
  }, []);

  return (
    <Styled.Wrapper>
      <Styled.Header>
        <h2>Join 2 million+ Australians finding better</h2>
        <p>
          Finder's team of 40+ experts will help you find the right choices in
          over 100 categories.
        </p>
      </Styled.Header>

      <Styled.Compoments>
        {visibleComponents.map((component) => {
          const { id, header, icon } = component;
          return (
            <Styled.Link
              href="https://www.finder.com.au/"
              target="_blank"
              key={id}
            >
              {icon}
              <div>
                <h3>{header}</h3>
              </div>
            </Styled.Link>
          );
        })}
      </Styled.Compoments>

      <Styled.Button onClick={() => setShowAllElements(!showAllElements)}>
        {showAllElements ? (
          <>
            <span>Show less categories</span>
            <SlArrowUp />
          </>
        ) : (
          <>
            <span>Show more categories</span>
            <SlArrowDown />
          </>
        )}
      </Styled.Button>
    </Styled.Wrapper>
  );
};

export default App;
