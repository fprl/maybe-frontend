import PropTypes from 'prop-types'
import { Disclosure, Transition } from '@headlessui/react'

import Icon from './icon/Icon'

const Main = ({ tips }) => {
  return (
    <main className="flex justify-center w-full">
      <ul className="flex flex-col max-w-xl gap-y-4">
        {tips.map(tip => {
          return (
            <li key={tip.title} className="flex flex-col px-6 py-8 bg-gray-900 rounded-3xl gap-y-4">
              <Disclosure>
                {({ open }) => (
                  <>
                    <h3>
                      <Disclosure.Button className="grid items-center w-full rounded-lg grid-cols-tips gap-x-4 hover:bg-gray-700 focus:outline-none focus:ring-gray focus:ring-1 focus:ring-opacity-85">
                        <Icon type={tip.type} />
                        <span className="col-start-2 col-end-3 font-semibold text-left justify-self-start font-generalsans">{tip.title}</span>
                        <Icon open={open} />
                      </Disclosure.Button>
                    </h3>
                    <Transition
                      enter="transition duration-500 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-500 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="grid w-full grid-cols-tips gap-x-4">
                        <p className="col-start-2 col-end-3 text-white justify-self-start text-opacity-80">
                          {tip.description}
                        </p>
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            </li>
          )
        })}
      </ul>
    </main>
  )
}

Main.propTypes = {
  tips: PropTypes.array
}

export default Main
