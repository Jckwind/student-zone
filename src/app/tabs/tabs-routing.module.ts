import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: "",
            loadChildren: () => import('../activities/activities.module').then(m => m.ActivitiesPageModule)
          }
        ]
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tracker/tracker.module').then(m => m.TrackerPageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'tab4',
        loadChildren: () => import('../champions/champions.module').then(m => m.ChampionsPageModule)
      },
      {
        path: 'tab5',
        loadChildren: () => import('../notifications/notifications.module').then(m => m.NotificationsPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab3',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab3',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
