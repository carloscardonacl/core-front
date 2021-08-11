import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PersonDataService } from './personData.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  $person:Subscription;
  person:any = {}
  @ViewChild('next1') next1: ElementRef;

  constructor( private _person:PersonDataService ) { 
    
  }


  ngOnInit(): void {
    this.$person = this._person.person.subscribe( r=>{
      console.log(r);
      this.person=r
    })
  }

  ngOnDestroy(): void {
    this.$person.unsubscribe();
  }

  pressed( next : any ) {
    next.click();
  }
}
