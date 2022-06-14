import React, { useState, useEffect } from "react";

import {
  Menu,
  Header,
  PrimaryNav,
  NavDropDownButton,
  Title,
  Link,
  Link as USWDSLink,
} from "@trussworks/react-uswds";
import { APIKeyModal } from "../APIKeyModal/APIKeyModal";

export const SubHeader = ({ setCurrentLink }) => {
  const subHeaderMenuList = [
    {
      label: (
        <span
          className="margin-right-1 text-no-wrap"
          style={{ color: "white" }}
        >
          Home
        </span>
      ),
      items: [{ menu: "Home", link: `/home`, tab: true }],
    },
    {
      label: (
        <span
          className="margin-right-1 text-no-wrap"
          style={{ color: "white" }}
        >
          <span
            className="margin-right-20 menu-item-separator"
            style={{ color: "#365b8f" }}
          >
            |
          </span>
          API Documentations
        </span>
      ),
      items: [
        { menu: "Account API", link: `/swagger/account-mgmt`, tab: true },
        { menu: "Facilities API", link: `/swagger/facilities-mgmt`, tab: true },
        { menu: "Emissions API", link: `/swagger/emissions-mgmt`, tab: true },
        {
          menu: "Master Data Management API",
          link: `/swagger/master-data-mgmt`,
          tab: true,
        },
        {
          menu: "Streaming Services API",
          link: `/swagger/streaming-services`,
          tab: true,
        },
      ],
    },
    {
      label: (
        <span
          className="margin-right-1 text-no-wrap"
          style={{ color: "white" }}
        >
          <span
            className="margin-right-20 menu-item-separator"
            style={{ color: "#365b8f" }}
          >
            |
          </span>
          Help & Resources
        </span>
      ),
      items: [
        { menu: "API Guides", link: `/api-guides`, tab: true },
        { menu: "FAQs", link: `/faq`, tab: true },
        { menu: "Related Resources", link: `/related-resources`, tab: true },
        { menu: "Release Notes", link: `/release-notes`, tab: true },
      ],
    },
    {
      label: (
        <span
          className="margin-right-1 text-no-wrap"
          style={{ color: "white" }}
        >
          <span
            className="margin-right-20 menu-item-separator"
            style={{ color: "#365b8f" }}
          >
            |
          </span>
          Contact Us
        </span>
      ),
      items: [
        {
          menu: "Contact Us",
          link: `https://www.epa.gov/airmarkets/forms/cam-api-contact-us`,
          tab: true,
        },
      ],
    },
  ];

  useEffect(() => {
    setCategorySelected([false, false, false, false, false]);
  }, []);

  const [expanded, setExpanded] = useState(false);
  const onClick = (): void => setExpanded((prvExpanded) => !prvExpanded)

  const [navDropdownOpen, setNavDropdownOpen] = useState([
    false,
    false,
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
    false,
    false,
  ]);

  const handleToggleNavDropdown = (column) => {
    setNavDropdownOpen((prevNavDropdownOpen) => {
      const newOpenState = Array(prevNavDropdownOpen.length).fill(false);
      newOpenState[column] = !prevNavDropdownOpen[column];
      return newOpenState;
    });
  };

  const handleSubMenuClick = (column) => {
    setCurrentLink(false);
    handleToggleNavDropdown(column);

    setCategorySelected([false, false, false, false, false]);
  };

  return (
    <>
      <div className="bg-primary-dark">
      <div className={`usa-overlay ${expanded ? 'is-visible' : ''}`}></div>
        <Header className="padding-y-2 mobile-lg:padding-x-1 desktop:padding-x-4">
          <div className="clearfix padding-x-0 desktop-lg:margin-top-3">
            <Title className="float-left margin-1 margin-top-0 desktop:margin-top-1  desktop-lg:margin-top-0 ">
              <h1 className="text-white text-bold desktop-lg:font-sans-2xl desktop:font-sans-2xl mobile-lg:font-sans-xl margin-0">
                CAM API
              </h1>
            </Title>
            <div className="float-right">
              <PrimaryNav
                className="float-left desktop:margin-top-1 desktop-lg:margin-top-0"
                items={subHeaderMenuList.map((el, i) => {
                  if (el.items.length === 0) {
                    return (
                      <>
                        <Link
                          href={el.items[0].link}
                          target="_blank"
                          title={el.label}
                          aria-label={el.label}
                          onClick={() => handleSubMenuClick(i)}
                        >
                          {el.label}
                        </Link>
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
                          className="text-white"
                        />
                        <Menu
                          id={
                            i === subHeaderMenuList.length - 1
                              ? `extended-nav-section-last`
                              : null
                          }
                          className="font-body-sm"
                          items={el.items.map((item) =>
                            item.tab ? (
                              <USWDSLink
                                href={item.link}
                                rel={item.link}
                                target="_blank"
                              >
                                {item.menu}
                              </USWDSLink>
                            ) : (
                              <Link to={item.link}>{item.menu}</Link>
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
              />
                <div className="float-right desktop:margin-top-1 desktop-lg:margin-top-0">
                <APIKeyModal />{" "}
              </div>
            </div>
          </div>
        </Header>
      </div>
    </>
  );
};
