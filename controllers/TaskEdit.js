(function() {
  var appModule = angular.module("Tarefas");

  appModule.controller("TaskEditCtrl", [
    "$stateParams",
    "$taskDao",
    function($stateParams, $taskDao) {
      var vm = this;

      vm.task = {
        id: null,
        nome: null,
        prazo: null
      };

      $taskDao.getTaskById($stateParams.id).then(
        function(data) {

          var task = {
            id:  data.id,
            nome: data.nome,
            prazo: (data.prazo ? new Date(data.prazo) :null)
          };

          vm.task = task;
        },
        function(error) {
          var message = (error||"Houve um erro ao tentar recuperar os dados.");
          console.error(message);
          alert(message);
        }
      );

      vm.editTask = function(event, task) {
        $taskDao.editTask(task).then(function(data) {
          var message = ("Tarefa editada com sucesso!");
          console.info(message);
          alert(message);
        });
      };
    }
  ]);
})();
