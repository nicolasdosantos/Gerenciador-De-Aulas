// ListaProfessores.js
import React from "react";
import NavBar from "../components/NavBar";
import Dropdown from "../components/Dropdown";
import css from '../components/ListaProfessores.module.css';

function ListaProfessores() {
    const professors = [
        {
            name: "Marla Prates Fernandes",
            email: "marlaprates@gmail.com",
            nif: "0123456789",
            image: "/download.jpg",
            footer: "NIF: 0123456789"
        },
        {
            name: "João Silva",
            email: "joaosilva@gmail.com",
            nif: "9876543210",
            image: "/download.jpg",
            footer: "NIF: 9876543210"
        },
        {
            name: "Ana Souza",
            email: "anasouza@gmail.com",
            nif: "1122334455",
            image: "/download.jpg",
            footer: "NIF: 1122334455"
        }
    ];

    const courses = [
        {
            name: "Course 1",
            email: "course1@example.com",
            nif: "C0123456789",
            image: "/download.jpg",
            footer: "Course ID: C0123456789"
        },
        {
            name: "Course 2",
            email: "course2@example.com",
            nif: "C9876543210",
            image: "/download.jpg",
            footer: "Course ID: C9876543210"
        }
    ];

    const subjects = [
        {
            name: "Subject 1",
            email: "subject1@example.com",
            nif: "S0123456789",
            image: "/download.jpg",
            footer: "Subject ID: S0123456789"
        },
        {
            name: "Subject 2",
            email: "subject2@example.com",
            nif: "S9876543210",
            image: "/download.jpg",
            footer: "Subject ID: S9876543210"
        }
    ];

    const rooms = [
        {
            name: "Room 1",
            email: "room1@example.com",
            nif: "R0123456789",
            image: "/download.jpg",
            footer: "Room ID: R0123456789"
        },
        {
            name: "Room 2",
            email: "room2@example.com",
            nif: "R9876543210",
            image: "/download.jpg",
            footer: "Room ID: R9876543210"
        }
    ];

    const students = [
        {
            name: "Student 1",
            email: "student1@example.com",
            nif: "ST0123456789",
            image: "/download.jpg",
            footer: "Student ID: ST0123456789"
        },
        {
            name: "Student 2",
            email: "student2@example.com",
            nif: "ST9876543210",
            image: "/download.jpg",
            footer: "Student ID: ST9876543210"
        }
    ];

    return (
        <div className={css.divzinha}>
            <NavBar/>
            <h2 className={css.titulozin}>Cadastrados</h2>
            <Dropdown title="Professores" items={professors}/>
            <Dropdown title="Cursos" items={courses}/>
            <Dropdown title="Matérias" items={subjects}/>
            <Dropdown title="Salas" items={rooms}/>
            <Dropdown title="Alunos" items={students}/>
        </div>
    );
}

export default ListaProfessores;
