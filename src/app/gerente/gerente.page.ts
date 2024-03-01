import { Component, OnInit } from '@angular/core';
import {CadastroService} from '../cadastro.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-gerente',
  templateUrl: './gerente.page.html',
  styleUrls: ['./gerente.page.scss'],
})
export class GerentePage implements OnInit {

  candidatos: any[] = [];
  curriculos: any[] = [];
  curricSelect: any;
  usuario: number = 0;
  

  constructor(private service: CadastroService, private router: Router) { 

  }

  ngOnInit() {
    this.curriculos = this.service.getCurriculos();
    this.usuario = this.service.logado.perfil;
    console.log(this.usuario);
  }

  mudaStatus(statId: number) {
    console.log(statId);
    console.log(this.curriculos);
    for (let i = 0; i < this.curriculos.length; i++) {
      if(i == statId)
      {
        if(this.curriculos[i].status==1){
          this.curriculos[i].status=2
          this.service.mudaStatusServico(i,2)
        } else if(this.curriculos[i].status==2){
          this.curriculos[i].status=3
          this.service.mudaStatusServico(i,3)
          } else if(this.curriculos[i].status==3){
            this.curriculos[i].status=2
            this.service.mudaStatusServico(i,2)
            } 
          
      }
    }
  }



  logout(){
    this.router.navigate(['/home'])
  }

}
