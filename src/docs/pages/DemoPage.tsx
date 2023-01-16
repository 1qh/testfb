import { Card } from "flowbite-react"
import type { FC, ReactNode } from "react"
import type { Options } from "react-element-to-jsx-string"
import reactElementToJSXString from "react-element-to-jsx-string"


export type CodeExample = {
  title: string
  content?: ReactNode
  code: ReactNode
  rawCode?: string
  showCode?: boolean
  codeClassName?: string
  codeStringifierOptions?: Options
}

export type DemoPageProps = {
  examples: CodeExample[]
}

export const DemoPage: FC<DemoPageProps> = ({ examples }) => {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-8 dark:text-white">
      {examples.map(
        (
          {
            title,
            content,
            code,
            rawCode,
            showCode = true,
            codeClassName,
            codeStringifierOptions,
          },
          index
        ) => (
          <div key={index} className="flex flex-col gap-2">
            <span className="text-2xl font-bold">{title}</span>
            {content && <div className="py-4">{content}</div>}
            <div className={codeClassName}>
              <Card>
                {showCode && code}
                  {rawCode ||
                    reactElementToJSXString(code, {
                      showFunctions: true,
                      functionValue: (fn) => fn.name,
                      sortProps: false,
                      useBooleanShorthandSyntax: false,
                      useFragmentShortSyntax: false,
                      ...codeStringifierOptions,
                    })}
              </Card>
            </div>
          </div>
        )
      )}
    </div>
  )
}
