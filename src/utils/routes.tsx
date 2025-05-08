export const routes = Object.freeze({
  BASE_URL: "/",
  ABOUT: "/about-us",
  OUR_SERVICES: "/our-services",
  SHOWS: "/shows",
  BLOG: "/blog",
  GALLERY: "/gallery",
  FAQs: "/faqs",
  CONTACT_US: "/contact-us",
  PRIVACY_POLICY: "/privacy-policy",
  TERMS: "/terms-and-conditions",
  BLOG_CONTENT: "/blog/:id",
});

export const routeComponents = [
  {
    title: "Home",
    route: routes.BASE_URL,
    properties: null,
  },
  {
    title: "About us",
    route: routes.ABOUT,
    properties: ["isHeaderRoute", "isFooterRoute", "footerCompany"],
  },
  {
    title: "Our Services",
    route: routes.OUR_SERVICES,
    properties: ["isHeaderRoute", "isFooterRoute", "footerCompany"],
  },
  {
    title: "Shows",
    route: routes.SHOWS,
    properties: ["isHeaderRoute"],
  },
  {
    title: "Blog",
    route: routes.BLOG,
    properties: ["isHeaderRoute", "isFooterRoute", "footerCompany"],
  },
  {
    title: "Gallery",
    route: routes.GALLERY,
    properties: ["isHeaderRoute"],
  },
  {
    title: "FAQs",
    route: routes.FAQs,
    properties: ["isFooterRoute", "footerSupport"],
  },
  {
    title: "Contact Us",
    route: routes.CONTACT_US,
    properties: ["isFooterRoute", "footerSupport"],
  },
  {
    title: "Privacy Policy",
    route: routes.PRIVACY_POLICY,
    properties: [, "isFooterRoute", "footerPolicies"],
  },
  {
    title: "Terms & Conditions",
    route: routes.TERMS,
    properties: ["isFooterRoute", "footerPolicies"],
  },
];
