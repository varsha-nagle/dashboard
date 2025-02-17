import {KdError} from '@api/frontendapi';

export interface TypeMeta {
  kind: string;
}

export interface ListMeta {
  totalItems: number;
}

export interface ObjectMeta {
  type: any;
  name?: string;
  namespace?: string;
  labels?: StringMap;
  annotations?: StringMap;
  creationTimestamp?: string;
  uid?: string;
}

export interface ResourceDetail {
  objectMeta: ObjectMeta;
  typeMeta: TypeMeta;
  errors: K8sError[];
  clusterName: string;
}

export interface ResourceList {
  listMeta: ListMeta;
  items?: Resource[];
  errors?: K8sError[];
}

export interface Resource {
  objectMeta: ObjectMeta;
  typeMeta: TypeMeta;
}

export interface ResourceOwner extends Resource {
  pods: PodInfo;
  containerImages: string[];
  initContainerImages: string[];
}

export interface LabelSelector {
  matchLabels: StringMap;
}

export interface CapacityItem {
  resourceName: string;
  quantity: string;
}

// List types
export interface ClusterRoleList extends ResourceList {
  items: ClusterRole[];
}

export interface RoleList extends ResourceList {
  items: Role[];
}


export interface ConfigMapList extends ResourceList {
  items: ConfigMap[];
}

export interface CronJobList extends ResourceList {
  items: CronJob[];
  status: Status;
}

export interface CRDList extends ResourceList {
  items: CRD[];
}

export interface NetworkList extends ResourceList {
  items: Network[];
}

export interface CRDObjectList extends ResourceList {
  typeMeta: TypeMeta;
  items: CRDObject[];
}

export interface NetworkObjectList extends ResourceList {
  typeMeta: TypeMeta;
  items: NetworkObject[];
}

export interface DaemonSetList extends ResourceList {
  daemonSets: DaemonSet[];
  status: Status;
}

export interface DeploymentList extends ResourceList {
  deployments: Deployment[];
  status: Status;
}

export interface EndpointList extends ResourceList {
  endpoints: Endpoint[];
}

export interface EventList extends ResourceList {
  events: Event[];
}

export interface HorizontalPodAutoscalerList extends ResourceList {
  horizontalpodautoscalers: HorizontalPodAutoscaler[];
}

export interface IngressList extends ResourceList {
  items: Ingress[];
}
export interface ServiceAccountList extends ResourceList {
  items: ServiceAccount[];
}

export interface JobList extends ResourceList {
  jobs: Job[];
  status: Status;
}

export interface NamespaceList extends ResourceList {
  namespaces: Namespace[];

}
export interface TenantList extends ResourceList {
  tenants: Tenant[];

}

export interface NodeList extends ResourceList {
  nodes: Node[];
}

export interface ResourcePartitionList extends ResourceList {
  resourcePartitions: ResourcePartition[];
}

export interface TenantPartitionList extends ResourceList {
  tenantPartitions: TenantPartition[];
}

export interface QuotaList extends ResourceList {
  quotas: Node[];
}

export interface PartitionList extends ResourceList {}

export interface PersistentVolumeClaimList extends ResourceList {
  items: PersistentVolumeClaim[];
}

export interface PersistentVolumeList extends ResourceList {
  items: PersistentVolume[];
}

export interface PodContainerList {
  containers: string[];
}

export interface PodList extends ResourceList {
  pods: Pod[];
  status: Status;
  podInfo?: PodInfo;
  cumulativeMetrics: Metric[] | null;
}

export interface VirtualMachineList extends ResourceList {
  virtualMachines: VirtualMachine[];
  status: Status;
  virtualMachineInfo?: VirtualMachineInfo;
  cumulativeMetrics: Metric[] | null;
}

export interface ReplicaSetList extends ResourceList {
  replicaSets: ReplicaSet[];
  status: Status;
}

export interface ReplicationControllerList extends ResourceList {
  replicationControllers: ReplicationController[];
  status: Status;
}

