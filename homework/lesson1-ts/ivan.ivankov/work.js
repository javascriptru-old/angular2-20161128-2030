var WorkerFix = (function () {
    function WorkerFix() {
    }
    WorkerFix.prototype.salary = function () {
        return WorkerTime.rate;
    };
    return WorkerFix;
}());
WorkerFix.rate = 100;
var WorkerTime = (function () {
    function WorkerTime() {
    }
    WorkerTime.prototype.salary = function () {
        return 20.8 * 8 * WorkerFix.rate;
    };
    return WorkerTime;
}());
WorkerTime.rate = 10;
