import { Button, Tabs } from "flowbite-react"
import { FC, useState } from "react"
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi"
import { MdDashboard } from "react-icons/md"
import type { CodeExample } from "./DemoPage"
import { DemoPage } from "./DemoPage"

const TabsPage: FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0)

  const examples: CodeExample[] = [
    {
      title: "Default tabs",
      code: (
        <Tabs.Group aria-label="Default tabs" style="default">
          <Tabs.Item active title="Profile">
            Profile content
          </Tabs.Item>
          <Tabs.Item title="Dashboard">Dashboard content</Tabs.Item>
          <Tabs.Item title="Settings">Settings content</Tabs.Item>
          <Tabs.Item title="Contacts">Contacts content</Tabs.Item>
          <Tabs.Item disabled title="Disabled">
            Disabled content
          </Tabs.Item>
        </Tabs.Group>
      ),
      codeClassName: "dark:!bg-gray-900",
    },
    {
      title: "Tabs with underline",
      code: (
        <Tabs.Group aria-label="Tabs with underline" style="underline">
          <Tabs.Item title="Profile">Profile content</Tabs.Item>
          <Tabs.Item active title="Dashboard">
            Dashboard content
          </Tabs.Item>
          <Tabs.Item title="Settings">Settings content</Tabs.Item>
          <Tabs.Item title="Contacts">Contacts content</Tabs.Item>
          <Tabs.Item disabled title="Disabled">
            Disabled content
          </Tabs.Item>
        </Tabs.Group>
      ),
      codeClassName: "dark:!bg-gray-900",
    },
    {
      title: "Tabs with icons",
      code: (
        <Tabs.Group aria-label="Tabs with icons" style="underline">
          <Tabs.Item title="Profile" icon={HiUserCircle}>
            Profile content
          </Tabs.Item>
          <Tabs.Item active title="Dashboard" icon={MdDashboard}>
            Dashboard content
          </Tabs.Item>
          <Tabs.Item title="Settings" icon={HiAdjustments}>
            Settings content
          </Tabs.Item>
          <Tabs.Item title="Contacts" icon={HiClipboardList}>
            Contacts content
          </Tabs.Item>
          <Tabs.Item disabled title="Disabled">
            Disabled content
          </Tabs.Item>
        </Tabs.Group>
      ),
      codeClassName: "dark:!bg-gray-900",
    },
    {
      title: "Pills tabs",
      code: (
        <Tabs.Group aria-label="Pills" style="pills">
          <Tabs.Item active title="Tab 1">
            Content 1
          </Tabs.Item>
          <Tabs.Item title="Tab 2">Content 2</Tabs.Item>
          <Tabs.Item title="Tab 3">Content 3</Tabs.Item>
          <Tabs.Item title="Tab 4">Content 4</Tabs.Item>
          <Tabs.Item disabled title="Tab 5">
            Content 5
          </Tabs.Item>
        </Tabs.Group>
      ),
      codeClassName: "dark:!bg-gray-900",
    },
    {
      title: "Full width tabs",
      code: (
        <Tabs.Group aria-label="Full width tabs" style="fullWidth">
          <Tabs.Item title="Profile">Profile content</Tabs.Item>
          <Tabs.Item title="Dashboard">Dashboard content</Tabs.Item>
          <Tabs.Item title="Settings">Settings content</Tabs.Item>
          <Tabs.Item title="Invoice">Invoice content</Tabs.Item>
        </Tabs.Group>
      ),
      codeClassName: "dark:!bg-gray-900",
    },
    {
      title: "Set active tab programmatically",
      code: (
        <>
          <Tabs.Group
            aria-label="Default tabs"
            style="default"
          >
            <Tabs.Item active title="Profile">
              Profile content
            </Tabs.Item>
            <Tabs.Item title="Dashboard">Dashboard content</Tabs.Item>
            <Tabs.Item title="Settings">Settings content</Tabs.Item>
            <Tabs.Item title="Contacts">Contacts content</Tabs.Item>
          </Tabs.Group>
          <div>Active tab: {activeTab}</div>
          <Button.Group>
            <Button
              color="gray"
            >
              Profile
            </Button>
            <Button
              color="gray"
            >
              Dashboard
            </Button>
            <Button
              color="gray"
            >
              Settings
            </Button>
            <Button
              color="gray"
            >
              Contacts
            </Button>
          </Button.Group>
        </>
      ),
      rawCode: `const Tabs: FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0)

  return (
    <>
      <Tabs.Group
        aria-label="Default tabs"
        style="default"
        onActiveTabChange={tab => setActiveTab(tab)}
      >
        <Tabs.Item active title="Profile">
          Profile content
        </Tabs.Item>
        <Tabs.Item title="Dashboard">Dashboard content</Tabs.Item>
        <Tabs.Item title="Settings">Settings content</Tabs.Item>
        <Tabs.Item title="Contacts">Contacts content</Tabs.Item>
      </Tabs.Group>
      <div>Active tab: {activeTab}</div>
      <Button.Group>
          Profile
        </Button>
          Dashboard
        </Button>
          Settings
        </Button>
          Contacts
        </Button>
      </Button.Group>
    </>
  )
}`,
      codeClassName: "dark:!bg-gray-900",
    },
  ]
  return <DemoPage examples={examples} />
}
export default TabsPage
