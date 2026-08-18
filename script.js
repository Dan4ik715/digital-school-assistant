// ==========================================
// РАСПИСАНИЕ
// ==========================================

const schedules = {

    "10А": {

        "Понедельник": [
            "Математика",
            "Русский язык",
            "Информатика",
            "Физика",
            "История"
        ],

        "Вторник": [
            "Английский язык",
            "Физика",
            "Информатика",
            "Обществознание",
            "Физическая культура"
        ],

        "Среда": [
            "Математика",
            "Литература",
            "Химия",
            "История",
            "Английский язык"
        ],

        "Четверг": [
            "Информатика",
            "Математика",
            "Физика",
            "Русский язык",
            "Биология"
        ],

        "Пятница": [
            "История",
            "Математика",
            "Обществознание",
            "Английский язык",
            "Физическая культура"
        ]
    },


    "10Б": {

        "Понедельник": [
            "Физика",
            "Математика",
            "Русский язык",
            "История",
            "Информатика"
        ],

        "Вторник": [
            "Математика",
            "Химия",
            "Английский язык",
            "Физика",
            "Литература"
        ],

        "Среда": [
            "Информатика",
            "История",
            "Математика",
            "Биология",
            "Физическая культура"
        ],

        "Четверг": [
            "Русский язык",
            "Физика",
            "Математика",
            "Обществознание",
            "Информатика"
        ],

        "Пятница": [
            "Английский язык",
            "Математика",
            "Химия",
            "История",
            "Физическая культура"
        ]
    },


    "10В": {

        "Понедельник": [
            "Русский язык",
            "Математика",
            "Физика",
            "Информатика",
            "История"
        ],

        "Вторник": [
            "Химия",
            "Английский язык",
            "Математика",
            "Физическая культура",
            "Литература"
        ],

        "Среда": [
            "Математика",
            "Информатика",
            "Биология",
            "История",
            "Русский язык"
        ],

        "Четверг": [
            "Физика",
            "Математика",
            "Английский язык",
            "Обществознание",
            "Информатика"
        ],

        "Пятница": [
            "Литература",
            "История",
            "Математика",
            "Физика",
            "Физическая культура"
        ]
    },


    "10Г": {

        "Понедельник": [
            "Математика",
            "Информатика",
            "Физика",
            "Русский язык",
            "История"
        ],

        "Вторник": [
            "Английский язык",
            "Математика",
            "Обществознание",
            "Физика",
            "Химия"
        ],

        "Среда": [
            "Информатика",
            "Математика",
            "Русский язык",
            "Литература",
            "Физическая культура"
        ],

        "Четверг": [
            "Физика",
            "Математика",
            "История",
            "Информатика",
            "Биология"
        ],

        "Пятница": [
            "Русский язык",
            "Математика",
            "Английский язык",
            "Обществознание",
            "Физическая культура"
        ]
    },


    "10Д": {

        "Понедельник": [
            "Информатика",
            "Математика",
            "Физика",
            "История",
            "Русский язык"
        ],

        "Вторник": [
            "Математика",
            "Английский язык",
            "Химия",
            "Информатика",
            "Литература"
        ],

        "Среда": [
            "Физика",
            "Математика",
            "Обществознание",
            "Русский язык",
            "Физическая культура"
        ],

        "Четверг": [
            "Информатика",
            "История",
            "Математика",
            "Биология",
            "Английский язык"
        ],

        "Пятница": [
            "Математика",
            "Физика",
            "Русский язык",
            "Информатика",
            "Физическая культура"
        ]
    }

};


// ==========================================
// РАСПИСАНИЕ ЗВОНКОВ
// ==========================================

const bellSchedule = [

    {
        lesson: 1,
        start: "08:30",
        end: "09:10"
    },

    {
        lesson: 2,
        start: "09:25",
        end: "10:05"
    },

    {
        lesson: 3,
        start: "10:25",
        end: "11:05"
    },

    {
        lesson: 4,
        start: "11:25",
        end: "12:05"
    },

    {
        lesson: 5,
        start: "12:20",
        end: "13:00"
    },

    {
        lesson: 6,
        start: "13:15",
        end: "13:55"
    },

    {
        lesson: 7,
        start: "14:15",
        end: "14:55"
    },

    {
        lesson: 8,
        start: "15:15",
        end: "15:55"
    }

];


