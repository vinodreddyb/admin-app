import { Component, OnInit ,ViewEncapsulation } from '@angular/core';

import * as shape from 'd3-shape';
import { NgxGraphModule } from '@swimlane/ngx-graph';
@Component({
  selector: 'app-workflow-manager',
  templateUrl: './workflow-manager.component.html',
  styleUrls: ['./workflow-manager.component.scss']
})
export class WorkflowManagerComponent implements OnInit {
  name = 'Angular 6';
  hierarchialGraph = {nodes: [], links: []}
  curve = shape.curveBundle.beta(1);
 

  public ngOnInit():void {
    this.showGraph();
  }

  showGraph() {
    this.hierarchialGraph.nodes = [
      {
        id: 'start-node',
        sync: 'true',
        label: 'start',
        position: 'x0'
      },
      {
        id: 'end-node',
        sync: 'true',
        label: 'end',
        position: 'x0'
      },
  {
    id: 'start',
    label: 'etl-cv-events',
    position: 'x0'
  },
  {
    id: 'sync1',
    label: 'sync',
    sync: 'true',
    position: 'x3'
  },
  {
    id: 'start1',
    label: 'etl-cv-smartsuite',
    position: 'x0'
  }, {
    id: '1',
    label: 'etl-cv-drools',
    position: 'x2'
  }, {
    id: '2',
    label: 'etl-cv-idata',
    position: 'x3'
  }, {
    id: '3',
    label: 'etl-cv-post',
    position: 'x4'
  }, {
    id: '4',
    label: 'etl-cv-systemusage',
    position: 'x5'
  }, {
    id: '5',
    label: 'etl-cv-softwareversion',
    position: 'x6'
  },
  {
    id: '6',
    label: 'etl-cv-logviewer',
    position: 'x6'
  },{
    id: '7',
    label: 'etl-cv-alerts',
    position: 'x6'
  },{
    id: '8',
    label: 'etl-cv-registrydump',
    position: 'x6'
  }
  ];

  this.hierarchialGraph.links = [
    {
      source: 'start-node',
      target: 'start',
    }, 
    {
      source: 'start-node',
      target: 'start1',
    }, 
    {
      source: 'start-node',
      target: '8',
    }, 
    
    {
      source: 'start',
      target: 'sync1',
      label: 'on success'
    }, 
    {
      source: 'start1',
      target: 'sync1',
      label: 'on success'
    }, 
  {
    source: 'sync1',
    target: '1',
    label: 'on success'
  },
  
   {
    source: 'sync1',
    target: '2',
    label: 'on success'
  },
  
  {
    source: 'sync1',
    target: '3',
    label: 'on success'
  },
  
  {
    source: '2',
    target: '4',
    label: 'on success'
  },{
    source: '3',
    target: '4',
    label: 'on success'
  }, {
    source: 'sync1',
    target: '5',
    label: 'on success'
  }, {
    source: '8',
    target: '5',
    label: 'on success'
  },
  {
    source: '1',
    target: '6',
    label: 'on success'
  },{
    source: '1',
    target: '7',
    label: 'on success'
  },{
    source: '4',
    target: 'end-node',
    label: 'on success'
  },{
    source: '6',
    target: 'end-node',
    label: 'on success'
  },
  {
    source: '7',
    target: 'end-node',
    label: 'on success'
  },{
    source: '5',
    target: 'end-node',
    label: 'on success'
  }
  ];

  }

}
