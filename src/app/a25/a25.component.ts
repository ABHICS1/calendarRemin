import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';

@Component({
  selector: 'app-a25',
  templateUrl: './a25.component.html',
  styleUrls: ['./a25.component.css']
})
export class A25Component implements OnInit {
  items = [];
  newItem = '';
  n = 1;
  pushItem = function () {
      if (this.newItem !== '') {
        if (this.n === 1) {
          this.items.push(this.newItem);
          this.newItem = '';
          swal('Sucess your Event is added', '', 'success');
          this.n = 0;
        } else {
          swal('Sorry You Have An Appointment', '', 'error');

        }

      }
  };
  removeItem = function (index) {
      this.items.splice(index, 1);
      this.n = 1;
  };
  editItem = function (index) {
    this.newItem = this.items.splice(index, 1);
    this.n = 1;
};

constructor() { }

ngOnInit() {
}


}

