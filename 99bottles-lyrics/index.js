console.log('Hello World !');

var result = " "

for(var i = 99; i > 1; i--) {

    if(i>1){
     var lyrics =
    `
    ${i} bottles of beer on the wall, ${i} bottles of beer.
    Take one down and pass it around, ${i-1} bottles of beer on the wall.
    `
    }else{
    var lyrics1 = `
    1 bottle of beer on the wall, 1 bottle of beer.
    Take one down and pass it around, no more bottles of beer on the wall.

    No more bottles of beer on the wall, no more bottles of beer. 
    Go to the store and buy some more, 99 bottles of beer on the wall.
    `
    }

    result = result + lyrics + lyrics1
}

/*console.log('Sing along 99 bootles of beer !');
const totalNoOfbeers = 100;
var noOfBeers = totalNoOfbeers;
var result = '';

while(noOfBeers > 0){
    noOfBeers--;
    var beerword = `${noOfBeers-1}`;
    if(noOfBeers == 1){
        beerword = 'no more';
    }
    if(noOfBeers >= 1){
        var lyricsLine = `${noOfBeers} bottles of beer on the wall, ${noOfBeers} bottles of beer.<br>
        Take one down and pass it around, ${beerword} bottles of beer on the wall.<br>`
    }
    console.log(lyricsLine);
    result = result + lyricsLine;
}
noOfBeers = totalNoOfbeers;
result = result + `No more bottles of beer on the wall, no more bottles of beer.<br>
Go to the store and buy some more, ${noOfBeers - 1} bottles of beer on the wall.<br>`
console.log(result);
document.getElementById('mylyrics').innerHTML = result;*/



document.getElementById('mylyrics').textContent = result;