console.time("Array initialize");

console.log('This would be the main JS file.');

function getxhr(){
		return (typeof XDomainRequest != 'undefined' && typeof ArrayBuffer == 'undefined') ?
		       new XDomainRequest() : new XMLHttpRequest();
}

function data(url, callback){
var xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    xmlhttp.onreadystatechange = function() {
        //if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                document.body.className = 'ok';
                callback(xmlhttp.responseText);
            } else {
                document.body.className = 'error';
            }
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send( null );
}

data("/javascripts/data.json", function(responseText){
    var json = responseText;
    //var json = '{"result":true,"age":20}',
    obj = JSON.parse(json);
    for (var key in obj) {
        document.body.innerHTML+=key + ':' + obj[key]+'<br>';
    }
});


console.timeEnd("Array initialize");
