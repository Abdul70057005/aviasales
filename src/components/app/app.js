import React from "react";
import FilterTicket from "../filterTickets/filterTickets";
import TicketsList from "../ticketsList/ticketsList";
import Logo from "./Logo.png"
import "./App.scss"
import { useDispatch, useSelector } from "react-redux";
import { toggleCheapest, toggleFastest } from "../../store/actions";

const App = () => {
    const dispatch = useDispatch()
    const cheapest = useSelector(state => state.sortReducer.cheapest)
    const fastest = useSelector(state => state.sortReducer.fastest)
    let classNameCheapest = "header__filters__item"
    let classNameFastest  = "header__filters__item"
    console.log(cheapest)
    console.log(fastest)

    if(cheapest) {
        classNameCheapest += "--hover__cheapest"
    }
    if(fastest) {
        classNameFastest += "--hover__fastest"
    }

    const handleCheapest = () => {
        dispatch(toggleCheapest())
    }

    const handleFastest = () => {
        dispatch(toggleFastest())
    }

    return (
        <div className="aviasales">
            <img className="logo" src={Logo} alt="logo"/>
            <div className="wrapper">
                <FilterTicket />
                <div className="wrapper__item">
                    <header className="header">
                        <div className="header__filters">
                            <span className={classNameCheapest} onClick={handleCheapest}>САМЫЙ ДЕШЁВЫЙ</span>
                            <span className={classNameFastest} onClick={handleFastest}>САМЫЙ БЫСТРЫЙ</span>
                            <span className="header__filters__item">ОПТИМАЛЬНЫЙ</span>
                        </div>
                    </header>
                    <TicketsList />
                    <button className="button">ПОКАЗАТЬ ЕЩЁ 5 БИЛЕТОВ!</button>
                </div>
            </div>
        </div>
    )
}

export default App