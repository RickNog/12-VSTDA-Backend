(function() {
    'use strict';

    angular
        .module('myApp')
        .factory('MainFactory', MainFactory);

    MainFactory.$inject = ['$http'];

    /* @ngInject */
    function MainFactory($http) {
        var service = {
            getTodoItems: getTodoItems,
            addTodo: addTodo,
            deleteTodo: deleteTodo,
            editTodo: editTodo
        };
        return service;

        ////////////////

        //Retrieves data from json file
        function getTodoItems() {
            return $http({
                method: 'GET',
                url: 'http://localhost:55010/api/Todoes'
            }).then(function(response) {

                return response.data;

            });



        }
        //Adds data
        function addTodo(todoList, todoInput, todoPriority) {
                var newTodo = { text: todoInput, priority: todoPriority }
             return $http({
                method: 'POST',
                url: 'http://localhost:55010/api/Todoes',
                 data: newTodo
            }).then(function(response) {


             return todoList.push(newTodo);
            

            });


        }


        //Deletes data
        function deleteTodo(todos, index) {
            
             return $http({
                method: 'DELETE',
                url: 'http://localhost:55010/api/Todoes/' + index 
                
            }).then(function(response) {


            return response.data;

            });


        }

        //Edits the data
        function editTodo(todos, index) {
            
             return $http({
                method: 'PUT',
                url: 'http://localhost:55010/api/Todoes/' + index 
                
            }).then(function(response) {


            return response.data;

            });


        }

    }
})();
