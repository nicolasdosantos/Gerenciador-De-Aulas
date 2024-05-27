import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';

import NavBar from "../components/NavBar";
import style5 from '../components/Calendario.module.css'

// feriados do Brasil
import Hd from 'date-holidays';

// Função para obter os feriados do Brasil
function getBrazilianHolidays(year) {
    const hd = new Hd('BR');
    const holidays = hd.getHolidays(year);

    return holidays.map(holiday => ({
        title: holiday.name,
        date: holiday.date,
        allDay: true
    }));
}

function Calendario() {

    // Obtenha os feriados para o ano desejado
    const events = getBrazilianHolidays(2024);

    return (
        <div className={style5.calendario}>
            <NavBar />
            <div className={style5.content}>
                <h1 style={{fontSize: '40px'}}>Calendario: </h1>

                <div className={style5.calendarContainer}>
                    <FullCalendar
                        className={style5.calendar}
                        plugins={[dayGridPlugin, timeGridPlugin]}
                        initialView="dayGridMonth"
                        headerToolbar={{
                            left: 'prev,next today',
                            center: 'title',
                            right: 'dayGridMonth,timeGridWeek,timeGridDay'
                        }}
                        events={events}
                        height="auto"
                    />
                </div>

                <div>
                    <h2 className={style5.tituloHoliday}>Feriados e ponto facultativo:</h2>
                    <ul className={style5.holidayList}>
                        {events.map((event, index) => (
                            <li key={index} >
                                <div className={style5.holidayContent}>
                                    <div className={style5.holidayItem}>
                                        <img src="/banner.png" alt="Holiday" className={style5.holidayImage}/>
                                    </div>

                                    <div className={style5.holidayItem}>
                                        <span>{event.title} - {new Date(event.date).toLocaleDateString('pt-BR')}</span>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default Calendario;
