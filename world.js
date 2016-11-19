window.onload = function() {
    var look = document.getElementById("lookup");
    look.addEventListener("click", function() {
        var httpRequest = new XMLHttpRequest();
        var search = document.getElementById("country").value;
            httpRequest.open('GET', 'world.php?country=' + search);
            httpRequest.onload = function() {
                if (httpRequest.status === 200) {
                    document.getElementById('result').innerHTML = (httpRequest.responseText);
                }
                else {
                    alert('There was a problem with the request.');
                }    
            };
    httpRequest.send();
    });
}; 