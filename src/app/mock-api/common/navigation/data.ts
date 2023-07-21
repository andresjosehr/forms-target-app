/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';

const navigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    },

       // Begin null
      {
         id   : 'pruebas',
         title: 'Pruebas',
         type : 'basic',
         // icon : 'email',
         link  : '/pruebas'
      },
      // End null

       // Begin null
      {
         id   : 'cars',
         title: 'Carros',
         type : 'basic',
         // icon : 'email',
         link  : '/carros'
      },
      // End null

       /* Add new menu items here */
     
     





















];

export const defaultNavigation: FuseNavigationItem[]    = navigation
export const compactNavigation: FuseNavigationItem[]    = navigation
export const futuristicNavigation: FuseNavigationItem[] = navigation
export const horizontalNavigation: FuseNavigationItem[] = navigation
