import { AddProps } from './decorators/addProps';
import { Marked } from './decorators/marked';

export namespace homework2Part1 {

    @AddProps({
        changeDetection: 'default',
        encapsulation: 1,
        providers: [],
        selector: undefined,
        styles: [],
        template: undefined
    })
    export class Component {
        name = "same component";
    }

}

export namespace homework2Part2 {

    export class Input {
        @Marked
        name = "Andrey";
        @Marked
        amount = 5000;
        n = 45;
        @Marked
        func() { }
    }
}