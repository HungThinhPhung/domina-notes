$('#save-text').submit(function(){
    console.log('asdaf');
    var text = $('#text').text().trim();
    console.log(text);
    if(text == ''){
        return;
    }
    text = text + '\n';
    console.log(window.location.href.replace('notes', 'save') + "?text=");
    xhttp.open("GET", window.location.href.replace('notes', 'save') + "?text="+text, true);
});