/* Variables */
var col_1 = $('.col-1');
var col_2 = $('.col-2');
var col_3 = $('.col-3');
var col_4 = $('.col-4');
var col_5 = $('.col-5');
var col_6 = $('.col-6');
var col_7 = $('.col-7');

var columns = [col_1, col_2, col_3, col_4, col_5, col_6, col_7];

var button_text = $('#btn').text();
var player_1_turn = true;

var player_1 = {
    name: '',
    color: 'blue'
}

var player_2 = {
    name: '',
    color: 'red'
}

/* Prompt player's name */
function prompt_player_name(player) {
    if (player.color === 'red') {
        player.name = prompt('Player One Enter Your Name.  You Will Be Red.');
    } else {
        player.name = prompt('Player Two Enter Your Name.  You Will Be Blue.');
    }
}

/* Clear play area and player data*/
function clear_play_area() {
    columns.forEach(column => {
        column.removeClass('circle-red');
        column.removeClass('circle-blue');
        column.addClass('circle');
        player_1.name, player_2.name = '';
    });
}

/* Change column colour on hover */
function change_column_colour() {
    columns.forEach(column => {
        column.mouseenter(function() {
            column.parent().css('background', 'rgba(0, 255, 0, 0.75)');
        })
        
        column.mouseleave(function() {
            column.parent().css('background', 'grey');
        })
    });
}

/* Column mouse-over grey */
function unchange_column_colour() {
    columns.forEach(column => {
        column.mouseenter(function() {
            column.parent().css('background', 'grey');
        })
    });
}

/* Check if top row in column is empty */
function check_top_empty(space_id) {
    switch (space_id) {
        case 'row-1-col-1':
            if ($('#row-1-col-1 div').hasClass('circle')) return true;
            return false;
    
        case 'row-1-col-2':
            if ($('#row-1-col-2 div').hasClass('circle')) return true;
            return false;

        case 'row-1-col-3':
            if ($('#row-1-col-3 div').hasClass('circle')) return true;
            return false;

        case 'row-1-col-4':
            if ($('#row-1-col-4 div').hasClass('circle')) return true;
            return false;

        case 'row-1-col-5':
            if ($('#row-1-col-5 div').hasClass('circle')) return true;
            return false;

        case 'row-1-col-6':
            if ($('#row-1-col-6 div').hasClass('circle')) return true;
            return false;

        case 'row-1-col-7':
            if ($('#row-1-col-7 div').hasClass('circle')) return true;
            return false;
    
        default:
            return false;
    }
}

/* Place chip */
function place_chip(space_id) {
    switch (space_id) {
        case 'row-1-col-1':
            $('#row-1-col-1 .chip-placed').addClass('circle-red');
            $('#row-1-col-1 .chip-placed').addClass('fadeIn');
            /*
            setTimeout(function() {
                $('#row-1-col-1 div').removeClass('circle');
            }, 2000);*/
            break;
    
        case 'row-1-col-2':
            $('#row-1-col-2 .chip-placed').addClass('circle-red');
            $('#row-1-col-2 .chip-placed').addClass('fadeIn');
            break;

        case 'row-1-col-3':
            $('#row-1-col-3 .chip-placed').addClass('circle-red');
            $('#row-1-col-3 .chip-placed').addClass('fadeIn');
            break;

        case 'row-1-col-4':
            $('#row-1-col-4 .chip-placed').addClass('circle-red');
            $('#row-1-col-4 .chip-placed').addClass('fadeIn');
            break;

        case 'row-1-col-5':
            $('#row-1-col-5 .chip-placed').addClass('circle-red');
            $('#row-1-col-5 .chip-placed').addClass('fadeIn');
            break;

        case 'row-1-col-6':
            $('#row-1-col-6 .chip-placed').addClass('circle-red');
            $('#row-1-col-6 .chip-placed').addClass('fadeIn');
            break;

        case 'row-1-col-7':
            $('#row-1-col-7 .chip-placed').addClass('circle-red');
            $('#row-1-col-7 .chip-placed').addClass('fadeIn');
            break;

        default:
            return false;
    }
}

/* Get id of top row element */
function get_top_id(column) {
    return column[0].parent().attr('id');
}

/* Player selects column to drop chip */
function select_column() {
    change_column_colour();
    columns.forEach(column => {
        column.click(function() {
            var top_space_id = column[0].parentElement.id;
            if (check_top_empty(top_space_id)) {
                place_chip(top_space_id);
            } else {
                alert("didn't work");
            }
        })
    });  
}

/* Play Game */
$('#btn').click(function() {

    if (button_text === "Let's get started!") {
        prompt_player_name(player_1);
        prompt_player_name(player_2);
        $(this).removeClass('btn-success');
        $(this).addClass('btn-danger');
        $(this).text('Reset');
        button_text = 'Reset';

        /* player turn */
        if (player_1_turn) {
            $('#feedback').text(player_1.name + ": It's your turn, please pick a column to drop your blue chip.");
            select_column();
        } else {
            $('#feedback').text(player_2.name + ": It's your turn, please pick a column to drop your red chip.");
        }
    } else {
        $(this).removeClass('btn-danger');
        $(this).addClass('btn-success');
        $(this).text("Let's get started!");
        button_text = "Let's get started!";
        unchange_column_colour();
        clear_play_area();    
    }

})




