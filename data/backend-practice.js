const xhr = new XMLHttpRequest();

xhr.addEventListener('load', () => {
    console.log(xhr.response);
});

xhr.open('GET', 'https://supersimplebackend.dev');
xhr.send();

// starts with 4 or 5 (400,404,500) = failed
// 4 our problem    5 backend's problem
// starts with 2 (200,201,204) = succeeded