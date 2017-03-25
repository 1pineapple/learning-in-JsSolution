    var i=0;
    var result=[];
var map = function (callback, inputArray) {
    var helper=function(i,inputArray){
        if(i<a){
        result[i]=callback(inputArray[i],i);
        return helper(++i,inputArray);
    }
    else{
        return result;
    }
};
var a=inputArray.length;
return helper(i,inputArray);
};

var inputArray = [1, 2, 3, 4, 5];
var outputArray = [1, 3, 5, 7, 9];
deepFreeze(inputArray);
var callback = function (element, index) {
  return element + index;
};

var result = map(callback, inputArray);
expect(result).toEqual(outputArray);

console.log('Test successful!');