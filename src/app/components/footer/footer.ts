import { Instagram, Facebook } from 'lucide-angular';
import { LucideAngularModule } from 'lucide-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [LucideAngularModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  readonly InstagramIcon = Instagram;
  readonly FacebookIcon = Facebook;
}
