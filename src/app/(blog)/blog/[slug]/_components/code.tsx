'use client';
import { CodeBlock } from 'react-code-block';
import { themes } from 'prism-react-renderer';
import { useState } from 'react';
import { Button } from '~/components/ui/button';
import { CheckIcon, CopyIcon } from 'lucide-react';

interface CodeProps {
  code: string;
  language: string;
  lines?: string[];
  title: string;
}

export function Code({ code, language, lines = [], title }: CodeProps) {
  const [copied, setCopied] = useState(false);

  function copyToClipboard() {
    try {
      navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error(err);
      setCopied(false);
    }
  }

  return (
    <div className="py-3">
      <CodeBlock code={code} language={language} theme={themes.vsDark} lines={lines}>
        <div className="relative rounded-xl border bg-[#0f1117] shadow-lg">
          <div className="border-b px-4 py-2">
            <span>{title}</span>
          </div>
          <CodeBlock.Code className="overflow-x-auto py-2">
            {({ isLineHighlighted }) => (
              <div
                className={`table-row hover:bg-[#141926] ${isLineHighlighted ? 'bg-[#141926]' : ''}`}
              >
                <CodeBlock.LineNumber
                  className={`table-cell select-none px-3 text-right text-sm ${
                    isLineHighlighted ? 'border-l-2 border-l-blue-500 text-gray-300' : ''
                  }`}
                />
                <CodeBlock.LineContent className="table-cell w-full">
                  <CodeBlock.Token />
                </CodeBlock.LineContent>
              </div>
            )}
          </CodeBlock.Code>
          <Button
            size="sm"
            variant="outline"
            onClick={copyToClipboard}
            className="absolute right-4 top-6 h-auto p-2"
          >
            {copied ? <CheckIcon size={16} /> : <CopyIcon size={16} />}
          </Button>
        </div>
      </CodeBlock>
    </div>
  );
}

export function BashShell({ code, highlight = [] }: { code: string; highlight?: string[] }) {
  const [copied, setCopied] = useState(false);

  function copyToClipboard() {
    try {
      navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error(err);
      setCopied(false);
    }
  }
  return (
    <CodeBlock code={code} language={'bash'} theme={themes.oneDark} words={highlight}>
      <div className="relative py-3">
        <CodeBlock.Code className="overflow-x-auto rounded-xl border bg-[#0f1117] p-2 px-4 shadow-md">
          {({ isLineHighlighted }) => (
            <div className={`table-row ${isLineHighlighted ? 'bg-[#141926]' : ''}`}>
              <div
                className={`table-cell select-none pr-3 text-right text-sm ${
                  isLineHighlighted ? 'border-l-2 border-l-blue-500 text-gray-300' : ''
                }`}
              >
                $
              </div>
              <CodeBlock.LineContent>
                <CodeBlock.Token>
                  {({ isTokenHighlighted, children }) => (
                    <span
                      className={
                        isTokenHighlighted ? 'font-semibold text-secondary-foreground' : ''
                      }
                    >
                      {children}
                    </span>
                  )}
                </CodeBlock.Token>
              </CodeBlock.LineContent>
            </div>
          )}
        </CodeBlock.Code>
        <Button
          size="sm"
          variant="outline"
          onClick={copyToClipboard}
          className="absolute right-1.5 top-[1.2rem] h-auto p-1"
        >
          {copied ? <CheckIcon size={14} /> : <CopyIcon size={14} />}
        </Button>
      </div>
    </CodeBlock>
  );
}

export function Output({ code }: { code: string }) {
  return (
    <CodeBlock code={code} language={'bash'} theme={themes.oneDark}>
      <div className="pb-3">
        <CodeBlock.Code className="w-full overflow-x-auto rounded-xl border p-2 px-4 py-3 shadow-lg">
          <CodeBlock.LineContent className="w-fit">
            <CodeBlock.Token />
          </CodeBlock.LineContent>
        </CodeBlock.Code>
      </div>
    </CodeBlock>
  );
}
