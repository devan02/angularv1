import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { TesAngularService } from '../_service/tes-angular.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})

export class CreateTaskComponent implements OnInit {

    formInput = this.fb.group({
        content: ['', Validators.required],
        project_id: ['', Validators.required]
    });

    constructor(
      private fb: FormBuilder,
      private tas: TesAngularService
    ) { 

    }

    onSubmit(){
      this.tas.requestCreate(this.formInput).subscribe((arg) => {console.log(arg)});
    }

    ngOnInit() { }
}