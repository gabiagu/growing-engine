$(document).ready(function() {
    var playerCounter = 0;
    // $(".gsc__add_player_form")

    $('.gsc__add_player').click(function() {
        // get the text value
        var playerName = $('.gsc__add_player_name').val();
        playerCounter++;
        
        if ( playerName != '' ) {
            
            // add another row for the player
            $('.gsc__players_list').append(
                '<div class="gsc__player_row gsc__player_'+playerCounter+'"><p class="gsc__player_name">'+playerName+'</p><p class="gsc__score">0</p><input type="text" class="gsc__input_score"><button class="gsc__add_score">add</button></div>'
                );

            // empty the input field
            $('.gsc__add_player_name').val('');

        };

    });

    $(document).on( 'click', '.gsc__add_score', function() {
        
        var parent = $(this).parents('.gsc__player_row');
        scoreIncrement = $('.gsc__input_score', parent).val();
        console.log(scoreIncrement);
        scoreIncrement = parseInt(scoreIncrement);
        console.log(scoreIncrement);


        if ( $.isNumeric(scoreIncrement) && scoreIncrement != 0 ) {

            var scorePlaceholder = $('.gsc__score', parent),
                scoreInitialValue = parseInt($('.gsc__score', parent).text());
                scoreTotal = scoreInitialValue + scoreIncrement;

            $(scorePlaceholder).html(scoreTotal);

            console.log(scorePlaceholder+' '+scoreInitialValue+' '+scoreIncrement);

        } else {
            console.log('no boom '+scoreIncrement+''+$.isNumeric(scoreIncrement));
        }

        // reset everything
        /*var parent = null,
            scorePlaceholder = null,
            scoreInitialValue = null,
            scoreTotal = null;*/

    });

});