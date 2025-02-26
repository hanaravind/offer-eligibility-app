import React, { useRef, useState } from 'react'
import { useEffect } from 'react'
import { offerRulesData, priorityOrderRules } from '../../constants/mock/eligibilityData'
import BorderLineUI from '../../shared/components/UI/BorderLineUI'
import './eligibility.css'
import XIcon from '../../assets/x-icon-monk.svg';
import DropdownIcon from '../../assets/dropdown-icon.svg'
import SearchIcon from '../../assets/search-icon.png'
import { Button } from '../../shared/components/Form/Button'
import Checkbox from '../../shared/components/Form/Checkbox'
import FacetChip from '../../shared/components/UI/FacetChip'
import SelectDropdown from '../../shared/components/Form/SelectDropdown'
import DeleteIcon from '../../shared/components/UI/DeleteIcon'
import SelectOption from '../../shared/components/Form/SelectOption'
import RangeInput from '../../shared/components/Form/RangeInput'

const EligibilityCriteria = () => {
    const [offerIndex, setOfferIndex] = useState(0)
    const [ruleData] = useState(offerRulesData)
    const [focusedIndex, setFocusedIndex] = useState(null);
    const inputRefs = useRef([]); // To manage focus on each input
    const [offers, setOffers] = useState([
        {
            priority: priorityOrderRules[offerIndex]?.priority,
            attribute_type: priorityOrderRules[offerIndex]?.rule_name,
            rule: ruleData[priorityOrderRules[offerIndex]?.rule_name]?.rule_options[0].value,
            values: []
        }])

    const handleAddRules = () => {
        if (offers.length == priorityOrderRules.length || offers[offers.length - 1]?.priority === 5) {
            return
        }
        const getRuleIndex = offers[offers.length - 1]?.priority + 1
        priorityOrderRules[getRuleIndex]['disabled'] = true
        setOfferIndex(prev => prev + 1)
        setOffers([
            ...offers,
            {
                priority: getRuleIndex,
                attribute_type: priorityOrderRules[getRuleIndex]?.rule_name,
                rule: ruleData[priorityOrderRules[getRuleIndex].rule_name]?.rule_options[0].value,
                values: [],
            }])
    }

    const handleOfferRule = (event, ruleIndex) => {
        const order = Number(event.target[event.target.selectedIndex].getAttribute('data-rules'))
        priorityOrderRules[order]['disabled'] = true
        setOffers(offers.map((rule, pointerIndex) => {
            if (pointerIndex == ruleIndex) {
                priorityOrderRules[rule.priority]['disabled'] = false
                rule.priority = priorityOrderRules[order].priority
                rule.attribute_type = priorityOrderRules[order].rule_name

            }
            return rule
        }).sort((a, b) => a?.priority - b?.priority))
    }

    const deleteHandler = (priority) => {
        priorityOrderRules[priority]['disabled'] = false
        setOffers(offers.filter((rule) => rule?.priority !== priority))
    }

    // Handle clicking outside to close dropdown
    const handleClickOutside = (e) => {
        if (!inputRefs.current.some((ref) => ref && ref.contains(e.target)) && !['LI', 'UL'].includes(e.target.parentElement.tagName)) {
            setFocusedIndex(null);
        }
    };

    /** handle checkbox event for selection of facet values on rules */
    const selectValueCheck = (event, attribute) => {
        const obj = { value: event.target.value, attribute }
        if (event.target.checked) {
            setOffers(offers.map(offer =>
                offer.attribute_type === attribute ? { ...offer, values: [...offer.values, obj] } : offer
            ))
        } else {
            setOffers(offers.map(offer =>
                offer.attribute_type === attribute ? { ...offer, values: offer.values.filter((data) => data.value !== event.target.value) } : offer
            ))
        }
    }

    /** control handler for deletion of facet chip  */
    const deleteChip = (facet) => {
        setOffers(offers.map(offer =>
            offer.attribute_type === facet.attribute ? {
                ...offer,
                values: offer.values.filter((data) => data.value !== facet.value)
            } : offer
        ))
    }

    const handleSpecificRules = (event, ruleInd) => {
        const getRule = ruleData[offers[ruleInd].attribute_type]
        const exclusiveRule = ruleData[getRule.isExclusiveTo]
        if(exclusiveRule) {
            exclusiveRule?.rule_options.map((option) => {
                if(option.value === event.target.value) {
                    option.selected = true
                } else {
                    option.selected = false
                }
                return option
            })
            const filterSelected = exclusiveRule?.rule_options.filter((option) => option.selected)
            const filterUnSelected = exclusiveRule?.rule_options.filter((option) => !option.selected)
            exclusiveRule.rule_options = [...filterUnSelected, ...filterSelected]
        }
        setOffers(offers.map((offer) => 
        offer.attribute_type == offers[ruleInd].attribute_type ? {
            ...offer,
            rule: event.target.value
        }: offer))
    }

    // Attach event listener to detect clicks outside
    useEffect(() => {
        priorityOrderRules[offerIndex]['disabled'] = true
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    console.log('offers', offers)

  return (
    <div className='eligibility-criteria-container'>
          {offers.map((offer, i) => {
            const ruleOptions =  ruleData[offer?.attribute_type]
          return <div key={offer?.priority} className="relative"> 
          <div className={`rules-container relative left-[27px] pr-5 ${i !== 0 ? 'pt-[46px]' : 'pt-0'}`}>
              {i > 0 && <BorderLineUI />}
                <div className='relative flex-grow'>
                    <SelectDropdown containerStyle={`select-dropdown-rules text-sm `} onChange={(e) => handleOfferRule(e, i)} defaultValue={offer?.attribute_type} >
                        {priorityOrderRules.map((rule, priorityIndex) => 
                        <SelectOption 
                            key={priorityIndex}
                            value={rule?.rule_name}
                            data-rules={rule?.priority}
                            disabled={offer?.priority !== rule?.priority ? rule?.disabled : false}
                            label={rule?.label}/>
                        )}
                    </SelectDropdown>
                </div>
              {ruleOptions?.rule_options && <div className='relative flex-grow'>
                    <SelectDropdown containerStyle={`w-full select-dropdown-rule text-sm`} onChange={(e) => handleSpecificRules(e, i)}>
                    {ruleOptions.rule_options?.map((option, ruleIndex) =>
                        <SelectOption
                            key={ruleIndex}
                            value={option?.value}
                            disabled={option.selected}
                            label={option?.name}/>)}
                    </SelectDropdown>
              </div>}

              {ruleOptions?.data && ruleOptions.data.length !== 0 && <div className='select-rule-values relative'>
                  <input ref={(el) => (inputRefs.current[i] = el)} type={'text'} className={`search-rule-value h-7 indent-7 text-sm placeholder:text-black`} onFocus={() => setFocusedIndex(i)} placeholder={`search ${offer.attribute_type.split('-')[1]}`} />
                  <span className='absolute top-2 right-2 text-sm'>{offer?.values.length}/{ruleOptions?.data.length}</span>
                  <img src={SearchIcon} className="absolute top-[9px] left-1.5 w-5 h-5" />
                  {focusedIndex == i && <ul className='search-rule-list'>
                      {ruleOptions?.data?.map((value, i) => <li className='flex items-center gap-1.5 hover:bg-[#ececec] hover:rounded-md my-1 mx-2 px-1 py-1.5' key={i}>
                        <Checkbox 
                            checked={offer?.values.map(el => el.value).includes(value)} 
                            value={value}
                            className={'search-rule-checkbox'}
                            name={offer.attribute_type.split('-')[1]}
                            onChange={(e) => selectValueCheck(e, offer?.attribute_type)}
                        />
                      </li>)}
                  </ul>}
              </div>}

            {offer?.attribute_type === 'cart-value-range' ? 
                <RangeInput min={0} max={200} />
            : null}

            {offers.length > 1 && 
                <DeleteIcon 
                    containerStyle={'flex items-center'} 
                    icon={XIcon} 
                    onClick={() => deleteHandler(offer.priority)}
                />}
            </div>

            {offer?.values.length !== 0 && <div className={`flex absolute left-[30px] gap-2 z-[1] ${i !== 0 ? 'top-[90px]' : `top-[45px]`}`}>
                {offer?.values?.map((value) => <FacetChip data={value} key={value.value} onClick={(value) => deleteChip(value)} />)}
            </div>}

          </div>}
          )}
          <div className='and-btn-container pt-4'>
            <Button 
                className="and-btn cursor-pointer text-sm shadow border border-[#e7e7e7] p-2 px-3 rounded-[4px]"
                onClick={handleAddRules}>
                + AND
            </Button>
          </div>
    </div>
  )
}

export default EligibilityCriteria
