$('body').on('click', '.showpassword', function(){
    if ($(this).is(':checked')){
    $('#password-input').attr('type', 'text');
    } else {
    $('#password-input').attr('type', 'password');
    }
    if ($(this).is(':checked')){
        $('#password-forgot').attr('type', 'text');
        } else {
        $('#password-forgot').attr('type', 'password');
        }
  });