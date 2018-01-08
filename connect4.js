/* Variables */
var col_1 = $('.col-1');
var col_2 = $('.col-2');
var col_3 = $('.col-3');
var col_4 = $('.col-4');
var col_5 = $('.col-5');
var col_6 = $('.col-6');
var col_7 = $('.col-7');

var columns = [col_1, col_2, col_3, col_4, col_5, col_6, col_7];

var game_on = false;
var button_text = $('#btn').text();
var player_1_turn = true;
var is_won = false;

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

/* Change column colour on hover */
function change_column_colour() {
    columns.forEach(column => {
        column.mouseenter(function() {
            if (player_1_turn) {
                column.parent().css('background', '#9999FF');
            } else {
                column.parent().css('background', '#FF9999');
            }
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
        $(column).parent().css('background', 'rgb(255, 128, 0)');
    }, 250);
    setTimeout(() => {
        $(column).parent().css('background', 'grey');
    }, 250);
    setTimeout(() => {
        $(column).parent().css('background', 'rgb(255, 128, 0)');
    }, 250);
    setTimeout(() => {
        $(column).parent().css('background', 'grey');
    }, 250);
    setTimeout(() => {
        $(column).parent().css('background', 'rgb(255, 128, 0)');
    }, 250);
}

/* Check if top row in column is empty */
function check_space(space_id) {
    switch (space_id) {
        case 'row-1-col-1':
            if (($('#row-1-col-1').is('circle-red')) || ($('#row-1-col-1').is('circle-blue'))) {
                return true;
            } else {
                return false;
            }
    
        case 'row-1-col-2':
            if (($('#row-1-col-2').hasClass('circle-red')) || ($('#row-1-col-2').hasClass('circle-blue'))) {
                return true;
            } else {
                return false;
            }

        case 'row-1-col-3':
            if (($('#row-1-col-3').hasClass('circle-red')) || ($('#row-1-col-3').hasClass('circle-blue'))) {
                return true;
            } else {
                return false;
            }

        case 'row-1-col-4':
            if (($('#row-1-col-4').hasClass('circle-red')) || ($('#row-1-col-4').hasClass('circle-blue'))) {
                return true;
            } else {
                return false;
            }

        case 'row-1-col-5':
            if (($('#row-1-col-5').hasClass('circle-red')) || ($('#row-1-col-5').hasClass('circle-blue'))) {
                return true;
            } else {
                return false;
            }

        case 'row-1-col-6':
            if (($('#row-1-col-6').hasClass('circle-red')) || ($('#row-1-col-6').hasClass('circle-blue'))) {
                return true;
            } else {
                return false;
            }

        case 'row-1-col-7':
            if (($('#row-1-col-7').hasClass('circle-red')) || ($('#row-1-col-7').hasClass('circle-blue'))) {
                return true;
            } else {
                return false;
            }
    }
}

/* Place chip */
function place_chip(space_id) {
    switch (space_id) {
        case 'row-1-col-1':
            if (player_1_turn) {
                $('#row-1-col-1').addClass('circle-blue');
                $('#row-1-col-1').addClass('fadeIn');          
            } else {
                $('#row-1-col-1').addClass('circle-red');
                $('#row-1-col-1').addClass('fadeIn');             
            }

            player_1_turn = !player_1_turn;   
            break;
    
        case 'row-1-col-2':
            if (player_1_turn) {
                $('#row-1-col-1').addClass('circle-blue');
                $('#row-1-col-1').addClass('fadeIn');             
            } else {
                $('#row-1-col-1').addClass('circle-red');
                $('#row-1-col-1').addClass('fadeIn');         
            }

            player_1_turn = !player_1_turn;       
            break;

        case 'row-1-col-3':
            if (player_1_turn) {
                $('#row-1-col-1').addClass('circle-blue');
                $('#row-1-col-1').addClass('fadeIn');           
            } else {
                $('#row-1-col-1').addClass('circle-red');
                $('#row-1-col-1').addClass('fadeIn');          
            }

            player_1_turn = !player_1_turn;      
            break;

        case 'row-1-col-4':
            if (player_1_turn) {
                $('#row-1-col-1').addClass('circle-blue');
                $('#row-1-col-1').addClass('fadeIn');          
            } else {
                $('#row-1-col-1').addClass('circle-red');
                $('#row-1-col-1').addClass('fadeIn');           
            }

            player_1_turn = !player_1_turn;     
            break;

        case 'row-1-col-5':
            if (player_1_turn) {
                $('#row-1-col-1').addClass('circle-blue');
                $('#row-1-col-1').addClass('fadeIn');             
            } else {
                $('#row-1-col-1').addClass('circle-red');
                $('#row-1-col-1').addClass('fadeIn');           
            }

            player_1_turn = !player_1_turn;     
            break;

        case 'row-1-col-6':
            if (player_1_turn) {
                $('#row-1-col-1').addClass('circle-blue');
                $('#row-1-col-1').addClass('fadeIn');          
            } else {
                $('#row-1-col-1').addClass('circle-red');
                $('#row-1-col-1').addClass('fadeIn');          
            }

            player_1_turn = !player_1_turn;      
            break;

        case 'row-1-col-7':
            if (player_1_turn) {
                $('#row-1-col-1').addClass('circle-blue');
                $('#row-1-col-1').addClass('fadeIn');          
            } else {
                $('#row-1-col-1').addClass('circle-red');
                $('#row-1-col-1').addClass('fadeIn');         
            }

            player_1_turn = !player_1_turn;       
            break;
    }
}

/* Drop chip */
function drop_chip(space) {
    if (player_1_turn) {
        $(space).addClass('circle-blue');
        $(space).addClass('fadeIn');          
    } else {
        $(space).addClass('circle-red');
        $(space).addClass('fadeIn');         
    }
}

/* Player selects column to drop chip */
function select_column() {
    change_column_colour();
    drop_chip();
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

/* Player Turn */
function player_turn() {
    if (player_1_turn && game_on) {
        $('#feedback').text(player_1.name + ": It's your turn, please pick a column to drop your blue chip.");
        select_column();
    } else if (!player_1_turn && game_on) {
        $('#feedback').text(player_2.name + ": It's your turn, please pick a column to drop your red chip.");
        select_column();
    }
}

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
        if (!($(space).is('circle-red')) && !($(space).is('circle-blue'))) {
            return space;
        }
    }
    return 'FULL';
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
    var space = check_for_space('-col-1');
    if (space === 'FULL') {
        column_full('.col-1');
    } else {
        drop_chip(space);
        check_for_win(space);
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


// if (!game_on) {
//     unchange_column_colour();
// } else {
//     change_column_colour();
//     player_turn();
// }

// do {
//     do {
//         if (player_1_turn) {
//             do {
//                 player_turn();
//             } while (condition);        
//         } else {
//             do {
//                 player_turn();
//             } while (condition);
//         }        
//     } while (!(is_won));

//     play = another_round();
// } while (play === true);

// do {
//     do {
//         player_turn();
//         // if (player_1_turn) {
//         //     do {
//         //         player_turn();     
//         //     } while (player_1_turn);        
//         // } else {
//         //     do {
//         //         player_turn();     
//         //     } while (!player_1_turn);
//         // }  
        
//         // placeholder
//         var win = prompt('win game y/n');
//         if (win === 'y') {
//             is_won = true;
//         }

//     } while (!(is_won));

//     play = another_round();
// } while (play === true);


// do {

//     play = another_round();
// } while (play === true);

// while (!(is_won)) {      // While game has not been won

//     // The next 4 lines are needed to keep the browserr from crashing
    // var win = prompt('win game y/n');
    // if (win === 'y') {
    //     is_won = true;
    // }

//     player_turn(); 
// } 

// while (1) {
//     reset_game_data();
//     do {

//         play = another_round();
//     } while (play === true);
// }