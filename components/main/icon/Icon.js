import PropTypes from 'prop-types'

import ChevronDown from '../../../public/icons/chevron-down.svg'
import Estate from '../../../public/icons/estate.svg'
import Medical from '../../../public/icons/medical.svg'
import Retirement from '../../../public/icons/retirement.svg'
import Savings from '../../../public/icons/savings.svg'


const Icon = ({ type, open }) => {
  if (type === 'estate') {
    return <span className="flex items-center justify-center rounded-lg bg-teal bg-opacity-10 w-9 h-9">
      <Estate />
    </span>
  }
  if (type === 'medical') {
    return <span className="flex items-center justify-center rounded-lg bg-yellow bg-opacity-10 w-9 h-9">
      <Medical />
    </span>
  }
  if (type === 'retirement') {
    return <span className="flex items-center justify-center rounded-lg bg-orange bg-opacity-10 w-9 h-9">
      <Retirement />
    </span>
  }
  if (type === 'savings') {
    return <span className="flex items-center justify-center rounded-lg bg-pink bg-opacity-10 w-9 h-9">
      <Savings />
    </span>
  }

  return <ChevronDown className={`${open ? 'transform rotate-180' : ''} justify-self-end`} />
}

Icon.propTypes = {
  type: PropTypes.string
}

export default Icon
