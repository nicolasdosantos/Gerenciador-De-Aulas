import React, { useState } from "react";
import NavBar from "../components/NavBar";
import css from './ListaProfessores.module.css';
import Card from 'react-bootstrap/Card';
import ScrollBar from "./ScrollBar";
import CardGroup from 'react-bootstrap/CardGroup';

function ListaProfessores() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className={css.container}>
            <NavBar />
            <div className={css.content}>
                <h2 className={css.titulozin}>Cadastros:</h2>
                <div className={css.dropdown}>
                    <button onClick={toggleDropdown} className={css.dropdownButton}>
                        Professores:
                    </button>
                    {isDropdownOpen && (
                        <div className={css.dropdownContent}>
                            <div className={css.cardContainer}>
                                {Array.from({ length: 3 }).map((_, idx) => (
                                    <CardGroup>
                                        <Card className={css.cardizin}>
                                            <Card.Img variant="top" src="/download.jpg" />
                                            <Card.Body>
                                                <Card.Title id={css.nomePro}>Marla Prates Fernandes</Card.Title>
                                                <Card.Text id={css.email}>
                                                    marlaprates@gmail.com
                                                </Card.Text>
                                            </Card.Body>
                                            <Card.Footer>
                                                <small className={css.textmuted}>NIF: 0123456789</small>
                                            </Card.Footer>
                                        </Card>
                                    </CardGroup>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ListaProfessores;
