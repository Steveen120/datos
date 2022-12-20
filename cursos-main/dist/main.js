"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*enum Course{
    Programacion = "Programacion Visual",
    BaseDatos = "Base de Datos",
    Metodologias = "Metodologias",
}*/
var Area;
(function (Area) {
    Area["Desarrollo"] = "Desarrollo de Software";
    Area["Marketing"] = "Marketing";
    Area["Turismo"] = "Turismo";
})(Area || (Area = {}));
let students = [];
function addStudent() {
    let currentStudent = {
        fullName: readFormHtml("fullName"),
        identification: parseInt(readFormHtml("identification")),
        mail: readFormHtml("mail"),
        direction: readFormHtml("direction"),
        enrollment: parseInt(readFormHtml("enrollment")),
        level: readFormHtml("level"),
    };
    students.push(currentStudent);
    console.table(students);
}
let teachers = [];
function addTeacher() {
    let currentTeacher = {
        fullName: readFormHtml("fullName-teacher"),
        identification: parseInt(readFormHtml("identification-teacher")),
        mail: readFormHtml("mail-teacher"),
        direction: readFormHtml("direction-teacher"),
        title: readFormHtml("title-teacher"),
        area: readFormHtml("area-teacher")
    };
    teachers.push(currentTeacher);
    //console.log(teachers);
    console.table(teachers);
}
let activity = [];
function addActivity() {
    let currentActivity = {
        name: readFormHtml("name-activity"),
    };
    activity.push(currentActivity);
    console.table(activity);
    initSelect();
}
let courses = [];
function addCourse() {
    let currentCourse = {
        name: readFormHtml("name-course"),
    };
    courses.push(currentCourse);
    console.table(courses);
    initSelect();
}
let gradesBookSetup = [];
function addGradeBookSetup() {
    let currentGradeBookSetup = {
        value: readFormHtml("value-gradebook"),
        course: readFormHtml("course-gradebook"),
        activity: readFormHtml("activity-gradebook"),
        maximunGrade: parseInt(readFormHtml("maximungrade-gradebook")),
    };
    gradesBookSetup.push(currentGradeBookSetup);
    console.table(gradesBookSetup);
}
let summaryGrades = [];
function addSummaryGrades() {
    let currentSummaryGrades = {
        student: readFormHtml("student-summaryGrades"),
        course: readFormHtml("course-summaryGrades"),
        value: readFormHtml("value-summaryGrades"),
        teacher: readFormHtml("teacher-summaryGrades"),
    };
    summaryGrades.push(currentSummaryGrades);
    console.table(summaryGrades);
    // status grade
    let promedy1 = document.querySelector("#value-summaryGrades");
    let statusSpan = document.querySelector("#status");
    if (Number(promedy1.value) >= 70) {
        console.log("Aprobado");
        statusSpan.textContent = "Aprobado";
    }
    else {
        console.log("Reprobado");
        statusSpan.textContent = "Reprobado";
    }
}
function initSelect() {
    let area = document.getElementById("area-teacher");
    let areas = Object.values(Area);
    areas.forEach((value) => {
        let option = document.createElement("option");
        option.value = value;
        option.text = value,
            area.add(option);
    });
    let courseGradeBook = document.getElementById("course-gradebook");
    document.querySelectorAll("#course-gradebook option").forEach(option => option.remove());
    //let courses = Object.values(courses);
    courses.forEach((value) => {
        let option = document.createElement("option");
        option.value = value.name;
        option.text = value.name,
            courseGradeBook.add(option);
    });
    let activityGradebook = document.getElementById("activity-gradebook");
    document.querySelectorAll("#activity-gradebook option").forEach(option => option.remove());
    activity.forEach((value) => {
        let option = document.createElement("option");
        option.value = value.name;
        option.text = value.name,
            activityGradebook.add(option);
    });
    let nameSummary = document.getElementById("student-summaryGrades");
    document.querySelectorAll("#student-summaryGrades option").forEach(option => option.remove());
    students.forEach((estudiante) => {
        let option = document.createElement("option");
        option.value = estudiante.fullName;
        option.text = estudiante.fullName,
            nameSummary.add(option);
    });
    let courseSummary = document.getElementById("course-summaryGrades");
    document.querySelectorAll("#course-summaryGrades option").forEach(option => option.remove());
    courses.forEach((curso) => {
        let option = document.createElement("option");
        option.value = curso.name;
        option.text = curso.name,
            courseSummary.add(option);
    });
    let teacherSummary = document.getElementById("teacher-summaryGrades");
    document.querySelectorAll("#teacher-summaryGrades option").forEach(option => option.remove());
    teachers.forEach((profe) => {
        let option = document.createElement("option");
        option.value = profe.fullName;
        option.text = profe.fullName,
            teacherSummary.add(option);
    });
}
initSelect();
function readFormHtml(id) {
    return document.getElementById(id).value;
}
