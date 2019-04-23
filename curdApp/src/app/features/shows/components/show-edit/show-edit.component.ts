import {
  Component,
  OnInit,
  Input,
  OnChanges,
  EventEmitter,
  Output
} from '@angular/core';
import { Show } from '../../model/show';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  AbstractControl
} from '@angular/forms';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-show-edit',
  templateUrl: './show-edit.component.html',
  styleUrls: ['./show-edit.component.scss']
})
export class ShowEditComponent implements OnInit, OnChanges {
  @Input()
  show: Show;

  @Output()
  saveRequested = new EventEmitter<Show>();
  @Output()
  deleteRequested = new EventEmitter<Show>();

  showForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {}

  isEven(c: AbstractControl) {
    const value = c.value;
    if (!isNaN(value) && value % 2 === 0) {
      return null;
    }
    return {
      isEven: { currentValue: c.value }
    };
  }

  deleteShow() {
    this.deleteRequested.emit(this.show);
  }
  save() {
    if (this.showForm.valid) {
      this.saveRequested.emit(this.showForm.value);
    }
  }

  getError(fieldName: string) {
    if (this.showForm.controls[fieldName].errors) {
      return Object.keys(this.showForm.controls[fieldName].errors);
    }
    return [];
  }

  ngOnChanges() {
    this.showForm = this.formBuilder.group({
      id: [this.show.id],
      name: [this.show.name, Validators.required],
      language: [this.show.language, Validators.required],
      url: [this.show.url, Validators.required],
      weight: [this.show.weight, Validators.required],
      webChannel: [this.show.webChannel],
      officialSite: [this.show.officialSite, Validators.required],
      runtime: [
        this.show.runtime,
        Validators.compose([
          c => this.isEven(c),
          Validators.required,
          Validators.min(30)
        ])
      ],
      summary: [this.show.summary, Validators.required],
      image: this.formBuilder.group({
        medium: [this.show.image.medium],
        original: [this.show.image.original]
      })
    });
  }
}
