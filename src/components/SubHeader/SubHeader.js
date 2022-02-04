import React, { useState } from "react";

import {
  Header,
  Title,
  PrimaryNav,
  NavDropDownButton,
} from "@trussworks/react-uswds";

export const SubHeader = () => {
  const [isOpen, setIsOpen] = useState([false, false]);
  const onToggle = (index: number): void => {
    setIsOpen((prevIsOpen) => {
      const newIsOpen = [false, false];

      newIsOpen[index] = !prevIsOpen[index];
      return newIsOpen;
    });
  };
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
                <PrimaryNav
                  items={[
                    <NavDropDownButton
                      style={{ color: "#ffffff" }}
                      key="testItemOne"
                      label="API Docs"
                      menuId="test"
                      isOpen={isOpen[0]}
                      onToggle={(): void => {
                        onToggle(0);
                      }}
                    />,
                    <NavDropDownButton
                      style={{ color: "#ffffff" }}
                      key="testItemTwo"
                      label="Help/Resources"
                      menuId="testTwo"
                      isOpen={isOpen[1]}
                      onToggle={(): void => {
                        onToggle(1);
                      }}
                      isCurrent={true}
                    />,
                  ]}
                />
              </div>
            </div>
          </div>
        </Header>
      </div>
    </>
  );
};
