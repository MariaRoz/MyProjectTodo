var rooturl = 'http://api.tvmaze.com/search/shows?q=';

function getJSON(url) {
    return new Promise(function(resolve, reject){
        var req = new XMLHttpRequest();
        req.open('GET', url, true);
        req.responseType = 'json';
        req.onload = function() {
            if (req.status == 200) {
                resolve(req.response);
                // console.log(req.response)
            }
            else {
                reject(Error(req.statusText));
            }
        };
        req.onerror = function() {
            reject(Error("Network Error"));
        };
        req.send();
    });
}
function showSearch(query) {
    return getJSON(rooturl+encodeURIComponent(query));
    }

function getComponents(data) {
        var array=[];
        showSearch(data).then( function (res) {
            for (let i = 0; i <res.length; i++) {
                var data = res[i].show;
                array[i] = [data.name, data.language, data.genres, data.status, data.rating.average]
            }
         return array })
            // .then(r=>console.log(r))
            .then(res=> createTable(res) );

}

 function createTable(result) {
    var table = document.getElementById("table");
    table.innerHTML = " ";
    table.innerHTML = '<th>Show name</th><th>Language</th><th>Genres</th><th>Status of show</th><th>Rating</th>';
        for (var i = 0; i < data.length; i++) {
            var tr = document.createElement("tr");
            for (var j = 0; j < data[i].length; j++) {
                var td = document.createElement("td");
                td.innerText = data[i][j];
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
    }
getComponents("girl");


function display() {
    getComponents(document.getElementById('show').value);
}

// function sort(){
//
// }
