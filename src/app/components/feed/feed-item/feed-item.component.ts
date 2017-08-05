import {
    Component, ElementRef, Input, ViewChild, HostListener, Inject, Renderer2
} from "@angular/core";
import {NgxAni} from "ngxani";
import {FeedItem} from "../../../entity/feed-item";
import {DOCUMENT} from "@angular/common";

@Component({
    selector: 'feed-item',
    templateUrl: 'feed-item.template.html'
})
export class FeedItemComponent {
    @HostListener('window:scroll', ['$event'])
    onScrollEvent($event: Event) {
        if (this.feedDate !== undefined) {
            if (document.body.scrollTop + 55 > this.feedDateDock.nativeElement.offsetTop) {
                this.renderer.addClass(this.feedDate.nativeElement, 'fixed');
            } else {
                this.renderer.removeClass(this.feedDate.nativeElement, 'fixed');
            }
        }
    }

    @Input() feedItem: FeedItem;
    @Input() displayDate: boolean;
    @ViewChild('feedDate') feedDate: ElementRef;
    @ViewChild('feedDateDock') feedDateDock: ElementRef;

    constructor(private ngxAni: NgxAni,
                private elRef: ElementRef,
                @Inject(DOCUMENT) private document: Document,
                private renderer: Renderer2) {
    }
}