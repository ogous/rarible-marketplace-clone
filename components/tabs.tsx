import { Tab } from '@headlessui/react'
import NoteInput from './ER721Form'
import FileInput from './ER1155Form'

export default function Tabs() {
  const tabClasses =
    'ui-selected:bg-primary text-white px-8 py-3 ui-selected:rounded-sm hover:bg-primary hover:bg-opacity-10'

  return (
    <div className="w-full max-w-lg">
      <Tab.Group>
        <Tab.List
          className={'flex items-center justify-center bg-white bg-opacity-5'}
        >
          <Tab className={tabClasses}>Notes</Tab>
          <Tab className={tabClasses}>Files</Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <NoteInput />
          </Tab.Panel>
          <Tab.Panel>
            <FileInput />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
