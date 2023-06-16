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

    {
          id   : 'students',
          title: 'Estudiantes',
          type : 'basic',
          // icon : 'email',
          link  : '/estudiantes'
       },

        {
          id   : 'asignatures',
          title: 'Asignaturas',
          type : 'basic',
          // icon : 'email',
          link  : '/asignaturas'
       },

        /* Add new menu items here */
      
      




];

export const defaultNavigation: FuseNavigationItem[]    = navigation
export const compactNavigation: FuseNavigationItem[]    = navigation
export const futuristicNavigation: FuseNavigationItem[] = navigation
export const horizontalNavigation: FuseNavigationItem[] = navigation
