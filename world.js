window.onload = function() {
    var look = document.getElementById("lookup");
    look.addEventListener("click", function() {
        var httpRequest = new XMLHttpRequest();
        var all = '';
        var search = document.getElementById("country").value;
            //httpRequest.open('GET', 'world.php?country=' + search);
        var box = document.getElementById("checkbox");
        
        if (search !== '' ||  box.checked)
        {    
            if (box.checked)
            {
                all = box.value;
            }
            else
            {
                all = '';
            }
            httpRequest.open('GET', 'world.php?country=' + search + '&all=' + all);
            httpRequest.onload = function() {
                if (httpRequest.status === 200) {
                    document.getElementById('result').innerHTML = (httpRequest.responseText);
                }
                else {
                    alert('There was a problem with the request.');
                }    
            };
    httpRequest.send();
        }
        else
        {
            document.getElementById('result').innerHTML = 'You may enter a country to lookup, or check the box to lookup all countries.';
        }
    });
};