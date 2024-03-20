import React, { useEffect } from "react";
import "./ticketsList.scss"
import { useDispatch, useSelector } from "react-redux";
import { searchIdsLoad, ticketsLoad } from "../../store/actions";
import { addHours, addMinutes } from 'date-fns'

const TicketsList = () => {
    const dispatch = useDispatch()
    const sId = useSelector(state => state.getSearchId.searchId)    
    const tickets = useSelector(state => state.getSearchId.tickets)
    const stop = useSelector(state => state.getSearchId.stop)
    console.log(sId)
    console.log(tickets)
    console.log(stop)
    
    useEffect(() => {
        dispatch(searchIdsLoad())
    }, [])

    useEffect(() => {
        if(sId) {
            dispatch(ticketsLoad(sId))
        }
    }, [sId])

    const durationTime = (mins) => {
        let hours = Math.trunc(mins/60)
        let minutes = mins % 60
        return hours + 'ч ' + minutes + 'м'
    }

    const stopsLength = (stops) => {
        if(stops < 1) {
            return 'ПЕРАСАДОК'
        }
        if(stops < 2) {
            return 'ПЕРЕСАДКА'
        }
        return 'ПЕРЕСАДКИ'
    }

    let a = tickets.slice(0, 5)

    let dataTickets = a.map(e => {
        let origin = e.segments.map(el => el.origin)
        let destination = e.segments.map(el => el.destination)
        let duration = e.segments.map(el => el.duration)
        let stops = e.segments.map(el => el.stops)
        //Time прилет вылет 1
        let date = e.segments.map(el => el.date)
        let timeVulet = `${(new Date(date[0]).getHours()).toString().padStart(2, '0')}:${(new Date(date[0]).getMinutes()).toString().padStart(2, '0')}`
        let hours = addHours(new Date(date[0]), Math.trunc(duration[0]/60))
        let timePrilet = addMinutes(new Date(hours), duration[0] % 60)
        let prilet = `${(new Date(timePrilet).getHours()).toString().padStart(2, '0')}:${(new Date(timePrilet).getMinutes()).toString().padStart(2, '0')}`
        // time прилет вылет 2
        let timeVulet2 = `${(new Date(date[1]).getHours()).toString().padStart(2, '0')}:${(new Date(date[1]).getMinutes()).toString().padStart(2, '0')}`
        let hours2 = addHours(new Date(date[1]), Math.trunc(duration[1]/60))
        let timePrilet2 = addMinutes(new Date(hours2), duration[1] % 60)
        let prilet2 = `${(new Date(timePrilet2).getHours()).toString().padStart(2, '0')}:${(new Date(timePrilet2).getMinutes()).toString().padStart(2, '0')}`
        return (
            <li className="li">
                <div className="li__header">
                    <span className="li__header__price">{e.price}</span>
                    <img src={`//pics.avs.io/99/36/${e.carrier}.png`} alt="s7Logo" />
                </div>
                <div className="li__main">
                    <div className="li__main__item">
                        <div className="li__main__item__span">
                            <span className="li__main__item__span--color">{`${origin[0]}-${destination[0]}`}</span>
                            <span>{timeVulet} - {prilet}</span>
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
                            <span>{timeVulet2} - {prilet2}</span>
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
            

    return (
        <ul className="ul">
            {dataTickets}
        </ul>
    )
            
       
}

export default TicketsList