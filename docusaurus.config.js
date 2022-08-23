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
  onBrokenMarkdownLinks: "throw",
  onDuplicateRoutes: "throw",
  favicon: "img/favicon.ico",
  organizationName: "unlock-protocol", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.
  plugins: [require.resolve("@cmfcmf/docusaurus-search-local"),
  [
    require.resolve('docusaurus-gtm-plugin'),
    {
      id: 'GTM-PRCCFV9', // GTM Container ID
    }
  ],
  ['@docusaurus/plugin-client-redirects', {
    redirects: [{
      from: '/unlock',
      to: '/',
    }, {
      from: '/basics',
      to: '/'
    }, {
      from: '/unlock/developers/locksmith/webhooks',
      to: '/tools/locksmith/webhooks'
    }, {
      from: '/unlock/creators/plugins-and-integrations',
      to: '/move-to-guides/plugins-and-integrations/'
    }, {
      from: '/unlock/creators/plugins-and-integrations/discord',
      to: '/move-to-guides/plugins-and-integrations/discord'
    }, {
      from: '/unlock/creators/plugins-and-integrations/wordpress-plugin',
      to: '/move-to-guides/plugins-and-integrations/wordpress-plugin'
    }, {
      from: '/unlock/governance/roadmap',
      to: '/governance/roadmap'
    }]
  }]],
  presets: [
    [
      "docusaurus-preset-openapi",
      /** @type {import('docusaurus-preset-openapi').Options} */
      ({
        api: {
          path: "./openapi.yml",
          routeBasePath: "/tools/locksmith/api",
        },
        docs: {
          showLastUpdateTime: false,
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
    { metadata: [
        { name: "keywords",
          content: "unlock protocol, blockchain, nft, token gate, nft membership, nft subscription"
        },
        { property: "og:locale",
           content: "og:en_US"
        },
        { poperty: "og:type",
          content: "website"
        },
        { property: "og:description",
          content: "Unlock Protocol technical documentation for developers with a complete protocol reference, tutorials and code examples."
        },
        { property: "og:title",
          content: "Unlock Protocol Technical Docs"
        },
        { property: "og:url",
          content: "https://docs.unlock-protocol.com/"
        },
        { property: "og:image",
          content:"/img/dev-docs-share-img.png"
        },
        { property: "og:image:width",
          content: "1200"
        },
        { property: "og:image:height",
          content: "627"
        },
        { property: "og:image:type",
          content: "image/png"
        },
        { name: "twitter:card",
          content: "summary_large_image"
        },
        { name: "twitter:title",
          content: "Unlock Protocol Technical Docs"
        },
        { name: "twitter:description",
          content: "Unlock Protocol technical documentation for developers with a complete protocol reference, tutorials and code examples."
        },
        { name: "twitter:image",
          content: "/img/dev-docs-share-img.png"
        },
        { name: "twitter:image:alt",
          content: "Unlock logo with the word docs next to it"
        }
        ],
      navbar: {
        title: "Unlock",
        logo: {
          alt: "Unlock Protocol",
          src: "img/logo.svg",
          href: "https://unlock-protocol.com/"
        },
        items: [
          { to: "/", label: "Docs", position: "right" },
          { to: "https://app.unlock-protocol.com/dashboard", label: "Dashboard", position: "right" },
          { to: "/core-protocol", label: "Core Protocol", position: "right" },
          { to: "/governance", label: "Governance", position: "right" },
          {
            href: "https://github.com/unlock-protocol/unlock",
            label: "GitHub",
            position: "right",
          },
          { to: 'https://unlock-protocol.gitbook.io/', label: "Older Docs", position: "right", rel: "nofollow,noindex" }
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
        additionalLanguages: ['solidity'],
        theme: UnlockPrismTheme,
      },
    }),

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  }
};

module.exports = config;
