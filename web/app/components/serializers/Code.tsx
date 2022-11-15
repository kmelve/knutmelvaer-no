import Highlight, { defaultProps } from "prism-react-renderer";
import github from "prism-react-renderer/themes/github";

type CodeProps = {
  code: string;
  language: string;
};

const languageOverrides = (lang: string) =>
  ({
    sh: "shell-session",
  }[lang] ||
  lang ||
  "text");

export default function Code({ node }: { node: CodeProps }) {
  const { code, language } = node;
  return (
    <Highlight {...defaultProps} code={code} language={language} theme={github}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            // eslint-disable-next-line react/jsx-key
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                // eslint-disable-next-line react/jsx-key
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}
