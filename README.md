# Mathematics as a Construct

> **_Our knowledge in mathematics relies on faith until we can construct it ourselves._**

A mathematics primer explaining the foundations of mathematics, and going beyond the universe, aiming to teach math in a manner different from the pragmatic approach used commonly.

It is also a project, part of a development series, which will be addressed later, _MaaC_ is planned in a way that allows me to learn and utilize tools such as Obsidian, TypeScript, Quartz, Jenkins, GitHub Pages and Slack.

This template doesn't have any `content`, as it can be used as a base for each translation, use this repository as a template, create the content according to the main English and Spanish translations, modify `quartz.config.ts` to match the locale and other settings.

## Common Features

Planned and implemented features on a check list, which do not depend on the translation and can be distributed as part of the template.

- [x] GitHub-based translation framework.
- [ ] Multiple subdomains and repositories for each translation.
- [ ] Custom CSS changes.
- [ ] PDF version.
- [ ] Jenkins Pipelines.
- [ ] Custom 404 page.
- [ ] Progress saver on browser.
- [ ] Release channel and webpage on Slack.
- [ ] Code of Conduct on Slack and GitHub.
- [ ] FaQ on Slack.
- [ ] Introductory canvas on `#general-discussion`.
- [ ] Integrations and Slackbot.
- [ ] Docker image deployment.

## Changes to _Quartz_

[Quartz](https://github.com/jackyzha0/quartz) is the framework that enables this primer to be distributed in the form of a website, however, it was also acommodated to fit the necessities of the project, here is a list of all the changes made to base Quartz.

- No breadcrumbs, meta-content and tag list.
- Explorer only serves as a folder navigator, it does not allow a listing of the elements within a chapter.
- Added umami as an analytics provider.
- Changed default fonts.
- Changed default color scheme on both modes.
- Removed tag and folder pages.
- After body elements now redirect to this repository and the Slack community.
- Added deployment script for GitHub Pages.
- Adapted `.gitignore` to exclude unused and syncthing related folders.
- Disabled `Custom OG Images`.

## Important development notes

For configuration, the folder `.github` and files `quartz.config.ts`, `quartz.layout.ts` are used, for small customizations, `static/` and `styles/` are used, for larger changes, `components/` and `plugins/` are used, internal workings lay on `cli/`, `i18n/`, `processors/`, and `util/`, and additional configuration scripts (such as `.js`, `.mjs`, `.ts` and other related files).

The config file `quartz.config.ts` is the only file that must be modified according to the translation being developed.