export interface ResourceQuotaDetailList extends ResourceList {
  items: ResourceQuotaDetail[];
}

export interface SecretList extends ResourceList {
  secrets: Secret[];
}

export interface ServiceList extends ResourceList {
  services: Service[];
}

export interface StatefulSetList extends ResourceList {
  statefulSets: StatefulSet[];
  status: Status;
}

export interface StorageClassList extends ResourceList {
  storageClasses: StorageClass[];
}

// Simple detail types
export interface ServiceAccount extends Resource {}

export interface ClusterRole extends Resource {}

export interface Role extends Resource {}

export interface ConfigMap extends Resource {}

export interface Controller extends Resource {
  pods: PodInfo;
  containerImages: string[];
  initContainerImages: string[];
}

export interface CronJob extends Resource {
  schedule: string;
  suspend: boolean;
  active: number;
  lastSchedule: string;
}

export interface CRD extends Resource {
  group: string;
  scope: string;
  nameKind: string;
  established: string;
  names: Names;
}

export interface Network extends Resource {
  group: string;
  scope: string;
  nameKind: string;
  established: string;
  names: Names;
}

export interface Names {
  plural: string;
  singular: string;
  shortNames: string[];
  kind: string;
  listKind: string;
}

export interface CRDObject extends Resource {}

export interface NetworkObject extends Resource {}

export interface DaemonSet extends Resource {
  podInfo: PodInfo;
  containerImages: string[];
  initContainerImages: string[];
}

export interface Deployment extends Resource {
  pods: PodInfo;
  containerImages: string[];
  initContainerImages: string[];
}

export interface EndpointResourceList extends ResourceList {
  endpoints: EndpointResource[];
}

export interface EndpointResource extends Resource {
  host: string;
  nodeName: string;
  ready: boolean;
  ports: EndpointResourcePort[];
}

export interface EndpointResourcePort {
  name: string;
  port: number;
  protocol: string;
}

export interface Port {
  port: number;
  name: string;
  protocol: string;
  nodePort?: number;
}

export interface Endpoint {
  host: string;
  nodeName?: string;
  ports: Port[];
  ready?: boolean;
  typeMeta?: TypeMeta;
  objectMeta?: ObjectMeta;
}

export interface Event extends Resource {
  message: string;
  sourceComponent: string;
  sourceHost: string;
  object: string;
  count: number;
  firstSeen: string;
  lastSeen: string;
  reason: string;
  type: string;
}

export interface HorizontalPodAutoscaler extends Resource {
  scaleTargetRef: ScaleTargetRef;
  minReplicas: number;
  maxReplicas: number;
  currentCPUUtilization: number;
  targetCPUUtilization?: number;
}

export interface Ingress extends Resource {
  endpoints: Endpoint[];
}

export interface Job extends Resource {
  podInfo: PodInfo;
  containerImages: string[];
  initContainerImages: string[];
  parallelism: number;
}

export interface Namespace extends Resource {
  phase: string;
}
export interface Tenant extends Resource {
  phase: string;
}
export interface Node extends Resource {
  ready: string;
}

export interface ResourcePartition extends Resource {
  name: string
  nodeCount: number
  cpuLimit: number
  memoryLimit: number
  healthyNodeCount: number
}

export interface TenantPartition extends Resource {
  name: string
  tenantCount: number
  cpuLimit: number
  memoryLimit: number
  healthyNodeCount: number
}

export interface Quota extends Resource {
  ready: string;
}


export interface Partition extends Resource {}

export interface PersistentVolume extends Resource {
  capacity: StringMap;
  storageClass: string;
  accessModes: string[];
  reclaimPolicy: string;
  status: string;
  claim: string;
  reason: string;
}

export interface PersistentVolumeClaim extends Resource {
  status: string;
  volume: string;
}

export interface Pod extends Resource {
  podStatus: PodStatus;
  podIP?: string;
  restartCount: number;
  qosClass?: string;
  metrics: PodMetrics;
  warnings: Event[];
  nodeName: string;
}

