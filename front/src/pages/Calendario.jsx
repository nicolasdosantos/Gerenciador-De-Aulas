import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

import NavBarPerfil from "../components/NavBarPerfil";
import NavBar from "../components/NavBar";
import style6 from '../components/NavBarPerfil.module.css';
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
    const [evento, setEvento] = useState(getBrasilHolidays(2024));

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
                        events={evento}
                        height="auto"
                        dateClick={handleDateClick}
                    />
                </div>

                {showPrograList && (
                    <div className={style6.prograList}>
                        <div className={style6.prograDiv}>
                            <div className={style6.prograItemImage}>
                                <img src="/sino.png" alt="sino" style={{width: '50px', height: '50px'}}/>
                            </div>

                            <div className={style6.prograItem}>
                                <p className={style6.prograTextT}>Desenvolvimento de sistemas</p>
                                <p className={style6.prograTextC}>Python</p>

                                <div className={style6.prograTextoDiv}>
                                    <p className={style6.prograTextS}>Sala 2</p>
                                    <p className={style6.prograTextH}>07:30</p>
                                </div>
                            </div>
                        </div>

                        <div className={style6.prograDiv}>
                            <div className={style6.prograItemImage}>
                                <img src="/sino.png" alt="sino" style={{width: '50px', height: '50px'}}/>
                            </div>

                            <div className={style6.prograItem}>
                                <p className={style6.prograTextT}>Desenvolvimento de sistemas</p>
                                <p className={style6.prograTextC}>Python</p>

                                <div className={style6.prograTextoDiv}>
                                    <p className={style6.prograTextS}>Sala 2</p>
                                    <p className={style6.prograTextH}>07:30</p>
                                </div>
                            </div>
                        </div>

                        <div className={style6.prograDiv}>
                            <div className={style6.prograItemImage}>
                                <img src="/sino.png" alt="sino" style={{width: '50px', height: '50px'}}/>
                            </div>

                            <div className={style6.prograItem}>
                                <p className={style6.prograTextT}>Desenvolvimento de sistemas</p>
                                <p className={style6.prograTextC}>Python</p>

                                <div className={style6.prograTextoDiv}>
                                    <p className={style6.prograTextS}>Sala 2</p>
                                    <p className={style6.prograTextH}>07:30</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div>
                    <h2 className={style5.tituloHoliday}>Feriados e pontos facultativos do mês:</h2>

                    <div className={style5.holidayListsContainer}>
                        <div className={style5.holidayList}>
                            {evento.map((evento, index) => (
                                <div className={style5.holidayItemNovo} key={index}>
                                    <div className={style5.holidayContent}>
                                        <div className={style5.holidayItemImage}>
                                            <img src="/casinha.png" alt="casinha" className={style5.holidayImage}/>
                                        </div>

                                        <div className={style5.holidayItem}>
                                        <span className={style5.holiday}>{evento.title}</span>
                                            <span className={style5.holidayData}>{new Date(evento.date).toLocaleDateString('pt-BR')}</span>
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
                                        <span className={style5.holidayData}>31/05/2024</span>
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
