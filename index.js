function wakeDog(dogName, dogBreed) {
  const statement = `Wake ${dogName} the ${dogBreed}`;
  console.log(statement);
  return statement;
}

function leashDog(dogName, dogBreed) {
  const statement = `Leash ${dogName} the ${dogBreed}`;
  console.log(statement);
  return statement;
}

function walkToPark(dogName, dogBreed) {
  const statement = `Walk to the park with ${dogName} the ${dogBreed}`;
  console.log(statement);
  return statement;
}

function throwFrisbee(dogName, dogBreed) {
  const statement = `Throw the frisbee for ${dogName} the ${dogBreed}`;
  console.log(statement);
  return statement;
}

function walkHome(dogName, dogBreed) {
  console.log(`Walk home with ${dogName} the ${dogBreed}`);
}

function unleashDog(dogName, dogBreed) {
  console.log(`Unleash ${dogName} the ${dogBreed}`);
}

const routine = [ wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed) {
  return routine.map( f => f(dogName, dogBreed));
}
