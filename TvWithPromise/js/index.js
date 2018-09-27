const rooturl = 'http://api.tvmaze.com/search/shows?q=';
const headers = ["Show name","Language","Genres","Status of show","Rating"];
var isReversed= false;

function showSearch(query) {
    return fetch(rooturl + encodeURIComponent(query)).then(res => res.json());
}
getComponents("girl");

function search() {
    getComponents(document.getElementById("show").value);
}

function getComponents(data) {
    let array = [];
    showSearch(data).then(function (res) {
        for (let i = 0; i < res.length; i++) {
            let data = res[i].show;
            array[i] = [data.name, data.language, data.genres, data.status, data.rating.average];
        }
        return array;
    })
        .then(function (res) {
            if (res.length === 0) {
                document.write("По данному запросу нет данных");
                var button = document.createElement("button");
                button.innerHTML = "Клик";
                // let error = document.getElementById("error");
                // error.innerHTML = "По данному запросу нет данных"
                // text.appendChild(err);
            }
            else {
                createTableAndSort(res)
            }
            ;

        })
}

function createTableAndSort(result) {
    function createTable(result) {
        result.unshift(headers);
        var table = document.getElementById("table");
        table.innerHTML = " ";
        for (let i = 0; i < result.length; i++) {
            var tr = document.createElement("tr");
            for (let j = 0; j < result[i].length; j++) {
                if (i === 0) {
                    var th = document.createElement("th");
                    th.innerHTML = result[i][j];
                    th.setAttribute("id",j);
                    tr.appendChild(th);
                }
                else {
                    var td = document.createElement("td");
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

    function sortRating() {
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

    function sortName() {
        result.shift(headers);
        var name = result.sort();
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
