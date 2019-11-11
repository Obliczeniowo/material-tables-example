import { Student } from './../../Interfaces/student';
import { Injectable } from '@angular/core';

/**
 * this service contains data to display in tables
 */
@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  /**
   * array of students
   */
  data: Student[] =
  [
    {
      id: 1,
      name: 'Grzegorz',
      surname: 'Brzęczyszczykiewicz',
      age: 22
    },
    {
      id: 2,
      name: 'Marian',
      surname: 'Paździoch',
      age: 60
    },
    {
      id: 3,
      name: 'Waldemar',
      surname: 'Kiepski',
      age: 35
    },
    {
      id: 4,
      name: 'Sebastian',
      surname: 'Stępień',
      age: 20
    },
    {
      id: 5,
      name: 'Kacper',
      surname: 'Krawczyk',
      age: 20
    },
    {
      id: 6,
      name: 'Maja',
      surname: 'Pawłowska',
      age: 20
    },
    {
      id: 7,
      name: 'Aleksandra',
      surname: 'Nowak',
      age: 20
    },
    {
      id: 8,
      name: 'Oliwier',
      surname: 'Andrzejewski',
      age: 20
    },
    {
      id: 9,
      name: 'Jakub',
      surname: 'Czech',
      age: 20
    },
    {
      id: 10,
      name: 'Antonina',
      surname: 'Tomaszewska',
      age: 20
    },
    {
      id: 11,
      name: 'Antonina',
      surname: 'Olszewska',
      age: 22
    },
    {
      id: 12,
      name: 'Patrycja',
      surname: 'Augustyniak',
      age: 25
    },
    {
      id: 13,
      name: 'Kajetan',
      surname: 'Tomaszewski',
      age: 26
    },
    {
      id: 14,
      name: 'Aleksandra',
      surname: 'Kowalska',
      age: 35
    },
    {
      id: 15,
      name: 'Michał',
      surname: 'Dąbrowski',
      age: 18
    }
  ];

  constructor() { }
}