// ==========================================
// ЗАПУСК
// ==========================================

window.onload = function () {

    const savedUser =
        localStorage.getItem("schoolUser");


    if (savedUser) {

        const user =
            JSON.parse(savedUser);

        showHome(user);

    } else {

        showPage("registrationPage");

    }

};


// ==========================================
// ПЕРЕКЛЮЧЕНИЕ СТРАНИЦ
// ==========================================

function showPage(pageId) {

    const pages =
        document.querySelectorAll(".page");


    pages.forEach(page => {

        page.classList.remove("active");

    });


    const page =
        document.getElementById(pageId);


    if (page) {

        page.classList.add("active");

    }


    // Загружаем расписание
    if (pageId === "schedulePage") {

        loadSchedule();

    }


    // Загружаем расписание звонков
    if (pageId === "bellsPage") {
        
        loadBellSchedule();
        
    }


    // Загружаем заметки
    if (pageId === "notesPage") {

        renderNotes();

    }

}


// ==========================================
// РЕГИСТРАЦИЯ
// ==========================================

function register() {

    const username =
        document
            .getElementById("usernameInput")
            .value
            .trim();


    const selectedClass =
        document
            .getElementById("classInput")
            .value;


    const error =
        document
            .getElementById("registrationError");


    error.textContent = "";


    if (username === "") {

        error.textContent =
            "Введите имя пользователя.";

        return;
    }


    if (selectedClass === "") {

        error.textContent =
            "Выберите класс.";

        return;
    }


    const user = {

        username: username,

        class: selectedClass

    };


    localStorage.setItem(
        "schoolUser",
        JSON.stringify(user)
    );


    showHome(user);

}


// ==========================================
// ГЛАВНАЯ
// ==========================================

function showHome(user) {

    document
        .getElementById("welcomeText")
        .textContent =
        `Добро пожаловать, ${user.username}! Класс: ${user.class}`;


    showPage("homePage");

}


// ==========================================
// РАСПИСАНИЕ
// ==========================================

function loadSchedule() {

    const savedUser =
        localStorage.getItem("schoolUser");


    if (!savedUser) {

        return;

    }


    const user =
        JSON.parse(savedUser);


    const container =
        document
            .getElementById("scheduleContainer");


    const className =
        user.class;


    document
        .getElementById("scheduleClass")
        .textContent =
        `Расписание для класса ${className}`;


    const schedule =
        schedules[className];


    container.innerHTML = "";


    if (!schedule) {

        container.innerHTML =
            "<p>Расписание для этого класса пока не добавлено.</p>";

        return;

    }


    for (const day in schedule) {

        const dayBlock =
            document.createElement("div");


        dayBlock.className =
            "day";


        const title =
            document.createElement("h2");


        title.textContent =
            day;


        dayBlock.appendChild(title);


        schedule[day].forEach(
            (subject, index) => {


                const lesson =
                    document.createElement("div");


                lesson.className =
                    "lesson";


                lesson.innerHTML = `

                    <div class="lesson-number">
                        ${index + 1}.
                    </div>

                    <div class="lesson-subject">
                        ${escapeHTML(subject)}
                    </div>

                `;


                dayBlock.appendChild(lesson);

            }
        );


        container.appendChild(dayBlock);

    }

}


// ==========================================
// ОТОБРАЖЕНИЕ РАСПИСАНИЯ ЗВОНКОВ
// ==========================================

function loadBellSchedule() {

    const container =
        document.getElementById("bellsContainer");


    container.innerHTML = "";


    const dayBlock =
        document.createElement("div");


    dayBlock.className = "day";


    const title =
        document.createElement("div");


    title.className = "bells-title";


    title.textContent =
        "Время уроков";


    dayBlock.appendChild(title);


    bellSchedule.forEach(bell => {

        const lesson =
            document.createElement("div");


        lesson.className = "lesson";


        lesson.innerHTML = `

            <div class="bell-lesson">
                ${bell.lesson} урок
            </div>

            <div class="lesson-subject">

                <span class="bell-start">
                    ${bell.start}
                </span>

                <span class="bell-separator">
                    —
                </span>

                <span class="bell-end">
                    ${bell.end}
                </span>

            </div>

        `;


        dayBlock.appendChild(lesson);

    });


    container.appendChild(dayBlock);

}



