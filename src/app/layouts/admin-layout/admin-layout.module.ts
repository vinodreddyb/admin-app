import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { NewRetryComponent } from '../../new-retry/new-retry.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { WorkflowManagerComponent } from '../../workflow-manager/workflow-manager.component'
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import {ChartModule, CalendarModule, SharedModule, TabViewModule} from 'primeng/primeng';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { NgxChartsModule } from '@swimlane/ngx-charts';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ChartsModule,
    NgbModule, TabViewModule,NgxGraphModule, NgxChartsModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    DashboardComponent,
    NewRetryComponent,
    TableListComponent,
    WorkflowManagerComponent,

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class AdminLayoutModule {}
