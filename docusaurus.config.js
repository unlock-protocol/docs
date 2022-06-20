// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const UnlockPrismTheme = require("./unlock-prism-theme");

/** @type {import('@docusaurus/core').Config} */
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
  plugins: [require.resolve("@cmfcmf/docusaurus-search-local"),
  [
    require.resolve('docusaurus-gtm-plugin'),
    {
      id: 'GTM-XXXXXXX', // GTM Container ID
    }
  ]],
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
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // editUrl: "https://github.com/unlock-protocol/docs/docs",
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
          { to: "/Basics", label: "Basics", position: "right" },
          { to: "/core-protocol", label: "Core", position: "right" },
          { to: "/Tools", label: "Tools", position: "right" },
          { to: "/tutorials", label: "Tutorials", position: "right" },
          { to: "/governance", label: "Governance", position: "right" },
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
                label: "Overview",
                to: "/",
              },
              {
                label: "Tools",
                to: "/",
              },
              {
                label: "Tutorials",
                to: "/",
              },
              {
                label: "Goverance",
                to: "/",
              },
              {
                label: "GitHub",
                href: "https://github.com/unlock-protocol/unlock",
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
              {
                label: "Forum",
                href: "https://unlock.community/",
              },
            ],
          },
          {
            title: "About Unlock",
            items: [
              {
                label: "About Unlock",
                to: "https://unlock-protocol.com",
              },
              {
                label: "Blog",
                to: "https://app.unlock-protocol.com",
              },
              {
                label: "Guides",
                to: "https://unlock-protocol.com/guides",
              },
              {
                label: "Brand kit",
                to: "https://unlock-protocol.com/guides/#",
              },
            ],
          },
          {
            title: "Unlock apps",
            items: [
              {
                label: "Launch dashboard",
                to: "https://app.unlock-protocol.com",
              },
              {
                label: "Grants for developer",
                to: "https://unlock-protocol.com/grants",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Unlock, Inc.`,
      },
      prism: {
        theme: UnlockPrismTheme,
      },
    }),
};

module.exports = config;
