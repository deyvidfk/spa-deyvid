(function() {
  var appModule = angular.module("Tarefas");

  appModule.controller("TaskListingCtrl", [
    "$taskDao",
    "$dateUtils",
    function($taskDao, $dateUtils) {
      var vm = this;

      vm.tasks = [];
      vm.filterByDateNotExpiredChecked = false;

      vm.dateExpired = function(date) {
        return $dateUtils.compare(date, new Date()) === -1;
      };

      vm.filterByDateNotExpired = function(data) {
        if (vm.filterByDateNotExpiredChecked) {
          return $dateUtils.compare(data.prazo, new Date()) !== -1;
        } else {
          return data;
        }
      };

      $taskDao.getTasks().then(
        function(tasks) {
          vm.tasks = tasks;
        },
        function(error) {
          var message = error || "Houve um erro ao tentar obter as tarefas.";
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
