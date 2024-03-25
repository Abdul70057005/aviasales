import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { toggleCheapest, toggleFastest, toggleValue } from '../../store/actions'
import FilterTicket from '../filterTickets/filterTickets'
import TicketsList from '../ticketsList/ticketsList'

import Logo from './Logo.png'

import './App.scss'

const App = () => {
  const dispatch = useDispatch()
  const cheapest = useSelector((state) => state.sortReducer.cheapest)
  const fastest = useSelector((state) => state.sortReducer.fastest)
  const tickets = useSelector((state) => state.getSearchId.tickets)

  let classNameCheapest = 'header__filters__item'
  let classNameFastest = 'header__filters__item'

  if (cheapest) {
    classNameCheapest += '--hover__cheapest'
  }
  if (fastest) {
    classNameFastest += '--hover__fastest'
  }

  const handleCheapest = () => {
    dispatch(toggleCheapest(tickets))
  }

  const handleFastest = () => {
    dispatch(toggleFastest(tickets))
  }

  const handleValue = () => {
    dispatch(toggleValue())
  }

  return (
    <div className="aviasales">
      <img className="logo" src={Logo} alt="logo" />
      <div className="wrapper">
        <section className="section">
          <div className="filterTicket">
            <FilterTicket />
          </div>
          <div className="header__main">
            <div className="header__filters">
              <span className={classNameCheapest} onClick={handleCheapest}>
                САМЫЙ ДЕШЁВЫЙ
              </span>
              <span className={classNameFastest} onClick={handleFastest}>
                САМЫЙ БЫСТРЫЙ
              </span>
              <span className="header__filters__item">ОПТИМАЛЬНЫЙ</span>
            </div>
            <div>
              <TicketsList />
              <div className="wrapper__button">
                <button className="button" onClick={handleValue}>
                  ПОКАЗАТЬ ЕЩЁ 5 БИЛЕТОВ!
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
