import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ListarusuariosComponent } from './listarusuarios/listarusuarios.component';
import { ModificarusuariosComponent } from './modificarusuarios/modificarusuarios.component';
import { EliminarusuariosComponent } from './eliminarusuarios/eliminarusuarios.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceformularioService } from './formulario/serviceformulario.service';
import { ServicegeneralService } from './servicegeneral.service';
import { HttpClientModule } from '@angular/common/http';
import { ServiciolistarService } from './listarusuarios/serviciolistar.service';
import { LoginComponent } from './LoginUsuario/login/login.component';
import { RegisterComponent } from './LoginUsuario/register/register.component';
import { DashboardComponent } from './LoginUsuario/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ListarusuariosComponent,
    ModificarusuariosComponent,
    EliminarusuariosComponent,
    MenuComponent,
    HomeComponent,
    PaginaNoEncontradaComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ServicegeneralService,
    ServiceformularioService,
    ServiciolistarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
