import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  img: string='';

  @Input()
  set changeImg(newImg:string){
    this.img = newImg;
    //code
    console.log('change just img =>', this.img)
  }
  @Input() alt: string='';
    //imageDefault: string = 'https://www.w3schools.com/howto/img_avatar.png';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = './assets/glasses.jpg';
  //counter = 0;
  //counterFn: number | undefined;


  constructor() {
    //ciclo vida componente
      // before render
      // NO async -- once time
      console.log('constructor', 'imgValue =>', this.img);
    }
  
    ngOnChanges() {
      // before - during render
      // changes inputs -- multiples times
      console.log('ngOnChanges', 'imgValue =>', this.img);
    }
  
    ngOnInit(): void {
      // before render
      // async - fetch -- once time
      console.log('ngOnInit', 'imgValue =>', this.img);
      // this.counterFn = window.setInterval(()=>{
      //   this.counter +=1;
      //   console.log('run counter');
      // },1000);
    }
  
    ngAfterViewInit() {
      // after render
      // handler children -- once time
      console.log('ngAfterViewInit');
    }
  
    ngOnDestroy() {
      // delete -- once time
      console.log('ngOnDestroy');
      //window.clearInterval(this.counterFn)
    }
  imageError(){
    this.img = this.imageDefault;
  }
  imgLoaded(){
    console.log('log hijo');
    this.loaded.emit(this.img);
  }

}
