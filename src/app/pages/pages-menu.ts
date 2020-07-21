/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import { NbMenuItem } from '@nebular/theme';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import {ProductModule} from './product/product.module';

@Injectable()
export class PagesMenu {

  getMenu(): Observable<NbMenuItem[]> {
    const dashboardMenu = [
      {
        title: 'Dashboard',
        icon: 'home-outline',
        link: '/pages/iot-dashboard',
        children: undefined,
      },
    ];

    const menu = [
      {
        title: 'FEATURES',
        group: true,
      },
      {
        title: 'Client',
        icon: 'person-outline',
        link: '/pages/client',
      },
      {
        title: 'Product',
        icon: 'shopping-cart-outline',
        link: '/pages/product',
      },
      {
        title: 'Provider',
        icon: 'person-outline',
        link: '/pages/provider',
      },
      {
        title: 'Orders',
        icon: 'edit-2-outline',
        link: '/pages/Orders/list',
      },
      {
        title: 'Stock',
        icon: 'edit-2-outline',
        link: '/pages/stock',
      },
      {
        title: 'command',
        icon: 'edit-2-outline',
        link: '/pages/command',
      },
      {
        title: 'Auth',
        icon: 'lock-outline',
        children: [
          {
            title: 'Login',
            link: '/auth/login',
          },
          {
            title: 'Register',
            link: '/auth/register',
          },
          {
            title: 'Request Password',
            link: '/auth/request-password',
          },
          {
            title: 'Reset Password',
            link: '/auth/reset-password',
          },
        ],
      },
    ];

    return of([...dashboardMenu, ...menu]);
  }
}
