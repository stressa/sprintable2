"use strict";
var TaskService = (function () {
    function TaskService() {
    }
    TaskService.prototype.getTasks = function () {
        return ["task1", "task2", "task3"];
    };
    return TaskService;
}());
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map