(function () {
    function showMap(e) {
        e.preventDefault;
        document.getElementById('map').className = 'show';
    };

    document.getElementById('address').onclick = showMap;
})()