export interface VirtualMachine extends Resource {
  podStatus: VirtualMachineStatus;
  virtualMachineIP?: string;
  restartCount: number;
  qosClass?: string;
  metrics: VirtualMachineMetrics;
  warnings: Event[];
  nodeName: string;
}

export interface PodContainer {
  name: string;
  restartCount: number;
}

export interface ReplicaSet extends Resource {
  podInfo: PodInfo;
  containerImages: string[];
  initContainerImages: string[];
}

export interface ReplicationController extends Resource {
  podInfo: PodInfo;
  containerImages: string[];
  initContainerImages: string[];
}

export interface Secret extends Resource {
  type: string;
}

export interface Service extends Resource {
  internalEndpoint: Endpoint;
  externalEndpoints: Endpoint[];
  selector: StringMap;
  type: string;
  clusterIP: string;
}

export interface StatefulSet extends Resource {
  podInfo: PodInfo;
  containerImages: string[];
  initContainerImages: string[];
}

export interface StorageClass extends Resource {
  provisioner: string;
  parameters: StringMap[];
}

// Detail types

export interface ReplicaSetDetail extends ResourceDetail {
  selector: LabelSelector;
  podInfo: PodInfo;
  podList: PodList;
  containerImages: string[];
  initContainerImages: string[];
  eventList: EventList;
}

export interface ResourceQuotaDetail extends ResourceDetail {
  scopes: string[];
  statusList: {[key: string]: ResourceQuotaStatus};
}

export interface DeploymentDetail extends ResourceDetail {
  selector: Label[];
  statusInfo: DeploymentInfo;
  conditions: Condition[];
  strategy: string;
  minReadySeconds: number;
  revisionHistoryLimit?: number;
  rollingUpdateStrategy?: RollingUpdateStrategy;
  events: EventList;
}

export interface ReplicationControllerDetail extends ResourceDetail {
  labelSelector: StringMap;
  containerImages: string[];
  initContainerImages: string[];
  podInfo: PodInfo;
  podList: PodList;
  serviceList: ServiceList;
  eventList: EventList;
  hasMetrics: boolean;
}

export interface ServiceDetail extends ResourceDetail {
  internalEndpoint: Endpoint;
  externalEndpoints: Endpoint[];
  endpointList: EndpointList;
  selector: StringMap;
  type: string;
  clusterIP: string;
  podList: PodList;
  sessionAffinity: string;
}

export interface DaemonSetDetail extends ResourceDetail {
  labelSelector: StringMap;
  containerImages: string[];
  initContainerImages: string[];
  podInfo: PodInfo;
}

export interface NamespaceDetail extends ResourceDetail {
  phase: string;
  eventList: EventList;
  resourceLimits: LimitRange[];
  resourceQuotaList: ResourceQuotaDetailList;
}

export interface PolicyRule {
  verbs: string[];
  apiGroups: string[];
  resources: string[];
  resourceNames: string[];
  nonResourceURLs: string[];
}

export interface ClusterRoleDetail extends ResourceDetail {
  rules: PolicyRule[];
}

export interface RoleDetail extends ResourceDetail {
  rules: PolicyRule[];
}


export interface SecretDetail extends ResourceDetail {
  type: string;
  data: StringMap;
}

export interface IngressDetail extends ResourceDetail {}

export interface ServiceAccountDetail extends ResourceDetail {
  name: string;
  phase: string;
 namespace:string;
 labels:string;
}

export interface PersistentVolumeClaimDetail extends ResourceDetail {
  status: string;
  volume: string;
  capacity: string;
  storageClass: string;
  accessModes: string[];
}

export interface StorageClassDetail extends ResourceDetail {
  parameters: StringMap;
  provisioner: string;
}

export interface ConfigMapDetail extends ResourceDetail {
  data: StringMap;
}

export interface CRDDetail extends ResourceDetail {
  version?: string;
  group: string;
  scope: string;
  names: CRDNames;
  versions: CRDVersion[];
  objects: CRDObjectList;
  conditions: Condition[];
}

