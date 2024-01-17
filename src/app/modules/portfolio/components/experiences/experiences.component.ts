import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interfaces/Experiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Front-end Especialista',
        p: 'ZUP | Set 2020 - Present',
      },
      text: '<p> Desde setembro de 2020, atuo como Analista de Sistemas Especialista na ZUP</p>',
    },
    {
      summary: {
        strong: 'Front-end Especialista',
        p: 'ZUP | Set 2020 - Present',
      },
      text: '<p> Desde setembro de 2020, atuo como Analista de Sistemas Especialista na ZUP</p>',
    },
  ]);
}
