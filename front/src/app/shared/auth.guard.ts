// import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
// import {Observable} from "rxjs";
// import {TeacherService} from "../login/teacher.service";
// import {Injectable} from "@angular/core";
//
// @Injectable({providedIn: "root"})
// export class AuthGuard implements CanActivate {
//   constructor(private auth: TeacherService, private router: Router) {
//   }
//
//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
//     if (this.auth.token) {
//       return true
//     }
//     this.router.navigate(['/login'], {
//       queryParams: {
//         auth: false
//       }
//     })
//   }
// }
