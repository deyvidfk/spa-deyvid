(function () {
    var appModule = angular.module('Tarefas');

    appModule.controller('NovaTarefaCtrl', function ($scope, $tarefaDao) {
 
        var vm = this;
        vm.task = {
            id:Math.random(),
            nome: "",
            prazo: null
        }
        vm.cadastrarTarefa = function (event) {
            event.preventDefault();
            $tarefaDao.addTarefa(vm.task);
            console.log("Tarefa adicionada com sucesso!")
        }
    });
})();