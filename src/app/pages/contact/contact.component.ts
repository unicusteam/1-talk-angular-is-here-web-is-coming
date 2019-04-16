import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { ContactModel } from 'src/app/domain/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contacts: ContactModel[] = [];

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    this.contacts.push(new ContactModel(form.value.name, form.value.fone));
  }

}
