import { Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RandomComponent } from './random/random.component';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GuessTheNumberComponent } from './guess-the-number/guess-the-number.component';
import { VoteComponent } from './vote/vote.component';
import { NotesComponent } from './notes/notes.component';
import { CrudTestComponent } from './crud-test/crud-test.component';

export const appRoutes = [
  { path: '', component: AuthenticationComponent },
  { path: 'home', component: HomeComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'random-number-generator', component: RandomComponent },
  { path: 'ag-grid', component: AgGridComponent },
  { path: 'guess-the-number', component: GuessTheNumberComponent },
  { path: 'notes', component: NotesComponent },
  { path: 'vote', component: VoteComponent },
  { path: 'crud-test', component: CrudTestComponent },
  { path: '**', component: PageNotFoundComponent }
];

export const routes: Routes = [];
