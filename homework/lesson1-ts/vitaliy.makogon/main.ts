import { Emploees } from './emploees';
import * as jsonData from './emploees.json';

let emploees = new Emploees();

// emploees.addEmploeesRandom(10);
emploees.addEmploeesFromJson(jsonData);
emploees.sort();
emploees.print();
emploees.printFirstNames(5);
emploees.printLastIds(3);