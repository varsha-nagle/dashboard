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
import {NamespaceDetail} from '@api/backendapi';
import {Subscription} from 'rxjs/Subscription';

import {ActionbarService, ResourceMeta} from '../../../../common/services/global/actionbar';
import {NotificationsService} from '../../../../common/services/global/notifications';
import {EndpointManager, Resource} from '../../../../common/services/resource/endpoint';
import {ResourceService} from '../../../../common/services/resource/resource';
import {TenantService} from "../../../../common/services/global/tenant";

@Component({
  selector: 'kd-clusternamespace-detail',
  templateUrl: './template.html',
})
export class NamespaceDetailComponent implements OnInit, OnDestroy {
  private namespaceSubscription_: Subscription;
  private readonly endpoint_ = EndpointManager.resource(Resource.namespace, false, true);
  namespace: NamespaceDetail;
  isInitialized = false;
  eventListEndpoint: string;

  constructor(
    private readonly namespace_: ResourceService<NamespaceDetail>,
    private readonly actionbar_: ActionbarService,
    private readonly activatedRoute_: ActivatedRoute,
    private readonly tenant_: TenantService,
    private readonly notifications_: NotificationsService,
  ) {}

  ngOnInit(): void {
    const resourceName = this.activatedRoute_.snapshot.params.resourceName;

    const resourceTenant:any = this.tenant_.current() === 'system' ?
      sessionStorage.getItem('tenantName') : this.tenant_.current()

    let endpoint = ''
    if (sessionStorage.getItem('userType') === 'cluster-admin') {
      endpoint = `api/v1/tenants/${resourceTenant}/namespace/${resourceName}`
    } else {
      endpoint = this.endpoint_.detail()
    }

    this.eventListEndpoint = this.endpoint_.child(resourceName, Resource.event, undefined, resourceTenant);

    this.namespaceSubscription_ = this.namespace_
      .get(endpoint, resourceName, undefined, resourceTenant)
      .subscribe((d: NamespaceDetail) => {
        this.namespace = d;
        this.notifications_.pushErrors(d.errors);
        this.actionbar_.onInit.emit(new ResourceMeta('Namespace', d.objectMeta, d.typeMeta));
        this.isInitialized = true;
      });
  }

  ngOnDestroy(): void {
    this.namespaceSubscription_.unsubscribe();
    this.actionbar_.onDetailsLeave.emit();
  }
}
