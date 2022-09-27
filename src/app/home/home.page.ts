import { Component } from '@angular/core';
import {CadastroService} from '../cadastro.service';
import {Router} from '@angular/router';
import {RH} from '../cadastro.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  usuario: string
  senha: string
  mensagem: string

  constructor(private service: CadastroService, private router: Router) {
    
  }

  login(){
    let acess = this.service.login(this.usuario, this.senha);
    if(acess)
    {
      this.mensagem = 'Você está logado';
      if(this.service.logado.perfil == RH)
        this.router.navigate(['/rh'])
      else
        this.router.navigate(['/gerente'])
    }
    else
      this.mensagem = 'Acesso negado!';
  }



}
