import React from "react";
import FilterTicket from "../filterTickets/filterTickets";
import TicketsList from "../ticketsList/ticketsList";
import Logo from "./Logo.png"
import "./App.scss"

const App = () => {


    return (
        <div className="aviasales">
            <img className="logo" src={Logo} alt="logo"/>
            <div className="wrapper">
                <FilterTicket />
                <div className="wrapper__item">
                    <header className="header">
                        <div className="header__filters">
                            <span className="header__filters__item">САМЫЙ ДЕШЁВЫЙ</span>
                            <span className="header__filters__item">САМЫЙ БЫСТРЫЙ</span>
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