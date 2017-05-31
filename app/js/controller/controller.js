app.controller('taskList', function ($scope) {

    $scope.new_tasks = [
        {"id": "74657", "city": "Самара", "name": "Новые задания", "date": "до 13 Августа", "price": "9867"},
        {"id": "74657", "city": "Самара", "name": "Новые задания", "date": "до 13 Августа", "price": "9867"},
        {"id": "74657", "city": "Самара", "name": "Новые задания", "date": "до 13 Августа", "price": "9867"},
        {"id": "74657", "city": "Самара", "name": "Новые задания", "date": "до 13 Августа", "price": "9867"},
        {"id": "74657", "city": "Самара", "name": "Новые задания", "date": "до 13 Августа", "price": "9867"},
        {"id": "74657", "city": "Самара", "name": "Новые задания", "date": "до 13 Августа", "price": "9867"},
        {"id": "74657", "city": "Самара", "name": "Новые задания", "date": "до 13 Августа", "price": "9867"}
    ];

    $scope.works_tasks = [
        {"id": "74657", "city": "Самара", "name": "Задания в работе", "date": "до 13 Августа", "price": "9867"},
        {"id": "74657", "city": "Самара", "name": "Задания в работе", "date": "до 13 Августа", "price": "9867"},
        {"id": "74657", "city": "Самара", "name": "Задания в работе", "date": "до 13 Августа", "price": "9867"},
        {"id": "74657", "city": "Самара", "name": "Задания в работе", "date": "до 13 Августа", "price": "9867"},
        {"id": "74657", "city": "Самара", "name": "Задания в работе", "date": "до 13 Августа", "price": "9867"},
        {"id": "74657", "city": "Самара", "name": "Задания в работе", "date": "до 13 Августа", "price": "9867"},
        {"id": "74657", "city": "Самара", "name": "Задания в работе", "date": "до 13 Августа", "price": "9867"}
    ];

    $scope.vision_tasks = [
        {"id": "74657", "city": "Самара", "name": "Задания на рассмотрении", "date": "до 13 Августа", "price": "9867"},
        {"id": "74657", "city": "Самара", "name": "Задания на рассмотрении", "date": "до 13 Августа", "price": "9867"},
        {"id": "74657", "city": "Самара", "name": "Задания на рассмотрении", "date": "до 13 Августа", "price": "9867"},
        {"id": "74657", "city": "Самара", "name": "Задания на рассмотрении", "date": "до 13 Августа", "price": "9867"},
        {"id": "74657", "city": "Самара", "name": "Задания на рассмотрении", "date": "до 13 Августа", "price": "9867"},
        {"id": "74657", "city": "Самара", "name": "Задания на рассмотрении", "date": "до 13 Августа", "price": "9867"},
        {"id": "74657", "city": "Самара", "name": "Задания на рассмотрении", "date": "до 13 Августа", "price": "9867"}
    ];

    $scope.tabs = [
        {title: "Новые", type: "new",count:1},
        {title: "В работе", type: "work",count:1},
        {title: "На рассмотрении", type: "vision",count:3},
        {title: "Выполнены", type: "_",count:187},
        {title: "ОТменены", type: "_",count:4},
        {title: "Черновики", type: "_",count:7}
    ];

    $scope.tab = "new";
    $scope.getTasks = function () {
        if ($scope.tab == "new") {
            return $scope.new_tasks;
        } else if ($scope.tab == "work") {
            return $scope.works_tasks;
        } else if ($scope.tab == "vision") {
            return $scope.vision_tasks;
        } else {
            return [];
        }
    };
    $scope.updateTab = function (tab) {
        $scope.tab = tab;
    }
});