export interface NetworkDetail extends ResourceDetail {
  version?: string;
  group: string;
  scope: string;
  names: CRDNames;
  versions: CRDVersion[];
  objects: CRDObjectList;
  conditions: Condition[];
}

export interface CRDObjectDetail extends ResourceDetail {}

export interface NetworkObjectDetail extends ResourceDetail {}

export interface JobDetail extends ResourceDetail {
  podInfo: PodInfo;
  podList: PodList;
  containerImages: string[];
  initContainerImages: string[];
  eventList: EventList;
  parallelism: number;
  completions: number;
}

export interface CronJobDetail extends ResourceDetail {
  schedule: string;
  suspend: boolean;
  active: number;
  lastSchedule: string;
  concurrencyPolicy: string;
  startingDeadlineSeconds: number;
}

export interface StatefulSetDetail extends ResourceDetail {
  podInfo: PodInfo;
  podList: PodList;
  containerImages: string[];
  initContainerImages: string[];
  eventList: EventList;
}

export interface PersistentVolumeDetail extends ResourceDetail {
  status: string;
  claim: string;
  reclaimPolicy: string;
  accessModes: string[];
  capacity: StringMap;
  message: string;
  storageClass: string;
  reason: string;
  persistentVolumeSource: PersistentVolumeSource;
}

export interface PodDetail extends ResourceDetail {
  initContainers: Container[];
  containers: Container[];
  podPhase: string;
  podIP: string;
  nodeName: string;
  restartCount: number;
  qosClass: string;
  metrics: PodMetrics;
  conditions: Condition[];
  controller: Resource;
  eventList: EventList;
  persistentVolumeClaimList: PersistentVolumeClaimList;
}

export interface VirtualMachineDetail extends ResourceDetail {
  initContainers: Container[];
  containers: Container[];
  podPhase: string;
  podIP: string;
  nodeName: string;
  restartCount: number;
  qosClass: string;
  keyPair: string;
  imagePullPolicy: string;
  shutdownBehavior: string;
  metrics: VirtualMachineMetrics;
  conditions: Condition[];
  controller: Resource;
  eventList: EventList;
  persistentVolumeClaimList: PersistentVolumeClaimList;
}

export interface NodeDetail extends ResourceDetail {
  phase: string;
  podCIDR: string;
  providerID: string;
  unschedulable: boolean;
  allocatedResources: NodeAllocatedResources;
  nodeInfo: NodeInfo;
  containerImages: string[];
  initContainerImages: string[];
  addresses: NodeAddress[];
  taints: NodeTaint[];
  conditions: Condition[];
  podList: PodList;
  eventList: EventList;
}

export interface PartitionDetail extends ResourceDetail {
  phase: string;
  podCIDR: string;
  providerID: string;
  unschedulable: boolean;
  allocatedResources: NodeAllocatedResources;
  nodeInfo: NodeInfo;
  containerImages: string[];
  initContainerImages: string[];
  addresses: NodeAddress[];
  taints: NodeTaint[];
  conditions: Condition[];
  podList: PodList;
  eventList: EventList;
}


export interface HorizontalPodAutoscalerDetail extends ResourceDetail {
  scaleTargetRef: ScaleTargetRef;
  minReplicas: number;
  maxReplicas: number;
  currentCPUUtilization: number;
  targetCPUUtilization?: number;
  currentReplicas: number;
  desiredReplicas: number;
  lastScaleTime: string;
}

// Validation types
export interface AppNameValidity {
  valid: boolean;
}

export interface AppNameValiditySpec {
  name: string;
  namespace: string;
}

export interface ImageReferenceValidity {
  valid: boolean;
  reason: string;
}

export interface ImageReferenceValiditySpec {
  reference: string;
}

export interface ProtocolValidity {
  valid: boolean;
}

export interface ProtocolValiditySpec {
  protocol: string;
  isExternal: boolean;
}

// Auth related types
export interface AuthResponse {
  jweToken: string;
  errors: K8sError[];
  tenant: string;
}

