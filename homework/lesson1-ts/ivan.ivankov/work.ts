

interface IWorker {
    id: number;
    name: string;
    salary(): number;
}

class WorkerFix implements  IWorker {
  id: number;
  name: string;
  static rate: number = 100;
  salary() {
    return WorkerTime.rate;
  }
}

class WorkerTime implements IWorker {
  id: number;
  name: string;
  static rate: number = 10;
  salary() {
    return 20.8 * 8 * WorkerFix.rate ;
  }
}
