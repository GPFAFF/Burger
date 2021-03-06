
$(document).ready(function () {

    //Open the menu
    $("#nav-bar").click(function () {

        $('#content').css('min-height', $('body').height());

        $('nav').css('opacity', 1);

        //set the width of primary content container -> content should not scale while animating
        var contentWidth = $('#content').width();

        //set the content with the width that it has originally
        $('#content').css('width', contentWidth);

        //display a layer to disable clicking and scrolling on the content while menu is shown
        $('#contentLayer').css('display', 'block');

        //disable all scrolling on mobile devices while menu is shown
        $('#container').bind('touchmove', function (e) {
            e.preventDefault()
        });

        //set margin for the whole container with a jquery UI animation
        $("#container").animate({"marginLeft": ["40%", 'easeOutExpo']}, {
            duration: 700
        });

    });

    //close the menu
    $("#contentLayer").click(function () {

        //enable all scrolling on mobile devices when menu is closed
        $('#container').unbind('touchmove');

        //set margin for the whole container back to original state with a jquery UI animation
        $("#container").animate({"marginLeft": ["-1", 'easeOutExpo']}, {
            duration: 700,
            complete: function () {
                $('#content').css('width', 'auto');
                $('#contentLayer').css('display', 'none');
                $('nav').css('opacity', 0);
                $('#content').css('min-height', 'auto');

            }
        });
    });

});