export interface CanIResponse {
  allowed: boolean;
}

export interface LoginSpec {
  username: string;
  password: string;
  token: string;
  kubeconfig: string;
}

export interface LoginStatus {
  tokenPresent: boolean;
  headerPresent: boolean;
  httpsMode: boolean;
}

export interface AppDeploymentContentSpec {
  name: string;
  namespace: string;
  tenant: string;
  content: string;
  validate: boolean;
}

export interface AppDeploymentContentResponse {
  error: string;
  contet: string;
  name: string;
}

export interface AppDeploymentSpec {
  containerImage: string;
  containerCommand?: string;
  containerCommandArgs?: string;
  isExternal: boolean;
  name: string;
  description?: string;
  portMappings: PortMapping[];
  labels: Label[];
  replicas: number;
  namespace: string;
  memoryRequirement?: string;
  cpuRequirement?: number;
  runAsPrivileged: boolean;
  imagePullSecret: string;
  variables: EnvironmentVariable[];
}

export interface CsrfToken {
  token: string;
}

export interface LocalSettings {
  isThemeDark: boolean;
}

export interface AppConfig {
  serverTime: number;
}

interface StringMap {
  [key: string]: string;
}

export interface ErrStatus {
  message: string;
  code: number;
  status: string;
  reason: string;
}

/* tslint:disable */
export interface K8sError {
  ErrStatus: ErrStatus;

  toKdError(): KdError;
}
/* tslint:enable */

export interface Condition {
  type: string;
  status: string;
  lastProbeTime: string;
  lastTransitionTime: string;
  reason: string;
  message: string;
}

export interface ContainerStateWaiting {
  reason: string;
}

export interface ContainerStateRunning {
  startedAt: string;
}

export interface ContainerStateTerminated {
  reason: string;
  signal: number;
  exitCode: number;
}

export interface ContainerState {
  waiting?: ContainerStateWaiting;
  terminated?: ContainerStateTerminated;
  running?: ContainerStateRunning;
}

export interface ResourceQuotaStatus {
  used: string;
  hard: string;
}

export interface QuotaAllocationStatus {
  name: string;
  used: string;
  hard: string;
}

export interface MetricResult {
  timestamp: string;
  value: number;
}

export interface Metric {
  dataPoints: DataPoint[];
  metricName: string;
  aggregation: string;
}

export interface DataPoint {
  x: number;
  y: number;
}

export interface ConfigMapKeyRef {
  name: string;
  key: string;
}

export interface SecretKeyRef {
  name: string;
  key: string;
}

export interface EnvVar {
  name: string;
  value: string;
  valueFrom: EnvVarSource;
}

export interface EnvVarSource {
  configMapKeyRef: ConfigMapKeyRef;
  secretKeyRef: SecretKeyRef;
}

export interface Container {
  name: string;
  image: string;
  env: EnvVar[];
  commands: string[];
  args: string[];
}

export interface CRDNames {
  plural: string;
  singular?: string;
  shortNames?: string[];
  kind: string;
  listKind?: string;
  categories?: string[];
}

export interface NetworkNames {
  plural: string;
  singular?: string;
  shortNames?: string[];
  kind: string;
  listKind?: string;
  categories?: string[];
}


export interface CRDVersion {
  name: string;
  served: boolean;
  storage: boolean;
}

export interface NetworkVersion {
  name: string;
  served: boolean;
  storage: boolean;
}

export interface PodMetrics {
  cpuUsage: number;
  memoryUsage: number;
  cpuUsageHistory: MetricResult[];
  memoryUsageHistory: MetricResult[];
}

export interface VirtualMachineMetrics {
  cpuUsage: number;
  memoryUsage: number;
  cpuUsageHistory: MetricResult[];
  memoryUsageHistory: MetricResult[];
}

export interface Status {
  running: number;
  failed: number;
  pending: number;
  succeeded: number;
}

export interface PodStatus {
  podPhase: string;
  status: string;
  containerStates: ContainerState[];
}

