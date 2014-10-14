console.time("Array initialize");

console.log('This would be the main JS file.');


function doAjax(url, callback) {
    var xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            callback(xmlhttp.responseText);
        }
    }

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
};

doAjax("/javascripts/data.json", function(responseText){
    console.log(responseText);
});

doAjax("/json.json", function(responseText){
    console.log(responseText);
});

console.timeEnd("Array initialize");
