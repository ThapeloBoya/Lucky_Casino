import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../../pages/home/home.component';
import { MainComponent } from '../../pages/main/main.component'; // Import MainComponent
import { environment } from '../../../environments/environment'; // Assuming environment is being used for appUrl

const routes: Routes = [
  { 
    path: '', 
    component: MainComponent, children: [ 
      { path: '/en', redirectTo: '', pathMatch: 'full' }, // Redirect to default path for '/en'
      {path: '', component: HomeComponent, 
        data: {
          seo: {
            title: "Best Online Casino Australia– at lucky casino Casino",
            metaTags: [
              { httpEquiv: 'Content-Type', content: 'text/html; charset=utf-8' },
              { name: 'description', content: 'lucky casino the best Australian online casino in 2024. Claim up to $1000 bonus + 50 free Spins. Play 200+ online pokies & table games for real money.' },
              { property: 'og:title', content: "Best Online Casino Australia– at lucky casino Casino" },
              { property: 'og:description', content: 'lucky casino the best Australian online casino in 2024. Claim up to $1000 bonus + 50 free Spins. Play 200+ online pokies & table games for real money.' },
              { property: 'og:image', content: environment.appUrl + 'assets/images/logo.png' },
              { property: 'og:site_name', content: 'lucky casino' },
              { property: 'og:url', content: environment.appUrl + 'en' },
              { name: 'keywords', content: 'Online Casino' }
            ]
          }
        }
      },
      
    ]
  },
  { path: 'home', component: HomeComponent }, // Explicit home route
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
