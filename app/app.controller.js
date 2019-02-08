"use strict";

function ToDoController() {
    const vm = this;
    vm.tasks = [
        { task: "make dinner", completed: true},
        { task: "study", completed: true},
        { task: "read to the boy", completed: false},
        { task: "read my book", completed: false},
    ];


}










angular
    .module("todoApp")
    .controller("ToDoController", ToDoController);