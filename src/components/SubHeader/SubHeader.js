import React, { useState } from "react";

import {
  Header,
  Title,
  PrimaryNav,
  NavMenuButton,
  NavDropDownButton,
  MegaMenu,
} from "@trussworks/react-uswds";

export const SubHeader = () => {
  const [expanded, setExpanded] = useState(false);
  const onClick = (): void => setExpanded((prvExpanded) => !prvExpanded);

  const testItemsMegaOne = [
    [
      <a href="#linkOne" key="one">
        Simple link one
      </a>,
      <a href="#linkTwo" key="two">
        Simple link two
      </a>,
    ],
    [
      <a href="#linkThree" key="three">
        Simple link three
      </a>,
      <a href="#linkFour" key="four">
        Simple link four
      </a>,
    ],
  ];

  const testItemsMegaTwo = [
    [
      <a href="#linkFive" key="one">
        Simple link five
      </a>,
      <a href="#linkSix" key="two">
        Simple link six
      </a>,
    ],
    [
      <a href="#linkSeven" key="three">
        Simple link seven
      </a>,
      <a href="#linkEight" key="four">
        Simple link eight
      </a>,
    ],
  ];

  const [isOpen, setIsOpen] = useState([false, false]);

  const testItemsMegaMenu = [
    <>
      <NavDropDownButton
        /*onToggle={(): void => {
          onToggle(0, setIsOpen)
        }}*/
        menuId="testDropDownOne"
        isOpen={isOpen[0]}
        label="API Docs"
        isCurrent={true}
        style={{ color: "#ffffff" }}
      />
      <MegaMenu
        key="one"
        items={testItemsMegaOne}
        isOpen={isOpen[0]}
        id="testDropDownOne"
      />
    </>,
    <>
      <NavDropDownButton
        /*onToggle={(): void => {
          onToggle(1, setIsOpen)
        }}*/
        menuId="testDropDownTwo"
        isOpen={isOpen[1]}
        label="Help/Resources"
        style={{ color: "#ffffff" }}
      />
      <MegaMenu
        key="one"
        items={testItemsMegaTwo}
        isOpen={isOpen[1]}
        id="testDropDownTwo"
      />
    </> /* //Parent links adjacent to API Docs and Help/Resources NavLabels// ,
    <a href="#two" key="two" className="usa-nav__link">
      <span>Parent link</span>
    </a>,
    <a href="#three" key="three" className="usa-nav__link">
      <span>Parent link</span>
    </a>,*/,
  ];

  return (
    <>
      <div className="bg-primary-dark">
        <Header className="padding-y-2 mobile-lg:padding-x-1 desktop:padding-x-4">
          <div className="usa-nav-bar clearfix padding-x-0 desktop-lg:margin-top-3">
            <div>
              <Title className="float-left margin-1 margin-top-0 desktop:margin-top-1  desktop-lg:margin-top-0 ">
                <h1 className="display-inline-block text-white text-bold desktop-lg:font-sans-2xl desktop:font-sans-2xl mobile-lg:font-sans-xl margin-0">
                  CAM API
                </h1>
              </Title>

              <div className="float-right">
                <NavMenuButton onClick={onClick} label="Menu" />

                <PrimaryNav
                  items={testItemsMegaMenu}
                  mobileExpanded={expanded}
                  onToggleMobileNav={onClick}
                ></PrimaryNav>
              </div>
            </div>
          </div>
        </Header>
      </div>
    </>
  );
};
