var toDoList = {
  toDos: [],
  addToDo: function(toDoText){
    this.toDos.push({
      toDoText: toDoText,
      completed: false
    });
  },
  changeToDo: function(position, toDoText){
    this.toDos[position].toDoText = toDoText;
  },
  deleteToDo: function(position){
    this.toDos.splice(position, 1);
  },
  toggleCompleted: function(position){
    var toDo = this.toDos[position];
    toDo.completed = !toDo.completed;
  },
  toggleAll: function() {
    var totalToDos = this.toDos.length;
    var completedToDos = 0;
    this.toDos.forEach(function(toDo) {
      if (toDo.completed === true) {
        completedToDos++;
      }
    });

    this.toDos.forEach(function(toDo) {
      if (completedToDos === totalToDos) {
        toDo.completed = false;
      } else {
        toDo.completed = true;
      }
    });
  }
};


var handlers = {
  addToDo: function() {
    var addToDoTextInput = document.getElementById('addToDoTextInput');
    toDoList.addToDo(addToDoTextInput.value);
    addToDoTextInput.value = '';
    view.displayToDos();
  },
  changeToDo: function() {
    var changeToDoPositionInput = document.getElementById('changeToDoPositionInput');
    var changeToDoTextInput = document.getElementById('changeToDoTextInput');

    toDoList.changeToDo(changeToDoPositionInput.valueAsNumber, changeToDoTextInput.value);
    changeToDoTextInput.value = '';
    changeToDoPositionInput.value = '';
    view.displayToDos();
  },
  deleteToDo: function(position) {
    toDoList.deleteToDo(position);
    view.displayToDos();
  },
  toggleCompleted: function() {
    var toggleCompletedPositionInput  = document.getElementById('toggleCompletedPositionInput');
    toDoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = '';
    view.displayToDos();
  },
  toggleAll: function() {
    toDoList.toggleAll();
    view.displayToDos();
  }
};

var view = {
  displayToDos: function() {
    var toDosUl = document.querySelector('ul');
    toDosUl.innerHTML = '';
    toDoList.toDos.forEach(function(toDo, position) {
      var toDoLi = document.createElement('li');
      var toDoTextWithCompletion = '';

      if (toDo.completed === true) {
        toDoTextWithCompletion = '(x) ' + toDo.toDoText;
      } else {
        toDoTextWithCompletion = '( ) ' + toDo.toDoText;
      }
      toDoLi.id = position;
      toDoLi.textContent = toDoTextWithCompletion;
      toDoLi.appendChild(this.createDeleteButton());
      toDosUl.appendChild(toDoLi);
    }, this);
  },
  createDeleteButton: function() {
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteButton';
    return deleteButton;
  },
  setUpEventListeners: function() {
    var toDosUl = document.querySelector('ul');
    toDosUl.addEventListener('click', function(event) {
    var elementClicked = event.target;
    if (elementClicked.className === 'deleteButton') {
      handlers.deleteToDo(parseInt(elementClicked.parentNode.id));
      }
    });
  }
};

view.setUpEventListeners();
