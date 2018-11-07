(function() {
  var appModule = angular.module("Tarefas");

  appModule.controller("TaskListingCtrl", [
    "$taskDao",
    function($taskDao) {
      var vm = this;

      vm.tasks = [];

      $taskDao.getTasks().then(
        function(tasks) {
          vm.tasks = tasks;
        },
        function(error) {
          var message = (error||"Houve um erro ao tentar obter as tarefas.");
          console.error(message);
          alert(message);
        }
      );

      vm.deleteTask = function(task) {
        $taskDao.deleteTaskById(task.id);
      };
    }
  ]);
})();
