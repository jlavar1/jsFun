const context = {
  exerciseA() {
    const fly = () => {
      console.log(this);
    };

    class SpaceProbe {
      constructor(title, classification) {
        this.title = title;
        this.classification = classification;
        this.fly = fly;
      } 
    }

    const ship = new SpaceProbe('voyager', 'classy');


    // What is the value of `this` when we call ship.fly()?
    const result = "global window object";
    return result;

    // Annotation:
    // Because the function fly is written in ES6, "this" is set when the function is created. The context is the global window object when the function is created. If an arrow function was not used, "this" would be assigned to the new instance of the class SpaceProbe.
  },

  exerciseB() {
    function fn() {
      const value = 2;
      return this.value;
    }
    
    // What is the value of `this` when we call fn()?
    const result = 'global window object';
    return result;

    // Annotation:
    // "this" refers to the global window object because neither of the other rules apply and the global window object is the default. The function is not being executed as a method on an object. There is also not a new instance of the class being created. Thus, the default is the only remaining option. 
  },

  exerciseC() {
    const car = {
      make: 'Tesla',
      getInfo: function(){
        console.log(this);
      }
    };

    const el = document.getElementById('btn');
    el.addEventListener('click', car.getInfo);

    // What is the value of `this` when a user clicks on our element and car.getInfo() is triggered?
    const result = 'el';
    return result;

    // Annotation: 
    // "This" is el because the function getInfo, which is a method of class car, is being executed on an object called el. The getInfo method is being invoked using an event listener method which is also being called on object el.
  },

  exerciseD() {
    const dog = {
      breed: 'Chihuahua',
      getBreed: function(){
        const innerFunction = function() {
          console.log(this.breed);
        };
    
        return innerFunction();
      }
    };


    // What is the value of `this` when we call dog.getBreed()?
    const result = 'global window object';
    return result;

    // Annotation: 
    // I originally thought that the answer was dog because in my mind, when we called dog.getBreed(), we were essentially calling dog.getBreed.innerFunction(). I would like to be able to test to see if dog.getBreed.innerFunction() would change the context of "this" to dog. I suppose the reason that "this" is not dog is because the specific function called innerFunction is not executed as a method on the object dog. Thus the default took over. 
  },

  exerciseE() {

    const fn = () => {
      value = 21;
      return this.value;
    };


    // What is the value of `this` when we call fn()?
    const result = 'global window object';
    return result;

    // Annotation: 
    // "this" is a global window object because of the es6 rules for functions. In es6, "this" is defined upon creation of the function. JavaScript does not wait for the function to be executed before creating this. 
  },

  exerciseF() {
    class Hero {
      constructor(name, power, canFly = false) {
        this.name = name;
        this.power = power;
        this.canFly = canFly;
      }

      identifyHero() {
        return this;
      }
    }

    const storm = new Hero('Ororo', 'weather control', true);

    // What is the value of `this` when we call storm.identifyHero()?
    const result = 'instance of Hero';
    return result;

    // Annotation: 
    // "this" is the instance of Hero in this case because of the second rule of context. When the new operator is used to create a new instance of a class, the new instance of the class will be the context of "this". Also, the new instance is a new object. 
  },

  exerciseG() {
    class Game {
      constructor(title) {
        this.title = title;
      }

      resetGame() {
        console.log('Clearing the board and starting over');
      }

      restart() {
        setTimeout(function() {
          console.log(`Restarting ${this.title}...`);
        }, 1000);
      }
    }

    const monopoly = new Game('Monopoly');


    // What is the value of `this` when we call monopoly.restart()?
    const result = 'global window object';
    return result;

    // Annotation: 
    // "This" is a global window object similar to the above instance of calling an innerFunction on object "dog". Because the innerFunction is not being directly applied as a method to an object of class Game, "this" will be the default global window object. 
  },

  exerciseH() {
    const obj = {
      arrowFunction: null,
      method: function() {
        this.arrowFunction = () => { 
          return this;
        };
      }
    };

    obj.method();

    // What is the value of `this` when we call obj.arrowFunction()?
    const result = 'obj';
    return result;

    // Annotation: 
    // "This" will be a global window object because the arrowFunction is not being called as a method on an object when we call obj.arrowFunction. In order for "this" to be obj, obj.method.arrowFunction would have to be called. Inner-Functions are not given the context of the obj that the outer methods are.

    //Turns out that the answer is obj, I believe that the prompt is confusing. --What is the value of `this` when we call obj.arrowFunction()?-- I can see that obj.method is being run and obj.method would fall under the first rule of executing a method upon an object. However, the prompt seems to imply that obj.arrowFunction is being run, not obj.method. 
  },

  exerciseI() {  
    const poets = [{
      name: 'Sappho'
    }, {
      name: 'Maya'
    }, {
      name: 'Emily'
    }, {
      name: 'Audre'
    }];

    poets.map(function(poet) {
      return this;
    }, poets);

    // What is the value of `this` that gets returned on each iteration of poets.map()?
    const result = 'poets';
    return result;

    // Annotation: 
    // Write your annotation here as a comment. Annotation should include explanation regarding the second argument of `poets` that is being passed
    // ExerciseI was the hardest for me. From working with .map in mythical creatures, I knew that .map stopped the poets object from being the object that "this" is refering to. So, my original thought was that "poet" would be the answer as we are looking at each individual "poet" within "poets". However, as "poet" is only a parameter, "this" cannot directly refer to the "poet". The second "poets" at the end of the function being passed as an argument is somehow tying/linking "this" to the "poets".
  },

  exerciseJ() {
    const el = $('#btn');
    el.on('click', function() {
      console.log($(this));
    });

    // What is the value of `this` when a user clicks on our #btn element and the callback is triggered?
    const result = 'el';
    return result;

    // Annotation: 
    // Write your annotation here as a comment.
  },

  exerciseK() {
    const el = $('#btn');
    el.on('click', () => {
      console.log(this);
    });

    // What is the value of `this` when a user clicks on our #btn element and the callback is triggered?
    const result = 'global window object';
    return result;

    // Annotation: 
    // "this" will be a global window object because the function is written as an es6 arrow function. In those arrow functions, "this" is defined upon the creation of the function, not when it is invoked. 
  }

};

module.exports = context;