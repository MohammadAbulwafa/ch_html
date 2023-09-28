$(document).ready(function() {
    $(document).on("click", ".play-button", function(e) {
        $(this).hide();
        $(".pause-button").show();
        $(this).closest('.carousel-item').find('video').get(0).play();
    });
    $(document).on("click", ".pause-button", function(e) {
        $(this).hide();
        $(".play-button").show();
        $(this).closest('.carousel-item').find('video').get(0).pause();
    });

    $('.carousel').carousel({
        interval: false,
    }).on('slide.bs.carousel', function(e) {
        $(this).find('video').trigger('pause');
        $(".play-button").show();
        $(".pause-button").hide();
    });

    var url = $("#videoFrame").attr("src");
    $("#exampleModal").on("hidden.bs.modal", function() {
        $("#videoFrame").attr("src", "");
    });
    $("#exampleModal").on("show.bs.modal", function() {
        $("#videoFrame").attr("src", url);
    });


    $(document).on("click", "#saveItem-1", function(e) {
        $("#nextToList-1").removeAttr('disabled');
        $("#nextToList-1").removeClass('disabled');
    });
    $(document).on("click", "#addListBtn-1", function(e) {
        $("#addListForm-1").show();
    });
    $(document).on("click", ".removeIcon", function(e) {
        $(this).parents('.inner-card-list-item').hide();
    });
    $(document).on("click", "#listAddBtn-1", function(e) {
        $('.inner-card-body').find('.inner-card-list-item').show();
    });

    $(document).on('change', '#confirm1', function() {
        if (this.checked) {
            $('#nextToBPPFSuccessBtn-1').removeClass('disabled');
        } else {
            $('#nextToBPPFSuccessBtn-1').addClass('disabled');
        }
    });

    $('#file-1').change(function() {
        var label = $(this).prev('label');
        var i = label.clone();
        var file = $('#file-1')[0].files[0].name;
        $(this).prev('label').html('<i class="fa fa-file-o d-inline-block me-2"></i>' + file);
        label.removeClass('btn-brand-secondary-outline btn-small');
        label.removeClass('btn-brand-outline btn-small');
        label.addClass('fileLabel');
        label.parent().find('.file-label').hide();
        label.parents().find('.card-box #file-sync-1').removeClass('d-none');
    });

    $('#file-2').change(function() {
        var label = $(this).prev('label');
        var i = label.clone();
        var file = $('#file-2')[0].files[0].name;
        $(this).prev('label').html('<i class="fa fa-file-o d-inline-block me-2"></i>' + file);
        label.removeClass('btn-brand-secondary-outline btn-small');
        label.removeClass('btn-brand-outline btn-small');
        label.addClass('fileLabel');
        label.parent().find('.file-label').hide();
        label.parents().find('.card-box #file-sync-2').removeClass('d-none');
    });

    $('#file-3').change(function() {
        var label = $(this).prev('label');
        var i = label.clone();
        var file = $('#file-3')[0].files[0].name;
        $(this).prev('label').html('<i class="fa fa-file-o d-inline-block me-2"></i>' + file);
        label.removeClass('btn-brand-secondary-outline btn-small');
        label.removeClass('btn-brand-outline btn-small');
        label.addClass('fileLabel');
        label.parent().find('.file-label').hide();
        label.parents().find('.card-box #file-sync-3').removeClass('d-none');
    });


});