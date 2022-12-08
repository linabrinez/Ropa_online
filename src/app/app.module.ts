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
import { ServicegeneralService } from './servicegeneral.service';
import { ServiceformularioService } from './formulario/serviceformulario.service';


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
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    ServicegeneralService,
    ServiceformularioService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
