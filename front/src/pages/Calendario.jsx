import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

import NavBarPerfil from "../components/NavBarPerfil";
import NavBar from "../components/NavBar";
import style5 from '../components/Calendario.module.css';
// feriados do Brasil
import Hd from 'date-holidays';

// Função para obter os feriados do Brasil
function getBrasilHolidays(year) {
    const hd = new Hd('BR');
    const holidays = hd.getHolidays(year);

    return holidays.map(holiday => ({
        title: holiday.name,
        date: holiday.date,
        allDay: true
    }));
}

function Calendario() {
    // Estado para armazenar os feriados
    const [events, setEvents] = useState(getBrasilHolidays(2024));

    // Estado para controlar a visibilidade da programaçãoLista
    const [showPrograList, setShowPrograList] = useState(false);

    // Função para lidar com cliques em dias
    function handleDateClick() {
        setShowPrograList(true);
    }

    return (
        <div className={style5.principal}>
            <NavBar />

            <div className={style5.calendario}>
                <h1 style={{ fontSize: '40px' }}>Calendário</h1>

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
                        dateClick={handleDateClick}
                    />
                </div>

                <div>
                    <h2 className={style5.tituloHoliday}>Feriados e pontos facultativos do mês:</h2>

                    <div className={style5.holidayListsContainer}>
                        <div className={style5.holidayList}>
                            {events.map((event, index) => (
                                <div className={style5.holidayItemNovo} key={index}>
                                    <div className={style5.holidayContent}>
                                        <div className={style5.holidayItemImage}>
                                            <img src="/casinha.png" alt="casinha" className={style5.holidayImage}/>
                                        </div>

                                        <div className={style5.holidayItem}>
                                            <span className={style5.holiday}>{event.title}</span>
                                            <span className={style5.holidayData}>{new Date(event.date).toLocaleDateString('pt-BR')}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className={style5.holidayList}>
                            <div className={style5.holidayItemNovo}>
                                <div className={style5.holidayContent}>
                                    <div className={style5.holidayItemImage}>
                                        <img src="/casinha.png" alt="casinha" className={style5.holidayImage}/>
                                    </div>

                                    <div className={style5.holidayItem}>
                                        <span className={style5.holiday}>Ponto facultativo</span>
                                        <span className={style5.holidayData}>aaa</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <NavBarPerfil showPrograList={showPrograList} isCalendario={true}/>
            </div>
        </div>
    );
}

export default Calendario;
