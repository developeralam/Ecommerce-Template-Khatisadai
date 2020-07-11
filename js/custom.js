$(document).ready(function(){
    var height = $(document).height();

    //Sign In
    $("#sign-in").click(function(){
        $(".main-register").addClass('d-none');
        $(".main-login").removeClass('d-none');
        $(".main-login").css('height', + height);

        $("#login-close").click(function(){
            $(".main-login").addClass('d-none');
        })
    })
    //Sign Up
    $("#sign-up").click(function(){
        $(".main-login").addClass('d-none');
        $(".main-register").removeClass('d-none');
        $(".main-register").css('height', +height);

        $("#register-close").click(function(){
            $(".main-register").addClass('d-none');
        });
    });

});
