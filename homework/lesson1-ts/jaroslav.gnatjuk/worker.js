var json = require('json-loader!./workers.json');
var _ = require('lodash');
var WorkerFix = (function () {
    function WorkerFix(workerId, name, rate) {
        var _this = this;
        this.workerId = workerId;
        this.name = name;
        this.rate = rate;
        this.getAvgZp = function () {
            return _this.rate;
        };
    }
    return WorkerFix;
})();
var WorkerHour = (function () {
    function WorkerHour(workerId, name, rate) {
        var _this = this;
        this.workerId = workerId;
        this.name = name;
        this.rate = rate;
        this.getAvgZp = function () {
            return _this.rate * 20.8 * 8;
        };
    }
    return WorkerHour;
})();
var WorkerCollection = (function () {
    function WorkerCollection() {
        this.workers = [];
    }
    WorkerCollection.prototype.sort = function () {
        var sorted = _.orderBy(this.workers, function (worker) { return worker.getAvgZp(); }, ['desc', 'asc']);
        return sorted;
    };
    WorkerCollection.prototype.showFirstSorted = function (cnt) {
        var sorted = this.sort();
        if (cnt > sorted.length) {
            cnt = sorted.length;
        }
        for (var i = 0; i < cnt; i++) {
            this.print(sorted[i]);
        }
    };
    WorkerCollection.prototype.showLastSorted = function (cnt) {
        var sorted = this.sort();
        if (cnt > sorted.length) {
            cnt = sorted.length;
        }
        for (var i = sorted.length - cnt; i < sorted.length; i++) {
            this.print(sorted[i]);
        }
    };
    WorkerCollection.prototype.print = function (worker) {
        console.log(worker.workerId + " | " + worker.name + " | " + worker.getAvgZp());
    };
    WorkerCollection.prototype.addWorker = function (worker) {
        this.workers.push(worker);
    };
    WorkerCollection.prototype.loadFixWorkers = function (json) {
        var _this = this;
        json.forEach(function (worker) {
            _this.addWorker(new WorkerFix(worker.workerId, worker.name, worker.rate));
        });
    };
    return WorkerCollection;
})();
//примеры использования
var workers = new WorkerCollection();
workers.addWorker(new WorkerFix('fix1', 'Иванов И.И.', 10000));
workers.addWorker(new WorkerFix('fix2', 'Петров П.П.', 12000));
workers.addWorker(new WorkerHour('hour1', 'Иванов И.И.', 100));
workers.addWorker(new WorkerHour('hour2', 'Петров П.П.', 120));
workers.loadFixWorkers(json);
workers.showFirstSorted(5);
//# sourceMappingURL=worker.js.map