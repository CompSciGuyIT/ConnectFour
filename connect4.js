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
var game_on = false;    // not sure if this variable is redundant and is_won is all that is necessary
var token_sequence = [];

var player_1 = {
    name: '',
    color: 'blue',
    score: 0
}

var player_2 = {
    name: '',
    color: 'red',
    score: 0
}

/* Prompt player's name */
function prompt_player_name(player) {
    if (player.color === 'blue') {
        player.name = prompt('Player One Enter Your Name.  You Will Be Blue.');
        $('#player_1_name').text(player.name);
        $('#player_1_score').text(player.score);
    } else {
        player.name = prompt('Player Two Enter Your Name.  You Will Be Red.');
        $('#player_2_name').text(player.name);
        $('#player_2_score').text(player.score);
    }
}

/* Reset game data */
function reset_game_data() {
    player_1.name, player_2.name = '';
    player_1.score, player_2.score = 0;
    $('#player_1_name').text('');
    $('#player_1_score').text('');
    $('#player_2_name').text('');
    $('#player_2_score').text('');
}

/* Clear play area and player data*/
function clear_play_area() {
    columns.forEach(column => {
        column.removeClass('circle-red');
        column.removeClass('circle-blue');
        column.addClass('circle');
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
// Isn't working - may remove if issue cannot be resolved
// Not a necessary feature 
function column_full(column) {
    $(column).parent().animate({background: 'rgb(255, 128, 0)'}, 500)
    .animate({background: 'grey'}, 500)
    .animate({background: 'rgb(255, 128, 0)'}, 500)
    .animate({background: 'grey'}, 500)
    .animate({background: 'rgb(255, 128, 0)'}, 500)
    .animate({background: 'grey'}, 500);
}

/* Drop chip */
function drop_chip(space) {
    if (player_1_turn) {
        $(space).parent().addClass('circle-blue');
        $(space).parent().addClass('fadeIn');        
    } else {
        $(space).parent().addClass('circle-red');
        $(space).parent().addClass('fadeIn');         
    }
}

/* Switch player turn */
function switch_player() {
    player_1_turn = !player_1_turn;
    if (player_1_turn) {
        $('#feedback').text(player_1.name + ": It's your turn, please pick a column to drop your blue chip.");
    } else {
        $('#feedback').text(player_2.name + ": It's your turn, please pick a column to drop your red chip.");
    }
}

/* Switch column colour */
function switch_column_colour(column) {
    if (player_1_turn) {
        $(column).parent().css('background', '#FF9999');
    } else {
        $(column).parent().css('background', '#9999FF');
    }
}
/* Begin Game */
function begin_game() {
    prompt_player_name(player_1);
    prompt_player_name(player_2);
    $('#btn').removeClass('btn-success');
    $('#btn').addClass('btn-danger');
    $('#btn').text('Reset');
    is_won = false;
    game_on = true;
    $('#feedback').text(player_1.name + ": It's your turn, please pick a column to drop your blue chip.");

}

/* Reset Game */
function reset_game() {
    $('#btn').removeClass('btn-danger');
    $('#btn').addClass('btn-success');
    $('#btn').text("Let's get started!");
    reset_game_data();
    unchange_column_colour();
    clear_play_area(); 
}

// /* Player Turn */
// function player_turn() {
//     if (player_1_turn && game_on) {
//         $('#feedback').text(player_1.name + ": It's your turn, please pick a column to drop your blue chip.");
//         select_column();
//     } else if (!player_1_turn && game_on) {
//         $('#feedback').text(player_2.name + ": It's your turn, please pick a column to drop your red chip.");
//         select_column();
//     }
// }

/* Prompt to play another round */
function another_round() {
    var another_round = prompt("Play another round? (y/n)");
    switch (another_round) {
        case 'y':
        case 'Y':
        case 'yes':
        case 'YES':
        case 'Yes':
            return true;
    
        default:
            return false;
    }
}

/* Checks for available spaces in the column */
function check_for_space(column) {
    for (var row = 6; row > 0; row--) {
        var space = '#row-' + row + column;
        if (!($(space).parent().is('.circle-red')) && !($(space).parent().is('.circle-blue'))) {
            return space;
        }
    }
    return 'FULL';
}

/* Check for a win! */
function check_for_win(placed_token) {
    has_won = check_vertical(placed_token);
    if (has_won) return has_won;
    
    has_won = check_horizontal(placed_token);
    if (has_won) return has_won;
    
    has_won = check_incline_diagonal(placed_token);
    if (has_won) return has_won;
    
    has_won = check_decline_diagonal(placed_token);
    
    return has_won;
}

/* Check for win functions */
// Check vertical tokens
function check_vertical(placed_token) {
    var tokens = 1;
    var token_row_char = placed_token[5];
    var token_row_int = parseInt(token_row_char);
    var check_row = token_row_int + 1;

    while (check_row < 7) {
        alert('check_row - ' + check_row);
        var check_token = '#row-' + check_row + '-col-' + placed_token[11];
        if ((!player_1_turn && $(check_token).parent().is('.circle-red')) || (player_1_turn && $(check_token).parent().is('.circle-blue'))) {
            tokens++;
        } else { break; }
        check_row++;
    }

    alert('tokens = ' + tokens);

    if (tokens > 3) return true;
    
    return false;
}

// Check horizontal tokens
function check_horizontal(placed_token) {
    var tokens = 1;
    var token_column_char = placed_token[11];
    var token_column_int = parseInt(token_column_char);
    var check_column = token_column_int + 1;

    while (check_column < 8) {
        var check_token = '#row-' + placed_token[5] + '-col-' + check_column;
        if ((!player_1_turn && $(check_token).parent().is('.circle-red')) || (player_1_turn && $(check_token).parent().is('.circle-blue'))) {
            tokens++;
        } else { break; }
        check_column++;
    }

    check_column = token_column_int - 1;

    while (check_column > 0) {
        var check_token = '#row-' + placed_token[5] + '-col-' + check_column;
        if ((!player_1_turn && $(check_token).parent().is('.circle-red')) || (player_1_turn && $(check_token).parent().is('.circle-blue'))) {
            tokens++;
        } else { break; }
        check_column--;
    }

    if (tokens > 3) return true;
    
    return false;
}

// Check incline diagonal tokens
function check_incline_diagonal(placed_token) {
    var tokens = 1;

    var token_column_char = placed_token[11];
    var token_row_char = placed_token[5];

    var token_column_int = parseInt(token_column_char);
    var token_row_int = parseInt(token_row_char);

    var check_column = token_column_int + 1;
    var check_row = token_row_int - 1;

    while (check_row > 0 && check_column < 8) {
        var check_token = '#row-' + check_row + '-col-' + check_column;
        if ((!player_1_turn && $(check_token).parent().is('.circle-red')) || (player_1_turn && $(check_token).parent().is('.circle-blue'))) {
            tokens++;
        } else { break; }
        check_column++;
        check_row--;
    }

    var check_column = token_column_int - 1;
    var check_row = token_row_int + 1;

    while (check_row < 7 && check_column > 0) {
        var check_token = '#row-' + check_row + '-col-' + check_column;
        if ((!player_1_turn && $(check_token).parent().is('.circle-red')) || (player_1_turn && $(check_token).parent().is('.circle-blue'))) {
            tokens++;
        } else { break; }
        check_column++;
        check_row--;
    }
    if (tokens > 3) return true;

    return false;
}

// Check decline diagonal tokens
function check_decline_diagonal(placed_token) {
    var tokens = 1;

    var token_column_char = placed_token[11];
    var token_row_char = placed_token[5];

    var token_column_int = parseInt(token_column_char);
    var token_row_int = parseInt(token_row_char);

    var check_column = token_column_int + 1;
    var check_row = token_row_int + 1;

    while (check_row < 7 && check_column < 8) {
        var check_token = '#row-' + check_row + '-col-' + check_column;
        if ((!player_1_turn && $(check_token).parent().is('.circle-red')) || (player_1_turn && $(check_token).parent().is('.circle-blue'))) {
            tokens++;
        } else { break; }
        check_column++;
        check_row++;
    }

    var check_column = token_column_int - 1;
    var check_row = token_row_int - 1;

    while (check_row > 0 && check_column > 0) {
        var check_token = '#row-' + check_row + '-col-' + check_column;
        if ((!player_1_turn && $(check_token).parent().is('.circle-red')) || (player_1_turn && $(check_token).parent().is('.circle-blue'))) {
            tokens++;
        } else { break; }
        check_column--;
        check_row--;
    }

    if (tokens > 3) return true;
    
    return false;
}

/******************************************* */
/*                 Play Game                 */
/******************************************* */

/* Main Button functionality */
$('#btn').click(function() {
    if ($('#btn').text() === "Let's get started!") {
        begin_game(); 
    } else {
        reset_game();
    }
});

/* Player interaction with game board */

// Column 1
$('.col-1').mouseenter(function() {
    if (player_1_turn && game_on) {
        $('.col-1').parent().css('background', '#9999FF');
    } else if (!player_1_turn && game_on){
        $('.col-1').parent().css('background', '#FF9999');
    }
})

$('.col-1').mouseleave(function() {
    $('.col-1').parent().css('background', 'grey');
})

$('.col-1').click(function() {
    if (game_on) {
        var space = check_for_space('-col-1');
        if (space === 'FULL') {
            column_full('.col-1');
        } else {
            switch_column_colour('.col-1');
            drop_chip(space);
            is_won = check_for_win(space);
            switch_player();
        }
    }
})

// Column 2
$('.col-2').mouseenter(function() {
    if (player_1_turn && game_on) {
        $('.col-2').parent().css('background', '#9999FF');
    } else if (!player_1_turn && game_on){
        $('.col-2').parent().css('background', '#FF9999');
    }
})

$('.col-2').mouseleave(function() {
    $('.col-2').parent().css('background', 'grey');
})

$('.col-2').click(function() {
    if (game_on) {
        var space = check_for_space('-col-2');
        if (space === 'FULL') {
            column_full('.col-2');
        } else {
            switch_column_colour('.col-2');
            drop_chip(space);
            is_won = check_for_win(space);
            switch_player();
        }
    }
})

// Column 3
$('.col-3').mouseenter(function() {
    if (player_1_turn && game_on) {
        $('.col-3').parent().css('background', '#9999FF');
    } else if (!player_1_turn && game_on){
        $('.col-3').parent().css('background', '#FF9999');
    }
})

$('.col-3').mouseleave(function() {
    $('.col-3').parent().css('background', 'grey');
})

$('.col-3').click(function() {
    if (game_on) {
        var space = check_for_space('-col-3');
        if (space === 'FULL') {
            column_full('.col-3');
        } else {
            switch_column_colour('.col-3');
            drop_chip(space);
            is_won = check_for_win(space);
            switch_player();
        }
    }
})

// Column 4
$('.col-4').mouseenter(function() {
    if (player_1_turn && game_on) {
        $('.col-4').parent().css('background', '#9999FF');
    } else if (!player_1_turn && game_on){
        $('.col-4').parent().css('background', '#FF9999');
    }
})

$('.col-4').mouseleave(function() {
    $('.col-4').parent().css('background', 'grey');
})

$('.col-4').click(function() {
    if (game_on) {
        var space = check_for_space('-col-4');
        if (space === 'FULL') {
            column_full('.col-4');
        } else {
            switch_column_colour('.col-4');
            drop_chip(space);
            is_won = check_for_win(space);
            switch_player();
        }
    }
})

// Column 5
$('.col-5').mouseenter(function() {
    if (player_1_turn && game_on) {
        $('.col-5').parent().css('background', '#9999FF');
    } else if (!player_1_turn && game_on){
        $('.col-5').parent().css('background', '#FF9999');
    }
})

$('.col-5').mouseleave(function() {
    $('.col-5').parent().css('background', 'grey');
})

$('.col-5').click(function() {
    if (game_on) {
        var space = check_for_space('-col-5');
        if (space === 'FULL') {
            column_full('.col-5');
        } else {
            switch_column_colour('.col-5');
            drop_chip(space);
            is_won = check_for_win(space);
            switch_player();
        }
    }
})

// Column 6
$('.col-6').mouseenter(function() {
    if (player_1_turn && game_on) {
        $('.col-6').parent().css('background', '#9999FF');
    } else if (!player_1_turn && game_on){
        $('.col-6').parent().css('background', '#FF9999');
    }
})

$('.col-6').mouseleave(function() {
    $('.col-6').parent().css('background', 'grey');
})

$('.col-6').click(function() {
    if (game_on) {
        var space = check_for_space('-col-6');
        if (space === 'FULL') {
            column_full('.col-6');
        } else {
            switch_column_colour('.col-6');
            drop_chip(space);
            is_won = check_for_win(space);
            switch_player();
        }
    }
})

// Column 7
$('.col-7').mouseenter(function() {
    if (player_1_turn && game_on) {
        $('.col-7').parent().css('background', '#9999FF');
    } else if (!player_1_turn && game_on){
        $('.col-7').parent().css('background', '#FF9999');
    }
})

$('.col-7').mouseleave(function() {
    $('.col-7').parent().css('background', 'grey');
})

$('.col-7').click(function() {
    if (game_on) {
        var space = check_for_space('-col-7');
        if (space === 'FULL') {
            column_full('.col-7');
        } else {
            switch_column_colour('.col-7');
            drop_chip(space);
            is_won = check_for_win(space);
            switch_player();
        }
    }
})
