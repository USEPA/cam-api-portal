import React, { useState, useEffect } from "react";
import {
  Menu,
  Header,
  PrimaryNav,
  NavDropDownButton,
  NavMenuButton,
  Title,
  Link as USWDSLink,
} from "@trussworks/react-uswds";
import { APIKeyModal } from "../APIKeyModal/APIKeyModal";
import { Link as RouterLink } from "react-router-dom";

export const SubHeader = () => {
  const subHeaderMenuList = [
    {
      label: "Home",
      items: [{ menu: "Home", link: `/`, external: false }],
    },
    {
      label: "API Documentation",
      items: [
        { menu: "Account API", link: `/swagger/account-mgmt`, external: false },
        {
          menu: "Facilities API",
          link: `/swagger/facilities-mgmt`,
          external: false,
        },
        {
          menu: "Emissions API",
          link: `/swagger/emissions-mgmt`,
          external: false,
        },
        {
          menu: "Master Data Management API",
          link: `/swagger/master-data-mgmt`,
          external: false,
        },
        {
          menu: "Streaming Services API",
          link: `/swagger/streaming-services`,
          external: false,
        },
      ],
    },
    {
      label: "Help & Resources",
      items: [
        // { menu: "API Guides", link: `/api-guides`, external: false },
        { menu: "FAQs", link: `/faq`, external: false },
        {
          menu: "Related Resources",
          link: `/related-resources`,
          external: false,
        },
        { menu: "Release Notes", link: `/release-notes`, external: false },
      ],
    },
    {
      label: "Contact Us",
      items: [
        {
          menu: "Contact Us",
          link: `https://www.epa.gov/airmarkets/forms/cam-api-contact-us`,
          external: true,
        },
      ],
    },
  ];

  useEffect(() => {
    setCategorySelected([false, false, false, false, false]);
  }, []);

  const [expanded, setExpanded] = useState(false);
  const onClick = () => setExpanded((prvExpanded) => !prvExpanded);

  const [navDropdownOpen, setNavDropdownOpen] = useState([
    false,
    false,
    false,
    false,
  ]);
  const [categorySelected, setCategorySelected] = useState([
    false,
    false,
    false,
    false,
  ]);

  // This function is used to set the aria-expanded label when the nav menu is
  // clicked in the NavDropdown component via the isOpen prop
  const handleToggleNavDropdown = (column) => {
    setNavDropdownOpen((prevNavDropdownOpen) => {
      const newOpenState = Array(prevNavDropdownOpen.length).fill(false);
      newOpenState[column] = !prevNavDropdownOpen[column];
      return newOpenState;
    });
  };

  const handleSubMenuClick = (column) => {
    handleToggleNavDropdown(column);

    setCategorySelected([false, false, false, false, false]);
  };

  return (
    <>
      <Header className="bg-primary-dark padding-y-2 mobile-lg:padding-x-1 desktop:padding-x-4">
        <div className="clearfix padding-x-0 desktop-lg:margin-top-3">
          <Title className="float-left margin-1 margin-top-0 desktop:margin-top-1  desktop-lg:margin-top-0 ">
            <h1 className="text-white text-bold desktop-lg:font-sans-2xl desktop:font-sans-2xl mobile-lg:font-sans-xl margin-0">
              CAM API
            </h1>
          </Title>
          <div className="float-right">
            <PrimaryNav
              className="bg-primary-dark float-left desktop:margin-top-1 desktop-lg:margin-top-0"
              items={subHeaderMenuList.map((el, i) => {
                if (el.items.length === 1) {
                  // if there is only one item in the menu list , the 1st if; else other.
                  return (
                    <>
                      {el.items[0].external ? (
                        <USWDSLink
                          href={el.items[0].link}
                          rel={el.items[0].link}
                          target="_blank"
                          style={{ color: "white" }}
                          onClick={() => handleSubMenuClick(i)}
                        >
                          {el.label}
                        </USWDSLink>
                      ) : (
                        <RouterLink
                          style={{ color: "white" }}
                          to={el.items[0].link}
                          onClick={() => handleSubMenuClick(i)}
                        >
                          {el.label}
                        </RouterLink>
                      )}
                      {categorySelected[i] === true ? (
                        <div className="menu-underline" />
                      ) : null}
                    </>
                  );
                } else {
                  return (
                    <>
                      <NavDropDownButton
                        key={i}
                        label={el.label}
                        menuId={`menu-${el.label}`}
                        isOpen={navDropdownOpen[i]}
                        onToggle={() => {
                          handleToggleNavDropdown(i);
                        }}
                        style={{ color: "white" }}
                      />
                      <Menu
                        id={
                          i === subHeaderMenuList.length - 1
                            ? `extended-nav-section-last`
                            : null
                        }
                        items={el.items.map((item) =>
                          item.external ? (
                            <USWDSLink
                              href={item.link}
                              rel={item.link}
                              style={{ color: "white" }}
                            >
                              {item.menu}
                            </USWDSLink>
                          ) : (
                            <RouterLink
                              to={item.link}
                              style={{ color: "white" }}
                            >
                              {item.menu}
                            </RouterLink>
                          )
                        )}
                        isOpen={navDropdownOpen[i]}
                      />
                      {categorySelected[i] === true ? (
                        <div className="menu-underline" />
                      ) : null}
                    </>
                  );
                }
              })}
              mobileExpanded={expanded}
              onToggleMobileNav={onClick}
            ></PrimaryNav>
            <div className="float-right desktop:margin-top-1 desktop-lg:margin-top-0">
              <APIKeyModal />
              <div className="float-right">
                <NavMenuButton onClick={onClick} label="Menu" />
              </div>
            </div>
          </div>
        </div>
      </Header>
    </>
  );
};
