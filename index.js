// code your solution here
//default arguments are overridden by the main arguments
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}
console.log(saturdayFun("bathe my dog"));

function mondayWork(work = "go to the office") {
  return `This Monday, I will ${work}.`;
}
console.log(mondayWork("work from home."));

//function-level scope
function wrapAdjective(character = "*") {
  return function (inner = "special") {
    return `You are ${character}${inner}${character}!`;
  };
  result(`You are a ${character}hard worker${character}!`);
}

const specialFunction = wrapAdjective("||");
specialFunction("a hard worker");
