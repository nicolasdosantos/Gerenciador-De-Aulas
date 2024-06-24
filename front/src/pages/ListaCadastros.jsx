import React from "react";
import NavBar from "../components/NavBar";
import Dropdown from "../components/Dropdown";
import css from '../components/ListaProfessores.module.css';
import NavBarPerfil from "../components/NavBarPerfil";

function ListaCadastros() {
    const professors = [
        {
            name: "Marla Prates Fernandes",
            nif: "123456789",
            turno: "manhã",
            image: "/imgTeste.jpg",
            button: "/materia",
            buttin: "Adicionar professor",
            editButton: "/edicaoProfessores"
        },
        {
            name: "João Silva",
            nif: "987654321",
            turno: "tarde",
            image: "/imgTeste.jpg",
            button: "/materia",
            buttin: "Adicionar professor",
            editButton: "/edicaoProfessores"
        },
        {
            name: "Ana Souza",
            nif: "567891234",
            turno: "noite",
            image: "/imgTeste.jpg",
            button: "/materia",
            buttin: "Adicionar professor",
            editButton: "/edicaoProfessores"
        }
    ];

    const courses = [
        {
            name: "Desenvolvimento de Sistemas",
            date: "Seg, Ter",
            image: "/imgTeste.jpg",
            button: "/materia",
            buttin: "Adicionar matéria",
            editButton: "/edicaoCurso"
        },
        {
            name: "Eletromecânica ",
            date: "Qua, Qui",
            image: "/imgTeste.jpg",
            button: "/materia",
            buttin: "Adicionar matéria",
            editButton: "/edicaoCurso"
        },
        {
            name: "Elétrica",
            date: "Sex",
            image: "/imgTeste.jpg",
            button: "/materia",
            buttin: "Adicionar matéria",
            editButton: "/edicaoCurso"
        }
    ];

    const subjects = [
        {
            name: "Subject 1",
            professor: "Course 1",
            image: "/imgTeste.jpg",
            footer: "Subject ID: S0123456789",
            buttin: "Adicionar matéria",
            editButton: "/edicaoMateria"
        },
        {
            name: "Subject 2",
            professor: "Course 2",
            image: "/imgTeste.jpg",
            footer: "Subject ID: S9876543210",
            buttin: "Adicionar matéria",
            editButton: "/edicaoMateria"
        },
        {
            name: "Subject 3",
            professor: "Course 3",
            image: "/imgTeste.jpg",
            footer: "Subject ID: S0123456789",
            buttin: "Adicionar matéria",
            editButton: "/edicaoMateria"
        }
    ];

    const rooms = [
        {
            name: "Room 1",
            description: "Sala de Aula 101",
            image: "/imgTeste.jpg",
            footer: "Room ID: R0123456789",
            buttin: "Adicionar sala",
            editButton: "/edicaoSalas"
        },
        {
            name: "Room 2",
            description: "Laboratório de Química",
            image: "/imgTeste.jpg",
            footer: "Room ID: R9876543210",
            buttin: "Adicionar sala",
            editButton: "/edicaoSalas"
        },
        {
            name: "Room 3",
            description: "Biblioteca",
            image: "/imgTeste.jpg",
            footer: "Room ID: R9876543210",
            buttin: "Adicionar sala",
            editButton: "/edicaoSalas"
        }
    ];

    const students = [
        {
            name: "Student 1",
            image: "/imgTeste.jpg",
            footer: "Student ID: ST0123456789",
            buttin: "Adicionar aluno",
            editButton: "/edicaoAlunos"
        },
        {
            name: "Student 2",
            image: "/imgTeste.jpg",
            footer: "Student ID: ST9876543210",
            buttin: "Adicionar aluno",
            editButton: "/edicaoAlunos"
        },
        {
            name: "Student 3",
            image: "/imgTeste.jpg",
            footer: "Student ID: ST9876543210",
            buttin: "Adicionar aluno",
            editButton: "/edicaoAlunos"
        }
    ];

    return (
        <div className={css.container}>
            <NavBar />
            <h2 className={css.title}>Cadastrados</h2>
            <Dropdown src="" title="Professores" items={professors} redirectPath="/professores" showAddButton={false} />
            <Dropdown src="" title="Cursos" items={courses} redirectPath="/curso" showAddButton={true} />
            <Dropdown src="" title="Matérias" items={subjects} redirectPath="/materia" showAddButton={false} />
            <Dropdown src="" title="Salas" items={rooms} redirectPath="/salas" showAddButton={false} />
            <Dropdown src="" title="Alunos" items={students} redirectPath="/alunos" showAddButton={false} />
            <NavBarPerfil />
        </div>
    );
}

export default ListaCadastros;
