import { UsersService } from '../users.service';
import { Component } from '@angular/core';
import { UserModel } from "./user.model";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  user: UserModel = new UserModel();
  users: Array<any> = new Array();

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.listarUsers();
  }

  atualizar(id: number) {
    this.usersService.atualizarUser(id, this.user).subscribe(user => {
      this.user = new UserModel();
      this.listarUsers();
      }, err => {
        console.log('Erro ao atualizar user', err)
    })
  }


  remover(id: number) {
    this.usersService.removerUser(id).subscribe(user => {
      this.user = new UserModel();
      this.listarUsers();
      }, err => {
        console.log('Erro ao remover  user', err)
    })
  }

  cadastrar() {
    console.log(this.user);
    this.usersService.cadastrarUser(this.user).subscribe(user => {
      this.user = new UserModel();
      this.listarUsers();
      }, err => {
        console.log('Erro ao cadastrar  user', err)
    })
  }

  listarUsers(){
    this.usersService.listarUsers().subscribe(users => {
      this.users = users;
    }, err => {
      console.log("Erro ao listar os users", err);
    })
  }
}

