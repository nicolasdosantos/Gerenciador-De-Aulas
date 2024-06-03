// ListaProfessores.js
import React from "react";
import NavBar from "../components/NavBar";
import Dropdown from "../components/Dropdown";
import css from '../components/ListaProfessores.module.css';

function ListaProfessores() {
    const professors = [
        {
            name: "Marla Prates Fernandes",
            email: "MarlaPratesFernandes@gmail.com",
            image: "/imgTeste.jpg",
            button: "/materia"
        },
        {
            name: "João Silva",
            email: "JoãoSilva@gmail.com",
            image: "/imgTeste.jpg",
            button: "/materia"
        },
        {
            name: "Ana Souza",
            email: "AnaSouza@gmail.com",
            image: "/imgTeste.jpg",
            button: "/materia"
        }
    ];

    const courses = [
        {
            name: "Course 1",
            image: "/imgTeste.jpg",
            date: "Seg,Ter",
            button: "/materia"
        },
        {
            name: "Course 2",
            image: "/imgTeste.jpg",
            date: "Seg,Ter",
            button: "/materia"
        },
        {
            name: "Course 3",
            image: "/imgTeste.jpg",
            date: "Seg,Ter",
            button: "/materia"
        }
    ];

    const subjects = [
        {
            name: "Subject 1",
            email: "subject2@example.com",
            professor: "subject1@example.com",
            nif: "S0123456789",
            image: "/imgTeste.jpg",
            footer: "Subject ID: S0123456789"
        },
        {
            name: "Subject 2",
            email: "subject2@example.com",
            nif: "S9876543210",
            image: "/imgTeste.jpg",
            footer: "Subject ID: S9876543210"
        },
        {
            name: "Subject 3",
            email: "subject1@example.com",
            nif: "S0123456789",
            image: "/imgTeste.jpg",
            footer: "Subject ID: S0123456789"
        }
    ];

    const rooms = [
        {
            name: "Room 1",
            nif: "R0123456789",
            image: "/imgTeste.jpg",
            footer: "Room ID: R0123456789"
        },
        {
            name: "Room 2",
            nif: "R9876543210",
            image: "/imgTeste.jpg",
            footer: "Room ID: R9876543210"
        },
        {
            name: "Room 3",
            nif: "R9876543210",
            image: "/imgTeste.jpg",
            footer: "Room ID: R9876543210"
        }
    ];

    const students = [
        {
            name: "Student 1",
            email: "student1@example.com",
            nif: "ST0123456789",
            image: "/imgTeste.jpg",
            footer: "Student ID: ST0123456789"
        },
        {
            name: "Student 2",
            email: "student2@example.com",
            nif: "ST9876543210",
            image: "/imgTeste.jpg",
            footer: "Student ID: ST9876543210"
        },
        {
            name: "Student 3",
            email: "student2@example.com",
            nif: "ST9876543210",
            image: "/imgTeste.jpg",
            footer: "Student ID: ST9876543210"
        }
    ];

    return (
        <div className={css.container}>
            <NavBar />
            <h2 className={css.title}>Cadastrados</h2>
            <Dropdown src="" title="Professores" items={professors} redirectPath="/professores" />
            <Dropdown src="" title="Cursos" items={courses} redirectPath="/curso" />
            <Dropdown src="" title="Matérias" items={subjects} redirectPath="/materia" />
            <Dropdown src="" title="Salas" items={rooms} redirectPath="/salas" />
            <Dropdown src="" title="Alunos" items={students} redirectPath="/alunos" />
        </div>
    );
}

export default ListaProfessores;
