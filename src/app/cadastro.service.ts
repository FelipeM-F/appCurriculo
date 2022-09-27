import { Injectable } from '@angular/core';


export const RH = 1
export const GERENTE_ADM = 2
export const GERENTE_TI = 3

export const DISPONIVEL = 1
export const SELECIONADO = 2
export const NAO_SELECIONADO = 3

@Injectable({
  providedIn: 'root'
})


export class CadastroService {

  curriculos: {id: number, nome:string, vaga:string, gerente:number, formacao: string, experiencia:string, 
    ingles:string, status:number}[] = [];
  usuarios: {id:number, usuario:string, senha:string, perfil:number}[]=[];
  logado: any
  index: number;
  

  constructor() {

      this.usuarios = [
        {id:1, usuario:'rh', senha:'123', perfil:RH},
        {id:2, usuario:'gerenteTI', senha:'123', perfil:GERENTE_TI },
        {id:3, usuario:'gerenteAdm', senha:'123', perfil:GERENTE_ADM }];
      
      this.curriculos = [{id: 0, nome: "Felipe",vaga: "TI",gerente: 3,formacao:"ADS", 
      experiencia:"Exemplo",ingles:"Básico", status: 1}, {id: 1, nome: "Laura",vaga: "Adm",gerente: 2,formacao:"Adm", 
      experiencia:"Exemplo",ingles:"Básico", status: 1}]

      this.logado = null;
      this.index = 2;
    
   }

   login (usuario: string, senha: string): Boolean{
    for(let i = 0; i<this.usuarios.length; i++){
      let usr = this.usuarios[i];
      console.log(usr.usuario);
      if((usr.usuario == usuario) && (usr.senha == senha ))
      {
        this.logado = usr;
        return true;
      }
    }
    return false;
 }

 novoCurriculo(nomeCand:string, vagaCand: string, gerenteCand:number, formacaoCand: string, 
  experienciaCand:string, inglesCand: string, statusCand:number){
  //let teste = new curriculo(nomeCand,vagaCand, gerenteCand,formacaoCand,experienciaCand,inglesCand,statusCand)
  //this.curriculos.push({nome:nomeCand, vaga:vagaCand, gerente:gerenteCand, formacao: formacaoCand, experiencia:experienciaCand, ingles:inglesCand})
  let teste2 ={id:this.index, nome: nomeCand,vaga: vagaCand,gerente: gerenteCand,formacao:formacaoCand, 
      experiencia:experienciaCand,ingles:inglesCand, status: statusCand}
  console.log("teste2: "+ teste2)
 // this.curriculos.push(teste);
  this.curriculos.push(teste2);
  this.index++;
  return teste2;
 }

 getCurriculos():any[]{
  return this.curriculos;
}

mudaStatusServico(idSelec:number, statSelec: number) {
  this.curriculos[idSelec].status = statSelec;
}
  
}
