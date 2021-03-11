export class AuthService {
  constructor(
    private windowObject: Window,
    private localStorage: Storage,
    private sessionStorage: Storage
  ) {}

  // private redirectToLogin(loginPageUrl?: string): void {
  //   if (loginPageUrl && loginPageUrl.indexOf('http') !== -1) {
  //     // BFF has returned to us the location of the login page that we should use so use it
  //     this.windowObject.location.href = loginPageUrl;
  //   } else {
  //     // we are probably wiremock so redirect to the known fake login page
  //     this.windowObject.location.href =
  //       this.windowObject.location.protocol +
  //       '//' +
  //       this.windowObject.location.hostname +
  //       (this.windowObject.location.port
  //         ? ':' + this.windowObject.location.port
  //         : '') +
  //       NaooConstants.LOGIN_URL;
  //   }
  // }
  //
  // public isMissingToken(): boolean {
  //   return this.getToken() === null;
  // }
  //
  // public getToken(): string | null {
  //   try {
  //     return this.localStorage.getItem(NaooConstants.X_AUTH_TOKEN_HEADER);
  //   } catch (e) {}
  //   return null;
  // }
  //
  // public setToken(tokenValue: string): void {
  //   try {
  //     this.localStorage.setItem(NaooConstants.X_AUTH_TOKEN_HEADER, tokenValue);
  //   } catch (e) {}
  // }
  //
  // private removeToken(): void {
  //   try {
  //     this.localStorage.removeItem(NaooConstants.X_AUTH_TOKEN_HEADER);
  //   } catch (e) {}
  // }
  //
  // public processAuthError(loginPageUrl?: string): void {
  //   if (environment.usesWiremock) {
  //     this.removeToken();
  //   }
  //   this.setPreviousPageUrl();
  //   this.redirectToLogin(loginPageUrl);
  // }
  //
  // public getPreviousPageUrl(): string | null {
  //   try {
  //     return this.sessionStorage.getItem(NaooConstants.PREVIOUS_URL);
  //   } catch (e) {}
  //   return null;
  // }
  //
  // public setPreviousPageUrl(): void {
  //   try {
  //     this.sessionStorage.setItem(
  //       NaooConstants.PREVIOUS_URL,
  //       this.getCurrentPageUrl()
  //     );
  //   } catch (e) {}
  // }
  //
  // public removePreviousPageUrl(): void {
  //   try {
  //     this.sessionStorage.removeItem(NaooConstants.PREVIOUS_URL);
  //   } catch (e) {}
  // }
  //
  // public getCurrentPageUrl(): string {
  //   return this.windowObject.location.href;
  // }
}
