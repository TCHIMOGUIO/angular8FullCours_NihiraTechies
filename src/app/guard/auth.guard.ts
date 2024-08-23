import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { MasterService } from '../service/master.service';

export const authGuard: CanActivateFn = (route, state) => {

  // console.log(route);
   
 
  let router= inject(Router);
  let service= inject(MasterService)

  //  if(route.url.length >0){

  //   let menu=route.url[0].path
  //   if(menu === ''){
  //     alert('you don t have access');
  //     //router.navigate(['about']);
  //     router.navigateByUrl('/customer');
  //     return false;
  //    }
  //    else{
  //     return true;
  //    }
  //  }else{
  //   return true;
  //  }

  if(service.isloggedIn()){
    return true;
  }else {
    alert('Unauthorized access.');
    router.navigateByUrl('/login');
    return false;
  }
   
};
