const rooturl = 'http://api.tvmaze.com/search/shows?q=';
const headers = ["Show name  <span class=\"glyphicon glyphicon-sort\"></span>","Language","Genres","Status of show","Rating  <span class=\"glyphicon glyphicon-sort\"></span>"];
var isReversed= false;

function showSearch(query) { //функция возращает массив объектов с Api
    return fetch(rooturl + encodeURIComponent(query)).then(res => res.json());
}

function search() { //передаем значение с инпута в функцию getComponents
    getComponents(document.getElementById("show").value);
}

getComponents("girl");

function getComponents(data) { //функция обрабатывает массив объектов с Api и приобразует его в массив значений
    let array = [];
    showSearch(data).then(function (res) {
        for (let i = 0; i < res.length; i++) {
            let data = res[i].show;
            array[i] = [data.name, data.language, data.genres, data.status, data.rating.average];
        }
        return array;
    })
        .then(function (res) {
            let error = document.getElementById("error");
            if (res.length === 0) {
                error.innerHTML = "По данному запросу нет данных";
                document.body.appendChild(error);
            }
            else {
                error.innerHTML = " ";
                createTableAndSort(res);
            }
        })
}

function createTableAndSort(result) {
    function createTable(result) {
        result.unshift(headers);
        let table = document.getElementById("table");
        table.innerHTML = " ";
        for (let i = 0; i < result.length; i++) {
            let tr = document.createElement("tr");
            for (let j = 0; j < result[i].length; j++) {
                if (i === 0) {
                    let th = document.createElement("th");
                    th.innerHTML = result[i][j];
                    th.setAttribute("id",j);
                    tr.appendChild(th);
                }
                else {
                    let td = document.createElement("td");
                    td.innerText = result[i][j];
                    tr.appendChild(td);
                }
            }
            table.appendChild(tr);
            document.getElementById("0").onclick = sortName;
            document.getElementById("4").onclick = sortRating;
        }
    }
    createTable(result);

    function sortRating() { //функция для сортировки по рейтингу
        result.shift(headers);
        let rating =result.sort(function (a,b) {
            if (a[4] > b[4]) {
                return 1;
            }
            if (a[4] < b[4]) {
                return -1;
            }
            return 0;
        });
        if (isReversed) {
            createTable(rating);
            isReversed = false;
        }
        else {
            isReversed = true;
            createTable(rating.reverse());
        }
    }

    function sortName() { //функция для сортировки по имени
        result.shift(headers);
        let name = result.sort();
        if (isReversed) {
            createTable(name);
            isReversed = false;
         }
         else {
            createTable(name.reverse());
            isReversed = true;
         }
     }
 }