export interface VirtualMachineStatus {
  podPhase: string;
  status: string;
  containerStates: ContainerState[];
}

export interface PodInfo {
  current: number;
  desired: number;
  running: number;
  pending: number;
  failed: number;
  succeeded: number;
  warnings: Event[];
}

export interface VirtualMachineInfo {
  current: number;
  desired: number;
  running: number;
  pending: number;
  failed: number;
  succeeded: number;
  warnings: Event[];
}

export interface NodeAllocatedResources {
  cpuRequests: number;
  cpuRequestsFraction: number;
  cpuLimits: number;
  cpuLimitsFraction: number;
  cpuCapacity: number;
  memoryRequests: number;
  memoryRequestsFraction: number;
  memoryLimits: number;
  memoryLimitsFraction: number;
  memoryCapacity: number;
  allocatedPods: number;
  podCapacity: number;
  podFraction: number;
}

export interface NodeInfo {
  machineID: string;
  systemUUID: string;
  bootID: string;
  kernelVersion: string;
  osImage: string;
  containerRuntimeVersion: string;
  kubeletVersion: string;
  kubeProxyVersion: string;
  operatingSystem: string;
  architecture: string;
}

export interface NodeAddress {
  type: string;
  address: string;
}

export interface PartitionAddress {
  type: string;
  address: string;
}

export interface NodeTaint {
  key: string;
  value: string;
  effect: string;
  timeAdded: number;
}

export interface PartitionTaint {
  key: string;
  value: string;
  effect: string;
  timeAdded: number;
}

export interface PortMapping {
  port: number | null;
  protocol: string;
  targetPort: number | null;
}

export interface EnvironmentVariable {
  name: string;
  value: string;
}

export interface Label {
  key: string;
  value: string;
}

export interface PodEvent {
  reason: string;
  message: string;
}

export interface GCEPersistentDiskVolumeSource {
  pdName: string;
  fsType: string;
  partition: number;
  readOnly: boolean;
}

export interface AWSElasticBlockStorageVolumeSource {
  volumeID: string;
  fsType: string;
  partition: number;
  readOnly: boolean;
}

export interface HostPathVolumeSource {
  path: string;
}

export interface GlusterfsVolumeSource {
  endpoints: string;
  path: string;
  readOnly: boolean;
}

export interface NFSVolumeSource {
  server: string;
  path: string;
  readOnly: boolean;
}

export interface RBDVolumeSource {
  monitors: string[];
  image: string;
  fsType: string;
  pool: string;
  user: string;
  keyring: string;
  secretRef: LocalObjectReference;
  readOnly: boolean;
}

export interface LocalObjectReference {
  name: string;
}

/* tslint:disable */
export interface ISCSIVolumeSource {
  targetPortal: string;
  iqn: string;
  lun: number;
  fsType: string;
  readOnly: boolean;
}
/* tslint:enable */

export interface CinderVolumeSource {
  volumeID: string;
  fsType: string;
  readOnly: boolean;
}

export interface CephFSVolumeSource {
  monitors: string[];
  path: string;
  user: string;
  secretFile: string;
  secretRef: LocalObjectReference;
  readonly: boolean;
}

export interface FCVolumeSource {
  targetWWNs: string[];
  lun: number;
  fsType: string;
  readOnly: boolean;
}

export interface FlockerVolumeSource {
  datasetName: string;
}

export interface RollingUpdateStrategy {
  maxSurge: number | string;
  maxUnavailable: number | string;
}

export interface DeploymentInfo {
  replicas: number;
  updated: number;
  available: number;
  unavailable: number;
}

export interface ReplicationControllerSpec {
  replicas: number;
}

export interface ReplicaCounts {
  desiredReplicas: number;
  actualReplicas: number;
}

export interface DeleteReplicationControllerSpec {
  deleteServices: boolean;
}

export interface NamespaceSpec {
  name: string;
}

export interface ReplicationControllerPodWithContainers {
  name: string;
  startTime?: string;
  totalRestartCount: number;
  podContainers: PodContainer[];
}

