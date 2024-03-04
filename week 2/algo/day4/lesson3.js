var arr1 = [1, 1, 2, 2, 1];
var arr2 = [3, 2, 1, 1, 2, 3];
function symetrie(arr) {
    for (var i = 0; i < arr.length / 2; i++)
        for (var k = arr.length; k < arr.length; k--)


            if (arr[i] != arr[k]) {
                return "pas de symetrie"
            }
}



console.log('hello there');