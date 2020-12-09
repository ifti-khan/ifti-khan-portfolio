$(document).ready(function () {
    $("#anchor1").click(function () {
        $('#anchor1').addClass('active');
        $('#anchor2').removeClass('active');
        $('#anchor3').removeClass('active');
        $('#anchor4').removeClass('active');
        $('#anchor5').removeClass('active');
    });

    $("#anchor2").click(function () {
        $('#anchor1').removeClass('active');
        $('#anchor2').addClass('active');
        $('#anchor3').removeClass('active');
        $('#anchor4').removeClass('active');
        $('#anchor5').removeClass('active');
    });

    $("#anchor3").click(function () {
        $('#anchor1').removeClass('active');
        $('#anchor2').removeClass('active');
        $('#anchor3').addClass('active');
        $('#anchor4').removeClass('active');
        $('#anchor5').removeClass('active');
    });

    $("#anchor4").click(function () {
        $('#anchor1').removeClass('active');
        $('#anchor2').removeClass('active');
        $('#anchor3').removeClass('active');
        $('#anchor4').addClass('active');
        $('#anchor5').removeClass('active');
    });

    $("#anchor5").click(function () {
        $('#anchor1').removeClass('active');
        $('#anchor2').removeClass('active');
        $('#anchor3').removeClass('active');
        $('#anchor4').removeClass('active');
        $('#anchor5').addClass('active');
    });

    $(".aboutme_section").mouseenter(function () {
        $("#anchor1").addClass("active");
    });

    $(".aboutme_section").mouseleave(function () {
        $("#anchor1").removeClass("active");
    });

    $(".work_section").mouseenter(function () {
        $("#anchor2").addClass("active");
    });

    $(".work_section").mouseleave(function () {
        $("#anchor2").removeClass("active");
    });

    $(".education_section").mouseenter(function () {
        $("#anchor3").addClass("active");
    });

    $(".education_section").mouseleave(function () {
        $("#anchor3").removeClass("active");
    });

    $(".skills_section").mouseenter(function () {
        $("#anchor4").addClass("active");
    });

    $(".skills_section").mouseleave(function () {
        $("#anchor4").removeClass("active");
    });

    $(".hobbies_interests_section").mouseenter(function () {
        $("#anchor5").addClass("active");
    });

    $(".hobbies_interests_section").mouseleave(function () {
        $("#anchor5").removeClass("active");
    });



});
