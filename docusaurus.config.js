// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Unlock Protocol",
  tagline:
    "Unlock is a membership protocol, built on a blockchain. It enables creators to monetize their content or software without relying on a middleman. It lets consumers manage all of their subscriptions in a consistent way, as well as earn discounts when they share the best content and applications they use.",
  url: "https://docs.unlock-protocol.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "unlock-protocol", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

  presets: [
    [
      "docusaurus-preset-openapi",
      /** @type {import('docusaurus-preset-openapi').Options} */
      ({
        api: {
          path: "./openapi.yml",
          routeBasePath: "api",
        },
        googleAnalytics: {
          trackingID: "UA-142114767-4",
          anonymizeIP: true,
        },
        docs: {
          showLastUpdateTime: true,
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/unlock-protocol/docs/docs",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('docusaurus-preset-openapi').ThemeConfig} */
    ({
      navbar: {
        title: "Unlock Protocol",
        logo: {
          alt: "Unlock Protocol",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "introduction",
            position: "left",
            label: "Get Started",
          },
          { to: "/api", label: "API", position: "left" },
          {
            href: "https://github.com/unlock-protocol/unlock",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Start here",
                to: "/docs/introduction",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.com/invite/Ah6ZEJyTDp",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/UnlockProtocol",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Website",
                to: "https://unlock-protocol.com",
              },
              {
                label: "Unlock App",
                to: "https://app.unlock-protocol.com",
              },
              {
                label: "GitHub",
                href: "https://github.com/unlock-protocol/unlock",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Unlock, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
