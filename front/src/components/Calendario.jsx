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
            <NavBar/>

            <div className={style5.content}>
                <h1 style={{fontSize: '40px'}}>Calendario</h1>

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
                    <div className={style5.holidayList}>
                        {events.map((event, index) => (
                            <div className={style5.holidayItemNovo} key={index}>
                                <div className={style5.holidayContent}>
                                    <div className={style5.holidayItemImage}>
                                        <img src="/banner.png" alt="Holiday" className={style5.holidayImage}/>
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

                <div className={style5.prograList}>
                    <div className={style5.prograContent}>

                        <div className={style5.prograItemImage}>
                            <img src="/banner.png" alt="Holiday" className={style5.holidayImage}/>
                        </div>
                        <div className={style5.prograItem}>
                            <p>a</p>
                            <p>aa</p>

                            <div className={style5.prograTexto}>
                                <p>aaa</p>
                                <p>aaaa</p>
                            </div>
                        </div>

                        <div className={style5.prograItemImage}>
                            <img src="/banner.png" alt="Holiday" className={style5.holidayImage}/>
                        </div>
                        <div className={style5.prograItem}>
                            <p>a</p>
                            <p>aa</p>

                            <div className={style5.prograTexto}>
                                <p>aaa</p>
                                <p>aaaa</p>
                            </div>
                        </div>

                        <div className={style5.prograItemImage}>
                            <img src="/banner.png" alt="Holiday" className={style5.holidayImage}/>
                        </div>
                        <div className={style5.prograItem}>
                            <p>a</p>
                            <p>aa</p>

                            <div className={style5.prograTexto}>
                                <p>aaa</p>
                                <p>aaaa</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Calendario;
