import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { NewRetryComponent } from '../../new-retry/new-retry.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { WorkflowManagerComponent } from '../../workflow-manager/workflow-manager.component'
export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'new-retry',   component: NewRetryComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'workflow-manager',     component: WorkflowManagerComponent },
    
];
