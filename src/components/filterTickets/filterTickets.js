import React from "react";
import { Checkbox } from 'antd';
import "./filterTickets.scss"

const FilterTicket = () => {
    const onChange = (e) => {
        return (e.target.checked);
      };
    return (
        <aside className="aside">
            <span className="aside__header">КОЛИЧЕСТВО ПЕРЕСАДОК</span>
            <Checkbox onChange={onChange}>Все</Checkbox>
            <Checkbox onChange={onChange}>Без пересадок</Checkbox>
            <Checkbox onChange={onChange}>1 пересадка</Checkbox>
            <Checkbox onChange={onChange}>2 пересадки</Checkbox>
            <Checkbox onChange={onChange}>3 пересадки</Checkbox>
        </aside>
    )
}

export default FilterTicket