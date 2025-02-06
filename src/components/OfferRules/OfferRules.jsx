import React from 'react'
import EligibilityCriteria from '../EligibilityCriteria/EligibilityCriteria'
import './offerrules.css'

const OfferRules = () => {
  return (
    <div className='rounded-lg'>
        <p className='header-title font-semibold'>Rules</p>
        <p className='header-content font-medium'>The Offer will be triggered based on the rules in this section</p>
        <p className='p-1 pl-6 pb-2 pt-4 text-sm font-medium'>Show offer if</p>
    </div>
  )
}

export default OfferRules