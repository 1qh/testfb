import { Alert, Card, DarkThemeToggle, Flowbite } from 'flowbite-react'
import type { FC } from "react"
import reactElementToJSXString from "react-element-to-jsx-string"
import { HiInformationCircle } from "react-icons/hi"

const ThemePage: FC = () => {


  return (
    <div className="flex flex-col max-w-4xl gap-8 mx-auto dark:text-white">
      <div className="flex flex-col gap-2">
        <span className="text-2xl font-bold">Theme</span>
        <div className="py-4">
          <Alert color="yellow" icon={HiInformationCircle}>
            This feature is highly experimental. In the future, it could be
            deprecated or even suffer several changes.
          </Alert>
          <p className="mt-4">
            Sometimes you want to give your web application a little more
            personality and customize some aspects of Flowbite. This is possible
            thanks to the support we offer for themes. To use our theme support,
            your application needs to be surrounded by the Flowbite component,
            and you must tell this component which theme you want to load for
            your application.
          </p>
        </div>
      </div>
      <span className="text-xl font-bold">Switch to dark theme</span>
      <p>
        Since the Flowbite component creates and context to manage the theme, it
        also enables your application to use the{" "}
        <strong>DarkThemeToggle</strong> component.
      </p>
      <Card>
          {reactElementToJSXString(
            <Flowbite>
              <DarkThemeToggle />
            </Flowbite>,
            {
              showFunctions: true,
              functionValue: (fn) => fn.name,
              sortProps: false,
              useBooleanShorthandSyntax: false,
              useFragmentShortSyntax: false,
            }
          )}
      </Card>
      <span className="text-xl font-bold">Get the theme</span>
      <p>
        For more customizations, there is the possibility to get the theme with
        the <strong>useTheme</strong> hook and its mode with the{" "}
        <strong>useThemeMode</strong> hook.
      </p>
    </div>
  )
}

export default ThemePage
