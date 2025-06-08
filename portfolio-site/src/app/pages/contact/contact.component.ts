import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private firestore: Firestore) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: [''],
      message: ['', Validators.required]
    });
  }

 async onSubmit() {
  console.log('Submit clicked ✅');

  if (this.contactForm.valid) {
    console.log('Form is valid ✅');
    const formData = this.contactForm.value;
    try {
      console.log('Submitting to Firestore...', formData);
      const docRef = await addDoc(collection(this.firestore, 'messages'), formData);
      alert('Message sent! ✅');
      this.contactForm.reset();
    } catch (error) {
      console.error('Error submitting to Firestore ❌', error);
      alert('Error sending message');
    }
  } else {
    console.log('Form is INVALID ❌');
  }
 }
 
}
