import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService implements OnInit{
  nekiString = 'ovo je iz AuthService klase';

  ngOnInit(): void {
   this.nekiString = 'ovo je iz AuthService klase'
  }





  constructor(private http: HttpClient) { }

  getUserDetails(username, password) {

    return this.http.post('/api/auth.php', {
      username,
      password
    }).subscribe(data => {
      console.log('čč' + data.toString())

    })
  }

  spremiString(tekstIzInputPolja: string){
    this.nekiString = tekstIzInputPolja;
  }
  
}
