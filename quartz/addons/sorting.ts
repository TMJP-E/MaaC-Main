import { SortFn } from "../components/PageList"

export function byAlphabeticalOrderOnly(): SortFn {
  return (f1, f2) => {
    const f1Title = f1.frontmatter?.title.toLowerCase() ?? ""
    const f2Title = f2.frontmatter?.title.toLowerCase() ?? ""
    return f1Title.localeCompare(f2Title)
  }
}
