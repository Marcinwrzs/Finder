import { useState, useMemo } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import * as Styled from "./App.styled";
import { Size, useHandleResize } from "./resize";
import { menuItems } from "./MenuItems";

const App: React.FC = () => {
  const [showAllElements, setShowAllElements] = useState<boolean>(false);
  const size = useHandleResize();

  const MenuItems = useMemo(() => {
    const maxVisibleComponents = size === Size.MD ? 4 : 6;

    return showAllElements
      ? menuItems
      : menuItems.slice(0, maxVisibleComponents);
  }, [showAllElements, size]);

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
        {MenuItems.map((component) => {
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
