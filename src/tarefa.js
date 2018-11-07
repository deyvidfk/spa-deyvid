(function () {
    var appModule = angular.module('Tarefas');

    appModule.controller('PrincipalCtrl', function ($scope, $tarefaDao) {

        $scope.tarefas = [];


        $tarefaDao.getTarefas().then(function (tarefas) {
            $scope.tarefas = tarefas;
        });

        $scope.minmax = function (produto) {
            return produto.preco >= $scope.min && produto.preco <= $scope.max;
        };

    });

    appModule.controller('TarefaCtrl', function ($scope, $tarefaDao, $stateParams) {
        $scope.tarefa = $tarefaDao.getTarefaById($stateParams.id);
    });

    appModule.factory('$tarefaDao', function ($q, dataService) {

        var tarefas = [];

        function getTarefas() {
            return $q.when(dataService);
        }

        function getTarefaById(id) {
            for (var i = 0; i < tarefas.length; i++) {
                var tarefa = tarefas[i];
                if (tarefa.id == id) {
                    return tarefa;
                }
            }
            return null;
        }


        function addTarefa(data) {
            tarefas.push(data);
        }

        return {
            getTarefas: getTarefas,
            getTarefaById: getTarefaById,
            addTarefa: addTarefa
        };
    });
})();