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
var is_won = false;

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
    if (player.color === 'blue') {
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

/* Column is full animation */
function column_full(column) {
    setTimeout(() => {
        columns[column].parent().css('background', 'rgb(255, 128, 0)');
    }, 250);
    setTimeout(() => {
        columns[column].parent().css('background', 'grey');
    }, 250);
    setTimeout(() => {
        columns[column].parent().css('background', 'rgb(255, 128, 0)');
    }, 250);
    setTimeout(() => {
        columns[column].parent().css('background', 'grey');
    }, 250);
    setTimeout(() => {
        columns[column].parent().css('background', 'rgb(255, 128, 0)');
    }, 250);
}

/* Check if top row in column is empty */
function check_space(space_id) {
    switch (space_id) {
        case 'row-1-col-1':
            if (!($('#row-1-col-1').hasClass('circle-red')) || !($('#row-1-col-1').hasClass('circle-blue'))) {
                return true;
            } else {
                return false;
            }
    
        case 'row-1-col-2':
            if (!($('#row-1-col-2').hasClass('circle-red')) || !($('#row-1-col-2').hasClass('circle-blue'))) return true;
            return false;

        case 'row-1-col-3':
            if (!($('#row-1-col-3').hasClass('circle-red')) || !($('#row-1-col-3').hasClass('circle-blue'))) return true;
            return false;

        case 'row-1-col-4':
            if (!($('#row-1-col-4').hasClass('circle-red')) || !($('#row-1-col-4').hasClass('circle-blue'))) return true;
            return false;

        case 'row-1-col-5':
            if (!($('#row-1-col-5').hasClass('circle-red')) || !($('#row-1-col-5').hasClass('circle-blue'))) return true;
            return false;

        case 'row-1-col-6':
            if (!($('#row-1-col-6').hasClass('circle-red')) || !($('#row-1-col-6').hasClass('circle-blue'))) return true;
            return false;

        case 'row-1-col-7':
            if (!($('#row-1-col-7').hasClass('circle-red')) || !($('#row-1-col-7').hasClass('circle-blue'))) return true;
            return false;
    
        default:
            return false;
    }
}

/* Place chip */
function place_chip(space_id) {
    switch (space_id) {
        case 'row-1-col-1':
            $('#row-1-col-1').addClass('circle-red');
            $('#row-1-col-1').addClass('fadeIn');
            break;
    
        case 'row-1-col-2':
            $('#row-1-col-2').addClass('circle-red');
            $('#row-1-col-2').addClass('fadeIn');
            break;

        case 'row-1-col-3':
            $('#row-1-col-3').addClass('circle-red');
            $('#row-1-col-3').addClass('fadeIn');
            break;

        case 'row-1-col-4':
            $('#row-1-col-4').addClass('circle-red');
            $('#row-1-col-4').addClass('fadeIn');
            break;

        case 'row-1-col-5':
            $('#row-1-col-5').addClass('circle-red');
            $('#row-1-col-5').addClass('fadeIn');
            break;

        case 'row-1-col-6':
            $('#row-1-col-6').addClass('circle-red');
            $('#row-1-col-6').addClass('fadeIn');
            break;

        case 'row-1-col-7':
            $('#row-1-col-7').addClass('circle-red');
            $('#row-1-col-7').addClass('fadeIn');
            break;

        default:
            return false;
    }
}

/* Player selects column to drop chip */
function select_column() {
    change_column_colour();
    drop_chip();
}

/* Drop chip */
function drop_chip() {
    columns.forEach(column => {
        column.click(function() {
            var top_space_id = column[0].firstChild.id;
            if (false) {
                alert('empty');
                place_chip(top_space_id);
            } else {
                alert('full');
                column_full(column);
            }
        })
    }); 
}
/* Begin Game */
function begin_game() {
    prompt_player_name(player_1);
    prompt_player_name(player_2);
    $('#btn').removeClass('btn-success');
    $('#btn').addClass('btn-danger');
    $('#btn').text('Reset');
}

/* Reset Game */
function reset_game() {
    $('#btn').removeClass('btn-danger');
    $('#btn').addClass('btn-success');
    $('#btn').text("Let's get started!");
    unchange_column_colour();
    clear_play_area(); 
}

/* Player Turn */
function player_turn() {
    if (player_1_turn) {
        $('#feedback').text(player_1.name + ": It's your turn, please pick a column to drop your blue chip.");
        select_column();
    } else {
        $('#feedback').text(player_2.name + ": It's your turn, please pick a column to drop your red chip.");
    }
}

/******************************************* */
/*                 Play Game                 */
/******************************************* */
$('#btn').click(function() {
    if ($('#btn').text() === "Let's get started!") {
        begin_game();
        while (!(is_won)) {      // While game has not been won

            // The next 4 lines are needed to keep the browserr from crashing
            var win = prompt('win game y/n');
            if (win === 'y') {
                is_won = true;
            }

            player_turn(); 
        }       
    } else {
        reset_game();
    }
})




