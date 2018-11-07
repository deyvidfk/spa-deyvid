(function () {

    var _MODULE_NAME_ = "Tarefas";

    var appModule = angular.module(_MODULE_NAME_, ['ui.router']);

    appModule.provider('dataService', function () {
        var configurationData;

        this.initialize = function (data) {
            configurationData = data;
        };

        this.$get = function () {
            return configurationData;
        };
    });

    angular.element(document).ready(function () {

        $.getJSON('/tarefa.json', function (dataApp) {

            appModule.config(['dataServiceProvider', function (dataServiceProvider) {
                dataServiceProvider.initialize(dataApp);
            }]);
            angular.bootstrap(document, [_MODULE_NAME_]);

        });
    });
})();