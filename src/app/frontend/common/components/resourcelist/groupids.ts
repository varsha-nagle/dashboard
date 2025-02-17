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

export enum ListIdentifier {
  clusterRole = 'clusterRoleList',
  namespace = 'namespaceList',
  node = 'nodeList',
  persistentVolume = 'persistentVolumeList',
  storageClass = 'storageClassList',
  cronJob = 'cronJobList',
  crd = 'crdList',
  crdObject = 'crdObjectList',
  job = 'jobList',
  deployment = 'deploymentList',
  daemonSet = 'daemonSetList',
  pod = 'podList',
  virtualMachine = 'virtualMachineList',
  replicaSet = 'replicaSetList',
  ingress = 'ingressList',
  service = 'serviceList',
  configMap = 'configMapList',
  persistentVolumeClaim = 'persistentVolumeClaimList',
  secret = 'secretList',
  replicationController = 'replicationControllerList',
  statefulSet = 'statefulSetList',
  event = 'event',
  resource = 'resource',
  tenant = 'tenant',
  resourcequota = 'resourcequota',
  role = 'roleList',
  user = 'users',
  serviceaccount= 'serviceaccount',
  resourcePartition = 'resourcepartition',
  tenantPartition = 'tenantpartition',
  tpTenant = 'tptenant',
  network = 'crdList',
  networkObject = 'crdObjectList',
}

export enum ListGroupIdentifier {
  cluster = 'clusterGroup',
  workloads = 'workloadsGroup',
  discovery = 'discoveryGroup',
  config = 'configGroup',
  none = 'none',
}
