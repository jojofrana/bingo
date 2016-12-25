var imgCodes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38];

function sorteio(){

    if($(imgCodes).length > 0){
        var img = getRandomImg(imgCodes);

        var li = $('<li></li>').append($('#current-result').find('img'));
        $(li).appendTo('#previous-results');

        $('#current-result').append('<img src="imgs/' + img + '.png" />');
    }
}

function getRandomImg(array){
	var index = parseInt(Math.random()*($(array).length));
    return array.splice(index, 1);
}
