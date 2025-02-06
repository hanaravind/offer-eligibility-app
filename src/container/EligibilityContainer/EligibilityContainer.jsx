import React from 'react'
import EligibilityCriteria from '../../components/EligibilityCriteria/EligibilityCriteria'
import OfferRules from '../../components/OfferRules/OfferRules'

const EligibilityContainer = () => {
  return (
    <div className='offer-rule-container rounded-lg'>
        <OfferRules />
        <EligibilityCriteria />
    </div>
  )
}

export default EligibilityContainer