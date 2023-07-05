/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';

const navigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example 2',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    },
    // Begin 1yqmy71zh6ccwjtn6mgx
      {
         id   : 'cars',
         title: 'Carros',
         type : 'basic',
         // icon : 'email',
         link  : '/carros'
      },
      // End 1yqmy71zh6ccwjtn6mgx

       // Begin null
      {
         id   : 'phoness',
         title: 'Celulareses',
         type : 'basic',
         // icon : 'email',
         link  : '/celulareses'
      },
      // End null

       /* Add new menu items here */
     
     






];

export const defaultNavigation: FuseNavigationItem[]    = navigation
export const compactNavigation: FuseNavigationItem[]    = navigation
export const futuristicNavigation: FuseNavigationItem[] = navigation
export const horizontalNavigation: FuseNavigationItem[] = navigation
