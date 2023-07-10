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
         id   : 'products',
         title: 'Productoses',
         type : 'basic',
         // icon : 'email',
         link  : '/productoses'
      },
      // End null

       // Begin null
      {
         id   : 'orders',
         title: 'Ordenes',
         type : 'basic',
         // icon : 'email',
         link  : '/ordenes'
      },
      // End null

       /* Add new menu items here */
     
     



















];

export const defaultNavigation: FuseNavigationItem[]    = navigation
export const compactNavigation: FuseNavigationItem[]    = navigation
export const futuristicNavigation: FuseNavigationItem[] = navigation
export const horizontalNavigation: FuseNavigationItem[] = navigation
