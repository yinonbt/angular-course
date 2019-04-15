import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { Show } from '../../model/show';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { filter } from 'rxjs'

@Component({
  selector: 'app-show-edit',
  templateUrl: './show-edit.component.html',
  styleUrls: ['./show-edit.component.scss']
})
export class ShowEditComponent implements OnInit, OnChanges {
  @Input() 
  show: Show;

  @Output()
  saveRequested = new EventEmitter<Show>()

  showForm: FormGroup;
  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
  }

  isEven(c: FormControl) {
    const value = c.value;
    if (!isNaN(value) && value % 2 === 0) {
      return null;
    }
    return {
      isEven: { currentValue: c.value }
    };
  }
  save() {
    this.show = this.showForm.value;
  }

  getError(fieldName: string) {

  }
  ngOnChanges() {
    this.showForm = this.fb.group({
      id: [this.show.id],
      name: [this.show.name, Validators.required],
      language:
        runtime: [this.show.runtime, Validators.compose([this.isEven, Validators.required, Validators.min(30)])]
    }, validators: [this.validateForm], updateOn: 'change')
  }
}
