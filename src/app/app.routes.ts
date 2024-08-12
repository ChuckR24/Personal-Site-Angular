import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home/home.component';
import { AboutComponent } from './views/about/about/about.component';
import { ContactComponent } from './views/contact/contact/contact.component';
import { ExperienceComponent } from './views/experience/experience/experience.component';
import { HobbiesComponent } from './views/hobbies/hobbies/hobbies.component';
import { ProjectsComponent } from './views/projects/projects/projects.component';
import { CmsComponent } from './views/cms/cms/cms.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'experience', component: ExperienceComponent},
    {path: 'hobbies', component: HobbiesComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'cms', component: CmsComponent},
];
