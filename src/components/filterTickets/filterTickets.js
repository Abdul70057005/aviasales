import React from 'react'
import { Checkbox } from 'antd'
import './filterTickets.scss'
import { useDispatch, useSelector } from 'react-redux'

import { toggleCheckbox, toggleAllCheckboxes } from '../../store/actions'

const FilterTicket = () => {
  const dispatch = useDispatch()
  const checkboxes = useSelector((state) => state.checkboxReducer.checkboxes)
  const allChecked = useSelector((state) => state.checkboxReducer.allChecked)

  const handleToggleAll = () => {
    dispatch(toggleAllCheckboxes())
  }

  const handleToggleCheckbox = (box) => {
    dispatch(toggleCheckbox(box))
  }

  return (
    <aside className="aside">
      <span className="aside__header">КОЛИЧЕСТВО ПЕРЕСАДОК</span>
      <Checkbox onChange={handleToggleAll} checked={allChecked}>
        Все
      </Checkbox>
      <Checkbox onChange={() => handleToggleCheckbox(checkboxes[0].id)} checked={checkboxes[0].checked}>
        Без пересадок
      </Checkbox>
      <Checkbox onChange={() => handleToggleCheckbox(checkboxes[1].id)} checked={checkboxes[1].checked}>
        1 пересадка
      </Checkbox>
      <Checkbox onChange={() => handleToggleCheckbox(checkboxes[2].id)} checked={checkboxes[2].checked}>
        2 пересадки
      </Checkbox>
      <Checkbox onChange={() => handleToggleCheckbox(checkboxes[3].id)} checked={checkboxes[3].checked}>
        3 пересадки
      </Checkbox>
    </aside>
  )
}

export default FilterTicket
