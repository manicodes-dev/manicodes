import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { MessageService } from '../../../services/message.service';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {


  constructor(private messageService:MessageService, private snakbar :MatSnackBar) { 
  }
  @ViewChild('form')contanctForm:NgForm | undefined;
  ngOnInit(): void {
    
  }

  sendMessage(form: NgForm){
    console.log(form.form.valid);
    if(form.form.valid){
      this.messageService.sendMessage(form.form.value).subscribe( response => {
        console.log('Form submitted successfully:', response);
        this.snakbar.open('Thank You!. Will get back to you soon.', 'Dismiss');
      },
      error => {
        console.error('Error submitting form:', error);
        this.snakbar.open('Error occured while submitting. Please try after sometime', 'Dismiss');
      });
    }

  }

}
