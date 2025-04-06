import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AccountService } from '../auth/account.service';
import { AuthServerProvider } from '../auth/auth-jwt.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private accountService: AccountService,
    private authServerProvider: AuthServerProvider,
    private translate: TranslateService,
  ) {}

  login(account: any): Promise<any> {
    return new Promise((resolve, reject) => {
      // autenticação fake
      if (account.username === 'admin' && account.password === 'admin') {
        resolve({ token: 'fake-token', username: account.username });
      } else {
        reject('Credenciais inválidas');
      }
    });
  }

  loginWithToken(jwt, rememberMe) {
    return this.authServerProvider.loginWithToken(jwt, rememberMe);
  }

  logout() {
    this.authServerProvider.logout().subscribe();
    this.accountService.authenticate(null);
  }
}
