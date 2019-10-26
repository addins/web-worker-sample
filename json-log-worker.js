onmessage = function(e) {
    var geojsonInput = e.data;
    this.console.log(geojsonInput);
    this.postMessage(geojsonInput);
};