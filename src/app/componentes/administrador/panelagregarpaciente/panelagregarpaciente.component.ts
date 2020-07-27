import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-panelagregarpaciente',
  templateUrl: './panelagregarpaciente.component.html',
  styleUrls: ['./panelagregarpaciente.component.css']
})
export class PanelagregarpacienteComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
