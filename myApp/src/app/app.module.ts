import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { CadastraDisciplinaPage } from '../pages/cadastra-disciplina/cadastra-disciplina';

import { HomePage } from '../pages/home/home';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IntroPage } from '../pages/intro/intro';

import { CadastroPage } from '../pages/cadastro/cadastro';
import { LoginPage } from '../pages/login/login';
import { InfomacaoDiretorPage } from '../pages/infomacao-diretor/infomacao-diretor';
import { RemoverUsuariosPage } from '../pages/remover-usuarios/remover-usuarios';

import { CadastroAlunoPage } from '../pages/cadastro-aluno/cadastro-aluno';
import { LoginAlunoPage } from '../pages/login-aluno/login-aluno';
import { FrequenciaAlunoPage } from '../pages/frequencia-aluno/frequencia-aluno';
import { ListarAlunosPage } from '../pages/listar-alunos/listar-alunos';

import { RelatorioPage } from '../pages/relatorio/relatorio';

import { CadastroProfessorPage } from '../pages/cadastro-professor/cadastro-professor';
import { FrequenciaProfessorPage } from '../pages/frequencia-professor/frequencia-professor';
import { HomeProfessorPage } from '../pages/home-professor/home-professor';
import { ListarProfessorPage } from '../pages/listar-professor/listar-professor';
import { AbrirTurmaProfessorPage } from '../pages/abrir-turma-professor/abrir-turma-professor';
import { DisciplinaProfessorPage } from '../pages/disciplina-professor/disciplina-professor';
import { RelatorioProfessorPage } from '../pages/relatorio-professor/relatorio-professor';


import { ServiceProvider } from '../providers/service/service';
import { HttpModule } from '@angular/http';
import { TurmasRelatorioPage } from '../pages/turmas-relatorio/turmas-relatorio';

import { ChartModule } from 'angular2-highcharts';
import * as highcharts from 'highcharts';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    IntroPage,
    CadastroPage,
    CadastroAlunoPage,
    CadastroProfessorPage,
    FrequenciaProfessorPage,
    RelatorioProfessorPage,
    InfomacaoDiretorPage,
    RelatorioPage,
    HomeProfessorPage,
    AbrirTurmaProfessorPage,
    DisciplinaProfessorPage,
    CadastraDisciplinaPage,
    LoginPage,
    LoginAlunoPage,
    RemoverUsuariosPage,
    ListarAlunosPage,
    ListarProfessorPage,
    FrequenciaAlunoPage,
    TurmasRelatorioPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ChartModule.forRoot(highcharts),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    IntroPage,
    CadastroPage,
    CadastroAlunoPage,
    CadastroProfessorPage,
    FrequenciaProfessorPage,
    RelatorioProfessorPage,
    InfomacaoDiretorPage,
    DisciplinaProfessorPage,
    RelatorioPage,
    HomeProfessorPage,
    AbrirTurmaProfessorPage,
    LoginPage,
    LoginAlunoPage,
    RemoverUsuariosPage,
    CadastraDisciplinaPage,
    ListarAlunosPage,
    ListarProfessorPage,
    FrequenciaAlunoPage,
    TurmasRelatorioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiceProvider
  ]
})
export class AppModule {}