// ==========================================
// ПОЛУЧЕНИЕ ЗАМЕТОК
// ==========================================

function getNotes() {

    const notes =
        localStorage.getItem("schoolNotes");


    return notes
        ? JSON.parse(notes)
        : [];

}


// ==========================================
// СОХРАНЕНИЕ ЗАМЕТОК
// ==========================================

function saveNotes(notes) {

    localStorage.setItem(
        "schoolNotes",
        JSON.stringify(notes)
    );

}


// ==========================================
// ОТКРЫТИЕ ФОРМЫ ЗАМЕТКИ
// ==========================================

function openNoteForm(note = null) {

    const form =
        document.getElementById("noteForm");


    form.classList.remove("hidden");


    if (note) {

        document
            .getElementById("noteFormTitle")
            .textContent =
            "Изменить заметку";


        document
            .getElementById("editNoteId")
            .value =
            note.id;


        document
            .getElementById("noteTitle")
            .value =
            note.title;


        document
            .getElementById("noteText")
            .value =
            note.text;


    } else {

        document
            .getElementById("noteFormTitle")
            .textContent =
            "Новая заметка";


        document
            .getElementById("editNoteId")
            .value =
            "";


        document
            .getElementById("noteTitle")
            .value =
            "";


        document
            .getElementById("noteText")
            .value =
            "";

    }

}


// ==========================================
// ЗАКРЫТИЕ ФОРМЫ
// ==========================================

function closeNoteForm() {

    document
        .getElementById("noteForm")
        .classList
        .add("hidden");

}


// ==========================================
// СОХРАНЕНИЕ ЗАМЕТКИ
// ==========================================

function saveNote() {

    const title =
        document
            .getElementById("noteTitle")
            .value
            .trim();


    const text =
        document
            .getElementById("noteText")
            .value
            .trim();


    const editId =
        document
            .getElementById("editNoteId")
            .value;


    if (!title || !text) {

        alert(
            "Заполните заголовок и текст заметки."
        );

        return;

    }


    const notes =
        getNotes();


    if (editId) {

        const note =
            notes.find(
                n => n.id == editId
            );


        if (note) {

            note.title =
                title;

            note.text =
                text;

        }


    } else {

        const newNote = {

            id: Date.now(),

            title: title,

            text: text,

            date:
                new Date()
                    .toLocaleDateString("ru-RU")

        };


        notes.push(newNote);

    }


    saveNotes(notes);


    closeNoteForm();


    renderNotes();

}


// ==========================================
// ОТОБРАЖЕНИЕ ЗАМЕТОК
// ==========================================

function renderNotes() {

    const container =
        document
            .getElementById("notesContainer");


    const notes =
        getNotes();


    container.innerHTML = "";


    if (notes.length === 0) {

        container.innerHTML = `

            <div class="empty">

                У вас пока нет заметок.

            </div>

        `;

        return;

    }


    notes.forEach(note => {

        const noteElement =
            document.createElement("div");


        noteElement.className =
            "note";


        noteElement.innerHTML = `

            <h3>
                ${escapeHTML(note.title)}
            </h3>

            <p>
                ${escapeHTML(note.text)}
            </p>

            <small>
                Создано: ${note.date}
            </small>

            <div class="note-actions">

                <button
                    class="edit-button"
                    onclick="editNote(${note.id})">

                    Изменить

                </button>


                <button
                    class="delete-button"
                    onclick="deleteNote(${note.id})">

                    Удалить

                </button>

            </div>

        `;


        container.appendChild(noteElement);

    });

}


// ==========================================
// РЕДАКТИРОВАНИЕ ЗАМЕТКИ
// ==========================================

function editNote(id) {

    const notes =
        getNotes();


    const note =
        notes.find(
            n => n.id === id
        );


    if (note) {

        openNoteForm(note);

    }

}


// ==========================================
// УДАЛЕНИЕ ЗАМЕТКИ
// ==========================================

let noteToDelete = null;


function deleteNote(id) {

    noteToDelete = id;


    document
        .getElementById("deleteModal")
        .classList
        .remove("hidden");

}


// ==========================================
// КНОПКА "НЕТ" ПРИ УДАЛЕНИИ
// ==========================================

function closeDeleteModal() {

    noteToDelete = null;


    document
        .getElementById("deleteModal")
        .classList
        .add("hidden");

}


