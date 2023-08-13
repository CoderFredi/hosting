import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent {
  pin: string | undefined;
  pin2: string | undefined;
  pin3: string | undefined;
  pin4: string | undefined;
  pin5: string | undefined;
  pin6: string | undefined;
  pin7: string | undefined;
  pin8: string | undefined;
  pin9: string | undefined;
  pin10: string | undefined;
  pin11: string | undefined;
  pin12: string | undefined;
  pin13: string | undefined;
  pin14: string | undefined;
  pin15: string | undefined;
  pin16: string | undefined;
  pin17: string | undefined;

  constructor(private router: Router) { }

  submitPin() {
    // Check if the entered PIN is correct (e.g., '1234')
    if (this.pin === '537491') {
      window.location.href = 'https://replit.com/@CoderFredi/100-Commands-Moderation-Bot?v=1'; 
    } else if (this.pin2 === '102659') {
      window.location.href = 'https://replit.com/@CoderFredi/Advance-Server-Moderation-Bot'; 
    } else if (this.pin3 === '842065') {
      window.location.href = 'https://replit.com/@CoderFredi/All-in-One-Discord-Bot'; 
    } else if (this.pin4 === '209459') {
      window.location.href = 'https://replit.com/@CoderFredi/Dyno-Clone-all-in-one-Bot'; 
    } else if (this.pin5 === '203419') {
      window.location.href = 'https://replit.com/@CoderFredi/DISCORD-BOT-WITH-BUTTON'; 
    } else if (this.pin6 === '093483') {
      window.location.href = 'https://replit.com/@CoderFredi/Music-Bot'; 
    } else if (this.pin7 === '1111') {
      window.location.href = 'https://replit.com/@CoderFredi/Leveling-Bot'; 
    } else if (this.pin8 === '1111') {
      window.location.href = 'https://replit.com/@CoderFredi/Moderation-Discord-Bot'; 
    } else if (this.pin9 === '1111') {
      window.location.href = 'https://replit.com/@CoderFredi/DropDown-Roles'; 
    } else if (this.pin11 === '1111') {
      window.location.href = 'https://replit.com/@CoderFredi/GiveawayBot'; 
    } else if (this.pin12 === '1111') {
      window.location.href = 'https://replit.com/@CoderFredi/Discord-MiniGames-Bot'; 
    } else if (this.pin13 === '1111') {
      window.location.href = 'https://replit.com/@CoderFredi/Advanced-Economy-Bot'; 
    } else if (this.pin14 === '1111') {
      window.location.href = 'https://replit.com/@CoderFredi/Bot-suggestions'; 
    } else if (this.pin15 === '1111') {
      window.location.href = 'https://replit.com/@CoderFredi/GEN-Discord-Bot'; 
    } else if (this.pin16 === '1111') {
      window.location.href = 'https://replit.com/@CoderFredi/Minecraft-Status-Bot'; 
    } else if (this.pin17 === '1111') {
      window.location.href = 'https://replit.com/@CoderFredi/CHATGPT'; 
    } else {
      // Handle incorrect PIN case
      alert('Incorrect PIN');
    }
  }
}
