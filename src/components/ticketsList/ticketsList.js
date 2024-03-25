import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Spin, Alert } from 'antd'
import './ticketsList.scss'
import { addHours, addMinutes } from 'date-fns'

import { searchIdsLoad, ticketsLoad } from '../../store/actions.js'

const TicketsList = () => {
  const dispatch = useDispatch()
  const sId = useSelector((state) => state.getSearchId.searchId)
  const tickets = useSelector((state) => state.getSearchId.tickets)
  const stop = useSelector((state) => state.getSearchId.stop)
  const cheapest = useSelector((state) => state.sortReducer.cheapest)
  const fastest = useSelector((state) => state.sortReducer.fastest)
  const sortTickets = useSelector((state) => state.sortReducer.sortTickets)
  const checkboxes = useSelector((state) => state.checkboxReducer.checkboxes)
  const buttonValue = useSelector((state) => state.getSearchId.buttonValue)
  const allChecked = useSelector((state) => state.checkboxReducer.allChecked)
  let filterTickets
  let a = tickets.slice(0, buttonValue)

  useEffect(() => {
    dispatch(searchIdsLoad())
  }, [])

  useEffect(() => {
    if (sId) {
      dispatch(ticketsLoad(sId))
    }
  }, [sId])

  const durationTime = (mins) => {
    let hours = Math.trunc(mins / 60)
    let minutes = mins % 60
    return hours + 'ч ' + minutes + 'м'
  }

  const stopsLength = (stops) => {
    if (stops < 1) {
      return 'ПЕРАСАДОК'
    }
    if (stops < 2) {
      return 'ПЕРЕСАДКА'
    }
    return 'ПЕРЕСАДКИ'
  }

  if (cheapest) {
    a = sortTickets.slice(0, buttonValue)
  }
  if (fastest) {
    a = sortTickets.slice(0, buttonValue)
  }

  if (checkboxes[0].checked || checkboxes[1].checked || checkboxes[2].checked || checkboxes[3].checked || allChecked) {
    if (cheapest || fastest) {
      filterTickets = sortTickets
    }
    if (!cheapest && !fastest) {
      filterTickets = tickets
    }
    filterTickets = filterTickets.filter((e) => {
      if (checkboxes[0].checked && e.segments[0].stops.length === 0 && e.segments[1].stops.length === 0) {
        return e
      }
      if (checkboxes[1].checked && e.segments[0].stops.length === 1 && e.segments[1].stops.length === 1) {
        return e
      }
      if (checkboxes[2].checked && e.segments[0].stops.length === 2 && e.segments[1].stops.length === 2) {
        return e
      }
      if (checkboxes[3].checked && e.segments[0].stops.length === 3 && e.segments[1].stops.length === 3) {
        return e
      }
      if (allChecked) {
        return e
      }
    })
    a = filterTickets.slice(0, buttonValue)
  }

  let dataTickets = a.map((e, i) => {
    let origin = e.segments.map((el) => el.origin)
    let destination = e.segments.map((el) => el.destination)
    let duration = e.segments.map((el) => el.duration)
    let stops = e.segments.map((el) => el.stops)
    //Time прилет вылет 1
    let date = e.segments.map((el) => el.date)
    let timeVulet = `${new Date(date[0]).getHours().toString().padStart(2, '0')}:${new Date(date[0]).getMinutes().toString().padStart(2, '0')}`
    let hours = addHours(new Date(date[0]), Math.trunc(duration[0] / 60))
    let timePrilet = addMinutes(new Date(hours), duration[0] % 60)
    let prilet = `${new Date(timePrilet).getHours().toString().padStart(2, '0')}:${new Date(timePrilet).getMinutes().toString().padStart(2, '0')}`
    // time прилет вылет 2
    let timeVulet2 = `${new Date(date[1]).getHours().toString().padStart(2, '0')}:${new Date(date[1]).getMinutes().toString().padStart(2, '0')}`
    let hours2 = addHours(new Date(date[1]), Math.trunc(duration[1] / 60))
    let timePrilet2 = addMinutes(new Date(hours2), duration[1] % 60)
    let prilet2 = `${new Date(timePrilet2).getHours().toString().padStart(2, '0')}:${new Date(timePrilet2).getMinutes().toString().padStart(2, '0')}`
    return (
      <li key={i} className="li">
        <div className="li__header">
          <span className="li__header__price">{e.price}</span>
          <img src={`//pics.avs.io/99/36/${e.carrier}.png`} alt="s7Logo" />
        </div>
        <div className="li__main">
          <div className="li__main__item">
            <div className="li__main__item__span">
              <span className="li__main__item__span--color">{`${origin[0]}-${destination[0]}`}</span>
              <span>
                {timeVulet} - {prilet}
              </span>
            </div>
            <div className="li__main__item__span">
              <span className="li__main__item__span--color">В ПУТИ</span>
              <span>{durationTime(duration[0])}</span>
            </div>
            <div className="li__main__item__span">
              <span className="li__main__item__span--color">{`${stops[0].length} ${stopsLength(stops[0].length)}`}</span>
              <span>{stops[0].join(', ')}</span>
            </div>
          </div>
          <div className="li__main__item">
            <div className="li__main__item__span">
              <span className="li__main__item__span--color">{`${origin[1]}-${destination[1]}`}</span>
              <span>
                {timeVulet2} - {prilet2}
              </span>
            </div>
            <div className="li__main__item__span">
              <span className="li__main__item__span--color">В ПУТИ</span>
              <span>{durationTime(duration[1])}</span>
            </div>
            <div className="li__main__item__span">
              <span className="li__main__item__span--color">{`${stops[1].length} ${stopsLength(stops[1].length)}`}</span>
              <span>{stops[1].join(', ')}</span>
            </div>
          </div>
        </div>
      </li>
    )
  })

  if (
    checkboxes[0].checked === false &&
    checkboxes[1].checked === false &&
    checkboxes[2].checked === false &&
    checkboxes[3].checked === false &&
    allChecked === false
  ) {
    return (
      <ul className="ul message">
        <Alert message="Рейсов, подходящих под заданные фильтры, не найдено" type="error" />
      </ul>
    )
  }

  return (
    <ul className="ul">
      {!stop ? <Spin className="loading" /> : <div></div>}
      {dataTickets}
    </ul>
  )
}

export default TicketsList