// ==========================================
// КНОПКА "ДА" ПРИ УДАЛЕНИИ
// ==========================================

function confirmDelete() {

    if (noteToDelete === null) {

        return;

    }


    let notes =
        getNotes();


    notes =
        notes.filter(
            note =>
                note.id !== noteToDelete
        );


    saveNotes(notes);


    noteToDelete = null;


    document
        .getElementById("deleteModal")
        .classList
        .add("hidden");


    renderNotes();

}


// ==========================================
// ЗАЩИТА ТЕКСТА
// ==========================================

function escapeHTML(text) {

    const div =
        document.createElement("div");


    div.textContent =
        text;


    return div.innerHTML;

}


// ==========================================
// КАЛЬКУЛЯТОР ОЦЕНОК
// ==========================================

function calculateGrades() {

    const input =
        document
            .getElementById("gradesInput")
            .value
            .trim();


    const error =
        document
            .getElementById("calculatorError");


    const result =
        document
            .getElementById("result");


    error.textContent = "";


    result.classList.add("hidden");


    if (!input) {

        error.textContent =
            "Введите оценки.";

        return;

    }


    const values =
        input.split(/\s+/);


    const grades = [];


    for (const value of values) {

        const grade =
            Number(value);


        if (
            !Number.isInteger(grade) ||
            grade < 1 ||
            grade > 5
        ) {

            error.textContent =
                "Можно вводить только целые оценки от 1 до 5.";

            return;

        }


        grades.push(grade);

    }


    if (grades.length === 0) {

        error.textContent =
            "Не удалось найти оценки.";

        return;

    }


    const sum =
        grades.reduce(
            (total, grade) =>
                total + grade,
            0
        );


    const average =
        sum / grades.length;


    let finalGrade;


    if (average >= 4.5) {

        finalGrade = 5;

    } else if (average >= 3.5) {

        finalGrade = 4;

    } else if (average >= 2.5) {

        finalGrade = 3;

    } else {

        finalGrade = 2;

    }


    document
        .getElementById("gradesCount")
        .textContent =
        grades.length;


    document
        .getElementById("averageGrade")
        .textContent =
        average.toFixed(2);


    document
        .getElementById("finalGrade")
        .textContent =
        finalGrade;


    result.classList.remove("hidden");

}


// ==========================================
// ВЫХОД ИЗ КАЛЬКУЛЯТОРА
// ==========================================

function exitCalculator() {

    // Очищаем оценки

    document
        .getElementById("gradesInput")
        .value = "";


    // Очищаем сообщение об ошибке

    document
        .getElementById("calculatorError")
        .textContent = "";


    // Скрываем результат

    document
        .getElementById("result")
        .classList
        .add("hidden");


    // Сбрасываем значения результата

    document
        .getElementById("gradesCount")
        .textContent = "0";


    document
        .getElementById("averageGrade")
        .textContent = "0";


    document
        .getElementById("finalGrade")
        .textContent = "0";


    // Возвращаемся на главную

    showPage("homePage");

}


// ==========================================
// ВЫХОД ИЗ АККАУНТА
// ==========================================

function logout() {

    // Открываем собственное окно,
    // а не стандартный confirm()

    document
        .getElementById("logoutModal")
        .classList
        .remove("hidden");

}


// ==========================================
// КНОПКА "НЕТ" ПРИ ВЫХОДЕ
// ==========================================

function closeLogoutModal() {

    document
        .getElementById("logoutModal")
        .classList
        .add("hidden");

}


// ==========================================
// КНОПКА "ДА" ПРИ ВЫХОДЕ
// ==========================================

function confirmLogout() {

    // Удаляем аккаунт

    localStorage.removeItem(
        "schoolUser"
    );


    // Очищаем форму регистрации

    document
        .getElementById("usernameInput")
        .value = "";


    document
        .getElementById("classInput")
        .value = "";


    // Убираем сообщение об ошибке

    document
        .getElementById("registrationError")
        .textContent = "";


    // Очищаем калькулятор

    document
        .getElementById("gradesInput")
        .value = "";


    document
        .getElementById("calculatorError")
        .textContent = "";


    document
        .getElementById("result")
        .classList
        .add("hidden");


    // Закрываем окно

    document
        .getElementById("logoutModal")
        .classList
        .add("hidden");


    // Переходим на регистрацию

    showPage(
        "registrationPage"
    );

}
