import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-proprty.component.html',
  styleUrls: ['./input-proprty.component.css']
})
export class InputProprtyComponent implements OnInit {

  @Input('nome ') nomeCurso: string = '';

  constructor() { }

  ngOnInit() {
  }

}
