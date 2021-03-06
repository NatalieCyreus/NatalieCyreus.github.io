
$(function() {
var catsArray = [];

var Cats = function(){

  function Cat(name , img){
    this.name = name;
    this.img = 'images/'+ img + '.jpg';
    this.count = 0;
  };

  for (var i = 1; i <= 5; i++) {
    var imageName = 'kitten' + i;
    object = new Cat (imageName,imageName);
    catsArray.push(object);
  }
  return catsArray;
}

var model = {
    currentCat : null,
    cats : Cats(),
};

var octopus = {
  init: function() {
    model.currentCat = model.cats[0];
    buttonView.init();
    catView.init();
  },
  getCurrentCat: function() {
    return model.currentCat;
  },
  //returns the catsArray
  getCats: function() {
    return model.cats;
  },

  // set the currently-selected cat to the object passed in
  setCurrentCat: function(cat){
    model.currentCat = cat;
  },

  // increments the counter for the currently-selected cat
  incrementCounter : function() {
    model.currentCat.count++;
    catView.render();
  }
};

var catView = {
  init: function() {
    // store pointers to our DOM elements for easy access later
    this.catElem = document.getElementById('cat');
    this.catNameElem = document.getElementById('kittenName');
    this.catImageElem = document.getElementById('catImg');
    this.countElem = document.getElementById('clicks');
    // on click, increment the current cat's counter
    this.catImageElem.addEventListener('click', function() {
      octopus.incrementCounter();
    });

    // render this view (update the DOM elements with the right values)
    this.render();
  },

  render: function() {
    var currentCat = octopus.getCurrentCat();
    this.countElem.textContent = currentCat.count;
    this.catNameElem.textContent = currentCat.name;
    this.catImageElem.src = currentCat.img;
  }
};


var buttonView = {
  init : function() {
    this.buttonElem = document.getElementById('catButtons');
    this.render();
  },
  render: function() {
    var cat, elem, i;
    var cats = octopus.getCats();
    this.buttonElem.innerHTML = '';

    for (i = 0; i < cats.length; i++){
      cat = cats[i];
      elem = document.createElement('button');
      elem.textContent = cat.name ;
      elem.addEventListener('click', (function(catCopy) {
        return function() {
          octopus.setCurrentCat(catCopy);
          catView.render();
        };
      })(cat));
      this.buttonElem.appendChild(elem);
    }
  }
};
  octopus.init();
});
