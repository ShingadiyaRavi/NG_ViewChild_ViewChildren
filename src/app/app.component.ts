import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ViewChild_ViewChildren';

  @ViewChild('data', { read: ElementRef }) divElementRef!: ElementRef<any>;

  @ViewChildren('data') viewChildren!: QueryList<any>;
  // @ViewChildren('data',{read:ElementRef}) viewChildren!: ElementRef<any>;

  students = [
    { id: 1, name: 'shingadiya ravi', age: 21 },
    { id: 2, name: 'godhani kishan', age: 15 },
    { id: 3, name: 'vivek ', age: 10 },
    { id: 4, name: 'bharat ', age: 20 },
    { id: 5, name: 'aman', age: 101 },
    { id: 6, name: 'chaman ', age: 70 }
  ];


  //  This is used for the multiple element data changes so we used viewChildren();
  ngAfterViewInit() {

    // This is used for the @ViewChildren()...
    if (this.viewChildren.length > 0) {
      this.viewChildren.toArray().forEach(element => {
        element.nativeElement.innerHTML = "Infinnium Infotech LLP";
      });
    }

    //  This is used for the @ViewChild() ...
    // this.divElementRef.nativeElement.innerHTML = 'john cena';
  }





}
