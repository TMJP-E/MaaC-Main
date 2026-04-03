import { byAlphabeticalOrderOnly } from "./quartz/addons/sorting"
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
    analytics: null, //{
    //  provider: "umami",
    //  host: "<your-umami-host>",
    // websiteId: "<your-umami-website-id>",
    //},
    locale: "en-US",
    baseUrl: "TMJP-E.github.io/MaaC",
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
        header: " Newsreader ",
        body: "Crimson Text",
        code: "Google Sans Code ",
      },
      colors: {
        lightMode: {
          light: "#f1f1f1",
          lightgray: "#d1d1d1",
          gray: "#b1b1b1",
          darkgray: "#717171",
          dark: "#313131",
          secondary: "#ff8800",
          tertiary: "#0088ff",
          highlight: "#88ff88",
          textHighlight: "#ff88ff",
        },
        darkMode: {
          light: "#1f1f1f",
          lightgray: "#404040",
          gray: "#646464",
          darkgray: "#d9d9d9",
          dark: "#e0e0e0",
          secondary: "#0066ff",
          tertiary: "#ff6600",
          highlight: "#22aa2266",
          textHighlight: "#aa22aa66",
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
      Plugin.FolderPage({ sort: byAlphabeticalOrderOnly() }),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
        includeEmptyFiles: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      // Plugin.CustomOgImages(),
    ],
  },
}

export default config
