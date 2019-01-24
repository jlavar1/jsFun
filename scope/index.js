const scope = {
  exerciseA() {
    let personA = 'Paul';
    let personB = 'Ben';
    let personC = 'Tom';

    function changePerson() {
      if (personA === 'Paul') {
        person = 'CardiB';
        beautifyPerson();
      }

      function beautifyPerson() {
        // Log A: personB
        
        if (personB.includes('B')) {
          personB = person;
          personC = personB;
          // Log B: personC
        }
      }

      personC = personA;

      // Log C: personB
    }

    changePerson();

    // Log D: personC

    const result =  [
      { A: 'Ben' },
      { B: 'CardiB' },
      { C: 'CardiB' },
      { D: 'Paul' }
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseB() {
    let number = 30;

    function numberFunction() {
      let number = 75;

      if (number === 75) {
        let number = 28;
      }

      // Log A: number 75 because 75 is functionally scoped. The number is not 28 because 28 is only number within the blocked if statement. 

      function newNumber() {
        number = 64;

        // Log B: number 64 because log b is called within the function newNumber. Within the function new number, number is assigned a value of 64.
      }

      newNumber();

      // Log C: number 64 because when number was assigned to 64 within the newNumber function, the value of 64 was a global value that affected the upmost "number" of the numberFunction, which was 75 and is now 64. 
    }

    numberFunction();

    // Log D: number 30 because the number was globally scoped and was not mutated. The log d was called outside of the functions and the block scopes, so it must log the global number. 

    const result = [{A: 75}, {B: 64}, {C: 64}, {D: 30}];
    return result;

    // Annotation:
      // Log A: number 75 because 75 is functionally scoped. The number is not 28 because 28 is only number within the blocked if statement. 

      // Log B: number 64 because log b is called within the function newNumber. Within the function new number, number is assigned a value of 64.

      // Log C: number 64 because when number was assigned to 64 within the newNumber function, the value of 64 was a global value that affected the upmost "number" of the numberFunction, which was 75 and is now 64. 

      // Log D: number 30 because the number was globally scoped and was not mutated. The log d was called outside of the functions and the block scopes, so it must log the global number. 
  },

  exerciseC() {
    let greeting = 'Hello';

    function greetingFunction() {
      var greeting = 'Yo';

      if (greeting === 'Yo') {
        let greeting = 'Howdy';
      }

      // Log A: greeting 'Yo'

      function newPhrase() {
        greeting = 'Hey';

        // Log B: greeting 'Hey'
      }

      newPhrase();

      // Log C: greeting 'Hey'
    }

    greetingFunction();

    // Log D: greeting 'Hello'

    const result = [ 
      { A: 'Yo' },
      { B: 'Hey' },
      { C: 'Hey' },
      { D: 'Hello'}
      ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseD() {
    let greeting = 'howdy';

    const greetingGenerator = () => {
      let greeting = 'hi';

      if (greeting === 'hi') {
        let greeting = 'hello';
      }

      // Log A: greeting 'hi' because greetingGenerator is functionally scoped, so the log will first look within the function and then outside of the function for variables. 'hi' does not change to 'hello' because 'hello' is contained in a block scoped if statement. 

      const newGreeting = ()  => {
        greeting = 'welcome';

        // Log B: greeting 'welcome' because it is functionally scoped and the console log is called within the function. The assignment of 'welcome' to variable greeting will affect the uppermost greeting contained in the function. 
      };

      newGreeting();

      // Log C: greeting 'welcome' the uppermost functionally scoped greeting was assigned a value of 'welcome' within the function newGreeting. 
    };

    greetingGenerator();

    // Log D: greeting 'howdy' because this is a globally scoped log. 

    const result = [{A: 'hi'}, {B: 'welcome'}, {C: 'welcome'}, {D: 'howdy'}];


    return result;

    // Annotation:
      // Log A: greeting 'hi' because greetingGenerator is functionally scoped, so the log will first look within the function and then outside of the function for variables. 'hi' does not change to 'hello' because 'hello' is contained in a block scoped if statement. 

      // Log B: greeting 'welcome' because it is functionally scoped and the console log is called within the function. The assignment of 'welcome' to variable greeting will affect the uppermost greeting contained in the function. 

      // Log C: greeting 'welcome' the uppermost functionally scoped greeting was assigned a value of 'welcome' within the function newGreeting. 

      // Log D: greeting 'howdy' because this is a globally scoped log. 
  },

  exerciseE() {
    let name = 'Brittany';

    function sayName() {
      let name = 'Pam'; //nathaniel

      if (name === 'Pam') {
        name = 'Nathaniel';

        if (name.length > 0) {
          let name = 'Brittany';
        }

        // Log A: name nathaniel
      }

      // Log B: name  nathaniel
    }

    // Log C: name - Brittany because this is called first in execution phase

    sayName(); 

    // Log D: name  

    const result = [{C: 'Brittany'}, {A: 'Nathaniel'}, {B: 'Nathaniel'}, {D: 'Brittany'}];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseF() {
    var dog = 'Spot'; //biscuit after 210 (leaked out)

    function petDog() {
      // Log A: dog - spot

      if (dog === 'Spot') {
        let dog = 'Fluffy';
      }

      function rollOver() {
        // Log B: dog - spot

        dog = 'Biscuit';

        // Log C: dog - biscuit because 210 assigned dog variable to biscuit in global

      }

      rollOver();

      // Log D: dog - biscuit because 198 biscuit is new dog
    }

    petDog();

    // Log E: dog - biscuit because global dog is biscuit  after 210

    const result = [{A: 'Spot'}, {B: 'Spot'}, {C: 'Biscuit'}, {D: 'Biscuit'}, {E: 'Biscuit'}];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseG() {
    var fruit = 'apple'; 

    function eatFruit() {

      if (fruit !== 'kiwi') {
        var fruit = 'mango';

        if (fruit) {
          // Log A: reference error
          const fruit = 'strawberry';
        }

        // Log B: fruit mango
      }

      // Log C: fruit mango
    }

    eatFruit();

    // Log D: fruit 

    const result = [{A: 'reference error'}, {B: 'mango'}, {C: 'mango'}, {D: 'apple'}];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseH() {
    let num = 6;

    const fn1 = function() {
      let num = 4;

      // Log A: num 4

      if (num < 5) {
        const num = 9;

        fn2(num);

        const newNum = num;

        // Log B: newNum 9
      }

      newNum = num; 

      // Log C: newNum 
    };

    const fn2 = function(num){
      // Log D: num 9

      num = num + 1; //num 

      // Log E: num 
    };

    fn1();

    const result = [{A: 4}, {D: 9}, {E: 10}, {B: 9}, {C: 4}];

    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseI() {
    var hunger = 100; //75 after line 307 executes //80 after line 321 executes//55 after 307 executes for the second time

    function eatSnack() {
      hunger -= 25;
      // Log A: hunger 75 // look at the global hunger variable, see that it is 80 and subtract 25 to make it 55.
      gorgeYourself();

      function gorgeYourself() {
        const hunger = 0;
        // Log B: hunger 0 does not change and cannot be affected because it is a constant variable. it is also block scoped, so it does not leak out. // still 0 the second time around. Above still applies as it is constant variable and block scoped.
      }

      // Log C: hunger 75 because uppermost hunger is 75 after line 307 is executed. // check 
    }

    eatSnack();

    hunger += 5;
    // Log D: hunger 80 because we add 5 to the global hunger variable 

    eatSnack();
    // Log E: hunger check the global hunger variable and see that it is 55 after line 307 executes again. 

    const result = [{A: 75}, {B: 0}, {C: 75}, {D: 80}, {A: 55}, {B: 0}, {C: 55}, {E: 55}];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseJ() {
    let sandwich = 'ketchup sandwich';

    // Log A: sandwich

    const addChipotle = () => {
      // Log B: toppings
      var toppings = 'chipotle sauce';

      if (toppings === 'chipotle sauce') { 
        sandwich = 'not a mediocre sandwich';
      }

      // Log C: sandwich
    };

    const addCheese = () => {
      let cheeseTopping = 'gouda';
      // Log D: cheeseTopping

      const shesTheManReference = () => {
        amandaBynes = 'National Treasure';
      };

      shesTheManReference();
    };

    cheeseTopping = 'kraft';
    addCheese();

    addChipotle();
    // Log E: sandwich
    // Log F: amandaBynes

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseK() {
    let num = 10;

    function foo() {
      if (num > 5) {
        num = 7;
      }
      // Log A: num
    }

    foo();

    // Log B: num

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseL() {
    let grade = 100;

    function losePoints() {
      grade = 90;

      function addPoints() {
        const grade = 95;

        if (grade === 95) {
          let grade = 97;
        }

        // Log A: grade
      }

      addPoints();

      // Log B: grade
    }

    losePoints();

    // Log C: grade

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseM() {
    var num = 5;

    function first() {
      // Log A: num
      num = 6;
      // Log B: num
    }

    function second() {
      // Log C: num
      let num = 7;
    }

    first();
    second();

    // Log D: num

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseN() {
    var instructor = 'Pam';

    function changeInstructor() {

      // Log A: instructor

      if (instructor === 'Brittany') {
        const instructor = 'Nathaniel';
      } else {
        let instructor = 'Brittany';
      }

      // Log B: instructor

      function rename() {
        instructor = 'Louisa';
        // Log C: instructor
      }

      rename();

      // Log D: instructor

    }

    // Log E: instructor

    changeInstructor();

    // Log F: instructor

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseO() {
    var shoe = 'flipflop';

    function putOnShoe() {
      // Log A: shoe
      var shoe = 'boot';
    }

    // Log B: shoe
    putOnShoe();
    // Log C: shoe

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseP() {
    let lunch;
    function orderLunch() {
      if (lunch) {
        // Log A: lunch
        let lunch = 'sandwich';
      }

      if (typeof lunch === 'undefined') {
        lunch = 'soup';
      }

      // Log B: lunch
    }

    orderLunch();

    // Log C: lunch

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseQ(){
    let myKid = 'Pandora';
    let wildKids = ['Antigone'];

    let myCrazyKidAntics = kid => {
      // Log A: kid
      wildKids.push(kid);
      // Log B: wildKids
  
      let drawOnTheWall = () => {
        let myKid = 'Mandy';
        // Log C: myKid
        return `That wild kid ${myKid}, drew on the wall!`;
      };

      drawOnTheWall();

      let myAmazingKid = () => {
        let myKid = wildKids.shift();
        // Log D: myKid
        return `That kid ${myKid}, is AMAZING!`;
      };

      myAmazingKid();
      // Log E: myKid;
      return `All these kids are wild, especially, ${myKid}!`;
    };

    myCrazyKidAntics(myKid);

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseR() {
    let myName = 'Rody';
    // Log A: myName

    const parentFunc = () => {
      myName += 'Toy';
      // Log B: myName

      let innerFunc = () => {
        let myName = 'Tesla'; 
        // Log C: myName
      };

      innerFunc();
      myName += 'Daniels';
    };

    parentFunc();
    // Log D: myName

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};

module.exports = scope;