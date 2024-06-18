

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import css from './Dropdown.module.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { FaTrashAlt, FaEdit, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Dropdown({ title, items, redirectPath }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [itemList, setItemList] = useState(items);
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleAddItem = () => {
        navigate(redirectPath);
    };

    const handleDeleteItem = (index) => {
        const updatedList = itemList.filter((_, idx) => idx !== index);
        setItemList(updatedList);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredItems = itemList.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className={css.container}>
            <div className={css.content}>
                <div className={css.dropdown}>
                    <div className={css.dropdownHeader}>
                        <button onClick={toggleDropdown} className={css.dropdownButton}>
                            <span className={css.dropdownTitle}>{title}</span>
                            <span className={css.dropdownIcon}>{isDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
                        </button>
                    </div>
                    <div className={`${css.dropdownContent} ${isDropdownOpen ? css.show : ''}`}>
                        <div className={css.searchContainer}>
                            <input
                                className={css.search}
                                type="text"
                                placeholder="| Pesquise o nome"
                                value={searchTerm}
                                onChange={handleSearchChange}
                            />
                        </div>
                        <div className={css.cardContainer}>
                            {filteredItems.map((item, idx) => (
                                <CardGroup key={idx}>
                                    <div className={css.editIcon}>
                                        <Link to={item.editButton}>
                                            <FaEdit style={{ color: 'white' }} />
                                        </Link>
                                    </div>
                                    <Card className={css.cardizin}>
                                        <Card.Img variant="top" src={item.image} className={css.imgzinha} />
                                        <Card.Body>
                                            <Card.Title id={css.nomePro}>{item.name}</Card.Title>
                                            {item.nif && <Card.Text id={css.email}>NIF: {item.nif}</Card.Text>}
                                            {item.turno && <Card.Text id={css.email}>Turno: {item.turno}</Card.Text>}
                                            {item.date && <Card.Text id={css.email}>Dia do curso: {item.date}</Card.Text>}
                                            {item.professor && <Card.Text id={css.email}>Curso: {item.professor}</Card.Text>}
                                            {item.description && <Card.Text id={css.email}>Descrição: {item.description}</Card.Text>}
                                            <div className={css.buttonContainer}>
                                                <button onClick={handleAddItem} className={css.addButton}>
                                                    {item.buttin}
                                                </button>
                                                <button onClick={() => handleDeleteItem(idx)} className={css.deleteButton}>
                                                    <FaTrashAlt />
                                                </button>
                                            </div>
                                        </Card.Body>
                                        <Card.Footer>
                                            <small className={css.textmuted}>{item.email}</small>
                                        </Card.Footer>
                                    </Card>
                                </CardGroup>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dropdown;