export interface ReplicationControllerPods {
  pods: ReplicationControllerPodWithContainers[];
}

export interface LogSources {
  podNames: string[];
  containerNames: string[];
  initContainerNames: string[];
}

export interface LogDetails {
  info: LogInfo;
  logs: LogLine[];
  selection: LogSelection;
}

export interface LogInfo {
  podName: string;
  containerName: string;
  initContainerName: string;
  fromDate: string;
  toDate: string;
  truncated: boolean;
}

export interface LogLine {
  timestamp: string;
  content: string;
}

export interface LogSelection {
  logFilePosition: string;
  referencePoint: LogLineReference;
  offsetFrom: number;
  offsetTo: number;
}

export interface LogLineReference {
  timestamp: string;
  lineNum: number;
}

export interface Protocols {
  protocols: string[];
}

export interface SecretSpec {
  name: string;
  namespace: string;
  data: string;
}

export interface LimitRange {
  resourceType: string;
  resourceName: string;
  min: string;
  max: string;
  default: string;
  defaultRequest: string;
  maxLimitRequestRatio: string;
}

export interface ScaleTargetRef {
  kind: string;
  name: string;
}

export interface GlobalSettings {
  clusterName: string;
  itemsPerPage: number;
  logsAutoRefreshTimeInterval: number;
  resourceAutoRefreshTimeInterval: number;
}

export interface PinnedResource {
  kind: string;
  name: string;
  namespace?: string;
}

export interface APIVersion {
  name: string;
}

export interface LoginSpec {
  username: string;
  password: string;
  token: string;
  kubeConfig: string;
}

export interface AuthResponse {
  jweToken: string;
  errors: K8sError[];
}

export interface LoginStatus {
  tokenPresent: boolean;
  headerPresent: boolean;
  httpsMode: boolean;
}

export type AuthenticationMode = string;

export interface EnabledAuthenticationModes {
  modes: AuthenticationMode[];
}

export interface LoginSkippableResponse {
  skippable: boolean;
}

export interface SystemBanner {
  message: string;
  severity: string;
}

export interface PersistentVolumeSource {
  gcePersistentDisk: GCEPersistentDiskVolumeSource;
  awsElasticBlockStore: AWSElasticBlockStorageVolumeSource;
  hostPath: HostPathVolumeSource;
  glusterfs: GlusterfsVolumeSource;
  nfs: NFSVolumeSource;
  rbd: RBDVolumeSource;
  iscsi: ISCSIVolumeSource;
  cinder: CinderVolumeSource;
  fc: FCVolumeSource;
  flocker: FlockerVolumeSource;
}

export interface TerminalResponse {
  id: string;
}

export interface ShellFrame {
  Op: string;
  Data?: string;
  SessionID?: string;
  Rows?: number;
  Cols?: number;
}

export interface TerminalPageParams {
  namespace: string;
  resourceKind: string;
  resourceName: string;

  // Optional
  pod?: string;
  container?: string;
}

export interface SockJSSimpleEvent {
  type: string;
  toString(): string;
}

export interface SJSCloseEvent extends SockJSSimpleEvent {
  code: number;
  reason: string;
  wasClean: boolean;
}

export interface SJSMessageEvent extends SockJSSimpleEvent {
  data: string;
}

export interface Tenant extends Resource {
  phase: string;
}

export interface ResourceQuota extends Resource {
  phase: string;
}

export interface Role extends Resource {
}
export interface ServiceAccount extends Resource {
  type: string;
}
export interface TenantList extends ResourceList {
  tenants: Tenant[];
}
export interface ResourceQuotaList extends ResourceList {
  items: ResourceQuota[];
}

export interface RoleList extends ResourceList {
  roles: Role[];
}

export interface TenantDetail extends ResourceDetail {
  phase: string;
}

export interface User extends Resource {
  phase: string;
}

export interface UserList extends ResourceList {
  users: User[];
}

export interface UserDetail extends ResourceDetail {
  phase: string;
}
