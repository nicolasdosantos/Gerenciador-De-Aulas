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

    return (
        <div className={css.container}>
            <div className={css.content}>
                <div className={css.dropdown}>
                    <button onClick={toggleDropdown} className={css.dropdownButton}>
                        <span className={css.dropdownTitle}>{title}</span>
                        <span className={css.dropdownIcon}>{isDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
                    </button>
                    {isDropdownOpen && (
                        <div className={css.dropdownContent}>
                            <div className={css.cardContainer}>
                                {itemList.map((item, idx) => (
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
                                                <Card.Text id={css.email}>
                                                    {item.email}
                                                </Card.Text>
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
                                                <small className={css.textmuted}>{item.date}</small>
                                            </Card.Footer>
                                        </Card>
                                    </CardGroup>
                                ))}
                            </div>
                            <div className={css.addItemContainer}>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Dropdown;
