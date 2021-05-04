const list = [ 'Lisa', 'Kaitlin', 'Jan' ]

function writeCards( guests, surprise ) {
    for (let i = 0; i < guests.length; i++) {
        guests[i] = (`Thank you, ${guests[i]}, for the wonderful ${surprise} gift!`);
        debugger;
    }
    return guests;
}

function countDown(number) {
    while (number > -1) {
        console.log(number);
        number--;
    }
}