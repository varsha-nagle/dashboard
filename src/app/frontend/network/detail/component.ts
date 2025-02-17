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
import {NetworkDetail} from '@api/backendapi';
import {Subscription} from 'rxjs';

import {ActionbarService, ResourceMeta} from '../../common/services/global/actionbar';
import {NotificationsService} from '../../common/services/global/notifications';
import {ResourceService} from '../../common/services/resource/resource';
import {EndpointManager, Resource} from '../../common/services/resource/endpoint';

@Component({selector: 'kd-network-detail', templateUrl: './template.html'})
export class NetworkDetailComponent implements OnInit, OnDestroy {
  private networkSubscription_: Subscription;
  private readonly endpoint_ = EndpointManager.resource(Resource.network);
  network: NetworkDetail;
  networkObjectEndpoint: string;
  isInitialized = false;

  constructor(
    private readonly network_: ResourceService<NetworkDetail>,
    private readonly actionbar_: ActionbarService,
    private readonly activatedRoute_: ActivatedRoute,
    private readonly notifications_: NotificationsService,
  ) {}

  ngOnInit(): void {
    const {networkName} = this.activatedRoute_.snapshot.params;
    this.networkObjectEndpoint = EndpointManager.resource(Resource.network, false,true).child(
      networkName,
      Resource.networkObject,
    );

    this.networkSubscription_ = this.network_
      .get(this.endpoint_.detail(), networkName)
      .subscribe((d: NetworkDetail) => {
        this.network = d;
        this.notifications_.pushErrors(d.errors);
        this.actionbar_.onInit.emit(
          new ResourceMeta('Network', d.objectMeta, d.typeMeta),
        );
        this.isInitialized = true;
      });
  }

  ngOnDestroy(): void {
    this.networkSubscription_.unsubscribe();
    this.actionbar_.onDetailsLeave.emit();
  }
}
