import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

import NavBar from "../components/NavBar";
import style5 from '../components/Calendario.module.css';

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
    // Estado para armazenar os eventos
    const [events, setEvents] = useState(getBrazilianHolidays(2024));

    // Estado para controlar a visibilidade da prograList
    const [showPrograList, setShowPrograList] = useState(false);

    // Função para lidar com cliques em dias
    function handleDateClick(arg) {
        setShowPrograList(true);
    }

    return (
        <div className={style5.calendario}>
            <NavBar />

            <div className={style5.content}>
                <h1 style={{ fontSize: '40px' }}>Calendario</h1>

                <div className={style5.calendarContainer}>
                    <FullCalendar
                        className={style5.calendar}
                        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                        initialView="dayGridMonth"
                        headerToolbar={{
                            left: 'prev,next today',
                            center: 'title',
                            right: 'dayGridMonth,timeGridWeek,timeGridDay'
                        }}
                        events={events}
                        height="auto"
                        dateClick={handleDateClick} // Adicionando a função de clique no dia
                    />
                </div>

                <div>
                    <h2 className={style5.tituloHoliday}>Feriados e ponto facultativo:</h2>
                    <div className={style5.holidayList}>
                        {events.map((event, index) => (
                            <div className={style5.holidayItemNovo} key={index}>
                                <div className={style5.holidayContent}>
                                    <div className={style5.holidayItemImage}>
                                        <img src="/casinha.png" alt="casinha" className={style5.holidayImage} />
                                    </div>

                                    <div className={style5.holidayItem}>
                                        <span className={style5.holiday}>{event.title}</span>
                                        <span className={style5.holidayData}>{new Date(event.date).toLocaleDateString('pt-BR')}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className={style5.prograDia}>
                <h2 className={style5.tituloProgra}>Programação do dia:</h2>

                <div className={style5.prograList} style={{ display: showPrograList ? 'block' : 'none' }}>
                    <div className={style5.prograDiv}>
                        <div className={style5.prograItemImage}>
                            <img src="/sino.png" alt="sino" style={{ width: '50px', height: '50px' }} />
                        </div>

                        <div className={style5.prograItem}>
                            <p className={style5.prograTextT}>Desenvolvimento de sistemas</p>
                            <p className={style5.prograTextC}>Python</p>

                            <div className={style5.prograTextoDiv}>
                                <p className={style5.prograTextS}>Sala 2</p>
                                <p className={style5.prograTextH}>07:30</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Calendario;
