(function() {
  var appModule = angular.module("Tarefas");

  appModule.controller("TaskListingCtrl", [
    "$taskDao","$dateUtils",
    function($taskDao, $dateUtils) {
      var vm = this;

      vm.tasks = [];

      vm.dateExpired = function(date){
        return ($dateUtils.compare(date, new Date()) === -1)
      }

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
