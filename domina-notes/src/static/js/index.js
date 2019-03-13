$(document).ready(function(){
    $('#save-text').submit(function(){
        var text = $('#text').val().trim();
        console.log(text);
        if(text == ''){
            return;
        }
        text = text + '\n';
        $.ajax({
            type: 'POST',
            url:'/save',
            data:'text='+ text,
            success: function(msg){
                alert(msg);
            }
        });
    });
});