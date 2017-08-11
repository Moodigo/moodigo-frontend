import {
    Component, ElementRef, Input, ViewChild, HostListener, Inject, Renderer2, EventEmitter, OnInit
} from '@angular/core';
import {NgxAni} from 'ngxani';
import {FeedItem} from '../../../entity/feed-item';
import {DOCUMENT} from '@angular/common';
import {MaterializeAction} from 'angular2-materialize';

@Component({
    selector: 'feed-item',
    templateUrl: 'feed-item.template.html'
})
export class FeedItemComponent implements OnInit {
    @Input() feedItem: FeedItem;
    @Input() displayDate: boolean;
    @ViewChild('feedDate') feedDate: ElementRef;
    @ViewChild('feedDateDock') feedDateDock: ElementRef;
    isEventDetailOpen: boolean;
    modalActions: EventEmitter<MaterializeAction> = new EventEmitter();

    @HostListener('window:scroll', ['$event'])
    onScrollEvent($event: Event) {
        this.checkScrollAndFixDate();
    }

    constructor(private ngxAni: NgxAni,
                private elRef: ElementRef,
                @Inject(DOCUMENT) private document: Document,
                private renderer: Renderer2) {
    }

    ngOnInit(): void {
        this.isEventDetailOpen = false;
    }

    openEventDetail() {
        this.modalActions.emit({action: 'modal', params: ['open']});
        this.isEventDetailOpen = true;
    }

    closeEventDetail() {
        this.modalActions.emit({action: 'modal', params: ['close']});
        this.isEventDetailOpen = false;
    }

    private checkScrollAndFixDate() {
        if (this.feedDate !== undefined) {
            if (document.body.scrollTop + 55 > this.feedDateDock.nativeElement.offsetTop) {
                this.renderer.addClass(this.feedDate.nativeElement, 'fixed');
            } else {
                this.renderer.removeClass(this.feedDate.nativeElement, 'fixed');
            }
        }
    }
}
