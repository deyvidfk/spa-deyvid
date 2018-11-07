(function() {
  var appModule = angular.module("Tarefas");

  appModule.factory("$taskDao", function($q, dataService) {
    var tarefas = dataService || [];

    var _getTaskById = function(id) {
      return tarefas.findIndex(function(task) {
        return task.id == id;
      });
    };

    function getTasks() {
      return $q.when(tarefas);
    }

    function getTaskById(id) {
      var defer = $q.defer();

      try {
        var taskInstanceIndex = _getTaskById(id);

        if (taskInstanceIndex === -1) {
          throw new Error("Task não encontrada.");
        }

        defer.resolve(tarefas[taskInstanceIndex]);
      } catch (error) {
        defer.reject(error);
      }

      return defer.promise;
    }

    function deleteTaskById(id) {
      var defer = $q.defer();

      try {
        var taskInstanceIndex = _getTaskById(id);

        if (taskInstanceIndex === -1) {
          throw new Error("Task não encontrada.");
        }

        tarefas.splice(taskInstanceIndex, 1);

        defer.resolve(tarefas);
      } catch (error) {
        defer.reject(error);
      }

      return defer.promise;
    }

    function editTask(data) {
      var defer = $q.defer();

      try {
        var taskInstanceIndex = _getTaskById(data.id);

        if (taskInstanceIndex === -1) {
          throw new Error("Task não encontrada.");
        }

        tarefas[taskInstanceIndex] = data;

        defer.resolve(data);
      } catch (error) {
        defer.reject(error);
      }

      return defer.promise;
    }

    function addTask(data) {
      var defer = $q.defer();

      try {
       
        tarefas.push(data);

        defer.resolve(tarefas);
      } catch (error) {
        defer.reject(error);
      }

      return defer.promise;
    }

    return {
      editTask: editTask,
      deleteTaskById: deleteTaskById,
      getTasks: getTasks,
      getTaskById: getTaskById,
      addTask: addTask
    };
  });
})();
