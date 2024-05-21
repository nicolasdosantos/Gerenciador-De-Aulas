import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import BannerCalendario from "../components/BannerCalendario";
import BarraLateral from "../components/BarraLateral";
import style5 from '../components/Calendario.module.css'

function Calendario() {
    return (
        <div className={style5.Calendario}>
            <BarraLateral />
            <div className={style5.content}>
                <BannerCalendario />
                <div className={style5.calendarContainer}>
                    <FullCalendar
                        plugins={[dayGridPlugin, timeGridPlugin]}
                        initialView="dayGridMonth"
                        headerToolbar={false}
                        events={[
                            { title: 'Dia do Trabalho e Trabalhador', date: '2024-05-01' },
                            { title: 'Dia das mães', date: '2024-05-12' },
                            { title: 'Corpus Christi', date: '2024-05-30' },
                        ]}
                    />
                </div>
            </div>
        </div>
    );
}

export default Calendario;