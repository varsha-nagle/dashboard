// Copyright 2017 The Kubernetes Authors.
// Copyright 2020 Authors of Arktos - file modified.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {VirtualMachineDetail} from '@api/backendapi';
import {Subscription} from 'rxjs/Subscription';

import {ActionbarService, ResourceMeta} from '../../../../common/services/global/actionbar';
import {NotificationsService} from '../../../../common/services/global/notifications';
import {KdStateService} from '../../../../common/services/global/state';
import {EndpointManager, Resource} from '../../../../common/services/resource/endpoint';
import {NamespacedResourceService} from '../../../../common/services/resource/resource';

@Component({
  selector: 'kd-virtual-machine-detail',
  templateUrl: './template.html',
})
export class VirtualMachineDetailComponent implements OnInit, OnDestroy {
  private virtualMachineSubscription_: Subscription;
  private readonly endpoint_ = EndpointManager.resource(Resource.virtualMachine, true, true);
  private readonly endpoint = EndpointManager.resource(Resource.pod, true, true);
  virtualMachine: VirtualMachineDetail;
  isInitialized = false;
  eventListEndpoint: string;

  constructor(
    private readonly virtualMachine_: NamespacedResourceService<VirtualMachineDetail>,
    private readonly actionbar_: ActionbarService,
    private readonly activatedRoute_: ActivatedRoute,
    private readonly kdState_: KdStateService,
    private readonly notifications_: NotificationsService,
  ) {}

  ngOnInit(): void {
    const resourceName = this.activatedRoute_.snapshot.params.resourceName;
    const resourceNamespace = this.activatedRoute_.snapshot.params.resourceNamespace;

    this.eventListEndpoint = this.endpoint.child(resourceName, Resource.event, resourceNamespace);

    this.virtualMachineSubscription_ = this.virtualMachine_
      .get(this.endpoint_.detail(), resourceName, resourceNamespace)
      .subscribe((d: VirtualMachineDetail) => {
        this.virtualMachine = d;
        this.notifications_.pushErrors(d.errors);
        this.actionbar_.onInit.emit(new ResourceMeta('Virtual Machine', d.objectMeta, d.typeMeta));
        this.isInitialized = true;
      });
  }

  ngOnDestroy(): void {
    this.virtualMachineSubscription_.unsubscribe();
    this.actionbar_.onDetailsLeave.emit();
  }

  getNodeHref(name: string): string {
    return this.kdState_.href('node', name);
  }
}
