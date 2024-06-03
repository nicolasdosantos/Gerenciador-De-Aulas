// Dropdown.js
import React, { useState } from "react";
import css from './Dropdown.module.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Dropdown({ title, items }) { // Adicionando parâmetros title e items
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className={css.container}>
            <div className={css.content}>

                <div className={css.dropdown}>
                    <button onClick={toggleDropdown} className={css.dropdownButton}>
                        {title}
                    </button>
                    {isDropdownOpen && (
                        <div className={css.dropdownContent}>
                            <div className={css.cardContainer}>
                                {items.map((item, idx) => (
                                    <CardGroup key={idx}>
                                        <Card className={css.cardizin}>
                                            <Card.Img variant="top" src={item.image} className={css.imgzinha}/>
                                            <Card.Body>
                                                <Card.Title id={css.nomePro}>{item.name}</Card.Title>
                                                <Card.Text id={css.email}>
                                                    {item.email}
                                                </Card.Text>
                                            </Card.Body>
                                            <Card.Footer>
                                                <small className={css.textmuted}>{item.footer}</small>
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

export default Dropdown;
