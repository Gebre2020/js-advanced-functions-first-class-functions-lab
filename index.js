// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2);
};

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2);
};

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (multiplyValue){
    return function(value){
        return multiplyValue * value;
    };
};

function fareDoubler(num){
  return num * 2
}

function fareTripler(num){
    return num * 3
  }

const selectDifferentDrivers = function (drivers, driversToReturn) {
    return driversToReturn(drivers);
};