(function() {
  var appModule = angular.module("Tarefas");

  appModule.controller("TaskCreateCtrl", [
    "$taskDao",
    function($taskDao) {
      var vm = this;

      var _radomId =  Math.floor(Math.random() * (10000000 - 1 + 1)) + 1;
      
      vm.task = {
        id: _radomId,
        nome: "",
        prazo: null
      };

      vm.addTask = function(event, task) {
        event.preventDefault();
        $taskDao.addTask(task).then(
          function() {            
            var message = ("Tarefa adicionada com sucesso!");
            console.info(message);
            alert(message);
          },
          function(error) {

            var message = (error||"Houve um erro ao tentar cadastrar nova tarefa.");
            console.error(message);
            alert(message);
          }
        );
      };
    }
  ]);
})();
