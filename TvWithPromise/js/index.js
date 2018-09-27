var rooturl = 'http://api.tvmaze.com/search/shows?q=';
var headers = ["Show name","Language","Genres","Status of show","Rating"]

// function getJSON(url) {
//     return new Promise(function(resolve, reject){
//         var req = new XMLHttpRequest();
//         req.open('GET', url, true);
//         req.responseType = 'json';
//         req.onload = function() {
//             if (req.status == 200) {
//                 resolve(req.response);
//                 // console.log(req.response)
//             }
//             else {
//                 reject(Error(req.statusText));
//             }
//         };
//         req.onerror = function() {
//             reject(Error("Network Error"));
//         };
//         req.send();
//     });
// }
 function showSearch(query) {
    return fetch(rooturl+encodeURIComponent(query)).then(res => res.json());
    }
    // showSearch("girl").then(data=>console.log(data))

function getComponents(data) {
        var array=[];
        showSearch(data).then( function (res) {
            for (let i = 0; i <res.length; i++) {
                var data = res[i].show;
                console.log(res[i].show)
                array[i] = [data.name, data.language, data.genres, data.status, data.rating.average]
            }
         return array })
            // .then(r=>console.log(r))
            .then(res=> createTable(res) );

}

 function createTable(result) {
    function mytable(result) {
        result.unshift(headers);
        console.log(result)
        var table = document.getElementById("table");
        table.innerHTML = " "
        for (var i = 0; i < result.length; i++) {
            var tr = document.createElement("tr")
        }
        for (var i = 0; i < result.length; i++) {
            var tr = document.createElement("tr");
            for (var j = 0; j < result[i].length; j++) {
                // console.log(result[i][j])
                if (i === 0) {
                    var th = document.createElement("th");
                    th.innerHTML = result[i][j]
                    th.onclick = sort;
                    tr.appendChild(th);
                }
                else {
                    var td = document.createElement("td");
                    td.innerText = result[i][j];
                    tr.appendChild(td);
                }

            }
            table.appendChild(tr);
        }
    }
    mytable(result);
    function sort() {
        result.shift(headers);
        var names = [];
        var ratings = [];
        for (var i = 1; i <result.length ; i++) {
             names[i] = result[i][0];
            ratings[i] = result[i][4];
        }
        names.sort()
        ratings.sort()
        for (var i = 0; i <result.length ; i++) {
            result[i][0] = names[i];
            result[i][4] = ratings[i];
        }
        console.log(result)
        mytable(result);
    }
 }



function f() {
                alert(this.innerHTML)
            }


getComponents("girl");


function display() {
    getComponents(document.getElementById('show').value);
}

// function sort(){
// showSearch("girl").then(function (res) {
//     var names = [];
//         for (let i = 0; i < res.length ; i++) {
//        names[i] = res[i].show.name;
//     }
//     return names.sort()
// // }).then(res=>createTable(res));
