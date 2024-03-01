import { Component, OnInit } from '@angular/core';
import {CadastroService} from '../cadastro.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-rh',
  templateUrl: './rh.page.html',
  styleUrls: ['./rh.page.scss'],
})
export class RHPage implements OnInit {
  isModalOpen = false;

  id: number = 0;
  nome: string = '';
  vaga: string = '';
  gerente: number = 0;
  formacao: string = '';
  experiencia: string = '';
  ingles: string = '';
  status: number = 0;
  candidatos: any[] = [];
  curriculos: any[] = [];

  constructor(private service: CadastroService, private router: Router) { 
    this.curriculos = this.service.getCurriculos();
  }

  ngOnInit() {
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  salvarCurriculos() {
    
    this.status = 1;
    if(this.nome==undefined || this.vaga==undefined || this.gerente ==undefined ||
      this.formacao==undefined || this.experiencia==undefined || this.ingles==undefined || this.status==undefined){
      alert("Preencher todos os campos");
    } else{
      let cadastro = this.service.novoCurriculo(this.nome, this.vaga, this.gerente ,
        this.formacao , this.experiencia, this.ingles, this.status);
      console.log(cadastro); 
      console.log(this.nome); 
  
      this.zerarCurriculoComponentView();
      this.curriculos = this.service.getCurriculos();
      alert("Cadastro Realizado");
      this.isModalOpen = false;
    }

  }

  zerarCurriculoComponentView(){

    this.curriculos = [];
  }

  logout(){
    this.router.navigate(['/home'])
  }

  
}
