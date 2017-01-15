import {Component, OnInit, OnDestroy} from '@angular/core';
import {LettersService, Letter} from '../services/letters.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-folder',
    templateUrl: './folder.component.html',
    styleUrls: ['./folder.component.less'],
    providers: [LettersService]
})
export class FolderComponent implements OnInit, OnDestroy {

    public data:Letter[];
    private sub:any;

    constructor(private letters:LettersService, private route:ActivatedRoute) {
    }

    ngOnInit() {
        // Watch route params to
        this.sub = this.route.params.subscribe(params => {
            // Get letters associated with selected mailbox
            this.letters.getAllWithCondition<Letter[]>('mailbox', params['folderID'])
                .subscribe(data => this.data = data);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}


