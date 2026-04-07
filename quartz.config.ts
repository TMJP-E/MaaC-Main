import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Mathematics as a Construct",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "umami",
      host: "https://cloud.umami.is/script.js",
      websiteId: "", //Must edit for each repository website.
    },
    locale: "en-US", //Adjust to translation language.
    baseUrl: "tmjp-e.github.io/MaaC",
    ignorePatterns: [
      "private",
      "templates",
      ".obsidian",
      ".space",
      ".stfolder",
      "*.canvas",
      "1-TheFoundations",
      "2-CountingNumbers",
      "3-StructuringNumbers",
      "4-GoingBeyond",
      "5-BeyondUniverse",
    ],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "GFS Didot",
        body: "Rufina",
        code: "Google Sans Code",
      },
      colors: {
        lightMode: {
          light: "#f1f1f1",
          lightgray: "#d1d1d1",
          gray: "#b1b1b1",
          darkgray: "#212121",
          dark: "#111111",
          secondary: "#60aaf0",
          tertiary: "#fba000",
          highlight: "#effaffff",
          textHighlight: "#fffaf0",
        },
        darkMode: {
          light: "#1f1f1f",
          lightgray: "#404040",
          gray: "#646464",
          darkgray: "#d9d9d9",
          dark: "#e0e0e0",
          secondary: "#0066ff",
          tertiary: "#ff6600",
          highlight: "#2252aa66",
          textHighlight: "#5080be80",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({
        parseArrows: false,
        enableInHtmlEmbed: true,
        disableBrokenWikilinks: true,
      }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents({ maxDepth: 3, collapseByDefault: false }),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "mathjax" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
        includeEmptyFiles: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      Plugin.CNAME(),
      // Comment out CustomOgImages to speed up build time
      // Plugin.CustomOgImages(),
    ],
  },
}

export default config
