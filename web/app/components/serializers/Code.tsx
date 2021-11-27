import Refractor from "react-refractor";
import ts from "refractor/lang/typescript";
import js from "refractor/lang/javascript";
import json from "refractor/lang/json";
import jsx from "refractor/lang/jsx";
import bash from "refractor/lang/bash";
import css from "refractor/lang/css";
import php from "refractor/lang/php";
import sh from "refractor/lang/shell-session";
import markdown from "refractor/lang/markdown";

Refractor.registerLanguage(js);
Refractor.registerLanguage(ts);
Refractor.registerLanguage(json);
Refractor.registerLanguage(jsx);
Refractor.registerLanguage(php);
Refractor.registerLanguage(bash);
Refractor.registerLanguage(sh);
Refractor.registerLanguage(css);
Refractor.registerLanguage(markdown);

type Code = {
  code: string;
  language: string;
};

const languageOverrides = (lang: string) =>
  ({
    sh: "shell-session",
  }[lang] ||
  lang ||
  "text");

export default function Code({ node }: { node: Code }) {
  const { code, language } = node;
  return (
    <>
      <Refractor
        value={code}
        language={languageOverrides(language)}
        className="my-0"
      />
    </>
  );
}
