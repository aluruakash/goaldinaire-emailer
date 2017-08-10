  $(document).ready(function() {

$(".dom").change(function(){
    if(this.value=='yes')
    {
        $('#pref-domain').hide();
        $('#exist-domain').show()
    }
    else
    {
         $('#exist-domain').hide()
         $('#pref-domain').show();
    }
    
});

});

