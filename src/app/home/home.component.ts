import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products!: any[]; // Use the non-null assertion operator
  imageLink: string = 'https://media.discordapp.net/attachments/1099532016808108072/1115665446121787432/image.png?width=1020&height=37'
  imageUrl: string = 'https://media.discordapp.net/attachments/1099532016808108072/1114514614911238214/image.png?width=434&height=498'

  constructor(private router: Router) { }
  redirectToLink(): void {
    const link = '/files'; // Replace with the link you want to redirect to
    this.router.navigateByUrl(link);
  }

  ngOnInit() {

  }
}