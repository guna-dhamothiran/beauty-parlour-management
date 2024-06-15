import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ProductsComponent } from './products/products.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { BlogComponent } from './blog/blog.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { PayGoogleComponent } from './pay-google/pay-google.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'appointment', component: AppointmentComponent },
  { path: 'pay-google', component: PayGoogleComponent },
  { path: '', redirectTo: '/services', pathMatch: 'full' }, // Adjusted order, it's better to place this at the end
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
