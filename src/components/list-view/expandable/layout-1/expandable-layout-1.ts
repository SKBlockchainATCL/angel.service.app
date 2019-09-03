import { Component, Input, ViewChild, AfterViewInit } from '@angular/core';
import { IonicPage, Content, FabButton , NavController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'expandable-layout-1',
  templateUrl: 'expandable.html'
})
export class ExpandableLayout1 implements AfterViewInit {
  @Input() data: any;
  @Input() events: any;
  @ViewChild(Content)
  content: Content;
  @ViewChild(FabButton)
  fabButton: FabButton;

  constructor(
    public navCtrl: NavController
  ) {}

  // onEvent(event: string, item: any, e: any) {
  //   if (e) {
  //     e.stopPropagation();
  //   }
  //   if (this.events[event]) {
  //     this.events[event](item);
  //   }
  // }
  goPostWrite() {
    this.navCtrl.push('HomePage');
  }
  toggleGroup(group: any) {
    group.show = !group.show;
  }

  isGroupShown(group: any) {
    return group.show;
  }

  ngAfterViewInit() {
    this.content.ionScroll.subscribe((d) => {
      this.fabButton.setElementClass("fab-button-out", d.directionY == "down");
    });
  }
}
