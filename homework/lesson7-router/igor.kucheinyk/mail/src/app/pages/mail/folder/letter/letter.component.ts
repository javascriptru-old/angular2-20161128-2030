import {Component, OnInit} from '@angular/core';
import {LettersService, Letter} from '../../services/letters.service'
import {ActivatedRoute} from '@angular/router'

@Component({
    selector: 'app-letter',
    templateUrl: './letter.component.html',
    styleUrls: ['./letter.component.less']
})
export class LetterComponent implements OnInit {

    public data: Letter;

    constructor(private letters: LettersService, private route:ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.letters.getOne<Letter>(params['letterID']).subscribe(data => this.data = data);
        });
    }

}
