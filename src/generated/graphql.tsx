import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  AnalyticsDateTime: { input: any; output: any; }
  AuctionsDateTime: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  CommerceDate: { input: any; output: any; }
  CommerceDateTime: { input: any; output: any; }
  Date: { input: any; output: any; }
  FormattedNumber: { input: any; output: any; }
  ISO8601DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Long: { input: any; output: any; }
};

export type ArImage = {
  __typename?: 'ARImage';
  height?: Maybe<Scalars['Int']['output']>;
  imageURLs?: Maybe<ImageUrLs>;
  internalID: Scalars['ID']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type ArImageInput = {
  internalID: Scalars['ID']['input'];
};

export type AcceptPartnerAgreementInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  partnerAgreementID: Scalars['String']['input'];
};

export type AcceptPartnerAgreementPayload = {
  __typename?: 'AcceptPartnerAgreementPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  partnerAgreementOrErrors: PartnerAgreementOrErrorsUnion;
};

export type AccountMutationFailure = {
  __typename?: 'AccountMutationFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type AccountMutationSuccess = {
  __typename?: 'AccountMutationSuccess';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type AccountMutationType = AccountMutationFailure | AccountMutationSuccess;

export type AccountRequest = {
  __typename?: 'AccountRequest';
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  notes?: Maybe<Scalars['String']['output']>;
};

export type AckTaskFailure = {
  __typename?: 'AckTaskFailure';
  mutationError: GravityMutationError;
};

export type AckTaskMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
};

export type AckTaskMutationPayload = {
  __typename?: 'AckTaskMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  homeViewTasksSection?: Maybe<HomeViewSectionTasks>;
  taskOrError: AckTaskResponseOrError;
};

export type AckTaskResponseOrError = AckTaskFailure | AckTaskSuccess;

export type AckTaskSuccess = {
  __typename?: 'AckTaskSuccess';
  task: Task;
};

export type AddArtworkToPartnerShowFailure = {
  __typename?: 'AddArtworkToPartnerShowFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type AddArtworkToPartnerShowMutationInput = {
  artworkId: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  partnerId: Scalars['String']['input'];
  showId: Scalars['String']['input'];
};

export type AddArtworkToPartnerShowMutationPayload = {
  __typename?: 'AddArtworkToPartnerShowMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  showOrError?: Maybe<AddArtworkToPartnerShowResponseOrError>;
};

export type AddArtworkToPartnerShowResponseOrError = AddArtworkToPartnerShowFailure | AddArtworkToPartnerShowSuccess;

export type AddArtworkToPartnerShowSuccess = {
  __typename?: 'AddArtworkToPartnerShowSuccess';
  show?: Maybe<Show>;
};

export type AddAssetToConsignmentSubmissionInput = {
  assetType?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  externalSubmissionId?: InputMaybe<Scalars['ID']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  geminiToken?: InputMaybe<Scalars['String']['input']>;
  sessionID?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['String']['input']>;
  source?: InputMaybe<UploadSource>;
  submissionID?: InputMaybe<Scalars['ID']['input']>;
};

export type AddAssetToConsignmentSubmissionPayload = {
  __typename?: 'AddAssetToConsignmentSubmissionPayload';
  asset?: Maybe<ConsignmentSubmissionCategoryAsset>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type AddAssetsToConsignmentSubmissionInput = {
  assetType?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  externalSubmissionId?: InputMaybe<Scalars['ID']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  geminiTokens?: InputMaybe<Array<Scalars['String']['input']>>;
  sessionID?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['String']['input']>;
  sources?: InputMaybe<UploadSources>;
  submissionID?: InputMaybe<Scalars['ID']['input']>;
};

export type AddAssetsToConsignmentSubmissionPayload = {
  __typename?: 'AddAssetsToConsignmentSubmissionPayload';
  assets?: Maybe<Array<ConsignmentSubmissionCategoryAsset>>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type AddInstallShotToPartnerShowFailure = {
  __typename?: 'AddInstallShotToPartnerShowFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type AddInstallShotToPartnerShowMutationInput = {
  caption?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  s3Bucket?: InputMaybe<Scalars['String']['input']>;
  s3Key?: InputMaybe<Scalars['String']['input']>;
  showId: Scalars['String']['input'];
};

export type AddInstallShotToPartnerShowMutationPayload = {
  __typename?: 'AddInstallShotToPartnerShowMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  showOrError?: Maybe<AddInstallShotToPartnerShowResponseOrError>;
};

export type AddInstallShotToPartnerShowResponseOrError = AddInstallShotToPartnerShowFailure | AddInstallShotToPartnerShowSuccess;

export type AddInstallShotToPartnerShowSuccess = {
  __typename?: 'AddInstallShotToPartnerShowSuccess';
  show?: Maybe<Show>;
};

export type AddUserToSubmissionMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type AddUserToSubmissionMutationPayload = {
  __typename?: 'AddUserToSubmissionMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  consignmentSubmission?: Maybe<ConsignmentSubmission>;
};

export type Admin = {
  __typename?: 'Admin';
  featureFlag?: Maybe<FeatureFlag>;
  featureFlags?: Maybe<Array<Maybe<FeatureFlag>>>;
};


export type AdminFeatureFlagArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type AdminFeatureFlagsArgs = {
  sortBy?: InputMaybe<FeatureFlagsSortBy>;
};

export type AdminCreateFeatureFlagInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  impressionData?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  strategy: FeatureFlagStrategyInput;
  type: FeatureFlagToggleType;
  variants?: InputMaybe<Array<InputMaybe<FeatureFlagVariantInputName>>>;
};

export type AdminCreateFeatureFlagPayload = {
  __typename?: 'AdminCreateFeatureFlagPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  featureFlags?: Maybe<Array<Maybe<FeatureFlag>>>;
};


export type AdminCreateFeatureFlagPayloadFeatureFlagsArgs = {
  sortBy?: InputMaybe<FeatureFlagsSortBy>;
};

export type AdminDeleteFeatureFlagInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type AdminDeleteFeatureFlagPayload = {
  __typename?: 'AdminDeleteFeatureFlagPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  featureFlags?: Maybe<Array<Maybe<FeatureFlag>>>;
  success?: Maybe<Scalars['Boolean']['output']>;
};


export type AdminDeleteFeatureFlagPayloadFeatureFlagsArgs = {
  sortBy?: InputMaybe<FeatureFlagsSortBy>;
};

export enum AdminToggleFeatureFlagEnvironment {
  Development = 'DEVELOPMENT',
  Production = 'PRODUCTION'
}

export type AdminToggleFeatureFlagInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  enabled: Scalars['Boolean']['input'];
  environment: AdminToggleFeatureFlagEnvironment;
  name: Scalars['String']['input'];
};

export type AdminToggleFeatureFlagPayload = {
  __typename?: 'AdminToggleFeatureFlagPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  featureFlags?: Maybe<Array<Maybe<FeatureFlag>>>;
  success?: Maybe<Scalars['Boolean']['output']>;
};


export type AdminToggleFeatureFlagPayloadFeatureFlagsArgs = {
  sortBy?: InputMaybe<FeatureFlagsSortBy>;
};

export type AdminUpdateFeatureFlagInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  impressionData?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  type?: InputMaybe<Scalars['String']['input']>;
};

export type AdminUpdateFeatureFlagPayload = {
  __typename?: 'AdminUpdateFeatureFlagPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  featureFlags?: Maybe<Array<Maybe<FeatureFlag>>>;
};


export type AdminUpdateFeatureFlagPayloadFeatureFlagsArgs = {
  sortBy?: InputMaybe<FeatureFlagsSortBy>;
};

export type AggregationCount = {
  __typename?: 'AggregationCount';
  count: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type Agreement = {
  __typename?: 'Agreement';
  content?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  deactivatedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type Alert = {
  __typename?: 'Alert';
  acquireable?: Maybe<Scalars['Boolean']['output']>;
  additionalGeneIDs?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  additionalGeneNames?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  artistIDs?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  artistSeriesIDs?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  artistSeriesNames?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  artists: Array<Artist>;
  artistsConnection: ArtistConnection;
  artworksConnection?: Maybe<FilterArtworksConnection>;
  atAuction?: Maybe<Scalars['Boolean']['output']>;
  attributionClass?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  colors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  dimensionRange?: Maybe<Scalars['String']['output']>;
  displayName: Scalars['String']['output'];
  forSale?: Maybe<Scalars['Boolean']['output']>;
  formattedPriceRange?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['String']['output']>;
  href?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  inquireableOnly?: Maybe<Scalars['Boolean']['output']>;
  internalID: Scalars['ID']['output'];
  keyword?: Maybe<Scalars['String']['output']>;
  labels: Array<SearchCriteriaLabel>;
  locationCities?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  majorPeriods?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  materialsTerms?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  offerable?: Maybe<Scalars['Boolean']['output']>;
  partnerIDs?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  priceArray?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  priceRange?: Maybe<Scalars['String']['output']>;
  searchCriteriaID: Scalars['String']['output'];
  settings: AlertSettings;
  sizes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  summary?: Maybe<Scalars['JSON']['output']>;
  width?: Maybe<Scalars['String']['output']>;
};


export type AlertArtistsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type AlertArtworksConnectionArgs = {
  acquireable?: InputMaybe<Scalars['Boolean']['input']>;
  additionalGeneIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  after?: InputMaybe<Scalars['String']['input']>;
  aggregationPartnerCities?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  aggregations?: InputMaybe<Array<InputMaybe<ArtworkAggregation>>>;
  artistID?: InputMaybe<Scalars['String']['input']>;
  artistIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  artistNationalities?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  artistSeriesID?: InputMaybe<Scalars['String']['input']>;
  artistSeriesIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  artworkIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  atAuction?: InputMaybe<Scalars['Boolean']['input']>;
  attributionClass?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  availability?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  color?: InputMaybe<Scalars['String']['input']>;
  colors?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dimensionRange?: InputMaybe<Scalars['String']['input']>;
  disableNotForSaleSorting?: InputMaybe<Scalars['Boolean']['input']>;
  excludeArtworkIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  extraAggregationGeneIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forSale?: InputMaybe<Scalars['Boolean']['input']>;
  framed?: InputMaybe<Scalars['Boolean']['input']>;
  geneID?: InputMaybe<Scalars['String']['input']>;
  geneIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  height?: InputMaybe<Scalars['String']['input']>;
  importSources?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  includeAllJSON?: InputMaybe<Scalars['Boolean']['input']>;
  includeArtworksByFollowedArtists?: InputMaybe<Scalars['Boolean']['input']>;
  includeMediumFilterInAggregation?: InputMaybe<Scalars['Boolean']['input']>;
  includeUnpublished?: InputMaybe<Scalars['Boolean']['input']>;
  input?: InputMaybe<FilterArtworksInput>;
  inquireableOnly?: InputMaybe<Scalars['Boolean']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  keywordMatchExact?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locationCities?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  majorPeriods?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  marketable?: InputMaybe<Scalars['Boolean']['input']>;
  marketingCollectionID?: InputMaybe<Scalars['String']['input']>;
  materialsTerms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  medium?: InputMaybe<Scalars['String']['input']>;
  offerable?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  partnerCities?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  partnerID?: InputMaybe<Scalars['ID']['input']>;
  partnerIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  period?: InputMaybe<Scalars['String']['input']>;
  periods?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  priceRange?: InputMaybe<Scalars['String']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  saleID?: InputMaybe<Scalars['ID']['input']>;
  showID?: InputMaybe<Scalars['String']['input']>;
  signed?: InputMaybe<Scalars['Boolean']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sizes?: InputMaybe<Array<InputMaybe<ArtworkSizes>>>;
  sold?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  tagID?: InputMaybe<Scalars['String']['input']>;
  visibilityLevel?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['String']['input']>;
};


export type AlertDisplayNameArgs = {
  except?: InputMaybe<Array<InputMaybe<SearchCriteriaFields>>>;
  only?: InputMaybe<Array<InputMaybe<SearchCriteriaFields>>>;
};


export type AlertLabelsArgs = {
  except?: InputMaybe<Array<InputMaybe<SearchCriteriaFields>>>;
  only?: InputMaybe<Array<InputMaybe<SearchCriteriaFields>>>;
};

export type AlertConnection = {
  __typename?: 'AlertConnection';
  edges?: Maybe<Array<Maybe<AlertEdge>>>;
  pageCursors: PageCursors;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type AlertEdge = {
  __typename?: 'AlertEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Alert>;
};

export type AlertNotificationItem = {
  __typename?: 'AlertNotificationItem';
  alert?: Maybe<Alert>;
  artworksConnection?: Maybe<ArtworkConnection>;
};


export type AlertNotificationItemArtworksConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type AlertSettings = {
  __typename?: 'AlertSettings';
  details?: Maybe<Scalars['String']['output']>;
  email: Scalars['Boolean']['output'];
  frequency?: Maybe<AlertSettingsFrequency>;
  name?: Maybe<Scalars['String']['output']>;
  push: Scalars['Boolean']['output'];
};

export enum AlertSettingsFrequency {
  Daily = 'DAILY',
  Instant = 'INSTANT'
}

export type AlertSettingsInput = {
  details?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['Boolean']['input']>;
  frequency?: InputMaybe<AlertSettingsFrequency>;
  name?: InputMaybe<Scalars['String']['input']>;
  push?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AlertSource = {
  id?: InputMaybe<Scalars['ID']['input']>;
  type?: InputMaybe<AlertSourceType>;
};

export enum AlertSourceType {
  Artist = 'ARTIST',
  Artwork = 'ARTWORK'
}

export enum AlertsConnectionSortEnum {
  EnabledAtDesc = 'ENABLED_AT_DESC',
  NameAsc = 'NAME_ASC'
}

export type Algolia = {
  __typename?: 'Algolia';
  /** @deprecated Algolia search is no longer supported */
  apiKey: Scalars['String']['output'];
  /** @deprecated Algolia search is no longer supported */
  appID: Scalars['String']['output'];
  /** @deprecated Algolia search is no longer supported */
  indices: Array<AlgoliaIndex>;
};

export type AlgoliaIndex = {
  __typename?: 'AlgoliaIndex';
  /** @deprecated Algolia search is no longer supported */
  displayName: Scalars['String']['output'];
  /** @deprecated Algolia search is no longer supported */
  key: Scalars['String']['output'];
  /** @deprecated Algolia search is no longer supported */
  name: Scalars['String']['output'];
};

export type AnalyticsArtist = {
  __typename?: 'AnalyticsArtist';
  entityId: Scalars['String']['output'];
};

export type AnalyticsArtistAffinity = {
  __typename?: 'AnalyticsArtistAffinity';
  artistId: Scalars['ID']['output'];
  score: Scalars['Float']['output'];
};

export type AnalyticsArtistAffinityConnection = {
  __typename?: 'AnalyticsArtistAffinityConnection';
  edges?: Maybe<Array<Maybe<AnalyticsArtistAffinityEdge>>>;
  nodes?: Maybe<Array<Maybe<AnalyticsArtistAffinity>>>;
  pageCursors?: Maybe<PageCursors>;
  pageInfo: AnalyticsPageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type AnalyticsArtistAffinityEdge = {
  __typename?: 'AnalyticsArtistAffinityEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<AnalyticsArtistAffinity>;
};

export type AnalyticsArtistIdMediumTupleType = {
  artistId: Scalars['String']['input'];
  medium: Scalars['String']['input'];
};

export type AnalyticsArtistRecommendation = {
  __typename?: 'AnalyticsArtistRecommendation';
  artistId: Scalars['ID']['output'];
  score: Scalars['Float']['output'];
};

export type AnalyticsArtistRecommendationConnection = {
  __typename?: 'AnalyticsArtistRecommendationConnection';
  edges?: Maybe<Array<Maybe<AnalyticsArtistRecommendationEdge>>>;
  nodes?: Maybe<Array<Maybe<AnalyticsArtistRecommendation>>>;
  pageCursors?: Maybe<PageCursors>;
  pageInfo: AnalyticsPageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type AnalyticsArtistRecommendationEdge = {
  __typename?: 'AnalyticsArtistRecommendationEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<AnalyticsArtistRecommendation>;
};

export type AnalyticsArtistSparkline = {
  __typename?: 'AnalyticsArtistSparkline';
  artistId: Scalars['ID']['output'];
  artistName?: Maybe<Scalars['String']['output']>;
  eventDigest?: Maybe<Scalars['String']['output']>;
  sparkles?: Maybe<Scalars['BigInt']['output']>;
  tier?: Maybe<Scalars['Float']['output']>;
  year?: Maybe<Scalars['String']['output']>;
};

export type AnalyticsArtistSparklineConnection = {
  __typename?: 'AnalyticsArtistSparklineConnection';
  edges?: Maybe<Array<Maybe<AnalyticsArtistSparklineEdge>>>;
  nodes?: Maybe<Array<Maybe<AnalyticsArtistSparkline>>>;
  pageCursors?: Maybe<PageCursors>;
  pageInfo: AnalyticsPageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type AnalyticsArtistSparklineEdge = {
  __typename?: 'AnalyticsArtistSparklineEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<AnalyticsArtistSparkline>;
};

export type AnalyticsArtwork = {
  __typename?: 'AnalyticsArtwork';
  entityId: Scalars['String']['output'];
};

export type AnalyticsArtworkRecommendation = {
  __typename?: 'AnalyticsArtworkRecommendation';
  artworkId: Scalars['ID']['output'];
  score: Scalars['Float']['output'];
};

export type AnalyticsArtworkRecommendationConnection = {
  __typename?: 'AnalyticsArtworkRecommendationConnection';
  edges?: Maybe<Array<Maybe<AnalyticsArtworkRecommendationEdge>>>;
  nodes?: Maybe<Array<Maybe<AnalyticsArtworkRecommendation>>>;
  pageCursors?: Maybe<PageCursors>;
  pageInfo: AnalyticsPageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type AnalyticsArtworkRecommendationEdge = {
  __typename?: 'AnalyticsArtworkRecommendationEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<AnalyticsArtworkRecommendation>;
};

export type AnalyticsArtworksPublishedStats = {
  __typename?: 'AnalyticsArtworksPublishedStats';
  percentageChanged: Scalars['Int']['output'];
  period: AnalyticsQueryPeriodEnum;
  timeSeries: Array<AnalyticsPartnerTimeSeriesStats>;
  totalCount: Scalars['Int']['output'];
};

export type AnalyticsGroupedStats = {
  __typename?: 'AnalyticsGroupedStats';
  groupedEntity: AnalyticsGroupedStatsUnion;
  period: AnalyticsQueryPeriodEnum;
};

export type AnalyticsGroupedStatsConnection = {
  __typename?: 'AnalyticsGroupedStatsConnection';
  edges?: Maybe<Array<Maybe<AnalyticsGroupedStatsEdge>>>;
  nodes?: Maybe<Array<Maybe<AnalyticsGroupedStats>>>;
  pageInfo: AnalyticsPageInfo;
};

export type AnalyticsGroupedStatsEdge = {
  __typename?: 'AnalyticsGroupedStatsEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<AnalyticsGroupedStats>;
};

export enum AnalyticsGroupedStatsMetricEnum {
  VisitorByDevice = 'VISITOR_BY_DEVICE',
  VisitorByLandingPage = 'VISITOR_BY_LANDING_PAGE',
  VisitorByLocation = 'VISITOR_BY_LOCATION',
  VisitorByReferral = 'VISITOR_BY_REFERRAL'
}

export enum AnalyticsGroupedStatsObjectTypeEnum {
  Country = 'COUNTRY',
  Device = 'DEVICE',
  LandingPage = 'LANDING_PAGE',
  Referral = 'REFERRAL'
}

export type AnalyticsGroupedStatsUnion = AnalyticsVisitorsByCountry | AnalyticsVisitorsByDevice | AnalyticsVisitorsByLandingPage | AnalyticsVisitorsByReferral;

export type AnalyticsHistogramBin = {
  __typename?: 'AnalyticsHistogramBin';
  maxPrice?: Maybe<Scalars['String']['output']>;
  maxPriceCents: Scalars['Int']['output'];
  minPrice?: Maybe<Scalars['String']['output']>;
  minPriceCents: Scalars['Int']['output'];
  numArtworks: Scalars['Int']['output'];
};


export type AnalyticsHistogramBinMaxPriceArgs = {
  decimal?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  precision?: InputMaybe<Scalars['Int']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  thousand?: InputMaybe<Scalars['String']['input']>;
};


export type AnalyticsHistogramBinMinPriceArgs = {
  decimal?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  precision?: InputMaybe<Scalars['Int']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  thousand?: InputMaybe<Scalars['String']['input']>;
};

export type AnalyticsNewForYouRecommendation = {
  __typename?: 'AnalyticsNewForYouRecommendation';
  artworkId: Scalars['ID']['output'];
  publishedAt: Scalars['AnalyticsDateTime']['output'];
  score: Scalars['Float']['output'];
  version: Scalars['String']['output'];
};

export type AnalyticsNewForYouRecommendationConnection = {
  __typename?: 'AnalyticsNewForYouRecommendationConnection';
  edges?: Maybe<Array<Maybe<AnalyticsNewForYouRecommendationEdge>>>;
  nodes?: Maybe<Array<Maybe<AnalyticsNewForYouRecommendation>>>;
  pageCursors?: Maybe<PageCursors>;
  pageInfo: AnalyticsPageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type AnalyticsNewForYouRecommendationEdge = {
  __typename?: 'AnalyticsNewForYouRecommendationEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<AnalyticsNewForYouRecommendation>;
};

export type AnalyticsPageInfo = {
  __typename?: 'AnalyticsPageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type AnalyticsPageviewStats = {
  __typename?: 'AnalyticsPageviewStats';
  artworkViews?: Maybe<Scalars['Int']['output']>;
  galleryViews?: Maybe<Scalars['Int']['output']>;
  percentageChanged: Scalars['Int']['output'];
  period: AnalyticsQueryPeriodEnum;
  showViews?: Maybe<Scalars['Int']['output']>;
  timeSeries: Array<AnalyticsPartnerTimeSeriesStats>;
  totalCount: Scalars['Int']['output'];
  uniqueVisitors?: Maybe<Scalars['Int']['output']>;
};

export type AnalyticsPartnerAudienceStats = {
  __typename?: 'AnalyticsPartnerAudienceStats';
  commercialVisitors: Scalars['Int']['output'];
  partnerId: Scalars['String']['output'];
  period: AnalyticsQueryPeriodEnum;
  uniqueVisitors: Scalars['Int']['output'];
};

export type AnalyticsPartnerInquiryCountTimeSeriesStats = {
  __typename?: 'AnalyticsPartnerInquiryCountTimeSeriesStats';
  count?: Maybe<Scalars['Int']['output']>;
  endTime?: Maybe<Scalars['AnalyticsDateTime']['output']>;
  startTime?: Maybe<Scalars['AnalyticsDateTime']['output']>;
};

export type AnalyticsPartnerInquiryStats = {
  __typename?: 'AnalyticsPartnerInquiryStats';
  inquiryCount: Scalars['Int']['output'];
  inquiryResponseTime?: Maybe<Scalars['Int']['output']>;
  partnerId: Scalars['String']['output'];
  period: AnalyticsQueryPeriodEnum;
  timeSeries?: Maybe<Array<AnalyticsPartnerInquiryCountTimeSeriesStats>>;
};


export type AnalyticsPartnerInquiryStatsTimeSeriesArgs = {
  cumulative?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AnalyticsPartnerSalesStats = {
  __typename?: 'AnalyticsPartnerSalesStats';
  orderCount: Scalars['Int']['output'];
  orderResponseTime?: Maybe<Scalars['Int']['output']>;
  partnerId: Scalars['String']['output'];
  period: AnalyticsQueryPeriodEnum;
  timeSeries?: Maybe<Array<AnalyticsPartnerSalesTimeSeriesStats>>;
  total?: Maybe<Scalars['String']['output']>;
  totalCents: Scalars['Int']['output'];
};


export type AnalyticsPartnerSalesStatsTimeSeriesArgs = {
  cumulative?: InputMaybe<Scalars['Boolean']['input']>;
};


export type AnalyticsPartnerSalesStatsTotalArgs = {
  decimal?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  precision?: InputMaybe<Scalars['Int']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  thousand?: InputMaybe<Scalars['String']['input']>;
};

export type AnalyticsPartnerSalesTimeSeriesStats = {
  __typename?: 'AnalyticsPartnerSalesTimeSeriesStats';
  count?: Maybe<Scalars['Int']['output']>;
  endTime?: Maybe<Scalars['AnalyticsDateTime']['output']>;
  startTime?: Maybe<Scalars['AnalyticsDateTime']['output']>;
  total?: Maybe<Scalars['String']['output']>;
  totalCents: Scalars['Int']['output'];
};


export type AnalyticsPartnerSalesTimeSeriesStatsTotalArgs = {
  decimal?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  precision?: InputMaybe<Scalars['Int']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  thousand?: InputMaybe<Scalars['String']['input']>;
};

export type AnalyticsPartnerStats = {
  __typename?: 'AnalyticsPartnerStats';
  artworkPublished?: Maybe<AnalyticsPartnerStatsArtworksPublished>;
  /** @deprecated Use artworkPublished for refactored time series bucket code */
  artworksPublished?: Maybe<AnalyticsArtworksPublishedStats>;
  audience?: Maybe<AnalyticsPartnerAudienceStats>;
  groupedStats?: Maybe<AnalyticsGroupedStatsConnection>;
  inquiry?: Maybe<AnalyticsPartnerInquiryStats>;
  pageview?: Maybe<AnalyticsPartnerStatsPageviews>;
  /** @deprecated Use pageview for refactored time series bucket code */
  pageviews?: Maybe<AnalyticsPageviewStats>;
  partnerId: Scalars['String']['output'];
  rankedStats?: Maybe<AnalyticsRankedStatsConnection>;
  sales?: Maybe<AnalyticsPartnerSalesStats>;
  /** @deprecated Use rankedStats(objectType: ) instead */
  topArtworks?: Maybe<AnalyticsRankedStatsConnection>;
  /** @deprecated Use audience() { uniqueVisitors } instead */
  uniqueVisitors?: Maybe<Scalars['Int']['output']>;
};


export type AnalyticsPartnerStatsArtworkPublishedArgs = {
  period: AnalyticsQueryPeriodEnum;
};


export type AnalyticsPartnerStatsArtworksPublishedArgs = {
  period: AnalyticsQueryPeriodEnum;
};


export type AnalyticsPartnerStatsAudienceArgs = {
  period: AnalyticsQueryPeriodEnum;
};


export type AnalyticsPartnerStatsGroupedStatsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  metric: AnalyticsGroupedStatsMetricEnum;
  objectType: AnalyticsGroupedStatsObjectTypeEnum;
  period: AnalyticsQueryPeriodEnum;
};


export type AnalyticsPartnerStatsInquiryArgs = {
  period: AnalyticsQueryPeriodEnum;
};


export type AnalyticsPartnerStatsPageviewArgs = {
  period: AnalyticsQueryPeriodEnum;
};


export type AnalyticsPartnerStatsPageviewsArgs = {
  period: AnalyticsQueryPeriodEnum;
};


export type AnalyticsPartnerStatsRankedStatsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  objectType: AnalyticsRankedStatsObjectTypeEnum;
  period: AnalyticsQueryPeriodEnum;
};


export type AnalyticsPartnerStatsSalesArgs = {
  period: AnalyticsQueryPeriodEnum;
};


export type AnalyticsPartnerStatsTopArtworksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type AnalyticsPartnerStatsUniqueVisitorsArgs = {
  period: AnalyticsQueryPeriodEnum;
};

export type AnalyticsPartnerStatsArtworksPublished = {
  __typename?: 'AnalyticsPartnerStatsArtworksPublished';
  partnerId: Scalars['String']['output'];
  percentageChanged: Scalars['Int']['output'];
  period: AnalyticsQueryPeriodEnum;
  timeSeries: Array<AnalyticsPartnerStatsArtworksPublishedTimeSeries>;
  totalCount: Scalars['Int']['output'];
};


export type AnalyticsPartnerStatsArtworksPublishedTimeSeriesArgs = {
  cumulative?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AnalyticsPartnerStatsArtworksPublishedTimeSeries = {
  __typename?: 'AnalyticsPartnerStatsArtworksPublishedTimeSeries';
  count?: Maybe<Scalars['Int']['output']>;
  endTime?: Maybe<Scalars['AnalyticsDateTime']['output']>;
  startTime?: Maybe<Scalars['AnalyticsDateTime']['output']>;
};

export type AnalyticsPartnerStatsPageviews = {
  __typename?: 'AnalyticsPartnerStatsPageviews';
  artworkViews: Scalars['Int']['output'];
  galleryViews: Scalars['Int']['output'];
  partnerId: Scalars['String']['output'];
  percentageChanged: Scalars['Int']['output'];
  period: AnalyticsQueryPeriodEnum;
  showViews: Scalars['Int']['output'];
  timeSeries?: Maybe<Array<AnalyticsPartnerStatsPageviewsTimeSeries>>;
  totalCount: Scalars['Int']['output'];
  uniqueVisitors: Scalars['Int']['output'];
};


export type AnalyticsPartnerStatsPageviewsTimeSeriesArgs = {
  cumulative?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AnalyticsPartnerStatsPageviewsTimeSeries = {
  __typename?: 'AnalyticsPartnerStatsPageviewsTimeSeries';
  count?: Maybe<Scalars['Int']['output']>;
  endTime?: Maybe<Scalars['AnalyticsDateTime']['output']>;
  startTime?: Maybe<Scalars['AnalyticsDateTime']['output']>;
};

export type AnalyticsPartnerTimeSeriesStats = {
  __typename?: 'AnalyticsPartnerTimeSeriesStats';
  count?: Maybe<Scalars['Int']['output']>;
  endTime?: Maybe<Scalars['AnalyticsDateTime']['output']>;
  startTime?: Maybe<Scalars['AnalyticsDateTime']['output']>;
};

export type AnalyticsPriceContextFilterType = {
  __typename?: 'AnalyticsPriceContextFilterType';
  category?: Maybe<AnalyticsPricingContextCategoryEnum>;
  dimension?: Maybe<AnalyticsPricingContextDimensionEnum>;
};

export type AnalyticsPricingContext = {
  __typename?: 'AnalyticsPricingContext';
  appliedFilters: AnalyticsPriceContextFilterType;
  appliedFiltersDisplay?: Maybe<Scalars['String']['output']>;
  bins: Array<AnalyticsHistogramBin>;
};

export enum AnalyticsPricingContextCategoryEnum {
  Architecture = 'ARCHITECTURE',
  BooksAndPortfolios = 'BOOKS_AND_PORTFOLIOS',
  DesignDecorativeArt = 'DESIGN_DECORATIVE_ART',
  DrawingCollageOtherWorkOnPaper = 'DRAWING_COLLAGE_OTHER_WORK_ON_PAPER',
  Fashion = 'FASHION',
  Installation = 'INSTALLATION',
  Jewelry = 'JEWELRY',
  MixedMedia = 'MIXED_MEDIA',
  Other = 'OTHER',
  Painting = 'PAINTING',
  Performance = 'PERFORMANCE',
  Photography = 'PHOTOGRAPHY',
  Posters = 'POSTERS',
  Print = 'PRINT',
  Sculpture = 'SCULPTURE',
  Sound = 'SOUND',
  Textile = 'TEXTILE',
  VideoFilmAnimation = 'VIDEO_FILM_ANIMATION',
  WorkOnPaper = 'WORK_ON_PAPER'
}

export enum AnalyticsPricingContextDimensionEnum {
  Large = 'LARGE',
  Medium = 'MEDIUM',
  Small = 'SMALL'
}

export enum AnalyticsQueryPeriodEnum {
  FourWeeks = 'FOUR_WEEKS',
  OneYear = 'ONE_YEAR',
  SixteenWeeks = 'SIXTEEN_WEEKS'
}

export type AnalyticsRankedEntityUnion = Artist | Artwork | Show | ViewingRoom;

export type AnalyticsRankedStats = {
  __typename?: 'AnalyticsRankedStats';
  entity?: Maybe<AnalyticsRankedEntityUnion>;
  period: AnalyticsQueryPeriodEnum;
  rankedEntity: AnalyticsRankedStatsUnion;
  value: Scalars['Int']['output'];
};

export type AnalyticsRankedStatsConnection = {
  __typename?: 'AnalyticsRankedStatsConnection';
  edges?: Maybe<Array<Maybe<AnalyticsRankedStatsEdge>>>;
  nodes?: Maybe<Array<Maybe<AnalyticsRankedStats>>>;
  pageInfo: AnalyticsPageInfo;
};

export type AnalyticsRankedStatsEdge = {
  __typename?: 'AnalyticsRankedStatsEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<AnalyticsRankedStats>;
};

export enum AnalyticsRankedStatsObjectTypeEnum {
  Artist = 'ARTIST',
  Artwork = 'ARTWORK',
  Show = 'SHOW',
  ViewingRoom = 'VIEWING_ROOM'
}

export type AnalyticsRankedStatsUnion = AnalyticsArtist | AnalyticsArtwork | AnalyticsShow | AnalyticsViewingRoom;

export type AnalyticsShow = {
  __typename?: 'AnalyticsShow';
  entityId: Scalars['String']['output'];
};

export type AnalyticsUserStats = {
  __typename?: 'AnalyticsUserStats';
  totalPurchaseCount: Scalars['Int']['output'];
  userId: Scalars['String']['output'];
};

export type AnalyticsViewingRoom = {
  __typename?: 'AnalyticsViewingRoom';
  entityId: Scalars['String']['output'];
};

export type AnalyticsVisitorsByCountry = {
  __typename?: 'AnalyticsVisitorsByCountry';
  metric: Scalars['String']['output'];
  name: Scalars['String']['output'];
  percent: Scalars['Float']['output'];
  type: Scalars['String']['output'];
  value: Scalars['Int']['output'];
};

export type AnalyticsVisitorsByDevice = {
  __typename?: 'AnalyticsVisitorsByDevice';
  metric: Scalars['String']['output'];
  name: Scalars['String']['output'];
  percent: Scalars['Float']['output'];
  type: Scalars['String']['output'];
  value: Scalars['Int']['output'];
};

export type AnalyticsVisitorsByLandingPage = {
  __typename?: 'AnalyticsVisitorsByLandingPage';
  metric: Scalars['String']['output'];
  name: Scalars['String']['output'];
  percent: Scalars['Float']['output'];
  type: Scalars['String']['output'];
  value: Scalars['Int']['output'];
};

export type AnalyticsVisitorsByReferral = {
  __typename?: 'AnalyticsVisitorsByReferral';
  metric: Scalars['String']['output'];
  name: Scalars['String']['output'];
  percent: Scalars['Float']['output'];
  type: Scalars['String']['output'];
  value: Scalars['Int']['output'];
};

export type AppSecondFactor = SecondFactor & {
  __typename?: 'AppSecondFactor';
  disabledAt?: Maybe<Scalars['String']['output']>;
  enabled: Scalars['Boolean']['output'];
  enabledAt?: Maybe<Scalars['String']['output']>;
  internalID: Scalars['ID']['output'];
  kind: SecondFactorKind;
  name?: Maybe<Scalars['String']['output']>;
  otpProvisioningURI?: Maybe<Scalars['String']['output']>;
  otpSecret?: Maybe<Scalars['String']['output']>;
};


export type AppSecondFactorDisabledAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type AppSecondFactorEnabledAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type AppSecondFactorAttributes = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type AppSecondFactorOrErrorsUnion = AppSecondFactor | Errors;

export type Article = Node & {
  __typename?: 'Article';
  /** @deprecated Use `byline` or `authors` instead */
  author?: Maybe<Author>;
  authors: Array<Author>;
  byline?: Maybe<Scalars['String']['output']>;
  cached?: Maybe<Scalars['Int']['output']>;
  channel?: Maybe<Channel>;
  channelArticles: Array<Article>;
  /** @deprecated Use `channel` instead */
  channelID?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `byline` or `authors` instead */
  contributingAuthors?: Maybe<Array<Maybe<Author>>>;
  description?: Maybe<Scalars['String']['output']>;
  hero?: Maybe<ArticleHero>;
  href?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  keywords: Array<Scalars['String']['output']>;
  layout: ArticleLayout;
  leadParagraph?: Maybe<Scalars['String']['output']>;
  media?: Maybe<ArticleMedia>;
  newsSource?: Maybe<ArticleNewsSource>;
  postscript?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['String']['output']>;
  relatedArticles: Array<Article>;
  searchDescription?: Maybe<Scalars['String']['output']>;
  searchTitle?: Maybe<Scalars['String']['output']>;
  sections: Array<ArticleSections>;
  series?: Maybe<ArticleSeries>;
  seriesArticle?: Maybe<Article>;
  slug?: Maybe<Scalars['String']['output']>;
  sponsor?: Maybe<ArticleSponsor>;
  thumbnailImage?: Maybe<Image>;
  thumbnailTeaser?: Maybe<Scalars['String']['output']>;
  thumbnailTitle?: Maybe<Scalars['String']['output']>;
  tier?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  vertical?: Maybe<Scalars['String']['output']>;
};


export type ArticleChannelArticlesArgs = {
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type ArticlePublishedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type ArticleRelatedArticlesArgs = {
  inVertical?: InputMaybe<Scalars['Boolean']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type ArticleUpdatedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type ArticleConnection = {
  __typename?: 'ArticleConnection';
  edges?: Maybe<Array<Maybe<ArticleEdge>>>;
  pageCursors: PageCursors;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type ArticleEdge = {
  __typename?: 'ArticleEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Article>;
};

export type ArticleFeatureSection = {
  __typename?: 'ArticleFeatureSection';
  embed?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Image>;
  layout: ArticleFeatureSectionType;
  media?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


export type ArticleFeatureSectionEmbedArgs = {
  autoPlay?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum ArticleFeatureSectionType {
  Basic = 'BASIC',
  Fullscreen = 'FULLSCREEN',
  Split = 'SPLIT',
  Text = 'TEXT'
}

export type ArticleFeaturedArtistNotificationItem = {
  __typename?: 'ArticleFeaturedArtistNotificationItem';
  article?: Maybe<Article>;
  artistsConnection?: Maybe<ArtistConnection>;
};


export type ArticleFeaturedArtistNotificationItemArtistsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type ArticleHero = ArticleFeatureSection;

export type ArticleImageSection = {
  __typename?: 'ArticleImageSection';
  caption?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Image>;
  layout?: Maybe<Scalars['String']['output']>;
};

export enum ArticleLayout {
  Classic = 'CLASSIC',
  Feature = 'FEATURE',
  News = 'NEWS',
  Series = 'SERIES',
  Standard = 'STANDARD',
  Video = 'VIDEO'
}

export type ArticleMedia = {
  __typename?: 'ArticleMedia';
  coverImage?: Maybe<Image>;
  credits?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['String']['output']>;
  releaseDate?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};


export type ArticleMediaReleaseDateArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type ArticleNewsSource = {
  __typename?: 'ArticleNewsSource';
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type ArticleSectionCallout = {
  __typename?: 'ArticleSectionCallout';
  article?: Maybe<Scalars['String']['output']>;
  hideImage?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  thumbnailUrl?: Maybe<Scalars['String']['output']>;
  topStories?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ArticleSectionEmbed = {
  __typename?: 'ArticleSectionEmbed';
  height?: Maybe<Scalars['Int']['output']>;
  layout?: Maybe<ArticleSectionEmbedLayout>;
  mobileHeight?: Maybe<Scalars['Int']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export enum ArticleSectionEmbedLayout {
  ColumnWidth = 'COLUMN_WIDTH',
  Fillwidth = 'FILLWIDTH',
  Overflow = 'OVERFLOW',
  OverflowFillwidth = 'OVERFLOW_FILLWIDTH'
}

export type ArticleSectionImageCollection = {
  __typename?: 'ArticleSectionImageCollection';
  figures: Array<ArticleSectionImageCollectionFigure>;
  layout: ArticleSectionImageCollectionLayout;
};

export type ArticleSectionImageCollectionFigure = ArticleImageSection | ArticleUnpublishedArtwork | Artwork;

export enum ArticleSectionImageCollectionLayout {
  ColumnWidth = 'COLUMN_WIDTH',
  Fillwidth = 'FILLWIDTH',
  OverflowFillwidth = 'OVERFLOW_FILLWIDTH'
}

export type ArticleSectionImageSet = {
  __typename?: 'ArticleSectionImageSet';
  counts: ArticleSectionImageSetCounts;
  cover?: Maybe<ArticleSectionImageSetFigure>;
  figures: Array<ArticleSectionImageSetFigure>;
  layout: ArticleSectionImageSetLayout;
  title?: Maybe<Scalars['String']['output']>;
};

export type ArticleSectionImageSetCounts = {
  __typename?: 'ArticleSectionImageSetCounts';
  figures: Scalars['Int']['output'];
};

export type ArticleSectionImageSetFigure = ArticleImageSection | Artwork;

export enum ArticleSectionImageSetLayout {
  Full = 'FULL',
  Mini = 'MINI'
}

export type ArticleSectionSocialEmbed = {
  __typename?: 'ArticleSectionSocialEmbed';
  embed?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type ArticleSectionText = {
  __typename?: 'ArticleSectionText';
  body?: Maybe<Scalars['String']['output']>;
  layout?: Maybe<Scalars['String']['output']>;
};

export type ArticleSectionVideo = {
  __typename?: 'ArticleSectionVideo';
  backgroundColor?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  embed?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Image>;
  layout?: Maybe<ArticleSectionVideoLayout>;
  url: Scalars['String']['output'];
};


export type ArticleSectionVideoEmbedArgs = {
  autoPlay?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum ArticleSectionVideoLayout {
  ColumnWidth = 'COLUMN_WIDTH',
  Fillwidth = 'FILLWIDTH',
  OverflowFillwidth = 'OVERFLOW_FILLWIDTH'
}

export type ArticleSections = ArticleSectionCallout | ArticleSectionEmbed | ArticleSectionImageCollection | ArticleSectionImageSet | ArticleSectionSocialEmbed | ArticleSectionText | ArticleSectionVideo;

export type ArticleSeries = {
  __typename?: 'ArticleSeries';
  description?: Maybe<Scalars['String']['output']>;
};

export enum ArticleSorts {
  PublishedAtAsc = 'PUBLISHED_AT_ASC',
  PublishedAtDesc = 'PUBLISHED_AT_DESC'
}

export type ArticleSponsor = {
  __typename?: 'ArticleSponsor';
  description?: Maybe<Scalars['String']['output']>;
  partnerCondensedLogo?: Maybe<Scalars['String']['output']>;
  partnerDarkLogo?: Maybe<Scalars['String']['output']>;
  partnerLightLogo?: Maybe<Scalars['String']['output']>;
  partnerLogoLink?: Maybe<Scalars['String']['output']>;
  pixelTrackingCode?: Maybe<Scalars['String']['output']>;
  subTitle?: Maybe<Scalars['String']['output']>;
};

export type ArticleUnpublishedArtwork = {
  __typename?: 'ArticleUnpublishedArtwork';
  artist?: Maybe<ArticleUnpublishedArtworkArtist>;
  artists: Array<ArticleUnpublishedArtworkArtist>;
  credit?: Maybe<Scalars['String']['output']>;
  date?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Image>;
  internalID: Scalars['ID']['output'];
  partner?: Maybe<ArticleUnpublishedArtworkPartner>;
  slug: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type ArticleUnpublishedArtworkArtist = {
  __typename?: 'ArticleUnpublishedArtworkArtist';
  name?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
};

export type ArticleUnpublishedArtworkPartner = {
  __typename?: 'ArticleUnpublishedArtworkPartner';
  name?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
};

export type Artist = EntityWithFilterArtworksConnectionInterface & Node & Searchable & {
  __typename?: 'Artist';
  alternateNames?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  articlesConnection?: Maybe<ArticleConnection>;
  artistSeriesConnection?: Maybe<ArtistSeriesConnection>;
  artworksConnection?: Maybe<ArtworkConnection>;
  auctionResultsConnection?: Maybe<AuctionResultConnection>;
  awards?: Maybe<Scalars['String']['output']>;
  basedOn?: Maybe<Artist>;
  biennials?: Maybe<Scalars['String']['output']>;
  bio?: Maybe<Scalars['String']['output']>;
  biography?: Maybe<Article>;
  biographyBlurb?: Maybe<ArtistBlurb>;
  birthday?: Maybe<Scalars['String']['output']>;
  blurb?: Maybe<Scalars['String']['output']>;
  cached?: Maybe<Scalars['Int']['output']>;
  careerHighlights: Array<CareerHighlight>;
  carousel?: Maybe<ArtistCarousel>;
  collections?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  contemporary?: Maybe<Array<Maybe<Artist>>>;
  counts?: Maybe<ArtistCounts>;
  coverArtwork?: Maybe<Artwork>;
  createdAt?: Maybe<Scalars['String']['output']>;
  criticallyAcclaimed: Scalars['Boolean']['output'];
  currentEvent?: Maybe<CurrentEvent>;
  deathday?: Maybe<Scalars['String']['output']>;
  disablePriceContext?: Maybe<Scalars['Boolean']['output']>;
  displayLabel?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  duplicates?: Maybe<Array<Maybe<Artist>>>;
  exhibitionHighlights?: Maybe<Array<Maybe<Show>>>;
  filterArtworksConnection?: Maybe<FilterArtworksConnection>;
  first?: Maybe<Scalars['String']['output']>;
  formattedArtworksCount?: Maybe<Scalars['String']['output']>;
  formattedNationalityAndBirthday?: Maybe<Scalars['String']['output']>;
  foundations?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  genes?: Maybe<Array<Maybe<Gene>>>;
  groupIndicator?: Maybe<ArtistGroupIndicator>;
  hasMetadata?: Maybe<Scalars['Boolean']['output']>;
  highlights?: Maybe<ArtistHighlights>;
  hometown?: Maybe<Scalars['String']['output']>;
  href?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Image>;
  imageUrl?: Maybe<Scalars['String']['output']>;
  initials?: Maybe<Scalars['String']['output']>;
  insights: Array<ArtistInsight>;
  internalID: Scalars['ID']['output'];
  isConsignable?: Maybe<Scalars['Boolean']['output']>;
  isDisplayAuctionLink?: Maybe<Scalars['Boolean']['output']>;
  isFollowed?: Maybe<Scalars['Boolean']['output']>;
  isInSeoExperiment?: Maybe<Scalars['Boolean']['output']>;
  isPersonalArtist?: Maybe<Scalars['Boolean']['output']>;
  isPublic: Scalars['Boolean']['output'];
  isShareable?: Maybe<Scalars['Boolean']['output']>;
  last?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  marketingCollections: Array<MarketingCollection>;
  meta: ArtistMeta;
  middle?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  nationality?: Maybe<Scalars['String']['output']>;
  partnerArtists?: Maybe<Array<Maybe<PartnerArtist>>>;
  /** @deprecated This field is deprecated. No longer in use */
  partnerBiographyBlurb?: Maybe<PartnerBiographyBlurb>;
  partnersConnection?: Maybe<PartnerArtistConnection>;
  recentShow?: Maybe<Scalars['String']['output']>;
  related?: Maybe<ArtistRelatedData>;
  reviewSources?: Maybe<Scalars['String']['output']>;
  sales?: Maybe<Array<Maybe<Sale>>>;
  showsConnection?: Maybe<ShowConnection>;
  slug: Scalars['ID']['output'];
  sortableID?: Maybe<Scalars['String']['output']>;
  statuses?: Maybe<ArtistStatuses>;
  targetSupply: ArtistTargetSupply;
  vanguardYear?: Maybe<Scalars['String']['output']>;
  verifiedRepresentatives: Array<VerifiedRepresentative>;
  years?: Maybe<Scalars['String']['output']>;
};


export type ArtistArticlesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  inEditorialFeed?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<ArticleSorts>;
};


export type ArtistArtistSeriesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type ArtistArtworksConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  exclude?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filter?: InputMaybe<Array<InputMaybe<ArtistArtworksFilters>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<ArtworkSorts>;
};


export type ArtistAuctionResultsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  aggregations?: InputMaybe<Array<InputMaybe<AuctionResultsAggregation>>>;
  allowEmptyCreatedDates?: InputMaybe<Scalars['Boolean']['input']>;
  allowUnspecifiedSaleDates?: InputMaybe<Scalars['Boolean']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  currency?: InputMaybe<Scalars['String']['input']>;
  earliestCreatedYear?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeEstimateRange?: InputMaybe<Scalars['Boolean']['input']>;
  includeUnknownPrices?: InputMaybe<Scalars['Boolean']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  latestCreatedYear?: InputMaybe<Scalars['Int']['input']>;
  organizations?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  priceRange?: InputMaybe<Scalars['String']['input']>;
  recordsTrusted?: InputMaybe<Scalars['Boolean']['input']>;
  saleEndYear?: InputMaybe<Scalars['Int']['input']>;
  saleStartYear?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sizes?: InputMaybe<Array<InputMaybe<ArtworkSizes>>>;
  sort?: InputMaybe<AuctionResultSorts>;
  state?: InputMaybe<AuctionResultsState>;
};


export type ArtistBiographyBlurbArgs = {
  format?: InputMaybe<Format>;
  partnerBio?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ArtistBlurbArgs = {
  format?: InputMaybe<Format>;
};


export type ArtistCareerHighlightsArgs = {
  collected?: InputMaybe<Scalars['Boolean']['input']>;
  group?: InputMaybe<Scalars['Boolean']['input']>;
  partnerId?: InputMaybe<Scalars['String']['input']>;
  solo?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ArtistContemporaryArgs = {
  excludeArtistsWithoutArtworks?: InputMaybe<Scalars['Boolean']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type ArtistCreatedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type ArtistExhibitionHighlightsArgs = {
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type ArtistFilterArtworksConnectionArgs = {
  acquireable?: InputMaybe<Scalars['Boolean']['input']>;
  additionalGeneIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  after?: InputMaybe<Scalars['String']['input']>;
  aggregationPartnerCities?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  aggregations?: InputMaybe<Array<InputMaybe<ArtworkAggregation>>>;
  artistID?: InputMaybe<Scalars['String']['input']>;
  artistIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  artistNationalities?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  artistSeriesID?: InputMaybe<Scalars['String']['input']>;
  artistSeriesIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  artworkIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  atAuction?: InputMaybe<Scalars['Boolean']['input']>;
  attributionClass?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  availability?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  color?: InputMaybe<Scalars['String']['input']>;
  colors?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dimensionRange?: InputMaybe<Scalars['String']['input']>;
  disableNotForSaleSorting?: InputMaybe<Scalars['Boolean']['input']>;
  excludeArtworkIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  extraAggregationGeneIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forSale?: InputMaybe<Scalars['Boolean']['input']>;
  framed?: InputMaybe<Scalars['Boolean']['input']>;
  geneID?: InputMaybe<Scalars['String']['input']>;
  geneIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  height?: InputMaybe<Scalars['String']['input']>;
  importSources?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  includeAllJSON?: InputMaybe<Scalars['Boolean']['input']>;
  includeArtworksByFollowedArtists?: InputMaybe<Scalars['Boolean']['input']>;
  includeMediumFilterInAggregation?: InputMaybe<Scalars['Boolean']['input']>;
  includeUnpublished?: InputMaybe<Scalars['Boolean']['input']>;
  input?: InputMaybe<FilterArtworksInput>;
  inquireableOnly?: InputMaybe<Scalars['Boolean']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  keywordMatchExact?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locationCities?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  majorPeriods?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  marketable?: InputMaybe<Scalars['Boolean']['input']>;
  marketingCollectionID?: InputMaybe<Scalars['String']['input']>;
  materialsTerms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  medium?: InputMaybe<Scalars['String']['input']>;
  offerable?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  partnerCities?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  partnerID?: InputMaybe<Scalars['ID']['input']>;
  partnerIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  period?: InputMaybe<Scalars['String']['input']>;
  periods?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  priceRange?: InputMaybe<Scalars['String']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  saleID?: InputMaybe<Scalars['ID']['input']>;
  showID?: InputMaybe<Scalars['String']['input']>;
  signed?: InputMaybe<Scalars['Boolean']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sizes?: InputMaybe<Array<InputMaybe<ArtworkSizes>>>;
  sold?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  tagID?: InputMaybe<Scalars['String']['input']>;
  visibilityLevel?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['String']['input']>;
};


export type ArtistInitialsArgs = {
  length?: InputMaybe<Scalars['Int']['input']>;
};


export type ArtistInsightsArgs = {
  kind?: InputMaybe<Array<InputMaybe<ArtistInsightKind>>>;
};


export type ArtistMarketingCollectionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isFeaturedArtistContent?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  slugs?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type ArtistMetaArgs = {
  page?: InputMaybe<ArtistPage>;
};


export type ArtistPartnerArtistsArgs = {
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type ArtistPartnerBiographyBlurbArgs = {
  format?: InputMaybe<Format>;
};


export type ArtistPartnersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  partnerCategory?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  representedBy?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ArtistSalesArgs = {
  isAuction?: InputMaybe<Scalars['Boolean']['input']>;
  live?: InputMaybe<Scalars['Boolean']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SaleSorts>;
};


export type ArtistShowsConnectionArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  atAFair?: InputMaybe<Scalars['Boolean']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isReference?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  soloShow?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<ShowSorts>;
  status?: InputMaybe<Scalars['String']['input']>;
  topTier?: InputMaybe<Scalars['Boolean']['input']>;
  visibleToPublic?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum ArtistAlertsSort {
  SortableIdAsc = 'SORTABLE_ID_ASC',
  SortableIdDesc = 'SORTABLE_ID_DESC'
}

export type ArtistArtworkGrid = ArtworkContextGrid & {
  __typename?: 'ArtistArtworkGrid';
  artworksConnection?: Maybe<ArtworkConnection>;
  ctaHref?: Maybe<Scalars['String']['output']>;
  ctaTitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


export type ArtistArtworkGridArtworksConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export enum ArtistArtworksFilters {
  IsForSale = 'IS_FOR_SALE',
  IsNotForSale = 'IS_NOT_FOR_SALE'
}

export type ArtistBlurb = {
  __typename?: 'ArtistBlurb';
  credit?: Maybe<Scalars['String']['output']>;
  partner?: Maybe<Partner>;
  /** @deprecated No longer used as the partner field contains the partner.id */
  partnerID?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
};

export type ArtistCarousel = {
  __typename?: 'ArtistCarousel';
  images?: Maybe<Array<Maybe<Image>>>;
};

export type ArtistConnection = {
  __typename?: 'ArtistConnection';
  edges?: Maybe<Array<Maybe<ArtistEdge>>>;
  pageCursors: PageCursors;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type ArtistCounts = {
  __typename?: 'ArtistCounts';
  articles?: Maybe<Scalars['Int']['output']>;
  artworks?: Maybe<Scalars['FormattedNumber']['output']>;
  auctionArtworks?: Maybe<Scalars['FormattedNumber']['output']>;
  /** @deprecated Favor `statuses#auctionLots` */
  auctionResults?: Maybe<Scalars['Int']['output']>;
  duplicates?: Maybe<Scalars['Int']['output']>;
  ecommerceArtworks?: Maybe<Scalars['FormattedNumber']['output']>;
  follows?: Maybe<Scalars['FormattedNumber']['output']>;
  forSaleArtworks?: Maybe<Scalars['FormattedNumber']['output']>;
  hasMakeOfferArtworks?: Maybe<Scalars['Boolean']['output']>;
  myCollectedArtworks: Scalars['Int']['output'];
  partnerShows?: Maybe<Scalars['FormattedNumber']['output']>;
  relatedArtists?: Maybe<Scalars['Int']['output']>;
};


export type ArtistCountsArtworksArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
};


export type ArtistCountsAuctionArtworksArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
};


export type ArtistCountsEcommerceArtworksArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
};


export type ArtistCountsFollowsArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
};


export type ArtistCountsForSaleArtworksArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
};


export type ArtistCountsPartnerShowsArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
};

export type ArtistEdge = {
  __typename?: 'ArtistEdge';
  artworksCount?: Maybe<Scalars['Int']['output']>;
  cursor: Scalars['String']['output'];
  node?: Maybe<Artist>;
};

export type ArtistGroup = {
  __typename?: 'ArtistGroup';
  items?: Maybe<Array<Maybe<Artist>>>;
  letter?: Maybe<Scalars['String']['output']>;
};

export enum ArtistGroupIndicator {
  Duo = 'DUO',
  Group = 'GROUP',
  Individual = 'INDIVIDUAL',
  NA = 'N_A'
}

export type ArtistHighlights = {
  __typename?: 'ArtistHighlights';
  partnersConnection?: Maybe<PartnerArtistConnection>;
};


export type ArtistHighlightsPartnersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  displayOnPartnerProfile?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  partnerCategory?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  representedBy?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ArtistInsight = {
  __typename?: 'ArtistInsight';
  artist?: Maybe<Artist>;
  count: Scalars['Int']['output'];
  description?: Maybe<Scalars['String']['output']>;
  entities: Array<Scalars['String']['output']>;
  kind?: Maybe<ArtistInsightKind>;
  label: Scalars['String']['output'];
  /** @deprecated Use `kind` instead. */
  type: Scalars['String']['output'];
};


export type ArtistInsightDescriptionArgs = {
  format?: InputMaybe<Format>;
};

export enum ArtistInsightKind {
  ActiveSecondaryMarket = 'ACTIVE_SECONDARY_MARKET',
  ArtsyVanguardYear = 'ARTSY_VANGUARD_YEAR',
  Awards = 'AWARDS',
  Biennial = 'BIENNIAL',
  Collected = 'COLLECTED',
  CriticallyAcclaimed = 'CRITICALLY_ACCLAIMED',
  CuratorsPickEmerging = 'CURATORS_PICK_EMERGING',
  Foundations = 'FOUNDATIONS',
  GainingFollowers = 'GAINING_FOLLOWERS',
  GroupShow = 'GROUP_SHOW',
  HighAuctionRecord = 'HIGH_AUCTION_RECORD',
  PrivateCollections = 'PRIVATE_COLLECTIONS',
  RecentCareerEvent = 'RECENT_CAREER_EVENT',
  Residencies = 'RESIDENCIES',
  Reviewed = 'REVIEWED',
  SoloShow = 'SOLO_SHOW',
  TrendingNow = 'TRENDING_NOW'
}

export type ArtistInsightsCount = {
  __typename?: 'ArtistInsightsCount';
  activeSecondaryMarketCount: Scalars['Int']['output'];
  biennialCount: Scalars['Int']['output'];
  collectedCount: Scalars['Int']['output'];
  groupShowCount: Scalars['Int']['output'];
  reviewedCount: Scalars['Int']['output'];
  soloShowCount: Scalars['Int']['output'];
};

export type ArtistMeta = {
  __typename?: 'ArtistMeta';
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export enum ArtistPage {
  About = 'ABOUT',
  ArtistSeries = 'ARTIST_SERIES',
  Artworks = 'ARTWORKS',
  AuctionResults = 'AUCTION_RESULTS'
}

export type ArtistPartnerConnection = {
  __typename?: 'ArtistPartnerConnection';
  edges?: Maybe<Array<Maybe<ArtistPartnerEdge>>>;
  pageCursors: PageCursors;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type ArtistPartnerEdge = {
  __typename?: 'ArtistPartnerEdge';
  artist?: Maybe<Artist>;
  artworksConnection?: Maybe<ArtworkConnection>;
  biography?: Maybe<Scalars['String']['output']>;
  biographyBlurb?: Maybe<PartnerArtistBlurb>;
  counts?: Maybe<PartnerArtistCounts>;
  cursor: Scalars['String']['output'];
  documentsConnection?: Maybe<PartnerDocumentConnection>;
  filterArtworksConnection?: Maybe<FilterArtworksConnection>;
  id: Scalars['ID']['output'];
  image?: Maybe<Image>;
  imageUrl?: Maybe<Scalars['String']['output']>;
  internalID: Scalars['ID']['output'];
  isDisplayOnPartnerProfile?: Maybe<Scalars['Boolean']['output']>;
  isHiddenInPresentationMode?: Maybe<Scalars['Boolean']['output']>;
  isUseDefaultBiography?: Maybe<Scalars['Boolean']['output']>;
  node?: Maybe<Artist>;
  partner?: Maybe<Partner>;
  representedBy?: Maybe<Scalars['Boolean']['output']>;
  showsConnection?: Maybe<ShowConnection>;
  sortableID?: Maybe<Scalars['String']['output']>;
};


export type ArtistPartnerEdgeArtworksConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<PartnerArtistArtworksSort>;
};


export type ArtistPartnerEdgeBiographyBlurbArgs = {
  format?: InputMaybe<Format>;
};


export type ArtistPartnerEdgeDocumentsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type ArtistPartnerEdgeFilterArtworksConnectionArgs = {
  acquireable?: InputMaybe<Scalars['Boolean']['input']>;
  additionalGeneIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  after?: InputMaybe<Scalars['String']['input']>;
  aggregationPartnerCities?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  aggregations?: InputMaybe<Array<InputMaybe<ArtworkAggregation>>>;
  artistID?: InputMaybe<Scalars['String']['input']>;
  artistIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  artistNationalities?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  artistSeriesID?: InputMaybe<Scalars['String']['input']>;
  artistSeriesIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  artworkIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  atAuction?: InputMaybe<Scalars['Boolean']['input']>;
  attributionClass?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  availability?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  color?: InputMaybe<Scalars['String']['input']>;
  colors?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dimensionRange?: InputMaybe<Scalars['String']['input']>;
  disableNotForSaleSorting?: InputMaybe<Scalars['Boolean']['input']>;
  excludeArtworkIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  extraAggregationGeneIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forSale?: InputMaybe<Scalars['Boolean']['input']>;
  framed?: InputMaybe<Scalars['Boolean']['input']>;
  geneID?: InputMaybe<Scalars['String']['input']>;
  geneIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  height?: InputMaybe<Scalars['String']['input']>;
  importSources?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  includeAllJSON?: InputMaybe<Scalars['Boolean']['input']>;
  includeArtworksByFollowedArtists?: InputMaybe<Scalars['Boolean']['input']>;
  includeMediumFilterInAggregation?: InputMaybe<Scalars['Boolean']['input']>;
  includeUnpublished?: InputMaybe<Scalars['Boolean']['input']>;
  input?: InputMaybe<FilterArtworksInput>;
  inquireableOnly?: InputMaybe<Scalars['Boolean']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  keywordMatchExact?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locationCities?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  majorPeriods?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  marketable?: InputMaybe<Scalars['Boolean']['input']>;
  marketingCollectionID?: InputMaybe<Scalars['String']['input']>;
  materialsTerms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  medium?: InputMaybe<Scalars['String']['input']>;
  offerable?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  partnerCities?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  partnerID?: InputMaybe<Scalars['ID']['input']>;
  partnerIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  period?: InputMaybe<Scalars['String']['input']>;
  periods?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  priceRange?: InputMaybe<Scalars['String']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  saleID?: InputMaybe<Scalars['ID']['input']>;
  showID?: InputMaybe<Scalars['String']['input']>;
  signed?: InputMaybe<Scalars['Boolean']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sizes?: InputMaybe<Array<InputMaybe<ArtworkSizes>>>;
  sold?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  tagID?: InputMaybe<Scalars['String']['input']>;
  visibilityLevel?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['String']['input']>;
};


export type ArtistPartnerEdgeShowsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type ArtistRelatedData = {
  __typename?: 'ArtistRelatedData';
  artistsConnection?: Maybe<ArtistConnection>;
  genes?: Maybe<GeneConnection>;
  suggestedConnection?: Maybe<ArtistConnection>;
};


export type ArtistRelatedDataArtistsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  excludeArtistsWithoutArtworks?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  kind?: InputMaybe<RelatedArtistsKind>;
  last?: InputMaybe<Scalars['Int']['input']>;
  minForsaleArtworks?: InputMaybe<Scalars['Int']['input']>;
};


export type ArtistRelatedDataGenesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type ArtistRelatedDataSuggestedConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  excludeArtistIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  excludeArtistsWithoutArtworks?: InputMaybe<Scalars['Boolean']['input']>;
  excludeArtistsWithoutForsaleArtworks?: InputMaybe<Scalars['Boolean']['input']>;
  excludeFollowedArtists?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeFallbackArtists?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type ArtistSeries = Node & {
  __typename?: 'ArtistSeries';
  artistIDs: Array<Scalars['String']['output']>;
  artists: Array<Artist>;
  artworksCount: Scalars['Int']['output'];
  artworksCountMessage?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  descriptionFormatted?: Maybe<Scalars['String']['output']>;
  featured: Scalars['Boolean']['output'];
  filterArtworksConnection?: Maybe<FilterArtworksConnection>;
  forSaleArtworksCount: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  image?: Maybe<Image>;
  internalID: Scalars['ID']['output'];
  published: Scalars['Boolean']['output'];
  representativeArtworkID?: Maybe<Scalars['ID']['output']>;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
};


export type ArtistSeriesArtistsArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type ArtistSeriesDescriptionFormattedArgs = {
  format?: InputMaybe<Format>;
};


export type ArtistSeriesFilterArtworksConnectionArgs = {
  acquireable?: InputMaybe<Scalars['Boolean']['input']>;
  additionalGeneIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  after?: InputMaybe<Scalars['String']['input']>;
  aggregationPartnerCities?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  aggregations?: InputMaybe<Array<InputMaybe<ArtworkAggregation>>>;
  artistID?: InputMaybe<Scalars['String']['input']>;
  artistIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  artistNationalities?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  artistSeriesID?: InputMaybe<Scalars['String']['input']>;
  artistSeriesIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  artworkIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  atAuction?: InputMaybe<Scalars['Boolean']['input']>;
  attributionClass?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  availability?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  color?: InputMaybe<Scalars['String']['input']>;
  colors?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dimensionRange?: InputMaybe<Scalars['String']['input']>;
  disableNotForSaleSorting?: InputMaybe<Scalars['Boolean']['input']>;
  excludeArtworkIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  extraAggregationGeneIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forSale?: InputMaybe<Scalars['Boolean']['input']>;
  framed?: InputMaybe<Scalars['Boolean']['input']>;
  geneID?: InputMaybe<Scalars['String']['input']>;
  geneIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  height?: InputMaybe<Scalars['String']['input']>;
  importSources?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  includeAllJSON?: InputMaybe<Scalars['Boolean']['input']>;
  includeArtworksByFollowedArtists?: InputMaybe<Scalars['Boolean']['input']>;
  includeMediumFilterInAggregation?: InputMaybe<Scalars['Boolean']['input']>;
  includeUnpublished?: InputMaybe<Scalars['Boolean']['input']>;
  input?: InputMaybe<FilterArtworksInput>;
  inquireableOnly?: InputMaybe<Scalars['Boolean']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  keywordMatchExact?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locationCities?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  majorPeriods?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  marketable?: InputMaybe<Scalars['Boolean']['input']>;
  marketingCollectionID?: InputMaybe<Scalars['String']['input']>;
  materialsTerms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  medium?: InputMaybe<Scalars['String']['input']>;
  offerable?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  partnerCities?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  partnerID?: InputMaybe<Scalars['ID']['input']>;
  partnerIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  period?: InputMaybe<Scalars['String']['input']>;
  periods?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  priceRange?: InputMaybe<Scalars['String']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  saleID?: InputMaybe<Scalars['ID']['input']>;
  showID?: InputMaybe<Scalars['String']['input']>;
  signed?: InputMaybe<Scalars['Boolean']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sizes?: InputMaybe<Array<InputMaybe<ArtworkSizes>>>;
  sold?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  tagID?: InputMaybe<Scalars['String']['input']>;
  visibilityLevel?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['String']['input']>;
};

export type ArtistSeriesConnection = {
  __typename?: 'ArtistSeriesConnection';
  edges?: Maybe<Array<Maybe<ArtistSeriesEdge>>>;
  pageCursors: PageCursors;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ArtistSeriesEdge = {
  __typename?: 'ArtistSeriesEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<ArtistSeries>;
};

export enum ArtistSorts {
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  SortableIdAsc = 'SORTABLE_ID_ASC',
  SortableIdDesc = 'SORTABLE_ID_DESC',
  TrendingDesc = 'TRENDING_DESC'
}

export type ArtistStatuses = {
  __typename?: 'ArtistStatuses';
  articles?: Maybe<Scalars['Boolean']['output']>;
  artists?: Maybe<Scalars['Boolean']['output']>;
  artworks?: Maybe<Scalars['Boolean']['output']>;
  auctionLots?: Maybe<Scalars['Boolean']['output']>;
  biography?: Maybe<Scalars['Boolean']['output']>;
  contemporary?: Maybe<Scalars['Boolean']['output']>;
  cv?: Maybe<Scalars['Boolean']['output']>;
  shows?: Maybe<Scalars['Boolean']['output']>;
};


export type ArtistStatusesCvArgs = {
  minShowCount?: InputMaybe<Scalars['Int']['input']>;
};

export type ArtistTargetSupply = {
  __typename?: 'ArtistTargetSupply';
  isInMicrofunnel?: Maybe<Scalars['Boolean']['output']>;
  /** @deprecated Use "priority" field instead. */
  isP1?: Maybe<Scalars['Boolean']['output']>;
  isTargetSupply?: Maybe<Scalars['Boolean']['output']>;
  microfunnel?: Maybe<ArtistTargetSupplyMicrofunnel>;
  priority?: Maybe<ArtistTargetSupplyPriority>;
  type?: Maybe<ArtistTargetSupplyType>;
};

export type ArtistTargetSupplyMicrofunnel = {
  __typename?: 'ArtistTargetSupplyMicrofunnel';
  artworksConnection?: Maybe<ArtworkConnection>;
  metadata?: Maybe<TargetSupplyMicrofunnelMetadata>;
};


export type ArtistTargetSupplyMicrofunnelArtworksConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  randomize?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum ArtistTargetSupplyPriority {
  False = 'FALSE',
  True = 'TRUE'
}

export enum ArtistTargetSupplyType {
  AuctionMarket = 'AUCTION_MARKET',
  CuratedEmerging = 'CURATED_EMERGING',
  HighestHqdls = 'HIGHEST_HQDLS',
  HighHqdls = 'HIGH_HQDLS'
}

export type ArtistsWithAlertCountsConnection = {
  __typename?: 'ArtistsWithAlertCountsConnection';
  edges?: Maybe<Array<Maybe<ArtistsWithAlertCountsEdge>>>;
  pageCursors: PageCursors;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type ArtistsWithAlertCountsEdge = {
  __typename?: 'ArtistsWithAlertCountsEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Artist>;
  totalAlertCount?: Maybe<Scalars['Int']['output']>;
};

export type ArtsyShippingOptInMutationFailure = {
  __typename?: 'ArtsyShippingOptInMutationFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type ArtsyShippingOptInMutationInput = {
  artsyShippingDomestic?: InputMaybe<Scalars['Boolean']['input']>;
  artsyShippingInternational?: InputMaybe<Scalars['Boolean']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  source?: InputMaybe<BulkUpdateSourceEnum>;
};

export type ArtsyShippingOptInMutationPayload = {
  __typename?: 'ArtsyShippingOptInMutationPayload';
  ArtsyShippingOptInOrError?: Maybe<ArtsyShippingOptInMutationType>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type ArtsyShippingOptInMutationSuccess = {
  __typename?: 'ArtsyShippingOptInMutationSuccess';
  skippedPartnerArtworks?: Maybe<ArtsyShippingOptInResponse>;
  updatedPartnerArtworks?: Maybe<ArtsyShippingOptInResponse>;
};

export type ArtsyShippingOptInMutationType = ArtsyShippingOptInMutationFailure | ArtsyShippingOptInMutationSuccess;

export type ArtsyShippingOptInResponse = {
  __typename?: 'ArtsyShippingOptInResponse';
  count?: Maybe<Scalars['Int']['output']>;
  ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Artwork = Node & Searchable & Sellable & {
  __typename?: 'Artwork';
  additionalInformation?: Maybe<Scalars['String']['output']>;
  /** @deprecated Prefer to use `processWithArtsyShippingDomestic`. [Will be removed in v2] */
  artaShippingEnabled?: Maybe<Scalars['Boolean']['output']>;
  articles?: Maybe<Array<Maybe<Article>>>;
  artist?: Maybe<Artist>;
  artistNames?: Maybe<Scalars['String']['output']>;
  artistSeriesConnection?: Maybe<ArtistSeriesConnection>;
  artists?: Maybe<Array<Maybe<Artist>>>;
  artsyShippingDomestic?: Maybe<Scalars['Boolean']['output']>;
  artsyShippingInternational?: Maybe<Scalars['Boolean']['output']>;
  /** @deprecated Please use `collectorLocation` instead */
  artworkLocation?: Maybe<Scalars['String']['output']>;
  attributionClass?: Maybe<AttributionClass>;
  availability?: Maybe<Scalars['String']['output']>;
  cached?: Maybe<Scalars['Int']['output']>;
  canRequestLotConditionsReport?: Maybe<Scalars['Boolean']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  /** @deprecated Prefer to use `mediumType`. */
  category?: Maybe<Scalars['String']['output']>;
  certificateOfAuthenticity?: Maybe<ArtworkInfoRow>;
  certificateOfAuthenticityDetails?: Maybe<CertificateOfAuthenticityDetails>;
  collectingInstitution?: Maybe<Scalars['String']['output']>;
  collectionsConnection?: Maybe<CollectionsConnection>;
  collectorLocation?: Maybe<MyLocation>;
  collectorSignals?: Maybe<CollectorSignals>;
  comparableAuctionResults?: Maybe<AuctionResultConnection>;
  condition?: Maybe<ArtworkCondition>;
  conditionDescription?: Maybe<ArtworkInfoRow>;
  confidentialNotes?: Maybe<Scalars['String']['output']>;
  /** @deprecated This field is deprecated as collector artwork submissions are no longer accepted. */
  consignmentSubmission?: Maybe<ArtworkConsignmentSubmission>;
  contactLabel?: Maybe<Scalars['String']['output']>;
  contactMessage?: Maybe<Scalars['String']['output']>;
  context?: Maybe<ArtworkContext>;
  contextGrids?: Maybe<Array<Maybe<ArtworkContextGrid>>>;
  costCurrencyCode?: Maybe<Scalars['String']['output']>;
  costMinor?: Maybe<Scalars['Int']['output']>;
  culturalMaker?: Maybe<Scalars['String']['output']>;
  date?: Maybe<Scalars['String']['output']>;
  depth?: Maybe<Scalars['String']['output']>;
  depthCm?: Maybe<Scalars['Float']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  diameter?: Maybe<Scalars['Float']['output']>;
  diameterCm?: Maybe<Scalars['Float']['output']>;
  dimensions?: Maybe<Dimensions>;
  displayArtistBio?: Maybe<Scalars['Boolean']['output']>;
  displayLabel?: Maybe<Scalars['String']['output']>;
  displayPriceRange?: Maybe<Scalars['Boolean']['output']>;
  domesticShippingFee?: Maybe<Money>;
  dominantColors: Array<Scalars['String']['output']>;
  downloadableImageUrl?: Maybe<Scalars['String']['output']>;
  editionNumber?: Maybe<Scalars['String']['output']>;
  editionOf?: Maybe<Scalars['String']['output']>;
  editionSet?: Maybe<EditionSet>;
  editionSets?: Maybe<Array<Maybe<EditionSet>>>;
  editionSize?: Maybe<Scalars['String']['output']>;
  embed?: Maybe<Scalars['String']['output']>;
  euShippingOrigin?: Maybe<Scalars['Boolean']['output']>;
  exhibitionHistory?: Maybe<Scalars['String']['output']>;
  fair?: Maybe<Fair>;
  featuredSlot?: Maybe<Scalars['Int']['output']>;
  figures: Array<ArtworkFigures>;
  formattedMetadata?: Maybe<Scalars['String']['output']>;
  /** @deprecated Consider using isFramed field (boolean) instead */
  framed?: Maybe<ArtworkInfoRow>;
  framedDepth?: Maybe<Scalars['String']['output']>;
  framedDiameter?: Maybe<Scalars['String']['output']>;
  framedHeight?: Maybe<Scalars['String']['output']>;
  framedMetric?: Maybe<Scalars['String']['output']>;
  framedWidth?: Maybe<Scalars['String']['output']>;
  hasCertificateOfAuthenticity?: Maybe<Scalars['Boolean']['output']>;
  hasMarketPriceInsights?: Maybe<Scalars['Boolean']['output']>;
  /** @deprecated This field is deprecated as collector artwork submissions are no longer accepted. */
  hasPriceEstimateRequest?: Maybe<Scalars['Boolean']['output']>;
  hasTitle: Scalars['Boolean']['output'];
  height?: Maybe<Scalars['String']['output']>;
  heightCm?: Maybe<Scalars['Float']['output']>;
  highlights?: Maybe<Array<Maybe<ArtworkHighlight>>>;
  href?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Image>;
  imageRights?: Maybe<Scalars['String']['output']>;
  imageTitle?: Maybe<Scalars['String']['output']>;
  imageUrl?: Maybe<Scalars['String']['output']>;
  images?: Maybe<Array<Maybe<Image>>>;
  importSource?: Maybe<ArtworkImportSource>;
  inquiryQuestions?: Maybe<Array<Maybe<InquiryQuestion>>>;
  internalDisplayPrice?: Maybe<Scalars['String']['output']>;
  internalID: Scalars['ID']['output'];
  internationalShippingFee?: Maybe<Money>;
  inventoryId?: Maybe<Scalars['String']['output']>;
  isAcquireable?: Maybe<Scalars['Boolean']['output']>;
  isBiddable?: Maybe<Scalars['Boolean']['output']>;
  isBuyNowable?: Maybe<Scalars['Boolean']['output']>;
  isComparableWithAuctionResults?: Maybe<Scalars['Boolean']['output']>;
  isDisliked: Scalars['Boolean']['output'];
  isDownloadable?: Maybe<Scalars['Boolean']['output']>;
  isEdition?: Maybe<Scalars['Boolean']['output']>;
  isEligibleForArtsyGuarantee: Scalars['Boolean']['output'];
  isEligibleForOnPlatformTransaction: Scalars['Boolean']['output'];
  isEligibleToCreateAlert: Scalars['Boolean']['output'];
  isEmbeddableVideo?: Maybe<Scalars['Boolean']['output']>;
  isFixedShippingFeeOnly?: Maybe<Scalars['Boolean']['output']>;
  isForSale?: Maybe<Scalars['Boolean']['output']>;
  isFramed?: Maybe<Scalars['Boolean']['output']>;
  isHangable?: Maybe<Scalars['Boolean']['output']>;
  isInAuction?: Maybe<Scalars['Boolean']['output']>;
  isInShow?: Maybe<Scalars['Boolean']['output']>;
  isInquireable?: Maybe<Scalars['Boolean']['output']>;
  /** @deprecated This field is deprecated as collector artwork submissions are no longer accepted. */
  isListed: Scalars['Boolean']['output'];
  isNotForSale?: Maybe<Scalars['String']['output']>;
  isOfferable?: Maybe<Scalars['Boolean']['output']>;
  isOfferableFromInquiry?: Maybe<Scalars['Boolean']['output']>;
  isOnHold?: Maybe<Scalars['String']['output']>;
  isPartnerPromoted?: Maybe<Scalars['Boolean']['output']>;
  isPickupAvailable?: Maybe<Scalars['Boolean']['output']>;
  /** @deprecated This field is deprecated as collector artwork submissions are no longer accepted. */
  isPriceEstimateRequestable?: Maybe<Scalars['Boolean']['output']>;
  isPriceHidden?: Maybe<Scalars['Boolean']['output']>;
  isPriceRange?: Maybe<Scalars['Boolean']['output']>;
  isPurchasable?: Maybe<Scalars['Boolean']['output']>;
  isSaved?: Maybe<Scalars['Boolean']['output']>;
  isSavedToAnyList: Scalars['Boolean']['output'];
  isSavedToList: Scalars['Boolean']['output'];
  isSetVideoAsCover?: Maybe<Scalars['Boolean']['output']>;
  isShareable?: Maybe<Scalars['Boolean']['output']>;
  isSold?: Maybe<Scalars['Boolean']['output']>;
  isUnique?: Maybe<Scalars['Boolean']['output']>;
  isUnlisted: Scalars['Boolean']['output'];
  lastOfferableActivityAt?: Maybe<Scalars['String']['output']>;
  lastSavedAt?: Maybe<Scalars['String']['output']>;
  layer?: Maybe<ArtworkLayer>;
  layers?: Maybe<Array<Maybe<ArtworkLayer>>>;
  listPrice?: Maybe<ListPrice>;
  /** @deprecated This field is deprecated as collector artwork submissions are no longer accepted. */
  listedArtworksConnection: ArtworkConnection;
  listingOptions?: Maybe<ArtworkListingOptions>;
  literature?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Location>;
  manufacturer?: Maybe<Scalars['String']['output']>;
  marketPriceInsights?: Maybe<ArtworkPriceInsights>;
  medium?: Maybe<Scalars['String']['output']>;
  mediumType?: Maybe<ArtworkMedium>;
  meta?: Maybe<ArtworkMeta>;
  metric?: Maybe<Scalars['String']['output']>;
  myLotStanding?: Maybe<Array<LotStanding>>;
  offerableActivity?: Maybe<OfferableActivity>;
  onlyShipsDomestically?: Maybe<Scalars['Boolean']['output']>;
  partner?: Maybe<Partner>;
  partnerOffersConnection?: Maybe<PartnerOfferConnection>;
  pickupAvailable?: Maybe<Scalars['Boolean']['output']>;
  price?: Maybe<Scalars['String']['output']>;
  priceCurrency?: Maybe<Scalars['String']['output']>;
  priceDisplay?: Maybe<Scalars['String']['output']>;
  priceIncludesTax?: Maybe<Scalars['Boolean']['output']>;
  priceIncludesTaxDisplay?: Maybe<Scalars['String']['output']>;
  priceListed?: Maybe<Money>;
  priceListedDisplay?: Maybe<Scalars['String']['output']>;
  pricePaid?: Maybe<Money>;
  pricingContext?: Maybe<AnalyticsPricingContext>;
  processWithArtsyShippingDomestic?: Maybe<Scalars['Boolean']['output']>;
  provenance?: Maybe<Scalars['String']['output']>;
  published: Scalars['Boolean']['output'];
  publisher?: Maybe<Scalars['String']['output']>;
  realizedPrice?: Maybe<Scalars['String']['output']>;
  realizedToEstimate?: Maybe<Scalars['String']['output']>;
  recentAbandonedOrdersCount?: Maybe<Scalars['Int']['output']>;
  recentSavesCount?: Maybe<Scalars['Int']['output']>;
  related?: Maybe<Array<Maybe<Artwork>>>;
  sale?: Maybe<Sale>;
  saleArtwork?: Maybe<SaleArtwork>;
  saleMessage?: Maybe<Scalars['String']['output']>;
  savedSearch?: Maybe<ArtworkSavedSearch>;
  series?: Maybe<Scalars['String']['output']>;
  shippingCountry?: Maybe<Scalars['String']['output']>;
  shippingInfo?: Maybe<Scalars['String']['output']>;
  shippingOrigin?: Maybe<Scalars['String']['output']>;
  shippingWeight?: Maybe<Scalars['Float']['output']>;
  shippingWeightMetric?: Maybe<Scalars['String']['output']>;
  /** @deprecated Prefer to use `onlyShipsDomestically`. [Will be removed in v2] */
  shipsToContinentalUSOnly?: Maybe<Scalars['Boolean']['output']>;
  show?: Maybe<Show>;
  shows?: Maybe<Array<Maybe<Show>>>;
  signature?: Maybe<Scalars['String']['output']>;
  signatureDetails?: Maybe<Scalars['String']['output']>;
  signatureInfo?: Maybe<ArtworkInfoRow>;
  signatureMeta?: Maybe<ArtworkSignatureMeta>;
  sizeBucket?: Maybe<Scalars['String']['output']>;
  sizeScore?: Maybe<Scalars['Float']['output']>;
  slug: Scalars['ID']['output'];
  /** @deprecated This field is deprecated as collector artwork submissions are no longer accepted. */
  submissionId?: Maybe<Scalars['String']['output']>;
  taxInfo?: Maybe<TaxInfo>;
  title?: Maybe<Scalars['String']['output']>;
  vatExemptApprovalRequired?: Maybe<Scalars['Boolean']['output']>;
  vatRequirementComplete?: Maybe<Scalars['Boolean']['output']>;
  visibilityLevel?: Maybe<Visibility>;
  website?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['String']['output']>;
  widthCm?: Maybe<Scalars['Float']['output']>;
};


export type ArtworkAdditionalInformationArgs = {
  format?: InputMaybe<Format>;
};


export type ArtworkArticlesArgs = {
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type ArtworkArtistArgs = {
  shallow?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ArtworkArtistSeriesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type ArtworkArtistsArgs = {
  private?: InputMaybe<Scalars['Boolean']['input']>;
  shallow?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ArtworkCollectionsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  default?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  saves?: InputMaybe<Scalars['Boolean']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<CollectionSorts>;
};


export type ArtworkComparableAuctionResultsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type ArtworkContextGridsArgs = {
  includeRelatedArtworks?: Scalars['Boolean']['input'];
};


export type ArtworkDescriptionArgs = {
  format?: InputMaybe<Format>;
};


export type ArtworkEditionSetArgs = {
  id: Scalars['String']['input'];
};


export type ArtworkEditionSetsArgs = {
  sort?: InputMaybe<EditionSetSorts>;
};


export type ArtworkEmbedArgs = {
  autoplay?: InputMaybe<Scalars['Boolean']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};


export type ArtworkExhibitionHistoryArgs = {
  format?: InputMaybe<Format>;
};


export type ArtworkFiguresArgs = {
  includeAll?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ArtworkImageArgs = {
  includeAll?: InputMaybe<Scalars['Boolean']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type ArtworkImagesArgs = {
  includeAll?: InputMaybe<Scalars['Boolean']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type ArtworkIsSavedToListArgs = {
  default?: InputMaybe<Scalars['Boolean']['input']>;
  saves?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ArtworkLastOfferableActivityAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type ArtworkLastSavedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type ArtworkLayerArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type ArtworkListedArtworksConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type ArtworkLiteratureArgs = {
  format?: InputMaybe<Format>;
};


export type ArtworkManufacturerArgs = {
  format?: InputMaybe<Format>;
};


export type ArtworkMyLotStandingArgs = {
  live?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ArtworkPartnerArgs = {
  shallow?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ArtworkPartnerOffersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<PartnerOfferSorts>;
};


export type ArtworkProvenanceArgs = {
  format?: InputMaybe<Format>;
};


export type ArtworkPublisherArgs = {
  format?: InputMaybe<Format>;
};


export type ArtworkRelatedArgs = {
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type ArtworkSaleArtworkArgs = {
  saleID?: InputMaybe<Scalars['String']['input']>;
};


export type ArtworkSeriesArgs = {
  format?: InputMaybe<Format>;
};


export type ArtworkShowArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  atAFair?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<ShowSorts>;
};


export type ArtworkShowsArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  atAFair?: InputMaybe<Scalars['Boolean']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<ShowSorts>;
};


export type ArtworkSignatureArgs = {
  format?: InputMaybe<Format>;
};

export enum ArtworkAggregation {
  Artist = 'ARTIST',
  ArtistNationality = 'ARTIST_NATIONALITY',
  ArtistSeries = 'ARTIST_SERIES',
  AttributionClass = 'ATTRIBUTION_CLASS',
  Color = 'COLOR',
  DimensionRange = 'DIMENSION_RANGE',
  FollowedArtists = 'FOLLOWED_ARTISTS',
  Gallery = 'GALLERY',
  ImportSource = 'IMPORT_SOURCE',
  Institution = 'INSTITUTION',
  LocationCity = 'LOCATION_CITY',
  MajorPeriod = 'MAJOR_PERIOD',
  MaterialsTerms = 'MATERIALS_TERMS',
  Medium = 'MEDIUM',
  MerchandisableArtists = 'MERCHANDISABLE_ARTISTS',
  Partner = 'PARTNER',
  PartnerCity = 'PARTNER_CITY',
  Period = 'PERIOD',
  PriceRange = 'PRICE_RANGE',
  SimplePriceHistogram = 'SIMPLE_PRICE_HISTOGRAM',
  Total = 'TOTAL'
}

export enum ArtworkAttributionClassType {
  LimitedEdition = 'LIMITED_EDITION',
  OpenEdition = 'OPEN_EDITION',
  Unique = 'UNIQUE',
  UnknownEdition = 'UNKNOWN_EDITION'
}

export type ArtworkCondition = {
  __typename?: 'ArtworkCondition';
  description?: Maybe<Scalars['String']['output']>;
  displayText?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export enum ArtworkConditionEnumType {
  Excellent = 'EXCELLENT',
  Fair = 'FAIR',
  Good = 'GOOD',
  VeryGood = 'VERY_GOOD'
}

export type ArtworkConnection = ArtworkConnectionInterface & {
  __typename?: 'ArtworkConnection';
  edges?: Maybe<Array<Maybe<ArtworkEdge>>>;
  pageCursors: PageCursors;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type ArtworkConnectionInterface = {
  edges?: Maybe<Array<Maybe<ArtworkEdgeInterface>>>;
  pageCursors: PageCursors;
  pageInfo: PageInfo;
};

export type ArtworkConsignmentSubmission = {
  __typename?: 'ArtworkConsignmentSubmission';
  actionLabel?: Maybe<Scalars['String']['output']>;
  buttonLabel?: Maybe<Scalars['String']['output']>;
  /** @deprecated Prefer `stateLabel` field. */
  displayText?: Maybe<Scalars['String']['output']>;
  externalID?: Maybe<Scalars['String']['output']>;
  inProgress?: Maybe<Scalars['Boolean']['output']>;
  internalID?: Maybe<Scalars['String']['output']>;
  isEditable?: Maybe<Scalars['Boolean']['output']>;
  isSold?: Maybe<Scalars['Boolean']['output']>;
  state: ArtworkConsignmentSubmissionState;
  stateHelpMessage?: Maybe<Scalars['String']['output']>;
  stateLabel?: Maybe<Scalars['String']['output']>;
  stateLabelColor?: Maybe<Scalars['String']['output']>;
};

export type ArtworkConsignmentSubmissionConnection = {
  __typename?: 'ArtworkConsignmentSubmissionConnection';
  edges?: Maybe<Array<Maybe<ArtworkConsignmentSubmissionEdge>>>;
  pageCursors: PageCursors;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type ArtworkConsignmentSubmissionEdge = {
  __typename?: 'ArtworkConsignmentSubmissionEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<ArtworkConsignmentSubmission>;
};

export enum ArtworkConsignmentSubmissionState {
  Approved = 'APPROVED',
  Closed = 'CLOSED',
  Draft = 'DRAFT',
  Hold = 'HOLD',
  Published = 'PUBLISHED',
  Rejected = 'REJECTED',
  Resubmitted = 'RESUBMITTED',
  Submitted = 'SUBMITTED'
}

export type ArtworkContext = Fair | Sale | Show;

export type ArtworkContextGrid = {
  artworksConnection?: Maybe<ArtworkConnection>;
  ctaHref?: Maybe<Scalars['String']['output']>;
  ctaTitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


export type ArtworkContextGridArtworksConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type ArtworkEdge = ArtworkEdgeInterface & {
  __typename?: 'ArtworkEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Artwork>;
};

export type ArtworkEdgeInterface = {
  cursor?: Maybe<Scalars['String']['output']>;
  node?: Maybe<Artwork>;
};

export type ArtworkError = {
  __typename?: 'ArtworkError';
  artwork?: Maybe<PartialArtwork>;
  requestError?: Maybe<RequestError>;
};

export type ArtworkFigures = Image | Video;

export type ArtworkFilterFacet = Gene | Tag;

export type ArtworkHighlight = Article | Show;

export type ArtworkImport = Node & {
  __typename?: 'ArtworkImport';
  columns: Array<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<ArtworkImportCreatedBy>;
  currency: Scalars['String']['output'];
  dimensionMetric: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  rawDataMapping: Scalars['JSON']['output'];
  rowsConnection?: Maybe<ArtworkImportRowConnection>;
  state?: Maybe<ArtworkImportState>;
  summary?: Maybe<ArtworkImportSummary>;
  unmatchedArtistNames: Array<Scalars['String']['output']>;
  weightMetric: Scalars['String']['output'];
};


export type ArtworkImportCreatedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type ArtworkImportRowsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  blockersOnly?: InputMaybe<Scalars['Boolean']['input']>;
  createdOnly?: InputMaybe<Scalars['Boolean']['input']>;
  errorTypes?: InputMaybe<Array<InputMaybe<ArtworkImportError>>>;
  excludeErrorTypes?: InputMaybe<Array<InputMaybe<ArtworkImportError>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  hasErrors?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type ArtworkImportConnection = {
  __typename?: 'ArtworkImportConnection';
  edges?: Maybe<Array<Maybe<ArtworkImportEdge>>>;
  pageCursors: PageCursors;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type ArtworkImportCreatedBy = {
  __typename?: 'ArtworkImportCreatedBy';
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type ArtworkImportEdge = {
  __typename?: 'ArtworkImportEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<ArtworkImport>;
};

export enum ArtworkImportError {
  ArtworkCreationFailed = 'ARTWORK_CREATION_FAILED',
  InvalidCertificateOfAuthenticity = 'INVALID_CERTIFICATE_OF_AUTHENTICITY',
  InvalidClassification = 'INVALID_CLASSIFICATION',
  InvalidDepth = 'INVALID_DEPTH',
  InvalidDiameter = 'INVALID_DIAMETER',
  InvalidFramedDepth = 'INVALID_FRAMED_DEPTH',
  InvalidFramedDiameter = 'INVALID_FRAMED_DIAMETER',
  InvalidFramedHeight = 'INVALID_FRAMED_HEIGHT',
  InvalidFramedWidth = 'INVALID_FRAMED_WIDTH',
  InvalidHeight = 'INVALID_HEIGHT',
  InvalidMedium = 'INVALID_MEDIUM',
  InvalidPrice = 'INVALID_PRICE',
  InvalidSignature = 'INVALID_SIGNATURE',
  InvalidTitle = 'INVALID_TITLE',
  InvalidWeight = 'INVALID_WEIGHT',
  InvalidWidth = 'INVALID_WIDTH',
  MissingArtist = 'MISSING_ARTIST',
  MissingDate = 'MISSING_DATE',
  MissingPrice = 'MISSING_PRICE',
  MissingTitle = 'MISSING_TITLE',
  UnmatchedArtist = 'UNMATCHED_ARTIST',
  UnmatchedImage = 'UNMATCHED_IMAGE'
}

export type ArtworkImportRow = {
  __typename?: 'ArtworkImportRow';
  artists?: Maybe<Array<Artist>>;
  artwork?: Maybe<Artwork>;
  currency: Scalars['String']['output'];
  dimensionMetric: Scalars['String']['output'];
  errors: Array<ArtworkImportRowError>;
  excludedFromImport: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  images: Array<ArtworkImportRowImage>;
  internalID: Scalars['ID']['output'];
  priceListed?: Maybe<Money>;
  rawData: Scalars['JSON']['output'];
  transformedData: ArtworkImportTransformedData;
  weightMetric: Scalars['String']['output'];
};

export type ArtworkImportRowConnection = {
  __typename?: 'ArtworkImportRowConnection';
  edges?: Maybe<Array<Maybe<ArtworkImportRowEdge>>>;
  pageCursors: PageCursors;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type ArtworkImportRowEdge = {
  __typename?: 'ArtworkImportRowEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<ArtworkImportRow>;
};

export type ArtworkImportRowError = {
  __typename?: 'ArtworkImportRowError';
  blocking: Scalars['Boolean']['output'];
  errorType?: Maybe<ArtworkImportError>;
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  metadata?: Maybe<Scalars['JSON']['output']>;
};

export type ArtworkImportRowImage = {
  __typename?: 'ArtworkImportRowImage';
  fileName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  s3Bucket?: Maybe<Scalars['String']['output']>;
  s3Key?: Maybe<Scalars['String']['output']>;
};

export enum ArtworkImportSource {
  Convection = 'CONVECTION',
  MyCollection = 'MY_COLLECTION'
}

export enum ArtworkImportState {
  ArtistMatchingComplete = 'ARTIST_MATCHING_COMPLETE',
  ArtworksCreationComplete = 'ARTWORKS_CREATION_COMPLETE',
  Canceled = 'CANCELED',
  Pending = 'PENDING'
}

export type ArtworkImportSummary = {
  __typename?: 'ArtworkImportSummary';
  currencies: Array<Scalars['String']['output']>;
  dimensionMetrics: Array<Scalars['String']['output']>;
  weightMetrics: Array<Scalars['String']['output']>;
};

export type ArtworkImportTransformedData = {
  __typename?: 'ArtworkImportTransformedData';
  artistNames?: Maybe<Scalars['String']['output']>;
  artworkCondition?: Maybe<Scalars['String']['output']>;
  artworkTitle?: Maybe<Scalars['String']['output']>;
  certificateOfAuthenticity?: Maybe<Scalars['String']['output']>;
  classification?: Maybe<Scalars['String']['output']>;
  date?: Maybe<Scalars['String']['output']>;
  depth?: Maybe<Scalars['String']['output']>;
  diameter?: Maybe<Scalars['String']['output']>;
  framedDepth?: Maybe<Scalars['String']['output']>;
  framedDiameter?: Maybe<Scalars['String']['output']>;
  framedHeight?: Maybe<Scalars['String']['output']>;
  framedWidth?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['String']['output']>;
  imageFileNames?: Maybe<Scalars['String']['output']>;
  inventoryId?: Maybe<Scalars['String']['output']>;
  materials?: Maybe<Scalars['String']['output']>;
  medium?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['String']['output']>;
  signature?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  signatureDetails?: Maybe<Scalars['String']['output']>;
  weight?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['String']['output']>;
};

export type ArtworkInfoRow = {
  __typename?: 'ArtworkInfoRow';
  details?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
};

export type ArtworkInquiry = {
  __typename?: 'ArtworkInquiry';
  artwork: Artwork;
  id: Scalars['ID']['output'];
  impulseConversationID?: Maybe<Scalars['String']['output']>;
  internalID: Scalars['ID']['output'];
};

export type ArtworkInquiryConnection = {
  __typename?: 'ArtworkInquiryConnection';
  edges?: Maybe<Array<Maybe<ArtworkInquiryEdge>>>;
  pageInfo: PageInfo;
};

export type ArtworkInquiryEdge = {
  __typename?: 'ArtworkInquiryEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<ArtworkInquiry>;
};

export type ArtworkLayer = {
  __typename?: 'ArtworkLayer';
  artworksConnection?: Maybe<ArtworkConnection>;
  cached?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  href?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};


export type ArtworkLayerArtworksConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type ArtworkListingOptions = {
  __typename?: 'ArtworkListingOptions';
  isBuyNow?: Maybe<Scalars['Boolean']['output']>;
  isMakeOffer?: Maybe<Scalars['Boolean']['output']>;
};

export type ArtworkMedium = {
  __typename?: 'ArtworkMedium';
  filterGene?: Maybe<Gene>;
  longDescription?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type ArtworkMeta = {
  __typename?: 'ArtworkMeta';
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  share?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


export type ArtworkMetaDescriptionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type ArtworkMutationDeleteSuccess = {
  __typename?: 'ArtworkMutationDeleteSuccess';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type ArtworkMutationFailure = {
  __typename?: 'ArtworkMutationFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type ArtworkMutationType = ArtworkMutationDeleteSuccess | ArtworkMutationFailure;

export type ArtworkOrEditionSetType = Artwork | EditionSet;

export type ArtworkPriceInsights = {
  __typename?: 'ArtworkPriceInsights';
  annualLotsSold?: Maybe<Scalars['Int']['output']>;
  annualValueSoldCents?: Maybe<Scalars['FormattedNumber']['output']>;
  annualValueSoldDisplayText?: Maybe<Scalars['String']['output']>;
  artistId?: Maybe<Scalars['String']['output']>;
  averageSalePriceDisplayText?: Maybe<Scalars['String']['output']>;
  demandRank?: Maybe<Scalars['Float']['output']>;
  demandRankDisplayText?: Maybe<Scalars['String']['output']>;
  isHighDemand?: Maybe<Scalars['Boolean']['output']>;
  lastAuctionResultDate?: Maybe<Scalars['String']['output']>;
  liquidityRankDisplayText?: Maybe<Scalars['String']['output']>;
  medianSaleOverEstimatePercentage?: Maybe<Scalars['Float']['output']>;
  medianSalePriceDisplayText?: Maybe<Scalars['String']['output']>;
  medium?: Maybe<Scalars['String']['output']>;
  sellThroughRate?: Maybe<Scalars['Float']['output']>;
};


export type ArtworkPriceInsightsAverageSalePriceDisplayTextArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
};


export type ArtworkPriceInsightsLiquidityRankDisplayTextArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
};


export type ArtworkPriceInsightsMedianSalePriceDisplayTextArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
};

export type ArtworkPublishedNotificationItem = {
  __typename?: 'ArtworkPublishedNotificationItem';
  artists: Array<Artist>;
  artworksConnection?: Maybe<ArtworkConnection>;
};


export type ArtworkPublishedNotificationItemArtworksConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type ArtworkResult = Artwork | ArtworkError;

export type ArtworkSavedSearch = {
  __typename?: 'ArtworkSavedSearch';
  suggestedArtworksConnection?: Maybe<ArtworkConnection>;
};


export type ArtworkSavedSearchSuggestedArtworksConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type ArtworkSignatureMeta = {
  __typename?: 'ArtworkSignatureMeta';
  hasSignature: Scalars['Boolean']['output'];
  hasStickerLabel: Scalars['Boolean']['output'];
  isSignedByArtist: Scalars['Boolean']['output'];
  isSignedInPlate: Scalars['Boolean']['output'];
  isSignedOther: Scalars['Boolean']['output'];
  isStampedByArtistEstate: Scalars['Boolean']['output'];
};

export enum ArtworkSignatureTypeEnum {
  HandSignedByArtist = 'HAND_SIGNED_BY_ARTIST',
  NotSigned = 'NOT_SIGNED',
  Other = 'OTHER',
  SignedInPlate = 'SIGNED_IN_PLATE',
  StampedByArtistEstate = 'STAMPED_BY_ARTIST_ESTATE',
  StickerLabel = 'STICKER_LABEL'
}

export enum ArtworkSizes {
  Large = 'LARGE',
  Medium = 'MEDIUM',
  Small = 'SMALL'
}

export enum ArtworkSorts {
  AvailabilityAsc = 'AVAILABILITY_ASC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  DeletedAtAsc = 'DELETED_AT_ASC',
  DeletedAtDesc = 'DELETED_AT_DESC',
  IconicityDesc = 'ICONICITY_DESC',
  LastOfferableActivityAtDesc = 'LAST_OFFERABLE_ACTIVITY_AT_DESC',
  LastSavedAtDesc = 'LAST_SAVED_AT_DESC',
  MerchandisabilityDesc = 'MERCHANDISABILITY_DESC',
  PartnerUpdatedAtDesc = 'PARTNER_UPDATED_AT_DESC',
  PublishedAtAsc = 'PUBLISHED_AT_ASC',
  PublishedAtDesc = 'PUBLISHED_AT_DESC',
  RecentSavesCountDesc = 'RECENT_SAVES_COUNT_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC'
}

export type ArtworkVersion = Node & {
  __typename?: 'ArtworkVersion';
  artistNames?: Maybe<Scalars['String']['output']>;
  artists?: Maybe<Array<Maybe<Artist>>>;
  attributionClass?: Maybe<AttributionClass>;
  condition_description?: Maybe<Scalars['String']['output']>;
  date?: Maybe<Scalars['String']['output']>;
  defaultImageID?: Maybe<Scalars['String']['output']>;
  dimensions?: Maybe<Dimensions>;
  id: Scalars['ID']['output'];
  image?: Maybe<Image>;
  internalID: Scalars['ID']['output'];
  medium?: Maybe<Scalars['String']['output']>;
  provenance?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ArtworksAggregationResults = {
  __typename?: 'ArtworksAggregationResults';
  counts?: Maybe<Array<Maybe<AggregationCount>>>;
  slice?: Maybe<ArtworkAggregation>;
};

export type ArtworksCollectionsBatchUpdateCounts = {
  __typename?: 'ArtworksCollectionsBatchUpdateCounts';
  addedToCollections?: Maybe<Scalars['Int']['output']>;
  artworks?: Maybe<Scalars['Int']['output']>;
  removedFromCollections?: Maybe<Scalars['Int']['output']>;
};

export type ArtworksCollectionsBatchUpdateFailure = {
  __typename?: 'ArtworksCollectionsBatchUpdateFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type ArtworksCollectionsBatchUpdateInput = {
  addToCollectionIDs?: InputMaybe<Array<Scalars['String']['input']>>;
  artworkIDs: Array<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  removeFromCollectionIDs?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type ArtworksCollectionsBatchUpdatePayload = {
  __typename?: 'ArtworksCollectionsBatchUpdatePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  responseOrError?: Maybe<ArtworksCollectionsBatchUpdateResponseOrError>;
};

export type ArtworksCollectionsBatchUpdateResponseOrError = ArtworksCollectionsBatchUpdateFailure | ArtworksCollectionsBatchUpdateSuccess;

export type ArtworksCollectionsBatchUpdateSuccess = {
  __typename?: 'ArtworksCollectionsBatchUpdateSuccess';
  addedToCollections?: Maybe<Array<Maybe<Collection>>>;
  artwork?: Maybe<Artwork>;
  counts?: Maybe<ArtworksCollectionsBatchUpdateCounts>;
  removedFromCollections?: Maybe<Array<Maybe<Collection>>>;
};

export enum AssetType {
  AdditionalFile = 'ADDITIONAL_FILE',
  Image = 'IMAGE'
}

export type AssignArtworkImportArtistFailure = {
  __typename?: 'AssignArtworkImportArtistFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type AssignArtworkImportArtistInput = {
  artistID: Scalars['String']['input'];
  artistName: Scalars['String']['input'];
  artworkImportID: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type AssignArtworkImportArtistPayload = {
  __typename?: 'AssignArtworkImportArtistPayload';
  assignArtworkImportArtistOrError?: Maybe<AssignArtworkImportArtistResponseOrError>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type AssignArtworkImportArtistResponseOrError = AssignArtworkImportArtistFailure | AssignArtworkImportArtistSuccess;

export type AssignArtworkImportArtistSuccess = {
  __typename?: 'AssignArtworkImportArtistSuccess';
  artworkImport?: Maybe<ArtworkImport>;
  artworkImportID: Scalars['String']['output'];
  updatedRowsCount: Scalars['Int']['output'];
};

export type Attachment = {
  __typename?: 'Attachment';
  contentType: Scalars['String']['output'];
  downloadURL: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
};

export type AttributionClass = {
  __typename?: 'AttributionClass';
  id: Scalars['ID']['output'];
  /** @deprecated Prefer `shortDescription` */
  info?: Maybe<Scalars['String']['output']>;
  internalID: Scalars['ID']['output'];
  longDescription?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  shortArrayDescription?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  shortDescription?: Maybe<Scalars['String']['output']>;
};

export type AuctionArtworkGrid = ArtworkContextGrid & {
  __typename?: 'AuctionArtworkGrid';
  artworksConnection?: Maybe<ArtworkConnection>;
  ctaHref?: Maybe<Scalars['String']['output']>;
  ctaTitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


export type AuctionArtworkGridArtworksConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type AuctionCollectorSignals = {
  __typename?: 'AuctionCollectorSignals';
  bidCount: Scalars['Int']['output'];
  liveBiddingStarted: Scalars['Boolean']['output'];
  liveStartAt?: Maybe<Scalars['String']['output']>;
  lotClosesAt?: Maybe<Scalars['String']['output']>;
  lotWatcherCount: Scalars['Int']['output'];
  onlineBiddingExtended: Scalars['Boolean']['output'];
  registrationEndsAt?: Maybe<Scalars['String']['output']>;
};


export type AuctionCollectorSignalsLiveStartAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type AuctionCollectorSignalsLotClosesAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type AuctionCollectorSignalsRegistrationEndsAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type AuctionLotDimensions = {
  __typename?: 'AuctionLotDimensions';
  depth?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type AuctionLotEstimate = {
  __typename?: 'AuctionLotEstimate';
  display?: Maybe<Scalars['String']['output']>;
  high?: Maybe<Scalars['Float']['output']>;
  low?: Maybe<Scalars['Float']['output']>;
};

export type AuctionLotImages = {
  __typename?: 'AuctionLotImages';
  larger?: Maybe<Image>;
  thumbnail?: Maybe<Image>;
};

export type AuctionLotPerformance = {
  __typename?: 'AuctionLotPerformance';
  mid?: Maybe<Scalars['String']['output']>;
};

export type AuctionResult = Node & {
  __typename?: 'AuctionResult';
  artist?: Maybe<Artist>;
  artistID: Scalars['String']['output'];
  boughtIn?: Maybe<Scalars['Boolean']['output']>;
  categoryText?: Maybe<Scalars['String']['output']>;
  comparableAuctionResults?: Maybe<AuctionResultConnection>;
  currency?: Maybe<Scalars['String']['output']>;
  date?: Maybe<Scalars['String']['output']>;
  dateText?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  dimensionText?: Maybe<Scalars['String']['output']>;
  dimensions?: Maybe<AuctionLotDimensions>;
  estimate?: Maybe<AuctionLotEstimate>;
  externalURL?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  images?: Maybe<AuctionLotImages>;
  internalID: Scalars['ID']['output'];
  isInArtsyAuction: Scalars['Boolean']['output'];
  isUpcoming?: Maybe<Scalars['Boolean']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  lotNumber?: Maybe<Scalars['String']['output']>;
  mediumText?: Maybe<Scalars['String']['output']>;
  organization?: Maybe<Scalars['String']['output']>;
  performance?: Maybe<AuctionLotPerformance>;
  priceRealized?: Maybe<AuctionResultPriceRealized>;
  saleDate?: Maybe<Scalars['String']['output']>;
  saleDateText?: Maybe<Scalars['String']['output']>;
  saleTitle?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


export type AuctionResultComparableAuctionResultsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type AuctionResultDateArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type AuctionResultSaleDateArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type AuctionResultConnection = {
  __typename?: 'AuctionResultConnection';
  aggregations?: Maybe<Array<Maybe<AuctionResultsAggregationType>>>;
  createdYearRange?: Maybe<YearRange>;
  edges?: Maybe<Array<Maybe<AuctionResultEdge>>>;
  pageCursors: PageCursors;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type AuctionResultEdge = {
  __typename?: 'AuctionResultEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<AuctionResult>;
};

export type AuctionResultPriceRealized = {
  __typename?: 'AuctionResultPriceRealized';
  cents?: Maybe<Scalars['Float']['output']>;
  centsUSD?: Maybe<Scalars['Float']['output']>;
  display?: Maybe<Scalars['String']['output']>;
  displayUSD?: Maybe<Scalars['String']['output']>;
};


export type AuctionResultPriceRealizedDisplayArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
};


export type AuctionResultPriceRealizedDisplayUsdArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
};

export enum AuctionResultSorts {
  DateAsc = 'DATE_ASC',
  DateDesc = 'DATE_DESC',
  EstimateAndDateDesc = 'ESTIMATE_AND_DATE_DESC',
  PriceAndDateDesc = 'PRICE_AND_DATE_DESC'
}

export enum AuctionResultsAggregation {
  CurrenciesCount = 'CURRENCIES_COUNT',
  LotsByCreatedYear = 'LOTS_BY_CREATED_YEAR',
  LotsBySaleYear = 'LOTS_BY_SALE_YEAR',
  SimplePriceHistogram = 'SIMPLE_PRICE_HISTOGRAM'
}

export type AuctionResultsAggregationType = {
  __typename?: 'AuctionResultsAggregationType';
  counts?: Maybe<Array<Maybe<AggregationCount>>>;
  slice?: Maybe<AuctionResultsAggregation>;
};

export type AuctionResultsByArtists = {
  __typename?: 'AuctionResultsByArtists';
  artistId?: Maybe<Scalars['String']['output']>;
  boughtIn: Scalars['Boolean']['output'];
  categoryText?: Maybe<Scalars['String']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  date?: Maybe<Scalars['ISO8601DateTime']['output']>;
  dateText?: Maybe<Scalars['String']['output']>;
  depthCm?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  diameterCm?: Maybe<Scalars['Int']['output']>;
  dimensionText?: Maybe<Scalars['String']['output']>;
  externalUrl?: Maybe<Scalars['String']['output']>;
  hammerPriceCents?: Maybe<Scalars['BigInt']['output']>;
  hammerPriceCentsUsd?: Maybe<Scalars['BigInt']['output']>;
  heightCm?: Maybe<Scalars['Int']['output']>;
  highEstimateCents?: Maybe<Scalars['BigInt']['output']>;
  highEstimateCentsUsd?: Maybe<Scalars['BigInt']['output']>;
  id: Scalars['ID']['output'];
  location?: Maybe<Scalars['String']['output']>;
  lotNumber?: Maybe<Scalars['String']['output']>;
  lowEstimateCents?: Maybe<Scalars['BigInt']['output']>;
  lowEstimateCentsUsd?: Maybe<Scalars['BigInt']['output']>;
  mediumText?: Maybe<Scalars['String']['output']>;
  organization?: Maybe<Scalars['String']['output']>;
  priceRealizedCents?: Maybe<Scalars['BigInt']['output']>;
  priceRealizedCentsUsd?: Maybe<Scalars['BigInt']['output']>;
  saleDate?: Maybe<Scalars['String']['output']>;
  saleDateText?: Maybe<Scalars['String']['output']>;
  saleOverEstimatePercentage?: Maybe<Scalars['Float']['output']>;
  saleTitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  widthCm?: Maybe<Scalars['Int']['output']>;
};

export type AuctionResultsByArtistsConnection = {
  __typename?: 'AuctionResultsByArtistsConnection';
  edges?: Maybe<Array<Maybe<AuctionResultsByArtistsEdge>>>;
  nodes?: Maybe<Array<Maybe<AuctionResultsByArtists>>>;
  pageCursors?: Maybe<PageCursors>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type AuctionResultsByArtistsEdge = {
  __typename?: 'AuctionResultsByArtistsEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<AuctionResultsByArtists>;
};

export enum AuctionResultsState {
  All = 'ALL',
  Past = 'PAST',
  Upcoming = 'UPCOMING'
}

export enum AuctionSegmentationType {
  Adjacent = 'ADJACENT',
  Disengaged = 'DISENGAGED',
  Engaged = 'ENGAGED',
  New = 'NEW'
}

export enum AuctionState {
  Closed = 'CLOSED',
  Open = 'OPEN',
  Upcoming = 'UPCOMING'
}

export type AuctionsArtsyBidder = {
  __typename?: 'AuctionsArtsyBidder';
  id: Scalars['ID']['output'];
  paddleNumber: Scalars['ID']['output'];
  userId?: Maybe<Scalars['ID']['output']>;
};

export type AuctionsBidder = AuctionsArtsyBidder | AuctionsOfflineBidder;

export type AuctionsIncrementPolicy = {
  __typename?: 'AuctionsIncrementPolicy';
  changes: Array<AuctionsIncrementPolicyChange>;
  createdAt: Scalars['AuctionsDateTime']['output'];
  enumerate: Array<AuctionsMoney>;
  groupTag: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  initialIncrementCents: Scalars['Long']['output'];
  subgroupTag: Scalars['ID']['output'];
};


export type AuctionsIncrementPolicyEnumerateArgs = {
  from?: InputMaybe<Scalars['Long']['input']>;
  nextIncrementRule?: InputMaybe<AuctionsNextIncrementRule>;
  until?: InputMaybe<Scalars['Long']['input']>;
};

export type AuctionsIncrementPolicyChange = {
  __typename?: 'AuctionsIncrementPolicyChange';
  increment: AuctionsMoney;
  incrementCents: Scalars['Long']['output'];
  threshold: AuctionsMoney;
  thresholdCents: Scalars['Long']['output'];
};

export type AuctionsIncrementPolicyChangeInput = {
  incrementCents: Scalars['Long']['input'];
  thresholdCents: Scalars['Long']['input'];
};

export type AuctionsIncrementPolicyGroup = {
  __typename?: 'AuctionsIncrementPolicyGroup';
  groupTag: Scalars['ID']['output'];
  subgroupTags: Array<Scalars['ID']['output']>;
  subgroups: Array<AuctionsIncrementPolicySubgroup>;
};

export type AuctionsIncrementPolicySubgroup = {
  __typename?: 'AuctionsIncrementPolicySubgroup';
  group: AuctionsIncrementPolicyGroup;
  revisions: Array<AuctionsIncrementPolicy>;
  subgroupTag: Scalars['ID']['output'];
};

export type AuctionsLotStanding = AuctionsNode & {
  __typename?: 'AuctionsLotStanding';
  id: Scalars['ID']['output'];
  isHighestBidder: Scalars['Boolean']['output'];
  leadingBidAmount: AuctionsMoney;
  lot: AuctionsLotState;
  /** @deprecated prefer `lot` */
  lotState: AuctionsLotState;
  rawId: Scalars['String']['output'];
  saleArtwork?: Maybe<SaleArtwork>;
};

export type AuctionsLotStandingConnection = {
  __typename?: 'AuctionsLotStandingConnection';
  edges?: Maybe<Array<Maybe<AuctionsLotStandingEdge>>>;
  pageInfo: AuctionsPageInfo;
};

export type AuctionsLotStandingEdge = {
  __typename?: 'AuctionsLotStandingEdge';
  cursor: Scalars['String']['output'];
  node: AuctionsLotStanding;
};

export type AuctionsLotState = {
  __typename?: 'AuctionsLotState';
  bidCount: Scalars['Int']['output'];
  floorSellingPrice?: Maybe<Money>;
  floorSellingPriceCents?: Maybe<Scalars['Long']['output']>;
  floorWinningBidder?: Maybe<AuctionsBidder>;
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  onlineAskingPrice?: Maybe<Money>;
  onlineAskingPriceCents: Scalars['Long']['output'];
  onlineSellingToBidder?: Maybe<AuctionsBidder>;
  reserveStatus: AuctionsReserveStatus;
  saleId: Scalars['ID']['output'];
  sellingPrice?: Maybe<Money>;
  sellingPriceCents: Scalars['Long']['output'];
  soldStatus: AuctionsSoldStatus;
};

export type AuctionsMoney = {
  __typename?: 'AuctionsMoney';
  displayAmount: Scalars['String']['output'];
  units: Scalars['Long']['output'];
};


export type AuctionsMoneyDisplayAmountArgs = {
  decimalSeparator?: InputMaybe<Scalars['String']['input']>;
  fractionalDigits?: InputMaybe<Scalars['Int']['input']>;
  groupingSeparator?: InputMaybe<Scalars['String']['input']>;
  showFractionalDigits?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AuctionsNewIncrementPolicy = {
  __typename?: 'AuctionsNewIncrementPolicy';
  changes: Array<AuctionsIncrementPolicyChange>;
  enumeratedIncrements: Array<Array<AuctionsMoney>>;
  groupTag: Scalars['ID']['output'];
  id?: Maybe<Scalars['ID']['output']>;
  initialIncrementCents: Scalars['Long']['output'];
  maxPercentChange: Scalars['Float']['output'];
  minPercentChange: Scalars['Float']['output'];
  prettyPrintedIncrements: Array<Scalars['String']['output']>;
  subgroupTag: Scalars['ID']['output'];
  warnings: Array<Scalars['String']['output']>;
};


export type AuctionsNewIncrementPolicyPrettyPrintedIncrementsArgs = {
  fractionalDigits?: InputMaybe<Scalars['Int']['input']>;
};

export type AuctionsNewIncrementPolicyInput = {
  changes: Array<AuctionsIncrementPolicyChangeInput>;
  groupTag: Scalars['ID']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  initialIncrementCents: Scalars['Long']['input'];
  subgroupTag: Scalars['ID']['input'];
};

export enum AuctionsNextIncrementRule {
  AddToPastValue = 'AddToPastValue',
  SnapToPresetIncrements = 'SnapToPresetIncrements'
}

export type AuctionsNode = {
  id: Scalars['ID']['output'];
};

export type AuctionsOfflineBidder = {
  __typename?: 'AuctionsOfflineBidder';
  singletonDummyField?: Maybe<Scalars['String']['output']>;
};

export type AuctionsPageInfo = {
  __typename?: 'AuctionsPageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export enum AuctionsReserveStatus {
  NoReserve = 'NoReserve',
  ReserveMet = 'ReserveMet',
  ReserveNotMet = 'ReserveNotMet'
}

export type AuctionsSaleState = {
  __typename?: 'AuctionsSaleState';
  bannedUsers: Array<AuctionsUser>;
  currentLot?: Maybe<AuctionsLotState>;
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  lotIdsWithHigherArtsyBidNotWon: Array<Scalars['String']['output']>;
  lotIdsWithSameArtsyBidNotWon: Array<Scalars['String']['output']>;
  lotIdsWithoutFairWarning: Array<Scalars['String']['output']>;
  lotIdsWithoutFinalCall: Array<Scalars['String']['output']>;
  lots: Array<AuctionsLotState>;
  passedLotIdsWithArtsyBids: Array<Scalars['String']['output']>;
  reopenedLotIds: Array<Scalars['String']['output']>;
  totalSoldGMVCents: Scalars['Long']['output'];
};

export enum AuctionsSoldStatus {
  ForSale = 'ForSale',
  Passed = 'Passed',
  Sold = 'Sold'
}

export type AuctionsUser = AuctionsNode & {
  __typename?: 'AuctionsUser';
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  rawId: Scalars['String']['output'];
  userId: Scalars['ID']['output'];
};

export enum AuthenticationProvider {
  Apple = 'APPLE',
  Facebook = 'FACEBOOK',
  Google = 'GOOGLE'
}

export enum AuthenticationStatus {
  Invalid = 'INVALID',
  LoggedIn = 'LOGGED_IN',
  LoggedOut = 'LOGGED_OUT'
}

export type AuthenticationType = {
  __typename?: 'AuthenticationType';
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  provider: AuthenticationProvider;
  uid: Scalars['String']['output'];
};

export type Author = {
  __typename?: 'Author';
  articles: Array<Article>;
  articlesConnection?: Maybe<AuthorArticlesConnectionConnection>;
  bio?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Image>;
  initials?: Maybe<Scalars['String']['output']>;
  instagramHandle?: Maybe<Scalars['String']['output']>;
  internalID: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  role?: Maybe<Scalars['String']['output']>;
  twitterHandle?: Maybe<Scalars['String']['output']>;
};


export type AuthorArticlesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type AuthorBioArgs = {
  format?: InputMaybe<Format>;
};


export type AuthorInitialsArgs = {
  length?: InputMaybe<Scalars['Int']['input']>;
};

export type AuthorArticlesConnectionConnection = {
  __typename?: 'AuthorArticlesConnectionConnection';
  edges?: Maybe<Array<Maybe<AuthorArticlesConnectionEdge>>>;
  pageCursors: PageCursors;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type AuthorArticlesConnectionEdge = {
  __typename?: 'AuthorArticlesConnectionEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Article>;
};

export enum Availability {
  ForSale = 'FOR_SALE',
  NotForSale = 'NOT_FOR_SALE',
  OnHold = 'ON_HOLD',
  OnLoan = 'ON_LOAN',
  PermanentCollection = 'PERMANENT_COLLECTION',
  Sold = 'SOLD'
}

export type BackupSecondFactor = SecondFactor & {
  __typename?: 'BackupSecondFactor';
  code: Scalars['String']['output'];
  disabledAt?: Maybe<Scalars['String']['output']>;
  enabled: Scalars['Boolean']['output'];
  enabledAt?: Maybe<Scalars['String']['output']>;
  internalID: Scalars['ID']['output'];
  kind: SecondFactorKind;
};


export type BackupSecondFactorDisabledAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type BackupSecondFactorEnabledAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type BackupSecondFactors = {
  __typename?: 'BackupSecondFactors';
  secondFactors: Array<BackupSecondFactor>;
};

export type BackupSecondFactorsOrErrorsUnion = BackupSecondFactors | Errors;

export type BankAccount = {
  __typename?: 'BankAccount';
  accountHolderName?: Maybe<Scalars['String']['output']>;
  bankName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  last4: Scalars['String']['output'];
  type: BankAccountTypes;
};

export type BankAccountConnection = {
  __typename?: 'BankAccountConnection';
  edges?: Maybe<Array<Maybe<BankAccountEdge>>>;
  pageInfo: PageInfo;
};

export type BankAccountEdge = {
  __typename?: 'BankAccountEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<BankAccount>;
};

export type BankAccountMutationFailure = {
  __typename?: 'BankAccountMutationFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type BankAccountMutationSuccess = {
  __typename?: 'BankAccountMutationSuccess';
  bankAccount?: Maybe<BankAccount>;
  bankAccountEdge?: Maybe<BankAccountEdge>;
};

export type BankAccountMutationType = BankAccountMutationFailure | BankAccountMutationSuccess;

export enum BankAccountTypes {
  SepaDebit = 'SEPA_DEBIT',
  UsBankAccount = 'US_BANK_ACCOUNT'
}

export type BidIncrement = {
  __typename?: 'BidIncrement';
  amount?: Maybe<Scalars['Int']['output']>;
  from?: Maybe<Scalars['Int']['output']>;
  to?: Maybe<Scalars['Int']['output']>;
};

export type BidIncrementsFormatted = {
  __typename?: 'BidIncrementsFormatted';
  cents?: Maybe<Scalars['Float']['output']>;
  display?: Maybe<Scalars['String']['output']>;
};

export type Bidder = Node & {
  __typename?: 'Bidder';
  createdAt?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  pin?: Maybe<Scalars['String']['output']>;
  qualifiedForBidding?: Maybe<Scalars['Boolean']['output']>;
  sale?: Maybe<Sale>;
  user?: Maybe<User>;
};


export type BidderCreatedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type BidderPosition = {
  __typename?: 'BidderPosition';
  createdAt?: Maybe<Scalars['String']['output']>;
  highestBid?: Maybe<HighestBid>;
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  isRetracted?: Maybe<Scalars['Boolean']['output']>;
  isWinning?: Maybe<Scalars['Boolean']['output']>;
  isWithBidMax?: Maybe<Scalars['Boolean']['output']>;
  maxBid?: Maybe<BidderPositionMaxBid>;
  processedAt?: Maybe<Scalars['String']['output']>;
  saleArtwork?: Maybe<SaleArtwork>;
  suggestedNextBid?: Maybe<BidderPositionSuggestedNextBid>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};


export type BidderPositionCreatedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type BidderPositionProcessedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type BidderPositionUpdatedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type BidderPositionInput = {
  artworkID: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  maxBidAmountCents: Scalars['Float']['input'];
  saleID: Scalars['String']['input'];
};

export type BidderPositionMaxBid = {
  __typename?: 'BidderPositionMaxBid';
  amount?: Maybe<Scalars['String']['output']>;
  cents?: Maybe<Scalars['Float']['output']>;
  display?: Maybe<Scalars['String']['output']>;
};


export type BidderPositionMaxBidAmountArgs = {
  decimal?: InputMaybe<Scalars['String']['input']>;
  disambiguate?: InputMaybe<Scalars['Boolean']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  precision?: InputMaybe<Scalars['Int']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  thousand?: InputMaybe<Scalars['String']['input']>;
};

export type BidderPositionPayload = {
  __typename?: 'BidderPositionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  result?: Maybe<BidderPositionResult>;
};

export type BidderPositionResult = {
  __typename?: 'BidderPositionResult';
  messageDescriptionMD?: Maybe<Scalars['String']['output']>;
  messageHeader?: Maybe<Scalars['String']['output']>;
  position?: Maybe<BidderPosition>;
  rawError?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
};

export type BidderPositionSuggestedNextBid = {
  __typename?: 'BidderPositionSuggestedNextBid';
  amount?: Maybe<Scalars['String']['output']>;
  cents?: Maybe<Scalars['Float']['output']>;
  display?: Maybe<Scalars['String']['output']>;
};


export type BidderPositionSuggestedNextBidAmountArgs = {
  decimal?: InputMaybe<Scalars['String']['input']>;
  disambiguate?: InputMaybe<Scalars['Boolean']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  precision?: InputMaybe<Scalars['Int']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  thousand?: InputMaybe<Scalars['String']['input']>;
};

export type BulkAddArtworksToShowMutationFailure = {
  __typename?: 'BulkAddArtworksToShowMutationFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type BulkAddArtworksToShowMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<BulkArtworkFilterInput>;
  id: Scalars['String']['input'];
  showId: Scalars['String']['input'];
  source?: InputMaybe<BulkUpdateSourceEnum>;
};

export type BulkAddArtworksToShowMutationPayload = {
  __typename?: 'BulkAddArtworksToShowMutationPayload';
  bulkAddArtworksToShowOrError?: Maybe<BulkAddArtworksToShowMutationType>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type BulkAddArtworksToShowMutationSuccess = {
  __typename?: 'BulkAddArtworksToShowMutationSuccess';
  skippedPartnerArtworks?: Maybe<BulkAddArtworksToShowResponse>;
  updatedPartnerArtworks?: Maybe<BulkAddArtworksToShowResponse>;
};

export type BulkAddArtworksToShowMutationType = BulkAddArtworksToShowMutationFailure | BulkAddArtworksToShowMutationSuccess;

export type BulkAddArtworksToShowResponse = {
  __typename?: 'BulkAddArtworksToShowResponse';
  count?: Maybe<Scalars['Int']['output']>;
  ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type BulkArtworkFilterInput = {
  artistId?: InputMaybe<Scalars['String']['input']>;
  artworkIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  availability?: InputMaybe<Availability>;
  locationId?: InputMaybe<Scalars['String']['input']>;
  partnerArtistId?: InputMaybe<Scalars['String']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BulkUpdateArtworksMetadataInput = {
  artistIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  availability?: InputMaybe<Availability>;
  category?: InputMaybe<Scalars['String']['input']>;
  domesticShippingFeeCents?: InputMaybe<Scalars['Int']['input']>;
  ecommerce?: InputMaybe<Scalars['Boolean']['input']>;
  locationId?: InputMaybe<Scalars['String']['input']>;
  medium?: InputMaybe<Scalars['String']['input']>;
  offer?: InputMaybe<Scalars['Boolean']['input']>;
  priceAdjustment?: InputMaybe<Scalars['Int']['input']>;
  priceListed?: InputMaybe<Scalars['Float']['input']>;
  provenance?: InputMaybe<Scalars['String']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  signature?: InputMaybe<Scalars['String']['input']>;
};

export type BulkUpdateArtworksMetadataMutationFailure = {
  __typename?: 'BulkUpdateArtworksMetadataMutationFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type BulkUpdateArtworksMetadataMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<BulkArtworkFilterInput>;
  id: Scalars['String']['input'];
  metadata?: InputMaybe<BulkUpdateArtworksMetadataInput>;
  source?: InputMaybe<BulkUpdateSourceEnum>;
};

export type BulkUpdateArtworksMetadataMutationPayload = {
  __typename?: 'BulkUpdateArtworksMetadataMutationPayload';
  bulkUpdateArtworksMetadataOrError?: Maybe<BulkUpdateArtworksMetadataMutationType>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type BulkUpdateArtworksMetadataMutationSuccess = {
  __typename?: 'BulkUpdateArtworksMetadataMutationSuccess';
  skippedPartnerArtworks?: Maybe<BulkUpdateArtworksMetadataResponse>;
  updatedPartnerArtworks?: Maybe<BulkUpdateArtworksMetadataResponse>;
};

export type BulkUpdateArtworksMetadataMutationType = BulkUpdateArtworksMetadataMutationFailure | BulkUpdateArtworksMetadataMutationSuccess;

export type BulkUpdateArtworksMetadataResponse = {
  __typename?: 'BulkUpdateArtworksMetadataResponse';
  count?: Maybe<Scalars['Int']['output']>;
  ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export enum BulkUpdateSourceEnum {
  Admin = 'ADMIN',
  ArtworksList = 'ARTWORKS_LIST',
  PartnerArtistArtworksList = 'PARTNER_ARTIST_ARTWORKS_LIST',
  ShowArtworksList = 'SHOW_ARTWORKS_LIST'
}

export type BuyersPremium = {
  __typename?: 'BuyersPremium';
  amount?: Maybe<Scalars['String']['output']>;
  cents?: Maybe<Scalars['Int']['output']>;
  percent?: Maybe<Scalars['Float']['output']>;
};


export type BuyersPremiumAmountArgs = {
  decimal?: InputMaybe<Scalars['String']['input']>;
  disambiguate?: InputMaybe<Scalars['Boolean']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  precision?: InputMaybe<Scalars['Int']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  thousand?: InputMaybe<Scalars['String']['input']>;
};

export type CalculatedCost = {
  __typename?: 'CalculatedCost';
  bidAmount?: Maybe<Money>;
  buyersPremium?: Maybe<Money>;
  subtotal?: Maybe<Money>;
};

export type CalendarYearMarketPriceInsights = {
  __typename?: 'CalendarYearMarketPriceInsights';
  artistId?: Maybe<Scalars['ID']['output']>;
  artistName?: Maybe<Scalars['String']['output']>;
  averageSalePrice?: Maybe<Scalars['BigInt']['output']>;
  createdAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  id: Scalars['ID']['output'];
  lotsSold?: Maybe<Scalars['BigInt']['output']>;
  medianSalePrice?: Maybe<Scalars['BigInt']['output']>;
  medium?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  valueSold?: Maybe<Scalars['BigInt']['output']>;
  year: Scalars['String']['output'];
};

export type CalendarYearPriceInsights = {
  __typename?: 'CalendarYearPriceInsights';
  calendarYearMarketPriceInsights?: Maybe<Array<CalendarYearMarketPriceInsights>>;
  medium: Scalars['String']['output'];
};

export type CancelArtworkImportFailure = {
  __typename?: 'CancelArtworkImportFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type CancelArtworkImportInput = {
  artworkImportID: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type CancelArtworkImportPayload = {
  __typename?: 'CancelArtworkImportPayload';
  cancelArtworkImportOrError?: Maybe<CancelArtworkImportResponseOrError>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type CancelArtworkImportResponseOrError = CancelArtworkImportFailure | CancelArtworkImportSuccess;

export type CancelArtworkImportSuccess = {
  __typename?: 'CancelArtworkImportSuccess';
  artworkImport?: Maybe<ArtworkImport>;
};

export type Card = {
  __typename?: 'Card';
  displayBrand: Scalars['String']['output'];
  last4: Scalars['String']['output'];
};

export type CareerHighlight = Node & {
  __typename?: 'CareerHighlight';
  artist: Artist;
  collected: Scalars['Boolean']['output'];
  group: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  partner: Partner;
  solo: Scalars['Boolean']['output'];
  venue: Scalars['String']['output'];
};

export type CausalityLotState = {
  __typename?: 'CausalityLotState';
  bidCount?: Maybe<Scalars['Int']['output']>;
  floorSellingPrice?: Maybe<Money>;
  floorSellingPriceCents?: Maybe<Scalars['Int']['output']>;
  internalID?: Maybe<Scalars['String']['output']>;
  onlineAskingPrice?: Maybe<Money>;
  onlineAskingPriceCents?: Maybe<Scalars['Int']['output']>;
  reserveStatus?: Maybe<Scalars['String']['output']>;
  saleId?: Maybe<Scalars['String']['output']>;
  sellingPrice?: Maybe<Money>;
  sellingPriceCents?: Maybe<Scalars['Int']['output']>;
  soldStatus?: Maybe<Scalars['String']['output']>;
};

export type CertificateOfAuthenticityDetails = {
  __typename?: 'CertificateOfAuthenticityDetails';
  coaByAuthenticatingBody?: Maybe<Scalars['Boolean']['output']>;
  coaByGallery?: Maybe<Scalars['Boolean']['output']>;
};

export type Channel = {
  __typename?: 'Channel';
  articlesConnection?: Maybe<ArticleConnection>;
  id: Scalars['ID']['output'];
  image?: Maybe<Image>;
  internalID: Scalars['ID']['output'];
  links: Array<ChannelLink>;
  name: Scalars['String']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  tagline?: Maybe<Scalars['String']['output']>;
  type: ChannelType;
};


export type ChannelArticlesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<ArticleSorts>;
};

export type ChannelLink = {
  __typename?: 'ChannelLink';
  text: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export enum ChannelType {
  Editorial = 'Editorial',
  Support = 'Support',
  Team = 'Team'
}

export type City = {
  __typename?: 'City';
  coordinates?: Maybe<LatLng>;
  fairsConnection?: Maybe<FairConnection>;
  fullName: Scalars['String']['output'];
  name: Scalars['String']['output'];
  showsConnection?: Maybe<ShowConnection>;
  slug: Scalars['String']['output'];
  sponsoredContent?: Maybe<CitySponsoredContent>;
};


export type CityFairsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<FairSorts>;
  status?: InputMaybe<EventStatus>;
};


export type CityShowsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  dayThreshold?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeStubShows?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  partnerType?: InputMaybe<PartnerShowPartnerType>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<ShowSorts>;
  status?: InputMaybe<EventStatus>;
};

export type CitySponsoredContent = {
  __typename?: 'CitySponsoredContent';
  artGuideUrl?: Maybe<Scalars['String']['output']>;
  featuredShows?: Maybe<Array<Maybe<Show>>>;
  introText?: Maybe<Scalars['String']['output']>;
  showsConnection?: Maybe<ShowConnection>;
};


export type CitySponsoredContentShowsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<ShowSorts>;
  status?: InputMaybe<EventStatus>;
};

export type ClientFeatureFlag = {
  __typename?: 'ClientFeatureFlag';
  description?: Maybe<Scalars['String']['output']>;
  enabled: Scalars['String']['output'];
  name: Scalars['String']['output'];
  variant?: Maybe<Scalars['String']['output']>;
  variants?: Maybe<Array<Maybe<ClientFeatureFlagVariant>>>;
};

export type ClientFeatureFlagVariant = {
  __typename?: 'ClientFeatureFlagVariant';
  name: Scalars['String']['output'];
  stickiness?: Maybe<Scalars['String']['output']>;
  weight: Scalars['Int']['output'];
};

export type Collection = {
  __typename?: 'Collection';
  artworksConnection?: Maybe<ArtworkConnection>;
  artworksCount: Scalars['Int']['output'];
  default: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  isSavedArtwork: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  private: Scalars['Boolean']['output'];
  saves: Scalars['Boolean']['output'];
  shareableWithPartners: Scalars['Boolean']['output'];
  slug?: Maybe<Scalars['String']['output']>;
};


export type CollectionArtworksConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forSale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  priceMax?: InputMaybe<Scalars['Int']['input']>;
  priceMin?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<CollectionArtworkSorts>;
};


export type CollectionArtworksCountArgs = {
  onlyVisible?: InputMaybe<Scalars['Boolean']['input']>;
};


export type CollectionIsSavedArtworkArgs = {
  artworkID: Scalars['String']['input'];
};

export enum CollectionArtworkSorts {
  PositionAsc = 'POSITION_ASC',
  PositionDesc = 'POSITION_DESC',
  SavedAtAsc = 'SAVED_AT_ASC',
  SavedAtDesc = 'SAVED_AT_DESC'
}

export enum CollectionSorts {
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC'
}

export type CollectionsConnection = {
  __typename?: 'CollectionsConnection';
  edges?: Maybe<Array<Maybe<CollectionsEdge>>>;
  pageCursors: PageCursors;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type CollectionsEdge = {
  __typename?: 'CollectionsEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Collection>;
};

export type CollectorProfileType = Node & {
  __typename?: 'CollectorProfileType';
  artsyUserSince?: Maybe<Scalars['String']['output']>;
  bio?: Maybe<Scalars['String']['output']>;
  collectedArtworksCount: Scalars['Int']['output'];
  collectorLevel?: Maybe<Scalars['Int']['output']>;
  companyName?: Maybe<Scalars['String']['output']>;
  companyWebsite?: Maybe<Scalars['String']['output']>;
  confirmedBuyerAt?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  /** @deprecated emailConfirmed is going to be removed, use isEmailConfirmed instead */
  emailConfirmed?: Maybe<Scalars['Boolean']['output']>;
  firstNameLastInitial?: Maybe<Scalars['String']['output']>;
  followedArtistsCount: Scalars['Int']['output'];
  icon?: Maybe<Image>;
  id: Scalars['ID']['output'];
  /** @deprecated identityVerified is going to be removed, use isIdentityVerified instead */
  identityVerified?: Maybe<Scalars['Boolean']['output']>;
  initials?: Maybe<Scalars['String']['output']>;
  inquiryRequestsCount: Scalars['Int']['output'];
  institutionalAffiliations?: Maybe<Scalars['String']['output']>;
  intents?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  interestsConnection?: Maybe<UserInterestConnection>;
  internalID: Scalars['ID']['output'];
  isActiveBidder?: Maybe<Scalars['Boolean']['output']>;
  isActiveInquirer?: Maybe<Scalars['Boolean']['output']>;
  isEmailConfirmed?: Maybe<Scalars['Boolean']['output']>;
  isIdentityVerified?: Maybe<Scalars['Boolean']['output']>;
  isProfileComplete?: Maybe<Scalars['Boolean']['output']>;
  lastUpdatePromptAt?: Maybe<Scalars['String']['output']>;
  location?: Maybe<MyLocation>;
  loyaltyApplicantAt?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  otherRelevantPositions?: Maybe<Scalars['String']['output']>;
  owner: User;
  ownerID: Scalars['ID']['output'];
  partnerEngagement?: Maybe<PartnerEngagement>;
  privacy?: Maybe<Scalars['String']['output']>;
  profession?: Maybe<Scalars['String']['output']>;
  professionalBuyerAppliedAt?: Maybe<Scalars['String']['output']>;
  professionalBuyerAt?: Maybe<Scalars['String']['output']>;
  savedArtworksCount: Scalars['Int']['output'];
  selfReportedPurchases?: Maybe<Scalars['String']['output']>;
  summaryParagraph?: Maybe<Scalars['String']['output']>;
  totalBidsCount: Scalars['Int']['output'];
  /** @deprecated Use "owner#interestsConnection" field instead. */
  userInterests: Array<Maybe<UserInterest>>;
};


export type CollectorProfileTypeArtsyUserSinceArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type CollectorProfileTypeConfirmedBuyerAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type CollectorProfileTypeInitialsArgs = {
  length?: InputMaybe<Scalars['Int']['input']>;
};


export type CollectorProfileTypeInterestsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type CollectorProfileTypeLastUpdatePromptAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type CollectorProfileTypeLoyaltyApplicantAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type CollectorProfileTypePartnerEngagementArgs = {
  partnerID: Scalars['ID']['input'];
};


export type CollectorProfileTypeProfessionalBuyerAppliedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type CollectorProfileTypeProfessionalBuyerAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type CollectorProfileTypeSummaryParagraphArgs = {
  artworkID?: InputMaybe<Scalars['String']['input']>;
};

export type CollectorProfileTypeConnection = {
  __typename?: 'CollectorProfileTypeConnection';
  edges?: Maybe<Array<Maybe<CollectorProfileTypeEdge>>>;
  pageCursors: PageCursors;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type CollectorProfileTypeEdge = {
  __typename?: 'CollectorProfileTypeEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<CollectorProfileType>;
};

export type CollectorProfileUpdatePromptNotificationItem = {
  __typename?: 'CollectorProfileUpdatePromptNotificationItem';
  collectorProfile: CollectorProfileType;
  me: Me;
};

export type CollectorResume = {
  __typename?: 'CollectorResume';
  buyerActivity?: Maybe<CommerceBuyerActivity>;
  collectorProfile: CollectorProfileType;
  isCollectorFollowingPartner: Scalars['Boolean']['output'];
  purchases?: Maybe<Purchases>;
  userId: Scalars['String']['output'];
};

export type CollectorSignals = {
  __typename?: 'CollectorSignals';
  auction?: Maybe<AuctionCollectorSignals>;
  /** @deprecated Use nested field in `auction` instead */
  bidCount?: Maybe<Scalars['Int']['output']>;
  curatorsPick?: Maybe<Scalars['Boolean']['output']>;
  increasedInterest: Scalars['Boolean']['output'];
  /** @deprecated Use nested field in `auction` instead */
  liveBiddingStarted?: Maybe<Scalars['Boolean']['output']>;
  /** @deprecated Use nested field in `auction` instead */
  liveStartAt?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use nested field in `auction` instead */
  lotClosesAt?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use nested field in `auction` instead */
  lotWatcherCount?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use nested field in `auction` instead */
  onlineBiddingExtended?: Maybe<Scalars['Boolean']['output']>;
  partnerOffer?: Maybe<PartnerOfferToCollector>;
  primaryLabel?: Maybe<LabelSignalEnum>;
  /** @deprecated Use nested field in `auction` instead */
  registrationEndsAt?: Maybe<Scalars['String']['output']>;
  runningShow?: Maybe<Show>;
};


export type CollectorSignalsPrimaryLabelArgs = {
  ignore?: InputMaybe<Array<InputMaybe<LabelSignalEnum>>>;
};

export type CommerceActionOrFailureUnion = CommerceOrderRequiresAction | CommerceOrderWithMutationFailure;

export type CommerceAddInitialOfferToOrderInput = {
  amountCents: Scalars['Int']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  orderId: Scalars['ID']['input'];
};

export type CommerceAddInitialOfferToOrderPayload = {
  __typename?: 'CommerceAddInitialOfferToOrderPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  orderOrError: CommerceOrderOrFailureUnion;
};

export type CommerceApplicationError = {
  __typename?: 'CommerceApplicationError';
  code: Scalars['String']['output'];
  data?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type CommerceApproveOrderInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  shippingContact?: InputMaybe<CommerceShippingContactAttributes>;
};

export type CommerceApproveOrderPayload = {
  __typename?: 'CommerceApproveOrderPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  orderOrError: CommerceOrderOrFailureUnion;
};

export type CommerceBankAccountBalance = {
  __typename?: 'CommerceBankAccountBalance';
  balanceCents?: Maybe<Scalars['Int']['output']>;
  currencyCode?: Maybe<Scalars['String']['output']>;
};

export type CommerceBuyOrder = CommerceOrder & {
  __typename?: 'CommerceBuyOrder';
  artsyCollectsTaxes?: Maybe<Scalars['Boolean']['output']>;
  artsyRemitsTaxes?: Maybe<Scalars['Boolean']['output']>;
  artsyTotal?: Maybe<Scalars['String']['output']>;
  artsyTotalCents?: Maybe<Scalars['Int']['output']>;
  artworkDetails?: Maybe<Scalars['String']['output']>;
  availablePaymentMethods: Array<CommercePaymentMethodEnum>;
  bankAccountId?: Maybe<Scalars['String']['output']>;
  buyer: CommerceOrderPartyUnion;
  buyerDetails?: Maybe<OrderParty>;
  buyerPhoneNumber?: Maybe<Scalars['String']['output']>;
  buyerPhoneNumberCountryCode?: Maybe<Scalars['String']['output']>;
  buyerProfile?: Maybe<CollectorProfileType>;
  buyerTotal?: Maybe<Scalars['String']['output']>;
  buyerTotalCents?: Maybe<Scalars['Int']['output']>;
  code: Scalars['String']['output'];
  commissionFee?: Maybe<Scalars['String']['output']>;
  commissionFeeCents?: Maybe<Scalars['Int']['output']>;
  commissionRate?: Maybe<Scalars['Float']['output']>;
  conditionsOfSale?: Maybe<Scalars['String']['output']>;
  conversation?: Maybe<Conversation>;
  createdAt: Scalars['String']['output'];
  creditCard?: Maybe<CreditCard>;
  creditCardId?: Maybe<Scalars['String']['output']>;
  creditCardWalletType?: Maybe<Scalars['String']['output']>;
  currencyCode: Scalars['String']['output'];
  displayCommissionRate?: Maybe<Scalars['String']['output']>;
  displayState: CommerceOrderDisplayStateEnum;
  id: Scalars['ID']['output'];
  impulseConversationId?: Maybe<Scalars['String']['output']>;
  internalID: Scalars['ID']['output'];
  itemsTotal?: Maybe<Scalars['String']['output']>;
  itemsTotalCents?: Maybe<Scalars['Int']['output']>;
  lastApprovedAt?: Maybe<Scalars['String']['output']>;
  lastSubmittedAt?: Maybe<Scalars['String']['output']>;
  lastTransactionFailed?: Maybe<Scalars['Boolean']['output']>;
  lastTransactionFailureCode?: Maybe<Scalars['String']['output']>;
  lineItems?: Maybe<CommerceLineItemConnection>;
  mode?: Maybe<CommerceOrderModeEnum>;
  orderHistory: Array<CommerceOrderEventUnion>;
  orderUpdateState?: Maybe<Scalars['String']['output']>;
  paymentMethod?: Maybe<CommercePaymentMethodEnum>;
  paymentMethodDetails?: Maybe<PaymentMethodUnion>;
  paymentSet: Scalars['Boolean']['output'];
  requestedFulfillment?: Maybe<CommerceRequestedFulfillmentUnion>;
  requireIdentityVerification: Scalars['Boolean']['output'];
  seller: CommerceOrderPartyUnion;
  sellerDetails?: Maybe<OrderParty>;
  sellerTotal?: Maybe<Scalars['String']['output']>;
  sellerTotalCents?: Maybe<Scalars['Int']['output']>;
  shippingRadius?: Maybe<Scalars['String']['output']>;
  shippingTotal?: Maybe<Scalars['String']['output']>;
  shippingTotalCents?: Maybe<Scalars['Int']['output']>;
  source: CommerceOrderSourceEnum;
  state: CommerceOrderStateEnum;
  stateExpiresAt?: Maybe<Scalars['String']['output']>;
  stateReason?: Maybe<Scalars['String']['output']>;
  stateUpdatedAt?: Maybe<Scalars['String']['output']>;
  stripeConfirmationToken?: Maybe<Scalars['String']['output']>;
  taxTotal?: Maybe<Scalars['String']['output']>;
  taxTotalCents?: Maybe<Scalars['Int']['output']>;
  taxTypes: Array<CommerceTaxTypeEnum>;
  totalListPrice?: Maybe<Scalars['String']['output']>;
  totalListPriceCents: Scalars['Int']['output'];
  transactionFee?: Maybe<Scalars['String']['output']>;
  transactionFeeCents?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['String']['output'];
};


export type CommerceBuyOrderArtsyTotalArgs = {
  decimal?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  precision?: InputMaybe<Scalars['Int']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  thousand?: InputMaybe<Scalars['String']['input']>;
};


export type CommerceBuyOrderBuyerTotalArgs = {
  decimal?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  precision?: InputMaybe<Scalars['Int']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  thousand?: InputMaybe<Scalars['String']['input']>;
};


export type CommerceBuyOrderCommissionFeeArgs = {
  decimal?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  precision?: InputMaybe<Scalars['Int']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  thousand?: InputMaybe<Scalars['String']['input']>;
};


export type CommerceBuyOrderCreatedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type CommerceBuyOrderItemsTotalArgs = {
  decimal?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  precision?: InputMaybe<Scalars['Int']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  thousand?: InputMaybe<Scalars['String']['input']>;
};


export type CommerceBuyOrderLastApprovedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type CommerceBuyOrderLastSubmittedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type CommerceBuyOrderLineItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type CommerceBuyOrderSellerTotalArgs = {
  decimal?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  precision?: InputMaybe<Scalars['Int']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  thousand?: InputMaybe<Scalars['String']['input']>;
};


export type CommerceBuyOrderShippingTotalArgs = {
  decimal?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  precision?: InputMaybe<Scalars['Int']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  thousand?: InputMaybe<Scalars['String']['input']>;
};


export type CommerceBuyOrderStateExpiresAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type CommerceBuyOrderStateUpdatedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type CommerceBuyOrderTaxTotalArgs = {
  decimal?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  precision?: InputMaybe<Scalars['Int']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  thousand?: InputMaybe<Scalars['String']['input']>;
};


export type CommerceBuyOrderTotalListPriceArgs = {
  decimal?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  precision?: InputMaybe<Scalars['Int']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  thousand?: InputMaybe<Scalars['String']['input']>;
};


export type CommerceBuyOrderTransactionFeeArgs = {
  decimal?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  precision?: InputMaybe<Scalars['Int']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  thousand?: InputMaybe<Scalars['String']['input']>;
};


export type CommerceBuyOrderUpdatedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type CommerceBuyerAcceptOfferInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  offerId: Scalars['ID']['input'];
};

export type CommerceBuyerAcceptOfferPayload = {
  __typename?: 'CommerceBuyerAcceptOfferPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  orderOrError: CommerceOrderOrFailureUnion;
};

export type CommerceBuyerActivity = {
  __typename?: 'CommerceBuyerActivity';
  totalPurchases: Scalars['Int']['output'];
};

export type CommerceBuyerCounterOfferInput = {
  amountCents: Scalars['Int']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  offerId: Scalars['ID']['input'];
};

export type CommerceBuyerCounterOfferPayload = {
  __typename?: 'CommerceBuyerCounterOfferPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  orderOrError: CommerceOrderOrFailureUnion;
};

export enum CommerceBuyerOfferActionEnum {
  OfferAccepted = 'OFFER_ACCEPTED',
  OfferAcceptedConfirmNeeded = 'OFFER_ACCEPTED_CONFIRM_NEEDED',
  OfferReceived = 'OFFER_RECEIVED',
  OfferReceivedConfirmNeeded = 'OFFER_RECEIVED_CONFIRM_NEEDED',
  PaymentFailed = 'PAYMENT_FAILED',
  ProvisionalOfferAccepted = 'PROVISIONAL_OFFER_ACCEPTED'
}

export type CommerceBuyerRejectOfferInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  offerId: Scalars['ID']['input'];
  rejectReason?: InputMaybe<CommerceCancelReasonTypeEnum>;
};

export type CommerceBuyerRejectOfferPayload = {
  __typename?: 'CommerceBuyerRejectOfferPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  orderOrError: CommerceOrderOrFailureUnion;
};

export enum CommerceCancelReasonTypeEnum {
  AdminCanceled = 'ADMIN_CANCELED',
  AdminFailedReview = 'ADMIN_FAILED_REVIEW',
  BuyerLapsed = 'BUYER_LAPSED',
  BuyerRejected = 'BUYER_REJECTED',
  FundsNotReceived = 'FUNDS_NOT_RECEIVED',
  SellerLapsed = 'SELLER_LAPSED',
  SellerRejected = 'SELLER_REJECTED',
  SellerRejectedArtworkUnavailable = 'SELLER_REJECTED_ARTWORK_UNAVAILABLE',
  SellerRejectedOfferTooLow = 'SELLER_REJECTED_OFFER_TOO_LOW',
  SellerRejectedOther = 'SELLER_REJECTED_OTHER',
  SellerRejectedShippingUnavailable = 'SELLER_REJECTED_SHIPPING_UNAVAILABLE'
}

export type CommerceConfirmFulfillmentInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type CommerceConfirmFulfillmentPayload = {
  __typename?: 'CommerceConfirmFulfillmentPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  orderOrError: CommerceOrderOrFailureUnion;
};

export type CommerceConfirmPickupInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type CommerceConfirmPickupPayload = {
  __typename?: 'CommerceConfirmPickupPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  orderOrError: CommerceOrderOrFailureUnion;
};

export type CommerceCreateBankDebitSetupForOrderInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type CommerceCreateBankDebitSetupForOrderPayload = {
  __typename?: 'CommerceCreateBankDebitSetupForOrderPayload';
  actionOrError: CommerceActionOrFailureUnion;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type CommerceCreateInquiryOfferOrderWithArtworkInput = {
  artworkId: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  editionSetId?: InputMaybe<Scalars['String']['input']>;
  findActiveOrCreate?: InputMaybe<Scalars['Boolean']['input']>;
  impulseConversationId: Scalars['String']['input'];
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

export type CommerceCreateInquiryOfferOrderWithArtworkPayload = {
  __typename?: 'CommerceCreateInquiryOfferOrderWithArtworkPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  orderOrError: CommerceOrderOrFailureUnion;
};

export type CommerceCreateInquiryOrderWithArtworkInput = {
  artworkId: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  editionSetId?: InputMaybe<Scalars['String']['input']>;
  impulseConversationId: Scalars['String']['input'];
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

export type CommerceCreateInquiryOrderWithArtworkPayload = {
  __typename?: 'CommerceCreateInquiryOrderWithArtworkPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  orderOrError: CommerceOrderOrFailureUnion;
};

export type CommerceCreateOfferOrderWithArtworkInput = {
  artworkId: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  editionSetId?: InputMaybe<Scalars['String']['input']>;
  findActiveOrCreate?: InputMaybe<Scalars['Boolean']['input']>;
  partnerOfferId?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

export type CommerceCreateOfferOrderWithArtworkPayload = {
  __typename?: 'CommerceCreateOfferOrderWithArtworkPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  orderOrError: CommerceOrderOrFailureUnion;
};

export type CommerceCreateOrderWithArtworkInput = {
  artworkId: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  editionSetId?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

export type CommerceCreateOrderWithArtworkPayload = {
  __typename?: 'CommerceCreateOrderWithArtworkPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  orderOrError: CommerceOrderOrFailureUnion;
};

export type CommerceCreatePartnerOfferOrderInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  editionSetId?: InputMaybe<Scalars['String']['input']>;
  impulseConversationId?: InputMaybe<Scalars['String']['input']>;
  partnerOfferId: Scalars['String']['input'];
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

export type CommerceCreatePartnerOfferOrderPayload = {
  __typename?: 'CommerceCreatePartnerOfferOrderPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  orderOrError: CommerceOrderOrFailureUnion;
};

export enum CommerceEeiFormStatusEnum {
  Approved = 'APPROVED',
  Cleared = 'CLEARED',
  Pending = 'PENDING',
  Rejected = 'REJECTED',
  Submitted = 'SUBMITTED'
}

export type CommerceEventInterface = {
  createdAt: Scalars['String']['output'];
};


export type CommerceEventInterfaceCreatedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type CommerceFixFailedPaymentInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  creditCardId: Scalars['String']['input'];
  offerId?: InputMaybe<Scalars['ID']['input']>;
  orderId?: InputMaybe<Scalars['ID']['input']>;
};

export type CommerceFixFailedPaymentPayload = {
  __typename?: 'CommerceFixFailedPaymentPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  orderOrError: CommerceOrderOrFailureUnion;
};

export type CommerceFulfillAtOnceInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  fulfillment: CommerceFulfillmentAttributes;
  id: Scalars['ID']['input'];
};

export type CommerceFulfillAtOncePayload = {
  __typename?: 'CommerceFulfillAtOncePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  orderOrError: CommerceOrderOrFailureUnion;
};

export type CommerceFulfillment = {
  __typename?: 'CommerceFulfillment';
  courier: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  estimatedDelivery: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  trackingId?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['String']['output'];
};


export type CommerceFulfillmentCreatedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type CommerceFulfillmentEstimatedDeliveryArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type CommerceFulfillmentUpdatedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type CommerceFulfillmentAttributes = {
  courier: Scalars['String']['input'];
  estimatedDelivery?: InputMaybe<Scalars['CommerceDate']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  trackingId?: InputMaybe<Scalars['String']['input']>;
};

export type CommerceFulfillmentConnection = {
  __typename?: 'CommerceFulfillmentConnection';
  edges?: Maybe<Array<Maybe<CommerceFulfillmentEdge>>>;
  nodes?: Maybe<Array<Maybe<CommerceFulfillment>>>;
  pageInfo: CommercePageInfo;
};

export type CommerceFulfillmentEdge = {
  __typename?: 'CommerceFulfillmentEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<CommerceFulfillment>;
};

export type CommerceLineItem = {
  __typename?: 'CommerceLineItem';
  artwork?: Maybe<Artwork>;
  artworkId: Scalars['String']['output'];
  artworkOrEditionSet?: Maybe<ArtworkOrEditionSetType>;
  artworkVersion?: Maybe<ArtworkVersion>;
  artworkVersionId: Scalars['String']['output'];
  commissionFee?: Maybe<Scalars['String']['output']>;
  commissionFeeCents?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['String']['output'];
  editionSetId?: Maybe<Scalars['String']['output']>;
  fulfillments?: Maybe<CommerceFulfillmentConnection>;
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  listPrice?: Maybe<Scalars['String']['output']>;
  listPriceCents: Scalars['Int']['output'];
  order: CommerceOrder;
  /** @deprecated switch to use listPriceCents */
  priceCents: Scalars['Int']['output'];
  quantity: Scalars['Int']['output'];
  selectedShippingQuote?: Maybe<CommerceShippingQuote>;
  shipment?: Maybe<CommerceShipment>;
  shippingQuoteOptions?: Maybe<CommerceShippingQuoteConnection>;
  shippingTotal?: Maybe<Scalars['String']['output']>;
  shippingTotalCents?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['String']['output'];
};


export type CommerceLineItemCommissionFeeArgs = {
  decimal?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  precision?: InputMaybe<Scalars['Int']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  thousand?: InputMaybe<Scalars['String']['input']>;
};


export type CommerceLineItemCreatedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type CommerceLineItemFulfillmentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type CommerceLineItemListPriceArgs = {
  decimal?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  precision?: InputMaybe<Scalars['Int']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  thousand?: InputMaybe<Scalars['String']['input']>;
};


export type CommerceLineItemShippingQuoteOptionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type CommerceLineItemShippingTotalArgs = {
  decimal?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  precision?: InputMaybe<Scalars['Int']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  thousand?: InputMaybe<Scalars['String']['input']>;
};


export type CommerceLineItemUpdatedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type CommerceLineItemConnection = {
  __typename?: 'CommerceLineItemConnection';
  edges?: Maybe<Array<Maybe<CommerceLineItemEdge>>>;
  nodes?: Maybe<Array<Maybe<CommerceLineItem>>>;
  pageInfo: CommercePageInfo;
};

export type CommerceLineItemEdge = {
  __typename?: 'CommerceLineItemEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<CommerceLineItem>;
};

export type CommerceOffer = {
  __typename?: 'CommerceOffer';
  amount?: Maybe<Scalars['String']['output']>;
  amountCents: Scalars['Int']['output'];
  buyerTotal?: Maybe<Scalars['String']['output']>;
  buyerTotalCents?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['String']['output'];
  creatorId: Scalars['String']['output'];
  currencyCode: Scalars['String']['output'];
  definesTotal: Scalars['Boolean']['output'];
  from: CommerceOrderPartyUnion;
  fromDetails?: Maybe<OrderParty>;
  fromParticipant?: Maybe<CommerceOrderParticipantEnum>;
  hasDefiniteTotal: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  note?: Maybe<Scalars['String']['output']>;
  offerAmountChanged: Scalars['Boolean']['output'];
  order: CommerceOrder;
  respondsTo?: Maybe<CommerceOffer>;
  shippingTotal?: Maybe<Scalars['String']['output']>;
  shippingTotalCents?: Maybe<Scalars['Int']['output']>;
  submittedAt?: Maybe<Scalars['String']['output']>;
  taxTotal?: Maybe<Scalars['String']['output']>;
  taxTotalCents?: Maybe<Scalars['Int']['output']>;
};


export type CommerceOfferAmountArgs = {
  decimal?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  precision?: InputMaybe<Scalars['Int']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  thousand?: InputMaybe<Scalars['String']['input']>;
};


export type CommerceOfferBuyerTotalArgs = {
  decimal?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  precision?: InputMaybe<Scalars['Int']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  thousand?: InputMaybe<Scalars['String']['input']>;
};


export type CommerceOfferCreatedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type CommerceOfferShippingTotalArgs = {
  decimal?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  precision?: InputMaybe<Scalars['Int']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  thousand?: InputMaybe<Scalars['String']['input']>;
};


export type CommerceOfferSubmittedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type CommerceOfferTaxTotalArgs = {
  decimal?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  precision?: InputMaybe<Scalars['Int']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  thousand?: InputMaybe<Scalars['String']['input']>;
};

export type CommerceOfferConnection = {
  __typename?: 'CommerceOfferConnection';
  edges?: Maybe<Array<Maybe<CommerceOfferEdge>>>;
  nodes?: Maybe<Array<Maybe<CommerceOffer>>>;
  pageInfo: CommercePageInfo;
};

export type CommerceOfferEdge = {
  __typename?: 'CommerceOfferEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<CommerceOffer>;
};

export type CommerceOfferOrder = CommerceOrder & {
  __typename?: 'CommerceOfferOrder';
  artsyCollectsTaxes?: Maybe<Scalars['Boolean']['output']>;
  artsyRemitsTaxes?: Maybe<Scalars['Boolean']['output']>;
  artsyTotal?: Maybe<Scalars['String']['output']>;
  artsyTotalCents?: Maybe<Scalars['Int']['output']>;
  artworkDetails?: Maybe<Scalars['String']['output']>;
  availablePaymentMethods: Array<CommercePaymentMethodEnum>;
  awaitingResponseFrom?: Maybe<CommerceOrderParticipantEnum>;
  bankAccountId?: Maybe<Scalars['String']['output']>;
  buyer: CommerceOrderPartyUnion;
  buyerAction?: Maybe<CommerceBuyerOfferActionEnum>;
  buyerDetails?: Maybe<OrderParty>;
  buyerPhoneNumber?: Maybe<Scalars['String']['output']>;
  buyerPhoneNumberCountryCode?: Maybe<Scalars['String']['output']>;
  buyerProfile?: Maybe<CollectorProfileType>;
  buyerTotal?: Maybe<Scalars['String']['output']>;
  buyerTotalCents?: Maybe<Scalars['Int']['output']>;
  code: Scalars['String']['output'];
  commissionFee?: Maybe<Scalars['String']['output']>;
  commissionFeeCents?: Maybe<Scalars['Int']['output']>;
  commissionRate?: Maybe<Scalars['Float']['output']>;
  conditionsOfSale?: Maybe<Scalars['String']['output']>;
  conversation?: Maybe<Conversation>;
  createdAt: Scalars['String']['output'];
  creditCard?: Maybe<CreditCard>;
  creditCardId?: Maybe<Scalars['String']['output']>;
  creditCardWalletType?: Maybe<Scalars['String']['output']>;
  currencyCode: Scalars['String']['output'];
  displayCommissionRate?: Maybe<Scalars['String']['output']>;
  displayState: CommerceOrderDisplayStateEnum;
  id: Scalars['ID']['output'];
  impulseConversationId?: Maybe<Scalars['String']['output']>;
  internalID: Scalars['ID']['output'];
  isInquiryOrder: Scalars['Boolean']['output'];
  itemsTotal?: Maybe<Scalars['String']['output']>;
  itemsTotalCents?: Maybe<Scalars['Int']['output']>;
  lastApprovedAt?: Maybe<Scalars['String']['output']>;
  lastOffer?: Maybe<CommerceOffer>;
  lastSubmittedAt?: Maybe<Scalars['String']['output']>;
  lastTransactionFailed?: Maybe<Scalars['Boolean']['output']>;
  lastTransactionFailureCode?: Maybe<Scalars['String']['output']>;
  lineItems?: Maybe<CommerceLineItemConnection>;
  mode?: Maybe<CommerceOrderModeEnum>;
  myLastOffer?: Maybe<CommerceOffer>;
  offerTotal?: Maybe<Scalars['String']['output']>;
  offers?: Maybe<CommerceOfferConnection>;
  orderHistory: Array<CommerceOrderEventUnion>;
  orderUpdateState?: Maybe<Scalars['String']['output']>;
  paymentMethod?: Maybe<CommercePaymentMethodEnum>;
  paymentMethodDetails?: Maybe<PaymentMethodUnion>;
  paymentSet: Scalars['Boolean']['output'];
  requestedFulfillment?: Maybe<CommerceRequestedFulfillmentUnion>;
  requireIdentityVerification: Scalars['Boolean']['output'];
  seller: CommerceOrderPartyUnion;
  sellerDetails?: Maybe<OrderParty>;
  sellerTotal?: Maybe<Scalars['String']['output']>;
  sellerTotalCents?: Maybe<Scalars['Int']['output']>;
  shippingRadius?: Maybe<Scalars['String']['output']>;
  shippingTotal?: Maybe<Scalars['String']['output']>;
  shippingTotalCents?: Maybe<Scalars['Int']['output']>;
  source: CommerceOrderSourceEnum;
  state: CommerceOrderStateEnum;
  stateExpiresAt?: Maybe<Scalars['String']['output']>;
  stateReason?: Maybe<Scalars['String']['output']>;
  stateUpdatedAt?: Maybe<Scalars['String']['output']>;
  stripeConfirmationToken?: Maybe<Scalars['String']['output']>;
  taxTotal?: Maybe<Scalars['String']['output']>;
  taxTotalCents?: Maybe<Scalars['Int']['output']>;
  taxTypes: Array<CommerceTaxTypeEnum>;
  totalListPrice?: Maybe<Scalars['String']['output']>;
  totalListPriceCents: Scalars['Int']['output'];
  transactionFee?: Maybe<Scalars['String']['output']>;
  transactionFeeCents?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['String']['output'];
};


export type CommerceOfferOrderArtsyTotalArgs = {
  decimal?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  precision?: InputMaybe<Scalars['Int']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  thousand?: InputMaybe<Scalars['String']['input']>;
};


export type CommerceOfferOrderBuyerTotalArgs = {
  decimal?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  precision?: InputMaybe<Scalars['Int']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  thousand?: InputMaybe<Scalars['String']['input']>;
};


export type CommerceOfferOrderCommissionFeeArgs = {
  decimal?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  precision?: InputMaybe<Scalars['Int']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  thousand?: InputMaybe<Scalars['String']['input']>;
};


export type CommerceOfferOrderCreatedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type CommerceOfferOrderItemsTotalArgs = {
  decimal?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  precision?: InputMaybe<Scalars['Int']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  thousand?: InputMaybe<Scalars['String']['input']>;
};


export type CommerceOfferOrderLastApprovedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type CommerceOfferOrderLastSubmittedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type CommerceOfferOrderLineItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type CommerceOfferOrderOfferTotalArgs = {
  decimal?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  precision?: InputMaybe<Scalars['Int']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  thousand?: InputMaybe<Scalars['String']['input']>;
};


export type CommerceOfferOrderOffersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  fromId?: InputMaybe<Scalars['String']['input']>;
  fromType?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type CommerceOfferOrderSellerTotalArgs = {
  decimal?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  precision?: InputMaybe<Scalars['Int']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  thousand?: InputMaybe<Scalars['String']['input']>;
};


export type CommerceOfferOrderShippingTotalArgs = {
  decimal?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  precision?: InputMaybe<Scalars['Int']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  thousand?: InputMaybe<Scalars['String']['input']>;
};


export type CommerceOfferOrderStateExpiresAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type CommerceOfferOrderStateUpdatedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type CommerceOfferOrderTaxTotalArgs = {
  decimal?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  precision?: InputMaybe<Scalars['Int']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  thousand?: InputMaybe<Scalars['String']['input']>;
};


export type CommerceOfferOrderTotalListPriceArgs = {
  decimal?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  precision?: InputMaybe<Scalars['Int']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  thousand?: InputMaybe<Scalars['String']['input']>;
};


export type CommerceOfferOrderTransactionFeeArgs = {
  decimal?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  precision?: InputMaybe<Scalars['Int']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  thousand?: InputMaybe<Scalars['String']['input']>;
};


export type CommerceOfferOrderUpdatedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type CommerceOfferSubmittedEvent = CommerceEventInterface & {
  __typename?: 'CommerceOfferSubmittedEvent';
  createdAt: Scalars['String']['output'];
  offer: CommerceOffer;
};


export type CommerceOfferSubmittedEventCreatedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type CommerceOptInFailure = {
  __typename?: 'CommerceOptInFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type CommerceOptInMutationInput = {
  artsyShippingDomestic?: InputMaybe<Scalars['Boolean']['input']>;
  certificateOfAuthenticity?: InputMaybe<Scalars['Boolean']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  coaByAuthenticatingBody?: InputMaybe<Scalars['Boolean']['input']>;
  coaByGallery?: InputMaybe<Scalars['Boolean']['input']>;
  exactPrice?: InputMaybe<Scalars['Boolean']['input']>;
  framed?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  locationId?: InputMaybe<Scalars['String']['input']>;
  notSigned?: InputMaybe<Scalars['Boolean']['input']>;
  pickupAvailable?: InputMaybe<Scalars['Boolean']['input']>;
  signedByArtist?: InputMaybe<Scalars['Boolean']['input']>;
  signedInPlate?: InputMaybe<Scalars['Boolean']['input']>;
  signedOther?: InputMaybe<Scalars['Boolean']['input']>;
  source?: InputMaybe<BulkUpdateSourceEnum>;
  stampedByArtistEstate?: InputMaybe<Scalars['Boolean']['input']>;
  stickerLabel?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CommerceOptInMutationPayload = {
  __typename?: 'CommerceOptInMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  commerceOptInMutationOrError?: Maybe<CommerceOptInMutationType>;
};

export type CommerceOptInMutationType = CommerceOptInFailure | CommerceOptInSuccess;

export type CommerceOptInReportFailure = {
  __typename?: 'CommerceOptInReportFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type CommerceOptInReportMutationInput = {
  artsyShippingDomestic?: InputMaybe<Scalars['Boolean']['input']>;
  certificateOfAuthenticity?: InputMaybe<Scalars['Boolean']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  coaByAuthenticatingBody?: InputMaybe<Scalars['Boolean']['input']>;
  coaByGallery?: InputMaybe<Scalars['Boolean']['input']>;
  eligible?: InputMaybe<Scalars['Boolean']['input']>;
  exactPrice?: InputMaybe<Scalars['Boolean']['input']>;
  framed?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  locationId?: InputMaybe<Scalars['String']['input']>;
  notSigned?: InputMaybe<Scalars['Boolean']['input']>;
  pickupAvailable?: InputMaybe<Scalars['Boolean']['input']>;
  signedByArtist?: InputMaybe<Scalars['Boolean']['input']>;
  signedInPlate?: InputMaybe<Scalars['Boolean']['input']>;
  signedOther?: InputMaybe<Scalars['Boolean']['input']>;
  stampedByArtistEstate?: InputMaybe<Scalars['Boolean']['input']>;
  stickerLabel?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CommerceOptInReportMutationPayload = {
  __typename?: 'CommerceOptInReportMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  commerceOptInReportMutationOrError?: Maybe<CommerceOptInReportMutationType>;
};

export type CommerceOptInReportMutationType = CommerceOptInReportFailure | CommerceOptInReportSuccess;

export type CommerceOptInReportResponse = {
  __typename?: 'CommerceOptInReportResponse';
  message?: Maybe<Scalars['String']['output']>;
};

export type CommerceOptInReportSuccess = {
  __typename?: 'CommerceOptInReportSuccess';
  createdCommerceOptInReport?: Maybe<CommerceOptInReportResponse>;
};

export type CommerceOptInResponse = {
  __typename?: 'CommerceOptInResponse';
  count?: Maybe<Scalars['Int']['output']>;
  ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type CommerceOptInSuccess = {
  __typename?: 'CommerceOptInSuccess';
  updatedCommerceOptIn?: Maybe<CommerceOptInResponse>;
};

export type CommerceOrder = {
  artsyCollectsTaxes?: Maybe<Scalars['Boolean']['output']>;
  artsyRemitsTaxes?: Maybe<Scalars['Boolean']['output']>;
  artsyTotal?: Maybe<Scalars['String']['output']>;
  artsyTotalCents?: Maybe<Scalars['Int']['output']>;
  artworkDetails?: Maybe<Scalars['String']['output']>;
  availablePaymentMethods: Array<CommercePaymentMethodEnum>;
  bankAccountId?: Maybe<Scalars['String']['output']>;
  buyer: CommerceOrderPartyUnion;
  buyerDetails?: Maybe<OrderParty>;
  buyerPhoneNumber?: Maybe<Scalars['String']['output']>;
  buyerPhoneNumberCountryCode?: Maybe<Scalars['String']['output']>;
  buyerProfile?: Maybe<CollectorProfileType>;
  buyerTotal?: Maybe<Scalars['String']['output']>;
  buyerTotalCents?: Maybe<Scalars['Int']['output']>;
  code: Scalars['String']['output'];
  commissionFee?: Maybe<Scalars['String']['output']>;
  commissionFeeCents?: Maybe<Scalars['Int']['output']>;
  commissionRate?: Maybe<Scalars['Float']['output']>;
  conditionsOfSale?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  creditCard?: Maybe<CreditCard>;
  creditCardId?: Maybe<Scalars['String']['output']>;
  creditCardWalletType?: Maybe<Scalars['String']['output']>;
  currencyCode: Scalars['String']['output'];
  displayCommissionRate?: Maybe<Scalars['String']['output']>;
  displayState: CommerceOrderDisplayStateEnum;
  id: Scalars['ID']['output'];
  impulseConversationId?: Maybe<Scalars['String']['output']>;
  internalID: Scalars['ID']['output'];
  itemsTotal?: Maybe<Scalars['String']['output']>;
  itemsTotalCents?: Maybe<Scalars['Int']['output']>;
  lastApprovedAt?: Maybe<Scalars['String']['output']>;
  lastSubmittedAt?: Maybe<Scalars['String']['output']>;
  lastTransactionFailed?: Maybe<Scalars['Boolean']['output']>;
  lastTransactionFailureCode?: Maybe<Scalars['String']['output']>;
  lineItems?: Maybe<CommerceLineItemConnection>;
  mode?: Maybe<CommerceOrderModeEnum>;
  orderHistory: Array<CommerceOrderEventUnion>;
  orderUpdateState?: Maybe<Scalars['String']['output']>;
  paymentMethod?: Maybe<CommercePaymentMethodEnum>;
  paymentMethodDetails?: Maybe<PaymentMethodUnion>;
  paymentSet: Scalars['Boolean']['output'];
  requestedFulfillment?: Maybe<CommerceRequestedFulfillmentUnion>;
  requireIdentityVerification: Scalars['Boolean']['output'];
  seller: CommerceOrderPartyUnion;
  sellerDetails?: Maybe<OrderParty>;
  sellerTotal?: Maybe<Scalars['String']['output']>;
  sellerTotalCents?: Maybe<Scalars['Int']['output']>;
  shippingRadius?: Maybe<Scalars['String']['output']>;
  shippingTotal?: Maybe<Scalars['String']['output']>;
  shippingTotalCents?: Maybe<Scalars['Int']['output']>;
  source: CommerceOrderSourceEnum;
  state: CommerceOrderStateEnum;
  stateExpiresAt?: Maybe<Scalars['String']['output']>;
  stateReason?: Maybe<Scalars['String']['output']>;
  stateUpdatedAt?: Maybe<Scalars['String']['output']>;
  stripeConfirmationToken?: Maybe<Scalars['String']['output']>;
  taxTotal?: Maybe<Scalars['String']['output']>;
  taxTotalCents?: Maybe<Scalars['Int']['output']>;
  taxTypes: Array<CommerceTaxTypeEnum>;
  totalListPrice?: Maybe<Scalars['String']['output']>;
  totalListPriceCents: Scalars['Int']['output'];
  transactionFee?: Maybe<Scalars['String']['output']>;
  transactionFeeCents?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['String']['output'];
};


export type CommerceOrderArtsyTotalArgs = {
  decimal?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  precision?: InputMaybe<Scalars['Int']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  thousand?: InputMaybe<Scalars['String']['input']>;
};


export type CommerceOrderBuyerTotalArgs = {
  decimal?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  precision?: InputMaybe<Scalars['Int']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  thousand?: InputMaybe<Scalars['String']['input']>;
};


export type CommerceOrderCommissionFeeArgs = {
  decimal?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  precision?: InputMaybe<Scalars['Int']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  thousand?: InputMaybe<Scalars['String']['input']>;
};


export type CommerceOrderCreatedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type CommerceOrderItemsTotalArgs = {
  decimal?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  precision?: InputMaybe<Scalars['Int']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  thousand?: InputMaybe<Scalars['String']['input']>;
};


export type CommerceOrderLastApprovedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type CommerceOrderLastSubmittedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type CommerceOrderLineItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type CommerceOrderSellerTotalArgs = {
  decimal?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  precision?: InputMaybe<Scalars['Int']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  thousand?: InputMaybe<Scalars['String']['input']>;
};


export type CommerceOrderShippingTotalArgs = {
  decimal?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  precision?: InputMaybe<Scalars['Int']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  thousand?: InputMaybe<Scalars['String']['input']>;
};


export type CommerceOrderStateExpiresAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type CommerceOrderStateUpdatedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type CommerceOrderTaxTotalArgs = {
  decimal?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  precision?: InputMaybe<Scalars['Int']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  thousand?: InputMaybe<Scalars['String']['input']>;
};


export type CommerceOrderTotalListPriceArgs = {
  decimal?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  precision?: InputMaybe<Scalars['Int']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  thousand?: InputMaybe<Scalars['String']['input']>;
};


export type CommerceOrderTransactionFeeArgs = {
  decimal?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  precision?: InputMaybe<Scalars['Int']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  thousand?: InputMaybe<Scalars['String']['input']>;
};


export type CommerceOrderUpdatedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type CommerceOrderActionData = {
  __typename?: 'CommerceOrderActionData';
  clientSecret: Scalars['String']['output'];
};

export enum CommerceOrderConnectionFilterEnum {
  PaymentFailed = 'PAYMENT_FAILED'
}

export enum CommerceOrderConnectionSortEnum {
  StateExpiresAtAsc = 'STATE_EXPIRES_AT_ASC',
  StateExpiresAtDesc = 'STATE_EXPIRES_AT_DESC',
  StateUpdatedAtAsc = 'STATE_UPDATED_AT_ASC',
  StateUpdatedAtDesc = 'STATE_UPDATED_AT_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC'
}

export type CommerceOrderConnectionWithTotalCount = {
  __typename?: 'CommerceOrderConnectionWithTotalCount';
  edges?: Maybe<Array<Maybe<CommerceOrderEdge>>>;
  nodes?: Maybe<Array<Maybe<CommerceOrder>>>;
  pageCursors?: Maybe<CommercePageCursors>;
  pageInfo: CommercePageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export enum CommerceOrderDisplayStateEnum {
  Abandoned = 'ABANDONED',
  Approved = 'APPROVED',
  Canceled = 'CANCELED',
  Fulfilled = 'FULFILLED',
  InTransit = 'IN_TRANSIT',
  PaymentFailed = 'PAYMENT_FAILED',
  Pending = 'PENDING',
  Processing = 'PROCESSING',
  ProcessingApproval = 'PROCESSING_APPROVAL',
  Refunded = 'REFUNDED',
  Submitted = 'SUBMITTED'
}

export type CommerceOrderEdge = {
  __typename?: 'CommerceOrderEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<CommerceOrder>;
};

export type CommerceOrderEventUnion = CommerceOfferSubmittedEvent | CommerceOrderStateChangedEvent;

export enum CommerceOrderFulfillmentTypeEnum {
  Pickup = 'PICKUP',
  Ship = 'SHIP',
  ShipArta = 'SHIP_ARTA'
}

export enum CommerceOrderModeEnum {
  Buy = 'BUY',
  Offer = 'OFFER'
}

export type CommerceOrderOrFailureUnion = CommerceOrderRequiresAction | CommerceOrderWithMutationFailure | CommerceOrderWithMutationSuccess;

export enum CommerceOrderParticipantEnum {
  Buyer = 'BUYER',
  Seller = 'SELLER'
}

export type CommerceOrderPartyUnion = CommercePartner | CommerceUser;

export type CommerceOrderRequiresAction = {
  __typename?: 'CommerceOrderRequiresAction';
  actionData: CommerceOrderActionData;
};

export enum CommerceOrderSourceEnum {
  ArtworkPage = 'artwork_page',
  Inquiry = 'inquiry',
  PartnerOffer = 'partner_offer',
  PrivateSale = 'private_sale'
}

export type CommerceOrderStateChangedEvent = CommerceEventInterface & {
  __typename?: 'CommerceOrderStateChangedEvent';
  createdAt: Scalars['String']['output'];
  orderUpdateState?: Maybe<Scalars['String']['output']>;
  state: CommerceOrderStateEnum;
  stateReason?: Maybe<Scalars['String']['output']>;
};


export type CommerceOrderStateChangedEventCreatedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export enum CommerceOrderStateEnum {
  Abandoned = 'ABANDONED',
  Approved = 'APPROVED',
  Canceled = 'CANCELED',
  Fulfilled = 'FULFILLED',
  InReview = 'IN_REVIEW',
  Pending = 'PENDING',
  ProcessingApproval = 'PROCESSING_APPROVAL',
  Refunded = 'REFUNDED',
  Submitted = 'SUBMITTED'
}

export type CommerceOrderWithMutationFailure = {
  __typename?: 'CommerceOrderWithMutationFailure';
  error: CommerceApplicationError;
};

export type CommerceOrderWithMutationSuccess = {
  __typename?: 'CommerceOrderWithMutationSuccess';
  order: CommerceOrder;
};

export type CommercePageCursor = {
  __typename?: 'CommercePageCursor';
  cursor: Scalars['String']['output'];
  isCurrent: Scalars['Boolean']['output'];
  page: Scalars['Int']['output'];
};

export type CommercePageCursors = {
  __typename?: 'CommercePageCursors';
  around: Array<CommercePageCursor>;
  first?: Maybe<CommercePageCursor>;
  last?: Maybe<CommercePageCursor>;
  previous?: Maybe<CommercePageCursor>;
};

export type CommercePageInfo = {
  __typename?: 'CommercePageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type CommercePartner = {
  __typename?: 'CommercePartner';
  id: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export enum CommercePaymentMethodEnum {
  CreditCard = 'CREDIT_CARD',
  SepaDebit = 'SEPA_DEBIT',
  UsBankAccount = 'US_BANK_ACCOUNT',
  WireTransfer = 'WIRE_TRANSFER'
}

export type CommercePickup = {
  __typename?: 'CommercePickup';
  fulfillmentType: Scalars['String']['output'];
  phoneNumber?: Maybe<Scalars['String']['output']>;
};

export type CommerceRequestedFulfillmentUnion = CommercePickup | CommerceShip | CommerceShipArta;

export type CommerceSelectShippingOptionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  selectedShippingQuoteId: Scalars['ID']['input'];
};

export type CommerceSelectShippingOptionPayload = {
  __typename?: 'CommerceSelectShippingOptionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  orderOrError: CommerceOrderOrFailureUnion;
};

export type CommerceSellerAcceptOfferInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  offerId: Scalars['ID']['input'];
  shippingContact?: InputMaybe<CommerceShippingContactAttributes>;
};

export type CommerceSellerAcceptOfferPayload = {
  __typename?: 'CommerceSellerAcceptOfferPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  orderOrError: CommerceOrderOrFailureUnion;
};

export type CommerceSellerAcceptProvisionalOfferInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  offerId: Scalars['ID']['input'];
  shippingTotalCents?: InputMaybe<Scalars['Int']['input']>;
};

export type CommerceSellerAcceptProvisionalOfferPayload = {
  __typename?: 'CommerceSellerAcceptProvisionalOfferPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  orderOrError: CommerceOrderOrFailureUnion;
};

export type CommerceSellerCounterOfferInput = {
  amountCents: Scalars['Int']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  offerId: Scalars['ID']['input'];
  shippingContact?: InputMaybe<CommerceShippingContactAttributes>;
  shippingTotalCents?: InputMaybe<Scalars['Int']['input']>;
};

export type CommerceSellerCounterOfferPayload = {
  __typename?: 'CommerceSellerCounterOfferPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  orderOrError: CommerceOrderOrFailureUnion;
};

export type CommerceSellerRejectOfferInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  offerId: Scalars['ID']['input'];
  rejectReason?: InputMaybe<CommerceCancelReasonTypeEnum>;
};

export type CommerceSellerRejectOfferPayload = {
  __typename?: 'CommerceSellerRejectOfferPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  orderOrError: CommerceOrderOrFailureUnion;
};

export type CommerceSetPaymentByStripeIntentInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  oneTimeUse?: InputMaybe<Scalars['Boolean']['input']>;
  setupIntentId: Scalars['String']['input'];
};

export type CommerceSetPaymentByStripeIntentPayload = {
  __typename?: 'CommerceSetPaymentByStripeIntentPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  orderOrError: CommerceOrderOrFailureUnion;
};

export type CommerceSetPaymentInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  paymentMethod: CommercePaymentMethodEnum;
  paymentMethodId?: InputMaybe<Scalars['String']['input']>;
};

export type CommerceSetPaymentPayload = {
  __typename?: 'CommerceSetPaymentPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  orderOrError: CommerceOrderOrFailureUnion;
};

export type CommerceSetShippingInput = {
  addressVerifiedBy?: InputMaybe<CommerceShippingAddressVerifiedByEnum>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  fulfillmentType: CommerceOrderFulfillmentTypeEnum;
  id: Scalars['ID']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  phoneNumberCountryCode?: InputMaybe<Scalars['String']['input']>;
  shipping?: InputMaybe<CommerceShippingAttributes>;
};

export type CommerceSetShippingPayload = {
  __typename?: 'CommerceSetShippingPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  orderOrError: CommerceOrderOrFailureUnion;
};

export type CommerceShip = {
  __typename?: 'CommerceShip';
  addressLine1?: Maybe<Scalars['String']['output']>;
  addressLine2?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Scalars['String']['output']>;
};

export type CommerceShipArta = {
  __typename?: 'CommerceShipArta';
  addressLine1?: Maybe<Scalars['String']['output']>;
  addressLine2?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Scalars['String']['output']>;
};

export type CommerceShipment = {
  __typename?: 'CommerceShipment';
  bookedAt?: Maybe<Scalars['String']['output']>;
  carrierName?: Maybe<Scalars['String']['output']>;
  contactEmail?: Maybe<Scalars['String']['output']>;
  contactName?: Maybe<Scalars['String']['output']>;
  contactPhone?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  deliveryEnd?: Maybe<Scalars['String']['output']>;
  deliveryStart?: Maybe<Scalars['String']['output']>;
  deliveryWindowModifier?: Maybe<Scalars['String']['output']>;
  eeiFormStatus?: Maybe<CommerceEeiFormStatusEnum>;
  estimatedDeliveryWindow?: Maybe<Scalars['String']['output']>;
  estimatedPickupWindow?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  labelUrl?: Maybe<Scalars['String']['output']>;
  pickupEnd?: Maybe<Scalars['String']['output']>;
  pickupStart?: Maybe<Scalars['String']['output']>;
  pickupWindowModifier?: Maybe<Scalars['String']['output']>;
  priceCents: Scalars['Int']['output'];
  priceCurrency: Scalars['String']['output'];
  status?: Maybe<Scalars['String']['output']>;
  trackingNumber?: Maybe<Scalars['String']['output']>;
  trackingUrl?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['String']['output'];
};


export type CommerceShipmentCreatedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type CommerceShipmentDeliveryEndArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type CommerceShipmentDeliveryStartArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type CommerceShipmentPickupEndArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type CommerceShipmentPickupStartArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type CommerceShipmentUpdatedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export enum CommerceShippingAddressVerifiedByEnum {
  Artsy = 'ARTSY',
  User = 'USER'
}

export type CommerceShippingAttributes = {
  addressLine1?: InputMaybe<Scalars['String']['input']>;
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
};

export type CommerceShippingContactAttributes = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};

export type CommerceShippingQuote = {
  __typename?: 'CommerceShippingQuote';
  createdAt: Scalars['String']['output'];
  currencyCode: Scalars['String']['output'];
  displayName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isSelected: Scalars['Boolean']['output'];
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['String']['output']>;
  priceCents: Scalars['Int']['output'];
  priceCurrency: Scalars['String']['output'];
  tier: Scalars['String']['output'];
  typeName: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};


export type CommerceShippingQuoteCreatedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type CommerceShippingQuotePriceArgs = {
  decimal?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  precision?: InputMaybe<Scalars['Int']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  thousand?: InputMaybe<Scalars['String']['input']>;
};


export type CommerceShippingQuoteUpdatedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type CommerceShippingQuoteConnection = {
  __typename?: 'CommerceShippingQuoteConnection';
  edges?: Maybe<Array<Maybe<CommerceShippingQuoteEdge>>>;
  nodes?: Maybe<Array<Maybe<CommerceShippingQuote>>>;
  pageInfo: CommercePageInfo;
};

export type CommerceShippingQuoteEdge = {
  __typename?: 'CommerceShippingQuoteEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<CommerceShippingQuote>;
};

export type CommerceSubmitOrderInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type CommerceSubmitOrderPayload = {
  __typename?: 'CommerceSubmitOrderPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  orderOrError: CommerceOrderOrFailureUnion;
};

export type CommerceSubmitOrderWithOfferInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  confirmedSetupIntentId?: InputMaybe<Scalars['String']['input']>;
  offerId: Scalars['ID']['input'];
};

export type CommerceSubmitOrderWithOfferPayload = {
  __typename?: 'CommerceSubmitOrderWithOfferPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  orderOrError: CommerceOrderOrFailureUnion;
};

export type CommerceSubmitPendingOfferInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  offerId: Scalars['ID']['input'];
};

export type CommerceSubmitPendingOfferPayload = {
  __typename?: 'CommerceSubmitPendingOfferPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  orderOrError: CommerceOrderOrFailureUnion;
};

export enum CommerceTaxTypeEnum {
  SalesTax = 'SALES_TAX',
  Vat = 'VAT'
}

export type CommerceUpdateImpulseConversationIdInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  impulseConversationId: Scalars['String']['input'];
  orderId: Scalars['ID']['input'];
};

export type CommerceUpdateImpulseConversationIdPayload = {
  __typename?: 'CommerceUpdateImpulseConversationIdPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  orderOrError: CommerceOrderOrFailureUnion;
};

export type CommerceUser = {
  __typename?: 'CommerceUser';
  id: Scalars['String']['output'];
};

export type ConditionReportRequest = {
  __typename?: 'ConditionReportRequest';
  internalID: Scalars['ID']['output'];
  saleArtworkID?: Maybe<Scalars['ID']['output']>;
  userID?: Maybe<Scalars['ID']['output']>;
};

export type ConfirmPasswordInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
};

export type ConfirmPasswordPayload = {
  __typename?: 'ConfirmPasswordPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  valid: Scalars['Boolean']['output'];
};

export type ConfirmationToken = {
  __typename?: 'ConfirmationToken';
  paymentMethodPreview: PaymentMethodPreview;
};

export type Consignment = {
  __typename?: 'Consignment';
  currency?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internalID?: Maybe<Scalars['ID']['output']>;
  saleDate?: Maybe<Scalars['String']['output']>;
  saleName?: Maybe<Scalars['String']['output']>;
  salePriceCents?: Maybe<Scalars['Int']['output']>;
  state?: Maybe<ConsignmentState>;
  submission: ConsignmentSubmission;
  submissionID?: Maybe<Scalars['ID']['output']>;
  submissionId: Scalars['ID']['output'];
};

export enum ConsignmentAttributionClass {
  LimitedEdition = 'LIMITED_EDITION',
  OpenEdition = 'OPEN_EDITION',
  Unique = 'UNIQUE',
  UnknownEdition = 'UNKNOWN_EDITION'
}

export type ConsignmentConnection = {
  __typename?: 'ConsignmentConnection';
  edges?: Maybe<Array<Maybe<ConsignmentEdge>>>;
  nodes?: Maybe<Array<Maybe<Consignment>>>;
  pageCursors?: Maybe<ConsignmentPageCursors>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type ConsignmentEdge = {
  __typename?: 'ConsignmentEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Consignment>;
};

export type ConsignmentInquiry = {
  __typename?: 'ConsignmentInquiry';
  email: Scalars['String']['output'];
  internalID: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  name: Scalars['String']['output'];
  phoneNumber?: Maybe<Scalars['String']['output']>;
  recipientEmail?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type ConsignmentInquiryMutationError = {
  __typename?: 'ConsignmentInquiryMutationError';
  error?: Maybe<Scalars['String']['output']>;
  message: Scalars['String']['output'];
  statusCode?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ConsignmentInquiryMutationFailure = {
  __typename?: 'ConsignmentInquiryMutationFailure';
  mutationError?: Maybe<ConsignmentInquiryMutationError>;
};

export type ConsignmentInquiryMutationSuccess = {
  __typename?: 'ConsignmentInquiryMutationSuccess';
  consignmentInquiry?: Maybe<ConsignmentInquiry>;
};

export type ConsignmentOffer = {
  __typename?: 'ConsignmentOffer';
  commissionPercentWhole?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  createdById?: Maybe<Scalars['ID']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  deadlineToConsign?: Maybe<Scalars['String']['output']>;
  highEstimateAmount?: Maybe<Scalars['String']['output']>;
  highEstimateCents?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  insuranceInfo?: Maybe<Scalars['String']['output']>;
  lowEstimateAmount?: Maybe<Scalars['String']['output']>;
  lowEstimateCents?: Maybe<Scalars['Int']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  offerType?: Maybe<Scalars['String']['output']>;
  otherFeesInfo?: Maybe<Scalars['String']['output']>;
  partnerInfo?: Maybe<Scalars['String']['output']>;
  photographyInfo?: Maybe<Scalars['String']['output']>;
  saleDate?: Maybe<Scalars['String']['output']>;
  saleLocation?: Maybe<Scalars['String']['output']>;
  saleName?: Maybe<Scalars['String']['output']>;
  shippingInfo?: Maybe<Scalars['String']['output']>;
  startingBidCents?: Maybe<Scalars['Int']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  submission: ConsignmentSubmission;
};


export type ConsignmentOfferHighEstimateAmountArgs = {
  decimal?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  precision?: InputMaybe<Scalars['Int']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  thousand?: InputMaybe<Scalars['String']['input']>;
};


export type ConsignmentOfferLowEstimateAmountArgs = {
  decimal?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  precision?: InputMaybe<Scalars['Int']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  thousand?: InputMaybe<Scalars['String']['input']>;
};

export type ConsignmentOfferConnection = {
  __typename?: 'ConsignmentOfferConnection';
  edges?: Maybe<Array<Maybe<ConsignmentOfferEdge>>>;
  nodes?: Maybe<Array<Maybe<ConsignmentOffer>>>;
  pageCursors?: Maybe<ConsignmentPageCursors>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type ConsignmentOfferEdge = {
  __typename?: 'ConsignmentOfferEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<ConsignmentOffer>;
};

export enum ConsignmentOfferSort {
  CommissionPercentAsc = 'COMMISSION_PERCENT_ASC',
  CommissionPercentDesc = 'COMMISSION_PERCENT_DESC',
  ConsignedAtAsc = 'CONSIGNED_AT_ASC',
  ConsignedAtDesc = 'CONSIGNED_AT_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  CreatedByIdAsc = 'CREATED_BY_ID_ASC',
  CreatedByIdDesc = 'CREATED_BY_ID_DESC',
  CurrencyAsc = 'CURRENCY_ASC',
  CurrencyDesc = 'CURRENCY_DESC',
  DeadlineToConsignAsc = 'DEADLINE_TO_CONSIGN_ASC',
  DeadlineToConsignDesc = 'DEADLINE_TO_CONSIGN_DESC',
  HighEstimateCentsAsc = 'HIGH_ESTIMATE_CENTS_ASC',
  HighEstimateCentsDesc = 'HIGH_ESTIMATE_CENTS_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  InsuranceInfoAsc = 'INSURANCE_INFO_ASC',
  InsuranceInfoDesc = 'INSURANCE_INFO_DESC',
  LowEstimateCentsAsc = 'LOW_ESTIMATE_CENTS_ASC',
  LowEstimateCentsDesc = 'LOW_ESTIMATE_CENTS_DESC',
  NotesAsc = 'NOTES_ASC',
  NotesDesc = 'NOTES_DESC',
  OfferResponsesCountAsc = 'OFFER_RESPONSES_COUNT_ASC',
  OfferResponsesCountDesc = 'OFFER_RESPONSES_COUNT_DESC',
  OfferTypeAsc = 'OFFER_TYPE_ASC',
  OfferTypeDesc = 'OFFER_TYPE_DESC',
  OtherFeesInfoAsc = 'OTHER_FEES_INFO_ASC',
  OtherFeesInfoDesc = 'OTHER_FEES_INFO_DESC',
  OverrideEmailAsc = 'OVERRIDE_EMAIL_ASC',
  OverrideEmailDesc = 'OVERRIDE_EMAIL_DESC',
  PartnerInfoAsc = 'PARTNER_INFO_ASC',
  PartnerInfoDesc = 'PARTNER_INFO_DESC',
  PartnerSubmissionIdAsc = 'PARTNER_SUBMISSION_ID_ASC',
  PartnerSubmissionIdDesc = 'PARTNER_SUBMISSION_ID_DESC',
  PhotographyInfoAsc = 'PHOTOGRAPHY_INFO_ASC',
  PhotographyInfoDesc = 'PHOTOGRAPHY_INFO_DESC',
  PriceCentsAsc = 'PRICE_CENTS_ASC',
  PriceCentsDesc = 'PRICE_CENTS_DESC',
  ReferenceIdAsc = 'REFERENCE_ID_ASC',
  ReferenceIdDesc = 'REFERENCE_ID_DESC',
  RejectedAtAsc = 'REJECTED_AT_ASC',
  RejectedAtDesc = 'REJECTED_AT_DESC',
  RejectedByAsc = 'REJECTED_BY_ASC',
  RejectedByDesc = 'REJECTED_BY_DESC',
  RejectionNoteAsc = 'REJECTION_NOTE_ASC',
  RejectionNoteDesc = 'REJECTION_NOTE_DESC',
  RejectionReasonAsc = 'REJECTION_REASON_ASC',
  RejectionReasonDesc = 'REJECTION_REASON_DESC',
  ReviewStartedAtAsc = 'REVIEW_STARTED_AT_ASC',
  ReviewStartedAtDesc = 'REVIEW_STARTED_AT_DESC',
  SaleDateAsc = 'SALE_DATE_ASC',
  SaleDateDesc = 'SALE_DATE_DESC',
  SaleLocationAsc = 'SALE_LOCATION_ASC',
  SaleLocationDesc = 'SALE_LOCATION_DESC',
  SaleNameAsc = 'SALE_NAME_ASC',
  SaleNameDesc = 'SALE_NAME_DESC',
  SalePeriodEndAsc = 'SALE_PERIOD_END_ASC',
  SalePeriodEndDesc = 'SALE_PERIOD_END_DESC',
  SalePeriodStartAsc = 'SALE_PERIOD_START_ASC',
  SalePeriodStartDesc = 'SALE_PERIOD_START_DESC',
  SentAtAsc = 'SENT_AT_ASC',
  SentAtDesc = 'SENT_AT_DESC',
  SentByAsc = 'SENT_BY_ASC',
  SentByDesc = 'SENT_BY_DESC',
  ShippingInfoAsc = 'SHIPPING_INFO_ASC',
  ShippingInfoDesc = 'SHIPPING_INFO_DESC',
  StartingBidCentsAsc = 'STARTING_BID_CENTS_ASC',
  StartingBidCentsDesc = 'STARTING_BID_CENTS_DESC',
  StateAsc = 'STATE_ASC',
  StateDesc = 'STATE_DESC',
  SubmissionIdAsc = 'SUBMISSION_ID_ASC',
  SubmissionIdDesc = 'SUBMISSION_ID_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC'
}

export type ConsignmentPageCursor = {
  __typename?: 'ConsignmentPageCursor';
  cursor: Scalars['String']['output'];
  isCurrent: Scalars['Boolean']['output'];
  page: Scalars['Int']['output'];
};

export type ConsignmentPageCursors = {
  __typename?: 'ConsignmentPageCursors';
  around: Array<ConsignmentPageCursor>;
  first?: Maybe<ConsignmentPageCursor>;
  last?: Maybe<ConsignmentPageCursor>;
  previous?: Maybe<ConsignmentPageCursor>;
};

export enum ConsignmentSort {
  AcceptedOfferIdAsc = 'ACCEPTED_OFFER_ID_ASC',
  AcceptedOfferIdDesc = 'ACCEPTED_OFFER_ID_DESC',
  ArtsyCommissionPercentAsc = 'ARTSY_COMMISSION_PERCENT_ASC',
  ArtsyCommissionPercentDesc = 'ARTSY_COMMISSION_PERCENT_DESC',
  CanceledReasonAsc = 'CANCELED_REASON_ASC',
  CanceledReasonDesc = 'CANCELED_REASON_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  CurrencyAsc = 'CURRENCY_ASC',
  CurrencyDesc = 'CURRENCY_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  InvoiceNumberAsc = 'INVOICE_NUMBER_ASC',
  InvoiceNumberDesc = 'INVOICE_NUMBER_DESC',
  NotesAsc = 'NOTES_ASC',
  NotesDesc = 'NOTES_DESC',
  NotifiedAtAsc = 'NOTIFIED_AT_ASC',
  NotifiedAtDesc = 'NOTIFIED_AT_DESC',
  PartnerCommissionPercentAsc = 'PARTNER_COMMISSION_PERCENT_ASC',
  PartnerCommissionPercentDesc = 'PARTNER_COMMISSION_PERCENT_DESC',
  PartnerIdAsc = 'PARTNER_ID_ASC',
  PartnerIdDesc = 'PARTNER_ID_DESC',
  PartnerInvoicedAtAsc = 'PARTNER_INVOICED_AT_ASC',
  PartnerInvoicedAtDesc = 'PARTNER_INVOICED_AT_DESC',
  PartnerPaidAtAsc = 'PARTNER_PAID_AT_ASC',
  PartnerPaidAtDesc = 'PARTNER_PAID_AT_DESC',
  ReferenceIdAsc = 'REFERENCE_ID_ASC',
  ReferenceIdDesc = 'REFERENCE_ID_DESC',
  SaleDateAsc = 'SALE_DATE_ASC',
  SaleDateDesc = 'SALE_DATE_DESC',
  SaleLocationAsc = 'SALE_LOCATION_ASC',
  SaleLocationDesc = 'SALE_LOCATION_DESC',
  SaleLotNumberAsc = 'SALE_LOT_NUMBER_ASC',
  SaleLotNumberDesc = 'SALE_LOT_NUMBER_DESC',
  SaleNameAsc = 'SALE_NAME_ASC',
  SaleNameDesc = 'SALE_NAME_DESC',
  SalePriceCentsAsc = 'SALE_PRICE_CENTS_ASC',
  SalePriceCentsDesc = 'SALE_PRICE_CENTS_DESC',
  StateAsc = 'STATE_ASC',
  StateDesc = 'STATE_DESC',
  SubmissionIdAsc = 'SUBMISSION_ID_ASC',
  SubmissionIdDesc = 'SUBMISSION_ID_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC'
}

export enum ConsignmentState {
  BoughtIn = 'BOUGHT_IN',
  Cancelled = 'CANCELLED',
  Open = 'OPEN',
  Sold = 'SOLD'
}

export type ConsignmentSubmission = {
  __typename?: 'ConsignmentSubmission';
  additionalInfo?: Maybe<Scalars['String']['output']>;
  artist?: Maybe<Artist>;
  artistId: Scalars['String']['output'];
  assets?: Maybe<Array<Maybe<ConsignmentSubmissionCategoryAsset>>>;
  attributionClass?: Maybe<ConsignmentAttributionClass>;
  authenticityCertificate?: Maybe<Scalars['Boolean']['output']>;
  category?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  depth?: Maybe<Scalars['String']['output']>;
  dimensionsMetric?: Maybe<Scalars['String']['output']>;
  edition?: Maybe<Scalars['String']['output']>;
  editionNumber?: Maybe<Scalars['String']['output']>;
  editionSize?: Maybe<Scalars['String']['output']>;
  externalId: Scalars['ID']['output'];
  height?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internalID?: Maybe<Scalars['ID']['output']>;
  locationAddress?: Maybe<Scalars['String']['output']>;
  locationAddress2?: Maybe<Scalars['String']['output']>;
  locationCity?: Maybe<Scalars['String']['output']>;
  locationCountry?: Maybe<Scalars['String']['output']>;
  locationCountryCode?: Maybe<Scalars['String']['output']>;
  locationPostalCode?: Maybe<Scalars['String']['output']>;
  locationState?: Maybe<Scalars['String']['output']>;
  medium?: Maybe<Scalars['String']['output']>;
  minimumPriceDollars?: Maybe<Scalars['Int']['output']>;
  myCollectionArtwork?: Maybe<Artwork>;
  myCollectionArtworkID?: Maybe<Scalars['String']['output']>;
  offers: Array<ConsignmentOffer>;
  primaryImage?: Maybe<ConsignmentSubmissionCategoryAsset>;
  provenance?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  rejectionReason?: Maybe<Scalars['String']['output']>;
  saleState?: Maybe<Scalars['String']['output']>;
  signature?: Maybe<Scalars['Boolean']['output']>;
  source?: Maybe<ConsignmentSubmissionSource>;
  sourceArtworkID?: Maybe<Scalars['String']['output']>;
  state?: Maybe<ConsignmentSubmissionStateAggregation>;
  title?: Maybe<Scalars['String']['output']>;
  userAgent?: Maybe<Scalars['String']['output']>;
  userEmail?: Maybe<Scalars['String']['output']>;
  userId: Scalars['String']['output'];
  userName?: Maybe<Scalars['String']['output']>;
  userPhone?: Maybe<Scalars['String']['output']>;
  userPhoneNumber?: Maybe<PhoneNumberType>;
  utmMedium?: Maybe<Scalars['String']['output']>;
  utmSource?: Maybe<Scalars['String']['output']>;
  utmTerm?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['String']['output']>;
  year?: Maybe<Scalars['String']['output']>;
};


export type ConsignmentSubmissionAssetsArgs = {
  assetType?: InputMaybe<Array<AssetType>>;
};


export type ConsignmentSubmissionOffersArgs = {
  gravityPartnerId: Scalars['ID']['input'];
};

export enum ConsignmentSubmissionCategoryAggregation {
  Architecture = 'ARCHITECTURE',
  DesignDecorativeArt = 'DESIGN_DECORATIVE_ART',
  DrawingCollageOrOtherWorkOnPaper = 'DRAWING_COLLAGE_OR_OTHER_WORK_ON_PAPER',
  FashionDesignAndWearableArt = 'FASHION_DESIGN_AND_WEARABLE_ART',
  Installation = 'INSTALLATION',
  Jewelry = 'JEWELRY',
  MixedMedia = 'MIXED_MEDIA',
  Other = 'OTHER',
  Painting = 'PAINTING',
  PerformanceArt = 'PERFORMANCE_ART',
  Photography = 'PHOTOGRAPHY',
  Print = 'PRINT',
  Sculpture = 'SCULPTURE',
  TextileArts = 'TEXTILE_ARTS',
  VideoFilmAnimation = 'VIDEO_FILM_ANIMATION'
}

export type ConsignmentSubmissionCategoryAsset = {
  __typename?: 'ConsignmentSubmissionCategoryAsset';
  assetType: Scalars['String']['output'];
  documentPath?: Maybe<Scalars['String']['output']>;
  filename?: Maybe<Scalars['String']['output']>;
  geminiToken?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  imageUrls?: Maybe<Scalars['JSON']['output']>;
  s3Bucket?: Maybe<Scalars['String']['output']>;
  s3Path?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['String']['output']>;
  submissionID?: Maybe<Scalars['ID']['output']>;
  submissionId: Scalars['ID']['output'];
};

export type ConsignmentSubmissionConnection = {
  __typename?: 'ConsignmentSubmissionConnection';
  edges?: Maybe<Array<Maybe<SubmissionEdge>>>;
  nodes?: Maybe<Array<Maybe<ConsignmentSubmission>>>;
  pageCursors?: Maybe<ConsignmentPageCursors>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export enum ConsignmentSubmissionSort {
  AdditionalInfoAsc = 'ADDITIONAL_INFO_ASC',
  AdditionalInfoDesc = 'ADDITIONAL_INFO_DESC',
  AdminIdAsc = 'ADMIN_ID_ASC',
  AdminIdDesc = 'ADMIN_ID_DESC',
  AdminReceiptSentAtAsc = 'ADMIN_RECEIPT_SENT_AT_ASC',
  AdminReceiptSentAtDesc = 'ADMIN_RECEIPT_SENT_AT_DESC',
  ApprovedAtAsc = 'APPROVED_AT_ASC',
  ApprovedAtDesc = 'APPROVED_AT_DESC',
  ApprovedByAsc = 'APPROVED_BY_ASC',
  ApprovedByDesc = 'APPROVED_BY_DESC',
  ArtistIdAsc = 'ARTIST_ID_ASC',
  ArtistIdDesc = 'ARTIST_ID_DESC',
  ArtistProofsAsc = 'ARTIST_PROOFS_ASC',
  ArtistProofsDesc = 'ARTIST_PROOFS_DESC',
  ArtistScoreAsc = 'ARTIST_SCORE_ASC',
  ArtistScoreDesc = 'ARTIST_SCORE_DESC',
  AssignedToAsc = 'ASSIGNED_TO_ASC',
  AssignedToDesc = 'ASSIGNED_TO_DESC',
  AttributionClassAsc = 'ATTRIBUTION_CLASS_ASC',
  AttributionClassDesc = 'ATTRIBUTION_CLASS_DESC',
  AuctionScoreAsc = 'AUCTION_SCORE_ASC',
  AuctionScoreDesc = 'AUCTION_SCORE_DESC',
  AuthenticityCertificateAsc = 'AUTHENTICITY_CERTIFICATE_ASC',
  AuthenticityCertificateDesc = 'AUTHENTICITY_CERTIFICATE_DESC',
  CataloguerAsc = 'CATALOGUER_ASC',
  CataloguerDesc = 'CATALOGUER_DESC',
  CategoryAsc = 'CATEGORY_ASC',
  CategoryDesc = 'CATEGORY_DESC',
  CoaByAuthenticatingBodyAsc = 'COA_BY_AUTHENTICATING_BODY_ASC',
  CoaByAuthenticatingBodyDesc = 'COA_BY_AUTHENTICATING_BODY_DESC',
  CoaByGalleryAsc = 'COA_BY_GALLERY_ASC',
  CoaByGalleryDesc = 'COA_BY_GALLERY_DESC',
  ConditionReportAsc = 'CONDITION_REPORT_ASC',
  ConditionReportDesc = 'CONDITION_REPORT_DESC',
  ConsignedPartnerSubmissionIdAsc = 'CONSIGNED_PARTNER_SUBMISSION_ID_ASC',
  ConsignedPartnerSubmissionIdDesc = 'CONSIGNED_PARTNER_SUBMISSION_ID_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  CurrencyAsc = 'CURRENCY_ASC',
  CurrencyDesc = 'CURRENCY_DESC',
  DeadlineToSellAsc = 'DEADLINE_TO_SELL_ASC',
  DeadlineToSellDesc = 'DEADLINE_TO_SELL_DESC',
  DeletedAtAsc = 'DELETED_AT_ASC',
  DeletedAtDesc = 'DELETED_AT_DESC',
  DepthAsc = 'DEPTH_ASC',
  DepthDesc = 'DEPTH_DESC',
  DimensionsMetricAsc = 'DIMENSIONS_METRIC_ASC',
  DimensionsMetricDesc = 'DIMENSIONS_METRIC_DESC',
  EditionAsc = 'EDITION_ASC',
  EditionDesc = 'EDITION_DESC',
  EditionNumberAsc = 'EDITION_NUMBER_ASC',
  EditionNumberDesc = 'EDITION_NUMBER_DESC',
  EditionSizeAsc = 'EDITION_SIZE_ASC',
  EditionSizeDesc = 'EDITION_SIZE_DESC',
  ExhibitionAsc = 'EXHIBITION_ASC',
  ExhibitionDesc = 'EXHIBITION_DESC',
  ExtUserIdAsc = 'EXT_USER_ID_ASC',
  ExtUserIdDesc = 'EXT_USER_ID_DESC',
  HeightAsc = 'HEIGHT_ASC',
  HeightDesc = 'HEIGHT_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  LiteratureAsc = 'LITERATURE_ASC',
  LiteratureDesc = 'LITERATURE_DESC',
  LocationAddress2Asc = 'LOCATION_ADDRESS2_ASC',
  LocationAddress2Desc = 'LOCATION_ADDRESS2_DESC',
  LocationAddressAsc = 'LOCATION_ADDRESS_ASC',
  LocationAddressDesc = 'LOCATION_ADDRESS_DESC',
  LocationCityAsc = 'LOCATION_CITY_ASC',
  LocationCityDesc = 'LOCATION_CITY_DESC',
  LocationCountryAsc = 'LOCATION_COUNTRY_ASC',
  LocationCountryCodeAsc = 'LOCATION_COUNTRY_CODE_ASC',
  LocationCountryCodeDesc = 'LOCATION_COUNTRY_CODE_DESC',
  LocationCountryDesc = 'LOCATION_COUNTRY_DESC',
  LocationPostalCodeAsc = 'LOCATION_POSTAL_CODE_ASC',
  LocationPostalCodeDesc = 'LOCATION_POSTAL_CODE_DESC',
  LocationStateAsc = 'LOCATION_STATE_ASC',
  LocationStateDesc = 'LOCATION_STATE_DESC',
  MediumAsc = 'MEDIUM_ASC',
  MediumDesc = 'MEDIUM_DESC',
  MinimumPriceCentsAsc = 'MINIMUM_PRICE_CENTS_ASC',
  MinimumPriceCentsDesc = 'MINIMUM_PRICE_CENTS_DESC',
  MyCollectionArtworkIdAsc = 'MY_COLLECTION_ARTWORK_ID_ASC',
  MyCollectionArtworkIdDesc = 'MY_COLLECTION_ARTWORK_ID_DESC',
  OffersCountAsc = 'OFFERS_COUNT_ASC',
  OffersCountDesc = 'OFFERS_COUNT_DESC',
  PrimaryImageIdAsc = 'PRIMARY_IMAGE_ID_ASC',
  PrimaryImageIdDesc = 'PRIMARY_IMAGE_ID_DESC',
  ProvenanceAsc = 'PROVENANCE_ASC',
  ProvenanceDesc = 'PROVENANCE_DESC',
  PublishedAtAsc = 'PUBLISHED_AT_ASC',
  PublishedAtDesc = 'PUBLISHED_AT_DESC',
  PublisherAsc = 'PUBLISHER_ASC',
  PublisherDesc = 'PUBLISHER_DESC',
  QualifiedAsc = 'QUALIFIED_ASC',
  QualifiedDesc = 'QUALIFIED_DESC',
  ReceiptSentAtAsc = 'RECEIPT_SENT_AT_ASC',
  ReceiptSentAtDesc = 'RECEIPT_SENT_AT_DESC',
  RejectedAtAsc = 'REJECTED_AT_ASC',
  RejectedAtDesc = 'REJECTED_AT_DESC',
  RejectedByAsc = 'REJECTED_BY_ASC',
  RejectedByDesc = 'REJECTED_BY_DESC',
  RejectionReasonAsc = 'REJECTION_REASON_ASC',
  RejectionReasonDesc = 'REJECTION_REASON_DESC',
  RemindersSentCountAsc = 'REMINDERS_SENT_COUNT_ASC',
  RemindersSentCountDesc = 'REMINDERS_SENT_COUNT_DESC',
  SessionIdAsc = 'SESSION_ID_ASC',
  SessionIdDesc = 'SESSION_ID_DESC',
  SignatureAsc = 'SIGNATURE_ASC',
  SignatureDesc = 'SIGNATURE_DESC',
  SignatureDetailAsc = 'SIGNATURE_DETAIL_ASC',
  SignatureDetailDesc = 'SIGNATURE_DETAIL_DESC',
  SourceArtworkIdAsc = 'SOURCE_ARTWORK_ID_ASC',
  SourceArtworkIdDesc = 'SOURCE_ARTWORK_ID_DESC',
  SourceAsc = 'SOURCE_ASC',
  SourceDesc = 'SOURCE_DESC',
  StateAsc = 'STATE_ASC',
  StateDesc = 'STATE_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  UserAgentAsc = 'USER_AGENT_ASC',
  UserAgentDesc = 'USER_AGENT_DESC',
  UserEmailAsc = 'USER_EMAIL_ASC',
  UserEmailDesc = 'USER_EMAIL_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC',
  UserNameAsc = 'USER_NAME_ASC',
  UserNameDesc = 'USER_NAME_DESC',
  UserPhoneAsc = 'USER_PHONE_ASC',
  UserPhoneDesc = 'USER_PHONE_DESC',
  UtmMediumAsc = 'UTM_MEDIUM_ASC',
  UtmMediumDesc = 'UTM_MEDIUM_DESC',
  UtmSourceAsc = 'UTM_SOURCE_ASC',
  UtmSourceDesc = 'UTM_SOURCE_DESC',
  UtmTermAsc = 'UTM_TERM_ASC',
  UtmTermDesc = 'UTM_TERM_DESC',
  UuidAsc = 'UUID_ASC',
  UuidDesc = 'UUID_DESC',
  WidthAsc = 'WIDTH_ASC',
  WidthDesc = 'WIDTH_DESC',
  YearAsc = 'YEAR_ASC',
  YearDesc = 'YEAR_DESC'
}

export enum ConsignmentSubmissionSource {
  Admin = 'ADMIN',
  AppInbound = 'APP_INBOUND',
  MyCollection = 'MY_COLLECTION',
  Partner = 'PARTNER',
  WebInbound = 'WEB_INBOUND'
}

export enum ConsignmentSubmissionStateAggregation {
  Approved = 'APPROVED',
  Closed = 'CLOSED',
  Draft = 'DRAFT',
  Hold = 'HOLD',
  Published = 'PUBLISHED',
  Rejected = 'REJECTED',
  Resubmitted = 'RESUBMITTED',
  Submitted = 'SUBMITTED'
}

export type Contact = {
  __typename?: 'Contact';
  canContact?: Maybe<Scalars['Boolean']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  location?: Maybe<Location>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['String']['output']>;
  slug: Scalars['ID']['output'];
};

export type ContactConnection = {
  __typename?: 'ContactConnection';
  edges?: Maybe<Array<Maybe<ContactEdge>>>;
  pageCursors: PageCursors;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type ContactEdge = {
  __typename?: 'ContactEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Contact>;
};

export type ConvectionService = {
  __typename?: 'ConvectionService';
  geminiTemplateKey: Scalars['String']['output'];
};

export type Conversation = Node & {
  __typename?: 'Conversation';
  artworks?: Maybe<Array<Maybe<Artwork>>>;
  buyerOutcome?: Maybe<Scalars['String']['output']>;
  buyerOutcomeAt?: Maybe<Scalars['String']['output']>;
  collectorInterestsConnection?: Maybe<UserInterestConnection>;
  collectorResume?: Maybe<CollectorResume>;
  createdAt?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['String']['output']>;
  dismissedAt?: Maybe<Scalars['String']['output']>;
  from: ConversationInitiator;
  fromLastViewedMessageID?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `collectorResume` instead */
  fromProfile?: Maybe<CollectorProfileType>;
  /** @deprecated Will be inaccessible to partners in future versions. Prefer fromProfile. */
  fromUser?: Maybe<User>;
  id: Scalars['ID']['output'];
  /** @deprecated This field is no longer required. Prefer the first message from the MessageConnection. */
  initialMessage: Scalars['String']['output'];
  inquiryID?: Maybe<Scalars['String']['output']>;
  inquiryRequest?: Maybe<PartnerInquiryRequest>;
  internalID?: Maybe<Scalars['ID']['output']>;
  isLastMessageToUser?: Maybe<Scalars['Boolean']['output']>;
  items?: Maybe<Array<Maybe<ConversationItem>>>;
  lastMessage?: Maybe<Scalars['String']['output']>;
  lastMessageAt?: Maybe<Scalars['String']['output']>;
  /** @deprecated Prefer querying `messagesConnection(last:1) { edges { node { internalID } } }` */
  lastMessageID?: Maybe<Scalars['String']['output']>;
  /** @deprecated Prefer messagesConnection */
  messages?: Maybe<MessageConnection>;
  messagesAndConversationEventsConnection?: Maybe<MessageOrConversationEventTypeConnection>;
  messagesConnection?: Maybe<MessageConnection>;
  orderConnection?: Maybe<CommerceOrderConnectionWithTotalCount>;
  to: ConversationResponder;
  toLastViewedMessageID?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `unreadByCollector` instead */
  unread?: Maybe<Scalars['Boolean']['output']>;
  unreadByCollector?: Maybe<Scalars['Boolean']['output']>;
  unreadByPartner?: Maybe<Scalars['Boolean']['output']>;
};


export type ConversationBuyerOutcomeAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type ConversationCollectorInterestsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type ConversationCreatedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type ConversationDeletedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type ConversationDismissedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type ConversationLastMessageAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type ConversationMessagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Sort>;
};


export type ConversationMessagesAndConversationEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type ConversationMessagesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Sort>;
};


export type ConversationOrderConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  participantType?: InputMaybe<CommerceOrderParticipantEnum>;
  sellerId?: InputMaybe<Scalars['ID']['input']>;
  state?: InputMaybe<CommerceOrderStateEnum>;
  states?: InputMaybe<Array<CommerceOrderStateEnum>>;
};

export type ConversationConnection = {
  __typename?: 'ConversationConnection';
  edges?: Maybe<Array<Maybe<ConversationEdge>>>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
  totalUnreadCount?: Maybe<Scalars['Int']['output']>;
};

export type ConversationEdge = {
  __typename?: 'ConversationEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Conversation>;
};

export type ConversationEvent = Node & {
  __typename?: 'ConversationEvent';
  buyerBody?: Maybe<Scalars['String']['output']>;
  eventKey: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  sellerBody?: Maybe<Scalars['String']['output']>;
};

export type ConversationInitiator = {
  __typename?: 'ConversationInitiator';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  initials?: Maybe<Scalars['String']['output']>;
  internalID: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
};


export type ConversationInitiatorInitialsArgs = {
  length?: InputMaybe<Scalars['Int']['input']>;
};

export type ConversationItem = {
  __typename?: 'ConversationItem';
  item?: Maybe<ConversationItemType>;
  liveArtwork?: Maybe<ConversationItemType>;
  permalink?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ConversationItemType = Artwork | Show;

export type ConversationMessageAttachmentInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  size?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type ConversationResponder = {
  __typename?: 'ConversationResponder';
  id: Scalars['ID']['output'];
  initials?: Maybe<Scalars['String']['output']>;
  internalID: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  replyToImpulseIDs: Array<Maybe<Scalars['String']['output']>>;
  type: Scalars['String']['output'];
};


export type ConversationResponderInitialsArgs = {
  length?: InputMaybe<Scalars['Int']['input']>;
};

export enum ConversationsInputMode {
  Partner = 'PARTNER',
  User = 'USER'
}

export type CreateAccountRequestMutationFailure = {
  __typename?: 'CreateAccountRequestMutationFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type CreateAccountRequestMutationInput = {
  action?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  notes: Scalars['String']['input'];
  userID?: InputMaybe<Scalars['String']['input']>;
};

export type CreateAccountRequestMutationPayload = {
  __typename?: 'CreateAccountRequestMutationPayload';
  accountRequestOrError?: Maybe<CreateAccountRequestMutationType>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type CreateAccountRequestMutationSuccess = {
  __typename?: 'CreateAccountRequestMutationSuccess';
  accountRequest?: Maybe<AccountRequest>;
};

export type CreateAccountRequestMutationType = CreateAccountRequestMutationFailure | CreateAccountRequestMutationSuccess;

export type CreateAlertFailure = {
  __typename?: 'CreateAlertFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type CreateAlertResponseOrError = CreateAlertFailure | CreateAlertSuccess;

export type CreateAlertSuccess = {
  __typename?: 'CreateAlertSuccess';
  alert?: Maybe<Alert>;
  me: Me;
};

export type CreateAndSendBackupSecondFactorInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  userID: Scalars['ID']['input'];
};

export type CreateAndSendBackupSecondFactorPayload = {
  __typename?: 'CreateAndSendBackupSecondFactorPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  factor: BackupSecondFactor;
};

export type CreateAppSecondFactorInput = {
  attributes: AppSecondFactorAttributes;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
};

export type CreateAppSecondFactorPayload = {
  __typename?: 'CreateAppSecondFactorPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  secondFactorOrErrors: AppSecondFactorOrErrorsUnion;
};

export type CreateArtistFailure = {
  __typename?: 'CreateArtistFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type CreateArtistMutationInput = {
  birthday?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  deathday?: InputMaybe<Scalars['String']['input']>;
  displayName: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  isPersonalArtist?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  middleName?: InputMaybe<Scalars['String']['input']>;
  nationality?: InputMaybe<Scalars['String']['input']>;
  partnerID?: InputMaybe<Scalars['String']['input']>;
};

export type CreateArtistMutationPayload = {
  __typename?: 'CreateArtistMutationPayload';
  artistOrError?: Maybe<CreateArtistSuccessOrErrorType>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type CreateArtistSuccess = {
  __typename?: 'CreateArtistSuccess';
  artist?: Maybe<Artist>;
};

export type CreateArtistSuccessOrErrorType = CreateArtistFailure | CreateArtistSuccess;

export type CreateArtworkFailure = {
  __typename?: 'CreateArtworkFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type CreateArtworkImportArtworksFailure = {
  __typename?: 'CreateArtworkImportArtworksFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type CreateArtworkImportArtworksInput = {
  artworkImportID: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type CreateArtworkImportArtworksPayload = {
  __typename?: 'CreateArtworkImportArtworksPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  createArtworkImportArtworksOrError?: Maybe<CreateArtworkImportArtworksResponseOrError>;
};

export type CreateArtworkImportArtworksResponseOrError = CreateArtworkImportArtworksFailure | CreateArtworkImportArtworksSuccess;

export type CreateArtworkImportArtworksSuccess = {
  __typename?: 'CreateArtworkImportArtworksSuccess';
  artworkImport?: Maybe<ArtworkImport>;
  artworkImportID: Scalars['String']['output'];
  created: Scalars['Int']['output'];
  errors: Scalars['Int']['output'];
};

export type CreateArtworkImportFailure = {
  __typename?: 'CreateArtworkImportFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type CreateArtworkImportInput = {
  async?: InputMaybe<Scalars['Boolean']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  parseWithAI?: InputMaybe<Scalars['Boolean']['input']>;
  parseWithAIModel?: InputMaybe<Scalars['String']['input']>;
  partnerID: Scalars['String']['input'];
  s3Bucket: Scalars['String']['input'];
  s3Key: Scalars['String']['input'];
};

export type CreateArtworkImportPayload = {
  __typename?: 'CreateArtworkImportPayload';
  artworkImportOrError?: Maybe<CreateArtworkImportResponseOrError>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type CreateArtworkImportResponseOrError = CreateArtworkImportFailure | CreateArtworkImportSuccess;

export type CreateArtworkImportSuccess = {
  __typename?: 'CreateArtworkImportSuccess';
  artworkImport?: Maybe<ArtworkImport>;
  queued?: Maybe<Scalars['Boolean']['output']>;
};

export type CreateArtworkMutationInput = {
  artistIds: Array<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  imageS3Bucket?: InputMaybe<Scalars['String']['input']>;
  imageS3Buckets?: InputMaybe<Array<Scalars['String']['input']>>;
  imageS3Key?: InputMaybe<Scalars['String']['input']>;
  imageS3Keys?: InputMaybe<Array<Scalars['String']['input']>>;
  partnerId: Scalars['String']['input'];
  partnerShowId?: InputMaybe<Scalars['String']['input']>;
};

export type CreateArtworkMutationPayload = {
  __typename?: 'CreateArtworkMutationPayload';
  artworkOrError?: Maybe<CreateArtworkResponseOrError>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type CreateArtworkResponseOrError = CreateArtworkFailure | CreateArtworkSuccess;

export type CreateArtworkSuccess = {
  __typename?: 'CreateArtworkSuccess';
  artwork?: Maybe<Artwork>;
};

export type CreateBackupSecondFactorsInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
};

export type CreateBackupSecondFactorsPayload = {
  __typename?: 'CreateBackupSecondFactorsPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  secondFactorsOrErrors: BackupSecondFactorsOrErrorsUnion;
};

export type CreateBankDebitSetupInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  paymentMethodTypes: Array<Scalars['String']['input']>;
};

export type CreateBankDebitSetupPayload = {
  __typename?: 'CreateBankDebitSetupPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  clientSecret: Scalars['String']['output'];
};

export type CreateBidderInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  saleID: Scalars['String']['input'];
};

export type CreateBidderPayload = {
  __typename?: 'CreateBidderPayload';
  bidder?: Maybe<Bidder>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type CreateCanonicalArtistFailure = {
  __typename?: 'CreateCanonicalArtistFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type CreateCanonicalArtistMutationInput = {
  birthday?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  deathday?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  middleName?: InputMaybe<Scalars['String']['input']>;
  nationality?: InputMaybe<Scalars['String']['input']>;
  partnerID?: InputMaybe<Scalars['String']['input']>;
};

export type CreateCanonicalArtistMutationPayload = {
  __typename?: 'CreateCanonicalArtistMutationPayload';
  artistOrError?: Maybe<CreateCanonicalArtistSuccessOrErrorType>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type CreateCanonicalArtistSuccess = {
  __typename?: 'CreateCanonicalArtistSuccess';
  artist?: Maybe<Artist>;
};

export type CreateCanonicalArtistSuccessOrErrorType = CreateCanonicalArtistFailure | CreateCanonicalArtistSuccess;

export type CreateCareerHighlightFailure = {
  __typename?: 'CreateCareerHighlightFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type CreateCareerHighlightInput = {
  artistId: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  collected?: InputMaybe<Scalars['Boolean']['input']>;
  group?: InputMaybe<Scalars['Boolean']['input']>;
  partnerId: Scalars['String']['input'];
  solo?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CreateCareerHighlightPayload = {
  __typename?: 'CreateCareerHighlightPayload';
  careerHighlightOrError?: Maybe<CreateCareerHighlightSuccessResponseOrError>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type CreateCareerHighlightSuccess = {
  __typename?: 'CreateCareerHighlightSuccess';
  careerHighlight?: Maybe<CareerHighlight>;
};

export type CreateCareerHighlightSuccessResponseOrError = CreateCareerHighlightFailure | CreateCareerHighlightSuccess;

export type CreateCollectionFailure = {
  __typename?: 'CreateCollectionFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type CreateCollectionResponseOrError = CreateCollectionFailure | CreateCollectionSuccess;

export type CreateCollectionSuccess = {
  __typename?: 'CreateCollectionSuccess';
  collection?: Maybe<Collection>;
};

export type CreateConsignmentInquiryMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  message: Scalars['String']['input'];
  name: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  recipientEmail?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type CreateConsignmentInquiryMutationPayload = {
  __typename?: 'CreateConsignmentInquiryMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  consignmentInquiryOrError?: Maybe<CreateConsignmentInquiryMutationType>;
};

export type CreateConsignmentInquiryMutationType = ConsignmentInquiryMutationFailure | ConsignmentInquiryMutationSuccess;

export type CreateFeatureFailure = {
  __typename?: 'CreateFeatureFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type CreateFeatureMutationInput = {
  active: Scalars['Boolean']['input'];
  callout?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  layout?: InputMaybe<FeatureLayouts>;
  metaTitle?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  sourceBucket?: InputMaybe<Scalars['String']['input']>;
  sourceKey?: InputMaybe<Scalars['String']['input']>;
  subheadline?: InputMaybe<Scalars['String']['input']>;
};

export type CreateFeatureMutationPayload = {
  __typename?: 'CreateFeatureMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  featureOrError?: Maybe<CreateFeatureResponseOrError>;
};

export type CreateFeatureSuccess = {
  __typename?: 'CreateFeatureSuccess';
  feature?: Maybe<Feature>;
};

export type CreateFeaturedLinkFailure = {
  __typename?: 'CreateFeaturedLinkFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type CreateFeaturedLinkMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  href: Scalars['String']['input'];
  sourceBucket?: InputMaybe<Scalars['String']['input']>;
  sourceKey?: InputMaybe<Scalars['String']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type CreateFeaturedLinkMutationPayload = {
  __typename?: 'CreateFeaturedLinkMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  featuredLinkOrError?: Maybe<CreateFeaturedLinkResponseOrError>;
};

export type CreateFeaturedLinkResponseOrError = CreateFeaturedLinkFailure | CreateFeaturedLinkSuccess;

export type CreateFeaturedLinkSuccess = {
  __typename?: 'CreateFeaturedLinkSuccess';
  featuredLink?: Maybe<FeaturedLink>;
};

export type CreateGeminiEntryForAssetInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  metadata: Scalars['JSON']['input'];
  sourceBucket: Scalars['String']['input'];
  sourceKey: Scalars['String']['input'];
  templateKey: Scalars['String']['input'];
};

export type CreateGeminiEntryForAssetPayload = {
  __typename?: 'CreateGeminiEntryForAssetPayload';
  asset?: Maybe<GeminiEntry>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type CreateHeroUnitLinkInput = {
  text: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type CreateHeroUnitMutationInput = {
  body: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  credit?: InputMaybe<Scalars['String']['input']>;
  endAt?: InputMaybe<Scalars['String']['input']>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  link: CreateHeroUnitLinkInput;
  position?: InputMaybe<Scalars['Int']['input']>;
  startAt?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type CreateHeroUnitMutationPayload = {
  __typename?: 'CreateHeroUnitMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  heroUnitOrError?: Maybe<CreateHeroUnitResponseOrError>;
};

export type CreateIdentityVerificationOverrideMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  identityVerificationID: Scalars['String']['input'];
  reason: Scalars['String']['input'];
  state: Scalars['String']['input'];
};

export type CreateIdentityVerificationOverrideMutationPayload = {
  __typename?: 'CreateIdentityVerificationOverrideMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  createIdentityVerificationOverrideResponseOrError?: Maybe<CreateIdentityVerificationOverrideResponseOrError>;
};

export type CreateIdentityVerificationOverrideResponseOrError = IdentityVerificationOverrideMutationFailure | IdentityVerificationOverrideMutationSuccess;

export type CreateImageInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  src: Scalars['String']['input'];
  templateKey: Scalars['String']['input'];
};

export type CreateImagePayload = {
  __typename?: 'CreateImagePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  image: ArImage;
};

export type CreateInvoicePaymentFailure = {
  __typename?: 'CreateInvoicePaymentFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type CreateInvoicePaymentInput = {
  amountMinor: Scalars['Float']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  creditCardToken: Scalars['String']['input'];
  invoiceID: Scalars['String']['input'];
  invoiceToken: Scalars['String']['input'];
  provider: Scalars['String']['input'];
};

export type CreateInvoicePaymentPayload = {
  __typename?: 'CreateInvoicePaymentPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  responseOrError?: Maybe<CreateInvoicePaymentResponseOrError>;
};

export type CreateInvoicePaymentResponseOrError = CreateInvoicePaymentFailure | CreateInvoicePaymentSuccess;

export type CreateInvoicePaymentSuccess = {
  __typename?: 'CreateInvoicePaymentSuccess';
  invoicePayment?: Maybe<InvoicePayment>;
};

export type CreateOfferMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  commissionPercentWhole: Scalars['Int']['input'];
  createdById?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  deadlineToConsign?: InputMaybe<Scalars['String']['input']>;
  gravityPartnerId: Scalars['String']['input'];
  highEstimateDollars?: InputMaybe<Scalars['Int']['input']>;
  insuranceInfo?: InputMaybe<Scalars['String']['input']>;
  lowEstimateDollars?: InputMaybe<Scalars['Int']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  offerType?: InputMaybe<Scalars['String']['input']>;
  otherFeesInfo?: InputMaybe<Scalars['String']['input']>;
  partnerInfo?: InputMaybe<Scalars['String']['input']>;
  photographyInfo?: InputMaybe<Scalars['String']['input']>;
  saleDate?: InputMaybe<Scalars['Date']['input']>;
  saleLocation?: InputMaybe<Scalars['String']['input']>;
  saleName?: InputMaybe<Scalars['String']['input']>;
  shippingInfo?: InputMaybe<Scalars['String']['input']>;
  startingBidDollars?: InputMaybe<Scalars['Int']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  submissionId: Scalars['ID']['input'];
};

export type CreateOfferMutationPayload = {
  __typename?: 'CreateOfferMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  consignmentOffer?: Maybe<ConsignmentOffer>;
};

export type CreateOfferResponseMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  comments?: InputMaybe<Scalars['String']['input']>;
  intendedState: IntendedState;
  offerId: Scalars['ID']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  rejectionReason?: InputMaybe<Scalars['String']['input']>;
};

export type CreateOfferResponseMutationPayload = {
  __typename?: 'CreateOfferResponseMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  consignmentOfferResponse?: Maybe<OfferResponse>;
};

export type CreateOrderedSetMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  itemId?: InputMaybe<Scalars['String']['input']>;
  itemIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  itemType: Scalars['String']['input'];
  key: Scalars['String']['input'];
  layout?: InputMaybe<OrderedSetLayouts>;
  name?: InputMaybe<Scalars['String']['input']>;
  ownerType?: InputMaybe<Scalars['String']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CreateOrderedSetMutationPayload = {
  __typename?: 'CreateOrderedSetMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  orderedSetOrError?: Maybe<CreateOrderedSetResponseOrError>;
};

export type CreatePageFailure = {
  __typename?: 'CreatePageFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type CreatePageMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  content: Scalars['String']['input'];
  name: Scalars['String']['input'];
  published: Scalars['Boolean']['input'];
};

export type CreatePageMutationPayload = {
  __typename?: 'CreatePageMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  pageOrError?: Maybe<CreatePageResponseOrError>;
};

export type CreatePageResponseOrError = CreatePageFailure | CreatePageSuccess;

export type CreatePageSuccess = {
  __typename?: 'CreatePageSuccess';
  page?: Maybe<Page>;
};

export type CreatePartnerArtistDocumentFailure = {
  __typename?: 'CreatePartnerArtistDocumentFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type CreatePartnerArtistDocumentMutationInput = {
  artistId: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  partnerId: Scalars['String']['input'];
  remoteDocumentUrl: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type CreatePartnerArtistDocumentMutationPayload = {
  __typename?: 'CreatePartnerArtistDocumentMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  documentOrError?: Maybe<CreatePartnerArtistDocumentResponseOrError>;
};

export type CreatePartnerArtistDocumentResponseOrError = CreatePartnerArtistDocumentFailure | CreatePartnerArtistDocumentSuccess;

export type CreatePartnerArtistDocumentSuccess = {
  __typename?: 'CreatePartnerArtistDocumentSuccess';
  document?: Maybe<PartnerDocument>;
  partner?: Maybe<Partner>;
};

export type CreatePartnerContactFailure = {
  __typename?: 'CreatePartnerContactFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type CreatePartnerContactInput = {
  canContact?: InputMaybe<Scalars['Boolean']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  locationId?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  partnerID: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
};

export type CreatePartnerContactOrError = CreatePartnerContactFailure | CreatePartnerContactSuccess;

export type CreatePartnerContactPayload = {
  __typename?: 'CreatePartnerContactPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  partnerContactOrError?: Maybe<CreatePartnerContactOrError>;
};

export type CreatePartnerContactSuccess = {
  __typename?: 'CreatePartnerContactSuccess';
  partnerContact?: Maybe<Contact>;
};

export type CreatePartnerLocationDaySchedulesFailure = {
  __typename?: 'CreatePartnerLocationDaySchedulesFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type CreatePartnerLocationDaySchedulesInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  daySchedules: Array<DayScheduleInput>;
  locationId: Scalars['String']['input'];
  partnerId: Scalars['String']['input'];
};

export type CreatePartnerLocationDaySchedulesOrError = CreatePartnerLocationDaySchedulesFailure | CreatePartnerLocationDaySchedulesSuccess;

export type CreatePartnerLocationDaySchedulesPayload = {
  __typename?: 'CreatePartnerLocationDaySchedulesPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  daySchedulesOrError?: Maybe<CreatePartnerLocationDaySchedulesOrError>;
};

export type CreatePartnerLocationDaySchedulesSuccess = {
  __typename?: 'CreatePartnerLocationDaySchedulesSuccess';
  daySchedules?: Maybe<Array<Maybe<DaySchedule>>>;
};

export type CreatePartnerLocationFailure = {
  __typename?: 'CreatePartnerLocationFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type CreatePartnerLocationInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  address2?: InputMaybe<Scalars['String']['input']>;
  addressType?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  partnerId: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  publiclyViewable?: InputMaybe<Scalars['Boolean']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
};

export type CreatePartnerLocationOrError = CreatePartnerLocationFailure | CreatePartnerLocationSuccess;

export type CreatePartnerLocationPayload = {
  __typename?: 'CreatePartnerLocationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  partnerLocationOrError?: Maybe<CreatePartnerLocationOrError>;
};

export type CreatePartnerLocationSuccess = {
  __typename?: 'CreatePartnerLocationSuccess';
  location?: Maybe<Location>;
};

export type CreatePartnerShowDocumentFailure = {
  __typename?: 'CreatePartnerShowDocumentFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type CreatePartnerShowDocumentMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  partnerId: Scalars['String']['input'];
  remoteDocumentUrl: Scalars['String']['input'];
  showId: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type CreatePartnerShowDocumentMutationPayload = {
  __typename?: 'CreatePartnerShowDocumentMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  documentOrError?: Maybe<CreatePartnerShowDocumentResponseOrError>;
};

export type CreatePartnerShowDocumentResponseOrError = CreatePartnerShowDocumentFailure | CreatePartnerShowDocumentSuccess;

export type CreatePartnerShowDocumentSuccess = {
  __typename?: 'CreatePartnerShowDocumentSuccess';
  document?: Maybe<PartnerDocument>;
  show?: Maybe<Show>;
};

export type CreatePartnerShowEventFailure = {
  __typename?: 'CreatePartnerShowEventFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type CreatePartnerShowEventMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  endAt: Scalars['String']['input'];
  eventType: Scalars['String']['input'];
  partnerId: Scalars['String']['input'];
  showId: Scalars['String']['input'];
  startAt: Scalars['String']['input'];
  timeZone?: InputMaybe<Scalars['String']['input']>;
};

export type CreatePartnerShowEventMutationPayload = {
  __typename?: 'CreatePartnerShowEventMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  showEventOrError?: Maybe<CreatePartnerShowEventResponseOrError>;
};

export type CreatePartnerShowEventResponseOrError = CreatePartnerShowEventFailure | CreatePartnerShowEventSuccess;

export type CreatePartnerShowEventSuccess = {
  __typename?: 'CreatePartnerShowEventSuccess';
  show?: Maybe<Show>;
  showEvent?: Maybe<ShowEventType>;
};

export type CreatePartnerShowFailure = {
  __typename?: 'CreatePartnerShowFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type CreatePartnerShowFairLocationInput = {
  booth?: InputMaybe<Scalars['String']['input']>;
  floor?: InputMaybe<Scalars['String']['input']>;
  hall?: InputMaybe<Scalars['String']['input']>;
  pier?: InputMaybe<Scalars['String']['input']>;
  room?: InputMaybe<Scalars['String']['input']>;
  section?: InputMaybe<Scalars['String']['input']>;
};

export type CreatePartnerShowMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  endAt: Scalars['String']['input'];
  fairId?: InputMaybe<Scalars['String']['input']>;
  fairLocation?: InputMaybe<CreatePartnerShowFairLocationInput>;
  featured?: InputMaybe<Scalars['Boolean']['input']>;
  locationId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  partnerId: Scalars['String']['input'];
  pressRelease?: InputMaybe<Scalars['String']['input']>;
  startAt: Scalars['String']['input'];
  viewingRoomIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CreatePartnerShowMutationPayload = {
  __typename?: 'CreatePartnerShowMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  showOrError?: Maybe<CreatePartnerShowResponseOrError>;
};

export type CreatePartnerShowResponseOrError = CreatePartnerShowFailure | CreatePartnerShowSuccess;

export type CreatePartnerShowSuccess = {
  __typename?: 'CreatePartnerShowSuccess';
  show?: Maybe<Show>;
};

export type CreatePurchaseFailure = {
  __typename?: 'CreatePurchaseFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type CreatePurchaseResponseOrError = CreatePurchaseFailure | CreatePurchaseSuccess;

export type CreatePurchaseSuccess = {
  __typename?: 'CreatePurchaseSuccess';
  purchase?: Maybe<Purchase>;
};

export type CreateSaleAgreementFailure = {
  __typename?: 'CreateSaleAgreementFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type CreateSaleAgreementMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  content: Scalars['String']['input'];
  displayEndAt?: InputMaybe<Scalars['String']['input']>;
  displayStartAt?: InputMaybe<Scalars['String']['input']>;
  published: Scalars['Boolean']['input'];
  saleId: Scalars['String']['input'];
  status: SaleAgreementStatus;
};

export type CreateSaleAgreementMutationPayload = {
  __typename?: 'CreateSaleAgreementMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  saleAgreementOrError?: Maybe<CreateSaleAgreementResponseOrError>;
};

export type CreateSaleAgreementResponseOrError = CreateSaleAgreementFailure | CreateSaleAgreementSuccess;

export type CreateSaleAgreementSuccess = {
  __typename?: 'CreateSaleAgreementSuccess';
  saleAgreement?: Maybe<SaleAgreement>;
};

export type CreateSmsSecondFactorInput = {
  attributes: SmsSecondFactorAttributes;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
};

export type CreateSmsSecondFactorPayload = {
  __typename?: 'CreateSmsSecondFactorPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  secondFactorOrErrors: SmsSecondFactorOrErrorsUnion;
};

export type CreateSubmissionMutationInput = {
  additionalInfo?: InputMaybe<Scalars['String']['input']>;
  artistID: Scalars['String']['input'];
  attributionClass?: InputMaybe<ConsignmentAttributionClass>;
  authenticityCertificate?: InputMaybe<Scalars['Boolean']['input']>;
  category?: InputMaybe<ConsignmentSubmissionCategoryAggregation>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  coaByAuthenticatingBody?: InputMaybe<Scalars['Boolean']['input']>;
  coaByGallery?: InputMaybe<Scalars['Boolean']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  depth?: InputMaybe<Scalars['String']['input']>;
  dimensionsMetric?: InputMaybe<Scalars['String']['input']>;
  edition?: InputMaybe<Scalars['Boolean']['input']>;
  editionNumber?: InputMaybe<Scalars['String']['input']>;
  editionSize?: InputMaybe<Scalars['Int']['input']>;
  editionSizeFormatted?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['String']['input']>;
  locationAddress?: InputMaybe<Scalars['String']['input']>;
  locationAddress2?: InputMaybe<Scalars['String']['input']>;
  locationCity?: InputMaybe<Scalars['String']['input']>;
  locationCountry?: InputMaybe<Scalars['String']['input']>;
  locationCountryCode?: InputMaybe<Scalars['String']['input']>;
  locationPostalCode?: InputMaybe<Scalars['String']['input']>;
  locationState?: InputMaybe<Scalars['String']['input']>;
  medium?: InputMaybe<Scalars['String']['input']>;
  minimumPriceDollars?: InputMaybe<Scalars['Int']['input']>;
  myCollectionArtworkID?: InputMaybe<Scalars['String']['input']>;
  provenance?: InputMaybe<Scalars['String']['input']>;
  sessionID?: InputMaybe<Scalars['String']['input']>;
  signature?: InputMaybe<Scalars['Boolean']['input']>;
  source?: InputMaybe<ConsignmentSubmissionSource>;
  sourceArtworkID?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<ConsignmentSubmissionStateAggregation>;
  title?: InputMaybe<Scalars['String']['input']>;
  userAgent?: InputMaybe<Scalars['String']['input']>;
  userEmail?: InputMaybe<Scalars['String']['input']>;
  userName?: InputMaybe<Scalars['String']['input']>;
  userPhone?: InputMaybe<Scalars['String']['input']>;
  utmMedium?: InputMaybe<Scalars['String']['input']>;
  utmSource?: InputMaybe<Scalars['String']['input']>;
  utmTerm?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['String']['input']>;
  year?: InputMaybe<Scalars['String']['input']>;
};

export type CreateSubmissionMutationPayload = {
  __typename?: 'CreateSubmissionMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  consignmentSubmission?: Maybe<ConsignmentSubmission>;
};

export type CreateUserAddressInput = {
  attributes: UserAddressAttributes;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type CreateUserAddressPayload = {
  __typename?: 'CreateUserAddressPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  me?: Maybe<Me>;
  userAddressOrErrors: UserAddressOrErrorsUnion;
};

export type CreateUserInterestFailure = {
  __typename?: 'CreateUserInterestFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type CreateUserInterestForUserInput = {
  body?: InputMaybe<Scalars['String']['input']>;
  category: UserInterestCategory;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  interestId: Scalars['String']['input'];
  interestType: UserInterestInterestType;
  ownerType: UserInterestOwnerType;
  userId: Scalars['String']['input'];
};

export type CreateUserInterestForUserPayload = {
  __typename?: 'CreateUserInterestForUserPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  userInterestOrError?: Maybe<CreateUserInterestForUserResponseOrError>;
};

export type CreateUserInterestMutationInput = {
  anonymousSessionId?: InputMaybe<Scalars['String']['input']>;
  body?: InputMaybe<Scalars['String']['input']>;
  category: UserInterestCategory;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  interestId: Scalars['String']['input'];
  interestType: UserInterestInterestType;
  private?: InputMaybe<Scalars['Boolean']['input']>;
  sessionID?: InputMaybe<Scalars['String']['input']>;
};

export type CreateUserInterestMutationPayload = {
  __typename?: 'CreateUserInterestMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  me: Me;
  userInterest: UserInterest;
};

export type CreateUserInterestsMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  userInterests: Array<UserInterestInput>;
};

export type CreateUserInterestsMutationPayload = {
  __typename?: 'CreateUserInterestsMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  me: Me;
  userInterestsOrErrors: Array<UserInterestOrError>;
};

export type CreateUserSaleProfileFailure = {
  __typename?: 'CreateUserSaleProfileFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type CreateUserSaleProfileMutationInput = {
  addressLine1?: InputMaybe<Scalars['String']['input']>;
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  requireBidderApproval?: InputMaybe<Scalars['Boolean']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['String']['input'];
  zip?: InputMaybe<Scalars['String']['input']>;
};

export type CreateUserSaleProfileMutationPayload = {
  __typename?: 'CreateUserSaleProfileMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  userSaleProfileOrError?: Maybe<CreateUserSaleProfileResponseOrError>;
};

export type CreateUserSaleProfileResponseOrError = CreateUserSaleProfileFailure | CreateUserSaleProfileSuccess;

export type CreateUserSaleProfileSuccess = {
  __typename?: 'CreateUserSaleProfileSuccess';
  userSaleProfile?: Maybe<UserSaleProfile>;
};

export type CreateUserSeenArtworkFailure = {
  __typename?: 'CreateUserSeenArtworkFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type CreateUserSeenArtworkInput = {
  artworkId: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type CreateUserSeenArtworkPayload = {
  __typename?: 'CreateUserSeenArtworkPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  userSeenArtworkOrError?: Maybe<CreateUserSeenArtworkSuccessResponseOrError>;
};

export type CreateUserSeenArtworkSuccess = {
  __typename?: 'CreateUserSeenArtworkSuccess';
  artworkId?: Maybe<Scalars['String']['output']>;
};

export type CreateUserSeenArtworkSuccessResponseOrError = CreateUserSeenArtworkFailure | CreateUserSeenArtworkSuccess;

export type CreateVerifiedRepresentativeFailure = {
  __typename?: 'CreateVerifiedRepresentativeFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type CreateVerifiedRepresentativeInput = {
  artistId: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  partnerId: Scalars['String']['input'];
};

export type CreateVerifiedRepresentativePayload = {
  __typename?: 'CreateVerifiedRepresentativePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  verifiedRepresentativeOrError?: Maybe<CreateVerifiedRepresentativeResponseOrError>;
};

export type CreateVerifiedRepresentativeResponseOrError = CreateVerifiedRepresentativeFailure | CreateVerifiedRepresentativeSuccess;

export type CreateVerifiedRepresentativeSuccess = {
  __typename?: 'CreateVerifiedRepresentativeSuccess';
  verifiedRepresentative?: Maybe<VerifiedRepresentative>;
};

export type CreateViewingRoomInput = {
  attributes?: InputMaybe<ViewingRoomAttributes>;
  body?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  endAt?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<ArImageInput>;
  introStatement?: InputMaybe<Scalars['String']['input']>;
  partnerID?: InputMaybe<Scalars['String']['input']>;
  partnerId?: InputMaybe<Scalars['String']['input']>;
  pullQuote?: InputMaybe<Scalars['String']['input']>;
  startAt?: InputMaybe<Scalars['String']['input']>;
  timeZone?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CreateViewingRoomPayload = {
  __typename?: 'CreateViewingRoomPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  viewingRoomOrErrors: ViewingRoomOrErrorsUnion;
};

export type Credentials = {
  __typename?: 'Credentials';
  credentials: Scalars['String']['output'];
  policyDocument: S3PolicyDocumentType;
  policyEncoded: Scalars['String']['output'];
  signature: Scalars['String']['output'];
};

export type CreditCard = {
  __typename?: 'CreditCard';
  brand: Scalars['String']['output'];
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  expirationMonth: Scalars['Int']['output'];
  expirationYear: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  lastDigits: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  street1?: Maybe<Scalars['String']['output']>;
  street2?: Maybe<Scalars['String']['output']>;
};

export type CreditCardConnection = {
  __typename?: 'CreditCardConnection';
  edges?: Maybe<Array<Maybe<CreditCardEdge>>>;
  pageInfo: PageInfo;
};

export type CreditCardEdge = {
  __typename?: 'CreditCardEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<CreditCard>;
};

export type CreditCardInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  oneTimeUse?: InputMaybe<Scalars['Boolean']['input']>;
  token: Scalars['String']['input'];
};

export type CreditCardMutationFailure = {
  __typename?: 'CreditCardMutationFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type CreditCardMutationSuccess = {
  __typename?: 'CreditCardMutationSuccess';
  creditCard?: Maybe<CreditCard>;
  creditCardEdge?: Maybe<CreditCardEdge>;
};

export type CreditCardMutationType = CreditCardMutationFailure | CreditCardMutationSuccess;

export type CreditCardPayload = {
  __typename?: 'CreditCardPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  creditCardOrError?: Maybe<CreditCardMutationType>;
  me?: Maybe<Me>;
};

export type CroppedImageUrl = {
  __typename?: 'CroppedImageUrl';
  height: Scalars['Int']['output'];
  src: Scalars['String']['output'];
  srcSet: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Int']['output'];
};

export enum CurrencyPreference {
  Eur = 'EUR',
  Gbp = 'GBP',
  Usd = 'USD'
}

export type CurrentEvent = {
  __typename?: 'CurrentEvent';
  details?: Maybe<Scalars['String']['output']>;
  event: UnderlyingCurrentEvent;
  href?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Image>;
  name?: Maybe<Scalars['String']['output']>;
  partner?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type DaySchedule = {
  __typename?: 'DaySchedule';
  dayOfWeek?: Maybe<Scalars['String']['output']>;
  endTime?: Maybe<Scalars['Int']['output']>;
  startTime?: Maybe<Scalars['Int']['output']>;
};

export type DayScheduleInput = {
  day?: InputMaybe<Scalars['Int']['input']>;
  endTime?: InputMaybe<Scalars['Int']['input']>;
  startTime?: InputMaybe<Scalars['Int']['input']>;
};

export type DeepZoom = {
  __typename?: 'DeepZoom';
  Image?: Maybe<DeepZoomImage>;
};

export type DeepZoomImage = {
  __typename?: 'DeepZoomImage';
  Format?: Maybe<Scalars['String']['output']>;
  Overlap?: Maybe<Scalars['Int']['output']>;
  Size?: Maybe<DeepZoomImageSize>;
  TileSize?: Maybe<Scalars['Int']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  xmlns?: Maybe<Scalars['String']['output']>;
};

export type DeepZoomImageSize = {
  __typename?: 'DeepZoomImageSize';
  Height?: Maybe<Scalars['Int']['output']>;
  Width?: Maybe<Scalars['Int']['output']>;
};

export type DeleteAccountInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  explanation?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type DeleteAccountPayload = {
  __typename?: 'DeleteAccountPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  userAccountOrError?: Maybe<AccountMutationType>;
};

export type DeleteAlertFailure = {
  __typename?: 'DeleteAlertFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type DeleteAlertResponseOrError = DeleteAlertFailure | DeleteAlertSuccess;

export type DeleteAlertSuccess = {
  __typename?: 'DeleteAlertSuccess';
  alert?: Maybe<Alert>;
};

export type DeleteArtistFailure = {
  __typename?: 'DeleteArtistFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type DeleteArtistInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
};

export type DeleteArtistPayload = {
  __typename?: 'DeleteArtistPayload';
  artistOrError?: Maybe<DeleteArtistSuccessOrErrorType>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type DeleteArtistSuccess = {
  __typename?: 'DeleteArtistSuccess';
  artist?: Maybe<Artist>;
};

export type DeleteArtistSuccessOrErrorType = DeleteArtistFailure | DeleteArtistSuccess;

export type DeleteArtworkFailure = {
  __typename?: 'DeleteArtworkFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type DeleteArtworkImageInput = {
  artworkID: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  imageID: Scalars['String']['input'];
};

export type DeleteArtworkImagePayload = {
  __typename?: 'DeleteArtworkImagePayload';
  artworkOrError?: Maybe<ArtworkMutationType>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type DeleteArtworkMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
};

export type DeleteArtworkMutationPayload = {
  __typename?: 'DeleteArtworkMutationPayload';
  artworkOrError?: Maybe<DeleteArtworkResponseOrError>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type DeleteArtworkResponseOrError = DeleteArtworkFailure | DeleteArtworkSuccess;

export type DeleteArtworkSuccess = {
  __typename?: 'DeleteArtworkSuccess';
  artwork?: Maybe<Artwork>;
};

export type DeleteBankAccountInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
};

export type DeleteBankAccountPayload = {
  __typename?: 'DeleteBankAccountPayload';
  bankAccountOrError?: Maybe<BankAccountMutationType>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
  me?: Maybe<Me>;
};

export type DeleteCareerHighlightFailure = {
  __typename?: 'DeleteCareerHighlightFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type DeleteCareerHighlightInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
};

export type DeleteCareerHighlightPayload = {
  __typename?: 'DeleteCareerHighlightPayload';
  careerHighlightOrError?: Maybe<DeleteCareerHighlightSuccessOrErrorType>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type DeleteCareerHighlightSuccess = {
  __typename?: 'DeleteCareerHighlightSuccess';
  careerHighlight?: Maybe<CareerHighlight>;
};

export type DeleteCareerHighlightSuccessOrErrorType = DeleteCareerHighlightFailure | DeleteCareerHighlightSuccess;

export type DeleteCollectionFailure = {
  __typename?: 'DeleteCollectionFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type DeleteCollectionResponseOrError = DeleteCollectionFailure | DeleteCollectionSuccess;

export type DeleteCollectionSuccess = {
  __typename?: 'DeleteCollectionSuccess';
  collection?: Maybe<Collection>;
};

export type DeleteConversationFailure = {
  __typename?: 'DeleteConversationFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type DeleteConversationMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
};

export type DeleteConversationMutationPayload = {
  __typename?: 'DeleteConversationMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  conversationOrError?: Maybe<DeleteConversationResponseOrError>;
};

export type DeleteConversationResponseOrError = DeleteConversationFailure | DeleteConversationSuccess;

export type DeleteConversationSuccess = {
  __typename?: 'DeleteConversationSuccess';
  conversation?: Maybe<Conversation>;
};

export type DeleteCreditCardInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
};

export type DeleteCreditCardPayload = {
  __typename?: 'DeleteCreditCardPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  creditCardOrError?: Maybe<CreditCardMutationType>;
  me?: Maybe<Me>;
};

export type DeleteFeatureFailure = {
  __typename?: 'DeleteFeatureFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type DeleteFeatureMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
};

export type DeleteFeatureMutationPayload = {
  __typename?: 'DeleteFeatureMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  featureOrError?: Maybe<DeleteFeatureResponseOrError>;
};

export type DeleteFeatureResponseOrError = DeleteFeatureFailure | DeleteFeatureSuccess;

export type DeleteFeatureSuccess = {
  __typename?: 'DeleteFeatureSuccess';
  feature?: Maybe<Feature>;
};

export type DeleteFeaturedLinkFailure = {
  __typename?: 'DeleteFeaturedLinkFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type DeleteFeaturedLinkMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
};

export type DeleteFeaturedLinkMutationPayload = {
  __typename?: 'DeleteFeaturedLinkMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  featuredLinkOrError?: Maybe<DeleteFeaturedLinkResponseOrError>;
};

export type DeleteFeaturedLinkResponseOrError = DeleteFeaturedLinkFailure | DeleteFeaturedLinkSuccess;

export type DeleteFeaturedLinkSuccess = {
  __typename?: 'DeleteFeaturedLinkSuccess';
  featuredLink?: Maybe<FeaturedLink>;
};

export type DeletePageFailure = {
  __typename?: 'DeletePageFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type DeletePageMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
};

export type DeletePageMutationPayload = {
  __typename?: 'DeletePageMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  pageOrError?: Maybe<DeletePageResponseOrError>;
};

export type DeletePageResponseOrError = DeletePageFailure | DeletePageSuccess;

export type DeletePageSuccess = {
  __typename?: 'DeletePageSuccess';
  page?: Maybe<Page>;
};

export type DeletePartnerArtistDocumentFailure = {
  __typename?: 'DeletePartnerArtistDocumentFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type DeletePartnerArtistDocumentMutationInput = {
  artistId: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  documentId: Scalars['String']['input'];
  partnerId: Scalars['String']['input'];
};

export type DeletePartnerArtistDocumentMutationPayload = {
  __typename?: 'DeletePartnerArtistDocumentMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  documentOrError?: Maybe<DeletePartnerArtistDocumentResponseOrError>;
};

export type DeletePartnerArtistDocumentResponseOrError = DeletePartnerArtistDocumentFailure | DeletePartnerArtistDocumentSuccess;

export type DeletePartnerArtistDocumentSuccess = {
  __typename?: 'DeletePartnerArtistDocumentSuccess';
  document?: Maybe<PartnerDocument>;
  partner?: Maybe<Partner>;
};

export type DeletePartnerArtistFailure = {
  __typename?: 'DeletePartnerArtistFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type DeletePartnerArtistMutationInput = {
  artistId: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  partnerId: Scalars['String']['input'];
};

export type DeletePartnerArtistMutationPayload = {
  __typename?: 'DeletePartnerArtistMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  partnerArtistOrError?: Maybe<DeletePartnerArtistResponseOrError>;
};

export type DeletePartnerArtistResponseOrError = DeletePartnerArtistFailure | DeletePartnerArtistSuccess;

export type DeletePartnerArtistSuccess = {
  __typename?: 'DeletePartnerArtistSuccess';
  partner?: Maybe<Partner>;
};

export type DeletePartnerContactFailure = {
  __typename?: 'DeletePartnerContactFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type DeletePartnerContactMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contactId: Scalars['String']['input'];
  partnerId: Scalars['String']['input'];
};

export type DeletePartnerContactMutationPayload = {
  __typename?: 'DeletePartnerContactMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  partnerContactOrError?: Maybe<DeletePartnerContactOrError>;
};

export type DeletePartnerContactOrError = DeletePartnerContactFailure | DeletePartnerContactSuccess;

export type DeletePartnerContactSuccess = {
  __typename?: 'DeletePartnerContactSuccess';
  partnerContact?: Maybe<Contact>;
};

export type DeletePartnerLocationFailure = {
  __typename?: 'DeletePartnerLocationFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type DeletePartnerLocationMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  locationId: Scalars['String']['input'];
  partnerId: Scalars['String']['input'];
};

export type DeletePartnerLocationMutationPayload = {
  __typename?: 'DeletePartnerLocationMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  partnerLocationOrError?: Maybe<DeletePartnerLocationOrError>;
};

export type DeletePartnerLocationOrError = DeletePartnerLocationFailure | DeletePartnerLocationSuccess;

export type DeletePartnerLocationSuccess = {
  __typename?: 'DeletePartnerLocationSuccess';
  location?: Maybe<Location>;
};

export type DeletePartnerShowDocumentFailure = {
  __typename?: 'DeletePartnerShowDocumentFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type DeletePartnerShowDocumentMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  documentId: Scalars['String']['input'];
  partnerId: Scalars['String']['input'];
  showId: Scalars['String']['input'];
};

export type DeletePartnerShowDocumentMutationPayload = {
  __typename?: 'DeletePartnerShowDocumentMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  documentOrError?: Maybe<DeletePartnerShowDocumentResponseOrError>;
};

export type DeletePartnerShowDocumentResponseOrError = DeletePartnerShowDocumentFailure | DeletePartnerShowDocumentSuccess;

export type DeletePartnerShowDocumentSuccess = {
  __typename?: 'DeletePartnerShowDocumentSuccess';
  document?: Maybe<PartnerDocument>;
  show?: Maybe<Show>;
};

export type DeletePartnerShowEventFailure = {
  __typename?: 'DeletePartnerShowEventFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type DeletePartnerShowEventMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  eventId: Scalars['String']['input'];
  partnerId: Scalars['String']['input'];
  showId: Scalars['String']['input'];
};

export type DeletePartnerShowEventMutationPayload = {
  __typename?: 'DeletePartnerShowEventMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  showEventOrError?: Maybe<DeletePartnerShowEventResponseOrError>;
};

export type DeletePartnerShowEventResponseOrError = DeletePartnerShowEventFailure | DeletePartnerShowEventSuccess;

export type DeletePartnerShowEventSuccess = {
  __typename?: 'DeletePartnerShowEventSuccess';
  show?: Maybe<Show>;
  showEvent?: Maybe<ShowEventType>;
};

export type DeletePartnerShowFailure = {
  __typename?: 'DeletePartnerShowFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type DeletePartnerShowMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  partnerId: Scalars['String']['input'];
  showId: Scalars['String']['input'];
};

export type DeletePartnerShowMutationPayload = {
  __typename?: 'DeletePartnerShowMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  showOrError?: Maybe<DeletePartnerShowResponseOrError>;
};

export type DeletePartnerShowResponseOrError = DeletePartnerShowFailure | DeletePartnerShowSuccess;

export type DeletePartnerShowSuccess = {
  __typename?: 'DeletePartnerShowSuccess';
  show?: Maybe<Show>;
};

export type DeletePurchaseFailure = {
  __typename?: 'DeletePurchaseFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type DeletePurchaseResponseOrError = DeletePurchaseFailure | DeletePurchaseSuccess;

export type DeletePurchaseSuccess = {
  __typename?: 'DeletePurchaseSuccess';
  purchase?: Maybe<Purchase>;
};

export type DeleteUserAddressInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  userAddressID: Scalars['ID']['input'];
};

export type DeleteUserAddressPayload = {
  __typename?: 'DeleteUserAddressPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  me?: Maybe<Me>;
  userAddressOrErrors: UserAddressOrErrorsUnion;
};

export type DeleteUserFailure = {
  __typename?: 'DeleteUserFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type DeleteUserIconInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type DeleteUserIconPayload = {
  __typename?: 'DeleteUserIconPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  iconOrError?: Maybe<UserIconDeletionMutationType>;
};

export type DeleteUserInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
};

export type DeleteUserInterestFailure = {
  __typename?: 'DeleteUserInterestFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type DeleteUserInterestForUserInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type DeleteUserInterestForUserPayload = {
  __typename?: 'DeleteUserInterestForUserPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  userInterestOrError?: Maybe<DeleteUserInterestForUserResponseOrError>;
};

export type DeleteUserInterestMutationInput = {
  anonymousSessionId?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  sessionID?: InputMaybe<Scalars['String']['input']>;
};

export type DeleteUserInterestMutationPayload = {
  __typename?: 'DeleteUserInterestMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  me: Me;
  userInterest: UserInterest;
};

export type DeleteUserInterestOrErrorType = DeleteUserInterestFailure | UserInterest;

export type DeleteUserInterestsMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  ids: Array<Scalars['String']['input']>;
};

export type DeleteUserInterestsMutationPayload = {
  __typename?: 'DeleteUserInterestsMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  me: Me;
  userInterestsOrErrors: Array<DeleteUserInterestOrErrorType>;
};

export type DeleteUserPayload = {
  __typename?: 'DeleteUserPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  userOrError?: Maybe<DeleteUserResponseOrError>;
};

export type DeleteUserResponseOrError = DeleteUserFailure | DeleteUserSuccess;

export type DeleteUserSuccess = {
  __typename?: 'DeleteUserSuccess';
  user?: Maybe<User>;
};

export type DeleteVerifiedRepresentativeFailure = {
  __typename?: 'DeleteVerifiedRepresentativeFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type DeleteVerifiedRepresentativeMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
};

export type DeleteVerifiedRepresentativeMutationPayload = {
  __typename?: 'DeleteVerifiedRepresentativeMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  verifiedRepresentativeOrError?: Maybe<DeleteVerifiedRepresentativeResponseOrError>;
};

export type DeleteVerifiedRepresentativeResponseOrError = DeleteVerifiedRepresentativeFailure | DeleteVerifiedRepresentativeSuccess;

export type DeleteVerifiedRepresentativeSuccess = {
  __typename?: 'DeleteVerifiedRepresentativeSuccess';
  verifiedRepresentative?: Maybe<VerifiedRepresentative>;
};

export type DeleteViewingRoomInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  viewingRoomID: Scalars['ID']['input'];
};

export type DeleteViewingRoomPayload = {
  __typename?: 'DeleteViewingRoomPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  viewingRoom: ViewingRoom;
};

export type DeliverSecondFactorInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  secondFactorID: Scalars['ID']['input'];
};

export type DeliverSecondFactorPayload = {
  __typename?: 'DeliverSecondFactorPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  secondFactorOrErrors: SecondFactorOrErrorsUnion;
};

export type Delivery = {
  __typename?: 'Delivery';
  bouncedAt?: Maybe<Scalars['String']['output']>;
  clickedAt?: Maybe<Scalars['String']['output']>;
  deliveredAt?: Maybe<Scalars['String']['output']>;
  fullTransformedEmail: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  openedAt?: Maybe<Scalars['String']['output']>;
};


export type DeliveryBouncedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type DeliveryClickedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type DeliveryDeliveredAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type DeliveryOpenedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type DeliveryInfo = {
  __typename?: 'DeliveryInfo';
  estimatedDelivery?: Maybe<Scalars['String']['output']>;
  estimatedDeliveryWindow?: Maybe<Scalars['String']['output']>;
  shipperName?: Maybe<Scalars['String']['output']>;
  trackingNumber?: Maybe<Scalars['String']['output']>;
  trackingURL?: Maybe<Scalars['String']['output']>;
};

export type Department = {
  __typename?: 'Department';
  id: Scalars['ID']['output'];
  /** @deprecated Field no longer supported */
  jobs: Array<Job>;
  name: Scalars['String']['output'];
};

export type Device = {
  __typename?: 'Device';
  appId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  platform: Scalars['String']['output'];
  production: Scalars['Boolean']['output'];
  token: Scalars['String']['output'];
};

export type DisableSecondFactorInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  secondFactorID: Scalars['ID']['input'];
};

export type DisableSecondFactorPayload = {
  __typename?: 'DisableSecondFactorPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  secondFactorOrErrors: SecondFactorOrErrorsUnion;
};

export type DiscoveryCategoriesConnectionConnection = {
  __typename?: 'DiscoveryCategoriesConnectionConnection';
  edges?: Maybe<Array<Maybe<DiscoveryCategoriesConnectionEdge>>>;
  pageCursors: PageCursors;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type DiscoveryCategoriesConnectionEdge = {
  __typename?: 'DiscoveryCategoriesConnectionEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<DiscoveryCategory>;
};

export type DiscoveryCategory = {
  __typename?: 'DiscoveryCategory';
  category: Scalars['String']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type DislikeArtworkInput = {
  artworkID: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  remove: Scalars['Boolean']['input'];
};

export type DislikeArtworkPayload = {
  __typename?: 'DislikeArtworkPayload';
  artwork?: Maybe<Artwork>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
  me: Me;
};

export type DismissTaskFailure = {
  __typename?: 'DismissTaskFailure';
  mutationError: GravityMutationError;
};

export type DismissTaskMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
};

export type DismissTaskMutationPayload = {
  __typename?: 'DismissTaskMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  homeViewTasksSection?: Maybe<HomeViewSectionTasks>;
  taskOrError: DismissTaskResponseOrError;
};

export type DismissTaskResponseOrError = DismissTaskFailure | DismissTaskSuccess;

export type DismissTaskSuccess = {
  __typename?: 'DismissTaskSuccess';
  task: Task;
};

export type DisplayTexts = {
  __typename?: 'DisplayTexts';
  messageType: DisplayTextsMessageTypeEnum;
  title: Scalars['String']['output'];
};

export enum DisplayTextsMessageTypeEnum {
  ApprovedPickup = 'APPROVED_PICKUP',
  ApprovedShip = 'APPROVED_SHIP',
  ApprovedShipExpress = 'APPROVED_SHIP_EXPRESS',
  ApprovedShipStandard = 'APPROVED_SHIP_STANDARD',
  ApprovedShipWhiteGlove = 'APPROVED_SHIP_WHITE_GLOVE',
  Canceled = 'CANCELED',
  CompletedPickup = 'COMPLETED_PICKUP',
  CompletedShip = 'COMPLETED_SHIP',
  DeclinedByBuyer = 'DECLINED_BY_BUYER',
  DeclinedBySeller = 'DECLINED_BY_SELLER',
  PaymentFailed = 'PAYMENT_FAILED',
  ProcessingPaymentPickup = 'PROCESSING_PAYMENT_PICKUP',
  ProcessingPaymentShip = 'PROCESSING_PAYMENT_SHIP',
  ProcessingWire = 'PROCESSING_WIRE',
  Refunded = 'REFUNDED',
  Shipped = 'SHIPPED',
  SubmittedOffer = 'SUBMITTED_OFFER',
  SubmittedOrder = 'SUBMITTED_ORDER',
  Unknown = 'UNKNOWN'
}

export type DoNotUseThisPartner = {
  __typename?: 'DoNotUseThisPartner';
  displayName?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use displayName */
  display_name?: Maybe<Scalars['String']['output']>;
  givenName?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use givenName */
  given_name?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  relativeSize?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use relativeSize */
  relative_size?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  subscriptionState?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use subscriptionState */
  subscription_state?: Maybe<Scalars['String']['output']>;
};

export type EditableLocation = {
  address?: InputMaybe<Scalars['String']['input']>;
  address2?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  coordinates?: InputMaybe<Array<Scalars['Float']['input']>>;
  country?: InputMaybe<Scalars['String']['input']>;
  countryCode?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  stateCode?: InputMaybe<Scalars['String']['input']>;
  summary?: InputMaybe<Scalars['String']['input']>;
};

export type EditionSet = Sellable & {
  __typename?: 'EditionSet';
  artistProofs?: Maybe<Scalars['String']['output']>;
  availability?: Maybe<Scalars['String']['output']>;
  availableEditions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  depth?: Maybe<Scalars['String']['output']>;
  diameter?: Maybe<Scalars['String']['output']>;
  dimensions?: Maybe<Dimensions>;
  displayLabel?: Maybe<Scalars['String']['output']>;
  displayPriceRange?: Maybe<Scalars['Boolean']['output']>;
  duration?: Maybe<Scalars['String']['output']>;
  editionOf?: Maybe<Scalars['String']['output']>;
  editionSize?: Maybe<Scalars['String']['output']>;
  framedDepth?: Maybe<Scalars['String']['output']>;
  framedDiameter?: Maybe<Scalars['String']['output']>;
  framedHeight?: Maybe<Scalars['String']['output']>;
  framedMetric?: Maybe<Scalars['String']['output']>;
  framedWidth?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['String']['output']>;
  heightCm?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  internalDisplayPrice?: Maybe<Scalars['String']['output']>;
  internalID: Scalars['ID']['output'];
  inventory?: Maybe<EditionSetInventory>;
  isAcquireable?: Maybe<Scalars['Boolean']['output']>;
  isForSale?: Maybe<Scalars['Boolean']['output']>;
  isInAuction?: Maybe<Scalars['Boolean']['output']>;
  isInquireable?: Maybe<Scalars['Boolean']['output']>;
  isOfferable?: Maybe<Scalars['Boolean']['output']>;
  isOfferableFromInquiry?: Maybe<Scalars['Boolean']['output']>;
  isPriceHidden?: Maybe<Scalars['Boolean']['output']>;
  isSold?: Maybe<Scalars['Boolean']['output']>;
  listPrice?: Maybe<ListPrice>;
  listingOptions?: Maybe<ArtworkListingOptions>;
  metric?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['String']['output']>;
  priceDisplay?: Maybe<Scalars['String']['output']>;
  priceListed?: Maybe<Money>;
  prototypes?: Maybe<Scalars['String']['output']>;
  published?: Maybe<Scalars['Boolean']['output']>;
  saleMessage?: Maybe<Scalars['String']['output']>;
  shippingWeight?: Maybe<Scalars['String']['output']>;
  shippingWeightMetric?: Maybe<Scalars['String']['output']>;
  sizeBucket?: Maybe<Scalars['String']['output']>;
  sizeScore?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['String']['output']>;
  widthCm?: Maybe<Scalars['Float']['output']>;
};

export type EditionSetInventory = {
  __typename?: 'EditionSetInventory';
  count?: Maybe<Scalars['Int']['output']>;
  isUnlimited?: Maybe<Scalars['Boolean']['output']>;
};

export enum EditionSetSorts {
  PriceAsc = 'PRICE_ASC'
}

export type EnableSecondFactorInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  secondFactorID: Scalars['ID']['input'];
};

export type EnableSecondFactorPayload = {
  __typename?: 'EnableSecondFactorPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  recoveryCodes?: Maybe<Array<Scalars['String']['output']>>;
  secondFactorOrErrors: SecondFactorOrErrorsUnion;
};

export type EndSaleInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  saleID?: InputMaybe<Scalars['String']['input']>;
};

export type EndSalePayload = {
  __typename?: 'EndSalePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  sale?: Maybe<Sale>;
};

export type EntityWithFilterArtworksConnectionInterface = {
  filterArtworksConnection?: Maybe<FilterArtworksConnection>;
  id: Scalars['ID']['output'];
};


export type EntityWithFilterArtworksConnectionInterfaceFilterArtworksConnectionArgs = {
  acquireable?: InputMaybe<Scalars['Boolean']['input']>;
  additionalGeneIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  after?: InputMaybe<Scalars['String']['input']>;
  aggregationPartnerCities?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  aggregations?: InputMaybe<Array<InputMaybe<ArtworkAggregation>>>;
  artistID?: InputMaybe<Scalars['String']['input']>;
  artistIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  artistNationalities?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  artistSeriesID?: InputMaybe<Scalars['String']['input']>;
  artistSeriesIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  artworkIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  atAuction?: InputMaybe<Scalars['Boolean']['input']>;
  attributionClass?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  availability?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  color?: InputMaybe<Scalars['String']['input']>;
  colors?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dimensionRange?: InputMaybe<Scalars['String']['input']>;
  disableNotForSaleSorting?: InputMaybe<Scalars['Boolean']['input']>;
  excludeArtworkIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  extraAggregationGeneIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forSale?: InputMaybe<Scalars['Boolean']['input']>;
  framed?: InputMaybe<Scalars['Boolean']['input']>;
  geneID?: InputMaybe<Scalars['String']['input']>;
  geneIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  height?: InputMaybe<Scalars['String']['input']>;
  importSources?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  includeAllJSON?: InputMaybe<Scalars['Boolean']['input']>;
  includeArtworksByFollowedArtists?: InputMaybe<Scalars['Boolean']['input']>;
  includeMediumFilterInAggregation?: InputMaybe<Scalars['Boolean']['input']>;
  includeUnpublished?: InputMaybe<Scalars['Boolean']['input']>;
  inquireableOnly?: InputMaybe<Scalars['Boolean']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  keywordMatchExact?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locationCities?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  majorPeriods?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  marketable?: InputMaybe<Scalars['Boolean']['input']>;
  marketingCollectionID?: InputMaybe<Scalars['String']['input']>;
  materialsTerms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  medium?: InputMaybe<Scalars['String']['input']>;
  offerable?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  partnerCities?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  partnerID?: InputMaybe<Scalars['ID']['input']>;
  partnerIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  period?: InputMaybe<Scalars['String']['input']>;
  periods?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  priceRange?: InputMaybe<Scalars['String']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  saleID?: InputMaybe<Scalars['ID']['input']>;
  showID?: InputMaybe<Scalars['String']['input']>;
  signed?: InputMaybe<Scalars['Boolean']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sizes?: InputMaybe<Array<InputMaybe<ArtworkSizes>>>;
  sold?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  tagID?: InputMaybe<Scalars['String']['input']>;
  visibilityLevel?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['String']['input']>;
};

export type Error = {
  __typename?: 'Error';
  code: Scalars['String']['output'];
  data?: Maybe<Scalars['JSON']['output']>;
  message: Scalars['String']['output'];
  path?: Maybe<Array<Scalars['String']['output']>>;
};

export type Errors = {
  __typename?: 'Errors';
  errors: Array<Error>;
};

export enum EventStatus {
  All = 'ALL',
  Closed = 'CLOSED',
  ClosingSoon = 'CLOSING_SOON',
  Current = 'CURRENT',
  Running = 'RUNNING',
  RunningAndUpcoming = 'RUNNING_AND_UPCOMING',
  Upcoming = 'UPCOMING'
}

export type ExchangeError = {
  __typename?: 'ExchangeError';
  code: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

export type ExcludeArtistFromDiscoveryFailure = {
  __typename?: 'ExcludeArtistFromDiscoveryFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type ExcludeArtistFromDiscoveryInput = {
  artistId: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type ExcludeArtistFromDiscoveryPayload = {
  __typename?: 'ExcludeArtistFromDiscoveryPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  excludeArtistFromDiscoveryOrError?: Maybe<ExcludeArtistFromDiscoveryResponseOrError>;
};

export type ExcludeArtistFromDiscoveryResponseOrError = ExcludeArtistFromDiscoveryFailure | ExcludeArtistFromDiscoverySuccess;

export type ExcludeArtistFromDiscoverySuccess = {
  __typename?: 'ExcludeArtistFromDiscoverySuccess';
  artistId?: Maybe<Scalars['String']['output']>;
};

export enum ExhibitionPeriodFormat {
  Long = 'LONG',
  Short = 'SHORT'
}

export type External = {
  __typename?: 'External';
  auctionHouses: Array<ExternalAuctionHouse>;
  fairs: Array<ExternalFair>;
  galleries: Array<ExternalGallery>;
};


export type ExternalAuctionHousesArgs = {
  size?: InputMaybe<Scalars['Int']['input']>;
  term?: InputMaybe<Scalars['String']['input']>;
};


export type ExternalFairsArgs = {
  size?: InputMaybe<Scalars['Int']['input']>;
  term?: InputMaybe<Scalars['String']['input']>;
};


export type ExternalGalleriesArgs = {
  artsyOnly?: InputMaybe<Scalars['Boolean']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  term?: InputMaybe<Scalars['String']['input']>;
};

export type ExternalAuctionHouse = {
  __typename?: 'ExternalAuctionHouse';
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type ExternalFair = {
  __typename?: 'ExternalFair';
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  endAt?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  startAt?: Maybe<Scalars['String']['output']>;
};


export type ExternalFairEndAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type ExternalFairStartAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type ExternalGallery = {
  __typename?: 'ExternalGallery';
  city?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  partner?: Maybe<Partner>;
  region?: Maybe<Scalars['String']['output']>;
};

export type ExternalPartner = {
  __typename?: 'ExternalPartner';
  city?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type Fair = EntityWithFilterArtworksConnectionInterface & Node & {
  __typename?: 'Fair';
  about?: Maybe<Scalars['String']['output']>;
  activeStartAt?: Maybe<Scalars['String']['output']>;
  articlesConnection?: Maybe<ArticleConnection>;
  artistsConnection?: Maybe<ArtistConnection>;
  bannerSize?: Maybe<Scalars['String']['output']>;
  cached?: Maybe<Scalars['Int']['output']>;
  contact?: Maybe<Scalars['String']['output']>;
  counts?: Maybe<FairCounts>;
  endAt?: Maybe<Scalars['String']['output']>;
  exhibitionPeriod?: Maybe<Scalars['String']['output']>;
  exhibitorsGroupedByName?: Maybe<Array<Maybe<FairExhibitorsGroup>>>;
  featuredKeywords: Array<Scalars['String']['output']>;
  filterArtworksConnection?: Maybe<FilterArtworksConnection>;
  followedContent?: Maybe<FollowedContent>;
  formattedOpeningHours?: Maybe<Scalars['String']['output']>;
  hasFullFeature?: Maybe<Scalars['Boolean']['output']>;
  hasHomepageSection?: Maybe<Scalars['Boolean']['output']>;
  hasLargeBanner?: Maybe<Scalars['Boolean']['output']>;
  hasListing?: Maybe<Scalars['Boolean']['output']>;
  hours?: Maybe<Scalars['String']['output']>;
  href?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Image>;
  internalID: Scalars['ID']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  isPublished?: Maybe<Scalars['Boolean']['output']>;
  links?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Location>;
  marketingCollectionSlugs: Array<Maybe<Scalars['String']['output']>>;
  marketingCollections: Array<Maybe<MarketingCollection>>;
  mobileImage?: Maybe<Image>;
  name?: Maybe<Scalars['String']['output']>;
  organizer?: Maybe<FairOrganizer>;
  profile?: Maybe<Profile>;
  showsConnection?: Maybe<ShowConnection>;
  slug: Scalars['ID']['output'];
  sponsoredContent?: Maybe<FairSponsoredContent>;
  startAt?: Maybe<Scalars['String']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
  tagline?: Maybe<Scalars['String']['output']>;
  tickets?: Maybe<Scalars['String']['output']>;
  ticketsLink?: Maybe<Scalars['String']['output']>;
};


export type FairAboutArgs = {
  format?: InputMaybe<Format>;
};


export type FairActiveStartAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type FairArticlesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  inEditorialFeed?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<ArticleSorts>;
};


export type FairArtistsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<FairArtistSorts>;
};


export type FairContactArgs = {
  format?: InputMaybe<Format>;
};


export type FairEndAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type FairExhibitionPeriodArgs = {
  format?: InputMaybe<ExhibitionPeriodFormat>;
};


export type FairFilterArtworksConnectionArgs = {
  acquireable?: InputMaybe<Scalars['Boolean']['input']>;
  additionalGeneIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  after?: InputMaybe<Scalars['String']['input']>;
  aggregationPartnerCities?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  aggregations?: InputMaybe<Array<InputMaybe<ArtworkAggregation>>>;
  artistID?: InputMaybe<Scalars['String']['input']>;
  artistIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  artistNationalities?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  artistSeriesID?: InputMaybe<Scalars['String']['input']>;
  artistSeriesIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  artworkIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  atAuction?: InputMaybe<Scalars['Boolean']['input']>;
  attributionClass?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  availability?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  color?: InputMaybe<Scalars['String']['input']>;
  colors?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dimensionRange?: InputMaybe<Scalars['String']['input']>;
  disableNotForSaleSorting?: InputMaybe<Scalars['Boolean']['input']>;
  excludeArtworkIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  extraAggregationGeneIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forSale?: InputMaybe<Scalars['Boolean']['input']>;
  framed?: InputMaybe<Scalars['Boolean']['input']>;
  geneID?: InputMaybe<Scalars['String']['input']>;
  geneIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  height?: InputMaybe<Scalars['String']['input']>;
  importSources?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  includeAllJSON?: InputMaybe<Scalars['Boolean']['input']>;
  includeArtworksByFollowedArtists?: InputMaybe<Scalars['Boolean']['input']>;
  includeMediumFilterInAggregation?: InputMaybe<Scalars['Boolean']['input']>;
  includeUnpublished?: InputMaybe<Scalars['Boolean']['input']>;
  input?: InputMaybe<FilterArtworksInput>;
  inquireableOnly?: InputMaybe<Scalars['Boolean']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  keywordMatchExact?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locationCities?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  majorPeriods?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  marketable?: InputMaybe<Scalars['Boolean']['input']>;
  marketingCollectionID?: InputMaybe<Scalars['String']['input']>;
  materialsTerms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  medium?: InputMaybe<Scalars['String']['input']>;
  offerable?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  partnerCities?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  partnerID?: InputMaybe<Scalars['ID']['input']>;
  partnerIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  period?: InputMaybe<Scalars['String']['input']>;
  periods?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  priceRange?: InputMaybe<Scalars['String']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  saleID?: InputMaybe<Scalars['ID']['input']>;
  showID?: InputMaybe<Scalars['String']['input']>;
  signed?: InputMaybe<Scalars['Boolean']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sizes?: InputMaybe<Array<InputMaybe<ArtworkSizes>>>;
  sold?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  tagID?: InputMaybe<Scalars['String']['input']>;
  visibilityLevel?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['String']['input']>;
};


export type FairHoursArgs = {
  format?: InputMaybe<Format>;
};


export type FairLinksArgs = {
  format?: InputMaybe<Format>;
};


export type FairMarketingCollectionsArgs = {
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type FairShowsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  section?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<ShowSorts>;
  totalCount?: InputMaybe<Scalars['Boolean']['input']>;
};


export type FairStartAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type FairSummaryArgs = {
  format?: InputMaybe<Format>;
};


export type FairTicketsArgs = {
  format?: InputMaybe<Format>;
};

export enum FairArtistSorts {
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC'
}

export type FairConnection = {
  __typename?: 'FairConnection';
  edges?: Maybe<Array<Maybe<FairEdge>>>;
  pageCursors: PageCursors;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type FairCounts = {
  __typename?: 'FairCounts';
  artists?: Maybe<Scalars['FormattedNumber']['output']>;
  artworks?: Maybe<Scalars['FormattedNumber']['output']>;
  partnerShows?: Maybe<Scalars['FormattedNumber']['output']>;
  partners?: Maybe<Scalars['FormattedNumber']['output']>;
};


export type FairCountsArtistsArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
};


export type FairCountsArtworksArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
};


export type FairCountsPartnerShowsArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
};


export type FairCountsPartnersArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
};

export type FairEdge = {
  __typename?: 'FairEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Fair>;
};

export type FairExhibitor = {
  __typename?: 'FairExhibitor';
  name?: Maybe<Scalars['String']['output']>;
  partner?: Maybe<Partner>;
  partnerID?: Maybe<Scalars['String']['output']>;
  profileID?: Maybe<Scalars['String']['output']>;
  slug: Scalars['ID']['output'];
};

export type FairExhibitorsGroup = {
  __typename?: 'FairExhibitorsGroup';
  exhibitors?: Maybe<Array<Maybe<FairExhibitor>>>;
  letter?: Maybe<Scalars['String']['output']>;
};

export type FairOrganizer = {
  __typename?: 'FairOrganizer';
  about?: Maybe<Scalars['String']['output']>;
  articlesConnection?: Maybe<ArticleConnection>;
  fairsConnection?: Maybe<FairConnection>;
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  profile?: Maybe<Profile>;
  profileID?: Maybe<Scalars['ID']['output']>;
  slug: Scalars['ID']['output'];
  website?: Maybe<Scalars['String']['output']>;
};


export type FairOrganizerAboutArgs = {
  format?: InputMaybe<Format>;
};


export type FairOrganizerArticlesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  inEditorialFeed?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<ArticleSorts>;
};


export type FairOrganizerFairsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  hasFullFeature?: InputMaybe<Scalars['Boolean']['input']>;
  hasHomepageSection?: InputMaybe<Scalars['Boolean']['input']>;
  hasListing?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<FairSorts>;
  status?: InputMaybe<EventStatus>;
};

export enum FairSorts {
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  StartAtAsc = 'START_AT_ASC',
  StartAtDesc = 'START_AT_DESC'
}

export type FairSponsoredContent = {
  __typename?: 'FairSponsoredContent';
  activationText?: Maybe<Scalars['String']['output']>;
  pressReleaseUrl?: Maybe<Scalars['String']['output']>;
};

export type Feature = {
  __typename?: 'Feature';
  callout?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Image>;
  internalID: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  layout: FeatureLayouts;
  meta: FeatureMeta;
  metaTitle?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  setsConnection?: Maybe<OrderedSetConnection>;
  slug: Scalars['ID']['output'];
  subheadline?: Maybe<Scalars['String']['output']>;
};


export type FeatureCalloutArgs = {
  format?: InputMaybe<Format>;
};


export type FeatureDescriptionArgs = {
  format?: InputMaybe<Format>;
};


export type FeatureSetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<OrderedSetSorts>;
};


export type FeatureSubheadlineArgs = {
  format?: InputMaybe<Format>;
};

export type FeatureConnection = {
  __typename?: 'FeatureConnection';
  edges?: Maybe<Array<Maybe<FeatureEdge>>>;
  pageCursors: PageCursors;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type FeatureEdge = {
  __typename?: 'FeatureEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Feature>;
};

export type FeatureFlag = {
  __typename?: 'FeatureFlag';
  createdAt?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  environments?: Maybe<Array<Maybe<FeatureFlagEnvironments>>>;
  id: Scalars['ID']['output'];
  impressionData: Scalars['Boolean']['output'];
  lastSeenAt?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  project: Scalars['String']['output'];
  stale: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
  variants?: Maybe<Array<Maybe<FeatureFlagVariantType>>>;
};


export type FeatureFlagCreatedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type FeatureFlagLastSeenAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type FeatureFlagEnvironments = {
  __typename?: 'FeatureFlagEnvironments';
  enabled: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
};

export type FeatureFlagStrategyInput = {
  rollOut?: InputMaybe<Scalars['Int']['input']>;
  strategyType?: InputMaybe<FeatureFlagStrategyType>;
};

export enum FeatureFlagStrategyType {
  Default = 'DEFAULT',
  FlexibleRollout = 'FLEXIBLE_ROLLOUT'
}

export enum FeatureFlagToggleType {
  Experiment = 'EXPERIMENT',
  Release = 'RELEASE'
}

export type FeatureFlagVariantInputName = {
  name: Scalars['String']['input'];
  stickiness?: InputMaybe<Scalars['String']['input']>;
  weight: Scalars['Int']['input'];
  weightType?: InputMaybe<FeatureFlagVariantWeightType>;
};

export type FeatureFlagVariantType = {
  __typename?: 'FeatureFlagVariantType';
  name?: Maybe<Scalars['String']['output']>;
  stickiness?: Maybe<Scalars['String']['output']>;
  weight?: Maybe<Scalars['Int']['output']>;
  weightType?: Maybe<Scalars['String']['output']>;
};

export enum FeatureFlagVariantWeightType {
  Variable = 'VARIABLE'
}

export enum FeatureFlagsSortBy {
  CreatedAt = 'CREATED_AT',
  Name = 'NAME'
}

export enum FeatureLayouts {
  Default = 'DEFAULT',
  Full = 'FULL'
}

export type FeatureMeta = {
  __typename?: 'FeatureMeta';
  description: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `title` instead */
  name: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export enum FeatureSorts {
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC'
}

export type FeaturedGeneLink = {
  __typename?: 'FeaturedGeneLink';
  href: Scalars['String']['output'];
  image?: Maybe<Image>;
  internalID: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type FeaturedLink = {
  __typename?: 'FeaturedLink';
  description?: Maybe<Scalars['String']['output']>;
  entity?: Maybe<FeaturedLinkEntity>;
  href?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Image>;
  initials?: Maybe<Scalars['String']['output']>;
  internalID: Scalars['ID']['output'];
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


export type FeaturedLinkDescriptionArgs = {
  format?: InputMaybe<Format>;
};


export type FeaturedLinkInitialsArgs = {
  length?: InputMaybe<Scalars['Int']['input']>;
};


export type FeaturedLinkSubtitleArgs = {
  format?: InputMaybe<Format>;
};

export type FeaturedLinkConnection = {
  __typename?: 'FeaturedLinkConnection';
  edges?: Maybe<Array<Maybe<FeaturedLinkEdge>>>;
  pageCursors: PageCursors;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type FeaturedLinkEdge = {
  __typename?: 'FeaturedLinkEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<FeaturedLink>;
};

export type FeaturedLinkEntity = Artist | Gene | Partner;

export type Feedback = {
  __typename?: 'Feedback';
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  message: Scalars['String']['output'];
};

export type FieldErrorResults = {
  __typename?: 'FieldErrorResults';
  message: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type FilterArtworksConnection = ArtworkConnectionInterface & Node & {
  __typename?: 'FilterArtworksConnection';
  aggregations?: Maybe<Array<Maybe<ArtworksAggregationResults>>>;
  counts?: Maybe<FilterArtworksCounts>;
  edges?: Maybe<Array<Maybe<FilterArtworksEdge>>>;
  facet?: Maybe<ArtworkFilterFacet>;
  /** @deprecated Prefer to use `edges`. [Will be removed in v2] */
  hits?: Maybe<Array<Maybe<Artwork>>>;
  id: Scalars['ID']['output'];
  merchandisableArtists?: Maybe<Array<Maybe<Artist>>>;
  pageCursors: PageCursors;
  pageInfo: PageInfo;
};


export type FilterArtworksConnectionMerchandisableArtistsArgs = {
  size?: InputMaybe<Scalars['Int']['input']>;
};

export type FilterArtworksCounts = {
  __typename?: 'FilterArtworksCounts';
  followedArtists?: Maybe<Scalars['FormattedNumber']['output']>;
  total?: Maybe<Scalars['FormattedNumber']['output']>;
};


export type FilterArtworksCountsFollowedArtistsArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
};


export type FilterArtworksCountsTotalArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
};

export type FilterArtworksEdge = ArtworkEdgeInterface & {
  __typename?: 'FilterArtworksEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Artwork>;
};

export type FilterArtworksInput = {
  acquireable?: InputMaybe<Scalars['Boolean']['input']>;
  additionalGeneIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  after?: InputMaybe<Scalars['String']['input']>;
  aggregationPartnerCities?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  aggregations?: InputMaybe<Array<InputMaybe<ArtworkAggregation>>>;
  artistID?: InputMaybe<Scalars['String']['input']>;
  artistIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  artistNationalities?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  artistSeriesID?: InputMaybe<Scalars['String']['input']>;
  artistSeriesIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  artworkIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  atAuction?: InputMaybe<Scalars['Boolean']['input']>;
  attributionClass?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  availability?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  color?: InputMaybe<Scalars['String']['input']>;
  colors?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dimensionRange?: InputMaybe<Scalars['String']['input']>;
  disableNotForSaleSorting?: InputMaybe<Scalars['Boolean']['input']>;
  excludeArtworkIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  extraAggregationGeneIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forSale?: InputMaybe<Scalars['Boolean']['input']>;
  framed?: InputMaybe<Scalars['Boolean']['input']>;
  geneID?: InputMaybe<Scalars['String']['input']>;
  geneIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  height?: InputMaybe<Scalars['String']['input']>;
  importSources?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  includeAllJSON?: InputMaybe<Scalars['Boolean']['input']>;
  includeArtworksByFollowedArtists?: InputMaybe<Scalars['Boolean']['input']>;
  includeMediumFilterInAggregation?: InputMaybe<Scalars['Boolean']['input']>;
  includeUnpublished?: InputMaybe<Scalars['Boolean']['input']>;
  inquireableOnly?: InputMaybe<Scalars['Boolean']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  keywordMatchExact?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locationCities?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  majorPeriods?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  marketable?: InputMaybe<Scalars['Boolean']['input']>;
  marketingCollectionID?: InputMaybe<Scalars['String']['input']>;
  materialsTerms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  medium?: InputMaybe<Scalars['String']['input']>;
  offerable?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  partnerCities?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  partnerID?: InputMaybe<Scalars['ID']['input']>;
  partnerIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  period?: InputMaybe<Scalars['String']['input']>;
  periods?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  priceRange?: InputMaybe<Scalars['String']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  saleID?: InputMaybe<Scalars['ID']['input']>;
  showID?: InputMaybe<Scalars['String']['input']>;
  signed?: InputMaybe<Scalars['Boolean']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sizes?: InputMaybe<Array<InputMaybe<ArtworkSizes>>>;
  sold?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  tagID?: InputMaybe<Scalars['String']['input']>;
  visibilityLevel?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['String']['input']>;
};

export type FilterPartners = {
  __typename?: 'FilterPartners';
  aggregations?: Maybe<Array<Maybe<PartnersAggregationResults>>>;
  hits?: Maybe<Array<Maybe<Partner>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type FilterSaleArtworksCounts = {
  __typename?: 'FilterSaleArtworksCounts';
  followedArtists?: Maybe<Scalars['FormattedNumber']['output']>;
  total?: Maybe<Scalars['FormattedNumber']['output']>;
};


export type FilterSaleArtworksCountsFollowedArtistsArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
};


export type FilterSaleArtworksCountsTotalArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
};

export type FlagArtworkImportCellFailure = {
  __typename?: 'FlagArtworkImportCellFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type FlagArtworkImportCellInput = {
  artworkImportID: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  columnName: Scalars['String']['input'];
  flaggedValue?: InputMaybe<Scalars['String']['input']>;
  originalValue?: InputMaybe<Scalars['String']['input']>;
  rowID: Scalars['String']['input'];
  userNote: Scalars['String']['input'];
};

export type FlagArtworkImportCellPayload = {
  __typename?: 'FlagArtworkImportCellPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  flagArtworkImportCellOrError?: Maybe<FlagArtworkImportCellResponseOrError>;
};

export type FlagArtworkImportCellResponseOrError = FlagArtworkImportCellFailure | FlagArtworkImportCellSuccess;

export type FlagArtworkImportCellSuccess = {
  __typename?: 'FlagArtworkImportCellSuccess';
  artworkImport?: Maybe<ArtworkImport>;
};

export type FollowArtist = {
  __typename?: 'FollowArtist';
  artist?: Maybe<Artist>;
  auto?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
};

export type FollowArtistConnection = {
  __typename?: 'FollowArtistConnection';
  edges?: Maybe<Array<Maybe<FollowArtistEdge>>>;
  pageCursors: PageCursors;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type FollowArtistCounts = {
  __typename?: 'FollowArtistCounts';
  artists?: Maybe<Scalars['Int']['output']>;
};

export type FollowArtistEdge = {
  __typename?: 'FollowArtistEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<FollowArtist>;
};

export type FollowArtistInput = {
  artistID: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  unfollow?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FollowArtistPayload = {
  __typename?: 'FollowArtistPayload';
  artist?: Maybe<Artist>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
  me: Me;
  popularArtists?: Maybe<Array<Maybe<Artist>>>;
};


export type FollowArtistPayloadPopularArtistsArgs = {
  excludeArtistIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  excludeFollowedArtists?: InputMaybe<Scalars['Boolean']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};

export type FollowArtists = {
  __typename?: 'FollowArtists';
  artists?: Maybe<Array<Maybe<Artist>>>;
  counts?: Maybe<FollowArtistCounts>;
};

export type FollowGene = {
  __typename?: 'FollowGene';
  gene?: Maybe<Gene>;
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
};

export type FollowGeneConnection = {
  __typename?: 'FollowGeneConnection';
  edges?: Maybe<Array<Maybe<FollowGeneEdge>>>;
  pageCursors: PageCursors;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type FollowGeneEdge = {
  __typename?: 'FollowGeneEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<FollowGene>;
};

export type FollowGeneInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  geneID?: InputMaybe<Scalars['String']['input']>;
  unfollow?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FollowGenePayload = {
  __typename?: 'FollowGenePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  gene?: Maybe<Gene>;
};

export type FollowProfileInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  profileID?: InputMaybe<Scalars['String']['input']>;
  unfollow?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FollowProfilePayload = {
  __typename?: 'FollowProfilePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  me: Me;
  profile?: Maybe<Profile>;
};

export type FollowShowInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  partnerShowID?: InputMaybe<Scalars['String']['input']>;
  unfollow?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FollowShowPayload = {
  __typename?: 'FollowShowPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  show?: Maybe<Show>;
};

export type FollowedArtistsArtworksGroup = Node & {
  __typename?: 'FollowedArtistsArtworksGroup';
  artists?: Maybe<Scalars['String']['output']>;
  artworksConnection?: Maybe<ArtworkConnection>;
  href?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Image>;
  publishedAt?: Maybe<Scalars['String']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
};


export type FollowedArtistsArtworksGroupArtworksConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type FollowedArtistsArtworksGroupPublishedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type FollowedArtistsArtworksGroupConnection = {
  __typename?: 'FollowedArtistsArtworksGroupConnection';
  edges?: Maybe<Array<Maybe<FollowedArtistsArtworksGroupEdge>>>;
  pageInfo: PageInfo;
};

export type FollowedArtistsArtworksGroupEdge = {
  __typename?: 'FollowedArtistsArtworksGroupEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<FollowedArtistsArtworksGroup>;
};

export type FollowedContent = {
  __typename?: 'FollowedContent';
  artists?: Maybe<Array<Maybe<Artist>>>;
  galleries?: Maybe<Array<Maybe<Partner>>>;
};

export type FollowedFairConnection = {
  __typename?: 'FollowedFairConnection';
  edges?: Maybe<Array<Maybe<FollowedFairEdge>>>;
  pageInfo: PageInfo;
};

export type FollowedFairEdge = {
  __typename?: 'FollowedFairEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Fair>;
};

export type FollowedGalleryConnection = {
  __typename?: 'FollowedGalleryConnection';
  edges?: Maybe<Array<Maybe<FollowedGalleryEdge>>>;
  pageInfo: PageInfo;
};

export type FollowedGalleryEdge = {
  __typename?: 'FollowedGalleryEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Partner>;
};

export type FollowedProfile = {
  __typename?: 'FollowedProfile';
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  profile: Profile;
};

export type FollowedProfileConnection = {
  __typename?: 'FollowedProfileConnection';
  edges?: Maybe<Array<Maybe<FollowedProfileEdge>>>;
  pageCursors: PageCursors;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type FollowedProfileEdge = {
  __typename?: 'FollowedProfileEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<FollowedProfile>;
};

export type FollowedShowConnection = {
  __typename?: 'FollowedShowConnection';
  edges?: Maybe<Array<Maybe<FollowedShowEdge>>>;
  pageInfo: PageInfo;
};

export type FollowedShowEdge = {
  __typename?: 'FollowedShowEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Show>;
};

export type FollowsAndSaves = {
  __typename?: 'FollowsAndSaves';
  artistsConnection?: Maybe<FollowArtistConnection>;
  artworksConnection?: Maybe<SavedArtworksConnection>;
  bundledArtworksByArtistConnection?: Maybe<FollowedArtistsArtworksGroupConnection>;
  fairsConnection?: Maybe<FollowedFairConnection>;
  galleriesConnection?: Maybe<FollowedGalleryConnection>;
  genesConnection?: Maybe<FollowGeneConnection>;
  profilesConnection?: Maybe<FollowedProfileConnection>;
  showsConnection?: Maybe<FollowedShowConnection>;
};


export type FollowsAndSavesArtistsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  fairID?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type FollowsAndSavesArtworksConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  private?: InputMaybe<Scalars['Boolean']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<CollectionArtworkSorts>;
};


export type FollowsAndSavesBundledArtworksByArtistConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forSale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<ArtworkSorts>;
};


export type FollowsAndSavesFairsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type FollowsAndSavesGalleriesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type FollowsAndSavesGenesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type FollowsAndSavesProfilesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type FollowsAndSavesShowsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  dayThreshold?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<EventStatus>;
};

export enum Format {
  Html = 'HTML',
  Markdown = 'MARKDOWN',
  Plain = 'PLAIN'
}

export type FormattedDaySchedules = {
  __typename?: 'FormattedDaySchedules';
  days?: Maybe<Scalars['String']['output']>;
  hours?: Maybe<Scalars['String']['output']>;
};

export type FulfillmentDetails = {
  __typename?: 'FulfillmentDetails';
  addressLine1?: Maybe<Scalars['String']['output']>;
  addressLine2?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<PhoneNumberType>;
  /** @deprecated Use `phoneNumber.regionCode` for the alpha-2 country code or phoneNumber.countryCode for the numeric country code */
  phoneNumberCountryCode?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Scalars['String']['output']>;
};

export type FulfillmentOption = {
  __typename?: 'FulfillmentOption';
  amount?: Maybe<Money>;
  selected?: Maybe<Scalars['Boolean']['output']>;
  type: FulfillmentOptionTypeEnum;
};

export type FulfillmentOptionInput = {
  type: FulfillmentOptionInputEnum;
};

export enum FulfillmentOptionInputEnum {
  DomesticFlat = 'DOMESTIC_FLAT',
  InternationalFlat = 'INTERNATIONAL_FLAT',
  Pickup = 'PICKUP'
}

export enum FulfillmentOptionTypeEnum {
  DomesticFlat = 'DOMESTIC_FLAT',
  InternationalFlat = 'INTERNATIONAL_FLAT',
  Pickup = 'PICKUP',
  ShippingTbd = 'SHIPPING_TBD'
}

export type GeminiEntry = {
  __typename?: 'GeminiEntry';
  token: Scalars['String']['output'];
};

export type Gene = Node & Searchable & {
  __typename?: 'Gene';
  artistsConnection?: Maybe<ArtistConnection>;
  cached?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  displayLabel?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  filterArtworksConnection?: Maybe<FilterArtworksConnection>;
  href?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Image>;
  imageUrl?: Maybe<Scalars['String']['output']>;
  internalID: Scalars['ID']['output'];
  isFollowed?: Maybe<Scalars['Boolean']['output']>;
  isPublished?: Maybe<Scalars['Boolean']['output']>;
  meta: GeneMeta;
  mode?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  similar?: Maybe<GeneConnection>;
  slug: Scalars['ID']['output'];
  trendingArtists?: Maybe<Array<Maybe<Artist>>>;
};


export type GeneArtistsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type GeneDescriptionArgs = {
  format?: InputMaybe<Format>;
};


export type GeneFilterArtworksConnectionArgs = {
  acquireable?: InputMaybe<Scalars['Boolean']['input']>;
  additionalGeneIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  after?: InputMaybe<Scalars['String']['input']>;
  aggregationPartnerCities?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  aggregations?: InputMaybe<Array<InputMaybe<ArtworkAggregation>>>;
  artistID?: InputMaybe<Scalars['String']['input']>;
  artistIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  artistNationalities?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  artistSeriesID?: InputMaybe<Scalars['String']['input']>;
  artistSeriesIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  artworkIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  atAuction?: InputMaybe<Scalars['Boolean']['input']>;
  attributionClass?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  availability?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  color?: InputMaybe<Scalars['String']['input']>;
  colors?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dimensionRange?: InputMaybe<Scalars['String']['input']>;
  disableNotForSaleSorting?: InputMaybe<Scalars['Boolean']['input']>;
  excludeArtworkIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  extraAggregationGeneIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forSale?: InputMaybe<Scalars['Boolean']['input']>;
  framed?: InputMaybe<Scalars['Boolean']['input']>;
  geneID?: InputMaybe<Scalars['String']['input']>;
  geneIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  height?: InputMaybe<Scalars['String']['input']>;
  importSources?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  includeAllJSON?: InputMaybe<Scalars['Boolean']['input']>;
  includeArtworksByFollowedArtists?: InputMaybe<Scalars['Boolean']['input']>;
  includeMediumFilterInAggregation?: InputMaybe<Scalars['Boolean']['input']>;
  includeUnpublished?: InputMaybe<Scalars['Boolean']['input']>;
  input?: InputMaybe<FilterArtworksInput>;
  inquireableOnly?: InputMaybe<Scalars['Boolean']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  keywordMatchExact?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locationCities?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  majorPeriods?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  marketable?: InputMaybe<Scalars['Boolean']['input']>;
  marketingCollectionID?: InputMaybe<Scalars['String']['input']>;
  materialsTerms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  medium?: InputMaybe<Scalars['String']['input']>;
  offerable?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  partnerCities?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  partnerID?: InputMaybe<Scalars['ID']['input']>;
  partnerIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  period?: InputMaybe<Scalars['String']['input']>;
  periods?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  priceRange?: InputMaybe<Scalars['String']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  saleID?: InputMaybe<Scalars['ID']['input']>;
  showID?: InputMaybe<Scalars['String']['input']>;
  signed?: InputMaybe<Scalars['Boolean']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sizes?: InputMaybe<Array<InputMaybe<ArtworkSizes>>>;
  sold?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  tagID?: InputMaybe<Scalars['String']['input']>;
  visibilityLevel?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['String']['input']>;
};


export type GeneSimilarArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  excludeGeneIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type GeneTrendingArtistsArgs = {
  sample?: InputMaybe<Scalars['Int']['input']>;
};

export type GeneConnection = {
  __typename?: 'GeneConnection';
  edges?: Maybe<Array<Maybe<GeneEdge>>>;
  pageCursors: PageCursors;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type GeneEdge = {
  __typename?: 'GeneEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Gene>;
};

export type GeneFamily = {
  __typename?: 'GeneFamily';
  featuredGeneLinks?: Maybe<Array<Maybe<FeaturedGeneLink>>>;
  genes?: Maybe<Array<Maybe<Gene>>>;
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['ID']['output'];
};

export type GeneFamilyConnection = {
  __typename?: 'GeneFamilyConnection';
  edges?: Maybe<Array<Maybe<GeneFamilyEdge>>>;
  pageInfo: PageInfo;
};

export type GeneFamilyEdge = {
  __typename?: 'GeneFamilyEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<GeneFamily>;
};

export type GeneMeta = {
  __typename?: 'GeneMeta';
  description: Scalars['String']['output'];
};

export type GravityArImage = {
  __typename?: 'GravityARImage';
  height?: Maybe<Scalars['Int']['output']>;
  imageURLs?: Maybe<GravityImageUrLs>;
  internalID: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type GravityImageUrLs = {
  __typename?: 'GravityImageURLs';
  normalized?: Maybe<Scalars['String']['output']>;
};

export type GravityMutationError = {
  __typename?: 'GravityMutationError';
  detail?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  fieldErrors?: Maybe<Array<Maybe<FieldErrorResults>>>;
  message: Scalars['String']['output'];
  statusCode?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type HeroUnit = {
  __typename?: 'HeroUnit';
  body: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['String']['output']>;
  credit?: Maybe<Scalars['String']['output']>;
  endAt?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Image>;
  internalID: Scalars['ID']['output'];
  label?: Maybe<Scalars['String']['output']>;
  link: HeroUnitLink;
  position?: Maybe<Scalars['Int']['output']>;
  startAt?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};


export type HeroUnitCreatedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type HeroUnitEndAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type HeroUnitStartAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type HeroUnitConnection = {
  __typename?: 'HeroUnitConnection';
  edges?: Maybe<Array<Maybe<HeroUnitEdge>>>;
  pageCursors: PageCursors;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type HeroUnitEdge = {
  __typename?: 'HeroUnitEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<HeroUnit>;
};

export type HeroUnitLink = {
  __typename?: 'HeroUnitLink';
  text: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type HighestBid = {
  __typename?: 'HighestBid';
  amount?: Maybe<Scalars['String']['output']>;
  cents?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  display?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  isCancelled?: Maybe<Scalars['Boolean']['output']>;
  number?: Maybe<Scalars['Int']['output']>;
};


export type HighestBidAmountArgs = {
  decimal?: InputMaybe<Scalars['String']['input']>;
  disambiguate?: InputMaybe<Scalars['Boolean']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  precision?: InputMaybe<Scalars['Int']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  thousand?: InputMaybe<Scalars['String']['input']>;
};


export type HighestBidCreatedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type Highlights = {
  __typename?: 'Highlights';
  broadCollectingGenes?: Maybe<Array<Maybe<Gene>>>;
  popularArtists?: Maybe<Array<Maybe<Artist>>>;
};


export type HighlightsPopularArtistsArgs = {
  excludeArtistIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  excludeFollowedArtists?: InputMaybe<Scalars['Boolean']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};

export type HomePage = {
  __typename?: 'HomePage';
  artistModule?: Maybe<HomePageArtistModule>;
  artistModules?: Maybe<Array<Maybe<HomePageArtistModule>>>;
  artworkModule?: Maybe<HomePageArtworkModule>;
  artworkModules?: Maybe<Array<Maybe<HomePageArtworkModule>>>;
  fairsModule?: Maybe<HomePageFairsModule>;
  heroUnits?: Maybe<Array<Maybe<HomePageHeroUnit>>>;
  marketingCollectionsModule?: Maybe<HomePageMarketingCollectionsModule>;
  onboardingModule?: Maybe<HomePageMyCollectionOnboardingModule>;
  salesModule?: Maybe<HomePageSalesModule>;
};


export type HomePageArtistModuleArgs = {
  key?: InputMaybe<HomePageArtistModuleTypes>;
};


export type HomePageArtworkModuleArgs = {
  followedArtistID?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<HomePageArtworkModuleTypes>;
  relatedArtistID?: InputMaybe<Scalars['String']['input']>;
};


export type HomePageArtworkModulesArgs = {
  exclude?: InputMaybe<Array<InputMaybe<HomePageArtworkModuleTypes>>>;
  include?: InputMaybe<Array<InputMaybe<HomePageArtworkModuleTypes>>>;
  maxFollowedGeneRails?: InputMaybe<Scalars['Int']['input']>;
  maxRails?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<InputMaybe<HomePageArtworkModuleTypes>>>;
};


export type HomePageHeroUnitsArgs = {
  platform: HomePageHeroUnitPlatform;
};

export type HomePageArtistModule = Node & {
  __typename?: 'HomePageArtistModule';
  id: Scalars['ID']['output'];
  key?: Maybe<Scalars['String']['output']>;
  results?: Maybe<Array<Maybe<Artist>>>;
};

export enum HomePageArtistModuleTypes {
  CuratedTrending = 'CURATED_TRENDING',
  Popular = 'POPULAR',
  Suggested = 'SUGGESTED',
  Trending = 'TRENDING'
}

export type HomePageArtworkModule = Node & {
  __typename?: 'HomePageArtworkModule';
  context?: Maybe<HomePageArtworkModuleContext>;
  id: Scalars['ID']['output'];
  isDisplayable?: Maybe<Scalars['Boolean']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  params?: Maybe<HomePageModulesParams>;
  results?: Maybe<Array<Maybe<Artwork>>>;
  title?: Maybe<Scalars['String']['output']>;
};

export type HomePageArtworkModuleContext = Fair | FollowArtists | Gene | HomePageFollowedArtistArtworkModule | HomePageRelatedArtistArtworkModule | Sale | TrendingArtists;

export enum HomePageArtworkModuleTypes {
  ActiveBids = 'ACTIVE_BIDS',
  CurrentFairs = 'CURRENT_FAIRS',
  FollowedArtist = 'FOLLOWED_ARTIST',
  FollowedArtists = 'FOLLOWED_ARTISTS',
  FollowedGalleries = 'FOLLOWED_GALLERIES',
  FollowedGenes = 'FOLLOWED_GENES',
  GenericGenes = 'GENERIC_GENES',
  LiveAuctions = 'LIVE_AUCTIONS',
  PopularArtists = 'POPULAR_ARTISTS',
  RecentlyViewedWorks = 'RECENTLY_VIEWED_WORKS',
  RecommendedWorks = 'RECOMMENDED_WORKS',
  RelatedArtists = 'RELATED_ARTISTS',
  SavedWorks = 'SAVED_WORKS',
  SimilarToRecentlyViewed = 'SIMILAR_TO_RECENTLY_VIEWED',
  SimilarToSavedWorks = 'SIMILAR_TO_SAVED_WORKS'
}

export type HomePageFairsModule = {
  __typename?: 'HomePageFairsModule';
  results: Array<Maybe<Fair>>;
};

export type HomePageFollowedArtistArtworkModule = {
  __typename?: 'HomePageFollowedArtistArtworkModule';
  artist?: Maybe<Artist>;
};

export type HomePageHeroUnit = {
  __typename?: 'HomePageHeroUnit';
  backgroundImageURL?: Maybe<Scalars['String']['output']>;
  cached?: Maybe<Scalars['Int']['output']>;
  creditLine?: Maybe<Scalars['String']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  href?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  linkText?: Maybe<Scalars['String']['output']>;
  mode?: Maybe<HomePageHeroUnitMode>;
  slug: Scalars['ID']['output'];
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  titleImageURL?: Maybe<Scalars['String']['output']>;
};


export type HomePageHeroUnitBackgroundImageUrlArgs = {
  version?: InputMaybe<HomePageHeroUnitImageVersion>;
};


export type HomePageHeroUnitTitleImageUrlArgs = {
  retina?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum HomePageHeroUnitImageVersion {
  Narrow = 'NARROW',
  Wide = 'WIDE'
}

export enum HomePageHeroUnitMode {
  CenteredDark = 'CENTERED_DARK',
  CenteredLight = 'CENTERED_LIGHT',
  LeftDark = 'LEFT_DARK',
  LeftLight = 'LEFT_LIGHT',
  RightDark = 'RIGHT_DARK',
  RightLight = 'RIGHT_LIGHT'
}

export enum HomePageHeroUnitPlatform {
  Desktop = 'DESKTOP',
  Martsy = 'MARTSY',
  Mobile = 'MOBILE'
}

export type HomePageMarketingCollectionsModule = {
  __typename?: 'HomePageMarketingCollectionsModule';
  results: Array<Maybe<MarketingCollection>>;
};

export type HomePageModulesParams = {
  __typename?: 'HomePageModulesParams';
  followedArtistID?: Maybe<Scalars['ID']['output']>;
  geneID?: Maybe<Scalars['String']['output']>;
  internalID?: Maybe<Scalars['ID']['output']>;
  medium?: Maybe<Scalars['String']['output']>;
  priceRange?: Maybe<Scalars['String']['output']>;
  relatedArtistID?: Maybe<Scalars['ID']['output']>;
};

export type HomePageMyCollectionOnboardingModule = {
  __typename?: 'HomePageMyCollectionOnboardingModule';
  showMyCollectionCard: Scalars['Boolean']['output'];
  showSWACard: Scalars['Boolean']['output'];
};

export type HomePageRelatedArtistArtworkModule = {
  __typename?: 'HomePageRelatedArtistArtworkModule';
  artist?: Maybe<Artist>;
  basedOn?: Maybe<Artist>;
};

export type HomePageSalesModule = {
  __typename?: 'HomePageSalesModule';
  results: Array<Maybe<Sale>>;
};

export type HomeView = {
  __typename?: 'HomeView';
  experiments: Array<Maybe<ClientFeatureFlag>>;
  section?: Maybe<HomeViewSectionGeneric>;
  sectionsConnection: HomeViewSectionGenericConnection;
};


export type HomeViewSectionArgs = {
  id: Scalars['String']['input'];
};


export type HomeViewSectionsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type HomeViewCard = {
  __typename?: 'HomeViewCard';
  badgeText?: Maybe<Scalars['String']['output']>;
  buttonText?: Maybe<Scalars['String']['output']>;
  entityID?: Maybe<Scalars['String']['output']>;
  entityType?: Maybe<Scalars['String']['output']>;
  href?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Image>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type HomeViewCardConnection = {
  __typename?: 'HomeViewCardConnection';
  edges?: Maybe<Array<Maybe<HomeViewCardEdge>>>;
  pageCursors: PageCursors;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type HomeViewCardEdge = {
  __typename?: 'HomeViewCardEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<HomeViewCard>;
};

export type HomeViewComponent = {
  __typename?: 'HomeViewComponent';
  backgroundImageURL?: Maybe<Scalars['String']['output']>;
  behaviors?: Maybe<HomeViewComponentBehaviors>;
  description?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `behaviors.viewAll.href` instead */
  href?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};


export type HomeViewComponentBackgroundImageUrlArgs = {
  version?: InputMaybe<HomeViewComponentBackgroundImageUrlVersion>;
};

export enum HomeViewComponentBackgroundImageUrlVersion {
  Narrow = 'NARROW',
  Wide = 'WIDE'
}

export type HomeViewComponentBehaviors = {
  __typename?: 'HomeViewComponentBehaviors';
  viewAll?: Maybe<HomeViewComponentBehaviorsViewAll>;
};

export type HomeViewComponentBehaviorsViewAll = {
  __typename?: 'HomeViewComponentBehaviorsViewAll';
  buttonText?: Maybe<Scalars['String']['output']>;
  href?: Maybe<Scalars['String']['output']>;
  ownerType?: Maybe<Scalars['String']['output']>;
};

export type HomeViewSectionActivity = HomeViewSectionGeneric & Node & {
  __typename?: 'HomeViewSectionActivity';
  component?: Maybe<HomeViewComponent>;
  contextModule?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  notificationsConnection?: Maybe<NotificationConnection>;
  ownerType?: Maybe<Scalars['String']['output']>;
};


export type HomeViewSectionActivityNotificationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type HomeViewSectionArticles = HomeViewSectionGeneric & Node & {
  __typename?: 'HomeViewSectionArticles';
  articlesConnection?: Maybe<ArticleConnection>;
  component?: Maybe<HomeViewComponent>;
  contextModule?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  ownerType?: Maybe<Scalars['String']['output']>;
};


export type HomeViewSectionArticlesArticlesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type HomeViewSectionArtists = HomeViewSectionGeneric & Node & {
  __typename?: 'HomeViewSectionArtists';
  artistsConnection?: Maybe<ArtistConnection>;
  component?: Maybe<HomeViewComponent>;
  contextModule?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  ownerType?: Maybe<Scalars['String']['output']>;
};


export type HomeViewSectionArtistsArtistsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type HomeViewSectionArtworks = HomeViewSectionGeneric & Node & {
  __typename?: 'HomeViewSectionArtworks';
  artworksConnection?: Maybe<ArtworkConnection>;
  component?: Maybe<HomeViewComponent>;
  contextModule?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  ownerType?: Maybe<Scalars['String']['output']>;
  trackItemImpressions: Scalars['Boolean']['output'];
};


export type HomeViewSectionArtworksArtworksConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type HomeViewSectionAuctionResults = HomeViewSectionGeneric & Node & {
  __typename?: 'HomeViewSectionAuctionResults';
  auctionResultsConnection?: Maybe<AuctionResultConnection>;
  component?: Maybe<HomeViewComponent>;
  contextModule?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  ownerType?: Maybe<Scalars['String']['output']>;
};


export type HomeViewSectionAuctionResultsAuctionResultsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type HomeViewSectionCard = HomeViewSectionGeneric & Node & {
  __typename?: 'HomeViewSectionCard';
  card?: Maybe<HomeViewCard>;
  component?: Maybe<HomeViewComponent>;
  contextModule?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  ownerType?: Maybe<Scalars['String']['output']>;
};

export type HomeViewSectionCards = HomeViewSectionGeneric & Node & {
  __typename?: 'HomeViewSectionCards';
  cardsConnection?: Maybe<HomeViewCardConnection>;
  component?: Maybe<HomeViewComponent>;
  contextModule?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  ownerType?: Maybe<Scalars['String']['output']>;
};


export type HomeViewSectionCardsCardsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type HomeViewSectionFairs = HomeViewSectionGeneric & Node & {
  __typename?: 'HomeViewSectionFairs';
  component?: Maybe<HomeViewComponent>;
  contextModule?: Maybe<Scalars['String']['output']>;
  fairsConnection?: Maybe<FairConnection>;
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  ownerType?: Maybe<Scalars['String']['output']>;
};


export type HomeViewSectionFairsFairsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type HomeViewSectionGeneric = {
  component?: Maybe<HomeViewComponent>;
  contextModule?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  ownerType?: Maybe<Scalars['String']['output']>;
};

export type HomeViewSectionGenericConnection = {
  __typename?: 'HomeViewSectionGenericConnection';
  edges?: Maybe<Array<Maybe<HomeViewSectionGenericEdge>>>;
  pageCursors: PageCursors;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type HomeViewSectionGenericEdge = {
  __typename?: 'HomeViewSectionGenericEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<HomeViewSectionGeneric>;
};

export type HomeViewSectionHeroUnits = HomeViewSectionGeneric & Node & {
  __typename?: 'HomeViewSectionHeroUnits';
  component?: Maybe<HomeViewComponent>;
  contextModule?: Maybe<Scalars['String']['output']>;
  heroUnitsConnection?: Maybe<HeroUnitConnection>;
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  ownerType?: Maybe<Scalars['String']['output']>;
};


export type HomeViewSectionHeroUnitsHeroUnitsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type HomeViewSectionMarketingCollections = HomeViewSectionGeneric & Node & {
  __typename?: 'HomeViewSectionMarketingCollections';
  component?: Maybe<HomeViewComponent>;
  contextModule?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  marketingCollectionsConnection?: Maybe<MarketingCollectionConnection>;
  ownerType?: Maybe<Scalars['String']['output']>;
};


export type HomeViewSectionMarketingCollectionsMarketingCollectionsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type HomeViewSectionNavigationPills = HomeViewSectionGeneric & Node & {
  __typename?: 'HomeViewSectionNavigationPills';
  component?: Maybe<HomeViewComponent>;
  contextModule?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  navigationPills: Array<Maybe<NavigationPill>>;
  ownerType?: Maybe<Scalars['String']['output']>;
};

export type HomeViewSectionSales = HomeViewSectionGeneric & Node & {
  __typename?: 'HomeViewSectionSales';
  component?: Maybe<HomeViewComponent>;
  contextModule?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  ownerType?: Maybe<Scalars['String']['output']>;
  salesConnection?: Maybe<SaleConnection>;
};


export type HomeViewSectionSalesSalesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type HomeViewSectionShows = HomeViewSectionGeneric & Node & {
  __typename?: 'HomeViewSectionShows';
  component?: Maybe<HomeViewComponent>;
  contextModule?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  ownerType?: Maybe<Scalars['String']['output']>;
  showsConnection?: Maybe<ShowConnection>;
};


export type HomeViewSectionShowsShowsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  near?: InputMaybe<Near>;
};

export type HomeViewSectionTasks = HomeViewSectionGeneric & Node & {
  __typename?: 'HomeViewSectionTasks';
  component?: Maybe<HomeViewComponent>;
  contextModule?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  ownerType?: Maybe<Scalars['String']['output']>;
  tasksConnection?: Maybe<TaskConnection>;
};


export type HomeViewSectionTasksTasksConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type HomeViewSectionViewingRooms = HomeViewSectionGeneric & Node & {
  __typename?: 'HomeViewSectionViewingRooms';
  component?: Maybe<HomeViewComponent>;
  contextModule?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  ownerType?: Maybe<Scalars['String']['output']>;
};

export type IdentityVerification = {
  __typename?: 'IdentityVerification';
  createdAt?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  initiatorID?: Maybe<Scalars['String']['output']>;
  internalID: Scalars['ID']['output'];
  invitationExpiresAt?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  orderID?: Maybe<Scalars['String']['output']>;
  overrides?: Maybe<Array<Maybe<IdentityVerificationOverride>>>;
  pageURL?: Maybe<Scalars['String']['output']>;
  saleID?: Maybe<Scalars['String']['output']>;
  scanReferences?: Maybe<Array<Maybe<IdentityVerificationScanReference>>>;
  state: Scalars['String']['output'];
  userID?: Maybe<Scalars['String']['output']>;
};


export type IdentityVerificationCreatedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type IdentityVerificationInvitationExpiresAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type IdentityVerificationConnection = {
  __typename?: 'IdentityVerificationConnection';
  edges?: Maybe<Array<Maybe<IdentityVerificationEdge>>>;
  pageCursors: PageCursors;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type IdentityVerificationEdge = {
  __typename?: 'IdentityVerificationEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<IdentityVerification>;
};

export type IdentityVerificationEmail = {
  __typename?: 'IdentityVerificationEmail';
  created_at?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  state: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['String']['output']>;
  userID?: Maybe<Scalars['String']['output']>;
};


export type IdentityVerificationEmailCreated_AtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type IdentityVerificationEmailUpdated_AtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type IdentityVerificationEmailMutationFailureType = {
  __typename?: 'IdentityVerificationEmailMutationFailureType';
  mutationError?: Maybe<GravityMutationError>;
};

export type IdentityVerificationEmailMutationSuccessType = {
  __typename?: 'IdentityVerificationEmailMutationSuccessType';
  identityVerification?: Maybe<IdentityVerification>;
  /** @deprecated use identityVerification instead */
  identityVerificationEmail?: Maybe<IdentityVerificationEmail>;
};

export type IdentityVerificationEmailMutationType = IdentityVerificationEmailMutationFailureType | IdentityVerificationEmailMutationSuccessType;

export type IdentityVerificationOverride = {
  __typename?: 'IdentityVerificationOverride';
  createdAt?: Maybe<Scalars['String']['output']>;
  creator?: Maybe<User>;
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  newState: Scalars['String']['output'];
  oldState: Scalars['String']['output'];
  reason: Scalars['String']['output'];
  userID?: Maybe<Scalars['String']['output']>;
};


export type IdentityVerificationOverrideCreatedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type IdentityVerificationOverrideMutationFailure = {
  __typename?: 'IdentityVerificationOverrideMutationFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type IdentityVerificationOverrideMutationSuccess = {
  __typename?: 'IdentityVerificationOverrideMutationSuccess';
  identityVerification?: Maybe<IdentityVerification>;
};

export type IdentityVerificationScanReference = {
  __typename?: 'IdentityVerificationScanReference';
  createdAt?: Maybe<Scalars['String']['output']>;
  extractedFirstName?: Maybe<Scalars['String']['output']>;
  extractedIdFailReason?: Maybe<Scalars['String']['output']>;
  extractedLastName?: Maybe<Scalars['String']['output']>;
  extractedSimilarityFailReason?: Maybe<Scalars['String']['output']>;
  finishedAt?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  jumioID: Scalars['String']['output'];
  result?: Maybe<Scalars['String']['output']>;
};


export type IdentityVerificationScanReferenceCreatedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type IdentityVerificationScanReferenceFinishedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type Image = {
  __typename?: 'Image';
  aspectRatio: Scalars['Float']['output'];
  blurhash?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  cropped?: Maybe<CroppedImageUrl>;
  deepZoom?: Maybe<DeepZoom>;
  geminiToken?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  href?: Maybe<Scalars['String']['output']>;
  imageURL?: Maybe<Scalars['String']['output']>;
  imageVersions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  internalID?: Maybe<Scalars['ID']['output']>;
  isDefault?: Maybe<Scalars['Boolean']['output']>;
  isZoomable?: Maybe<Scalars['Boolean']['output']>;
  maxTiledHeight?: Maybe<Scalars['Int']['output']>;
  maxTiledWidth?: Maybe<Scalars['Int']['output']>;
  orientation?: Maybe<Scalars['String']['output']>;
  originalHeight?: Maybe<Scalars['Int']['output']>;
  originalWidth?: Maybe<Scalars['Int']['output']>;
  placeholder?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
  resized?: Maybe<ResizedImageUrl>;
  tileBaseURL?: Maybe<Scalars['String']['output']>;
  tileFormat?: Maybe<Scalars['String']['output']>;
  tileSize?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  versions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  width?: Maybe<Scalars['Int']['output']>;
};


export type ImageCroppedArgs = {
  height: Scalars['Int']['input'];
  quality?: InputMaybe<Array<Scalars['Int']['input']>>;
  version?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  width: Scalars['Int']['input'];
};


export type ImageResizedArgs = {
  height?: InputMaybe<Scalars['Int']['input']>;
  quality?: InputMaybe<Array<Scalars['Int']['input']>>;
  version?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  width?: InputMaybe<Scalars['Int']['input']>;
};


export type ImageUrlArgs = {
  version?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ImageConnection = {
  __typename?: 'ImageConnection';
  edges?: Maybe<Array<Maybe<ImageEdge>>>;
  pageCursors: PageCursors;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type ImageEdge = {
  __typename?: 'ImageEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Image>;
};

export type ImageUrLs = {
  __typename?: 'ImageURLs';
  normalized?: Maybe<Scalars['String']['output']>;
};

export type InputAddress = {
  __typename?: 'InputAddress';
  addressLine1: Scalars['String']['output'];
  addressLine2?: Maybe<Scalars['String']['output']>;
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  postalCode: Scalars['String']['output'];
  region?: Maybe<Scalars['String']['output']>;
};

export type InputAddressFields = {
  __typename?: 'InputAddressFields';
  address?: Maybe<InputAddress>;
  lines?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type InquirerCollectorProfile = {
  __typename?: 'InquirerCollectorProfile';
  artsyUserSince?: Maybe<Scalars['String']['output']>;
  bio?: Maybe<Scalars['String']['output']>;
  collectedArtworksCount: Scalars['Int']['output'];
  collectorLevel?: Maybe<Scalars['Int']['output']>;
  companyName?: Maybe<Scalars['String']['output']>;
  companyWebsite?: Maybe<Scalars['String']['output']>;
  confirmedBuyerAt?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  /** @deprecated emailConfirmed is going to be removed, use isEmailConfirmed instead */
  emailConfirmed?: Maybe<Scalars['Boolean']['output']>;
  firstNameLastInitial?: Maybe<Scalars['String']['output']>;
  followedArtistsCount: Scalars['Int']['output'];
  hasPartnerFollow?: Maybe<Scalars['Boolean']['output']>;
  icon?: Maybe<Image>;
  id: Scalars['ID']['output'];
  /** @deprecated identityVerified is going to be removed, use isIdentityVerified instead */
  identityVerified?: Maybe<Scalars['Boolean']['output']>;
  initials?: Maybe<Scalars['String']['output']>;
  inquiryRequestsCount: Scalars['Int']['output'];
  institutionalAffiliations?: Maybe<Scalars['String']['output']>;
  intents?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  interestsConnection?: Maybe<UserInterestConnection>;
  internalID: Scalars['ID']['output'];
  isActiveBidder?: Maybe<Scalars['Boolean']['output']>;
  isActiveInquirer?: Maybe<Scalars['Boolean']['output']>;
  isEmailConfirmed?: Maybe<Scalars['Boolean']['output']>;
  isIdentityVerified?: Maybe<Scalars['Boolean']['output']>;
  isProfileComplete?: Maybe<Scalars['Boolean']['output']>;
  lastUpdatePromptAt?: Maybe<Scalars['String']['output']>;
  location?: Maybe<MyLocation>;
  loyaltyApplicantAt?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  otherRelevantPositions?: Maybe<Scalars['String']['output']>;
  owner: User;
  ownerID: Scalars['ID']['output'];
  partnerEngagement?: Maybe<PartnerEngagement>;
  privacy?: Maybe<Scalars['String']['output']>;
  profession?: Maybe<Scalars['String']['output']>;
  professionalBuyerAppliedAt?: Maybe<Scalars['String']['output']>;
  professionalBuyerAt?: Maybe<Scalars['String']['output']>;
  savedArtworksCount: Scalars['Int']['output'];
  selfReportedPurchases?: Maybe<Scalars['String']['output']>;
  summaryParagraph?: Maybe<Scalars['String']['output']>;
  totalBidsCount: Scalars['Int']['output'];
  /** @deprecated Use "owner#interestsConnection" field instead. */
  userInterests: Array<Maybe<UserInterest>>;
};


export type InquirerCollectorProfileArtsyUserSinceArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type InquirerCollectorProfileConfirmedBuyerAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type InquirerCollectorProfileInitialsArgs = {
  length?: InputMaybe<Scalars['Int']['input']>;
};


export type InquirerCollectorProfileInterestsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type InquirerCollectorProfileLastUpdatePromptAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type InquirerCollectorProfileLoyaltyApplicantAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type InquirerCollectorProfilePartnerEngagementArgs = {
  partnerID: Scalars['ID']['input'];
};


export type InquirerCollectorProfileProfessionalBuyerAppliedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type InquirerCollectorProfileProfessionalBuyerAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type InquirerCollectorProfileSummaryParagraphArgs = {
  artworkID?: InputMaybe<Scalars['String']['input']>;
};

export type InquiryItemType = Artwork | Show;

export type InquiryQuestion = {
  __typename?: 'InquiryQuestion';
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  question: Scalars['String']['output'];
};

export type InquiryQuestionInput = {
  details?: InputMaybe<Scalars['String']['input']>;
  questionID: Scalars['String']['input'];
};

export type InquiryRequest = {
  __typename?: 'InquiryRequest';
  contactGallery?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  inquireable?: Maybe<InquiryItemType>;
  inquirer?: Maybe<User>;
  internalID: Scalars['ID']['output'];
  questions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  shippingLocation?: Maybe<Location>;
};

export enum IntendedState {
  Accepted = 'ACCEPTED',
  Rejected = 'REJECTED',
  Review = 'REVIEW'
}

export enum Intents {
  BuyArtAndDesign = 'BUY_ART_AND_DESIGN',
  FindArtExhibits = 'FIND_ART_EXHIBITS',
  LearnAboutArt = 'LEARN_ABOUT_ART',
  ReadArtMarketNews = 'READ_ART_MARKET_NEWS',
  ResearchArtPrices = 'RESEARCH_ART_PRICES',
  SellArtAndDesign = 'SELL_ART_AND_DESIGN'
}

export type Invoice = {
  __typename?: 'Invoice';
  currency: Scalars['String']['output'];
  email?: Maybe<Scalars['String']['output']>;
  externalNote?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  lineItems: Array<InvoiceLineItem>;
  name?: Maybe<Scalars['String']['output']>;
  number: Scalars['String']['output'];
  payments: Array<InvoicePayment>;
  readyAt?: Maybe<Scalars['String']['output']>;
  remaining?: Maybe<Scalars['String']['output']>;
  remainingMinor: Scalars['Int']['output'];
  state: InvoiceState;
};


export type InvoiceReadyAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type InvoiceRemainingArgs = {
  decimal?: InputMaybe<Scalars['String']['input']>;
  disambiguate?: InputMaybe<Scalars['Boolean']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  precision?: InputMaybe<Scalars['Int']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  thousand?: InputMaybe<Scalars['String']['input']>;
};

export type InvoiceLineItem = {
  __typename?: 'InvoiceLineItem';
  amount?: Maybe<Scalars['String']['output']>;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  quantity: Scalars['Int']['output'];
  subtotal?: Maybe<Scalars['String']['output']>;
};


export type InvoiceLineItemAmountArgs = {
  decimal?: InputMaybe<Scalars['String']['input']>;
  disambiguate?: InputMaybe<Scalars['Boolean']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  precision?: InputMaybe<Scalars['Int']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  thousand?: InputMaybe<Scalars['String']['input']>;
};


export type InvoiceLineItemSubtotalArgs = {
  decimal?: InputMaybe<Scalars['String']['input']>;
  disambiguate?: InputMaybe<Scalars['Boolean']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  precision?: InputMaybe<Scalars['Int']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  thousand?: InputMaybe<Scalars['String']['input']>;
};

export type InvoicePayment = {
  __typename?: 'InvoicePayment';
  amount?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  creditCard?: Maybe<CreditCard>;
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  successful: Scalars['Boolean']['output'];
};


export type InvoicePaymentAmountArgs = {
  decimal?: InputMaybe<Scalars['String']['input']>;
  disambiguate?: InputMaybe<Scalars['Boolean']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  precision?: InputMaybe<Scalars['Int']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  thousand?: InputMaybe<Scalars['String']['input']>;
};


export type InvoicePaymentCreatedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export enum InvoiceState {
  Canceled = 'CANCELED',
  Draft = 'DRAFT',
  Paid = 'PAID',
  Ready = 'READY'
}

export type Job = {
  __typename?: 'Job';
  content: Scalars['String']['output'];
  departmentName: Scalars['String']['output'];
  externalURL: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  location: Scalars['String']['output'];
  teamName: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
};


export type JobUpdatedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export enum LabelSignalEnum {
  CuratorsPick = 'CURATORS_PICK',
  IncreasedInterest = 'INCREASED_INTEREST',
  PartnerOffer = 'PARTNER_OFFER'
}

export type LatLng = {
  __typename?: 'LatLng';
  lat?: Maybe<Scalars['Float']['output']>;
  lng?: Maybe<Scalars['Float']['output']>;
};

export enum LengthUnitPreference {
  Cm = 'CM',
  In = 'IN'
}

export type LineItem = {
  __typename?: 'LineItem';
  artwork?: Maybe<Artwork>;
  artworkOrEditionSet?: Maybe<ArtworkOrEditionSetType>;
  artworkVersion?: Maybe<ArtworkVersion>;
  currencyCode: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  listPrice?: Maybe<Money>;
  quantity: Scalars['Int']['output'];
};

export type LinkAuthenticationMutationInput = {
  appleUid?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  idToken?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  oauthToken: Scalars['String']['input'];
  provider: AuthenticationProvider;
};

export type LinkAuthenticationMutationPayload = {
  __typename?: 'LinkAuthenticationMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  me: Me;
};

export type ListPrice = Money | PriceRange;

export enum LiveAuctionRole {
  Operator = 'OPERATOR',
  Participant = 'PARTICIPANT'
}

export type Location = {
  __typename?: 'Location';
  address?: Maybe<Scalars['String']['output']>;
  address2?: Maybe<Scalars['String']['output']>;
  addressType?: Maybe<Scalars['String']['output']>;
  booth?: Maybe<Scalars['String']['output']>;
  cached?: Maybe<Scalars['Int']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  coordinates?: Maybe<LatLng>;
  country?: Maybe<Scalars['String']['output']>;
  dayScheduleText?: Maybe<Scalars['String']['output']>;
  daySchedules?: Maybe<Array<Maybe<DaySchedule>>>;
  display?: Maybe<Scalars['String']['output']>;
  displayCountry?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  euShippingLocation?: Maybe<Scalars['Boolean']['output']>;
  floor?: Maybe<Scalars['String']['output']>;
  hall?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  openingHours?: Maybe<OpeningHoursUnion>;
  phone?: Maybe<Scalars['String']['output']>;
  pier?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  publiclyViewable?: Maybe<Scalars['Boolean']['output']>;
  room?: Maybe<Scalars['String']['output']>;
  section?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
};

export type LocationConnection = {
  __typename?: 'LocationConnection';
  edges?: Maybe<Array<Maybe<LocationEdge>>>;
  pageCursors: PageCursors;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type LocationEdge = {
  __typename?: 'LocationEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Location>;
};

export type Lot = Node & {
  __typename?: 'Lot';
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  lot?: Maybe<AuctionsLotState>;
  saleArtwork?: Maybe<SaleArtwork>;
  slug: Scalars['ID']['output'];
};

export type LotConnection = {
  __typename?: 'LotConnection';
  edges?: Maybe<Array<Maybe<LotEdge>>>;
  pageCursors: PageCursors;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type LotEdge = {
  __typename?: 'LotEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Lot>;
};

export type LotStanding = {
  __typename?: 'LotStanding';
  activeBid?: Maybe<BidderPosition>;
  bidder?: Maybe<Bidder>;
  isHighestBidder?: Maybe<Scalars['Boolean']['output']>;
  isLeadingBidder?: Maybe<Scalars['Boolean']['output']>;
  mostRecentBid?: Maybe<BidderPosition>;
  sale?: Maybe<Sale>;
  saleArtwork?: Maybe<SaleArtwork>;
};

export type MarkAllNotificationsAsReadFailure = {
  __typename?: 'MarkAllNotificationsAsReadFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type MarkAllNotificationsAsReadInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type MarkAllNotificationsAsReadPayload = {
  __typename?: 'MarkAllNotificationsAsReadPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  responseOrError?: Maybe<MarkAllNotificationsAsReadResponseOrError>;
};

export type MarkAllNotificationsAsReadResponseOrError = MarkAllNotificationsAsReadFailure | MarkAllNotificationsAsReadSuccess;

export type MarkAllNotificationsAsReadSuccess = {
  __typename?: 'MarkAllNotificationsAsReadSuccess';
  me: Me;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type MarkNotificationAsReadFailure = {
  __typename?: 'MarkNotificationAsReadFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type MarkNotificationAsReadInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
};

export type MarkNotificationAsReadPayload = {
  __typename?: 'MarkNotificationAsReadPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  responseOrError?: Maybe<MarkNotificationAsReadResponseOrError>;
};

export type MarkNotificationAsReadResponseOrError = MarkNotificationAsReadFailure | MarkNotificationAsReadSuccess;

export type MarkNotificationAsReadSuccess = {
  __typename?: 'MarkNotificationAsReadSuccess';
  me: Me;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type MarkNotificationsAsSeenFailure = {
  __typename?: 'MarkNotificationsAsSeenFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type MarkNotificationsAsSeenInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  until: Scalars['String']['input'];
};

export type MarkNotificationsAsSeenPayload = {
  __typename?: 'MarkNotificationsAsSeenPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  responseOrError?: Maybe<MarkNotificationsAsSeenResponseOrError>;
};

export type MarkNotificationsAsSeenResponseOrError = MarkNotificationsAsSeenFailure | MarkNotificationsAsSeenSuccess;

export type MarkNotificationsAsSeenSuccess = {
  __typename?: 'MarkNotificationsAsSeenSuccess';
  me: Me;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type MarkdownContent = {
  __typename?: 'MarkdownContent';
  content?: Maybe<Scalars['String']['output']>;
};


export type MarkdownContentContentArgs = {
  format?: InputMaybe<Format>;
};

export type MarketPriceInsights = {
  __typename?: 'MarketPriceInsights';
  annualLotsSold?: Maybe<Scalars['Int']['output']>;
  annualValueSoldCents?: Maybe<Scalars['BigInt']['output']>;
  artistId?: Maybe<Scalars['ID']['output']>;
  artistName?: Maybe<Scalars['String']['output']>;
  artsyQInventory?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  demandRank?: Maybe<Scalars['Float']['output']>;
  demandTrend?: Maybe<Scalars['Float']['output']>;
  highRangeCents?: Maybe<Scalars['BigInt']['output']>;
  id: Scalars['ID']['output'];
  largeHighRangeCents?: Maybe<Scalars['BigInt']['output']>;
  largeLowRangeCents?: Maybe<Scalars['BigInt']['output']>;
  largeMidRangeCents?: Maybe<Scalars['BigInt']['output']>;
  lastAuctionResultDate?: Maybe<Scalars['ISO8601DateTime']['output']>;
  liquidityRank?: Maybe<Scalars['Float']['output']>;
  lotsSoldLast12Months?: Maybe<Scalars['Int']['output']>;
  lotsSoldLast24Months?: Maybe<Scalars['Int']['output']>;
  lotsSoldLast36Months?: Maybe<Scalars['Int']['output']>;
  lotsSoldLast48Months?: Maybe<Scalars['Int']['output']>;
  lotsSoldLast60Months?: Maybe<Scalars['Int']['output']>;
  lotsSoldLast72Months?: Maybe<Scalars['Int']['output']>;
  lotsSoldLast84Months?: Maybe<Scalars['Int']['output']>;
  lotsSoldLast96Months?: Maybe<Scalars['Int']['output']>;
  lowRangeCents?: Maybe<Scalars['BigInt']['output']>;
  medianSaleOverEstimatePercentage?: Maybe<Scalars['Int']['output']>;
  medianSalePriceLast36Months?: Maybe<Scalars['BigInt']['output']>;
  medianSalePriceLast96Months?: Maybe<Scalars['BigInt']['output']>;
  medianSaleToEstimateRatio?: Maybe<Scalars['Float']['output']>;
  medium?: Maybe<Scalars['String']['output']>;
  mediumHighRangeCents?: Maybe<Scalars['BigInt']['output']>;
  mediumLowRangeCents?: Maybe<Scalars['BigInt']['output']>;
  mediumMidRangeCents?: Maybe<Scalars['BigInt']['output']>;
  midRangeCents?: Maybe<Scalars['BigInt']['output']>;
  sellThroughRate?: Maybe<Scalars['Float']['output']>;
  smallHighRangeCents?: Maybe<Scalars['BigInt']['output']>;
  smallLowRangeCents?: Maybe<Scalars['BigInt']['output']>;
  smallMidRangeCents?: Maybe<Scalars['BigInt']['output']>;
  updatedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
};

export type MarketPriceInsightsConnection = {
  __typename?: 'MarketPriceInsightsConnection';
  edges?: Maybe<Array<Maybe<MarketPriceInsightsEdge>>>;
  nodes?: Maybe<Array<Maybe<MarketPriceInsights>>>;
  pageCursors?: Maybe<PageCursors>;
  pageInfo: AnalyticsPageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type MarketPriceInsightsEdge = {
  __typename?: 'MarketPriceInsightsEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<MarketPriceInsights>;
};

export type MarketingCollection = Node & {
  __typename?: 'MarketingCollection';
  artistIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  artworkIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  artworksConnection?: Maybe<FilterArtworksConnection>;
  category: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['String']['output']>;
  credit?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `markdownDescription` field instead */
  description?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `markdownDescription` field instead */
  descriptionMarkdown?: Maybe<Scalars['String']['output']>;
  featuredArtistExclusionIds: Array<Scalars['String']['output']>;
  geneIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  headerImage?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  isDepartment: Scalars['Boolean']['output'];
  isFeaturedArtistContent: Scalars['Boolean']['output'];
  keyword?: Maybe<Scalars['String']['output']>;
  linkedCollections: Array<MarketingCollectionGroup>;
  markdownDescription?: Maybe<Scalars['String']['output']>;
  priceGuidance?: Maybe<Scalars['Float']['output']>;
  query: MarketingCollectionQuery;
  relatedCollections: Array<MarketingCollection>;
  representativeArtworkID?: Maybe<Scalars['String']['output']>;
  showFeaturedArtists: Scalars['Boolean']['output'];
  showHeaderArtworksRail: Scalars['Boolean']['output'];
  slug: Scalars['String']['output'];
  thumbnail?: Maybe<Scalars['String']['output']>;
  thumbnailImage?: Maybe<Image>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
};


export type MarketingCollectionArtworksConnectionArgs = {
  acquireable?: InputMaybe<Scalars['Boolean']['input']>;
  additionalGeneIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  after?: InputMaybe<Scalars['String']['input']>;
  aggregationPartnerCities?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  aggregations?: InputMaybe<Array<InputMaybe<ArtworkAggregation>>>;
  artistID?: InputMaybe<Scalars['String']['input']>;
  artistIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  artistNationalities?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  artistSeriesID?: InputMaybe<Scalars['String']['input']>;
  artistSeriesIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  artworkIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  atAuction?: InputMaybe<Scalars['Boolean']['input']>;
  attributionClass?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  availability?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  color?: InputMaybe<Scalars['String']['input']>;
  colors?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dimensionRange?: InputMaybe<Scalars['String']['input']>;
  disableNotForSaleSorting?: InputMaybe<Scalars['Boolean']['input']>;
  excludeArtworkIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  extraAggregationGeneIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forSale?: InputMaybe<Scalars['Boolean']['input']>;
  framed?: InputMaybe<Scalars['Boolean']['input']>;
  geneID?: InputMaybe<Scalars['String']['input']>;
  geneIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  height?: InputMaybe<Scalars['String']['input']>;
  importSources?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  includeAllJSON?: InputMaybe<Scalars['Boolean']['input']>;
  includeArtworksByFollowedArtists?: InputMaybe<Scalars['Boolean']['input']>;
  includeMediumFilterInAggregation?: InputMaybe<Scalars['Boolean']['input']>;
  includeUnpublished?: InputMaybe<Scalars['Boolean']['input']>;
  input?: InputMaybe<FilterArtworksInput>;
  inquireableOnly?: InputMaybe<Scalars['Boolean']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  keywordMatchExact?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locationCities?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  majorPeriods?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  marketable?: InputMaybe<Scalars['Boolean']['input']>;
  marketingCollectionID?: InputMaybe<Scalars['String']['input']>;
  materialsTerms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  medium?: InputMaybe<Scalars['String']['input']>;
  offerable?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  partnerCities?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  partnerID?: InputMaybe<Scalars['ID']['input']>;
  partnerIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  period?: InputMaybe<Scalars['String']['input']>;
  periods?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  priceRange?: InputMaybe<Scalars['String']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  saleID?: InputMaybe<Scalars['ID']['input']>;
  showID?: InputMaybe<Scalars['String']['input']>;
  signed?: InputMaybe<Scalars['Boolean']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sizes?: InputMaybe<Array<InputMaybe<ArtworkSizes>>>;
  sold?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  tagID?: InputMaybe<Scalars['String']['input']>;
  visibilityLevel?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['String']['input']>;
};


export type MarketingCollectionCreatedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type MarketingCollectionMarkdownDescriptionArgs = {
  format?: InputMaybe<Format>;
};


export type MarketingCollectionRelatedCollectionsArgs = {
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type MarketingCollectionUpdatedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type MarketingCollectionCategory = {
  __typename?: 'MarketingCollectionCategory';
  collections: Array<MarketingCollection>;
  name: Scalars['String']['output'];
};

export type MarketingCollectionConnection = {
  __typename?: 'MarketingCollectionConnection';
  edges?: Maybe<Array<Maybe<MarketingCollectionEdge>>>;
  pageCursors: PageCursors;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type MarketingCollectionEdge = {
  __typename?: 'MarketingCollectionEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<MarketingCollection>;
};

export type MarketingCollectionGroup = {
  __typename?: 'MarketingCollectionGroup';
  groupType: MarketingCollectionGroupTypeEnum;
  internalID: Scalars['ID']['output'];
  members: Array<MarketingCollection>;
  name: Scalars['String']['output'];
};

export enum MarketingCollectionGroupTypeEnum {
  ArtistSeries = 'ArtistSeries',
  FeaturedCollections = 'FeaturedCollections',
  OtherCollections = 'OtherCollections'
}

export type MarketingCollectionQuery = {
  __typename?: 'MarketingCollectionQuery';
  artistIDs?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  geneIDs?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  id?: Maybe<Scalars['String']['output']>;
  internalID?: Maybe<Scalars['ID']['output']>;
  keyword?: Maybe<Scalars['String']['output']>;
  tagID?: Maybe<Scalars['String']['output']>;
};

export enum MarketingCollectionsSorts {
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Curated = 'CURATED',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC'
}

export type Match = Article | Artist | Artwork | Fair | Feature | Gene | Page | Profile | Sale | Show | Tag;

export type MatchArtworkImportArtistsFailure = {
  __typename?: 'MatchArtworkImportArtistsFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type MatchArtworkImportArtistsInput = {
  artworkImportID: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type MatchArtworkImportArtistsPayload = {
  __typename?: 'MatchArtworkImportArtistsPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  matchArtworkImportArtistsOrError?: Maybe<MatchArtworkImportArtistsResponseOrError>;
};

export type MatchArtworkImportArtistsResponseOrError = MatchArtworkImportArtistsFailure | MatchArtworkImportArtistsSuccess;

export type MatchArtworkImportArtistsSuccess = {
  __typename?: 'MatchArtworkImportArtistsSuccess';
  artworkImport?: Maybe<ArtworkImport>;
  artworkImportID: Scalars['String']['output'];
  matched: Scalars['Int']['output'];
  unmatched: Scalars['Int']['output'];
};

export type MatchArtworkImportRowImageFailure = {
  __typename?: 'MatchArtworkImportRowImageFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type MatchArtworkImportRowImageInput = {
  artworkImportID: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  fileName: Scalars['String']['input'];
  rowID?: InputMaybe<Scalars['String']['input']>;
  s3Bucket: Scalars['String']['input'];
  s3Key: Scalars['String']['input'];
};

export type MatchArtworkImportRowImagePayload = {
  __typename?: 'MatchArtworkImportRowImagePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  matchArtworkImportRowImageOrError?: Maybe<MatchArtworkImportRowImageResponseOrError>;
};

export type MatchArtworkImportRowImageResponseOrError = MatchArtworkImportRowImageFailure | MatchArtworkImportRowImageSuccess;

export type MatchArtworkImportRowImageSuccess = {
  __typename?: 'MatchArtworkImportRowImageSuccess';
  artworkImport?: Maybe<ArtworkImport>;
  success: Scalars['Boolean']['output'];
};

export type MatchConnection = {
  __typename?: 'MatchConnection';
  edges?: Maybe<Array<Maybe<MatchEdge>>>;
  pageCursors: PageCursors;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type MatchEdge = {
  __typename?: 'MatchEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Match>;
};

export type Me = Node & {
  __typename?: 'Me';
  addressConnection?: Maybe<UserAddressConnection>;
  alert?: Maybe<Alert>;
  alertsConnection: AlertConnection;
  artistRecommendations?: Maybe<ArtistConnection>;
  artworkInquiriesConnection?: Maybe<ArtworkInquiryConnection>;
  artworkRecommendations?: Maybe<ArtworkConnection>;
  auctionResultsByFollowedArtists?: Maybe<AuctionResultConnection>;
  auctionSegmentation?: Maybe<AuctionSegmentationType>;
  auctionsLotStandingConnection: AuctionsLotStandingConnection;
  authentications: Array<AuthenticationType>;
  bankAccounts?: Maybe<BankAccountConnection>;
  bidderPosition?: Maybe<BidderPositionResult>;
  bidderPositions?: Maybe<Array<Maybe<BidderPosition>>>;
  bidderStatus?: Maybe<LotStanding>;
  bidders?: Maybe<Array<Maybe<Bidder>>>;
  bio?: Maybe<Scalars['String']['output']>;
  canRequestEmailConfirmation: Scalars['Boolean']['output'];
  collection?: Maybe<Collection>;
  collectionsConnection?: Maybe<CollectionsConnection>;
  collectorLevel?: Maybe<Scalars['Int']['output']>;
  collectorProfile?: Maybe<CollectorProfileType>;
  confirmationToken?: Maybe<ConfirmationToken>;
  conversation?: Maybe<Conversation>;
  conversationsConnection?: Maybe<ConversationConnection>;
  counts?: Maybe<MeCounts>;
  createdAt?: Maybe<Scalars['String']['output']>;
  creditCards?: Maybe<CreditCardConnection>;
  currencyPreference: CurrencyPreference;
  email?: Maybe<Scalars['String']['output']>;
  /** @deprecated emailConfirmed is going to be removed, use isEmailConfirmed instead */
  emailConfirmed: Scalars['Boolean']['output'];
  emailFrequency?: Maybe<Scalars['String']['output']>;
  followsAndSaves?: Maybe<FollowsAndSaves>;
  hasCreditCards?: Maybe<Scalars['Boolean']['output']>;
  hasPassword: Scalars['Boolean']['output'];
  hasPriceRange: Scalars['Boolean']['output'];
  hasQualifiedCreditCards?: Maybe<Scalars['Boolean']['output']>;
  hasSecondFactorEnabled: Scalars['Boolean']['output'];
  hasStaleArtworkBudget: Scalars['Boolean']['output'];
  icon?: Maybe<Image>;
  id: Scalars['ID']['output'];
  identityVerification?: Maybe<IdentityVerification>;
  /** @deprecated identityVerified is going to be removed, use isIdentityVerified instead */
  identityVerified?: Maybe<Scalars['Boolean']['output']>;
  initials?: Maybe<Scalars['String']['output']>;
  inquiryIntroduction?: Maybe<Scalars['String']['output']>;
  internalID: Scalars['ID']['output'];
  isCollector: Scalars['Boolean']['output'];
  isEmailConfirmed: Scalars['Boolean']['output'];
  isIdentityVerified?: Maybe<Scalars['Boolean']['output']>;
  labFeatures: Array<Scalars['String']['output']>;
  lengthUnitPreference: LengthUnitPreference;
  location?: Maybe<MyLocation>;
  lotStanding?: Maybe<LotStanding>;
  lotStandings?: Maybe<Array<Maybe<LotStanding>>>;
  lotsByFollowedArtistsConnection?: Maybe<SaleArtworksConnection>;
  myBids?: Maybe<MyBids>;
  myCollectionAuctionResults?: Maybe<AuctionResultConnection>;
  myCollectionConnection?: Maybe<MyCollectionConnection>;
  myCollectionInfo?: Maybe<MyCollectionInfo>;
  name?: Maybe<Scalars['String']['output']>;
  newWorksByInterestingArtists?: Maybe<ArtworkConnection>;
  newWorksFromGalleriesYouFollowConnection?: Maybe<ArtworkConnection>;
  notification?: Maybe<Notification>;
  order?: Maybe<Order>;
  orders?: Maybe<CommerceOrderConnectionWithTotalCount>;
  /** @deprecated Use `otherRelevantPositions` instead */
  otherRelevantPosition?: Maybe<Scalars['String']['output']>;
  otherRelevantPositions?: Maybe<Scalars['String']['output']>;
  paddleNumber?: Maybe<Scalars['String']['output']>;
  partnerOffersConnection?: Maybe<PartnerOfferToCollectorConnection>;
  partners?: Maybe<Array<Maybe<Partner>>>;
  pendingIdentityVerification?: Maybe<IdentityVerification>;
  phone?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<PhoneNumberType>;
  pricePreference?: Maybe<Scalars['Float']['output']>;
  priceRange?: Maybe<Scalars['String']['output']>;
  priceRangeMax?: Maybe<Scalars['Float']['output']>;
  priceRangeMin?: Maybe<Scalars['Float']['output']>;
  privacy?: Maybe<Scalars['String']['output']>;
  profession?: Maybe<Scalars['String']['output']>;
  quiz: Quiz;
  receiveLotOpeningSoonNotification?: Maybe<Scalars['Boolean']['output']>;
  receiveNewSalesNotification?: Maybe<Scalars['Boolean']['output']>;
  receiveNewWorksNotification?: Maybe<Scalars['Boolean']['output']>;
  receiveOrderNotification?: Maybe<Scalars['Boolean']['output']>;
  receiveOutbidNotification?: Maybe<Scalars['Boolean']['output']>;
  receivePartnerOfferNotification?: Maybe<Scalars['Boolean']['output']>;
  receivePartnerShowNotification?: Maybe<Scalars['Boolean']['output']>;
  receivePromotionNotification?: Maybe<Scalars['Boolean']['output']>;
  receivePurchaseNotification?: Maybe<Scalars['Boolean']['output']>;
  receiveSaleOpeningClosingNotification?: Maybe<Scalars['Boolean']['output']>;
  receiveViewingRoomNotification?: Maybe<Scalars['Boolean']['output']>;
  recentlyViewedArtworkIds: Array<Maybe<Scalars['String']['output']>>;
  recentlyViewedArtworksConnection?: Maybe<ArtworkConnection>;
  /** @deprecated These genomic recs are deprecated. Use artworkRecommendations instead. */
  recommendedArtworks?: Maybe<ArtworkConnection>;
  saleRegistrationsConnection?: Maybe<SaleRegistrationConnection>;
  secondFactors?: Maybe<Array<Maybe<SecondFactor>>>;
  shareFollows: Scalars['Boolean']['output'];
  showsByFollowedArtists?: Maybe<ShowConnection>;
  showsConnection?: Maybe<ShowConnection>;
  similarToRecentlyViewedConnection?: Maybe<ArtworkConnection>;
  submissionsConnection?: Maybe<ArtworkConsignmentSubmissionConnection>;
  tasks?: Maybe<Array<Maybe<Task>>>;
  type?: Maybe<Scalars['String']['output']>;
  unreadConversationCount: Scalars['Int']['output'];
  unreadNotificationsCount: Scalars['Int']['output'];
  unseenNotificationsCount: Scalars['Int']['output'];
  userInterest?: Maybe<UserInterest>;
  userInterestsConnection?: Maybe<UserInterestConnection>;
  watchedLotConnection?: Maybe<LotConnection>;
};


export type MeAddressConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type MeAlertArgs = {
  id: Scalars['String']['input'];
};


export type MeAlertsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  attributes?: InputMaybe<PreviewSavedSearchAttributes>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<AlertsConnectionSortEnum>;
};


export type MeArtistRecommendationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type MeArtworkInquiriesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type MeArtworkRecommendationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type MeAuctionResultsByFollowedArtistsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  allowEmptyCreatedDates?: InputMaybe<Scalars['Boolean']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  earliestCreatedYear?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  latestCreatedYear?: InputMaybe<Scalars['Int']['input']>;
  organizations?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  recordsTrusted?: InputMaybe<Scalars['Boolean']['input']>;
  sizes?: InputMaybe<Array<InputMaybe<ArtworkSizes>>>;
  sort?: InputMaybe<AuctionResultSorts>;
  state?: InputMaybe<AuctionResultsState>;
};


export type MeAuctionsLotStandingConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type MeBankAccountsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<BankAccountTypes>;
};


export type MeBidderPositionArgs = {
  id: Scalars['String']['input'];
};


export type MeBidderPositionsArgs = {
  artworkID?: InputMaybe<Scalars['String']['input']>;
  current?: InputMaybe<Scalars['Boolean']['input']>;
  saleID?: InputMaybe<Scalars['String']['input']>;
};


export type MeBidderStatusArgs = {
  artworkID: Scalars['String']['input'];
  saleID: Scalars['String']['input'];
};


export type MeBiddersArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  saleID?: InputMaybe<Scalars['String']['input']>;
};


export type MeCollectionArgs = {
  id: Scalars['String']['input'];
};


export type MeCollectionsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  default?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includesArtworkID?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  saves?: InputMaybe<Scalars['Boolean']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<CollectionSorts>;
};


export type MeConfirmationTokenArgs = {
  id: Scalars['String']['input'];
};


export type MeConversationArgs = {
  id: Scalars['String']['input'];
};


export type MeConversationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  artistId?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  dismissed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  fromId?: InputMaybe<Scalars['String']['input']>;
  hasMessage?: InputMaybe<Scalars['Boolean']['input']>;
  hasReply?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  partnerId?: InputMaybe<Scalars['String']['input']>;
  toBeReplied?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<ConversationsInputMode>;
};


export type MeCreatedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type MeCreditCardsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type MeIdentityVerificationArgs = {
  id: Scalars['String']['input'];
};


export type MeInitialsArgs = {
  length?: InputMaybe<Scalars['Int']['input']>;
};


export type MeLotStandingArgs = {
  artworkID?: InputMaybe<Scalars['String']['input']>;
  saleArtworkID?: InputMaybe<Scalars['String']['input']>;
  saleID?: InputMaybe<Scalars['String']['input']>;
};


export type MeLotStandingsArgs = {
  activePositions?: InputMaybe<Scalars['Boolean']['input']>;
  artworkID?: InputMaybe<Scalars['String']['input']>;
  live?: InputMaybe<Scalars['Boolean']['input']>;
  saleArtworkID?: InputMaybe<Scalars['String']['input']>;
  saleID?: InputMaybe<Scalars['String']['input']>;
};


export type MeLotsByFollowedArtistsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  aggregations?: InputMaybe<Array<InputMaybe<SaleArtworkAggregation>>>;
  artistIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  biddableSale?: InputMaybe<Scalars['Boolean']['input']>;
  estimateRange?: InputMaybe<Scalars['String']['input']>;
  excludeClosedLots?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  geneIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  includeArtworksByFollowedArtists?: InputMaybe<Scalars['Boolean']['input']>;
  isAuction?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  liveSale?: InputMaybe<Scalars['Boolean']['input']>;
  marketable?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  saleID?: InputMaybe<Scalars['ID']['input']>;
  saleSlug?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type MeMyCollectionAuctionResultsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  allowEmptyCreatedDates?: InputMaybe<Scalars['Boolean']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  earliestCreatedYear?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  latestCreatedYear?: InputMaybe<Scalars['Int']['input']>;
  organizations?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  recordsTrusted?: InputMaybe<Scalars['Boolean']['input']>;
  sizes?: InputMaybe<Array<InputMaybe<ArtworkSizes>>>;
  sort?: InputMaybe<AuctionResultSorts>;
  state?: InputMaybe<AuctionResultsState>;
};


export type MeMyCollectionConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  artistIDs?: InputMaybe<Array<Scalars['String']['input']>>;
  before?: InputMaybe<Scalars['String']['input']>;
  excludePurchasedArtworks?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeOnlyTargetSupply?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<MyCollectionArtworkSorts>;
  sortByLastAuctionResultDate?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MeNewWorksByInterestingArtistsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type MeNewWorksFromGalleriesYouFollowConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type MeNotificationArgs = {
  id: Scalars['String']['input'];
};


export type MeOrderArgs = {
  id: Scalars['ID']['input'];
};


export type MeOrdersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  mode?: InputMaybe<CommerceOrderModeEnum>;
  sellerId?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<CommerceOrderConnectionSortEnum>;
  states?: InputMaybe<Array<CommerceOrderStateEnum>>;
};


export type MePartnerOffersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  artworkID?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<PartnerOfferToCollectorSorts>;
};


export type MePartnersArgs = {
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type MeRecentlyViewedArtworksConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type MeRecommendedArtworksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type MeSaleRegistrationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  auctionState?: InputMaybe<AuctionState>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  isAuction?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  live?: InputMaybe<Scalars['Boolean']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  registered?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<SaleSorts>;
  term?: InputMaybe<Scalars['String']['input']>;
};


export type MeSecondFactorsArgs = {
  kinds?: InputMaybe<Array<InputMaybe<SecondFactorKind>>>;
};


export type MeShowsByFollowedArtistsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<ShowSorts>;
  status?: InputMaybe<EventStatus>;
};


export type MeShowsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeShowsNearIpBasedLocation?: InputMaybe<Scalars['Boolean']['input']>;
  ip?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  near?: InputMaybe<Near>;
  sort?: InputMaybe<ShowSorts>;
  status?: InputMaybe<EventStatus>;
};


export type MeSimilarToRecentlyViewedConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type MeSubmissionsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  states?: InputMaybe<Array<InputMaybe<ArtworkConsignmentSubmissionState>>>;
};


export type MeTasksArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};


export type MeUserInterestArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type MeUserInterestsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<UserInterestCategory>;
  first?: InputMaybe<Scalars['Int']['input']>;
  interestID?: InputMaybe<Scalars['String']['input']>;
  interestType?: InputMaybe<UserInterestInterestType>;
  last?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type MeWatchedLotConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type MeCounts = {
  __typename?: 'MeCounts';
  followedArtists: Scalars['Int']['output'];
  followedProfiles: Scalars['Int']['output'];
  savedArtworks: Scalars['Int']['output'];
  savedSearches: Scalars['Int']['output'];
};

export type MergeArtistsFailure = {
  __typename?: 'MergeArtistsFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type MergeArtistsFieldOverrides = {
  birthday?: InputMaybe<Scalars['ID']['input']>;
  deathday?: InputMaybe<Scalars['ID']['input']>;
  gender?: InputMaybe<Scalars['ID']['input']>;
  hometown?: InputMaybe<Scalars['ID']['input']>;
  location?: InputMaybe<Scalars['ID']['input']>;
  nationality?: InputMaybe<Scalars['ID']['input']>;
};

export type MergeArtistsMutationInput = {
  badIds: Array<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  goodId: Scalars['String']['input'];
  overrides?: InputMaybe<MergeArtistsFieldOverrides>;
};

export type MergeArtistsMutationPayload = {
  __typename?: 'MergeArtistsMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  mergeArtistsResponseOrError?: Maybe<MergeArtistsResponseOrError>;
};

export type MergeArtistsResponseOrError = MergeArtistsFailure | MergeArtistsSuccess;

export type MergeArtistsSuccess = {
  __typename?: 'MergeArtistsSuccess';
  artist?: Maybe<Artist>;
};

export type Message = Node & {
  __typename?: 'Message';
  attachments?: Maybe<Array<Maybe<Attachment>>>;
  body?: Maybe<Scalars['String']['output']>;
  cc: Array<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  deliveries?: Maybe<Array<Maybe<Delivery>>>;
  from?: Maybe<MessageInitiator>;
  id: Scalars['ID']['output'];
  /** @deprecated Prefer internalID */
  impulseID: Scalars['String']['output'];
  internalID: Scalars['ID']['output'];
  isFirstMessage?: Maybe<Scalars['Boolean']['output']>;
  isFromUser?: Maybe<Scalars['Boolean']['output']>;
  isMessageSentOnPlatform?: Maybe<Scalars['Boolean']['output']>;
  sentAt?: Maybe<Scalars['String']['output']>;
  to: Array<Scalars['String']['output']>;
};


export type MessageCreatedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type MessageSentAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type MessageConnection = {
  __typename?: 'MessageConnection';
  edges?: Maybe<Array<Maybe<MessageEdge>>>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type MessageEdge = {
  __typename?: 'MessageEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Message>;
};

export type MessageInitiator = {
  __typename?: 'MessageInitiator';
  email?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type MessageOrConversationEventType = ConversationEvent | Message;

export type MessageOrConversationEventTypeConnection = {
  __typename?: 'MessageOrConversationEventTypeConnection';
  edges?: Maybe<Array<Maybe<MessageOrConversationEventTypeEdge>>>;
  pageCursors: PageCursors;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type MessageOrConversationEventTypeEdge = {
  __typename?: 'MessageOrConversationEventTypeEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<MessageOrConversationEventType>;
};

export type MetaphysicsService = {
  __typename?: 'MetaphysicsService';
  environment: Scalars['String']['output'];
  queryTracing: Scalars['Boolean']['output'];
  stitching: Scalars['Boolean']['output'];
  stitchingConvection: Scalars['Boolean']['output'];
  stitchingExchange: Scalars['Boolean']['output'];
  stitchingGravity: Scalars['Boolean']['output'];
};

export type Money = {
  __typename?: 'Money';
  amount?: Maybe<Scalars['String']['output']>;
  currencyCode: Scalars['String']['output'];
  currencyPrefix?: Maybe<Scalars['String']['output']>;
  currencySymbol?: Maybe<Scalars['String']['output']>;
  display?: Maybe<Scalars['String']['output']>;
  major: Scalars['Float']['output'];
  minor: Scalars['Long']['output'];
};


export type MoneyMajorArgs = {
  convertTo?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  acceptPartnerAgreement?: Maybe<AcceptPartnerAgreementPayload>;
  ackTask?: Maybe<AckTaskMutationPayload>;
  addArtworkToPartnerShow?: Maybe<AddArtworkToPartnerShowMutationPayload>;
  addAssetToConsignmentSubmission?: Maybe<AddAssetToConsignmentSubmissionPayload>;
  addAssetsToConsignmentSubmission?: Maybe<AddAssetsToConsignmentSubmissionPayload>;
  addInstallShotToPartnerShow?: Maybe<AddInstallShotToPartnerShowMutationPayload>;
  addOrderedSetItem?: Maybe<AddOrderedSetItemMutationPayload>;
  addUserRole?: Maybe<AddUserRoleMutationPayload>;
  addUserToSubmission?: Maybe<AddUserToSubmissionMutationPayload>;
  adminCreateFeatureFlag?: Maybe<AdminCreateFeatureFlagPayload>;
  adminDeleteFeatureFlag?: Maybe<AdminDeleteFeatureFlagPayload>;
  adminToggleFeatureFlag?: Maybe<AdminToggleFeatureFlagPayload>;
  adminUpdateFeatureFlag?: Maybe<AdminUpdateFeatureFlagPayload>;
  artsyShippingOptIn?: Maybe<ArtsyShippingOptInMutationPayload>;
  artworksCollectionsBatchUpdate?: Maybe<ArtworksCollectionsBatchUpdatePayload>;
  assignArtworkImportArtist?: Maybe<AssignArtworkImportArtistPayload>;
  bulkAddArtworksToShow?: Maybe<BulkAddArtworksToShowMutationPayload>;
  bulkUpdateArtworksMetadata?: Maybe<BulkUpdateArtworksMetadataMutationPayload>;
  cancelArtworkImport?: Maybe<CancelArtworkImportPayload>;
  commerceAddInitialOfferToOrder?: Maybe<CommerceAddInitialOfferToOrderPayload>;
  commerceApproveOrder?: Maybe<CommerceApproveOrderPayload>;
  commerceBuyerAcceptOffer?: Maybe<CommerceBuyerAcceptOfferPayload>;
  commerceBuyerCounterOffer?: Maybe<CommerceBuyerCounterOfferPayload>;
  commerceBuyerRejectOffer?: Maybe<CommerceBuyerRejectOfferPayload>;
  commerceConfirmFulfillment?: Maybe<CommerceConfirmFulfillmentPayload>;
  commerceConfirmPickup?: Maybe<CommerceConfirmPickupPayload>;
  commerceCreateBankDebitSetupForOrder?: Maybe<CommerceCreateBankDebitSetupForOrderPayload>;
  commerceCreateInquiryOfferOrderWithArtwork?: Maybe<CommerceCreateInquiryOfferOrderWithArtworkPayload>;
  commerceCreateInquiryOrderWithArtwork?: Maybe<CommerceCreateInquiryOrderWithArtworkPayload>;
  commerceCreateOfferOrderWithArtwork?: Maybe<CommerceCreateOfferOrderWithArtworkPayload>;
  commerceCreateOrderWithArtwork?: Maybe<CommerceCreateOrderWithArtworkPayload>;
  commerceCreatePartnerOfferOrder?: Maybe<CommerceCreatePartnerOfferOrderPayload>;
  commerceFixFailedPayment?: Maybe<CommerceFixFailedPaymentPayload>;
  commerceFulfillAtOnce?: Maybe<CommerceFulfillAtOncePayload>;
  commerceOptIn?: Maybe<CommerceOptInMutationPayload>;
  commerceOptInReport?: Maybe<CommerceOptInReportMutationPayload>;
  commerceSelectShippingOption?: Maybe<CommerceSelectShippingOptionPayload>;
  commerceSellerAcceptOffer?: Maybe<CommerceSellerAcceptOfferPayload>;
  commerceSellerAcceptProvisionalOffer?: Maybe<CommerceSellerAcceptProvisionalOfferPayload>;
  commerceSellerCounterOffer?: Maybe<CommerceSellerCounterOfferPayload>;
  commerceSellerRejectOffer?: Maybe<CommerceSellerRejectOfferPayload>;
  commerceSetPayment?: Maybe<CommerceSetPaymentPayload>;
  commerceSetPaymentByStripeIntent?: Maybe<CommerceSetPaymentByStripeIntentPayload>;
  commerceSetShipping?: Maybe<CommerceSetShippingPayload>;
  commerceSubmitOrder?: Maybe<CommerceSubmitOrderPayload>;
  commerceSubmitOrderWithOffer?: Maybe<CommerceSubmitOrderWithOfferPayload>;
  commerceSubmitPendingOffer?: Maybe<CommerceSubmitPendingOfferPayload>;
  commerceUpdateImpulseConversationId?: Maybe<CommerceUpdateImpulseConversationIdPayload>;
  confirmPassword?: Maybe<ConfirmPasswordPayload>;
  convectionCreateConsignmentSubmission?: Maybe<CreateSubmissionMutationPayload>;
  createAccountRequest?: Maybe<CreateAccountRequestMutationPayload>;
  createAlert?: Maybe<CreateAlertPayload>;
  createAndSendBackupSecondFactor?: Maybe<CreateAndSendBackupSecondFactorPayload>;
  createAppSecondFactor?: Maybe<CreateAppSecondFactorPayload>;
  createArtist?: Maybe<CreateArtistMutationPayload>;
  createArtwork?: Maybe<CreateArtworkMutationPayload>;
  createArtworkImport?: Maybe<CreateArtworkImportPayload>;
  createArtworkImportArtworks?: Maybe<CreateArtworkImportArtworksPayload>;
  createBackupSecondFactors?: Maybe<CreateBackupSecondFactorsPayload>;
  createBankDebitSetup?: Maybe<CreateBankDebitSetupPayload>;
  createBidder?: Maybe<CreateBidderPayload>;
  createBidderPosition?: Maybe<BidderPositionPayload>;
  createCanonicalArtist?: Maybe<CreateCanonicalArtistMutationPayload>;
  createCareerHighlight?: Maybe<CreateCareerHighlightPayload>;
  createCollection?: Maybe<CreateCollectionPayload>;
  createConsignmentInquiry?: Maybe<CreateConsignmentInquiryMutationPayload>;
  createConsignmentOffer?: Maybe<CreateOfferMutationPayload>;
  createConsignmentOfferResponse?: Maybe<CreateOfferResponseMutationPayload>;
  createConsignmentSubmission?: Maybe<CreateSubmissionMutationPayload>;
  createCreditCard?: Maybe<CreditCardPayload>;
  createFeature?: Maybe<CreateFeatureMutationPayload>;
  createFeaturedLink?: Maybe<CreateFeaturedLinkMutationPayload>;
  createGeminiEntryForAsset?: Maybe<CreateGeminiEntryForAssetPayload>;
  createHeroUnit?: Maybe<CreateHeroUnitMutationPayload>;
  createIdentityVerificationOverride?: Maybe<CreateIdentityVerificationOverrideMutationPayload>;
  createImage?: Maybe<CreateImagePayload>;
  createInquiryOfferOrder?: Maybe<CommerceCreateInquiryOfferOrderWithArtworkPayload>;
  createInquiryOrder?: Maybe<CommerceCreateInquiryOrderWithArtworkPayload>;
  createInvoicePayment?: Maybe<CreateInvoicePaymentPayload>;
  createOrderedSet?: Maybe<CreateOrderedSetMutationPayload>;
  createPage?: Maybe<CreatePageMutationPayload>;
  createPartnerArtistDocument?: Maybe<CreatePartnerArtistDocumentMutationPayload>;
  createPartnerContact?: Maybe<CreatePartnerContactPayload>;
  createPartnerLocation?: Maybe<CreatePartnerLocationPayload>;
  createPartnerLocationDaySchedules?: Maybe<CreatePartnerLocationDaySchedulesPayload>;
  createPartnerOffer?: Maybe<CreatePartnerOfferMutationPayload>;
  createPartnerShow?: Maybe<CreatePartnerShowMutationPayload>;
  createPartnerShowDocument?: Maybe<CreatePartnerShowDocumentMutationPayload>;
  createPartnerShowEvent?: Maybe<CreatePartnerShowEventMutationPayload>;
  createPurchase?: Maybe<CreatePurchasePayload>;
  createSaleAgreement?: Maybe<CreateSaleAgreementMutationPayload>;
  createSmsSecondFactor?: Maybe<CreateSmsSecondFactorPayload>;
  createUserAddress?: Maybe<CreateUserAddressPayload>;
  createUserAdminNote?: Maybe<CreateUserAdminNoteMutationPayload>;
  createUserInterest?: Maybe<CreateUserInterestMutationPayload>;
  createUserInterestForUser?: Maybe<CreateUserInterestForUserPayload>;
  createUserInterests?: Maybe<CreateUserInterestsMutationPayload>;
  createUserSaleProfile?: Maybe<CreateUserSaleProfileMutationPayload>;
  createUserSeenArtwork?: Maybe<CreateUserSeenArtworkPayload>;
  createVerifiedRepresentative?: Maybe<CreateVerifiedRepresentativePayload>;
  createViewingRoom?: Maybe<CreateViewingRoomPayload>;
  deleteAlert?: Maybe<DeleteAlertPayload>;
  deleteArtist?: Maybe<DeleteArtistPayload>;
  deleteArtwork?: Maybe<DeleteArtworkMutationPayload>;
  deleteArtworkImage?: Maybe<DeleteArtworkImagePayload>;
  deleteBankAccount?: Maybe<DeleteBankAccountPayload>;
  deleteCareerHighlight?: Maybe<DeleteCareerHighlightPayload>;
  deleteCollection?: Maybe<DeleteCollectionPayload>;
  deleteConversation?: Maybe<DeleteConversationMutationPayload>;
  deleteCreditCard?: Maybe<DeleteCreditCardPayload>;
  deleteFeature?: Maybe<DeleteFeatureMutationPayload>;
  deleteFeaturedLink?: Maybe<DeleteFeaturedLinkMutationPayload>;
  deleteHeroUnit?: Maybe<DeleteHeroUnitMutationPayload>;
  deleteMyAccountMutation?: Maybe<DeleteAccountPayload>;
  deleteMyUserProfileIcon?: Maybe<DeleteUserIconPayload>;
  deleteOrderedSet?: Maybe<DeleteOrderedSetMutationPayload>;
  deleteOrderedSetItem?: Maybe<DeleteOrderedSetItemMutationPayload>;
  deletePage?: Maybe<DeletePageMutationPayload>;
  deletePartnerArtist?: Maybe<DeletePartnerArtistMutationPayload>;
  deletePartnerArtistDocument?: Maybe<DeletePartnerArtistDocumentMutationPayload>;
  deletePartnerContact?: Maybe<DeletePartnerContactMutationPayload>;
  deletePartnerLocation?: Maybe<DeletePartnerLocationMutationPayload>;
  deletePartnerShow?: Maybe<DeletePartnerShowMutationPayload>;
  deletePartnerShowDocument?: Maybe<DeletePartnerShowDocumentMutationPayload>;
  deletePartnerShowEvent?: Maybe<DeletePartnerShowEventMutationPayload>;
  deletePurchase?: Maybe<DeletePurchasePayload>;
  deleteUser?: Maybe<DeleteUserPayload>;
  deleteUserAddress?: Maybe<DeleteUserAddressPayload>;
  deleteUserAdminNote?: Maybe<DeleteUserAdminNoteMutationPayload>;
  deleteUserInterest?: Maybe<DeleteUserInterestMutationPayload>;
  deleteUserInterestForUser?: Maybe<DeleteUserInterestForUserPayload>;
  deleteUserInterests?: Maybe<DeleteUserInterestsMutationPayload>;
  deleteUserRole?: Maybe<DeleteUserRoleMutationPayload>;
  deleteVerifiedRepresentative?: Maybe<DeleteVerifiedRepresentativeMutationPayload>;
  deleteViewingRoom?: Maybe<DeleteViewingRoomPayload>;
  deliverSecondFactor?: Maybe<DeliverSecondFactorPayload>;
  disableSecondFactor?: Maybe<DisableSecondFactorPayload>;
  dislikeArtwork?: Maybe<DislikeArtworkPayload>;
  dismissTask?: Maybe<DismissTaskMutationPayload>;
  enableSecondFactor?: Maybe<EnableSecondFactorPayload>;
  endSale?: Maybe<EndSalePayload>;
  excludeArtistFromDiscovery?: Maybe<ExcludeArtistFromDiscoveryPayload>;
  flagArtworkImportCell?: Maybe<FlagArtworkImportCellPayload>;
  followArtist?: Maybe<FollowArtistPayload>;
  followGene?: Maybe<FollowGenePayload>;
  followProfile?: Maybe<FollowProfilePayload>;
  followShow?: Maybe<FollowShowPayload>;
  linkAuthentication?: Maybe<LinkAuthenticationMutationPayload>;
  markAllNotificationsAsRead?: Maybe<MarkAllNotificationsAsReadPayload>;
  markNotificationAsRead?: Maybe<MarkNotificationAsReadPayload>;
  markNotificationsAsSeen?: Maybe<MarkNotificationsAsSeenPayload>;
  matchArtworkImportArtists?: Maybe<MatchArtworkImportArtistsPayload>;
  matchArtworkImportRowImage?: Maybe<MatchArtworkImportRowImagePayload>;
  mergeArtists?: Maybe<MergeArtistsMutationPayload>;
  myCollectionCreateArtwork?: Maybe<MyCollectionCreateArtworkPayload>;
  myCollectionDeleteArtwork?: Maybe<MyCollectionDeleteArtworkPayload>;
  myCollectionUpdateArtwork?: Maybe<MyCollectionUpdateArtworkPayload>;
  publishViewingRoom?: Maybe<PublishViewingRoomPayload>;
  recordArtworkView?: Maybe<RecordArtworkViewPayload>;
  removeArtworkFromPartnerShow?: Maybe<RemoveArtworkFromPartnerShowMutationPayload>;
  removeArtworkImportImage?: Maybe<RemoveArtworkImportImagePayload>;
  removeAssetFromConsignmentSubmission?: Maybe<RemoveAssetFromConsignmentSubmissionPayload>;
  removeInstallShotFromPartnerShow?: Maybe<RemoveInstallShotFromPartnerShowMutationPayload>;
  repositionArtworksInPartnerShow?: Maybe<RepositionArtworksInPartnerShowMutationPayload>;
  repositionInstallShotsInPartnerShow?: Maybe<RepositionInstallShotsInPartnerShowMutationPayload>;
  repositionPartnerArtistArtworks?: Maybe<RepositionPartnerArtistArtworksMutationPayload>;
  repositionPartnerLocations?: Maybe<RepositionPartnerLocationsMutationPayload>;
  requestConditionReport?: Maybe<RequestConditionReportPayload>;
  requestCredentialsForAssetUpload?: Maybe<RequestCredentialsForAssetUploadPayload>;
  requestPriceEstimate?: Maybe<RequestPriceEstimatePayload>;
  saveArtwork?: Maybe<SaveArtworkPayload>;
  sendConfirmationEmail?: Maybe<SendConfirmationEmailMutationPayload>;
  sendConversationMessage?: Maybe<SendConversationMessageMutationPayload>;
  sendFeedback?: Maybe<SendFeedbackMutationPayload>;
  sendIdentityVerificationEmail?: Maybe<SendIdentityVerificationEmailMutationPayload>;
  setOrderFulfillmentOption?: Maybe<SetOrderFulfillmentOptionPayload>;
  startIdentityVerification?: Maybe<StartIdentityVerificationMutationPayload>;
  submitInquiryRequestMutation?: Maybe<SubmitInquiryRequestMutationPayload>;
  submitOfferOrderWithConversation?: Maybe<CommerceSubmitOrderWithOfferPayload>;
  submitOrder?: Maybe<SubmitOrderPayload>;
  toggleArtworkImportRowExclusion?: Maybe<ToggleArtworkImportRowExclusionPayload>;
  transferMyCollection?: Maybe<TransferMyCollectionPayload>;
  triggerCampaign?: Maybe<TriggerCampaignPayload>;
  unlinkAuthentication?: Maybe<UnlinkAuthenticationMutationPayload>;
  unpublishViewingRoom?: Maybe<UnpublishViewingRoomPayload>;
  unsetOrderFulfillmentOption?: Maybe<UnsetOrderFulfillmentOptionPayload>;
  unsetOrderPaymentMethod?: Maybe<UnsetOrderPaymentMethodPayload>;
  updateAlert?: Maybe<UpdateAlertPayload>;
  updateAppSecondFactor?: Maybe<UpdateAppSecondFactorPayload>;
  updateArtist?: Maybe<UpdateArtistMutationPayload>;
  updateArtwork?: Maybe<UpdateArtworkMutationPayload>;
  updateArtworkImportCurrency?: Maybe<UpdateArtworkImportCurrencyPayload>;
  updateArtworkImportDimensionMetric?: Maybe<UpdateArtworkImportDimensionMetricPayload>;
  updateArtworkImportRow?: Maybe<UpdateArtworkImportRowPayload>;
  updateArtworkImportWeightMetric?: Maybe<UpdateArtworkImportWeightMetricPayload>;
  updateCMSLastAccessTimestamp?: Maybe<UpdateCmsLastAccessTimestampMutationPayload>;
  updateCareerHighlight?: Maybe<UpdateCareerHighlightPayload>;
  updateCollection?: Maybe<UpdateCollectionPayload>;
  updateCollectorProfile?: Maybe<UpdateCollectorProfilePayload>;
  updateCollectorProfileWithID?: Maybe<UpdateCollectorProfileWithIdPayload>;
  updateConsignmentSubmission?: Maybe<UpdateSubmissionMutationPayload>;
  updateConversation?: Maybe<UpdateConversationMutationPayload>;
  updateFeature?: Maybe<UpdateFeatureMutationPayload>;
  updateFeaturedLink?: Maybe<UpdateFeaturedLinkMutationPayload>;
  updateHeroUnit?: Maybe<UpdateHeroUnitMutationPayload>;
  updateInstallShotForPartnerShow?: Maybe<UpdateInstallShotForPartnerShowMutationPayload>;
  updateMeCollectionsMutation?: Maybe<UpdateMeCollectionsMutationPayload>;
  updateMessage?: Maybe<UpdateMessageMutationPayload>;
  updateMyPassword?: Maybe<UpdateMyPasswordMutationPayload>;
  updateMyUserProfile?: Maybe<UpdateMyProfilePayload>;
  updateNotificationPreferences?: Maybe<UpdateNotificationPreferencesMutationPayload>;
  updateOrder?: Maybe<UpdateOrderPayload>;
  updateOrderShippingAddress?: Maybe<UpdateOrderShippingAddressPayload>;
  updateOrderedSet?: Maybe<UpdateOrderedSetMutationPayload>;
  updatePage?: Maybe<UpdatePageMutationPayload>;
  updatePartner?: Maybe<UpdatePartnerMutationPayload>;
  updatePartnerArtist?: Maybe<UpdatePartnerArtistMutationPayload>;
  updatePartnerArtistDocument?: Maybe<UpdatePartnerArtistDocumentMutationPayload>;
  updatePartnerContact?: Maybe<UpdatePartnerContactPayload>;
  updatePartnerFlags?: Maybe<UpdatePartnerFlagsMutationPayload>;
  updatePartnerLocation?: Maybe<UpdatePartnerLocationPayload>;
  updatePartnerProfileImage?: Maybe<UpdatePartnerProfileImagePayload>;
  updatePartnerShow?: Maybe<UpdatePartnerShowMutationPayload>;
  updatePartnerShowDocument?: Maybe<UpdatePartnerShowDocumentMutationPayload>;
  updatePartnerShowEvent?: Maybe<UpdatePartnerShowEventMutationPayload>;
  updateProfile?: Maybe<UpdateProfileMutationPayload>;
  updatePurchase?: Maybe<UpdatePurchasePayload>;
  updateQuiz?: Maybe<UpdateQuizMutationPayload>;
  updateSaleAgreement?: Maybe<UpdateSaleAgreementMutationPayload>;
  updateSmsSecondFactor?: Maybe<UpdateSmsSecondFactorPayload>;
  updateUser?: Maybe<UpdateUserMutationPayload>;
  updateUserAddress?: Maybe<UpdateUserAddressPayload>;
  updateUserDefaultAddress?: Maybe<UpdateUserDefaultAddressPayload>;
  updateUserInterest?: Maybe<UpdateUserInterestMutationPayload>;
  updateUserInterests?: Maybe<UpdateUserInterestsMutationPayload>;
  updateUserSaleProfile?: Maybe<UpdateUserSaleProfileMutationPayload>;
  updateViewingRoom?: Maybe<UpdateViewingRoomPayload>;
  updateViewingRoomArtworks?: Maybe<UpdateViewingRoomArtworksPayload>;
  updateViewingRoomSubsections?: Maybe<UpdateViewingRoomSubsectionsPayload>;
};


export type MutationAcceptPartnerAgreementArgs = {
  input: AcceptPartnerAgreementInput;
};


export type MutationAckTaskArgs = {
  input: AckTaskMutationInput;
};


export type MutationAddArtworkToPartnerShowArgs = {
  input: AddArtworkToPartnerShowMutationInput;
};


export type MutationAddAssetToConsignmentSubmissionArgs = {
  input: AddAssetToConsignmentSubmissionInput;
};


export type MutationAddAssetsToConsignmentSubmissionArgs = {
  input: AddAssetsToConsignmentSubmissionInput;
};


export type MutationAddInstallShotToPartnerShowArgs = {
  input: AddInstallShotToPartnerShowMutationInput;
};


export type MutationAddOrderedSetItemArgs = {
  input: AddOrderedSetItemMutationInput;
};


export type MutationAddUserRoleArgs = {
  input: AddUserRoleMutationInput;
};


export type MutationAddUserToSubmissionArgs = {
  input: AddUserToSubmissionMutationInput;
};


export type MutationAdminCreateFeatureFlagArgs = {
  input: AdminCreateFeatureFlagInput;
};


export type MutationAdminDeleteFeatureFlagArgs = {
  input: AdminDeleteFeatureFlagInput;
};


export type MutationAdminToggleFeatureFlagArgs = {
  input: AdminToggleFeatureFlagInput;
};


export type MutationAdminUpdateFeatureFlagArgs = {
  input: AdminUpdateFeatureFlagInput;
};


export type MutationArtsyShippingOptInArgs = {
  input: ArtsyShippingOptInMutationInput;
};


export type MutationArtworksCollectionsBatchUpdateArgs = {
  input: ArtworksCollectionsBatchUpdateInput;
};


export type MutationAssignArtworkImportArtistArgs = {
  input: AssignArtworkImportArtistInput;
};


export type MutationBulkAddArtworksToShowArgs = {
  input: BulkAddArtworksToShowMutationInput;
};


export type MutationBulkUpdateArtworksMetadataArgs = {
  input: BulkUpdateArtworksMetadataMutationInput;
};


export type MutationCancelArtworkImportArgs = {
  input: CancelArtworkImportInput;
};


export type MutationCommerceAddInitialOfferToOrderArgs = {
  input: CommerceAddInitialOfferToOrderInput;
};


export type MutationCommerceApproveOrderArgs = {
  input: CommerceApproveOrderInput;
};


export type MutationCommerceBuyerAcceptOfferArgs = {
  input: CommerceBuyerAcceptOfferInput;
};


export type MutationCommerceBuyerCounterOfferArgs = {
  input: CommerceBuyerCounterOfferInput;
};


export type MutationCommerceBuyerRejectOfferArgs = {
  input: CommerceBuyerRejectOfferInput;
};


export type MutationCommerceConfirmFulfillmentArgs = {
  input: CommerceConfirmFulfillmentInput;
};


export type MutationCommerceConfirmPickupArgs = {
  input: CommerceConfirmPickupInput;
};


export type MutationCommerceCreateBankDebitSetupForOrderArgs = {
  input: CommerceCreateBankDebitSetupForOrderInput;
};


export type MutationCommerceCreateInquiryOfferOrderWithArtworkArgs = {
  input: CommerceCreateInquiryOfferOrderWithArtworkInput;
};


export type MutationCommerceCreateInquiryOrderWithArtworkArgs = {
  input: CommerceCreateInquiryOrderWithArtworkInput;
};


export type MutationCommerceCreateOfferOrderWithArtworkArgs = {
  input: CommerceCreateOfferOrderWithArtworkInput;
};


export type MutationCommerceCreateOrderWithArtworkArgs = {
  input: CommerceCreateOrderWithArtworkInput;
};


export type MutationCommerceCreatePartnerOfferOrderArgs = {
  input: CommerceCreatePartnerOfferOrderInput;
};


export type MutationCommerceFixFailedPaymentArgs = {
  input: CommerceFixFailedPaymentInput;
};


export type MutationCommerceFulfillAtOnceArgs = {
  input: CommerceFulfillAtOnceInput;
};


export type MutationCommerceOptInArgs = {
  input: CommerceOptInMutationInput;
};


export type MutationCommerceOptInReportArgs = {
  input: CommerceOptInReportMutationInput;
};


export type MutationCommerceSelectShippingOptionArgs = {
  input: CommerceSelectShippingOptionInput;
};


export type MutationCommerceSellerAcceptOfferArgs = {
  input: CommerceSellerAcceptOfferInput;
};


export type MutationCommerceSellerAcceptProvisionalOfferArgs = {
  input: CommerceSellerAcceptProvisionalOfferInput;
};


export type MutationCommerceSellerCounterOfferArgs = {
  input: CommerceSellerCounterOfferInput;
};


export type MutationCommerceSellerRejectOfferArgs = {
  input: CommerceSellerRejectOfferInput;
};


export type MutationCommerceSetPaymentArgs = {
  input: CommerceSetPaymentInput;
};


export type MutationCommerceSetPaymentByStripeIntentArgs = {
  input: CommerceSetPaymentByStripeIntentInput;
};


export type MutationCommerceSetShippingArgs = {
  input: CommerceSetShippingInput;
};


export type MutationCommerceSubmitOrderArgs = {
  input: CommerceSubmitOrderInput;
};


export type MutationCommerceSubmitOrderWithOfferArgs = {
  input: CommerceSubmitOrderWithOfferInput;
};


export type MutationCommerceSubmitPendingOfferArgs = {
  input: CommerceSubmitPendingOfferInput;
};


export type MutationCommerceUpdateImpulseConversationIdArgs = {
  input: CommerceUpdateImpulseConversationIdInput;
};


export type MutationConfirmPasswordArgs = {
  input: ConfirmPasswordInput;
};


export type MutationConvectionCreateConsignmentSubmissionArgs = {
  input: CreateSubmissionMutationInput;
};


export type MutationCreateAccountRequestArgs = {
  input: CreateAccountRequestMutationInput;
};


export type MutationCreateAlertArgs = {
  input: CreateAlertInput;
};


export type MutationCreateAndSendBackupSecondFactorArgs = {
  input: CreateAndSendBackupSecondFactorInput;
};


export type MutationCreateAppSecondFactorArgs = {
  input: CreateAppSecondFactorInput;
};


export type MutationCreateArtistArgs = {
  input: CreateArtistMutationInput;
};


export type MutationCreateArtworkArgs = {
  input: CreateArtworkMutationInput;
};


export type MutationCreateArtworkImportArgs = {
  input: CreateArtworkImportInput;
};


export type MutationCreateArtworkImportArtworksArgs = {
  input: CreateArtworkImportArtworksInput;
};


export type MutationCreateBackupSecondFactorsArgs = {
  input: CreateBackupSecondFactorsInput;
};


export type MutationCreateBankDebitSetupArgs = {
  input: CreateBankDebitSetupInput;
};


export type MutationCreateBidderArgs = {
  input: CreateBidderInput;
};


export type MutationCreateBidderPositionArgs = {
  input: BidderPositionInput;
};


export type MutationCreateCanonicalArtistArgs = {
  input: CreateCanonicalArtistMutationInput;
};


export type MutationCreateCareerHighlightArgs = {
  input: CreateCareerHighlightInput;
};


export type MutationCreateCollectionArgs = {
  input: CreateCollectionInput;
};


export type MutationCreateConsignmentInquiryArgs = {
  input: CreateConsignmentInquiryMutationInput;
};


export type MutationCreateConsignmentOfferArgs = {
  input: CreateOfferMutationInput;
};


export type MutationCreateConsignmentOfferResponseArgs = {
  input: CreateOfferResponseMutationInput;
};


export type MutationCreateConsignmentSubmissionArgs = {
  input: CreateSubmissionMutationInput;
};


export type MutationCreateCreditCardArgs = {
  input: CreditCardInput;
};


export type MutationCreateFeatureArgs = {
  input: CreateFeatureMutationInput;
};


export type MutationCreateFeaturedLinkArgs = {
  input: CreateFeaturedLinkMutationInput;
};


export type MutationCreateGeminiEntryForAssetArgs = {
  input: CreateGeminiEntryForAssetInput;
};


export type MutationCreateHeroUnitArgs = {
  input: CreateHeroUnitMutationInput;
};


export type MutationCreateIdentityVerificationOverrideArgs = {
  input: CreateIdentityVerificationOverrideMutationInput;
};


export type MutationCreateImageArgs = {
  input: CreateImageInput;
};


export type MutationCreateInquiryOfferOrderArgs = {
  input: CommerceCreateInquiryOfferOrderWithArtworkInput;
};


export type MutationCreateInquiryOrderArgs = {
  input: CommerceCreateInquiryOrderWithArtworkInput;
};


export type MutationCreateInvoicePaymentArgs = {
  input: CreateInvoicePaymentInput;
};


export type MutationCreateOrderedSetArgs = {
  input: CreateOrderedSetMutationInput;
};


export type MutationCreatePageArgs = {
  input: CreatePageMutationInput;
};


export type MutationCreatePartnerArtistDocumentArgs = {
  input: CreatePartnerArtistDocumentMutationInput;
};


export type MutationCreatePartnerContactArgs = {
  input: CreatePartnerContactInput;
};


export type MutationCreatePartnerLocationArgs = {
  input: CreatePartnerLocationInput;
};


export type MutationCreatePartnerLocationDaySchedulesArgs = {
  input: CreatePartnerLocationDaySchedulesInput;
};


export type MutationCreatePartnerOfferArgs = {
  input: CreatePartnerOfferMutationInput;
};


export type MutationCreatePartnerShowArgs = {
  input: CreatePartnerShowMutationInput;
};


export type MutationCreatePartnerShowDocumentArgs = {
  input: CreatePartnerShowDocumentMutationInput;
};


export type MutationCreatePartnerShowEventArgs = {
  input: CreatePartnerShowEventMutationInput;
};


export type MutationCreatePurchaseArgs = {
  input: CreatePurchaseInput;
};


export type MutationCreateSaleAgreementArgs = {
  input: CreateSaleAgreementMutationInput;
};


export type MutationCreateSmsSecondFactorArgs = {
  input: CreateSmsSecondFactorInput;
};


export type MutationCreateUserAddressArgs = {
  input: CreateUserAddressInput;
};


export type MutationCreateUserAdminNoteArgs = {
  input: CreateUserAdminNoteMutationInput;
};


export type MutationCreateUserInterestArgs = {
  input: CreateUserInterestMutationInput;
};


export type MutationCreateUserInterestForUserArgs = {
  input: CreateUserInterestForUserInput;
};


export type MutationCreateUserInterestsArgs = {
  input: CreateUserInterestsMutationInput;
};


export type MutationCreateUserSaleProfileArgs = {
  input: CreateUserSaleProfileMutationInput;
};


export type MutationCreateUserSeenArtworkArgs = {
  input: CreateUserSeenArtworkInput;
};


export type MutationCreateVerifiedRepresentativeArgs = {
  input: CreateVerifiedRepresentativeInput;
};


export type MutationCreateViewingRoomArgs = {
  input: CreateViewingRoomInput;
};


export type MutationDeleteAlertArgs = {
  input: DeleteAlertInput;
};


export type MutationDeleteArtistArgs = {
  input: DeleteArtistInput;
};


export type MutationDeleteArtworkArgs = {
  input: DeleteArtworkMutationInput;
};


export type MutationDeleteArtworkImageArgs = {
  input: DeleteArtworkImageInput;
};


export type MutationDeleteBankAccountArgs = {
  input: DeleteBankAccountInput;
};


export type MutationDeleteCareerHighlightArgs = {
  input: DeleteCareerHighlightInput;
};


export type MutationDeleteCollectionArgs = {
  input: DeleteCollectionInput;
};


export type MutationDeleteConversationArgs = {
  input: DeleteConversationMutationInput;
};


export type MutationDeleteCreditCardArgs = {
  input: DeleteCreditCardInput;
};


export type MutationDeleteFeatureArgs = {
  input: DeleteFeatureMutationInput;
};


export type MutationDeleteFeaturedLinkArgs = {
  input: DeleteFeaturedLinkMutationInput;
};


export type MutationDeleteHeroUnitArgs = {
  input: DeleteHeroUnitMutationInput;
};


export type MutationDeleteMyAccountMutationArgs = {
  input: DeleteAccountInput;
};


export type MutationDeleteMyUserProfileIconArgs = {
  input: DeleteUserIconInput;
};


export type MutationDeleteOrderedSetArgs = {
  input: DeleteOrderedSetMutationInput;
};


export type MutationDeleteOrderedSetItemArgs = {
  input: DeleteOrderedSetItemMutationInput;
};


export type MutationDeletePageArgs = {
  input: DeletePageMutationInput;
};


export type MutationDeletePartnerArtistArgs = {
  input: DeletePartnerArtistMutationInput;
};


export type MutationDeletePartnerArtistDocumentArgs = {
  input: DeletePartnerArtistDocumentMutationInput;
};


export type MutationDeletePartnerContactArgs = {
  input: DeletePartnerContactMutationInput;
};


export type MutationDeletePartnerLocationArgs = {
  input: DeletePartnerLocationMutationInput;
};


export type MutationDeletePartnerShowArgs = {
  input: DeletePartnerShowMutationInput;
};


export type MutationDeletePartnerShowDocumentArgs = {
  input: DeletePartnerShowDocumentMutationInput;
};


export type MutationDeletePartnerShowEventArgs = {
  input: DeletePartnerShowEventMutationInput;
};


export type MutationDeletePurchaseArgs = {
  input: DeletePurchaseInput;
};


export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};


export type MutationDeleteUserAddressArgs = {
  input: DeleteUserAddressInput;
};


export type MutationDeleteUserAdminNoteArgs = {
  input: DeleteUserAdminNoteMutationInput;
};


export type MutationDeleteUserInterestArgs = {
  input: DeleteUserInterestMutationInput;
};


export type MutationDeleteUserInterestForUserArgs = {
  input: DeleteUserInterestForUserInput;
};


export type MutationDeleteUserInterestsArgs = {
  input: DeleteUserInterestsMutationInput;
};


export type MutationDeleteUserRoleArgs = {
  input: DeleteUserRoleMutationInput;
};


export type MutationDeleteVerifiedRepresentativeArgs = {
  input: DeleteVerifiedRepresentativeMutationInput;
};


export type MutationDeleteViewingRoomArgs = {
  input: DeleteViewingRoomInput;
};


export type MutationDeliverSecondFactorArgs = {
  input: DeliverSecondFactorInput;
};


export type MutationDisableSecondFactorArgs = {
  input: DisableSecondFactorInput;
};


export type MutationDislikeArtworkArgs = {
  input: DislikeArtworkInput;
};


export type MutationDismissTaskArgs = {
  input: DismissTaskMutationInput;
};


export type MutationEnableSecondFactorArgs = {
  input: EnableSecondFactorInput;
};


export type MutationEndSaleArgs = {
  input: EndSaleInput;
};


export type MutationExcludeArtistFromDiscoveryArgs = {
  input: ExcludeArtistFromDiscoveryInput;
};


export type MutationFlagArtworkImportCellArgs = {
  input: FlagArtworkImportCellInput;
};


export type MutationFollowArtistArgs = {
  input: FollowArtistInput;
};


export type MutationFollowGeneArgs = {
  input: FollowGeneInput;
};


export type MutationFollowProfileArgs = {
  input: FollowProfileInput;
};


export type MutationFollowShowArgs = {
  input: FollowShowInput;
};


export type MutationLinkAuthenticationArgs = {
  input: LinkAuthenticationMutationInput;
};


export type MutationMarkAllNotificationsAsReadArgs = {
  input: MarkAllNotificationsAsReadInput;
};


export type MutationMarkNotificationAsReadArgs = {
  input: MarkNotificationAsReadInput;
};


export type MutationMarkNotificationsAsSeenArgs = {
  input: MarkNotificationsAsSeenInput;
};


export type MutationMatchArtworkImportArtistsArgs = {
  input: MatchArtworkImportArtistsInput;
};


export type MutationMatchArtworkImportRowImageArgs = {
  input: MatchArtworkImportRowImageInput;
};


export type MutationMergeArtistsArgs = {
  input: MergeArtistsMutationInput;
};


export type MutationMyCollectionCreateArtworkArgs = {
  input: MyCollectionCreateArtworkInput;
};


export type MutationMyCollectionDeleteArtworkArgs = {
  input: MyCollectionDeleteArtworkInput;
};


export type MutationMyCollectionUpdateArtworkArgs = {
  input: MyCollectionUpdateArtworkInput;
};


export type MutationPublishViewingRoomArgs = {
  input: PublishViewingRoomInput;
};


export type MutationRecordArtworkViewArgs = {
  input: RecordArtworkViewInput;
};


export type MutationRemoveArtworkFromPartnerShowArgs = {
  input: RemoveArtworkFromPartnerShowMutationInput;
};


export type MutationRemoveArtworkImportImageArgs = {
  input: RemoveArtworkImportImageInput;
};


export type MutationRemoveAssetFromConsignmentSubmissionArgs = {
  input: RemoveAssetFromConsignmentSubmissionInput;
};


export type MutationRemoveInstallShotFromPartnerShowArgs = {
  input: RemoveInstallShotFromPartnerShowMutationInput;
};


export type MutationRepositionArtworksInPartnerShowArgs = {
  input: RepositionArtworksInPartnerShowMutationInput;
};


export type MutationRepositionInstallShotsInPartnerShowArgs = {
  input: RepositionInstallShotsInPartnerShowMutationInput;
};


export type MutationRepositionPartnerArtistArtworksArgs = {
  input: RepositionPartnerArtistArtworksMutationInput;
};


export type MutationRepositionPartnerLocationsArgs = {
  input: RepositionPartnerLocationsMutationInput;
};


export type MutationRequestConditionReportArgs = {
  input: RequestConditionReportInput;
};


export type MutationRequestCredentialsForAssetUploadArgs = {
  input: RequestCredentialsForAssetUploadInput;
};


export type MutationRequestPriceEstimateArgs = {
  input: RequestPriceEstimateInput;
};


export type MutationSaveArtworkArgs = {
  input: SaveArtworkInput;
};


export type MutationSendConfirmationEmailArgs = {
  input: SendConfirmationEmailMutationInput;
};


export type MutationSendConversationMessageArgs = {
  input: SendConversationMessageMutationInput;
};


export type MutationSendFeedbackArgs = {
  input: SendFeedbackMutationInput;
};


export type MutationSendIdentityVerificationEmailArgs = {
  input: SendIdentityVerificationEmailMutationInput;
};


export type MutationSetOrderFulfillmentOptionArgs = {
  input: SetOrderFulfillmentOptionInput;
};


export type MutationStartIdentityVerificationArgs = {
  input: StartIdentityVerificationMutationInput;
};


export type MutationSubmitInquiryRequestMutationArgs = {
  input: SubmitInquiryRequestMutationInput;
};


export type MutationSubmitOfferOrderWithConversationArgs = {
  input: CommerceSubmitOrderWithOfferInput;
};


export type MutationSubmitOrderArgs = {
  input: SubmitOrderInput;
};


export type MutationToggleArtworkImportRowExclusionArgs = {
  input: ToggleArtworkImportRowExclusionInput;
};


export type MutationTransferMyCollectionArgs = {
  input: TransferMyCollectionInput;
};


export type MutationTriggerCampaignArgs = {
  input: TriggerCampaignInput;
};


export type MutationUnlinkAuthenticationArgs = {
  input: UnlinkAuthenticationMutationInput;
};


export type MutationUnpublishViewingRoomArgs = {
  input: UnpublishViewingRoomInput;
};


export type MutationUnsetOrderFulfillmentOptionArgs = {
  input: UnsetOrderFulfillmentOptionInput;
};


export type MutationUnsetOrderPaymentMethodArgs = {
  input: UnsetOrderPaymentMethodInput;
};


export type MutationUpdateAlertArgs = {
  input: UpdateAlertInput;
};


export type MutationUpdateAppSecondFactorArgs = {
  input: UpdateAppSecondFactorInput;
};


export type MutationUpdateArtistArgs = {
  input: UpdateArtistMutationInput;
};


export type MutationUpdateArtworkArgs = {
  input: UpdateArtworkMutationInput;
};


export type MutationUpdateArtworkImportCurrencyArgs = {
  input: UpdateArtworkImportCurrencyInput;
};


export type MutationUpdateArtworkImportDimensionMetricArgs = {
  input: UpdateArtworkImportDimensionMetricInput;
};


export type MutationUpdateArtworkImportRowArgs = {
  input: UpdateArtworkImportRowInput;
};


export type MutationUpdateArtworkImportWeightMetricArgs = {
  input: UpdateArtworkImportWeightMetricInput;
};


export type MutationUpdateCmsLastAccessTimestampArgs = {
  input: UpdateCmsLastAccessTimestampMutationInput;
};


export type MutationUpdateCareerHighlightArgs = {
  input: UpdateCareerHighlightInput;
};


export type MutationUpdateCollectionArgs = {
  input: UpdateCollectionInput;
};


export type MutationUpdateCollectorProfileArgs = {
  input: UpdateCollectorProfileInput;
};


export type MutationUpdateCollectorProfileWithIdArgs = {
  input: UpdateCollectorProfileWithIdInput;
};


export type MutationUpdateConsignmentSubmissionArgs = {
  input: UpdateSubmissionMutationInput;
};


export type MutationUpdateConversationArgs = {
  input: UpdateConversationMutationInput;
};


export type MutationUpdateFeatureArgs = {
  input: UpdateFeatureMutationInput;
};


export type MutationUpdateFeaturedLinkArgs = {
  input: UpdateFeaturedLinkMutationInput;
};


export type MutationUpdateHeroUnitArgs = {
  input: UpdateHeroUnitMutationInput;
};


export type MutationUpdateInstallShotForPartnerShowArgs = {
  input: UpdateInstallShotForPartnerShowMutationInput;
};


export type MutationUpdateMeCollectionsMutationArgs = {
  input: UpdateMeCollectionsMutationInput;
};


export type MutationUpdateMessageArgs = {
  input: UpdateMessageMutationInput;
};


export type MutationUpdateMyPasswordArgs = {
  input: UpdateMyPasswordMutationInput;
};


export type MutationUpdateMyUserProfileArgs = {
  input: UpdateMyProfileInput;
};


export type MutationUpdateNotificationPreferencesArgs = {
  input: UpdateNotificationPreferencesMutationInput;
};


export type MutationUpdateOrderArgs = {
  input: UpdateOrderInput;
};


export type MutationUpdateOrderShippingAddressArgs = {
  input: UpdateOrderShippingAddressInput;
};


export type MutationUpdateOrderedSetArgs = {
  input: UpdateOrderedSetMutationInput;
};


export type MutationUpdatePageArgs = {
  input: UpdatePageMutationInput;
};


export type MutationUpdatePartnerArgs = {
  input: UpdatePartnerMutationInput;
};


export type MutationUpdatePartnerArtistArgs = {
  input: UpdatePartnerArtistMutationInput;
};


export type MutationUpdatePartnerArtistDocumentArgs = {
  input: UpdatePartnerArtistDocumentMutationInput;
};


export type MutationUpdatePartnerContactArgs = {
  input: UpdatePartnerContactInput;
};


export type MutationUpdatePartnerFlagsArgs = {
  input: UpdatePartnerFlagsMutationInput;
};


export type MutationUpdatePartnerLocationArgs = {
  input: UpdatePartnerLocationInput;
};


export type MutationUpdatePartnerProfileImageArgs = {
  input: UpdatePartnerProfileImageInput;
};


export type MutationUpdatePartnerShowArgs = {
  input: UpdatePartnerShowMutationInput;
};


export type MutationUpdatePartnerShowDocumentArgs = {
  input: UpdatePartnerShowDocumentMutationInput;
};


export type MutationUpdatePartnerShowEventArgs = {
  input: UpdatePartnerShowEventMutationInput;
};


export type MutationUpdateProfileArgs = {
  input: UpdateProfileMutationInput;
};


export type MutationUpdatePurchaseArgs = {
  input: UpdatePurchaseInput;
};


export type MutationUpdateQuizArgs = {
  input: UpdateQuizMutationInput;
};


export type MutationUpdateSaleAgreementArgs = {
  input: UpdateSaleAgreementMutationInput;
};


export type MutationUpdateSmsSecondFactorArgs = {
  input: UpdateSmsSecondFactorInput;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserMutationInput;
};


export type MutationUpdateUserAddressArgs = {
  input: UpdateUserAddressInput;
};


export type MutationUpdateUserDefaultAddressArgs = {
  input: UpdateUserDefaultAddressInput;
};


export type MutationUpdateUserInterestArgs = {
  input: UpdateUserInterestMutationInput;
};


export type MutationUpdateUserInterestsArgs = {
  input: UpdateUserInterestsMutationInput;
};


export type MutationUpdateUserSaleProfileArgs = {
  input: UpdateUserSaleProfileMutationInput;
};


export type MutationUpdateViewingRoomArgs = {
  input: UpdateViewingRoomInput;
};


export type MutationUpdateViewingRoomArtworksArgs = {
  input: UpdateViewingRoomArtworksInput;
};


export type MutationUpdateViewingRoomSubsectionsArgs = {
  input: UpdateViewingRoomSubsectionsInput;
};

export type MyBid = {
  __typename?: 'MyBid';
  sale?: Maybe<Sale>;
  saleArtworks?: Maybe<Array<Maybe<SaleArtwork>>>;
};

export type MyBids = {
  __typename?: 'MyBids';
  active?: Maybe<Array<Maybe<MyBid>>>;
  closed?: Maybe<Array<Maybe<MyBid>>>;
};

export type MyCollectionArtistInput = {
  displayName?: InputMaybe<Scalars['String']['input']>;
};

export type MyCollectionArtworkMutationDeleteSuccess = {
  __typename?: 'MyCollectionArtworkMutationDeleteSuccess';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type MyCollectionArtworkMutationFailure = {
  __typename?: 'MyCollectionArtworkMutationFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type MyCollectionArtworkMutationSuccess = {
  __typename?: 'MyCollectionArtworkMutationSuccess';
  artwork?: Maybe<Artwork>;
  artworkEdge?: Maybe<MyCollectionEdge>;
};

export type MyCollectionArtworkMutationType = MyCollectionArtworkMutationDeleteSuccess | MyCollectionArtworkMutationFailure | MyCollectionArtworkMutationSuccess;

export enum MyCollectionArtworkSorts {
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  PositionAsc = 'POSITION_ASC',
  PositionDesc = 'POSITION_DESC'
}

export type MyCollectionConnection = {
  __typename?: 'MyCollectionConnection';
  artistInsights: Array<ArtistInsight>;
  artistInsightsCount?: Maybe<ArtistInsightsCount>;
  artistsCount: Scalars['Int']['output'];
  artworksCount: Scalars['Int']['output'];
  /** @deprecated Please use `me.userInterestsConnection` instead */
  collectedArtistsConnection?: Maybe<ArtistConnection>;
  default: Scalars['Boolean']['output'];
  description: Scalars['String']['output'];
  edges?: Maybe<Array<Maybe<MyCollectionEdge>>>;
  includesPurchasedArtworks: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  pageCursors: PageCursors;
  pageInfo: PageInfo;
  private: Scalars['Boolean']['output'];
  totalCount?: Maybe<Scalars['Int']['output']>;
};


export type MyCollectionConnectionArtistInsightsArgs = {
  kind?: InputMaybe<ArtistInsightKind>;
};


export type MyCollectionConnectionCollectedArtistsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includePersonalArtists?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<ArtistSorts>;
};

export type MyCollectionCreateArtworkInput = {
  additionalInformation?: InputMaybe<Scalars['String']['input']>;
  artistIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  artists?: InputMaybe<Array<InputMaybe<MyCollectionArtistInput>>>;
  artworkLocation?: InputMaybe<Scalars['String']['input']>;
  attributionClass?: InputMaybe<ArtworkAttributionClassType>;
  category?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  coaByAuthenticatingBody?: InputMaybe<Scalars['Boolean']['input']>;
  coaByGallery?: InputMaybe<Scalars['Boolean']['input']>;
  collectorLocation?: InputMaybe<EditableLocation>;
  condition?: InputMaybe<ArtworkConditionEnumType>;
  conditionDescription?: InputMaybe<Scalars['String']['input']>;
  confidentialNotes?: InputMaybe<Scalars['String']['input']>;
  costCurrencyCode?: InputMaybe<Scalars['String']['input']>;
  costMajor?: InputMaybe<Scalars['Int']['input']>;
  costMinor?: InputMaybe<Scalars['Int']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  depth?: InputMaybe<Scalars['String']['input']>;
  editionNumber?: InputMaybe<Scalars['String']['input']>;
  editionSize?: InputMaybe<Scalars['String']['input']>;
  externalImageUrls?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  framedDepth?: InputMaybe<Scalars['String']['input']>;
  framedHeight?: InputMaybe<Scalars['String']['input']>;
  framedMetric?: InputMaybe<Scalars['String']['input']>;
  framedWidth?: InputMaybe<Scalars['String']['input']>;
  hasCertificateOfAuthenticity?: InputMaybe<Scalars['Boolean']['input']>;
  height?: InputMaybe<Scalars['String']['input']>;
  importSource?: InputMaybe<ArtworkImportSource>;
  isEdition?: InputMaybe<Scalars['Boolean']['input']>;
  isFramed?: InputMaybe<Scalars['Boolean']['input']>;
  medium?: InputMaybe<Scalars['String']['input']>;
  metric?: InputMaybe<Scalars['String']['input']>;
  pricePaidCents?: InputMaybe<Scalars['Long']['input']>;
  pricePaidCurrency?: InputMaybe<Scalars['String']['input']>;
  provenance?: InputMaybe<Scalars['String']['input']>;
  signatureDetails?: InputMaybe<Scalars['String']['input']>;
  signatureTypes?: InputMaybe<Array<InputMaybe<ArtworkSignatureTypeEnum>>>;
  submissionId?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  width?: InputMaybe<Scalars['String']['input']>;
};

export type MyCollectionCreateArtworkPayload = {
  __typename?: 'MyCollectionCreateArtworkPayload';
  artworkOrError?: Maybe<MyCollectionArtworkMutationType>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type MyCollectionDeleteArtworkInput = {
  artworkId: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type MyCollectionDeleteArtworkPayload = {
  __typename?: 'MyCollectionDeleteArtworkPayload';
  artworkOrError?: Maybe<MyCollectionArtworkMutationType>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type MyCollectionEdge = {
  __typename?: 'MyCollectionEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Artwork>;
};

export type MyCollectionInfo = {
  __typename?: 'MyCollectionInfo';
  artistInsights: Array<ArtistInsight>;
  artistInsightsCount?: Maybe<ArtistInsightsCount>;
  artistsCount: Scalars['Int']['output'];
  artworksCount: Scalars['Int']['output'];
  /** @deprecated Please use `me.userInterestsConnection` instead */
  collectedArtistsConnection?: Maybe<ArtistConnection>;
  default: Scalars['Boolean']['output'];
  description: Scalars['String']['output'];
  includesPurchasedArtworks: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  private: Scalars['Boolean']['output'];
};


export type MyCollectionInfoArtistInsightsArgs = {
  kind?: InputMaybe<ArtistInsightKind>;
};


export type MyCollectionInfoCollectedArtistsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includePersonalArtists?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<ArtistSorts>;
};

export type MyCollectionUpdateArtworkInput = {
  additionalInformation?: InputMaybe<Scalars['String']['input']>;
  artistIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  artworkId: Scalars['String']['input'];
  artworkLocation?: InputMaybe<Scalars['String']['input']>;
  attributionClass?: InputMaybe<ArtworkAttributionClassType>;
  category?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  coaByAuthenticatingBody?: InputMaybe<Scalars['Boolean']['input']>;
  coaByGallery?: InputMaybe<Scalars['Boolean']['input']>;
  collectorLocation?: InputMaybe<EditableLocation>;
  condition?: InputMaybe<ArtworkConditionEnumType>;
  conditionDescription?: InputMaybe<Scalars['String']['input']>;
  confidentialNotes?: InputMaybe<Scalars['String']['input']>;
  costCurrencyCode?: InputMaybe<Scalars['String']['input']>;
  costMajor?: InputMaybe<Scalars['Int']['input']>;
  costMinor?: InputMaybe<Scalars['Int']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  depth?: InputMaybe<Scalars['String']['input']>;
  editionNumber?: InputMaybe<Scalars['String']['input']>;
  editionSize?: InputMaybe<Scalars['String']['input']>;
  externalImageUrls?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  framedDepth?: InputMaybe<Scalars['String']['input']>;
  framedHeight?: InputMaybe<Scalars['String']['input']>;
  framedMetric?: InputMaybe<Scalars['String']['input']>;
  framedWidth?: InputMaybe<Scalars['String']['input']>;
  hasCertificateOfAuthenticity?: InputMaybe<Scalars['Boolean']['input']>;
  height?: InputMaybe<Scalars['String']['input']>;
  isEdition?: InputMaybe<Scalars['Boolean']['input']>;
  isFramed?: InputMaybe<Scalars['Boolean']['input']>;
  medium?: InputMaybe<Scalars['String']['input']>;
  metric?: InputMaybe<Scalars['String']['input']>;
  pricePaidCents?: InputMaybe<Scalars['Long']['input']>;
  pricePaidCurrency?: InputMaybe<Scalars['String']['input']>;
  provenance?: InputMaybe<Scalars['String']['input']>;
  signatureDetails?: InputMaybe<Scalars['String']['input']>;
  signatureTypes?: InputMaybe<Array<InputMaybe<ArtworkSignatureTypeEnum>>>;
  submissionId?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['String']['input']>;
};

export type MyCollectionUpdateArtworkPayload = {
  __typename?: 'MyCollectionUpdateArtworkPayload';
  artworkOrError?: Maybe<MyCollectionArtworkMutationType>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type MyLocation = {
  __typename?: 'MyLocation';
  address?: Maybe<Scalars['String']['output']>;
  address2?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  coordinates: LatLng;
  country?: Maybe<Scalars['String']['output']>;
  countryCode?: Maybe<Scalars['String']['output']>;
  display?: Maybe<Scalars['String']['output']>;
  displayCountry?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  postalCode?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
  timezone?: Maybe<Scalars['String']['output']>;
};

export type NavigationPill = {
  __typename?: 'NavigationPill';
  href: Scalars['String']['output'];
  icon?: Maybe<Scalars['String']['output']>;
  ownerType: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type Near = {
  lat: Scalars['Float']['input'];
  lng: Scalars['Float']['input'];
  maxDistance?: InputMaybe<Scalars['Float']['input']>;
};

export type Node = {
  id: Scalars['ID']['output'];
};

export type Notification = Node & {
  __typename?: 'Notification';
  artworksConnection?: Maybe<ArtworkConnection>;
  /** @deprecated Please use `publishedAt` instead */
  createdAt?: Maybe<Scalars['String']['output']>;
  headline: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  isUnread: Scalars['Boolean']['output'];
  item?: Maybe<NotificationItem>;
  message: Scalars['String']['output'];
  notificationType: NotificationTypesEnum;
  objectsCount: Scalars['Int']['output'];
  previewImages: Array<Image>;
  publishedAt: Scalars['String']['output'];
  targetHref: Scalars['String']['output'];
  title: Scalars['String']['output'];
};


export type NotificationArtworksConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type NotificationCreatedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type NotificationPreviewImagesArgs = {
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type NotificationPublishedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
};

export type NotificationConnection = {
  __typename?: 'NotificationConnection';
  counts?: Maybe<NotificationCounts>;
  edges?: Maybe<Array<Maybe<NotificationEdge>>>;
  pageCursors: PageCursors;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type NotificationCounts = {
  __typename?: 'NotificationCounts';
  total?: Maybe<Scalars['FormattedNumber']['output']>;
  unread?: Maybe<Scalars['FormattedNumber']['output']>;
  unseen?: Maybe<Scalars['FormattedNumber']['output']>;
};


export type NotificationCountsTotalArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
};


export type NotificationCountsUnreadArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
};


export type NotificationCountsUnseenArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
};

export type NotificationEdge = {
  __typename?: 'NotificationEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Notification>;
};

export type NotificationItem = AlertNotificationItem | ArticleFeaturedArtistNotificationItem | ArtworkPublishedNotificationItem | CollectorProfileUpdatePromptNotificationItem | PartnerOfferCreatedNotificationItem | ShowOpenedNotificationItem | ViewingRoomPublishedNotificationItem;

export type NotificationPreference = {
  __typename?: 'NotificationPreference';
  channel: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  status: SubGroupStatus;
};

export type NotificationPreferenceInput = {
  channel?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  status: SubGroupInputStatus;
};

export enum NotificationTypesEnum {
  ArticleFeaturedArtist = 'ARTICLE_FEATURED_ARTIST',
  ArtworkAlert = 'ARTWORK_ALERT',
  ArtworkPublished = 'ARTWORK_PUBLISHED',
  CollectorProfileUpdatePrompt = 'COLLECTOR_PROFILE_UPDATE_PROMPT',
  PartnerOfferCreated = 'PARTNER_OFFER_CREATED',
  PartnerShowOpened = 'PARTNER_SHOW_OPENED',
  ViewingRoomPublished = 'VIEWING_ROOM_PUBLISHED'
}

export type OfferResponse = {
  __typename?: 'OfferResponse';
  comments?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  intendedState: IntendedState;
  offer: ConsignmentOffer;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  rejectionReason?: Maybe<Scalars['String']['output']>;
};

export type OfferableActivity = {
  __typename?: 'OfferableActivity';
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type OpeningHoursArray = {
  __typename?: 'OpeningHoursArray';
  schedules?: Maybe<Array<Maybe<FormattedDaySchedules>>>;
};

export type OpeningHoursText = {
  __typename?: 'OpeningHoursText';
  text?: Maybe<Scalars['String']['output']>;
};

export type OpeningHoursUnion = OpeningHoursArray | OpeningHoursText;

export type Order = {
  __typename?: 'Order';
  availablePaymentMethods: Array<OrderPaymentMethodEnum>;
  availableShippingCountries: Array<Scalars['String']['output']>;
  /** @deprecated Use `order.fulfillmentDetails.phoneNumber` */
  buyerPhoneNumber?: Maybe<Scalars['String']['output']>;
  buyerState?: Maybe<OrderBuyerStateEnum>;
  buyerStateExpiresAt?: Maybe<Scalars['String']['output']>;
  buyerTotal?: Maybe<Money>;
  code: Scalars['String']['output'];
  creditCardWalletType?: Maybe<OrderCreditCardWalletTypeEnum>;
  currencyCode: Scalars['String']['output'];
  deliveryInfo?: Maybe<DeliveryInfo>;
  displayTexts: DisplayTexts;
  fulfillmentDetails?: Maybe<FulfillmentDetails>;
  fulfillmentOptions: Array<FulfillmentOption>;
  id: Scalars['ID']['output'];
  impulseConversationId?: Maybe<Scalars['String']['output']>;
  internalID: Scalars['ID']['output'];
  itemsTotal?: Maybe<Money>;
  lineItems: Array<Maybe<LineItem>>;
  mode: OrderModeEnum;
  paymentMethod?: Maybe<OrderPaymentMethodEnum>;
  paymentMethodDetails?: Maybe<PaymentMethodUnion>;
  pricingBreakdownLines: Array<Maybe<PricingBreakdownLineUnion>>;
  selectedFulfillmentOption?: Maybe<FulfillmentOption>;
  seller?: Maybe<SellerType>;
  shippingOrigin?: Maybe<Scalars['String']['output']>;
  shippingTotal?: Maybe<Money>;
  source: OrderSourceEnum;
  stripeConfirmationToken?: Maybe<Scalars['String']['output']>;
  taxTotal?: Maybe<Money>;
  totalListPrice?: Maybe<Money>;
};

export type OrderActionData = {
  __typename?: 'OrderActionData';
  clientSecret: Scalars['String']['output'];
};

export enum OrderBuyerStateEnum {
  Approved = 'APPROVED',
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  DeclinedByBuyer = 'DECLINED_BY_BUYER',
  DeclinedBySeller = 'DECLINED_BY_SELLER',
  Incomplete = 'INCOMPLETE',
  PaymentFailed = 'PAYMENT_FAILED',
  ProcessingOfflinePayment = 'PROCESSING_OFFLINE_PAYMENT',
  ProcessingPayment = 'PROCESSING_PAYMENT',
  Refunded = 'REFUNDED',
  Shipped = 'SHIPPED',
  Submitted = 'SUBMITTED',
  Unknown = 'UNKNOWN'
}

export enum OrderCreditCardWalletTypeEnum {
  ApplePay = 'APPLE_PAY',
  GooglePay = 'GOOGLE_PAY'
}

export enum OrderModeEnum {
  Buy = 'BUY',
  Offer = 'OFFER'
}

export type OrderMutationActionRequired = {
  __typename?: 'OrderMutationActionRequired';
  actionData: OrderActionData;
};

export type OrderMutationError = {
  __typename?: 'OrderMutationError';
  mutationError: ExchangeError;
};

export type OrderMutationResponse = OrderMutationActionRequired | OrderMutationError | OrderMutationSuccess;

export type OrderMutationSuccess = {
  __typename?: 'OrderMutationSuccess';
  order: Order;
};

export type OrderParty = Partner | User;

export enum OrderPaymentMethodEnum {
  CreditCard = 'CREDIT_CARD',
  SepaDebit = 'SEPA_DEBIT',
  UsBankAccount = 'US_BANK_ACCOUNT',
  WireTransfer = 'WIRE_TRANSFER'
}

export enum OrderSourceEnum {
  ArtworkPage = 'ARTWORK_PAGE',
  Inquiry = 'INQUIRY',
  PartnerOffer = 'PARTNER_OFFER',
  PrivateSale = 'PRIVATE_SALE'
}

export type OrderedSet = {
  __typename?: 'OrderedSet';
  cached?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  internalName?: Maybe<Scalars['String']['output']>;
  itemType?: Maybe<Scalars['String']['output']>;
  items?: Maybe<Array<Maybe<OrderedSetItem>>>;
  /** @deprecated Utilize `orderedItemsConnection` for union type */
  itemsConnection?: Maybe<ArtworkConnection>;
  key?: Maybe<Scalars['String']['output']>;
  layout: OrderedSetLayouts;
  name?: Maybe<Scalars['String']['output']>;
  orderedItemsConnection: OrderedSetItemConnection;
  ownerType?: Maybe<Scalars['String']['output']>;
  published: Scalars['Boolean']['output'];
};


export type OrderedSetCreatedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type OrderedSetDescriptionArgs = {
  format?: InputMaybe<Format>;
};


export type OrderedSetItemsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type OrderedSetOrderedItemsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type OrderedSetConnection = {
  __typename?: 'OrderedSetConnection';
  edges?: Maybe<Array<Maybe<OrderedSetEdge>>>;
  pageCursors: PageCursors;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type OrderedSetEdge = {
  __typename?: 'OrderedSetEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<OrderedSet>;
};

export type OrderedSetItem = Artist | Artwork | FeaturedLink | Gene | Profile | Sale | Show;

export type OrderedSetItemConnection = {
  __typename?: 'OrderedSetItemConnection';
  edges?: Maybe<Array<Maybe<OrderedSetItemEdge>>>;
  pageCursors: PageCursors;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type OrderedSetItemEdge = {
  __typename?: 'OrderedSetItemEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<OrderedSetItem>;
};

export enum OrderedSetLayouts {
  Default = 'DEFAULT',
  Full = 'FULL'
}

export enum OrderedSetSorts {
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  InternalNameAsc = 'INTERNAL_NAME_ASC',
  InternalNameDesc = 'INTERNAL_NAME_DESC',
  ItemTypeAsc = 'ITEM_TYPE_ASC',
  ItemTypeDesc = 'ITEM_TYPE_DESC',
  KeyAsc = 'KEY_ASC',
  KeyDesc = 'KEY_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  OwnerIdAsc = 'OWNER_ID_ASC',
  OwnerIdDesc = 'OWNER_ID_DESC',
  OwnerTypeAsc = 'OWNER_TYPE_ASC',
  OwnerTypeDesc = 'OWNER_TYPE_DESC'
}

export type Page = {
  __typename?: 'Page';
  content?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  published: Scalars['Boolean']['output'];
};


export type PageContentArgs = {
  format?: InputMaybe<Format>;
};

export type PageConnection = {
  __typename?: 'PageConnection';
  edges?: Maybe<Array<Maybe<PageEdge>>>;
  pageCursors: PageCursors;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type PageCursor = {
  __typename?: 'PageCursor';
  cursor: Scalars['String']['output'];
  isCurrent: Scalars['Boolean']['output'];
  page: Scalars['Int']['output'];
};

export type PageCursors = {
  __typename?: 'PageCursors';
  around: Array<PageCursor>;
  first?: Maybe<PageCursor>;
  last?: Maybe<PageCursor>;
  previous?: Maybe<PageCursor>;
};

export type PageEdge = {
  __typename?: 'PageEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Page>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type PartialArtwork = {
  __typename?: 'PartialArtwork';
  context?: Maybe<ArtworkContext>;
  contextGrids?: Maybe<Array<Maybe<ArtworkContextGrid>>>;
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  layer?: Maybe<ArtworkLayer>;
  slug: Scalars['ID']['output'];
};


export type PartialArtworkContextGridsArgs = {
  includeRelatedArtworks?: Scalars['Boolean']['input'];
};


export type PartialArtworkLayerArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type Partner = Node & {
  __typename?: 'Partner';
  alertsConnection?: Maybe<PartnerAlertsConnection>;
  allArtistsConnection?: Maybe<ArtistPartnerConnection>;
  analytics?: Maybe<AnalyticsPartnerStats>;
  articlesConnection?: Maybe<ArticleConnection>;
  artistsConnection?: Maybe<ArtistPartnerConnection>;
  artistsSearchConnection?: Maybe<ArtistConnection>;
  artistsWithAlertCountsConnection?: Maybe<ArtistsWithAlertCountsConnection>;
  artworkImportsConnection?: Maybe<ArtworkImportConnection>;
  artworksConnection?: Maybe<ArtworkConnection>;
  artworksSearchConnection?: Maybe<ArtworkConnection>;
  cached?: Maybe<Scalars['Int']['output']>;
  categories?: Maybe<Array<Maybe<PartnerCategory>>>;
  cities?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  claimed?: Maybe<Scalars['Boolean']['output']>;
  collectingInstitution?: Maybe<Scalars['String']['output']>;
  contact?: Maybe<Contact>;
  contactsConnection?: Maybe<ContactConnection>;
  counts?: Maybe<PartnerCounts>;
  defaultProfileID?: Maybe<Scalars['String']['output']>;
  displayArtistsSection?: Maybe<Scalars['Boolean']['output']>;
  displayFullPartnerPage?: Maybe<Scalars['Boolean']['output']>;
  displayWorksSection?: Maybe<Scalars['Boolean']['output']>;
  distinguishRepresentedArtists?: Maybe<Scalars['Boolean']['output']>;
  documentsConnection?: Maybe<PartnerDocumentConnection>;
  featuredKeywords: Array<Scalars['String']['output']>;
  featuredShow?: Maybe<Show>;
  filterArtworksConnection?: Maybe<FilterArtworksConnection>;
  /** @deprecated Prefer displayFullPartnerPage */
  fullProfileEligible?: Maybe<Scalars['Boolean']['output']>;
  hasFairPartnership?: Maybe<Scalars['Boolean']['output']>;
  hasVisibleFollowsCount: Scalars['Boolean']['output'];
  href?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  initials?: Maybe<Scalars['String']['output']>;
  inquiryRequest?: Maybe<PartnerInquiryRequest>;
  internalID: Scalars['ID']['output'];
  isDefaultProfilePublic?: Maybe<Scalars['Boolean']['output']>;
  isInquireable: Scalars['Boolean']['output'];
  isLinkable?: Maybe<Scalars['Boolean']['output']>;
  isPreQualify?: Maybe<Scalars['Boolean']['output']>;
  isVerifiedSeller?: Maybe<Scalars['Boolean']['output']>;
  location?: Maybe<Location>;
  /** @deprecated Prefer to use `locationsConnection`. [Will be removed in v2] */
  locations?: Maybe<Array<Maybe<Location>>>;
  locationsConnection?: Maybe<LocationConnection>;
  merchantAccount?: Maybe<PartnerMerchantAccount>;
  meta?: Maybe<PartnerMeta>;
  name?: Maybe<Scalars['String']['output']>;
  partnerAlertHitsConnection?: Maybe<PartnerAlertHitsConnection>;
  partnerPageEligible?: Maybe<Scalars['Boolean']['output']>;
  partnerType?: Maybe<Scalars['String']['output']>;
  profile?: Maybe<Profile>;
  profileArtistsLayout?: Maybe<Scalars['String']['output']>;
  profileBannerDisplay?: Maybe<Scalars['String']['output']>;
  showPromoted?: Maybe<Scalars['Boolean']['output']>;
  showsConnection?: Maybe<ShowConnection>;
  showsSearchConnection?: Maybe<ShowConnection>;
  slug: Scalars['ID']['output'];
  type?: Maybe<Scalars['String']['output']>;
  vatInformation?: Maybe<Scalars['String']['output']>;
  vatNumber?: Maybe<Scalars['String']['output']>;
  vatStatus?: Maybe<Scalars['String']['output']>;
  viewingRoomsConnection?: Maybe<ViewingRoomsConnection>;
  website?: Maybe<Scalars['String']['output']>;
};


export type PartnerAlertsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  artistID?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type PartnerAllArtistsConnectionArgs = {
  displayOnPartnerProfile?: InputMaybe<Scalars['Boolean']['input']>;
  hasNotRepresentedArtistWithPublishedArtworks?: InputMaybe<Scalars['Boolean']['input']>;
  hasPublishedArtworks?: InputMaybe<Scalars['Boolean']['input']>;
  includeAllFields?: InputMaybe<Scalars['Boolean']['input']>;
  representedBy?: InputMaybe<Scalars['Boolean']['input']>;
};


export type PartnerArticlesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  inEditorialFeed?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<ArticleSorts>;
};


export type PartnerArtistsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  artistIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  displayOnPartnerProfile?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  hasPublishedArtworks?: InputMaybe<Scalars['Boolean']['input']>;
  includeAllFields?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  representedBy?: InputMaybe<Scalars['Boolean']['input']>;
  representedByOrHasPublishedArtworks?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<ArtistSorts>;
};


export type PartnerArtistsSearchConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  query: Scalars['String']['input'];
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type PartnerArtistsWithAlertCountsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<ArtistAlertsSort>;
};


export type PartnerArtworkImportsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type PartnerArtworksConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  artistID?: InputMaybe<Scalars['String']['input']>;
  artworkIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  exclude?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forSale?: InputMaybe<Scalars['Boolean']['input']>;
  includeUnpublished?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  missingPriorityMetadata?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  partnerOfferable?: InputMaybe<Scalars['Boolean']['input']>;
  publishedWithin?: InputMaybe<Scalars['Int']['input']>;
  shallow?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<ArtworkSorts>;
  visibilityLevels?: InputMaybe<Array<InputMaybe<Visibility>>>;
};


export type PartnerArtworksSearchConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  query: Scalars['String']['input'];
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type PartnerCitiesArgs = {
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type PartnerContactArgs = {
  contactId: Scalars['String']['input'];
};


export type PartnerContactsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  contactType?: InputMaybe<ContactType>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type PartnerDocumentsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  artistID?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  documentIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  showID?: InputMaybe<Scalars['String']['input']>;
};


export type PartnerFilterArtworksConnectionArgs = {
  acquireable?: InputMaybe<Scalars['Boolean']['input']>;
  additionalGeneIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  after?: InputMaybe<Scalars['String']['input']>;
  aggregationPartnerCities?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  aggregations?: InputMaybe<Array<InputMaybe<ArtworkAggregation>>>;
  artistID?: InputMaybe<Scalars['String']['input']>;
  artistIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  artistNationalities?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  artistSeriesID?: InputMaybe<Scalars['String']['input']>;
  artistSeriesIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  artworkIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  atAuction?: InputMaybe<Scalars['Boolean']['input']>;
  attributionClass?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  availability?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  color?: InputMaybe<Scalars['String']['input']>;
  colors?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dimensionRange?: InputMaybe<Scalars['String']['input']>;
  disableNotForSaleSorting?: InputMaybe<Scalars['Boolean']['input']>;
  excludeArtworkIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  extraAggregationGeneIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forSale?: InputMaybe<Scalars['Boolean']['input']>;
  framed?: InputMaybe<Scalars['Boolean']['input']>;
  geneID?: InputMaybe<Scalars['String']['input']>;
  geneIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  height?: InputMaybe<Scalars['String']['input']>;
  importSources?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  includeAllJSON?: InputMaybe<Scalars['Boolean']['input']>;
  includeArtworksByFollowedArtists?: InputMaybe<Scalars['Boolean']['input']>;
  includeMediumFilterInAggregation?: InputMaybe<Scalars['Boolean']['input']>;
  includeUnpublished?: InputMaybe<Scalars['Boolean']['input']>;
  input?: InputMaybe<FilterArtworksInput>;
  inquireableOnly?: InputMaybe<Scalars['Boolean']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  keywordMatchExact?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locationCities?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  majorPeriods?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  marketable?: InputMaybe<Scalars['Boolean']['input']>;
  marketingCollectionID?: InputMaybe<Scalars['String']['input']>;
  materialsTerms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  medium?: InputMaybe<Scalars['String']['input']>;
  offerable?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  partnerCities?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  partnerID?: InputMaybe<Scalars['ID']['input']>;
  partnerIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  period?: InputMaybe<Scalars['String']['input']>;
  periods?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  priceRange?: InputMaybe<Scalars['String']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  saleID?: InputMaybe<Scalars['ID']['input']>;
  showID?: InputMaybe<Scalars['String']['input']>;
  signed?: InputMaybe<Scalars['Boolean']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sizes?: InputMaybe<Array<InputMaybe<ArtworkSizes>>>;
  sold?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  tagID?: InputMaybe<Scalars['String']['input']>;
  visibilityLevel?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['String']['input']>;
};


export type PartnerInitialsArgs = {
  length?: InputMaybe<Scalars['Int']['input']>;
};


export type PartnerInquiryRequestArgs = {
  inquiryId: Scalars['String']['input'];
};


export type PartnerLocationArgs = {
  locationId: Scalars['String']['input'];
};


export type PartnerLocationsArgs = {
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type PartnerLocationsConnectionArgs = {
  addressType?: InputMaybe<AddressType>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  private?: InputMaybe<Scalars['Boolean']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type PartnerPartnerAlertHitsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type PartnerShowsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  artistID?: InputMaybe<Scalars['String']['input']>;
  atAFair?: InputMaybe<Scalars['Boolean']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  dayThreshold?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isDisplayable?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<ShowSorts>;
  status?: InputMaybe<EventStatus>;
};


export type PartnerShowsSearchConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  query: Scalars['String']['input'];
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type PartnerViewingRoomsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  statuses?: InputMaybe<Array<ViewingRoomStatusEnum>>;
};

export type PartnerAgreement = {
  __typename?: 'PartnerAgreement';
  acceptedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  acceptedBy?: Maybe<Scalars['String']['output']>;
  agreement: Agreement;
  id: Scalars['ID']['output'];
};

export type PartnerAgreementOrErrorsUnion = Errors | PartnerAgreement;

export type PartnerAlertHitsConnection = {
  __typename?: 'PartnerAlertHitsConnection';
  edges?: Maybe<Array<Maybe<PartnerAlertHitsEdge>>>;
  pageCursors: PageCursors;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type PartnerAlertHitsEdge = {
  __typename?: 'PartnerAlertHitsEdge';
  artwork?: Maybe<Artwork>;
  createdAt?: Maybe<Scalars['String']['output']>;
  cursor: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  node?: Maybe<Alert>;
  partnerSearchCriteriaID?: Maybe<Scalars['String']['output']>;
  userIDs?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type PartnerAlertHitsEdgeCreatedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type PartnerAlertsConnection = {
  __typename?: 'PartnerAlertsConnection';
  edges?: Maybe<Array<Maybe<PartnerAlertsEdge>>>;
  pageCursors: PageCursors;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type PartnerAlertsEdge = {
  __typename?: 'PartnerAlertsEdge';
  artistID?: Maybe<Scalars['String']['output']>;
  collectorProfilesConnection?: Maybe<PartnerCollectorProfilesConnection>;
  cursor: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  matchedAt?: Maybe<Scalars['String']['output']>;
  node?: Maybe<Alert>;
  partnerID?: Maybe<Scalars['String']['output']>;
  score?: Maybe<Scalars['String']['output']>;
  searchCriteriaID?: Maybe<Scalars['String']['output']>;
  userIDs?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type PartnerAlertsEdgeCollectorProfilesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};

export type PartnerArtist = {
  __typename?: 'PartnerArtist';
  artist?: Maybe<Artist>;
  artworksConnection?: Maybe<ArtworkConnection>;
  biography?: Maybe<Scalars['String']['output']>;
  biographyBlurb?: Maybe<PartnerArtistBlurb>;
  counts?: Maybe<PartnerArtistCounts>;
  documentsConnection?: Maybe<PartnerDocumentConnection>;
  filterArtworksConnection?: Maybe<FilterArtworksConnection>;
  id: Scalars['ID']['output'];
  image?: Maybe<Image>;
  imageUrl?: Maybe<Scalars['String']['output']>;
  internalID: Scalars['ID']['output'];
  isDisplayOnPartnerProfile?: Maybe<Scalars['Boolean']['output']>;
  isHiddenInPresentationMode?: Maybe<Scalars['Boolean']['output']>;
  isUseDefaultBiography?: Maybe<Scalars['Boolean']['output']>;
  partner?: Maybe<Partner>;
  representedBy?: Maybe<Scalars['Boolean']['output']>;
  showsConnection?: Maybe<ShowConnection>;
  sortableID?: Maybe<Scalars['String']['output']>;
};


export type PartnerArtistArtworksConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<PartnerArtistArtworksSort>;
};


export type PartnerArtistBiographyBlurbArgs = {
  format?: InputMaybe<Format>;
};


export type PartnerArtistDocumentsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type PartnerArtistFilterArtworksConnectionArgs = {
  acquireable?: InputMaybe<Scalars['Boolean']['input']>;
  additionalGeneIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  after?: InputMaybe<Scalars['String']['input']>;
  aggregationPartnerCities?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  aggregations?: InputMaybe<Array<InputMaybe<ArtworkAggregation>>>;
  artistID?: InputMaybe<Scalars['String']['input']>;
  artistIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  artistNationalities?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  artistSeriesID?: InputMaybe<Scalars['String']['input']>;
  artistSeriesIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  artworkIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  atAuction?: InputMaybe<Scalars['Boolean']['input']>;
  attributionClass?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  availability?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  color?: InputMaybe<Scalars['String']['input']>;
  colors?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dimensionRange?: InputMaybe<Scalars['String']['input']>;
  disableNotForSaleSorting?: InputMaybe<Scalars['Boolean']['input']>;
  excludeArtworkIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  extraAggregationGeneIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forSale?: InputMaybe<Scalars['Boolean']['input']>;
  framed?: InputMaybe<Scalars['Boolean']['input']>;
  geneID?: InputMaybe<Scalars['String']['input']>;
  geneIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  height?: InputMaybe<Scalars['String']['input']>;
  importSources?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  includeAllJSON?: InputMaybe<Scalars['Boolean']['input']>;
  includeArtworksByFollowedArtists?: InputMaybe<Scalars['Boolean']['input']>;
  includeMediumFilterInAggregation?: InputMaybe<Scalars['Boolean']['input']>;
  includeUnpublished?: InputMaybe<Scalars['Boolean']['input']>;
  input?: InputMaybe<FilterArtworksInput>;
  inquireableOnly?: InputMaybe<Scalars['Boolean']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  keywordMatchExact?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locationCities?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  majorPeriods?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  marketable?: InputMaybe<Scalars['Boolean']['input']>;
  marketingCollectionID?: InputMaybe<Scalars['String']['input']>;
  materialsTerms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  medium?: InputMaybe<Scalars['String']['input']>;
  offerable?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  partnerCities?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  partnerID?: InputMaybe<Scalars['ID']['input']>;
  partnerIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  period?: InputMaybe<Scalars['String']['input']>;
  periods?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  priceRange?: InputMaybe<Scalars['String']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  saleID?: InputMaybe<Scalars['ID']['input']>;
  showID?: InputMaybe<Scalars['String']['input']>;
  signed?: InputMaybe<Scalars['Boolean']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sizes?: InputMaybe<Array<InputMaybe<ArtworkSizes>>>;
  sold?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  tagID?: InputMaybe<Scalars['String']['input']>;
  visibilityLevel?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['String']['input']>;
};


export type PartnerArtistShowsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export enum PartnerArtistArtworksSort {
  PositionAsc = 'POSITION_ASC',
  PositionDesc = 'POSITION_DESC'
}

export type PartnerArtistBlurb = {
  __typename?: 'PartnerArtistBlurb';
  credit?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
};

export type PartnerArtistConnection = {
  __typename?: 'PartnerArtistConnection';
  edges?: Maybe<Array<Maybe<PartnerArtistEdge>>>;
  pageInfo: PageInfo;
};

export type PartnerArtistCounts = {
  __typename?: 'PartnerArtistCounts';
  artworks?: Maybe<Scalars['FormattedNumber']['output']>;
  documents?: Maybe<Scalars['Int']['output']>;
  forSaleArtworks?: Maybe<Scalars['FormattedNumber']['output']>;
  managedArtworks?: Maybe<Scalars['FormattedNumber']['output']>;
  shows?: Maybe<Scalars['Int']['output']>;
  unlistedArtworks?: Maybe<Scalars['FormattedNumber']['output']>;
};


export type PartnerArtistCountsArtworksArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
};


export type PartnerArtistCountsForSaleArtworksArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
};


export type PartnerArtistCountsManagedArtworksArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
};


export type PartnerArtistCountsUnlistedArtworksArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
};

export type PartnerArtistDocumentConnection = {
  __typename?: 'PartnerArtistDocumentConnection';
  edges?: Maybe<Array<Maybe<PartnerArtistDocumentEdge>>>;
  pageCursors: PageCursors;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type PartnerArtistDocumentEdge = {
  __typename?: 'PartnerArtistDocumentEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<PartnerDocument>;
};

export type PartnerArtistEdge = {
  __typename?: 'PartnerArtistEdge';
  artist?: Maybe<Artist>;
  artworksConnection?: Maybe<ArtworkConnection>;
  biography?: Maybe<Scalars['String']['output']>;
  biographyBlurb?: Maybe<PartnerArtistBlurb>;
  counts?: Maybe<PartnerArtistCounts>;
  cursor: Scalars['String']['output'];
  documentsConnection?: Maybe<PartnerDocumentConnection>;
  filterArtworksConnection?: Maybe<FilterArtworksConnection>;
  id: Scalars['ID']['output'];
  image?: Maybe<Image>;
  imageUrl?: Maybe<Scalars['String']['output']>;
  internalID: Scalars['ID']['output'];
  isDisplayOnPartnerProfile?: Maybe<Scalars['Boolean']['output']>;
  isHiddenInPresentationMode?: Maybe<Scalars['Boolean']['output']>;
  isUseDefaultBiography?: Maybe<Scalars['Boolean']['output']>;
  node?: Maybe<Partner>;
  partner?: Maybe<Partner>;
  representedBy?: Maybe<Scalars['Boolean']['output']>;
  showsConnection?: Maybe<ShowConnection>;
  sortableID?: Maybe<Scalars['String']['output']>;
};


export type PartnerArtistEdgeArtworksConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<PartnerArtistArtworksSort>;
};


export type PartnerArtistEdgeBiographyBlurbArgs = {
  format?: InputMaybe<Format>;
};


export type PartnerArtistEdgeDocumentsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type PartnerArtistEdgeFilterArtworksConnectionArgs = {
  acquireable?: InputMaybe<Scalars['Boolean']['input']>;
  additionalGeneIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  after?: InputMaybe<Scalars['String']['input']>;
  aggregationPartnerCities?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  aggregations?: InputMaybe<Array<InputMaybe<ArtworkAggregation>>>;
  artistID?: InputMaybe<Scalars['String']['input']>;
  artistIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  artistNationalities?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  artistSeriesID?: InputMaybe<Scalars['String']['input']>;
  artistSeriesIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  artworkIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  atAuction?: InputMaybe<Scalars['Boolean']['input']>;
  attributionClass?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  availability?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  color?: InputMaybe<Scalars['String']['input']>;
  colors?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dimensionRange?: InputMaybe<Scalars['String']['input']>;
  disableNotForSaleSorting?: InputMaybe<Scalars['Boolean']['input']>;
  excludeArtworkIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  extraAggregationGeneIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forSale?: InputMaybe<Scalars['Boolean']['input']>;
  framed?: InputMaybe<Scalars['Boolean']['input']>;
  geneID?: InputMaybe<Scalars['String']['input']>;
  geneIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  height?: InputMaybe<Scalars['String']['input']>;
  importSources?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  includeAllJSON?: InputMaybe<Scalars['Boolean']['input']>;
  includeArtworksByFollowedArtists?: InputMaybe<Scalars['Boolean']['input']>;
  includeMediumFilterInAggregation?: InputMaybe<Scalars['Boolean']['input']>;
  includeUnpublished?: InputMaybe<Scalars['Boolean']['input']>;
  input?: InputMaybe<FilterArtworksInput>;
  inquireableOnly?: InputMaybe<Scalars['Boolean']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  keywordMatchExact?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locationCities?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  majorPeriods?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  marketable?: InputMaybe<Scalars['Boolean']['input']>;
  marketingCollectionID?: InputMaybe<Scalars['String']['input']>;
  materialsTerms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  medium?: InputMaybe<Scalars['String']['input']>;
  offerable?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  partnerCities?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  partnerID?: InputMaybe<Scalars['ID']['input']>;
  partnerIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  period?: InputMaybe<Scalars['String']['input']>;
  periods?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  priceRange?: InputMaybe<Scalars['String']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  saleID?: InputMaybe<Scalars['ID']['input']>;
  showID?: InputMaybe<Scalars['String']['input']>;
  signed?: InputMaybe<Scalars['Boolean']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sizes?: InputMaybe<Array<InputMaybe<ArtworkSizes>>>;
  sold?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  tagID?: InputMaybe<Scalars['String']['input']>;
  visibilityLevel?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['String']['input']>;
};


export type PartnerArtistEdgeShowsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type PartnerArtworkGrid = ArtworkContextGrid & {
  __typename?: 'PartnerArtworkGrid';
  artworksConnection?: Maybe<ArtworkConnection>;
  ctaHref?: Maybe<Scalars['String']['output']>;
  ctaTitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


export type PartnerArtworkGridArtworksConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type PartnerCategory = {
  __typename?: 'PartnerCategory';
  cached?: Maybe<Scalars['Int']['output']>;
  categoryType?: Maybe<PartnerCategoryType>;
  id: Scalars['ID']['output'];
  internal?: Maybe<Scalars['Boolean']['output']>;
  internalID: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  partners?: Maybe<Array<Maybe<Partner>>>;
  slug: Scalars['ID']['output'];
};


export type PartnerCategoryPartnersArgs = {
  defaultProfilePublic?: InputMaybe<Scalars['Boolean']['input']>;
  eligibleForCarousel?: InputMaybe<Scalars['Boolean']['input']>;
  eligibleForListing?: InputMaybe<Scalars['Boolean']['input']>;
  eligibleForPrimaryBucket?: InputMaybe<Scalars['Boolean']['input']>;
  eligibleForSecondaryBucket?: InputMaybe<Scalars['Boolean']['input']>;
  excludeFollowedPartners?: InputMaybe<Scalars['Boolean']['input']>;
  hasFullProfile?: InputMaybe<Scalars['Boolean']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  includePartnersNearIpBasedLocation?: InputMaybe<Scalars['Boolean']['input']>;
  includePartnersWithFollowedArtists?: InputMaybe<Scalars['Boolean']['input']>;
  maxDistance?: InputMaybe<Scalars['Int']['input']>;
  near?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  partnerCategories?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<PartnersSortType>;
  term?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Array<InputMaybe<PartnerClassification>>>;
};

export enum PartnerCategoryType {
  Gallery = 'GALLERY',
  Institution = 'INSTITUTION'
}

export enum PartnerClassification {
  Auction = 'AUCTION',
  Brand = 'BRAND',
  Demo = 'DEMO',
  Gallery = 'GALLERY',
  Institution = 'INSTITUTION',
  InstitutionalSeller = 'INSTITUTIONAL_SELLER',
  PrivateCollector = 'PRIVATE_COLLECTOR',
  PrivateDealer = 'PRIVATE_DEALER'
}

export type PartnerCollectorProfilesConnection = {
  __typename?: 'PartnerCollectorProfilesConnection';
  edges?: Maybe<Array<Maybe<PartnerCollectorProfilesEdge>>>;
  pageCursors: PageCursors;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type PartnerCollectorProfilesEdge = {
  __typename?: 'PartnerCollectorProfilesEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<CollectorProfileType>;
};

export type PartnerConnection = {
  __typename?: 'PartnerConnection';
  edges?: Maybe<Array<Maybe<PartnerEdge>>>;
  pageCursors: PageCursors;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type PartnerCounts = {
  __typename?: 'PartnerCounts';
  artistDocuments?: Maybe<Scalars['FormattedNumber']['output']>;
  artists?: Maybe<Scalars['FormattedNumber']['output']>;
  artworks?: Maybe<Scalars['FormattedNumber']['output']>;
  currentDisplayableShows?: Maybe<Scalars['FormattedNumber']['output']>;
  displayableShows?: Maybe<Scalars['FormattedNumber']['output']>;
  eligibleArtworks?: Maybe<Scalars['FormattedNumber']['output']>;
  partnerArtists?: Maybe<Scalars['FormattedNumber']['output']>;
  partnerShowDocuments?: Maybe<Scalars['FormattedNumber']['output']>;
  publishedForSaleArtworks?: Maybe<Scalars['FormattedNumber']['output']>;
  publishedNotForSaleArtworks?: Maybe<Scalars['FormattedNumber']['output']>;
  shows?: Maybe<Scalars['FormattedNumber']['output']>;
};


export type PartnerCountsArtistDocumentsArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
};


export type PartnerCountsArtistsArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
};


export type PartnerCountsArtworksArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
};


export type PartnerCountsCurrentDisplayableShowsArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
};


export type PartnerCountsDisplayableShowsArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
};


export type PartnerCountsEligibleArtworksArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
};


export type PartnerCountsPartnerArtistsArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
};


export type PartnerCountsPartnerShowDocumentsArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
};


export type PartnerCountsPublishedForSaleArtworksArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
};


export type PartnerCountsPublishedNotForSaleArtworksArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
};


export type PartnerCountsShowsArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
};

export type PartnerDocument = {
  __typename?: 'PartnerDocument';
  filesize: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  publicURL: Scalars['String']['output'];
  /** @deprecated Prefer `publicURL` */
  publicUrl: Scalars['String']['output'];
  /** @deprecated Prefer `filesize` */
  size: Scalars['Int']['output'];
  slug: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type PartnerDocumentConnection = {
  __typename?: 'PartnerDocumentConnection';
  edges?: Maybe<Array<Maybe<PartnerDocumentEdge>>>;
  pageCursors: PageCursors;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type PartnerDocumentEdge = {
  __typename?: 'PartnerDocumentEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<PartnerDocument>;
};

export type PartnerEdge = {
  __typename?: 'PartnerEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Partner>;
};

export type PartnerEngagement = {
  __typename?: 'PartnerEngagement';
  counts?: Maybe<PartnerEngagementCounts>;
};

export type PartnerEngagementCounts = {
  __typename?: 'PartnerEngagementCounts';
  alerts: Scalars['Int']['output'];
  artworkInquiries: Scalars['Int']['output'];
  followedArtists: Scalars['Int']['output'];
  savedArtworks: Scalars['Int']['output'];
};


export type PartnerEngagementCountsArtworkInquiriesArgs = {
  artistID?: InputMaybe<Scalars['String']['input']>;
};

export type PartnerInquiryRequest = {
  __typename?: 'PartnerInquiryRequest';
  collectorProfile?: Maybe<InquirerCollectorProfile>;
  formattedFirstMessage?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  questions?: Maybe<Array<Maybe<InquiryQuestion>>>;
  shippingLocation?: Maybe<Location>;
};

export type PartnerMerchantAccount = {
  __typename?: 'PartnerMerchantAccount';
  externalId: Scalars['String']['output'];
};

export type PartnerMeta = {
  __typename?: 'PartnerMeta';
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type PartnerOffer = Node & {
  __typename?: 'PartnerOffer';
  artworkId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  discountPercentage?: Maybe<Scalars['Int']['output']>;
  endAt?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  isAvailable?: Maybe<Scalars['Boolean']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  partnerId?: Maybe<Scalars['String']['output']>;
  priceListed?: Maybe<Money>;
  /** @deprecated This field is deprecated. Use 'priceListed' instead. */
  priceListedMessage?: Maybe<Scalars['String']['output']>;
  priceWithDiscount?: Maybe<Money>;
  /** @deprecated This field is deprecated. Use 'priceWithDiscount' instead. */
  priceWithDiscountMessage?: Maybe<Scalars['String']['output']>;
  source?: Maybe<PartnerOfferSourceEnum>;
  userIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type PartnerOfferCreatedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type PartnerOfferEndAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type PartnerOfferConnection = {
  __typename?: 'PartnerOfferConnection';
  edges?: Maybe<Array<Maybe<PartnerOfferEdge>>>;
  pageCursors: PageCursors;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type PartnerOfferCreatedNotificationItem = {
  __typename?: 'PartnerOfferCreatedNotificationItem';
  artworksConnection?: Maybe<ArtworkConnection>;
  available?: Maybe<Scalars['Boolean']['output']>;
  expiresAt?: Maybe<Scalars['String']['output']>;
  partnerOffer?: Maybe<PartnerOffer>;
};


export type PartnerOfferCreatedNotificationItemArtworksConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type PartnerOfferCreatedNotificationItemExpiresAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type PartnerOfferEdge = {
  __typename?: 'PartnerOfferEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<PartnerOffer>;
};

export enum PartnerOfferSorts {
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  EndAtAsc = 'END_AT_ASC',
  EndAtDesc = 'END_AT_DESC'
}

export enum PartnerOfferSourceEnum {
  AbandonedOrder = 'ABANDONED_ORDER',
  Save = 'SAVE'
}

export type PartnerOfferToCollector = Node & {
  __typename?: 'PartnerOfferToCollector';
  artworkId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  endAt?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  isAvailable?: Maybe<Scalars['Boolean']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  partnerId?: Maybe<Scalars['String']['output']>;
  priceWithDiscount?: Maybe<Money>;
  source?: Maybe<PartnerOfferSourceEnum>;
};


export type PartnerOfferToCollectorCreatedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type PartnerOfferToCollectorEndAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type PartnerOfferToCollectorConnection = {
  __typename?: 'PartnerOfferToCollectorConnection';
  edges?: Maybe<Array<Maybe<PartnerOfferToCollectorEdge>>>;
  pageCursors: PageCursors;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type PartnerOfferToCollectorEdge = {
  __typename?: 'PartnerOfferToCollectorEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<PartnerOfferToCollector>;
};

export enum PartnerOfferToCollectorSorts {
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  EndAtAsc = 'END_AT_ASC',
  EndAtDesc = 'END_AT_DESC'
}

export type PartnerShowDocumentConnection = {
  __typename?: 'PartnerShowDocumentConnection';
  edges?: Maybe<Array<Maybe<PartnerShowDocumentEdge>>>;
  pageCursors: PageCursors;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type PartnerShowDocumentEdge = {
  __typename?: 'PartnerShowDocumentEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<PartnerDocument>;
};

export enum PartnerShowPartnerType {
  Gallery = 'GALLERY',
  Museum = 'MUSEUM'
}

export type PartnerTypes = ExternalPartner | Partner;

export enum PartnersAggregation {
  Category = 'CATEGORY',
  Location = 'LOCATION',
  Total = 'TOTAL'
}

export type PartnersAggregationResults = {
  __typename?: 'PartnersAggregationResults';
  counts?: Maybe<Array<Maybe<AggregationCount>>>;
  slice?: Maybe<PartnersAggregation>;
};

export enum PartnersSortType {
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Distance = 'DISTANCE',
  PublishedAtDesc = 'PUBLISHED_AT_DESC',
  RandomScoreDesc = 'RANDOM_SCORE_DESC',
  RelativeSizeAsc = 'RELATIVE_SIZE_ASC',
  RelativeSizeDesc = 'RELATIVE_SIZE_DESC',
  SortableIdAsc = 'SORTABLE_ID_ASC',
  SortableIdDesc = 'SORTABLE_ID_DESC'
}

export type PaymentMethodPreview = Card | SepaDebit | UsBankAccount;

export type PaymentMethodUnion = BankAccount | CreditCard | WireTransfer;

export enum PhoneNumberErrors {
  InvalidCountryCode = 'INVALID_COUNTRY_CODE',
  InvalidNumber = 'INVALID_NUMBER',
  TooLong = 'TOO_LONG',
  TooShort = 'TOO_SHORT'
}

export enum PhoneNumberFormats {
  E164 = 'E164',
  International = 'INTERNATIONAL',
  National = 'NATIONAL',
  Rfc3966 = 'RFC3966'
}

export type PhoneNumberType = {
  __typename?: 'PhoneNumberType';
  countryCode?: Maybe<Scalars['String']['output']>;
  display?: Maybe<Scalars['String']['output']>;
  error?: Maybe<PhoneNumberErrors>;
  isValid?: Maybe<Scalars['Boolean']['output']>;
  originalNumber?: Maybe<Scalars['String']['output']>;
  regionCode?: Maybe<Scalars['String']['output']>;
};


export type PhoneNumberTypeDisplayArgs = {
  format?: InputMaybe<PhoneNumberFormats>;
};

export type PreviewSavedSearch = {
  __typename?: 'PreviewSavedSearch';
  displayName: Scalars['String']['output'];
  href?: Maybe<Scalars['String']['output']>;
  labels: Array<Maybe<SearchCriteriaLabel>>;
  suggestedFilters: Array<SearchCriteriaLabel>;
};


export type PreviewSavedSearchSuggestedFiltersArgs = {
  source?: InputMaybe<AlertSource>;
};

export type PreviewSavedSearchAttributes = {
  acquireable?: InputMaybe<Scalars['Boolean']['input']>;
  additionalGeneIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  artistIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  artistSeriesIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  atAuction?: InputMaybe<Scalars['Boolean']['input']>;
  attributionClass?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  colors?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  height?: InputMaybe<Scalars['String']['input']>;
  inquireableOnly?: InputMaybe<Scalars['Boolean']['input']>;
  locationCities?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  majorPeriods?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  materialsTerms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  offerable?: InputMaybe<Scalars['Boolean']['input']>;
  partnerIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  priceRange?: InputMaybe<Scalars['String']['input']>;
  sizes?: InputMaybe<Array<InputMaybe<ArtworkSizes>>>;
  width?: InputMaybe<Scalars['String']['input']>;
};

export type PriceInsightConnection = {
  __typename?: 'PriceInsightConnection';
  edges?: Maybe<Array<Maybe<PriceInsightEdge>>>;
  nodes?: Maybe<Array<Maybe<MarketPriceInsights>>>;
  pageCursors?: Maybe<PageCursors>;
  pageInfo: AnalyticsPageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type PriceInsightEdge = {
  __typename?: 'PriceInsightEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<MarketPriceInsights>;
};

export enum PriceInsightSort {
  AnnualLotsSoldAsc = 'ANNUAL_LOTS_SOLD_ASC',
  AnnualLotsSoldDesc = 'ANNUAL_LOTS_SOLD_DESC',
  AnnualValueSoldCentsAsc = 'ANNUAL_VALUE_SOLD_CENTS_ASC',
  AnnualValueSoldCentsDesc = 'ANNUAL_VALUE_SOLD_CENTS_DESC',
  ArtistIdAsc = 'ARTIST_ID_ASC',
  ArtistIdDesc = 'ARTIST_ID_DESC',
  ArtistNameAsc = 'ARTIST_NAME_ASC',
  ArtistNameDesc = 'ARTIST_NAME_DESC',
  ArtsyQInventoryAsc = 'ARTSY_Q_INVENTORY_ASC',
  ArtsyQInventoryDesc = 'ARTSY_Q_INVENTORY_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  DemandRankAsc = 'DEMAND_RANK_ASC',
  DemandRankDesc = 'DEMAND_RANK_DESC',
  DemandTrendAsc = 'DEMAND_TREND_ASC',
  DemandTrendDesc = 'DEMAND_TREND_DESC',
  HighRangeCentsAsc = 'HIGH_RANGE_CENTS_ASC',
  HighRangeCentsDesc = 'HIGH_RANGE_CENTS_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  LargeHighRangeCentsAsc = 'LARGE_HIGH_RANGE_CENTS_ASC',
  LargeHighRangeCentsDesc = 'LARGE_HIGH_RANGE_CENTS_DESC',
  LargeLowRangeCentsAsc = 'LARGE_LOW_RANGE_CENTS_ASC',
  LargeLowRangeCentsDesc = 'LARGE_LOW_RANGE_CENTS_DESC',
  LargeMidRangeCentsAsc = 'LARGE_MID_RANGE_CENTS_ASC',
  LargeMidRangeCentsDesc = 'LARGE_MID_RANGE_CENTS_DESC',
  LastAuctionResultDateAsc = 'LAST_AUCTION_RESULT_DATE_ASC',
  LastAuctionResultDateDesc = 'LAST_AUCTION_RESULT_DATE_DESC',
  LiquidityRankAsc = 'LIQUIDITY_RANK_ASC',
  LiquidityRankDesc = 'LIQUIDITY_RANK_DESC',
  LotsSoldLast_12MonthsAsc = 'LOTS_SOLD_LAST_12_MONTHS_ASC',
  LotsSoldLast_12MonthsDesc = 'LOTS_SOLD_LAST_12_MONTHS_DESC',
  LotsSoldLast_24MonthsAsc = 'LOTS_SOLD_LAST_24_MONTHS_ASC',
  LotsSoldLast_24MonthsDesc = 'LOTS_SOLD_LAST_24_MONTHS_DESC',
  LotsSoldLast_36MonthsAsc = 'LOTS_SOLD_LAST_36_MONTHS_ASC',
  LotsSoldLast_36MonthsDesc = 'LOTS_SOLD_LAST_36_MONTHS_DESC',
  LotsSoldLast_48MonthsAsc = 'LOTS_SOLD_LAST_48_MONTHS_ASC',
  LotsSoldLast_48MonthsDesc = 'LOTS_SOLD_LAST_48_MONTHS_DESC',
  LotsSoldLast_60MonthsAsc = 'LOTS_SOLD_LAST_60_MONTHS_ASC',
  LotsSoldLast_60MonthsDesc = 'LOTS_SOLD_LAST_60_MONTHS_DESC',
  LotsSoldLast_72MonthsAsc = 'LOTS_SOLD_LAST_72_MONTHS_ASC',
  LotsSoldLast_72MonthsDesc = 'LOTS_SOLD_LAST_72_MONTHS_DESC',
  LotsSoldLast_84MonthsAsc = 'LOTS_SOLD_LAST_84_MONTHS_ASC',
  LotsSoldLast_84MonthsDesc = 'LOTS_SOLD_LAST_84_MONTHS_DESC',
  LotsSoldLast_96MonthsAsc = 'LOTS_SOLD_LAST_96_MONTHS_ASC',
  LotsSoldLast_96MonthsDesc = 'LOTS_SOLD_LAST_96_MONTHS_DESC',
  LowRangeCentsAsc = 'LOW_RANGE_CENTS_ASC',
  LowRangeCentsDesc = 'LOW_RANGE_CENTS_DESC',
  MedianSalePriceLast_36MonthsAsc = 'MEDIAN_SALE_PRICE_LAST_36_MONTHS_ASC',
  MedianSalePriceLast_36MonthsDesc = 'MEDIAN_SALE_PRICE_LAST_36_MONTHS_DESC',
  MedianSalePriceLast_96MonthsAsc = 'MEDIAN_SALE_PRICE_LAST_96_MONTHS_ASC',
  MedianSalePriceLast_96MonthsDesc = 'MEDIAN_SALE_PRICE_LAST_96_MONTHS_DESC',
  MedianSaleToEstimateRatioAsc = 'MEDIAN_SALE_TO_ESTIMATE_RATIO_ASC',
  MedianSaleToEstimateRatioDesc = 'MEDIAN_SALE_TO_ESTIMATE_RATIO_DESC',
  MediumAsc = 'MEDIUM_ASC',
  MediumDesc = 'MEDIUM_DESC',
  MediumHighRangeCentsAsc = 'MEDIUM_HIGH_RANGE_CENTS_ASC',
  MediumHighRangeCentsDesc = 'MEDIUM_HIGH_RANGE_CENTS_DESC',
  MediumLowRangeCentsAsc = 'MEDIUM_LOW_RANGE_CENTS_ASC',
  MediumLowRangeCentsDesc = 'MEDIUM_LOW_RANGE_CENTS_DESC',
  MediumMidRangeCentsAsc = 'MEDIUM_MID_RANGE_CENTS_ASC',
  MediumMidRangeCentsDesc = 'MEDIUM_MID_RANGE_CENTS_DESC',
  MidRangeCentsAsc = 'MID_RANGE_CENTS_ASC',
  MidRangeCentsDesc = 'MID_RANGE_CENTS_DESC',
  SellThroughRateAsc = 'SELL_THROUGH_RATE_ASC',
  SellThroughRateDesc = 'SELL_THROUGH_RATE_DESC',
  SmallHighRangeCentsAsc = 'SMALL_HIGH_RANGE_CENTS_ASC',
  SmallHighRangeCentsDesc = 'SMALL_HIGH_RANGE_CENTS_DESC',
  SmallLowRangeCentsAsc = 'SMALL_LOW_RANGE_CENTS_ASC',
  SmallLowRangeCentsDesc = 'SMALL_LOW_RANGE_CENTS_DESC',
  SmallMidRangeCentsAsc = 'SMALL_MID_RANGE_CENTS_ASC',
  SmallMidRangeCentsDesc = 'SMALL_MID_RANGE_CENTS_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC'
}

export type PriceRange = {
  __typename?: 'PriceRange';
  display?: Maybe<Scalars['String']['output']>;
  maxPrice?: Maybe<Money>;
  minPrice?: Maybe<Money>;
};

export type PricingBreakdownLineUnion = ShippingLine | SubtotalLine | TaxLine | TotalLine;

export type Profile = {
  __typename?: 'Profile';
  bio?: Maybe<Scalars['String']['output']>;
  cached?: Maybe<Scalars['Int']['output']>;
  counts?: Maybe<ProfileCounts>;
  /** @deprecated Prefer displayArtistsSection in Partner type */
  displayArtistsSection?: Maybe<Scalars['Boolean']['output']>;
  fullBio?: Maybe<Scalars['String']['output']>;
  href?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Image>;
  id: Scalars['ID']['output'];
  image?: Maybe<Image>;
  initials?: Maybe<Scalars['String']['output']>;
  internalID: Scalars['ID']['output'];
  isFollowed?: Maybe<Scalars['Boolean']['output']>;
  isPubliclyVisible?: Maybe<Scalars['Boolean']['output']>;
  isPublished?: Maybe<Scalars['Boolean']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  owner: ProfileOwnerType;
  /** @deprecated Prefer profileArtistsLayout in Partner type */
  profileArtistsLayout?: Maybe<Scalars['String']['output']>;
  slug: Scalars['ID']['output'];
};


export type ProfileInitialsArgs = {
  length?: InputMaybe<Scalars['Int']['input']>;
};

export type ProfileConnection = {
  __typename?: 'ProfileConnection';
  edges?: Maybe<Array<Maybe<ProfileEdge>>>;
  pageCursors: PageCursors;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type ProfileCounts = {
  __typename?: 'ProfileCounts';
  follows?: Maybe<Scalars['FormattedNumber']['output']>;
};


export type ProfileCountsFollowsArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
};

export type ProfileEdge = {
  __typename?: 'ProfileEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Profile>;
};

export type ProfileOwnerType = Fair | FairOrganizer | Partner;

export type PublishViewingRoomInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  viewingRoomID: Scalars['ID']['input'];
};

export type PublishViewingRoomPayload = {
  __typename?: 'PublishViewingRoomPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  viewingRoom: ViewingRoom;
};

export type Purchase = Node & {
  __typename?: 'Purchase';
  artsyCommission?: Maybe<Scalars['Float']['output']>;
  artwork?: Maybe<Artwork>;
  createdAt?: Maybe<Scalars['String']['output']>;
  discoverAdmin?: Maybe<User>;
  email?: Maybe<Scalars['String']['output']>;
  fair?: Maybe<Fair>;
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  note?: Maybe<Scalars['String']['output']>;
  ownerID?: Maybe<Scalars['String']['output']>;
  ownerType?: Maybe<Scalars['String']['output']>;
  sale?: Maybe<Sale>;
  saleAdmin?: Maybe<User>;
  saleDate?: Maybe<Scalars['String']['output']>;
  salePrice?: Maybe<Scalars['Float']['output']>;
  source?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};


export type PurchaseCreatedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type PurchaseSaleDateArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type PurchasesConnection = {
  __typename?: 'PurchasesConnection';
  edges?: Maybe<Array<Maybe<PurchasesEdge>>>;
  pageCursors: PageCursors;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type PurchasesEdge = {
  __typename?: 'PurchasesEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Purchase>;
};

export type Query = {
  __typename?: 'Query';
  _do_not_use_conversation?: Maybe<Conversation>;
  _do_not_use_image?: Maybe<Image>;
  _unused_auctionsLot?: Maybe<AuctionsLotState>;
  _unused_auctionsLotStandingConnection: AuctionsLotStandingConnection;
  _unused_gravity_matchPartners?: Maybe<Array<DoNotUseThisPartner>>;
  /** @deprecated Use matchPartners */
  _unused_gravity_match_partners?: Maybe<Array<DoNotUseThisPartner>>;
  _unused_gravity_partner?: Maybe<DoNotUseThisPartner>;
  _unused_gravity_partners?: Maybe<Array<DoNotUseThisPartner>>;
  _unused_gravity_userAddressConnection?: Maybe<UserAddressConnection>;
  admin?: Maybe<Admin>;
  agreement?: Maybe<Agreement>;
  analyticsArtistSparklines?: Maybe<AnalyticsArtistSparklineConnection>;
  analyticsArtworkRecommendations?: Maybe<AnalyticsArtworkRecommendationConnection>;
  analyticsCalendarYearMarketPriceInsights?: Maybe<Array<CalendarYearMarketPriceInsights>>;
  analyticsCalendarYearPriceInsights?: Maybe<Array<CalendarYearPriceInsights>>;
  analyticsLastUpdatedAt?: Maybe<Scalars['AnalyticsDateTime']['output']>;
  analyticsPartnerStats?: Maybe<AnalyticsPartnerStats>;
  analyticsUserStats?: Maybe<AnalyticsUserStats>;
  article?: Maybe<Article>;
  articles: Array<Article>;
  articlesConnection?: Maybe<ArticleConnection>;
  artist?: Maybe<Artist>;
  artistSeries?: Maybe<ArtistSeries>;
  artistSeriesConnection?: Maybe<ArtistSeriesConnection>;
  artists?: Maybe<Array<Maybe<Artist>>>;
  artistsConnection?: Maybe<ArtistConnection>;
  artwork?: Maybe<Artwork>;
  artworkAttributionClasses?: Maybe<Array<Maybe<AttributionClass>>>;
  artworkImport?: Maybe<ArtworkImport>;
  artworkMediums?: Maybe<Array<Maybe<ArtworkMedium>>>;
  artworkResult?: Maybe<ArtworkResult>;
  /** @deprecated This is only for use in resolving stitched queries, not for first-class client use! */
  artworks?: Maybe<ArtworkConnection>;
  artworksConnection?: Maybe<FilterArtworksConnection>;
  artworksForUser?: Maybe<ArtworkConnection>;
  auctionResult?: Maybe<AuctionResult>;
  auctionResultsByArtistsConnection?: Maybe<AuctionResultsByArtistsConnection>;
  authenticationStatus: AuthenticationStatus;
  author?: Maybe<Author>;
  bankAccount?: Maybe<BankAccount>;
  channel: Channel;
  cities: Array<City>;
  city?: Maybe<City>;
  collection?: Maybe<Collection>;
  collectorProfile?: Maybe<CollectorProfileType>;
  collectorProfilesConnection?: Maybe<CollectorProfileTypeConnection>;
  commerceAbandonedOrders?: Maybe<CommerceOrderConnectionWithTotalCount>;
  commerceBankAccountBalance?: Maybe<CommerceBankAccountBalance>;
  commerceBuyerActivity?: Maybe<CommerceBuyerActivity>;
  commerceCompetingOrders?: Maybe<CommerceOrderConnectionWithTotalCount>;
  commerceLineItems?: Maybe<CommerceLineItemConnection>;
  commerceMyOrders?: Maybe<CommerceOrderConnectionWithTotalCount>;
  commerceOrder?: Maybe<CommerceOrder>;
  commerceOrders?: Maybe<CommerceOrderConnectionWithTotalCount>;
  consignments?: Maybe<ConsignmentConnection>;
  conversation?: Maybe<Conversation>;
  conversationsConnection?: Maybe<ConversationConnection>;
  creditCard?: Maybe<CreditCard>;
  curatedMarketingCollections?: Maybe<Array<Maybe<MarketingCollection>>>;
  curatedTrendingArtists?: Maybe<ArtistConnection>;
  departments: Array<Department>;
  discoverArtworks?: Maybe<ArtworkConnection>;
  discoveryCategoriesConnection?: Maybe<DiscoveryCategoriesConnectionConnection>;
  discoveryMarketingCollections?: Maybe<Array<MarketingCollection>>;
  external: External;
  fair?: Maybe<Fair>;
  fairOrganizer?: Maybe<FairOrganizer>;
  fairs?: Maybe<Array<Maybe<Fair>>>;
  fairsConnection?: Maybe<FairConnection>;
  feature?: Maybe<Feature>;
  featuredFairs?: Maybe<Array<Maybe<Fair>>>;
  featuredLinksConnection?: Maybe<FeaturedLinkConnection>;
  featuresConnection?: Maybe<FeatureConnection>;
  filterPartners?: Maybe<FilterPartners>;
  gene?: Maybe<Gene>;
  geneFamiliesConnection?: Maybe<GeneFamilyConnection>;
  genes?: Maybe<Array<Maybe<Gene>>>;
  heroUnit?: Maybe<HeroUnit>;
  heroUnitsConnection?: Maybe<HeroUnitConnection>;
  highlights?: Maybe<Highlights>;
  homePage?: Maybe<HomePage>;
  homeView: HomeView;
  identityVerification?: Maybe<IdentityVerification>;
  identityVerificationsConnection?: Maybe<IdentityVerificationConnection>;
  invoice?: Maybe<Invoice>;
  job: Job;
  jobs: Array<Job>;
  markdown?: Maybe<MarkdownContent>;
  marketPriceInsights?: Maybe<MarketPriceInsights>;
  marketingCategories: Array<MarketingCollectionCategory>;
  marketingCollection?: Maybe<MarketingCollection>;
  marketingCollections: Array<MarketingCollection>;
  matchArtist?: Maybe<Array<Maybe<Artist>>>;
  matchConnection?: Maybe<MatchConnection>;
  matchPartner?: Maybe<Array<Maybe<Partner>>>;
  me?: Maybe<Me>;
  node?: Maybe<Node>;
  notificationPreferences: Array<NotificationPreference>;
  notificationsConnection?: Maybe<NotificationConnection>;
  offer?: Maybe<ConsignmentOffer>;
  offers?: Maybe<ConsignmentOfferConnection>;
  orderedSet?: Maybe<OrderedSet>;
  orderedSets?: Maybe<Array<Maybe<OrderedSet>>>;
  orderedSetsConnection?: Maybe<OrderedSetConnection>;
  page: Page;
  pagesConnection?: Maybe<PageConnection>;
  partner?: Maybe<Partner>;
  /** @deprecated Prefer `partner.documentsConnection` */
  partnerArtistDocumentsConnection?: Maybe<PartnerArtistDocumentConnection>;
  /** @deprecated This is only for use in resolving stitched queries, not for first-class client use. */
  partnerArtworks?: Maybe<ArtworkConnection>;
  partnerCategories?: Maybe<Array<Maybe<PartnerCategory>>>;
  partnerCategory?: Maybe<PartnerCategory>;
  /** @deprecated Prefer `partner.documentsConnection` */
  partnerShowDocumentsConnection?: Maybe<PartnerShowDocumentConnection>;
  partnersConnection?: Maybe<PartnerConnection>;
  phoneNumber?: Maybe<PhoneNumberType>;
  previewSavedSearch?: Maybe<PreviewSavedSearch>;
  priceInsights?: Maybe<PriceInsightConnection>;
  profile?: Maybe<Profile>;
  profilesConnection?: Maybe<ProfileConnection>;
  purchase?: Maybe<Purchase>;
  purchasesConnection?: Maybe<PurchasesConnection>;
  recentlySoldArtworks?: Maybe<RecentlySoldArtworkTypeConnection>;
  requestLocation?: Maybe<RequestLocation>;
  sale?: Maybe<Sale>;
  saleAgreement: SaleAgreement;
  saleAgreementsConnection?: Maybe<SaleAgreementConnection>;
  saleArtwork?: Maybe<SaleArtwork>;
  saleArtworksConnection?: Maybe<SaleArtworksConnection>;
  salesConnection?: Maybe<SaleConnection>;
  searchConnection?: Maybe<SearchableConnection>;
  seoExperimentArtists?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  shortcut?: Maybe<Shortcut>;
  show?: Maybe<Show>;
  showsConnection?: Maybe<ShowConnection>;
  staticContent?: Maybe<StaticContent>;
  submission?: Maybe<ConsignmentSubmission>;
  submissions?: Maybe<ConsignmentSubmissionConnection>;
  system?: Maybe<System>;
  tag?: Maybe<Tag>;
  targetSupply?: Maybe<TargetSupply>;
  user?: Maybe<User>;
  usersConnection?: Maybe<UserConnection>;
  vanityURLEntity?: Maybe<VanityUrlEntityType>;
  verifyAddress?: Maybe<VerifyAddressPayload>;
  verifyUser?: Maybe<VerifyUser>;
  viewer?: Maybe<Viewer>;
  viewingRoom?: Maybe<ViewingRoom>;
  /** @deprecated Use viewingRoomsConnection */
  viewingRooms?: Maybe<ViewingRoomConnection>;
  viewingRoomsConnection?: Maybe<ViewingRoomsConnection>;
};


export type Query_Do_Not_Use_ConversationArgs = {
  id: Scalars['String']['input'];
};


export type Query_Unused_AuctionsLotArgs = {
  id: Scalars['ID']['input'];
};


export type Query_Unused_AuctionsLotStandingConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['ID']['input'];
};


export type Query_Unused_Gravity_MatchPartnersArgs = {
  matchType?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  term: Scalars['String']['input'];
};


export type Query_Unused_Gravity_Match_PartnersArgs = {
  match_type?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  term: Scalars['String']['input'];
};


export type Query_Unused_Gravity_PartnerArgs = {
  id: Scalars['ID']['input'];
};


export type Query_Unused_Gravity_PartnersArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type Query_Unused_Gravity_UserAddressConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['ID']['input'];
};


export type QueryAgreementArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAnalyticsArtistSparklinesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  artistId: Scalars['String']['input'];
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryAnalyticsArtworkRecommendationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAnalyticsCalendarYearMarketPriceInsightsArgs = {
  artistId: Scalars['ID']['input'];
  endYear?: InputMaybe<Scalars['String']['input']>;
  medium: Scalars['String']['input'];
  startYear?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAnalyticsCalendarYearPriceInsightsArgs = {
  artistId: Scalars['ID']['input'];
  endYear?: InputMaybe<Scalars['String']['input']>;
  startYear?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAnalyticsPartnerStatsArgs = {
  partnerId: Scalars['String']['input'];
};


export type QueryAnalyticsUserStatsArgs = {
  userId: Scalars['String']['input'];
};


export type QueryArticleArgs = {
  id: Scalars['String']['input'];
};


export type QueryArticlesArgs = {
  auctionID?: InputMaybe<Scalars['String']['input']>;
  authorID?: InputMaybe<Scalars['String']['input']>;
  channelID?: InputMaybe<Scalars['String']['input']>;
  featured?: InputMaybe<Scalars['Boolean']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  layout?: InputMaybe<ArticleLayout>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  omit?: InputMaybe<Array<Scalars['String']['input']>>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  showID?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<ArticleSorts>;
};


export type QueryArticlesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  channelId?: InputMaybe<Scalars['String']['input']>;
  featured?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  inEditorialFeed?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  layout?: InputMaybe<ArticleLayout>;
  omit?: InputMaybe<Array<Scalars['String']['input']>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<ArticleSorts>;
};


export type QueryArtistArgs = {
  id: Scalars['String']['input'];
};


export type QueryArtistSeriesArgs = {
  id: Scalars['ID']['input'];
};


export type QueryArtistSeriesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  artistID?: InputMaybe<Scalars['ID']['input']>;
  artworkID?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  excludeIDs?: InputMaybe<Array<Scalars['ID']['input']>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryArtistsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  slugs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sort?: InputMaybe<ArtistSorts>;
};


export type QueryArtistsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  letter?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  slugs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sort?: InputMaybe<ArtistSorts>;
  term?: InputMaybe<Scalars['String']['input']>;
};


export type QueryArtworkArgs = {
  id: Scalars['String']['input'];
};


export type QueryArtworkImportArgs = {
  id: Scalars['String']['input'];
};


export type QueryArtworkResultArgs = {
  id: Scalars['String']['input'];
};


export type QueryArtworksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  respectParamsOrder?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryArtworksConnectionArgs = {
  acquireable?: InputMaybe<Scalars['Boolean']['input']>;
  additionalGeneIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  after?: InputMaybe<Scalars['String']['input']>;
  aggregationPartnerCities?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  aggregations?: InputMaybe<Array<InputMaybe<ArtworkAggregation>>>;
  artistID?: InputMaybe<Scalars['String']['input']>;
  artistIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  artistNationalities?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  artistSeriesID?: InputMaybe<Scalars['String']['input']>;
  artistSeriesIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  artworkIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  atAuction?: InputMaybe<Scalars['Boolean']['input']>;
  attributionClass?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  availability?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  color?: InputMaybe<Scalars['String']['input']>;
  colors?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dimensionRange?: InputMaybe<Scalars['String']['input']>;
  disableNotForSaleSorting?: InputMaybe<Scalars['Boolean']['input']>;
  excludeArtworkIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  extraAggregationGeneIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forSale?: InputMaybe<Scalars['Boolean']['input']>;
  framed?: InputMaybe<Scalars['Boolean']['input']>;
  geneID?: InputMaybe<Scalars['String']['input']>;
  geneIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  height?: InputMaybe<Scalars['String']['input']>;
  importSources?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  includeAllJSON?: InputMaybe<Scalars['Boolean']['input']>;
  includeArtworksByFollowedArtists?: InputMaybe<Scalars['Boolean']['input']>;
  includeMediumFilterInAggregation?: InputMaybe<Scalars['Boolean']['input']>;
  includeUnpublished?: InputMaybe<Scalars['Boolean']['input']>;
  input?: InputMaybe<FilterArtworksInput>;
  inquireableOnly?: InputMaybe<Scalars['Boolean']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  keywordMatchExact?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locationCities?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  majorPeriods?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  marketable?: InputMaybe<Scalars['Boolean']['input']>;
  marketingCollectionID?: InputMaybe<Scalars['String']['input']>;
  materialsTerms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  medium?: InputMaybe<Scalars['String']['input']>;
  offerable?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  partnerCities?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  partnerID?: InputMaybe<Scalars['ID']['input']>;
  partnerIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  period?: InputMaybe<Scalars['String']['input']>;
  periods?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  priceRange?: InputMaybe<Scalars['String']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  saleID?: InputMaybe<Scalars['ID']['input']>;
  showID?: InputMaybe<Scalars['String']['input']>;
  signed?: InputMaybe<Scalars['Boolean']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sizes?: InputMaybe<Array<InputMaybe<ArtworkSizes>>>;
  sold?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  tagID?: InputMaybe<Scalars['String']['input']>;
  visibilityLevel?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['String']['input']>;
};


export type QueryArtworksForUserArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  excludeArtworkIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  excludeDislikedArtworks?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeBackfill: Scalars['Boolean']['input'];
  last?: InputMaybe<Scalars['Int']['input']>;
  marketable?: InputMaybe<Scalars['Boolean']['input']>;
  maxWorksPerArtist?: InputMaybe<Scalars['Int']['input']>;
  onlyAtAuction?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAuctionResultArgs = {
  id: Scalars['String']['input'];
};


export type QueryAuctionResultsByArtistsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  artistIds: Array<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryAuthorArgs = {
  id: Scalars['String']['input'];
};


export type QueryBankAccountArgs = {
  id: Scalars['String']['input'];
};


export type QueryChannelArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCitiesArgs = {
  featured?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCityArgs = {
  near?: InputMaybe<Near>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCollectionArgs = {
  id: Scalars['String']['input'];
  userID: Scalars['String']['input'];
};


export type QueryCollectorProfileArgs = {
  userID?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCollectorProfilesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  partnerID?: InputMaybe<Scalars['ID']['input']>;
  term?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCommerceAbandonedOrdersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  artworkId: Scalars['ID']['input'];
  before?: InputMaybe<Scalars['String']['input']>;
  excludeFailedPayments?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from: Scalars['CommerceDateTime']['input'];
  last?: InputMaybe<Scalars['Int']['input']>;
  sellerId: Scalars['String']['input'];
};


export type QueryCommerceBankAccountBalanceArgs = {
  bankAccountId?: InputMaybe<Scalars['ID']['input']>;
  setupIntentId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCommerceBuyerActivityArgs = {
  buyerId: Scalars['String']['input'];
  sellerId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCommerceCompetingOrdersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderId: Scalars['ID']['input'];
};


export type QueryCommerceLineItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  artworkId?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  editionSetId?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderStates?: InputMaybe<Array<CommerceOrderStateEnum>>;
};


export type QueryCommerceMyOrdersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<Array<CommerceOrderConnectionFilterEnum>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  mode?: InputMaybe<CommerceOrderModeEnum>;
  sellerId?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<CommerceOrderConnectionSortEnum>;
  states?: InputMaybe<Array<CommerceOrderStateEnum>>;
};


export type QueryCommerceOrderArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCommerceOrdersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  buyerId?: InputMaybe<Scalars['String']['input']>;
  buyerType?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  impulseConversationId?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  mode?: InputMaybe<CommerceOrderModeEnum>;
  sellerId?: InputMaybe<Scalars['String']['input']>;
  sellerType?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<CommerceOrderConnectionSortEnum>;
  state?: InputMaybe<CommerceOrderStateEnum>;
  states?: InputMaybe<Array<CommerceOrderStateEnum>>;
};


export type QueryConsignmentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  gravityPartnerId: Scalars['ID']['input'];
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<ConsignmentSort>;
};


export type QueryConversationArgs = {
  id: Scalars['String']['input'];
};


export type QueryConversationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  artistId?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  dismissed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  fromId?: InputMaybe<Scalars['String']['input']>;
  hasMessage?: InputMaybe<Scalars['Boolean']['input']>;
  hasReply?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  partnerId?: InputMaybe<Scalars['String']['input']>;
  toBeReplied?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<ConversationsInputMode>;
};


export type QueryCreditCardArgs = {
  id: Scalars['String']['input'];
};


export type QueryCuratedMarketingCollectionsArgs = {
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCuratedTrendingArtistsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryDiscoverArtworksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  curatedPicksSize?: InputMaybe<Scalars['Int']['input']>;
  excludeArtworkIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  likedArtworkIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  mltFields?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  osWeights?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};


export type QueryDiscoveryCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryDiscoveryMarketingCollectionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFairArgs = {
  id: Scalars['String']['input'];
};


export type QueryFairOrganizerArgs = {
  id: Scalars['String']['input'];
};


export type QueryFairsArgs = {
  fairOrganizerID?: InputMaybe<Scalars['String']['input']>;
  hasFullFeature?: InputMaybe<Scalars['Boolean']['input']>;
  hasHomepageSection?: InputMaybe<Scalars['Boolean']['input']>;
  hasListing?: InputMaybe<Scalars['Boolean']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  near?: InputMaybe<Near>;
  page?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<FairSorts>;
  status?: InputMaybe<EventStatus>;
};


export type QueryFairsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  fairOrganizerID?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  hasFullFeature?: InputMaybe<Scalars['Boolean']['input']>;
  hasHomepageSection?: InputMaybe<Scalars['Boolean']['input']>;
  hasListing?: InputMaybe<Scalars['Boolean']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  near?: InputMaybe<Near>;
  sort?: InputMaybe<FairSorts>;
  status?: InputMaybe<EventStatus>;
  term?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFeatureArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryFeaturedFairsArgs = {
  includeBackfill?: InputMaybe<Scalars['Boolean']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFeaturedLinksConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  term?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFeaturesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<FeatureSorts>;
  term?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFilterPartnersArgs = {
  aggregations: Array<InputMaybe<PartnersAggregation>>;
  defaultProfilePublic?: InputMaybe<Scalars['Boolean']['input']>;
  eligibleForCarousel?: InputMaybe<Scalars['Boolean']['input']>;
  eligibleForListing?: InputMaybe<Scalars['Boolean']['input']>;
  eligibleForPrimaryBucket?: InputMaybe<Scalars['Boolean']['input']>;
  eligibleForSecondaryBucket?: InputMaybe<Scalars['Boolean']['input']>;
  excludeFollowedPartners?: InputMaybe<Scalars['Boolean']['input']>;
  hasFullProfile?: InputMaybe<Scalars['Boolean']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  includePartnersNearIpBasedLocation?: InputMaybe<Scalars['Boolean']['input']>;
  includePartnersWithFollowedArtists?: InputMaybe<Scalars['Boolean']['input']>;
  maxDistance?: InputMaybe<Scalars['Int']['input']>;
  near?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  partnerCategories?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<PartnersSortType>;
  term?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Array<InputMaybe<PartnerClassification>>>;
};


export type QueryGeneArgs = {
  id: Scalars['String']['input'];
};


export type QueryGeneFamiliesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGenesArgs = {
  size?: InputMaybe<Scalars['Int']['input']>;
  slugs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryHeroUnitArgs = {
  id: Scalars['String']['input'];
};


export type QueryHeroUnitsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  private?: InputMaybe<Scalars['Boolean']['input']>;
  term?: InputMaybe<Scalars['String']['input']>;
};


export type QueryIdentityVerificationArgs = {
  id: Scalars['String']['input'];
};


export type QueryIdentityVerificationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryInvoiceArgs = {
  token: Scalars['String']['input'];
};


export type QueryJobArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMarkdownArgs = {
  content: Scalars['String']['input'];
};


export type QueryMarketPriceInsightsArgs = {
  artistId: Scalars['ID']['input'];
  medium: Scalars['String']['input'];
};


export type QueryMarketingCollectionArgs = {
  slug: Scalars['String']['input'];
};


export type QueryMarketingCollectionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  artistID?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  categorySlug?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isFeaturedArtistContent?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  slugs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sort?: InputMaybe<MarketingCollectionsSorts>;
};


export type QueryMatchArtistArgs = {
  excludeIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  term: Scalars['String']['input'];
};


export type QueryMatchConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  entities?: InputMaybe<Array<SearchEntity>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  mode?: InputMaybe<SearchMode>;
  page?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  term: Scalars['String']['input'];
};


export type QueryMatchPartnerArgs = {
  query: Scalars['String']['input'];
};


export type QueryNodeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryNotificationPreferencesArgs = {
  authenticationToken?: InputMaybe<Scalars['String']['input']>;
};


export type QueryNotificationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  notificationTypes?: InputMaybe<Array<InputMaybe<NotificationTypesEnum>>>;
};


export type QueryOfferArgs = {
  gravityPartnerId?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
};


export type QueryOffersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  gravityPartnerId: Scalars['ID']['input'];
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<ConsignmentOfferSort>;
  states?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type QueryOrderedSetArgs = {
  id: Scalars['String']['input'];
};


export type QueryOrderedSetsArgs = {
  key: Scalars['String']['input'];
  public?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryOrderedSetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  term?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPageArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPagesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  term?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPartnerArgs = {
  id: Scalars['String']['input'];
};


export type QueryPartnerArtistDocumentsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  artistID: Scalars['String']['input'];
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  partnerID: Scalars['String']['input'];
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPartnerArtworksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  partnerID: Scalars['String']['input'];
  private?: InputMaybe<Scalars['Boolean']['input']>;
  viewingRoomID?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPartnerCategoriesArgs = {
  categoryType?: InputMaybe<PartnerCategoryType>;
  internal?: InputMaybe<Scalars['Boolean']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPartnerCategoryArgs = {
  id: Scalars['String']['input'];
};


export type QueryPartnerShowDocumentsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  partnerID: Scalars['String']['input'];
  showID: Scalars['String']['input'];
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPartnersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  defaultProfilePublic?: InputMaybe<Scalars['Boolean']['input']>;
  eligibleForListing?: InputMaybe<Scalars['Boolean']['input']>;
  excludeFollowedPartners?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  includePartnersNearIpBasedLocation?: InputMaybe<Scalars['Boolean']['input']>;
  includePartnersWithFollowedArtists?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  maxDistance?: InputMaybe<Scalars['Int']['input']>;
  near?: InputMaybe<Scalars['String']['input']>;
  partnerCategories?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sort?: InputMaybe<PartnersSortType>;
  type?: InputMaybe<Array<InputMaybe<PartnerClassification>>>;
};


export type QueryPhoneNumberArgs = {
  phoneNumber: Scalars['String']['input'];
  regionCode?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPreviewSavedSearchArgs = {
  attributes?: InputMaybe<PreviewSavedSearchAttributes>;
};


export type QueryPriceInsightsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  artistId: Scalars['ID']['input'];
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<PriceInsightSort>;
};


export type QueryProfileArgs = {
  id: Scalars['String']['input'];
};


export type QueryProfilesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  term?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPurchaseArgs = {
  id: Scalars['String']['input'];
};


export type QueryPurchasesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  artistId?: InputMaybe<Scalars['String']['input']>;
  artworkId?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  saleId?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryRecentlySoldArtworksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryRequestLocationArgs = {
  ip?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySaleArgs = {
  id: Scalars['String']['input'];
};


export type QuerySaleAgreementArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySaleAgreementsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<SaleAgreementStatus>;
};


export type QuerySaleArtworkArgs = {
  id: Scalars['String']['input'];
};


export type QuerySaleArtworksConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  aggregations?: InputMaybe<Array<InputMaybe<SaleArtworkAggregation>>>;
  artistIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  biddableSale?: InputMaybe<Scalars['Boolean']['input']>;
  estimateRange?: InputMaybe<Scalars['String']['input']>;
  excludeClosedLots?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  geneIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  includeArtworksByFollowedArtists?: InputMaybe<Scalars['Boolean']['input']>;
  isAuction?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  liveSale?: InputMaybe<Scalars['Boolean']['input']>;
  marketable?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  saleID?: InputMaybe<Scalars['ID']['input']>;
  saleSlug?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySalesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  auctionState?: InputMaybe<AuctionState>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  isAuction?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  live?: InputMaybe<Scalars['Boolean']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  registered?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<SaleSorts>;
  term?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySearchConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  aggregations?: InputMaybe<Array<InputMaybe<SearchAggregation>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  entities?: InputMaybe<Array<InputMaybe<SearchEntity>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  mode?: InputMaybe<SearchMode>;
  page?: InputMaybe<Scalars['Int']['input']>;
  query: Scalars['String']['input'];
};


export type QueryShortcutArgs = {
  id: Scalars['ID']['input'];
};


export type QueryShowArgs = {
  id: Scalars['String']['input'];
  includeAllShows?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryShowsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  atAFair?: InputMaybe<Scalars['Boolean']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  displayable?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  hasLocation?: InputMaybe<Scalars['Boolean']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<ShowSorts>;
  status?: InputMaybe<EventStatus>;
  term?: InputMaybe<Scalars['String']['input']>;
};


export type QueryStaticContentArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySubmissionArgs = {
  externalId?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  sessionID?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySubmissionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  available?: InputMaybe<Scalars['Boolean']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filterByCategory?: InputMaybe<ConsignmentSubmissionCategoryAggregation>;
  first?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<ConsignmentSubmissionSort>;
  userId?: InputMaybe<Array<Scalars['ID']['input']>>;
};


export type QueryTagArgs = {
  id: Scalars['String']['input'];
};


export type QueryUserArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  term?: InputMaybe<Scalars['String']['input']>;
};


export type QueryVanityUrlEntityArgs = {
  id: Scalars['String']['input'];
};


export type QueryVerifyAddressArgs = {
  input: VerifyAddressInput;
};


export type QueryVerifyUserArgs = {
  email: Scalars['String']['input'];
  recaptchaToken: Scalars['String']['input'];
};


export type QueryViewingRoomArgs = {
  id: Scalars['ID']['input'];
};


export type QueryViewingRoomsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  featured?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  partnerID?: InputMaybe<Scalars['ID']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  statuses?: InputMaybe<Array<ViewingRoomStatusEnum>>;
};


export type QueryViewingRoomsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  featured?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  partnerID?: InputMaybe<Scalars['ID']['input']>;
  statuses?: InputMaybe<Array<ViewingRoomStatusEnum>>;
};

export type Quiz = {
  __typename?: 'Quiz';
  completedAt?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  quizArtworkConnection?: Maybe<QuizArtworkConnection>;
  recommendedArtworks: Array<Artwork>;
  savedArtworks: Array<Artwork>;
};


export type QuizCompletedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type QuizQuizArtworkConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};

export type QuizArtworkConnection = {
  __typename?: 'QuizArtworkConnection';
  edges?: Maybe<Array<Maybe<QuizArtworkEdge>>>;
  pageCursors: PageCursors;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type QuizArtworkEdge = {
  __typename?: 'QuizArtworkEdge';
  cursor: Scalars['String']['output'];
  interactedAt?: Maybe<Scalars['String']['output']>;
  node?: Maybe<Artwork>;
  position: Scalars['Int']['output'];
};


export type QuizArtworkEdgeInteractedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type RecenltySoldArtworkPerformance = {
  __typename?: 'RecenltySoldArtworkPerformance';
  mid?: Maybe<Scalars['String']['output']>;
};

export type RecentlySoldArtworkType = {
  __typename?: 'RecentlySoldArtworkType';
  artwork?: Maybe<Artwork>;
  highEstimate?: Maybe<Money>;
  lowEstimate?: Maybe<Money>;
  performance?: Maybe<RecenltySoldArtworkPerformance>;
  priceRealized?: Maybe<Money>;
};

export type RecentlySoldArtworkTypeConnection = {
  __typename?: 'RecentlySoldArtworkTypeConnection';
  edges?: Maybe<Array<Maybe<RecentlySoldArtworkTypeEdge>>>;
  pageInfo: PageInfo;
};

export type RecentlySoldArtworkTypeEdge = {
  __typename?: 'RecentlySoldArtworkTypeEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<RecentlySoldArtworkType>;
};

export type RecordArtworkViewInput = {
  artwork_id: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type RecordArtworkViewPayload = {
  __typename?: 'RecordArtworkViewPayload';
  artworkId: Scalars['String']['output'];
  /** @deprecated Use artworkId */
  artwork_id: Scalars['String']['output'];
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export enum RelatedArtistsKind {
  Contemporary = 'CONTEMPORARY',
  Main = 'MAIN'
}

export type RelatedArtworkGrid = ArtworkContextGrid & {
  __typename?: 'RelatedArtworkGrid';
  artworksConnection?: Maybe<ArtworkConnection>;
  ctaHref?: Maybe<Scalars['String']['output']>;
  ctaTitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


export type RelatedArtworkGridArtworksConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type RemoveArtworkFromPartnerShowFailure = {
  __typename?: 'RemoveArtworkFromPartnerShowFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type RemoveArtworkFromPartnerShowMutationInput = {
  artworkId: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  partnerId: Scalars['String']['input'];
  showId: Scalars['String']['input'];
};

export type RemoveArtworkFromPartnerShowMutationPayload = {
  __typename?: 'RemoveArtworkFromPartnerShowMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  showOrError?: Maybe<RemoveArtworkFromPartnerShowResponseOrError>;
};

export type RemoveArtworkFromPartnerShowResponseOrError = RemoveArtworkFromPartnerShowFailure | RemoveArtworkFromPartnerShowSuccess;

export type RemoveArtworkFromPartnerShowSuccess = {
  __typename?: 'RemoveArtworkFromPartnerShowSuccess';
  show?: Maybe<Show>;
};

export type RemoveArtworkImportImageFailure = {
  __typename?: 'RemoveArtworkImportImageFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type RemoveArtworkImportImageInput = {
  artworkImportID: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  imageID: Scalars['String']['input'];
};

export type RemoveArtworkImportImagePayload = {
  __typename?: 'RemoveArtworkImportImagePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  removeArtworkImportImageOrError?: Maybe<RemoveArtworkImportImageResponseOrError>;
};

export type RemoveArtworkImportImageResponseOrError = RemoveArtworkImportImageFailure | RemoveArtworkImportImageSuccess;

export type RemoveArtworkImportImageSuccess = {
  __typename?: 'RemoveArtworkImportImageSuccess';
  artworkImport?: Maybe<ArtworkImport>;
  success: Scalars['Boolean']['output'];
};

export type RemoveAssetFromConsignmentSubmissionInput = {
  assetID?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  sessionID?: InputMaybe<Scalars['String']['input']>;
};

export type RemoveAssetFromConsignmentSubmissionPayload = {
  __typename?: 'RemoveAssetFromConsignmentSubmissionPayload';
  asset?: Maybe<ConsignmentSubmissionCategoryAsset>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type RemoveInstallShotFromPartnerShowFailure = {
  __typename?: 'RemoveInstallShotFromPartnerShowFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type RemoveInstallShotFromPartnerShowMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  imageId: Scalars['String']['input'];
  showId: Scalars['String']['input'];
};

export type RemoveInstallShotFromPartnerShowMutationPayload = {
  __typename?: 'RemoveInstallShotFromPartnerShowMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  showOrError?: Maybe<RemoveInstallShotFromPartnerShowResponseOrError>;
};

export type RemoveInstallShotFromPartnerShowResponseOrError = RemoveInstallShotFromPartnerShowFailure | RemoveInstallShotFromPartnerShowSuccess;

export type RemoveInstallShotFromPartnerShowSuccess = {
  __typename?: 'RemoveInstallShotFromPartnerShowSuccess';
  show?: Maybe<Show>;
};

export type RepositionArtworksInPartnerShowFailure = {
  __typename?: 'RepositionArtworksInPartnerShowFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type RepositionArtworksInPartnerShowMutationInput = {
  artworkIds: Array<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  partnerId: Scalars['String']['input'];
  showId: Scalars['String']['input'];
};

export type RepositionArtworksInPartnerShowMutationPayload = {
  __typename?: 'RepositionArtworksInPartnerShowMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  showOrError?: Maybe<RepositionArtworksInPartnerShowResponseOrError>;
};

export type RepositionArtworksInPartnerShowResponseOrError = RepositionArtworksInPartnerShowFailure | RepositionArtworksInPartnerShowSuccess;

export type RepositionArtworksInPartnerShowSuccess = {
  __typename?: 'RepositionArtworksInPartnerShowSuccess';
  show?: Maybe<Show>;
};

export type RepositionInstallShotsInPartnerShowFailure = {
  __typename?: 'RepositionInstallShotsInPartnerShowFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type RepositionInstallShotsInPartnerShowMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  imageIds: Array<Scalars['String']['input']>;
  showId: Scalars['String']['input'];
};

export type RepositionInstallShotsInPartnerShowMutationPayload = {
  __typename?: 'RepositionInstallShotsInPartnerShowMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  showOrError?: Maybe<RepositionInstallShotsInPartnerShowResponseOrError>;
};

export type RepositionInstallShotsInPartnerShowResponseOrError = RepositionInstallShotsInPartnerShowFailure | RepositionInstallShotsInPartnerShowSuccess;

export type RepositionInstallShotsInPartnerShowSuccess = {
  __typename?: 'RepositionInstallShotsInPartnerShowSuccess';
  show?: Maybe<Show>;
};

export type RepositionPartnerArtistArtworksFailure = {
  __typename?: 'RepositionPartnerArtistArtworksFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type RepositionPartnerArtistArtworksMutationInput = {
  artistId: Scalars['String']['input'];
  artworkIds: Array<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  partnerId: Scalars['String']['input'];
};

export type RepositionPartnerArtistArtworksMutationPayload = {
  __typename?: 'RepositionPartnerArtistArtworksMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  partnerOrError?: Maybe<RepositionPartnerArtistArtworksResponseOrError>;
};

export type RepositionPartnerArtistArtworksResponseOrError = RepositionPartnerArtistArtworksFailure | RepositionPartnerArtistArtworksSuccess;

export type RepositionPartnerArtistArtworksSuccess = {
  __typename?: 'RepositionPartnerArtistArtworksSuccess';
  partner?: Maybe<Partner>;
};

export type RepositionPartnerLocationsFailure = {
  __typename?: 'RepositionPartnerLocationsFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type RepositionPartnerLocationsMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  locationIds: Array<Scalars['String']['input']>;
  partnerId: Scalars['String']['input'];
};

export type RepositionPartnerLocationsMutationPayload = {
  __typename?: 'RepositionPartnerLocationsMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  partnerOrError?: Maybe<RepositionPartnerLocationsSuccessOrError>;
};

export type RepositionPartnerLocationsSuccess = {
  __typename?: 'RepositionPartnerLocationsSuccess';
  partner?: Maybe<Partner>;
};

export type RepositionPartnerLocationsSuccessOrError = RepositionPartnerLocationsFailure | RepositionPartnerLocationsSuccess;

export type Request = {
  __typename?: 'Request';
  ipAddress: Scalars['String']['output'];
};

export type RequestConditionReportInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  saleArtworkID: Scalars['String']['input'];
};

export type RequestConditionReportPayload = {
  __typename?: 'RequestConditionReportPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  conditionReportRequest: ConditionReportRequest;
};

export type RequestCredentialsForAssetUploadInput = {
  acl: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type RequestCredentialsForAssetUploadPayload = {
  __typename?: 'RequestCredentialsForAssetUploadPayload';
  asset?: Maybe<Credentials>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type RequestError = {
  __typename?: 'RequestError';
  statusCode: Scalars['Int']['output'];
};

export type RequestLocation = {
  __typename?: 'RequestLocation';
  cached?: Maybe<Scalars['Int']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  coordinates?: Maybe<LatLng>;
  country?: Maybe<Scalars['String']['output']>;
  countryCode?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type RequestPriceEstimateInput = {
  artworkId: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  requesterEmail?: InputMaybe<Scalars['String']['input']>;
  requesterName?: InputMaybe<Scalars['String']['input']>;
  requesterPhoneNumber?: InputMaybe<Scalars['String']['input']>;
};

export type RequestPriceEstimateMutationType = RequestPriceEstimatedMutationFailure | RequestPriceEstimatedMutationSuccess;

export type RequestPriceEstimatePayload = {
  __typename?: 'RequestPriceEstimatePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  priceEstimateParamsOrError?: Maybe<RequestPriceEstimateMutationType>;
};

export type RequestPriceEstimatedMutationFailure = {
  __typename?: 'RequestPriceEstimatedMutationFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type RequestPriceEstimatedMutationSuccess = {
  __typename?: 'RequestPriceEstimatedMutationSuccess';
  submittedPriceEstimateParams?: Maybe<SubmittedPriceEstimateParams>;
};

export type ResizedImageUrl = {
  __typename?: 'ResizedImageUrl';
  factor: Scalars['Float']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  src: Scalars['String']['output'];
  srcSet: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type S3LocationInput = {
  bucket: Scalars['String']['input'];
  key: Scalars['String']['input'];
};

export type S3PolicyConditionsType = {
  __typename?: 'S3PolicyConditionsType';
  acl: Scalars['String']['output'];
  bucket: Scalars['String']['output'];
  geminiKey: Scalars['String']['output'];
  successActionStatus: Scalars['String']['output'];
};

export type S3PolicyDocumentType = {
  __typename?: 'S3PolicyDocumentType';
  conditions: S3PolicyConditionsType;
  expiration: Scalars['String']['output'];
};

export type SepaDebit = {
  __typename?: 'SEPADebit';
  last4: Scalars['String']['output'];
};

export type Sale = Node & {
  __typename?: 'Sale';
  artworksConnection?: Maybe<ArtworkConnection>;
  associatedSale?: Maybe<Sale>;
  bidIncrements?: Maybe<Array<Maybe<BidIncrement>>>;
  bidder?: Maybe<Bidder>;
  buyersPremium?: Maybe<Array<Maybe<BuyersPremium>>>;
  cached?: Maybe<Scalars['Int']['output']>;
  cascadingEndTime?: Maybe<SaleCascadingEndTime>;
  cascadingEndTimeIntervalMinutes?: Maybe<Scalars['Int']['output']>;
  collectPayments: Scalars['Boolean']['output'];
  coverImage?: Maybe<Image>;
  currency?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  displayTimelyAt?: Maybe<Scalars['String']['output']>;
  eligibleSaleArtworksCount?: Maybe<Scalars['Int']['output']>;
  endAt?: Maybe<Scalars['String']['output']>;
  endedAt?: Maybe<Scalars['String']['output']>;
  eventEndAt?: Maybe<Scalars['String']['output']>;
  eventStartAt?: Maybe<Scalars['String']['output']>;
  extendedBiddingIntervalMinutes?: Maybe<Scalars['Int']['output']>;
  extendedBiddingPeriodMinutes?: Maybe<Scalars['Int']['output']>;
  featuredKeywords: Array<Scalars['String']['output']>;
  formattedStartDateTime?: Maybe<Scalars['String']['output']>;
  hideTotal?: Maybe<Scalars['Boolean']['output']>;
  href?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  initials?: Maybe<Scalars['String']['output']>;
  internalID: Scalars['ID']['output'];
  isArtsyLicensed: Scalars['Boolean']['output'];
  isAuction?: Maybe<Scalars['Boolean']['output']>;
  isAuctionPromo?: Maybe<Scalars['Boolean']['output']>;
  isBenefit?: Maybe<Scalars['Boolean']['output']>;
  isClosed?: Maybe<Scalars['Boolean']['output']>;
  isGalleryAuction?: Maybe<Scalars['Boolean']['output']>;
  isLiveOpen?: Maybe<Scalars['Boolean']['output']>;
  isLiveOpenHappened?: Maybe<Scalars['Boolean']['output']>;
  isLotConditionsReportEnabled?: Maybe<Scalars['Boolean']['output']>;
  isLotsClosing: Scalars['Boolean']['output'];
  isOpen?: Maybe<Scalars['Boolean']['output']>;
  isPreliminary?: Maybe<Scalars['Boolean']['output']>;
  isPreview?: Maybe<Scalars['Boolean']['output']>;
  isRegistrationClosed?: Maybe<Scalars['Boolean']['output']>;
  isWithBuyersPremium?: Maybe<Scalars['Boolean']['output']>;
  liveStartAt?: Maybe<Scalars['String']['output']>;
  liveURLIfOpen?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  partner?: Maybe<Partner>;
  profile?: Maybe<Profile>;
  promotedSale?: Maybe<Sale>;
  registrationEndsAt?: Maybe<Scalars['String']['output']>;
  registrationStatus?: Maybe<Bidder>;
  requireBidderApproval?: Maybe<Scalars['Boolean']['output']>;
  requireIdentityVerification?: Maybe<Scalars['Boolean']['output']>;
  saleAgreement?: Maybe<SaleAgreement>;
  saleArtwork?: Maybe<SaleArtwork>;
  saleArtworksConnection?: Maybe<SaleArtworkConnection>;
  saleType?: Maybe<Scalars['String']['output']>;
  slug: Scalars['ID']['output'];
  startAt?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  symbol?: Maybe<Scalars['String']['output']>;
  timeZone?: Maybe<Scalars['String']['output']>;
  totalRaised?: Maybe<Money>;
  userNeedsIdentityVerification?: Maybe<Scalars['Boolean']['output']>;
};


export type SaleArtworksConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  cached?: InputMaybe<Scalars['Boolean']['input']>;
  exclude?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<SaleArtworkStatus>;
};


export type SaleDescriptionArgs = {
  format?: InputMaybe<Format>;
};


export type SaleEndAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type SaleEndedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type SaleEventEndAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type SaleEventStartAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type SaleInitialsArgs = {
  length?: InputMaybe<Scalars['Int']['input']>;
};


export type SaleLiveStartAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type SaleRegistrationEndsAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type SaleSaleArtworkArgs = {
  id: Scalars['String']['input'];
};


export type SaleSaleArtworksConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  all?: InputMaybe<Scalars['Boolean']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  internalIDs?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<SaleArtworkStatus>;
};


export type SaleStartAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type SaleAdministrationFields = {
  __typename?: 'SaleAdministrationFields';
  collectorVetting?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  marketingTier?: Maybe<Scalars['String']['output']>;
  marketingTierConfirmed: Scalars['Boolean']['output'];
  partnerTier?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type SaleAgreement = {
  __typename?: 'SaleAgreement';
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  displayEndAt?: Maybe<Scalars['String']['output']>;
  displayStartAt?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  published: Scalars['Boolean']['output'];
  sale?: Maybe<Sale>;
  saleId: Scalars['String']['output'];
  status: SaleAgreementStatus;
  updatedAt?: Maybe<Scalars['String']['output']>;
  userId: Scalars['String']['output'];
};


export type SaleAgreementContentArgs = {
  format?: InputMaybe<Format>;
};


export type SaleAgreementCreatedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type SaleAgreementDisplayEndAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type SaleAgreementDisplayStartAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type SaleAgreementUpdatedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type SaleAgreementConnection = {
  __typename?: 'SaleAgreementConnection';
  edges?: Maybe<Array<Maybe<SaleAgreementEdge>>>;
  pageCursors: PageCursors;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type SaleAgreementEdge = {
  __typename?: 'SaleAgreementEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<SaleAgreement>;
};

export enum SaleAgreementStatus {
  Archived = 'ARCHIVED',
  Current = 'CURRENT',
  Past = 'PAST'
}

export type SaleArtwork = ArtworkEdgeInterface & Node & {
  __typename?: 'SaleArtwork';
  artwork?: Maybe<Artwork>;
  cached?: Maybe<Scalars['Int']['output']>;
  calculatedCost?: Maybe<CalculatedCost>;
  counts?: Maybe<SaleArtworkCounts>;
  currency?: Maybe<Scalars['String']['output']>;
  currentBid?: Maybe<SaleArtworkCurrentBid>;
  cursor?: Maybe<Scalars['String']['output']>;
  endAt?: Maybe<Scalars['String']['output']>;
  endedAt?: Maybe<Scalars['String']['output']>;
  estimate?: Maybe<Scalars['String']['output']>;
  estimateCents?: Maybe<Scalars['Int']['output']>;
  extendedBiddingEndAt?: Maybe<Scalars['String']['output']>;
  formattedEndDateTime?: Maybe<Scalars['String']['output']>;
  formattedStartDateTime?: Maybe<Scalars['String']['output']>;
  highEstimate?: Maybe<SaleArtworkHighEstimate>;
  highestBid?: Maybe<SaleArtworkHighestBid>;
  id: Scalars['ID']['output'];
  increments?: Maybe<Array<Maybe<BidIncrementsFormatted>>>;
  internalID: Scalars['ID']['output'];
  isBidOn?: Maybe<Scalars['Boolean']['output']>;
  isBiddable?: Maybe<Scalars['Boolean']['output']>;
  isHighestBidder?: Maybe<Scalars['Boolean']['output']>;
  isWatching?: Maybe<Scalars['Boolean']['output']>;
  isWithReserve?: Maybe<Scalars['Boolean']['output']>;
  lotID?: Maybe<Scalars['String']['output']>;
  lotLabel?: Maybe<Scalars['String']['output']>;
  lotState?: Maybe<CausalityLotState>;
  lowEstimate?: Maybe<SaleArtworkLowEstimate>;
  minimumNextBid?: Maybe<SaleArtworkMinimumNextBid>;
  node?: Maybe<Artwork>;
  openingBid?: Maybe<SaleArtworkOpeningBid>;
  position?: Maybe<Scalars['Float']['output']>;
  reserve?: Maybe<SaleArtworkReserve>;
  reserveMessage?: Maybe<Scalars['String']['output']>;
  reserveStatus?: Maybe<Scalars['String']['output']>;
  sale?: Maybe<Sale>;
  saleID?: Maybe<Scalars['String']['output']>;
  slug: Scalars['ID']['output'];
  symbol?: Maybe<Scalars['String']['output']>;
};


export type SaleArtworkCalculatedCostArgs = {
  bidAmountMinor: Scalars['Int']['input'];
};


export type SaleArtworkEndAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type SaleArtworkEndedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type SaleArtworkExtendedBiddingEndAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type SaleArtworkIncrementsArgs = {
  useMyMaxBid?: InputMaybe<Scalars['Boolean']['input']>;
};


export type SaleArtworkLotLabelArgs = {
  trim?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum SaleArtworkAggregation {
  Artist = 'ARTIST',
  FollowedArtists = 'FOLLOWED_ARTISTS',
  Medium = 'MEDIUM',
  Total = 'TOTAL'
}

export type SaleArtworkConnection = {
  __typename?: 'SaleArtworkConnection';
  edges?: Maybe<Array<Maybe<SaleArtworkEdge>>>;
  pageInfo: PageInfo;
};

export type SaleArtworkCounts = {
  __typename?: 'SaleArtworkCounts';
  bidderPositions?: Maybe<Scalars['FormattedNumber']['output']>;
};


export type SaleArtworkCountsBidderPositionsArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
};

export type SaleArtworkCurrentBid = {
  __typename?: 'SaleArtworkCurrentBid';
  amount?: Maybe<Scalars['String']['output']>;
  cents?: Maybe<Scalars['Float']['output']>;
  display?: Maybe<Scalars['String']['output']>;
};


export type SaleArtworkCurrentBidAmountArgs = {
  decimal?: InputMaybe<Scalars['String']['input']>;
  disambiguate?: InputMaybe<Scalars['Boolean']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  precision?: InputMaybe<Scalars['Int']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  thousand?: InputMaybe<Scalars['String']['input']>;
};

export type SaleArtworkEdge = {
  __typename?: 'SaleArtworkEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<SaleArtwork>;
};

export type SaleArtworkHighEstimate = {
  __typename?: 'SaleArtworkHighEstimate';
  amount?: Maybe<Scalars['String']['output']>;
  cents?: Maybe<Scalars['Float']['output']>;
  display?: Maybe<Scalars['String']['output']>;
};


export type SaleArtworkHighEstimateAmountArgs = {
  decimal?: InputMaybe<Scalars['String']['input']>;
  disambiguate?: InputMaybe<Scalars['Boolean']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  precision?: InputMaybe<Scalars['Int']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  thousand?: InputMaybe<Scalars['String']['input']>;
};

export type SaleArtworkHighestBid = {
  __typename?: 'SaleArtworkHighestBid';
  amount?: Maybe<Scalars['String']['output']>;
  cents?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  display?: Maybe<Scalars['String']['output']>;
  isCancelled?: Maybe<Scalars['Boolean']['output']>;
};


export type SaleArtworkHighestBidAmountArgs = {
  decimal?: InputMaybe<Scalars['String']['input']>;
  disambiguate?: InputMaybe<Scalars['Boolean']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  precision?: InputMaybe<Scalars['Int']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  thousand?: InputMaybe<Scalars['String']['input']>;
};


export type SaleArtworkHighestBidCreatedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type SaleArtworkLowEstimate = {
  __typename?: 'SaleArtworkLowEstimate';
  amount?: Maybe<Scalars['String']['output']>;
  cents?: Maybe<Scalars['Float']['output']>;
  display?: Maybe<Scalars['String']['output']>;
};


export type SaleArtworkLowEstimateAmountArgs = {
  decimal?: InputMaybe<Scalars['String']['input']>;
  disambiguate?: InputMaybe<Scalars['Boolean']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  precision?: InputMaybe<Scalars['Int']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  thousand?: InputMaybe<Scalars['String']['input']>;
};

export type SaleArtworkMinimumNextBid = {
  __typename?: 'SaleArtworkMinimumNextBid';
  amount?: Maybe<Scalars['String']['output']>;
  cents?: Maybe<Scalars['Float']['output']>;
  display?: Maybe<Scalars['String']['output']>;
};


export type SaleArtworkMinimumNextBidAmountArgs = {
  decimal?: InputMaybe<Scalars['String']['input']>;
  disambiguate?: InputMaybe<Scalars['Boolean']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  precision?: InputMaybe<Scalars['Int']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  thousand?: InputMaybe<Scalars['String']['input']>;
};

export type SaleArtworkOpeningBid = {
  __typename?: 'SaleArtworkOpeningBid';
  amount?: Maybe<Scalars['String']['output']>;
  cents?: Maybe<Scalars['Float']['output']>;
  display?: Maybe<Scalars['String']['output']>;
};


export type SaleArtworkOpeningBidAmountArgs = {
  decimal?: InputMaybe<Scalars['String']['input']>;
  disambiguate?: InputMaybe<Scalars['Boolean']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  precision?: InputMaybe<Scalars['Int']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  thousand?: InputMaybe<Scalars['String']['input']>;
};

export type SaleArtworkReserve = {
  __typename?: 'SaleArtworkReserve';
  amount?: Maybe<Scalars['String']['output']>;
  cents?: Maybe<Scalars['Float']['output']>;
  display?: Maybe<Scalars['String']['output']>;
};


export type SaleArtworkReserveAmountArgs = {
  decimal?: InputMaybe<Scalars['String']['input']>;
  disambiguate?: InputMaybe<Scalars['Boolean']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  precision?: InputMaybe<Scalars['Int']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  thousand?: InputMaybe<Scalars['String']['input']>;
};

export enum SaleArtworkStatus {
  Closed = 'CLOSED',
  Open = 'OPEN'
}

export type SaleArtworksAggregationResults = {
  __typename?: 'SaleArtworksAggregationResults';
  counts?: Maybe<Array<Maybe<AggregationCount>>>;
  slice?: Maybe<SaleArtworkAggregation>;
};

export type SaleArtworksConnection = ArtworkConnectionInterface & {
  __typename?: 'SaleArtworksConnection';
  aggregations?: Maybe<Array<Maybe<SaleArtworksAggregationResults>>>;
  counts?: Maybe<FilterSaleArtworksCounts>;
  edges?: Maybe<Array<Maybe<SaleArtwork>>>;
  pageCursors: PageCursors;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type SaleCascadingEndTime = {
  __typename?: 'SaleCascadingEndTime';
  formattedStartDateTime?: Maybe<Scalars['String']['output']>;
  intervalLabel?: Maybe<Scalars['String']['output']>;
};

export type SaleConnection = {
  __typename?: 'SaleConnection';
  edges?: Maybe<Array<Maybe<SaleEdge>>>;
  pageCursors: PageCursors;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type SaleEdge = {
  __typename?: 'SaleEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Sale>;
};

export type SaleRegistration = {
  __typename?: 'SaleRegistration';
  bidder?: Maybe<Bidder>;
  id: Scalars['ID']['output'];
  isRegistered?: Maybe<Scalars['Boolean']['output']>;
  sale?: Maybe<Sale>;
};

export type SaleRegistrationConnection = {
  __typename?: 'SaleRegistrationConnection';
  edges?: Maybe<Array<Maybe<SaleRegistrationEdge>>>;
  pageInfo: PageInfo;
};

export type SaleRegistrationEdge = {
  __typename?: 'SaleRegistrationEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<SaleRegistration>;
};

export enum SaleSorts {
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  EligibleSaleArtworksCountAsc = 'ELIGIBLE_SALE_ARTWORKS_COUNT_ASC',
  EligibleSaleArtworksCountDesc = 'ELIGIBLE_SALE_ARTWORKS_COUNT_DESC',
  EndAtAsc = 'END_AT_ASC',
  EndAtDesc = 'END_AT_DESC',
  LicensedTimelyAtNameDesc = 'LICENSED_TIMELY_AT_NAME_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  StartAtAsc = 'START_AT_ASC',
  StartAtDesc = 'START_AT_DESC',
  TimelyAtNameAsc = 'TIMELY_AT_NAME_ASC',
  TimelyAtNameDesc = 'TIMELY_AT_NAME_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type SaveArtworkInput = {
  artworkID?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  remove?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SaveArtworkPayload = {
  __typename?: 'SaveArtworkPayload';
  artwork?: Maybe<Artwork>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
  me: Me;
};

export type SavedArtworksConnection = {
  __typename?: 'SavedArtworksConnection';
  default: Scalars['Boolean']['output'];
  description: Scalars['String']['output'];
  edges?: Maybe<Array<Maybe<SavedArtworksEdge>>>;
  name: Scalars['String']['output'];
  pageCursors: PageCursors;
  pageInfo: PageInfo;
  private: Scalars['Boolean']['output'];
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type SavedArtworksEdge = {
  __typename?: 'SavedArtworksEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Artwork>;
};

export enum SearchAggregation {
  Type = 'TYPE'
}

export type SearchAggregationResults = {
  __typename?: 'SearchAggregationResults';
  counts?: Maybe<Array<Maybe<AggregationCount>>>;
  slice?: Maybe<SearchAggregation>;
};

export enum SearchCriteriaFields {
  Acquireable = 'acquireable',
  AdditionalGeneIDs = 'additionalGeneIDs',
  ArtistIDs = 'artistIDs',
  ArtistSeriesIDs = 'artistSeriesIDs',
  AtAuction = 'atAuction',
  AttributionClass = 'attributionClass',
  Colors = 'colors',
  Height = 'height',
  InquireableOnly = 'inquireableOnly',
  LocationCities = 'locationCities',
  MajorPeriods = 'majorPeriods',
  MaterialsTerms = 'materialsTerms',
  Offerable = 'offerable',
  PartnerIDs = 'partnerIDs',
  PriceRange = 'priceRange',
  Sizes = 'sizes',
  Width = 'width'
}

export type SearchCriteriaLabel = {
  __typename?: 'SearchCriteriaLabel';
  displayValue: Scalars['String']['output'];
  field: Scalars['String']['output'];
  name: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export enum SearchEntity {
  Article = 'ARTICLE',
  Artist = 'ARTIST',
  ArtistSeries = 'ARTIST_SERIES',
  Artwork = 'ARTWORK',
  City = 'CITY',
  Collection = 'COLLECTION',
  Fair = 'FAIR',
  Feature = 'FEATURE',
  Gallery = 'GALLERY',
  Gene = 'GENE',
  Institution = 'INSTITUTION',
  Page = 'PAGE',
  Profile = 'PROFILE',
  Sale = 'SALE',
  Show = 'SHOW',
  Tag = 'TAG',
  ViewingRoom = 'VIEWING_ROOM'
}

export enum SearchMode {
  Autosuggest = 'AUTOSUGGEST',
  Site = 'SITE'
}

export type Searchable = {
  displayLabel?: Maybe<Scalars['String']['output']>;
  href?: Maybe<Scalars['String']['output']>;
  imageUrl?: Maybe<Scalars['String']['output']>;
};

export type SearchableConnection = {
  __typename?: 'SearchableConnection';
  aggregations?: Maybe<Array<Maybe<SearchAggregationResults>>>;
  edges?: Maybe<Array<Maybe<SearchableEdge>>>;
  pageCursors: PageCursors;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type SearchableEdge = {
  __typename?: 'SearchableEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Searchable>;
};

export type SearchableItem = Node & Searchable & {
  __typename?: 'SearchableItem';
  description?: Maybe<Scalars['String']['output']>;
  displayLabel?: Maybe<Scalars['String']['output']>;
  displayType?: Maybe<Scalars['String']['output']>;
  href?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  internalID: Scalars['ID']['output'];
  slug: Scalars['ID']['output'];
};

export type SecondFactor = {
  disabledAt?: Maybe<Scalars['String']['output']>;
  enabled: Scalars['Boolean']['output'];
  enabledAt?: Maybe<Scalars['String']['output']>;
  internalID: Scalars['ID']['output'];
  kind: SecondFactorKind;
};


export type SecondFactorDisabledAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type SecondFactorEnabledAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export enum SecondFactorKind {
  App = 'app',
  Backup = 'backup',
  Sms = 'sms'
}

export type SecondFactorOrErrorsUnion = AppSecondFactor | Errors | SmsSecondFactor;

export type Sellable = {
  availability?: Maybe<Scalars['String']['output']>;
  dimensions?: Maybe<Dimensions>;
  displayLabel?: Maybe<Scalars['String']['output']>;
  displayPriceRange?: Maybe<Scalars['Boolean']['output']>;
  editionOf?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internalDisplayPrice?: Maybe<Scalars['String']['output']>;
  internalID: Scalars['ID']['output'];
  isAcquireable?: Maybe<Scalars['Boolean']['output']>;
  isForSale?: Maybe<Scalars['Boolean']['output']>;
  isInAuction?: Maybe<Scalars['Boolean']['output']>;
  isInquireable?: Maybe<Scalars['Boolean']['output']>;
  isOfferable?: Maybe<Scalars['Boolean']['output']>;
  isOfferableFromInquiry?: Maybe<Scalars['Boolean']['output']>;
  isPriceHidden?: Maybe<Scalars['Boolean']['output']>;
  isSold?: Maybe<Scalars['Boolean']['output']>;
  listPrice?: Maybe<ListPrice>;
  listingOptions?: Maybe<ArtworkListingOptions>;
  priceListed?: Maybe<Money>;
  published?: Maybe<Scalars['Boolean']['output']>;
  saleMessage?: Maybe<Scalars['String']['output']>;
};

export type SellerType = Partner;

export type SendConfirmationEmailMutationFailure = {
  __typename?: 'SendConfirmationEmailMutationFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type SendConfirmationEmailMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type SendConfirmationEmailMutationPayload = {
  __typename?: 'SendConfirmationEmailMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  confirmationOrError?: Maybe<SendConfirmationEmailMutationType>;
};

export type SendConfirmationEmailMutationSuccess = {
  __typename?: 'SendConfirmationEmailMutationSuccess';
  confirmationSentAt?: Maybe<Scalars['String']['output']>;
  unconfirmedEmail?: Maybe<Scalars['String']['output']>;
};

export type SendConfirmationEmailMutationType = SendConfirmationEmailMutationFailure | SendConfirmationEmailMutationSuccess;

export type SendConversationMessageMutationInput = {
  attachments?: InputMaybe<Array<ConversationMessageAttachmentInput>>;
  bodyHTML?: InputMaybe<Scalars['String']['input']>;
  bodyText: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  from: Scalars['String']['input'];
  fromId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  replyAll?: InputMaybe<Scalars['Boolean']['input']>;
  replyToMessageID: Scalars['String']['input'];
  to?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SendConversationMessageMutationPayload = {
  __typename?: 'SendConversationMessageMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  conversation?: Maybe<Conversation>;
  messageEdge?: Maybe<MessageEdge>;
};

export type SendFeedbackMutationFailure = {
  __typename?: 'SendFeedbackMutationFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type SendFeedbackMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  message: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type SendFeedbackMutationPayload = {
  __typename?: 'SendFeedbackMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  feedbackOrError?: Maybe<SendFeedbackMutationType>;
};

export type SendFeedbackMutationSuccess = {
  __typename?: 'SendFeedbackMutationSuccess';
  feedback?: Maybe<Feedback>;
};

export type SendFeedbackMutationType = SendFeedbackMutationFailure | SendFeedbackMutationSuccess;

export type SendIdentityVerificationEmailMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  initiatorID?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  orderID?: InputMaybe<Scalars['String']['input']>;
  saleID?: InputMaybe<Scalars['String']['input']>;
  sendEmail?: InputMaybe<Scalars['Boolean']['input']>;
  userID?: InputMaybe<Scalars['String']['input']>;
};

export type SendIdentityVerificationEmailMutationPayload = {
  __typename?: 'SendIdentityVerificationEmailMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  confirmationOrError?: Maybe<IdentityVerificationEmailMutationType>;
};

export type Services = {
  __typename?: 'Services';
  convection: ConvectionService;
  metaphysics: MetaphysicsService;
};

export type ShippingLine = {
  __typename?: 'ShippingLine';
  amount?: Maybe<Money>;
  amountFallbackText?: Maybe<Scalars['String']['output']>;
  displayName: Scalars['String']['output'];
};

export type Shortcut = {
  __typename?: 'Shortcut';
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  long: Scalars['String']['output'];
  short: Scalars['String']['output'];
};

export type Show = EntityWithFilterArtworksConnectionInterface & Node & {
  __typename?: 'Show';
  artists?: Maybe<Array<Maybe<Artist>>>;
  artistsConnection?: Maybe<ArtistConnection>;
  artistsGroupedByName?: Maybe<Array<Maybe<ArtistGroup>>>;
  artistsWithoutArtworks?: Maybe<Array<Maybe<Artist>>>;
  artworksConnection?: Maybe<ArtworkConnection>;
  artworksCount?: Maybe<Scalars['Int']['output']>;
  cached?: Maybe<Scalars['Int']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  counts?: Maybe<ShowCounts>;
  coverImage?: Maybe<Image>;
  createdAt?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  documentsConnection?: Maybe<PartnerDocumentConnection>;
  endAt?: Maybe<Scalars['String']['output']>;
  events?: Maybe<Array<Maybe<ShowEventType>>>;
  eventsConnection?: Maybe<ShowEventConnection>;
  exhibitionPeriod?: Maybe<Scalars['String']['output']>;
  fair?: Maybe<Fair>;
  filterArtworksConnection?: Maybe<FilterArtworksConnection>;
  followedArtistsConnection?: Maybe<ShowFollowArtistConnection>;
  hasLocation?: Maybe<Scalars['Boolean']['output']>;
  href?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  images?: Maybe<Array<Maybe<Image>>>;
  imagesConnection?: Maybe<ImageConnection>;
  internalID: Scalars['ID']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  isDisplayable?: Maybe<Scalars['Boolean']['output']>;
  isDisplayableOnPartnerProfile?: Maybe<Scalars['Boolean']['output']>;
  isFairBooth?: Maybe<Scalars['Boolean']['output']>;
  isFeatured?: Maybe<Scalars['Boolean']['output']>;
  isFollowed?: Maybe<Scalars['Boolean']['output']>;
  isOnlineExclusive: Scalars['Boolean']['output'];
  isReference?: Maybe<Scalars['Boolean']['output']>;
  isStubShow?: Maybe<Scalars['Boolean']['output']>;
  kind?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Location>;
  metaImage?: Maybe<Image>;
  name?: Maybe<Scalars['String']['output']>;
  nearbyShowsConnection?: Maybe<ShowConnection>;
  openingReceptionText?: Maybe<Scalars['String']['output']>;
  partner?: Maybe<PartnerTypes>;
  pressRelease?: Maybe<Scalars['String']['output']>;
  pressReleaseUrl?: Maybe<Scalars['String']['output']>;
  slug: Scalars['ID']['output'];
  startAt?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  statusUpdate?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  viewingRoomIDs: Array<Scalars['String']['output']>;
  viewingRoomsConnection?: Maybe<ViewingRoomsConnection>;
};


export type ShowArtistsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type ShowArtworksConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  exclude?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forSale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ShowCreatedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type ShowDocumentsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type ShowEndAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type ShowEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type ShowExhibitionPeriodArgs = {
  format?: InputMaybe<ExhibitionPeriodFormat>;
};


export type ShowFilterArtworksConnectionArgs = {
  acquireable?: InputMaybe<Scalars['Boolean']['input']>;
  additionalGeneIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  after?: InputMaybe<Scalars['String']['input']>;
  aggregationPartnerCities?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  aggregations?: InputMaybe<Array<InputMaybe<ArtworkAggregation>>>;
  artistID?: InputMaybe<Scalars['String']['input']>;
  artistIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  artistNationalities?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  artistSeriesID?: InputMaybe<Scalars['String']['input']>;
  artistSeriesIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  artworkIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  atAuction?: InputMaybe<Scalars['Boolean']['input']>;
  attributionClass?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  availability?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  color?: InputMaybe<Scalars['String']['input']>;
  colors?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dimensionRange?: InputMaybe<Scalars['String']['input']>;
  disableNotForSaleSorting?: InputMaybe<Scalars['Boolean']['input']>;
  excludeArtworkIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  extraAggregationGeneIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forSale?: InputMaybe<Scalars['Boolean']['input']>;
  framed?: InputMaybe<Scalars['Boolean']['input']>;
  geneID?: InputMaybe<Scalars['String']['input']>;
  geneIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  height?: InputMaybe<Scalars['String']['input']>;
  importSources?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  includeAllJSON?: InputMaybe<Scalars['Boolean']['input']>;
  includeArtworksByFollowedArtists?: InputMaybe<Scalars['Boolean']['input']>;
  includeMediumFilterInAggregation?: InputMaybe<Scalars['Boolean']['input']>;
  includeUnpublished?: InputMaybe<Scalars['Boolean']['input']>;
  input?: InputMaybe<FilterArtworksInput>;
  inquireableOnly?: InputMaybe<Scalars['Boolean']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  keywordMatchExact?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locationCities?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  majorPeriods?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  marketable?: InputMaybe<Scalars['Boolean']['input']>;
  marketingCollectionID?: InputMaybe<Scalars['String']['input']>;
  materialsTerms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  medium?: InputMaybe<Scalars['String']['input']>;
  offerable?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  partnerCities?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  partnerID?: InputMaybe<Scalars['ID']['input']>;
  partnerIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  period?: InputMaybe<Scalars['String']['input']>;
  periods?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  priceRange?: InputMaybe<Scalars['String']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  saleID?: InputMaybe<Scalars['ID']['input']>;
  showID?: InputMaybe<Scalars['String']['input']>;
  signed?: InputMaybe<Scalars['Boolean']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sizes?: InputMaybe<Array<InputMaybe<ArtworkSizes>>>;
  sold?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  tagID?: InputMaybe<Scalars['String']['input']>;
  visibilityLevel?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['String']['input']>;
};


export type ShowFollowedArtistsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type ShowImagesArgs = {
  default?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type ShowImagesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type ShowNearbyShowsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  discoverable?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<ShowSorts>;
  status?: InputMaybe<EventStatus>;
};


export type ShowPressReleaseArgs = {
  format?: InputMaybe<Format>;
};


export type ShowStartAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type ShowStatusUpdateArgs = {
  maxDays?: InputMaybe<Scalars['Int']['input']>;
};


export type ShowViewingRoomsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  statuses?: InputMaybe<Array<ViewingRoomStatusEnum>>;
};

export type ShowArtworkGrid = ArtworkContextGrid & {
  __typename?: 'ShowArtworkGrid';
  artworksConnection?: Maybe<ArtworkConnection>;
  ctaHref?: Maybe<Scalars['String']['output']>;
  ctaTitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


export type ShowArtworkGridArtworksConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type ShowConnection = {
  __typename?: 'ShowConnection';
  edges?: Maybe<Array<Maybe<ShowEdge>>>;
  pageCursors: PageCursors;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type ShowCounts = {
  __typename?: 'ShowCounts';
  artists?: Maybe<Scalars['Int']['output']>;
  artworks?: Maybe<Scalars['Int']['output']>;
  eligibleArtworks?: Maybe<Scalars['FormattedNumber']['output']>;
  publishedArtworks?: Maybe<Scalars['Int']['output']>;
  unpublishedArtworks?: Maybe<Scalars['Int']['output']>;
};


export type ShowCountsArtworksArgs = {
  artistID?: InputMaybe<Scalars['String']['input']>;
};


export type ShowCountsEligibleArtworksArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
};

export type ShowEdge = {
  __typename?: 'ShowEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Show>;
};

export type ShowEventConnection = {
  __typename?: 'ShowEventConnection';
  edges?: Maybe<Array<Maybe<ShowEventEdge>>>;
  pageCursors: PageCursors;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type ShowEventEdge = {
  __typename?: 'ShowEventEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<ShowEventType>;
};

export type ShowEventType = {
  __typename?: 'ShowEventType';
  dateTimeRange?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  endAt?: Maybe<Scalars['String']['output']>;
  eventType?: Maybe<Scalars['String']['output']>;
  exhibitionPeriod?: Maybe<Scalars['String']['output']>;
  formattedTimeZone?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  startAt?: Maybe<Scalars['String']['output']>;
  timeZone?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


export type ShowEventTypeEndAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type ShowEventTypeExhibitionPeriodArgs = {
  format?: InputMaybe<ExhibitionPeriodFormat>;
};


export type ShowEventTypeStartAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type ShowFollowArtist = {
  __typename?: 'ShowFollowArtist';
  artist?: Maybe<Artist>;
};

export type ShowFollowArtistConnection = {
  __typename?: 'ShowFollowArtistConnection';
  edges?: Maybe<Array<Maybe<ShowFollowArtistEdge>>>;
  pageInfo: PageInfo;
};

export type ShowFollowArtistEdge = {
  __typename?: 'ShowFollowArtistEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<ShowFollowArtist>;
};

export type ShowOpenedNotificationItem = {
  __typename?: 'ShowOpenedNotificationItem';
  partner?: Maybe<Partner>;
  showsConnection?: Maybe<ShowConnection>;
};


export type ShowOpenedNotificationItemShowsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export enum ShowSorts {
  CreatedAtDesc = 'CREATED_AT_DESC',
  EndAtAsc = 'END_AT_ASC',
  EndAtDesc = 'END_AT_DESC',
  FeaturedAsc = 'FEATURED_ASC',
  FeaturedDesc = 'FEATURED_DESC',
  FeaturedDescEndAtDesc = 'FEATURED_DESC_END_AT_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  PartnerAsc = 'PARTNER_ASC',
  SortableNameAsc = 'SORTABLE_NAME_ASC',
  SortableNameDesc = 'SORTABLE_NAME_DESC',
  StartAtAsc = 'START_AT_ASC',
  StartAtDesc = 'START_AT_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC'
}

export type SmsSecondFactor = SecondFactor & {
  __typename?: 'SmsSecondFactor';
  countryCode?: Maybe<Scalars['String']['output']>;
  disabledAt?: Maybe<Scalars['String']['output']>;
  enabled: Scalars['Boolean']['output'];
  enabledAt?: Maybe<Scalars['String']['output']>;
  formattedPhoneNumber?: Maybe<Scalars['String']['output']>;
  internalID: Scalars['ID']['output'];
  kind: SecondFactorKind;
  phoneNumber?: Maybe<Scalars['String']['output']>;
};


export type SmsSecondFactorDisabledAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type SmsSecondFactorEnabledAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type SmsSecondFactorAttributes = {
  countryCode?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

export type SmsSecondFactorOrErrorsUnion = Errors | SmsSecondFactor;

export type SpecialistBio = {
  __typename?: 'SpecialistBio';
  bio: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  image: Image;
  jobTitle: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type StartIdentityVerificationFailure = {
  __typename?: 'StartIdentityVerificationFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type StartIdentityVerificationResponseOrError = StartIdentityVerificationFailure | StartIdentityVerificationSuccess;

export type StartIdentityVerificationSuccess = {
  __typename?: 'StartIdentityVerificationSuccess';
  identityVerificationFlowUrl?: Maybe<Scalars['String']['output']>;
  identityVerificationId?: Maybe<Scalars['String']['output']>;
};

export type StaticContent = {
  __typename?: 'StaticContent';
  content?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  slug: Scalars['ID']['output'];
  specialistBios?: Maybe<Array<SpecialistBio>>;
};


export type StaticContentContentArgs = {
  format?: InputMaybe<Format>;
};

export enum SubGroupInputStatus {
  Subscribed = 'SUBSCRIBED',
  Unsubscribed = 'UNSUBSCRIBED'
}

export enum SubGroupStatus {
  Subscribed = 'SUBSCRIBED',
  Unsubscribed = 'UNSUBSCRIBED'
}

export type SubmissionEdge = {
  __typename?: 'SubmissionEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<ConsignmentSubmission>;
};

export type SubmitInquiryRequestMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contactGallery?: InputMaybe<Scalars['Boolean']['input']>;
  inquireableID: Scalars['String']['input'];
  inquireableType: Scalars['String']['input'];
  message?: InputMaybe<Scalars['String']['input']>;
  questions?: InputMaybe<Array<InputMaybe<InquiryQuestionInput>>>;
};

export type SubmitInquiryRequestMutationPayload = {
  __typename?: 'SubmitInquiryRequestMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  inquiryRequest?: Maybe<InquiryRequest>;
};

export type SubmittedPriceEstimateParams = {
  __typename?: 'SubmittedPriceEstimateParams';
  artworkId: Scalars['String']['output'];
  requesterEmail?: Maybe<Scalars['String']['output']>;
  requesterName?: Maybe<Scalars['String']['output']>;
  requesterPhoneNumber?: Maybe<Scalars['String']['output']>;
};

export type SubtotalLine = {
  __typename?: 'SubtotalLine';
  amount?: Maybe<Money>;
  amountFallbackText?: Maybe<Scalars['String']['output']>;
  displayName: Scalars['String']['output'];
};

export type SuggestedAddress = {
  __typename?: 'SuggestedAddress';
  addressLine1: Scalars['String']['output'];
  addressLine2?: Maybe<Scalars['String']['output']>;
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  postalCode: Scalars['String']['output'];
  region?: Maybe<Scalars['String']['output']>;
};

export type SuggestedAddressFields = {
  __typename?: 'SuggestedAddressFields';
  address?: Maybe<SuggestedAddress>;
  lines?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type System = {
  __typename?: 'System';
  /** @deprecated Algolia search is no longer supported */
  algolia?: Maybe<Algolia>;
  causalityJWT?: Maybe<Scalars['String']['output']>;
  request?: Maybe<Request>;
  services?: Maybe<Services>;
  time?: Maybe<SystemTime>;
  userRoles: Array<UserRole>;
};


export type SystemCausalityJwtArgs = {
  role?: InputMaybe<LiveAuctionRole>;
  saleID: Scalars['String']['input'];
};

export type SystemTime = {
  __typename?: 'SystemTime';
  day?: Maybe<Scalars['Int']['output']>;
  hour?: Maybe<Scalars['Int']['output']>;
  iso8601?: Maybe<Scalars['String']['output']>;
  min?: Maybe<Scalars['Int']['output']>;
  month?: Maybe<Scalars['Int']['output']>;
  sec?: Maybe<Scalars['Int']['output']>;
  unix?: Maybe<Scalars['Int']['output']>;
  wday?: Maybe<Scalars['Int']['output']>;
  year?: Maybe<Scalars['Int']['output']>;
};

export type Tag = Node & {
  __typename?: 'Tag';
  cached?: Maybe<Scalars['Int']['output']>;
  count?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  filterArtworksConnection?: Maybe<FilterArtworksConnection>;
  href?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Image>;
  internalID: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  slug: Scalars['ID']['output'];
};


export type TagFilterArtworksConnectionArgs = {
  acquireable?: InputMaybe<Scalars['Boolean']['input']>;
  additionalGeneIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  after?: InputMaybe<Scalars['String']['input']>;
  aggregationPartnerCities?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  aggregations?: InputMaybe<Array<InputMaybe<ArtworkAggregation>>>;
  artistID?: InputMaybe<Scalars['String']['input']>;
  artistIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  artistNationalities?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  artistSeriesID?: InputMaybe<Scalars['String']['input']>;
  artistSeriesIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  artworkIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  atAuction?: InputMaybe<Scalars['Boolean']['input']>;
  attributionClass?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  availability?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  color?: InputMaybe<Scalars['String']['input']>;
  colors?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dimensionRange?: InputMaybe<Scalars['String']['input']>;
  disableNotForSaleSorting?: InputMaybe<Scalars['Boolean']['input']>;
  excludeArtworkIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  extraAggregationGeneIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forSale?: InputMaybe<Scalars['Boolean']['input']>;
  framed?: InputMaybe<Scalars['Boolean']['input']>;
  geneID?: InputMaybe<Scalars['String']['input']>;
  geneIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  height?: InputMaybe<Scalars['String']['input']>;
  importSources?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  includeAllJSON?: InputMaybe<Scalars['Boolean']['input']>;
  includeArtworksByFollowedArtists?: InputMaybe<Scalars['Boolean']['input']>;
  includeMediumFilterInAggregation?: InputMaybe<Scalars['Boolean']['input']>;
  includeUnpublished?: InputMaybe<Scalars['Boolean']['input']>;
  input?: InputMaybe<FilterArtworksInput>;
  inquireableOnly?: InputMaybe<Scalars['Boolean']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  keywordMatchExact?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locationCities?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  majorPeriods?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  marketable?: InputMaybe<Scalars['Boolean']['input']>;
  marketingCollectionID?: InputMaybe<Scalars['String']['input']>;
  materialsTerms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  medium?: InputMaybe<Scalars['String']['input']>;
  offerable?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  partnerCities?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  partnerID?: InputMaybe<Scalars['ID']['input']>;
  partnerIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  period?: InputMaybe<Scalars['String']['input']>;
  periods?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  priceRange?: InputMaybe<Scalars['String']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  saleID?: InputMaybe<Scalars['ID']['input']>;
  showID?: InputMaybe<Scalars['String']['input']>;
  signed?: InputMaybe<Scalars['Boolean']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sizes?: InputMaybe<Array<InputMaybe<ArtworkSizes>>>;
  sold?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  tagID?: InputMaybe<Scalars['String']['input']>;
  visibilityLevel?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['String']['input']>;
};

export type TargetSupply = {
  __typename?: 'TargetSupply';
  microfunnel?: Maybe<Array<Maybe<TargetSupplyMicrofunnelItem>>>;
};

export type TargetSupplyMicrofunnelItem = {
  __typename?: 'TargetSupplyMicrofunnelItem';
  artist?: Maybe<Artist>;
  artworksConnection?: Maybe<ArtworkConnection>;
  metadata?: Maybe<TargetSupplyMicrofunnelMetadata>;
};


export type TargetSupplyMicrofunnelItemArtworksConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  randomize?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TargetSupplyMicrofunnelMetadata = {
  __typename?: 'TargetSupplyMicrofunnelMetadata';
  highestRealized?: Maybe<Scalars['String']['output']>;
  realized?: Maybe<Scalars['String']['output']>;
  recentlySoldArtworkIDs?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  roundedUniqueVisitors?: Maybe<Scalars['String']['output']>;
  roundedViews?: Maybe<Scalars['String']['output']>;
  str?: Maybe<Scalars['String']['output']>;
  uniqueVisitors?: Maybe<Scalars['String']['output']>;
  views?: Maybe<Scalars['String']['output']>;
};

export type Task = Node & {
  __typename?: 'Task';
  actionLink: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['String']['output']>;
  dismissedAt?: Maybe<Scalars['String']['output']>;
  expiresAt?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  imageUrl: Scalars['String']['output'];
  internalID: Scalars['ID']['output'];
  message: Scalars['String']['output'];
  resolvedAt?: Maybe<Scalars['String']['output']>;
  sourceId?: Maybe<Scalars['String']['output']>;
  sourceType?: Maybe<Scalars['String']['output']>;
  taskType: Scalars['String']['output'];
  title: Scalars['String']['output'];
};


export type TaskCreatedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type TaskDismissedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type TaskExpiresAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type TaskResolvedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type TaskConnection = {
  __typename?: 'TaskConnection';
  edges?: Maybe<Array<Maybe<TaskEdge>>>;
  pageCursors: PageCursors;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type TaskEdge = {
  __typename?: 'TaskEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Task>;
};

export type TaxInfo = {
  __typename?: 'TaxInfo';
  displayText: Scalars['String']['output'];
  moreInfo: TaxMoreInfo;
};

export type TaxLine = {
  __typename?: 'TaxLine';
  amount?: Maybe<Money>;
  amountFallbackText?: Maybe<Scalars['String']['output']>;
  displayName: Scalars['String']['output'];
};

export type TaxMoreInfo = {
  __typename?: 'TaxMoreInfo';
  displayText: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type ToggleArtworkImportRowExclusionFailure = {
  __typename?: 'ToggleArtworkImportRowExclusionFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type ToggleArtworkImportRowExclusionInput = {
  artworkImportID: Scalars['String']['input'];
  artworkImportRowID: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  excludedFromImport: Scalars['Boolean']['input'];
};

export type ToggleArtworkImportRowExclusionPayload = {
  __typename?: 'ToggleArtworkImportRowExclusionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  toggleArtworkImportRowExclusionOrError?: Maybe<ToggleArtworkImportRowExclusionResponseOrError>;
};

export type ToggleArtworkImportRowExclusionResponseOrError = ToggleArtworkImportRowExclusionFailure | ToggleArtworkImportRowExclusionSuccess;

export type ToggleArtworkImportRowExclusionSuccess = {
  __typename?: 'ToggleArtworkImportRowExclusionSuccess';
  artworkImport?: Maybe<ArtworkImport>;
};

export type TotalLine = {
  __typename?: 'TotalLine';
  amount?: Maybe<Money>;
  amountFallbackText?: Maybe<Scalars['String']['output']>;
  displayName: Scalars['String']['output'];
};

export type TransferMyCollectionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  emailFrom?: InputMaybe<Scalars['String']['input']>;
  emailTo?: InputMaybe<Scalars['String']['input']>;
  idFrom?: InputMaybe<Scalars['String']['input']>;
  idTo?: InputMaybe<Scalars['String']['input']>;
};

export type TransferMyCollectionPayload = {
  __typename?: 'TransferMyCollectionPayload';
  artworkCountOrError: TransferMyCollectionSuccessOrErrorsUnion;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type TransferMyCollectionSuccess = {
  __typename?: 'TransferMyCollectionSuccess';
  count: Scalars['Int']['output'];
};

export type TransferMyCollectionSuccessOrErrorsUnion = Errors | TransferMyCollectionSuccess;

export type TrendingArtists = {
  __typename?: 'TrendingArtists';
  artists?: Maybe<Array<Maybe<Artist>>>;
};

export enum TriggerCampaignId {
  ArtQuiz = 'ART_QUIZ'
}

export type TriggerCampaignInput = {
  campaignID: TriggerCampaignId;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type TriggerCampaignMutationFailure = {
  __typename?: 'TriggerCampaignMutationFailure';
  message: Scalars['String']['output'];
  mutationError?: Maybe<GravityMutationError>;
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type TriggerCampaignMutationSuccess = {
  __typename?: 'TriggerCampaignMutationSuccess';
  message: Scalars['String']['output'];
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type TriggerCampaignMutationSuccessOrError = TriggerCampaignMutationFailure | TriggerCampaignMutationSuccess;

export type TriggerCampaignPayload = {
  __typename?: 'TriggerCampaignPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  successOrError?: Maybe<TriggerCampaignMutationSuccessOrError>;
};

export type UsBankAccount = {
  __typename?: 'USBankAccount';
  bankName: Scalars['String']['output'];
  last4: Scalars['String']['output'];
};

export type UnderlyingCurrentEvent = Sale | Show;

export type UnlinkAuthenticationMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  provider: AuthenticationProvider;
};

export type UnlinkAuthenticationMutationPayload = {
  __typename?: 'UnlinkAuthenticationMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  me: Me;
};

export type UnpublishViewingRoomInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  viewingRoomID: Scalars['ID']['input'];
};

export type UnpublishViewingRoomPayload = {
  __typename?: 'UnpublishViewingRoomPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  viewingRoom: ViewingRoom;
};

export type UpdateAlertFailure = {
  __typename?: 'UpdateAlertFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type UpdateAlertResponseOrError = UpdateAlertFailure | UpdateAlertSuccess;

export type UpdateAlertSuccess = {
  __typename?: 'UpdateAlertSuccess';
  alert?: Maybe<Alert>;
};

export type UpdateAppSecondFactorInput = {
  attributes: AppSecondFactorAttributes;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  secondFactorID: Scalars['ID']['input'];
};

export type UpdateAppSecondFactorPayload = {
  __typename?: 'UpdateAppSecondFactorPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  secondFactorOrErrors: AppSecondFactorOrErrorsUnion;
};

export type UpdateArtistFailure = {
  __typename?: 'UpdateArtistFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type UpdateArtistMutationInput = {
  alternateNames?: InputMaybe<Array<Scalars['String']['input']>>;
  awards?: InputMaybe<Scalars['String']['input']>;
  biennials?: InputMaybe<Scalars['String']['input']>;
  birthday?: InputMaybe<Scalars['String']['input']>;
  blurb?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  coverArtworkId?: InputMaybe<Scalars['String']['input']>;
  criticallyAcclaimed?: InputMaybe<Scalars['Boolean']['input']>;
  deathday?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  groupIndicator?: InputMaybe<ArtistGroupIndicator>;
  hometown?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  last?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  middle?: InputMaybe<Scalars['String']['input']>;
  nationality?: InputMaybe<Scalars['String']['input']>;
  public?: InputMaybe<Scalars['Boolean']['input']>;
  recentShow?: InputMaybe<Scalars['String']['input']>;
  reviewSources?: InputMaybe<Scalars['String']['input']>;
  targetSupplyPriority?: InputMaybe<ArtistTargetSupplyPriority>;
  targetSupplyType?: InputMaybe<ArtistTargetSupplyType>;
  vanguardYear?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateArtistMutationPayload = {
  __typename?: 'UpdateArtistMutationPayload';
  artistOrError?: Maybe<UpdateArtistResponseOrError>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type UpdateArtistResponseOrError = UpdateArtistFailure | UpdateArtistSuccess;

export type UpdateArtistSuccess = {
  __typename?: 'UpdateArtistSuccess';
  artist?: Maybe<Artist>;
};

export type UpdateArtworkEditionSetInput = {
  artistProofs?: InputMaybe<Scalars['String']['input']>;
  availability?: InputMaybe<Scalars['String']['input']>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  displayPriceRange?: InputMaybe<Scalars['Boolean']['input']>;
  ecommerce?: InputMaybe<Scalars['Boolean']['input']>;
  editionSize?: InputMaybe<Scalars['String']['input']>;
  framed?: InputMaybe<Scalars['Boolean']['input']>;
  framedDepth?: InputMaybe<Scalars['String']['input']>;
  framedDiameter?: InputMaybe<Scalars['String']['input']>;
  framedHeight?: InputMaybe<Scalars['String']['input']>;
  framedMetric?: InputMaybe<Scalars['String']['input']>;
  framedWidth?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  offer?: InputMaybe<Scalars['Boolean']['input']>;
  partnerLocationId?: InputMaybe<Scalars['String']['input']>;
  priceCurrency?: InputMaybe<Scalars['String']['input']>;
  priceHidden?: InputMaybe<Scalars['Boolean']['input']>;
  priceIncludesTax?: InputMaybe<Scalars['Boolean']['input']>;
  priceListed?: InputMaybe<Scalars['String']['input']>;
  priceMax?: InputMaybe<Scalars['Int']['input']>;
  priceMin?: InputMaybe<Scalars['Int']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  shippingWeight?: InputMaybe<Scalars['Float']['input']>;
  shippingWeightMetric?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateArtworkImportCurrencyFailure = {
  __typename?: 'UpdateArtworkImportCurrencyFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type UpdateArtworkImportCurrencyInput = {
  artworkImportID: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  fromCurrency: Scalars['String']['input'];
  toCurrency: Scalars['String']['input'];
};

export type UpdateArtworkImportCurrencyPayload = {
  __typename?: 'UpdateArtworkImportCurrencyPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  updateArtworkImportCurrencyOrError?: Maybe<UpdateArtworkImportCurrencyResponseOrError>;
};

export type UpdateArtworkImportCurrencyResponseOrError = UpdateArtworkImportCurrencyFailure | UpdateArtworkImportCurrencySuccess;

export type UpdateArtworkImportCurrencySuccess = {
  __typename?: 'UpdateArtworkImportCurrencySuccess';
  artworkImport?: Maybe<ArtworkImport>;
};

export type UpdateArtworkImportDimensionMetricFailure = {
  __typename?: 'UpdateArtworkImportDimensionMetricFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type UpdateArtworkImportDimensionMetricInput = {
  artworkImportID: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  fromDimensionMetric: Scalars['String']['input'];
  toDimensionMetric: Scalars['String']['input'];
};

export type UpdateArtworkImportDimensionMetricPayload = {
  __typename?: 'UpdateArtworkImportDimensionMetricPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  updateArtworkImportDimensionMetricOrError?: Maybe<UpdateArtworkImportDimensionMetricResponseOrError>;
};

export type UpdateArtworkImportDimensionMetricResponseOrError = UpdateArtworkImportDimensionMetricFailure | UpdateArtworkImportDimensionMetricSuccess;

export type UpdateArtworkImportDimensionMetricSuccess = {
  __typename?: 'UpdateArtworkImportDimensionMetricSuccess';
  artworkImport?: Maybe<ArtworkImport>;
};

export type UpdateArtworkImportRowFailure = {
  __typename?: 'UpdateArtworkImportRowFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type UpdateArtworkImportRowInput = {
  artworkImportID: Scalars['String']['input'];
  artworkImportRowID: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  fieldName: Scalars['String']['input'];
  fieldValue?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateArtworkImportRowPayload = {
  __typename?: 'UpdateArtworkImportRowPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  updateArtworkImportRowOrError?: Maybe<UpdateArtworkImportRowResponseOrError>;
};

export type UpdateArtworkImportRowResponseOrError = UpdateArtworkImportRowFailure | UpdateArtworkImportRowSuccess;

export type UpdateArtworkImportRowSuccess = {
  __typename?: 'UpdateArtworkImportRowSuccess';
  artworkImport?: Maybe<ArtworkImport>;
  success: Scalars['Boolean']['output'];
};

export type UpdateArtworkImportWeightMetricFailure = {
  __typename?: 'UpdateArtworkImportWeightMetricFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type UpdateArtworkImportWeightMetricInput = {
  artworkImportID: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  fromWeightMetric: Scalars['String']['input'];
  toWeightMetric: Scalars['String']['input'];
};

export type UpdateArtworkImportWeightMetricPayload = {
  __typename?: 'UpdateArtworkImportWeightMetricPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  updateArtworkImportWeightMetricOrError?: Maybe<UpdateArtworkImportWeightMetricResponseOrError>;
};

export type UpdateArtworkImportWeightMetricResponseOrError = UpdateArtworkImportWeightMetricFailure | UpdateArtworkImportWeightMetricSuccess;

export type UpdateArtworkImportWeightMetricSuccess = {
  __typename?: 'UpdateArtworkImportWeightMetricSuccess';
  artworkImport?: Maybe<ArtworkImport>;
};

export type UpdateArtworkMutationInput = {
  artistProofs?: InputMaybe<Scalars['String']['input']>;
  availability?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  displayPriceRange?: InputMaybe<Scalars['Boolean']['input']>;
  ecommerce?: InputMaybe<Scalars['Boolean']['input']>;
  editionSets?: InputMaybe<Array<InputMaybe<UpdateArtworkEditionSetInput>>>;
  editionSize?: InputMaybe<Scalars['String']['input']>;
  framed?: InputMaybe<Scalars['Boolean']['input']>;
  framedDepth?: InputMaybe<Scalars['String']['input']>;
  framedDiameter?: InputMaybe<Scalars['String']['input']>;
  framedHeight?: InputMaybe<Scalars['String']['input']>;
  framedMetric?: InputMaybe<Scalars['String']['input']>;
  framedWidth?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  imageS3Locations?: InputMaybe<Array<S3LocationInput>>;
  offer?: InputMaybe<Scalars['Boolean']['input']>;
  partnerLocationId?: InputMaybe<Scalars['String']['input']>;
  priceCurrency?: InputMaybe<Scalars['String']['input']>;
  priceHidden?: InputMaybe<Scalars['Boolean']['input']>;
  priceIncludesTax?: InputMaybe<Scalars['Boolean']['input']>;
  priceListed?: InputMaybe<Scalars['String']['input']>;
  priceMax?: InputMaybe<Scalars['Int']['input']>;
  priceMin?: InputMaybe<Scalars['Int']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  shippingWeight?: InputMaybe<Scalars['Float']['input']>;
  shippingWeightMetric?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateArtworkMutationPayload = {
  __typename?: 'UpdateArtworkMutationPayload';
  artworkOrError?: Maybe<UpdateArtworkResponseOrError>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type UpdateCmsLastAccessTimestampFailure = {
  __typename?: 'UpdateCMSLastAccessTimestampFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type UpdateCmsLastAccessTimestampMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
};

export type UpdateCmsLastAccessTimestampMutationPayload = {
  __typename?: 'UpdateCMSLastAccessTimestampMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  partnerOrError?: Maybe<UpdateCmsLastAccessTimestampResponseOrError>;
};

export type UpdateCmsLastAccessTimestampResponseOrError = UpdateCmsLastAccessTimestampFailure | UpdateCmsLastAccessTimestampSuccess;

export type UpdateCmsLastAccessTimestampSuccess = {
  __typename?: 'UpdateCMSLastAccessTimestampSuccess';
  partner?: Maybe<Partner>;
};

export type UpdateCareerHighlightFailure = {
  __typename?: 'UpdateCareerHighlightFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type UpdateCareerHighlightInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  collected?: InputMaybe<Scalars['Boolean']['input']>;
  group?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  solo?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateCareerHighlightPayload = {
  __typename?: 'UpdateCareerHighlightPayload';
  careerHighlightOrError?: Maybe<UpdateCareerHighlightsSuccessResponseOrError>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type UpdateCareerHighlightSuccess = {
  __typename?: 'UpdateCareerHighlightSuccess';
  careerHighlight?: Maybe<CareerHighlight>;
};

export type UpdateCareerHighlightsSuccessResponseOrError = UpdateCareerHighlightFailure | UpdateCareerHighlightSuccess;

export type UpdateCollectionFailure = {
  __typename?: 'UpdateCollectionFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type UpdateCollectionResponseOrError = UpdateCollectionFailure | UpdateCollectionSuccess;

export type UpdateCollectionSuccess = {
  __typename?: 'UpdateCollectionSuccess';
  collection?: Maybe<Collection>;
};

export type UpdateCollectorProfileFailure = {
  __typename?: 'UpdateCollectorProfileFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type UpdateCollectorProfileInput = {
  affiliatedAuctionHouseIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  affiliatedFairIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  affiliatedGalleryIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  companyWebsite?: InputMaybe<Scalars['String']['input']>;
  institutionalAffiliations?: InputMaybe<Scalars['String']['input']>;
  intents?: InputMaybe<Array<InputMaybe<Intents>>>;
  loyaltyApplicant?: InputMaybe<Scalars['Boolean']['input']>;
  professionalBuyer?: InputMaybe<Scalars['Boolean']['input']>;
  promptedForUpdate?: InputMaybe<Scalars['Boolean']['input']>;
  selfReportedPurchases?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCollectorProfilePayload = {
  __typename?: 'UpdateCollectorProfilePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  collectorProfileOrError?: Maybe<UpdateCollectorProfileResponseOrError>;
};

export type UpdateCollectorProfileSuccess = {
  __typename?: 'UpdateCollectorProfileSuccess';
  collectorProfile?: Maybe<CollectorProfileType>;
};

export type UpdateCollectorProfileWithIdFailure = {
  __typename?: 'UpdateCollectorProfileWithIDFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type UpdateCollectorProfileWithIdInput = {
  affiliatedAuctionHouseIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  affiliatedFairIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  affiliatedGalleryIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  companyWebsite?: InputMaybe<Scalars['String']['input']>;
  confirmedBuyer?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  institutionalAffiliations?: InputMaybe<Scalars['String']['input']>;
  intents?: InputMaybe<Array<InputMaybe<Intents>>>;
  loyaltyApplicant?: InputMaybe<Scalars['Boolean']['input']>;
  professionalBuyer?: InputMaybe<Scalars['Boolean']['input']>;
  selfReportedPurchases?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCollectorProfileWithIdPayload = {
  __typename?: 'UpdateCollectorProfileWithIDPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  collectorProfileOrError?: Maybe<UpdateCollectorProfileWithIdResponseOrError>;
};

export type UpdateCollectorProfileWithIdResponseOrError = UpdateCollectorProfileWithIdFailure | UpdateCollectorProfileWithIdSuccess;

export type UpdateCollectorProfileWithIdSuccess = {
  __typename?: 'UpdateCollectorProfileWithIDSuccess';
  collectorProfile?: Maybe<CollectorProfileType>;
};

export type UpdateConversationMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  conversationId: Scalars['String']['input'];
  dismissed?: InputMaybe<Scalars['Boolean']['input']>;
  fromLastViewedMessageId?: InputMaybe<Scalars['String']['input']>;
  sellerOutcome?: InputMaybe<Scalars['String']['input']>;
  sellerOutcomeComment?: InputMaybe<Scalars['String']['input']>;
  toLastViewedMessageId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateConversationMutationPayload = {
  __typename?: 'UpdateConversationMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  conversation?: Maybe<Conversation>;
};

export type UpdateFeatureFailure = {
  __typename?: 'UpdateFeatureFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type UpdateFeatureMutationInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  callout?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  layout?: InputMaybe<FeatureLayouts>;
  metaTitle?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  sourceBucket?: InputMaybe<Scalars['String']['input']>;
  sourceKey?: InputMaybe<Scalars['String']['input']>;
  subheadline?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateFeatureMutationPayload = {
  __typename?: 'UpdateFeatureMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  featureOrError?: Maybe<UpdateFeatureResponseOrError>;
};

export type UpdateFeatureResponseOrError = UpdateFeatureFailure | UpdateFeatureSuccess;

export type UpdateFeatureSuccess = {
  __typename?: 'UpdateFeatureSuccess';
  feature?: Maybe<Feature>;
};

export type UpdateFeaturedLinkFailure = {
  __typename?: 'UpdateFeaturedLinkFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type UpdateFeaturedLinkMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  href?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  sourceBucket?: InputMaybe<Scalars['String']['input']>;
  sourceKey?: InputMaybe<Scalars['String']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateFeaturedLinkMutationPayload = {
  __typename?: 'UpdateFeaturedLinkMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  featuredLinkOrError?: Maybe<UpdateFeaturedLinkResponseOrError>;
};

export type UpdateFeaturedLinkResponseOrError = UpdateFeaturedLinkFailure | UpdateFeaturedLinkSuccess;

export type UpdateFeaturedLinkSuccess = {
  __typename?: 'UpdateFeaturedLinkSuccess';
  featuredLink?: Maybe<FeaturedLink>;
};

export type UpdateHeroUnitLinkInput = {
  text: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type UpdateHeroUnitMutationInput = {
  body: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  credit?: InputMaybe<Scalars['String']['input']>;
  endAt?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  link: UpdateHeroUnitLinkInput;
  position?: InputMaybe<Scalars['Int']['input']>;
  startAt?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type UpdateHeroUnitMutationPayload = {
  __typename?: 'UpdateHeroUnitMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  heroUnitOrError?: Maybe<UpdateHeroUnitResponseOrError>;
};

export type UpdateInstallShotForPartnerShowFailure = {
  __typename?: 'UpdateInstallShotForPartnerShowFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type UpdateInstallShotForPartnerShowMutationInput = {
  caption: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  imageId: Scalars['String']['input'];
  showId: Scalars['String']['input'];
};

export type UpdateInstallShotForPartnerShowMutationPayload = {
  __typename?: 'UpdateInstallShotForPartnerShowMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  showOrError?: Maybe<UpdateInstallShotForPartnerShowResponseOrError>;
};

export type UpdateInstallShotForPartnerShowResponseOrError = UpdateInstallShotForPartnerShowFailure | UpdateInstallShotForPartnerShowSuccess;

export type UpdateInstallShotForPartnerShowSuccess = {
  __typename?: 'UpdateInstallShotForPartnerShowSuccess';
  show?: Maybe<Show>;
};

export type UpdateMeCollectionInput = {
  id: Scalars['String']['input'];
  shareableWithPartners: Scalars['Boolean']['input'];
};

export type UpdateMeCollectionsFailure = {
  __typename?: 'UpdateMeCollectionsFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type UpdateMeCollectionsResponseOrError = UpdateMeCollectionsFailure | UpdateMeCollectionsSuccess;

export type UpdateMeCollectionsSuccess = {
  __typename?: 'UpdateMeCollectionsSuccess';
  collection?: Maybe<Collection>;
};

export type UpdateMessageFailure = {
  __typename?: 'UpdateMessageFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type UpdateMessageMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  spam: Scalars['Boolean']['input'];
};

export type UpdateMessageMutationPayload = {
  __typename?: 'UpdateMessageMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  conversationOrError?: Maybe<UpdateMessageResponseOrError>;
};

export type UpdateMessageResponseOrError = UpdateMessageFailure | UpdateMessageSuccess;

export type UpdateMessageSuccess = {
  __typename?: 'UpdateMessageSuccess';
  conversation?: Maybe<Conversation>;
};

export type UpdateMyPasswordMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  currentPassword: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};

export type UpdateMyPasswordMutationPayload = {
  __typename?: 'UpdateMyPasswordMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  me: Me;
};

export type UpdateMyProfileInput = {
  artworksPerYear?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  collectorLevel?: InputMaybe<Scalars['Int']['input']>;
  completedOnboarding?: InputMaybe<Scalars['Boolean']['input']>;
  currencyPreference?: InputMaybe<CurrencyPreference>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailFrequency?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  iconUrl?: InputMaybe<Scalars['String']['input']>;
  industry?: InputMaybe<Scalars['String']['input']>;
  isCollector?: InputMaybe<Scalars['Boolean']['input']>;
  lengthUnitPreference?: InputMaybe<LengthUnitPreference>;
  location?: InputMaybe<EditableLocation>;
  name?: InputMaybe<Scalars['String']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  otherRelevantPositions?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  phoneCountryCode?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  priceRangeMax?: InputMaybe<Scalars['Float']['input']>;
  priceRangeMin?: InputMaybe<Scalars['Int']['input']>;
  privacy?: InputMaybe<Scalars['String']['input']>;
  profession?: InputMaybe<Scalars['String']['input']>;
  promptedForUpdate?: InputMaybe<Scalars['Boolean']['input']>;
  receiveLotOpeningSoonNotification?: InputMaybe<Scalars['Boolean']['input']>;
  receiveNewSalesNotification?: InputMaybe<Scalars['Boolean']['input']>;
  receiveNewWorksNotification?: InputMaybe<Scalars['Boolean']['input']>;
  receiveOrderNotification?: InputMaybe<Scalars['Boolean']['input']>;
  receiveOutbidNotification?: InputMaybe<Scalars['Boolean']['input']>;
  receivePartnerOfferNotification?: InputMaybe<Scalars['Boolean']['input']>;
  receivePartnerShowNotification?: InputMaybe<Scalars['Boolean']['input']>;
  receivePromotionNotification?: InputMaybe<Scalars['Boolean']['input']>;
  receivePurchaseNotification?: InputMaybe<Scalars['Boolean']['input']>;
  receiveSaleOpeningClosingNotification?: InputMaybe<Scalars['Boolean']['input']>;
  receiveViewingRoomNotification?: InputMaybe<Scalars['Boolean']['input']>;
  shareFollows?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateMyProfileMutation = UpdateMyProfileMutationFailure | UpdateMyProfileMutationSuccess;

export type UpdateMyProfileMutationFailure = {
  __typename?: 'UpdateMyProfileMutationFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type UpdateMyProfileMutationSuccess = {
  __typename?: 'UpdateMyProfileMutationSuccess';
  user?: Maybe<User>;
};

export type UpdateMyProfilePayload = {
  __typename?: 'UpdateMyProfilePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  me?: Maybe<Me>;
  user?: Maybe<User>;
  userOrError?: Maybe<UpdateMyProfileMutation>;
};

export type UpdateOrderedSetFailure = {
  __typename?: 'UpdateOrderedSetFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type UpdateOrderedSetMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  internalName?: InputMaybe<Scalars['String']['input']>;
  itemId?: InputMaybe<Scalars['String']['input']>;
  itemIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  itemType?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  layout?: InputMaybe<OrderedSetLayouts>;
  name?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Scalars['String']['input']>;
  ownerType?: InputMaybe<Scalars['String']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  unsetOwner?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateOrderedSetMutationPayload = {
  __typename?: 'UpdateOrderedSetMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  orderedSetOrError?: Maybe<UpdateOrderedSetResponseOrError>;
};

export type UpdateOrderedSetResponseOrError = UpdateOrderedSetFailure | UpdateOrderedSetSuccess;

export type UpdateOrderedSetSuccess = {
  __typename?: 'UpdateOrderedSetSuccess';
  feature?: Maybe<Feature>;
  set?: Maybe<OrderedSet>;
};

export type UpdatePageFailure = {
  __typename?: 'UpdatePageFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type UpdatePageMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  content: Scalars['String']['input'];
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  published: Scalars['Boolean']['input'];
};

export type UpdatePageMutationPayload = {
  __typename?: 'UpdatePageMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  pageOrError?: Maybe<UpdatePageResponseOrError>;
};

export type UpdatePageResponseOrError = UpdatePageFailure | UpdatePageSuccess;

export type UpdatePageSuccess = {
  __typename?: 'UpdatePageSuccess';
  page?: Maybe<Page>;
};

export type UpdatePartnerArtistDocumentFailure = {
  __typename?: 'UpdatePartnerArtistDocumentFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type UpdatePartnerArtistDocumentMutationInput = {
  artistId: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  documentId: Scalars['String']['input'];
  partnerId: Scalars['String']['input'];
  remoteDocumentUrl?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePartnerArtistDocumentMutationPayload = {
  __typename?: 'UpdatePartnerArtistDocumentMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  documentOrError?: Maybe<UpdatePartnerArtistDocumentResponseOrError>;
};

export type UpdatePartnerArtistDocumentResponseOrError = UpdatePartnerArtistDocumentFailure | UpdatePartnerArtistDocumentSuccess;

export type UpdatePartnerArtistDocumentSuccess = {
  __typename?: 'UpdatePartnerArtistDocumentSuccess';
  document?: Maybe<PartnerDocument>;
  partner?: Maybe<Partner>;
};

export type UpdatePartnerArtistFailure = {
  __typename?: 'UpdatePartnerArtistFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type UpdatePartnerArtistMutationInput = {
  biography?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  displayOnPartnerProfile?: InputMaybe<Scalars['Boolean']['input']>;
  hideInPresentationMode?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  remoteImageUrl?: InputMaybe<Scalars['String']['input']>;
  representedBy?: InputMaybe<Scalars['Boolean']['input']>;
  useDefaultBiography?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdatePartnerArtistMutationPayload = {
  __typename?: 'UpdatePartnerArtistMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  partnerArtistOrError?: Maybe<UpdatePartnerArtistResponseOrError>;
};

export type UpdatePartnerArtistResponseOrError = UpdatePartnerArtistFailure | UpdatePartnerArtistSuccess;

export type UpdatePartnerArtistSuccess = {
  __typename?: 'UpdatePartnerArtistSuccess';
  partner?: Maybe<Partner>;
  partnerArtist?: Maybe<PartnerArtist>;
};

export type UpdatePartnerContactFailure = {
  __typename?: 'UpdatePartnerContactFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type UpdatePartnerContactInput = {
  canContact?: InputMaybe<Scalars['Boolean']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contactId: Scalars['String']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  locationId?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  partnerId: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePartnerContactOrError = UpdatePartnerContactFailure | UpdatePartnerContactSuccess;

export type UpdatePartnerContactPayload = {
  __typename?: 'UpdatePartnerContactPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  partnerContactOrError?: Maybe<UpdatePartnerContactOrError>;
};

export type UpdatePartnerContactSuccess = {
  __typename?: 'UpdatePartnerContactSuccess';
  partnerContact?: Maybe<Contact>;
};

export type UpdatePartnerFailure = {
  __typename?: 'UpdatePartnerFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type UpdatePartnerFlagsFailure = {
  __typename?: 'UpdatePartnerFlagsFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type UpdatePartnerFlagsMutationInput = {
  artworksDefaultCurrency?: InputMaybe<Scalars['String']['input']>;
  artworksDefaultMetric?: InputMaybe<Scalars['String']['input']>;
  artworksDefaultPartnerLocationId?: InputMaybe<Scalars['String']['input']>;
  artworksDefaultWeightMetric?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  inquireAvailabilityPriceDisplayEnabledByPartner?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdatePartnerFlagsMutationPayload = {
  __typename?: 'UpdatePartnerFlagsMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  partnerOrError?: Maybe<UpdatePartnerFlagsResponseOrError>;
};

export type UpdatePartnerFlagsResponseOrError = UpdatePartnerFlagsFailure | UpdatePartnerFlagsSuccess;

export type UpdatePartnerFlagsSuccess = {
  __typename?: 'UpdatePartnerFlagsSuccess';
  partner?: Maybe<Partner>;
};

export type UpdatePartnerLocationFailure = {
  __typename?: 'UpdatePartnerLocationFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type UpdatePartnerLocationInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  address2?: InputMaybe<Scalars['String']['input']>;
  addressType?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  locationId: Scalars['String']['input'];
  partnerId: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  publiclyViewable?: InputMaybe<Scalars['Boolean']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePartnerLocationOrError = UpdatePartnerLocationFailure | UpdatePartnerLocationSuccess;

export type UpdatePartnerLocationPayload = {
  __typename?: 'UpdatePartnerLocationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  partnerLocationOrError?: Maybe<UpdatePartnerLocationOrError>;
};

export type UpdatePartnerLocationSuccess = {
  __typename?: 'UpdatePartnerLocationSuccess';
  location?: Maybe<Location>;
};

export type UpdatePartnerMutationInput = {
  adminId?: InputMaybe<Scalars['String']['input']>;
  alternateNames?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  artsyCollectsSalesTax?: InputMaybe<Scalars['Boolean']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  commerceEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  commissionRate?: InputMaybe<Scalars['Float']['input']>;
  contractType?: InputMaybe<Scalars['String']['input']>;
  criteoEligible?: InputMaybe<Scalars['Boolean']['input']>;
  directlyContactable?: InputMaybe<Scalars['Boolean']['input']>;
  displayArtistsSection?: InputMaybe<Scalars['Boolean']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  displayWorksSection?: InputMaybe<Scalars['Boolean']['input']>;
  distinguishRepresentedArtists?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  enableAchPaymentMethod?: InputMaybe<Scalars['Boolean']['input']>;
  enforceOnPlatformTransactions?: InputMaybe<Scalars['Boolean']['input']>;
  featuredKeywords?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  givenName?: InputMaybe<Scalars['String']['input']>;
  hasFullProfile?: InputMaybe<Scalars['Boolean']['input']>;
  hasLimitedFolioAccess?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  implicitOfferEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  inquiryOrderEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  managedByErp?: InputMaybe<Scalars['Boolean']['input']>;
  outreachAdminId?: InputMaybe<Scalars['String']['input']>;
  partnerCategories?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preQualify?: InputMaybe<Scalars['Boolean']['input']>;
  profileArtistsLayout?: InputMaybe<Scalars['String']['input']>;
  profileBannerDisplay?: InputMaybe<Scalars['String']['input']>;
  referralContactId?: InputMaybe<Scalars['String']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
  relativeSize?: InputMaybe<Scalars['Int']['input']>;
  requiresMerchantAccount?: InputMaybe<Scalars['Boolean']['input']>;
  shortName?: InputMaybe<Scalars['String']['input']>;
  sortableName?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  vatExemptApproved?: InputMaybe<Scalars['Boolean']['input']>;
  vatNumber?: InputMaybe<Scalars['String']['input']>;
  vatStatus?: InputMaybe<Scalars['String']['input']>;
  verifiedSeller?: InputMaybe<Scalars['Boolean']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
  wireTransferEnabled?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdatePartnerMutationPayload = {
  __typename?: 'UpdatePartnerMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  partnerOrError?: Maybe<UpdatePartnerResponseOrError>;
};

export type UpdatePartnerProfileImageFailure = {
  __typename?: 'UpdatePartnerProfileImageFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type UpdatePartnerProfileImageInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  partnerId: Scalars['String']['input'];
  remoteImageS3Bucket: Scalars['String']['input'];
  remoteImageS3Key: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type UpdatePartnerProfileImageOrError = UpdatePartnerProfileImageFailure | UpdatePartnerProfileImageSuccess;

export type UpdatePartnerProfileImagePayload = {
  __typename?: 'UpdatePartnerProfileImagePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  partnerOrError?: Maybe<UpdatePartnerProfileImageOrError>;
};

export type UpdatePartnerProfileImageSuccess = {
  __typename?: 'UpdatePartnerProfileImageSuccess';
  partner?: Maybe<Partner>;
};

export type UpdatePartnerResponseOrError = UpdatePartnerFailure | UpdatePartnerSuccess;

export type UpdatePartnerShowDocumentFailure = {
  __typename?: 'UpdatePartnerShowDocumentFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type UpdatePartnerShowDocumentMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  documentId: Scalars['String']['input'];
  partnerId: Scalars['String']['input'];
  remoteDocumentUrl?: InputMaybe<Scalars['String']['input']>;
  showId: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePartnerShowDocumentMutationPayload = {
  __typename?: 'UpdatePartnerShowDocumentMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  documentOrError?: Maybe<UpdatePartnerShowDocumentResponseOrError>;
};

export type UpdatePartnerShowDocumentResponseOrError = UpdatePartnerShowDocumentFailure | UpdatePartnerShowDocumentSuccess;

export type UpdatePartnerShowDocumentSuccess = {
  __typename?: 'UpdatePartnerShowDocumentSuccess';
  document?: Maybe<PartnerDocument>;
  show?: Maybe<Show>;
};

export type UpdatePartnerShowEventFailure = {
  __typename?: 'UpdatePartnerShowEventFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type UpdatePartnerShowEventMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  endAt?: InputMaybe<Scalars['String']['input']>;
  eventId: Scalars['String']['input'];
  eventType?: InputMaybe<Scalars['String']['input']>;
  partnerId: Scalars['String']['input'];
  showId: Scalars['String']['input'];
  startAt?: InputMaybe<Scalars['String']['input']>;
  timeZone?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePartnerShowEventMutationPayload = {
  __typename?: 'UpdatePartnerShowEventMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  showEventOrError?: Maybe<UpdatePartnerShowEventResponseOrError>;
};

export type UpdatePartnerShowEventResponseOrError = UpdatePartnerShowEventFailure | UpdatePartnerShowEventSuccess;

export type UpdatePartnerShowEventSuccess = {
  __typename?: 'UpdatePartnerShowEventSuccess';
  show?: Maybe<Show>;
  showEvent?: Maybe<ShowEventType>;
};

export type UpdatePartnerShowFailure = {
  __typename?: 'UpdatePartnerShowFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type UpdatePartnerShowFairLocationInput = {
  booth?: InputMaybe<Scalars['String']['input']>;
  floor?: InputMaybe<Scalars['String']['input']>;
  hall?: InputMaybe<Scalars['String']['input']>;
  pier?: InputMaybe<Scalars['String']['input']>;
  room?: InputMaybe<Scalars['String']['input']>;
  section?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePartnerShowMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  displayOnPartnerProfile?: InputMaybe<Scalars['Boolean']['input']>;
  endAt?: InputMaybe<Scalars['String']['input']>;
  fairId?: InputMaybe<Scalars['String']['input']>;
  fairLocation?: InputMaybe<UpdatePartnerShowFairLocationInput>;
  featured?: InputMaybe<Scalars['Boolean']['input']>;
  locationId?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  partnerId: Scalars['String']['input'];
  pressRelease?: InputMaybe<Scalars['String']['input']>;
  showId: Scalars['String']['input'];
  startAt?: InputMaybe<Scalars['String']['input']>;
  viewingRoomIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UpdatePartnerShowMutationPayload = {
  __typename?: 'UpdatePartnerShowMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  showOrError?: Maybe<UpdatePartnerShowResponseOrError>;
};

export type UpdatePartnerShowResponseOrError = UpdatePartnerShowFailure | UpdatePartnerShowSuccess;

export type UpdatePartnerShowSuccess = {
  __typename?: 'UpdatePartnerShowSuccess';
  show?: Maybe<Show>;
};

export type UpdatePartnerSuccess = {
  __typename?: 'UpdatePartnerSuccess';
  partner?: Maybe<Partner>;
};

export type UpdateProfileFailure = {
  __typename?: 'UpdateProfileFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type UpdateProfileMutationInput = {
  bio?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  fullBio?: InputMaybe<Scalars['String']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  isPrivate?: InputMaybe<Scalars['Boolean']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateProfileMutationPayload = {
  __typename?: 'UpdateProfileMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  profileOrError?: Maybe<UpdateProfileResponseOrError>;
};

export type UpdateProfileResponseOrError = UpdateProfileFailure | UpdateProfileSuccess;

export type UpdateProfileSuccess = {
  __typename?: 'UpdateProfileSuccess';
  profile?: Maybe<Profile>;
};

export type UpdatePurchaseFailure = {
  __typename?: 'UpdatePurchaseFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type UpdatePurchaseResponseOrError = UpdatePurchaseFailure | UpdatePurchaseSuccess;

export type UpdatePurchaseSuccess = {
  __typename?: 'UpdatePurchaseSuccess';
  purchase?: Maybe<Purchase>;
};

export type UpdateSaleAgreementFailure = {
  __typename?: 'UpdateSaleAgreementFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type UpdateSaleAgreementMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  displayEndAt?: InputMaybe<Scalars['String']['input']>;
  displayStartAt?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  published?: InputMaybe<Scalars['Boolean']['input']>;
  saleId?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<SaleAgreementStatus>;
};

export type UpdateSaleAgreementMutationPayload = {
  __typename?: 'UpdateSaleAgreementMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  saleAgreementOrError?: Maybe<UpdateSaleAgreementResponseOrError>;
};

export type UpdateSaleAgreementResponseOrError = UpdateSaleAgreementFailure | UpdateSaleAgreementSuccess;

export type UpdateSaleAgreementSuccess = {
  __typename?: 'UpdateSaleAgreementSuccess';
  saleAgreement?: Maybe<SaleAgreement>;
};

export type UpdateSmsSecondFactorInput = {
  attributes: SmsSecondFactorAttributes;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  secondFactorID: Scalars['ID']['input'];
};

export type UpdateSmsSecondFactorPayload = {
  __typename?: 'UpdateSmsSecondFactorPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  secondFactorOrErrors: SmsSecondFactorOrErrorsUnion;
};

export type UpdateSubmissionMutationInput = {
  additionalInfo?: InputMaybe<Scalars['String']['input']>;
  artistID?: InputMaybe<Scalars['String']['input']>;
  attributionClass?: InputMaybe<ConsignmentAttributionClass>;
  authenticityCertificate?: InputMaybe<Scalars['Boolean']['input']>;
  category?: InputMaybe<ConsignmentSubmissionCategoryAggregation>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  depth?: InputMaybe<Scalars['String']['input']>;
  dimensionsMetric?: InputMaybe<Scalars['String']['input']>;
  edition?: InputMaybe<Scalars['Boolean']['input']>;
  editionNumber?: InputMaybe<Scalars['String']['input']>;
  editionSize?: InputMaybe<Scalars['Int']['input']>;
  editionSizeFormatted?: InputMaybe<Scalars['String']['input']>;
  externalId?: InputMaybe<Scalars['ID']['input']>;
  height?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locationAddress?: InputMaybe<Scalars['String']['input']>;
  locationAddress2?: InputMaybe<Scalars['String']['input']>;
  locationCity?: InputMaybe<Scalars['String']['input']>;
  locationCountry?: InputMaybe<Scalars['String']['input']>;
  locationCountryCode?: InputMaybe<Scalars['String']['input']>;
  locationPostalCode?: InputMaybe<Scalars['String']['input']>;
  locationState?: InputMaybe<Scalars['String']['input']>;
  medium?: InputMaybe<Scalars['String']['input']>;
  minimumPriceDollars?: InputMaybe<Scalars['Int']['input']>;
  provenance?: InputMaybe<Scalars['String']['input']>;
  sessionID?: InputMaybe<Scalars['String']['input']>;
  signature?: InputMaybe<Scalars['Boolean']['input']>;
  state?: InputMaybe<ConsignmentSubmissionStateAggregation>;
  title?: InputMaybe<Scalars['String']['input']>;
  userEmail?: InputMaybe<Scalars['String']['input']>;
  userName?: InputMaybe<Scalars['String']['input']>;
  userPhone?: InputMaybe<Scalars['String']['input']>;
  utmMedium?: InputMaybe<Scalars['String']['input']>;
  utmSource?: InputMaybe<Scalars['String']['input']>;
  utmTerm?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['String']['input']>;
  year?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateSubmissionMutationPayload = {
  __typename?: 'UpdateSubmissionMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  consignmentSubmission?: Maybe<ConsignmentSubmission>;
};

export type UpdateUserAddressInput = {
  attributes: UserAddressAttributes;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  userAddressID: Scalars['ID']['input'];
};

export type UpdateUserAddressPayload = {
  __typename?: 'UpdateUserAddressPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  me?: Maybe<Me>;
  userAddressOrErrors: UserAddressOrErrorsUnion;
};

export type UpdateUserDefaultAddressInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  userAddressID: Scalars['ID']['input'];
};

export type UpdateUserDefaultAddressPayload = {
  __typename?: 'UpdateUserDefaultAddressPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  me?: Maybe<Me>;
  userAddressOrErrors: UserAddressOrErrorsUnion;
};

export type UpdateUserInterestFailure = {
  __typename?: 'UpdateUserInterestFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type UpdateUserInterestInput = {
  id: Scalars['String']['input'];
  private?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateUserInterestMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  private?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateUserInterestMutationPayload = {
  __typename?: 'UpdateUserInterestMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  userInterestEdge?: Maybe<UserInterestEdge>;
  userInterestOrError?: Maybe<UpdateUserInterestResponseOrError>;
};

export type UpdateUserInterestOrError = UpdateUserInterestsFailure | UserInterest;

export type UpdateUserInterestResponseOrError = UpdateUserInterestFailure | UpdateUserInterestSuccess;

export type UpdateUserInterestSuccess = {
  __typename?: 'UpdateUserInterestSuccess';
  userInterest?: Maybe<UserInterest>;
};

export type UpdateUserInterestsFailure = {
  __typename?: 'UpdateUserInterestsFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type UpdateUserInterestsMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  userInterests: Array<UpdateUserInterestInput>;
};

export type UpdateUserInterestsMutationPayload = {
  __typename?: 'UpdateUserInterestsMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  me: Me;
  userInterestsOrErrors: Array<UpdateUserInterestOrError>;
};

export type UpdateUserMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  dataTransferOptOut?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserMutationPayload = {
  __typename?: 'UpdateUserMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type UpdateUserSaleProfileMutationInput = {
  addressLine1?: InputMaybe<Scalars['String']['input']>;
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  requireBidderApproval?: InputMaybe<Scalars['Boolean']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  zip?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserSaleProfileMutationPayload = {
  __typename?: 'UpdateUserSaleProfileMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type UpdateViewingRoomArtworksInput = {
  artworks: Array<ViewingRoomArtworkInput>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  viewingRoomID: Scalars['String']['input'];
};

export type UpdateViewingRoomArtworksPayload = {
  __typename?: 'UpdateViewingRoomArtworksPayload';
  artworkIDs: Array<Scalars['String']['output']>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type UpdateViewingRoomInput = {
  attributes: ViewingRoomAttributes;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<ArImageInput>;
  viewingRoomID: Scalars['String']['input'];
};

export type UpdateViewingRoomPayload = {
  __typename?: 'UpdateViewingRoomPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  viewingRoomOrErrors: ViewingRoomOrErrorsUnion;
};

export type UpdateViewingRoomSubsectionsInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  subsections: Array<ViewingRoomSubsectionInput>;
  viewingRoomID: Scalars['ID']['input'];
};

export type UpdateViewingRoomSubsectionsPayload = {
  __typename?: 'UpdateViewingRoomSubsectionsPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  subsections: Array<ViewingRoomSubsection>;
};

export type UploadSource = {
  bucket?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};

export type UploadSources = {
  buckets?: InputMaybe<Array<Scalars['String']['input']>>;
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type User = Node & {
  __typename?: 'User';
  accessiblePropertiesConnection?: Maybe<UserAccessiblePropertyConnection>;
  adminNotes?: Maybe<Array<Maybe<UserAdminNotes>>>;
  analytics?: Maybe<AnalyticsUserStats>;
  cached?: Maybe<Scalars['Int']['output']>;
  collectorProfile?: Maybe<CollectorProfileType>;
  createdAt?: Maybe<Scalars['String']['output']>;
  dataTransferOptOut?: Maybe<Scalars['Boolean']['output']>;
  devices: Array<Device>;
  email: Scalars['String']['output'];
  emailConfirmationSentAt?: Maybe<Scalars['String']['output']>;
  emailConfirmedAt?: Maybe<Scalars['String']['output']>;
  enabled: Scalars['Boolean']['output'];
  follows?: Maybe<UserFollows>;
  id: Scalars['ID']['output'];
  initials?: Maybe<Scalars['String']['output']>;
  inquiredArtworksConnection?: Maybe<UserInquiredArtworksConnection>;
  interestsConnection?: Maybe<UserInterestConnection>;
  internalID: Scalars['ID']['output'];
  isIdentityVerified: Scalars['Boolean']['output'];
  lastSignInAt?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Location>;
  myCollectionArtworksConnection?: Maybe<ArtworkConnection>;
  name: Scalars['String']['output'];
  paddleNumber?: Maybe<Scalars['String']['output']>;
  partnerAccess: Array<Maybe<Scalars['String']['output']>>;
  phone?: Maybe<Scalars['String']['output']>;
  pin?: Maybe<Scalars['String']['output']>;
  priceRange?: Maybe<Scalars['String']['output']>;
  profileAccess: Array<Maybe<Scalars['String']['output']>>;
  purchasedArtworksConnection?: Maybe<UserPurchasesConnection>;
  quiz: Quiz;
  receiveLotOpeningSoonNotification?: Maybe<Scalars['Boolean']['output']>;
  receiveNewSalesNotification?: Maybe<Scalars['Boolean']['output']>;
  receiveNewWorksNotification?: Maybe<Scalars['Boolean']['output']>;
  receiveOrderNotification?: Maybe<Scalars['Boolean']['output']>;
  receiveOutbidNotification?: Maybe<Scalars['Boolean']['output']>;
  receivePartnerOfferNotification?: Maybe<Scalars['Boolean']['output']>;
  receivePartnerShowNotification?: Maybe<Scalars['Boolean']['output']>;
  receivePromotionNotification?: Maybe<Scalars['Boolean']['output']>;
  receivePurchaseNotification?: Maybe<Scalars['Boolean']['output']>;
  receiveSaleOpeningClosingNotification?: Maybe<Scalars['Boolean']['output']>;
  receiveViewingRoomNotification?: Maybe<Scalars['Boolean']['output']>;
  roles: Array<Maybe<Scalars['String']['output']>>;
  saleProfile?: Maybe<UserSaleProfile>;
  savedArtworksConnection?: Maybe<ArtworkConnection>;
  secondFactorEnabled: Scalars['Boolean']['output'];
  signInCount: Scalars['Int']['output'];
  unconfirmedEmail?: Maybe<Scalars['String']['output']>;
  userAlreadyExists?: Maybe<Scalars['Boolean']['output']>;
};


export type UserAccessiblePropertiesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  model?: InputMaybe<UserAccessiblePropertyInput>;
};


export type UserCreatedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type UserEmailConfirmationSentAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type UserEmailConfirmedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type UserInitialsArgs = {
  length?: InputMaybe<Scalars['Int']['input']>;
};


export type UserInquiredArtworksConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type UserInterestsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type UserLastSignInAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type UserMyCollectionArtworksConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type UserPurchasedArtworksConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type UserSavedArtworksConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type UserAccessibleProperty = Artist | Artwork | Partner | Profile;

export type UserAccessiblePropertyConnection = {
  __typename?: 'UserAccessiblePropertyConnection';
  edges?: Maybe<Array<Maybe<UserAccessiblePropertyEdge>>>;
  pageCursors: PageCursors;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type UserAccessiblePropertyEdge = {
  __typename?: 'UserAccessiblePropertyEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<UserAccessibleProperty>;
};

export enum UserAccessiblePropertyInput {
  Artist = 'ARTIST',
  Artwork = 'ARTWORK',
  Partner = 'PARTNER',
  Profile = 'PROFILE'
}

export type UserAddress = {
  __typename?: 'UserAddress';
  addressLine1: Scalars['String']['output'];
  addressLine2?: Maybe<Scalars['String']['output']>;
  addressLine3?: Maybe<Scalars['String']['output']>;
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  isDefault: Scalars['Boolean']['output'];
  name?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  phoneNumberCountryCode?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Scalars['String']['output']>;
};

export type UserAddressAttributes = {
  addressLine1: Scalars['String']['input'];
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  addressLine3?: InputMaybe<Scalars['String']['input']>;
  city: Scalars['String']['input'];
  country: Scalars['String']['input'];
  name: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  phoneNumberCountryCode?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
};

export type UserAddressConnection = {
  __typename?: 'UserAddressConnection';
  edges?: Maybe<Array<Maybe<UserAddressEdge>>>;
  nodes?: Maybe<Array<Maybe<UserAddress>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type UserAddressEdge = {
  __typename?: 'UserAddressEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<UserAddress>;
};

export type UserAddressOrErrorsUnion = Errors | UserAddress;

export type UserAdminNotes = {
  __typename?: 'UserAdminNotes';
  body: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['String']['output']>;
  creator?: Maybe<User>;
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
};


export type UserAdminNotesCreatedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type UserConnection = {
  __typename?: 'UserConnection';
  edges?: Maybe<Array<Maybe<UserEdge>>>;
  pageCursors: PageCursors;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type UserEdge = {
  __typename?: 'UserEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<User>;
};

export type UserFollows = {
  __typename?: 'UserFollows';
  artistsConnection?: Maybe<ArtistConnection>;
  genesConnection?: Maybe<GeneConnection>;
};


export type UserFollowsArtistsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type UserFollowsGenesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type UserIconDeleteFailureType = {
  __typename?: 'UserIconDeleteFailureType';
  mutationError?: Maybe<GravityMutationError>;
};

export type UserIconDeleteSuccessType = {
  __typename?: 'UserIconDeleteSuccessType';
  icon?: Maybe<Image>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type UserIconDeletionMutationType = UserIconDeleteFailureType | UserIconDeleteSuccessType;

export type UserInquiredArtworksConnection = {
  __typename?: 'UserInquiredArtworksConnection';
  edges?: Maybe<Array<Maybe<UserInquiredArtworksEdge>>>;
  pageCursors: PageCursors;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type UserInquiredArtworksEdge = {
  __typename?: 'UserInquiredArtworksEdge';
  createdAt?: Maybe<Scalars['String']['output']>;
  cursor: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  isSentToGallery?: Maybe<Scalars['Boolean']['output']>;
  node?: Maybe<Artwork>;
  note?: Maybe<Scalars['String']['output']>;
  outcome?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};


export type UserInquiredArtworksEdgeCreatedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type UserInterest = {
  __typename?: 'UserInterest';
  body?: Maybe<Scalars['String']['output']>;
  category: UserInterestCategory;
  id: Scalars['ID']['output'];
  interest: UserInterestInterest;
  internalID: Scalars['ID']['output'];
  ownerType?: Maybe<UserInterestOwnerType>;
  private: Scalars['Boolean']['output'];
};

export enum UserInterestCategory {
  CollectedBefore = 'COLLECTED_BEFORE',
  InterestedInCollecting = 'INTERESTED_IN_COLLECTING'
}

export type UserInterestConnection = {
  __typename?: 'UserInterestConnection';
  edges?: Maybe<Array<Maybe<UserInterestEdge>>>;
  pageCursors: PageCursors;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type UserInterestEdge = {
  __typename?: 'UserInterestEdge';
  body?: Maybe<Scalars['String']['output']>;
  category: UserInterestCategory;
  createdByAdmin: Scalars['Boolean']['output'];
  cursor: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  node?: Maybe<UserInterestInterest>;
  ownerType?: Maybe<Scalars['String']['output']>;
  private: Scalars['Boolean']['output'];
};

export type UserInterestInput = {
  anonymousSessionId?: InputMaybe<Scalars['String']['input']>;
  body?: InputMaybe<Scalars['String']['input']>;
  category: UserInterestCategory;
  interestId: Scalars['String']['input'];
  interestType: UserInterestInterestType;
  private?: InputMaybe<Scalars['Boolean']['input']>;
  sessionID?: InputMaybe<Scalars['String']['input']>;
};

export type UserInterestInterest = Artist | Gene;

export enum UserInterestInterestType {
  Artist = 'ARTIST',
  Gene = 'GENE'
}

export type UserInterestOrError = CreateUserInterestFailure | UserInterest;

export enum UserInterestOwnerType {
  CollectorProfile = 'COLLECTOR_PROFILE',
  UserSaleProfile = 'USER_SALE_PROFILE'
}

export type UserPurchasesConnection = {
  __typename?: 'UserPurchasesConnection';
  edges?: Maybe<Array<Maybe<UserPurchasesEdge>>>;
  pageCursors: PageCursors;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type UserPurchasesEdge = {
  __typename?: 'UserPurchasesEdge';
  cursor: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  node?: Maybe<Artwork>;
  ownerType?: Maybe<Scalars['String']['output']>;
  saleDate?: Maybe<Scalars['String']['output']>;
  salePrice?: Maybe<Scalars['Float']['output']>;
  source?: Maybe<Scalars['String']['output']>;
};


export type UserPurchasesEdgeSaleDateArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type UserRole = {
  __typename?: 'UserRole';
  name: Scalars['String']['output'];
};

export type UserSaleProfile = {
  __typename?: 'UserSaleProfile';
  addressLine1?: Maybe<Scalars['String']['output']>;
  addressLine2?: Maybe<Scalars['String']['output']>;
  alternativeEmail?: Maybe<Scalars['String']['output']>;
  birthYear?: Maybe<Scalars['Int']['output']>;
  buyerStatus?: Maybe<Scalars['Int']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  employer?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  industry?: Maybe<Scalars['String']['output']>;
  internalID: Scalars['ID']['output'];
  jobTitle?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  maritalStatus?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  prefix?: Maybe<Scalars['String']['output']>;
  priceRange?: Maybe<Scalars['Int']['output']>;
  profession?: Maybe<Scalars['String']['output']>;
  requireBidderApproval: Scalars['Boolean']['output'];
  salaryUSD?: Maybe<Scalars['Int']['output']>;
  spouse?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  zip?: Maybe<Scalars['String']['output']>;
};

export type VanityUrlEntityType = Fair | Partner;

export enum VerificationStatuses {
  NotFound = 'NOT_FOUND',
  NotPerformed = 'NOT_PERFORMED',
  VerificationUnavailable = 'VERIFICATION_UNAVAILABLE',
  VerifiedNoChange = 'VERIFIED_NO_CHANGE',
  VerifiedWithChanges = 'VERIFIED_WITH_CHANGES'
}

export type VerifiedRepresentative = Node & {
  __typename?: 'VerifiedRepresentative';
  artist: Artist;
  id: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  partner: Partner;
};

export type VerifyAddressFailureType = {
  __typename?: 'VerifyAddressFailureType';
  mutationError?: Maybe<GravityMutationError>;
};

export type VerifyAddressInput = {
  addressLine1: Scalars['String']['input'];
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  country: Scalars['String']['input'];
  postalCode: Scalars['String']['input'];
  region?: InputMaybe<Scalars['String']['input']>;
};

export type VerifyAddressMutationType = VerifyAddressFailureType | VerifyAddressType;

export type VerifyAddressPayload = {
  __typename?: 'VerifyAddressPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  verifyAddressOrError?: Maybe<VerifyAddressMutationType>;
};

export type VerifyAddressType = {
  __typename?: 'VerifyAddressType';
  addressVerificationId: Scalars['String']['output'];
  inputAddress: InputAddressFields;
  suggestedAddresses: Array<Maybe<SuggestedAddressFields>>;
  verificationStatus: VerificationStatuses;
};

export type VerifyUser = {
  __typename?: 'VerifyUser';
  exists: Scalars['Boolean']['output'];
};

export type Video = {
  __typename?: 'Video';
  height: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  playerUrl: Scalars['String']['output'];
  width: Scalars['Int']['output'];
};

export type Viewer = {
  __typename?: 'Viewer';
  _do_not_use_conversation?: Maybe<Conversation>;
  _do_not_use_image?: Maybe<Image>;
  admin?: Maybe<Admin>;
  article?: Maybe<Article>;
  articles: Array<Article>;
  articlesConnection?: Maybe<ArticleConnection>;
  artist?: Maybe<Artist>;
  artistSeries?: Maybe<ArtistSeries>;
  artistSeriesConnection?: Maybe<ArtistSeriesConnection>;
  artists?: Maybe<Array<Maybe<Artist>>>;
  artistsConnection?: Maybe<ArtistConnection>;
  artwork?: Maybe<Artwork>;
  artworkAttributionClasses?: Maybe<Array<Maybe<AttributionClass>>>;
  artworkImport?: Maybe<ArtworkImport>;
  artworkMediums?: Maybe<Array<Maybe<ArtworkMedium>>>;
  artworkResult?: Maybe<ArtworkResult>;
  /** @deprecated This is only for use in resolving stitched queries, not for first-class client use! */
  artworks?: Maybe<ArtworkConnection>;
  artworksConnection?: Maybe<FilterArtworksConnection>;
  artworksForUser?: Maybe<ArtworkConnection>;
  auctionResult?: Maybe<AuctionResult>;
  authenticationStatus: AuthenticationStatus;
  author?: Maybe<Author>;
  bankAccount?: Maybe<BankAccount>;
  channel: Channel;
  cities: Array<City>;
  city?: Maybe<City>;
  collection?: Maybe<Collection>;
  collectorProfile?: Maybe<CollectorProfileType>;
  collectorProfilesConnection?: Maybe<CollectorProfileTypeConnection>;
  commerceOrders?: Maybe<CommerceOrderConnectionWithTotalCount>;
  conversation?: Maybe<Conversation>;
  conversationsConnection?: Maybe<ConversationConnection>;
  creditCard?: Maybe<CreditCard>;
  curatedMarketingCollections?: Maybe<Array<Maybe<MarketingCollection>>>;
  curatedTrendingArtists?: Maybe<ArtistConnection>;
  departments: Array<Department>;
  discoverArtworks?: Maybe<ArtworkConnection>;
  discoveryCategoriesConnection?: Maybe<DiscoveryCategoriesConnectionConnection>;
  discoveryMarketingCollections?: Maybe<Array<MarketingCollection>>;
  external: External;
  fair?: Maybe<Fair>;
  fairOrganizer?: Maybe<FairOrganizer>;
  fairs?: Maybe<Array<Maybe<Fair>>>;
  fairsConnection?: Maybe<FairConnection>;
  feature?: Maybe<Feature>;
  featuredFairs?: Maybe<Array<Maybe<Fair>>>;
  featuredLinksConnection?: Maybe<FeaturedLinkConnection>;
  featuresConnection?: Maybe<FeatureConnection>;
  filterPartners?: Maybe<FilterPartners>;
  gene?: Maybe<Gene>;
  geneFamiliesConnection?: Maybe<GeneFamilyConnection>;
  genes?: Maybe<Array<Maybe<Gene>>>;
  heroUnit?: Maybe<HeroUnit>;
  heroUnitsConnection?: Maybe<HeroUnitConnection>;
  highlights?: Maybe<Highlights>;
  homePage?: Maybe<HomePage>;
  homeView: HomeView;
  identityVerification?: Maybe<IdentityVerification>;
  identityVerificationsConnection?: Maybe<IdentityVerificationConnection>;
  invoice?: Maybe<Invoice>;
  job: Job;
  jobs: Array<Job>;
  markdown?: Maybe<MarkdownContent>;
  marketingCategories: Array<MarketingCollectionCategory>;
  marketingCollection?: Maybe<MarketingCollection>;
  marketingCollections: Array<MarketingCollection>;
  matchArtist?: Maybe<Array<Maybe<Artist>>>;
  matchConnection?: Maybe<MatchConnection>;
  matchPartner?: Maybe<Array<Maybe<Partner>>>;
  me?: Maybe<Me>;
  node?: Maybe<Node>;
  notificationPreferences: Array<NotificationPreference>;
  notificationsConnection?: Maybe<NotificationConnection>;
  orderedSet?: Maybe<OrderedSet>;
  orderedSets?: Maybe<Array<Maybe<OrderedSet>>>;
  orderedSetsConnection?: Maybe<OrderedSetConnection>;
  page: Page;
  pagesConnection?: Maybe<PageConnection>;
  partner?: Maybe<Partner>;
  /** @deprecated Prefer `partner.documentsConnection` */
  partnerArtistDocumentsConnection?: Maybe<PartnerArtistDocumentConnection>;
  /** @deprecated This is only for use in resolving stitched queries, not for first-class client use. */
  partnerArtworks?: Maybe<ArtworkConnection>;
  partnerCategories?: Maybe<Array<Maybe<PartnerCategory>>>;
  partnerCategory?: Maybe<PartnerCategory>;
  /** @deprecated Prefer `partner.documentsConnection` */
  partnerShowDocumentsConnection?: Maybe<PartnerShowDocumentConnection>;
  partnersConnection?: Maybe<PartnerConnection>;
  phoneNumber?: Maybe<PhoneNumberType>;
  previewSavedSearch?: Maybe<PreviewSavedSearch>;
  profile?: Maybe<Profile>;
  profilesConnection?: Maybe<ProfileConnection>;
  purchase?: Maybe<Purchase>;
  purchasesConnection?: Maybe<PurchasesConnection>;
  recentlySoldArtworks?: Maybe<RecentlySoldArtworkTypeConnection>;
  requestLocation?: Maybe<RequestLocation>;
  sale?: Maybe<Sale>;
  saleAgreement: SaleAgreement;
  saleAgreementsConnection?: Maybe<SaleAgreementConnection>;
  saleArtwork?: Maybe<SaleArtwork>;
  saleArtworksConnection?: Maybe<SaleArtworksConnection>;
  salesConnection?: Maybe<SaleConnection>;
  searchConnection?: Maybe<SearchableConnection>;
  seoExperimentArtists?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  shortcut?: Maybe<Shortcut>;
  show?: Maybe<Show>;
  showsConnection?: Maybe<ShowConnection>;
  staticContent?: Maybe<StaticContent>;
  system?: Maybe<System>;
  tag?: Maybe<Tag>;
  targetSupply?: Maybe<TargetSupply>;
  user?: Maybe<User>;
  usersConnection?: Maybe<UserConnection>;
  vanityURLEntity?: Maybe<VanityUrlEntityType>;
  verifyAddress?: Maybe<VerifyAddressPayload>;
  verifyUser?: Maybe<VerifyUser>;
  viewingRoom?: Maybe<ViewingRoom>;
  /** @deprecated Use viewingRoomsConnection */
  viewingRooms?: Maybe<ViewingRoomConnection>;
  viewingRoomsConnection?: Maybe<ViewingRoomsConnection>;
};


export type Viewer_Do_Not_Use_ConversationArgs = {
  id: Scalars['String']['input'];
};


export type ViewerArticleArgs = {
  id: Scalars['String']['input'];
};


export type ViewerArticlesArgs = {
  auctionID?: InputMaybe<Scalars['String']['input']>;
  authorID?: InputMaybe<Scalars['String']['input']>;
  channelID?: InputMaybe<Scalars['String']['input']>;
  featured?: InputMaybe<Scalars['Boolean']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  layout?: InputMaybe<ArticleLayout>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  omit?: InputMaybe<Array<Scalars['String']['input']>>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  showID?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<ArticleSorts>;
};


export type ViewerArticlesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  channelId?: InputMaybe<Scalars['String']['input']>;
  featured?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  inEditorialFeed?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  layout?: InputMaybe<ArticleLayout>;
  omit?: InputMaybe<Array<Scalars['String']['input']>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<ArticleSorts>;
};


export type ViewerArtistArgs = {
  id: Scalars['String']['input'];
};


export type ViewerArtistSeriesArgs = {
  id: Scalars['ID']['input'];
};


export type ViewerArtistSeriesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  artistID?: InputMaybe<Scalars['ID']['input']>;
  artworkID?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  excludeIDs?: InputMaybe<Array<Scalars['ID']['input']>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type ViewerArtistsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  slugs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sort?: InputMaybe<ArtistSorts>;
};


export type ViewerArtistsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  letter?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  slugs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sort?: InputMaybe<ArtistSorts>;
  term?: InputMaybe<Scalars['String']['input']>;
};


export type ViewerArtworkArgs = {
  id: Scalars['String']['input'];
};


export type ViewerArtworkImportArgs = {
  id: Scalars['String']['input'];
};


export type ViewerArtworkResultArgs = {
  id: Scalars['String']['input'];
};


export type ViewerArtworksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  respectParamsOrder?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ViewerArtworksConnectionArgs = {
  acquireable?: InputMaybe<Scalars['Boolean']['input']>;
  additionalGeneIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  after?: InputMaybe<Scalars['String']['input']>;
  aggregationPartnerCities?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  aggregations?: InputMaybe<Array<InputMaybe<ArtworkAggregation>>>;
  artistID?: InputMaybe<Scalars['String']['input']>;
  artistIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  artistNationalities?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  artistSeriesID?: InputMaybe<Scalars['String']['input']>;
  artistSeriesIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  artworkIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  atAuction?: InputMaybe<Scalars['Boolean']['input']>;
  attributionClass?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  availability?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  color?: InputMaybe<Scalars['String']['input']>;
  colors?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dimensionRange?: InputMaybe<Scalars['String']['input']>;
  disableNotForSaleSorting?: InputMaybe<Scalars['Boolean']['input']>;
  excludeArtworkIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  extraAggregationGeneIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forSale?: InputMaybe<Scalars['Boolean']['input']>;
  framed?: InputMaybe<Scalars['Boolean']['input']>;
  geneID?: InputMaybe<Scalars['String']['input']>;
  geneIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  height?: InputMaybe<Scalars['String']['input']>;
  importSources?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  includeAllJSON?: InputMaybe<Scalars['Boolean']['input']>;
  includeArtworksByFollowedArtists?: InputMaybe<Scalars['Boolean']['input']>;
  includeMediumFilterInAggregation?: InputMaybe<Scalars['Boolean']['input']>;
  includeUnpublished?: InputMaybe<Scalars['Boolean']['input']>;
  input?: InputMaybe<FilterArtworksInput>;
  inquireableOnly?: InputMaybe<Scalars['Boolean']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  keywordMatchExact?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locationCities?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  majorPeriods?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  marketable?: InputMaybe<Scalars['Boolean']['input']>;
  marketingCollectionID?: InputMaybe<Scalars['String']['input']>;
  materialsTerms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  medium?: InputMaybe<Scalars['String']['input']>;
  offerable?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  partnerCities?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  partnerID?: InputMaybe<Scalars['ID']['input']>;
  partnerIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  period?: InputMaybe<Scalars['String']['input']>;
  periods?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  priceRange?: InputMaybe<Scalars['String']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  saleID?: InputMaybe<Scalars['ID']['input']>;
  showID?: InputMaybe<Scalars['String']['input']>;
  signed?: InputMaybe<Scalars['Boolean']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sizes?: InputMaybe<Array<InputMaybe<ArtworkSizes>>>;
  sold?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  tagID?: InputMaybe<Scalars['String']['input']>;
  visibilityLevel?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['String']['input']>;
};


export type ViewerArtworksForUserArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  excludeArtworkIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  excludeDislikedArtworks?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeBackfill: Scalars['Boolean']['input'];
  last?: InputMaybe<Scalars['Int']['input']>;
  marketable?: InputMaybe<Scalars['Boolean']['input']>;
  maxWorksPerArtist?: InputMaybe<Scalars['Int']['input']>;
  onlyAtAuction?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};


export type ViewerAuctionResultArgs = {
  id: Scalars['String']['input'];
};


export type ViewerAuthorArgs = {
  id: Scalars['String']['input'];
};


export type ViewerBankAccountArgs = {
  id: Scalars['String']['input'];
};


export type ViewerChannelArgs = {
  id: Scalars['ID']['input'];
};


export type ViewerCitiesArgs = {
  featured?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ViewerCityArgs = {
  near?: InputMaybe<Near>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type ViewerCollectionArgs = {
  id: Scalars['String']['input'];
  userID: Scalars['String']['input'];
};


export type ViewerCollectorProfileArgs = {
  userID?: InputMaybe<Scalars['String']['input']>;
};


export type ViewerCollectorProfilesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  partnerID?: InputMaybe<Scalars['ID']['input']>;
  term?: InputMaybe<Scalars['String']['input']>;
};


export type ViewerCommerceOrdersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  buyerId?: InputMaybe<Scalars['String']['input']>;
  buyerType?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  impulseConversationId?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  mode?: InputMaybe<CommerceOrderModeEnum>;
  sellerId?: InputMaybe<Scalars['String']['input']>;
  sellerType?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<CommerceOrderConnectionSortEnum>;
  state?: InputMaybe<CommerceOrderStateEnum>;
  states?: InputMaybe<Array<CommerceOrderStateEnum>>;
};


export type ViewerConversationArgs = {
  id: Scalars['String']['input'];
};


export type ViewerConversationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  artistId?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  dismissed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  fromId?: InputMaybe<Scalars['String']['input']>;
  hasMessage?: InputMaybe<Scalars['Boolean']['input']>;
  hasReply?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  partnerId?: InputMaybe<Scalars['String']['input']>;
  toBeReplied?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<ConversationsInputMode>;
};


export type ViewerCreditCardArgs = {
  id: Scalars['String']['input'];
};


export type ViewerCuratedMarketingCollectionsArgs = {
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type ViewerCuratedTrendingArtistsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type ViewerDiscoverArtworksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  curatedPicksSize?: InputMaybe<Scalars['Int']['input']>;
  excludeArtworkIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  likedArtworkIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  mltFields?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  osWeights?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};


export type ViewerDiscoveryCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type ViewerDiscoveryMarketingCollectionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type ViewerFairArgs = {
  id: Scalars['String']['input'];
};


export type ViewerFairOrganizerArgs = {
  id: Scalars['String']['input'];
};


export type ViewerFairsArgs = {
  fairOrganizerID?: InputMaybe<Scalars['String']['input']>;
  hasFullFeature?: InputMaybe<Scalars['Boolean']['input']>;
  hasHomepageSection?: InputMaybe<Scalars['Boolean']['input']>;
  hasListing?: InputMaybe<Scalars['Boolean']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  near?: InputMaybe<Near>;
  page?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<FairSorts>;
  status?: InputMaybe<EventStatus>;
};


export type ViewerFairsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  fairOrganizerID?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  hasFullFeature?: InputMaybe<Scalars['Boolean']['input']>;
  hasHomepageSection?: InputMaybe<Scalars['Boolean']['input']>;
  hasListing?: InputMaybe<Scalars['Boolean']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  near?: InputMaybe<Near>;
  sort?: InputMaybe<FairSorts>;
  status?: InputMaybe<EventStatus>;
  term?: InputMaybe<Scalars['String']['input']>;
};


export type ViewerFeatureArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type ViewerFeaturedFairsArgs = {
  includeBackfill?: InputMaybe<Scalars['Boolean']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type ViewerFeaturedLinksConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  term?: InputMaybe<Scalars['String']['input']>;
};


export type ViewerFeaturesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<FeatureSorts>;
  term?: InputMaybe<Scalars['String']['input']>;
};


export type ViewerFilterPartnersArgs = {
  aggregations: Array<InputMaybe<PartnersAggregation>>;
  defaultProfilePublic?: InputMaybe<Scalars['Boolean']['input']>;
  eligibleForCarousel?: InputMaybe<Scalars['Boolean']['input']>;
  eligibleForListing?: InputMaybe<Scalars['Boolean']['input']>;
  eligibleForPrimaryBucket?: InputMaybe<Scalars['Boolean']['input']>;
  eligibleForSecondaryBucket?: InputMaybe<Scalars['Boolean']['input']>;
  excludeFollowedPartners?: InputMaybe<Scalars['Boolean']['input']>;
  hasFullProfile?: InputMaybe<Scalars['Boolean']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  includePartnersNearIpBasedLocation?: InputMaybe<Scalars['Boolean']['input']>;
  includePartnersWithFollowedArtists?: InputMaybe<Scalars['Boolean']['input']>;
  maxDistance?: InputMaybe<Scalars['Int']['input']>;
  near?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  partnerCategories?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<PartnersSortType>;
  term?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Array<InputMaybe<PartnerClassification>>>;
};


export type ViewerGeneArgs = {
  id: Scalars['String']['input'];
};


export type ViewerGeneFamiliesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type ViewerGenesArgs = {
  size?: InputMaybe<Scalars['Int']['input']>;
  slugs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ViewerHeroUnitArgs = {
  id: Scalars['String']['input'];
};


export type ViewerHeroUnitsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  private?: InputMaybe<Scalars['Boolean']['input']>;
  term?: InputMaybe<Scalars['String']['input']>;
};


export type ViewerIdentityVerificationArgs = {
  id: Scalars['String']['input'];
};


export type ViewerIdentityVerificationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type ViewerInvoiceArgs = {
  token: Scalars['String']['input'];
};


export type ViewerJobArgs = {
  id: Scalars['ID']['input'];
};


export type ViewerMarkdownArgs = {
  content: Scalars['String']['input'];
};


export type ViewerMarketingCollectionArgs = {
  slug: Scalars['String']['input'];
};


export type ViewerMarketingCollectionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  artistID?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  categorySlug?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isFeaturedArtistContent?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  slugs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sort?: InputMaybe<MarketingCollectionsSorts>;
};


export type ViewerMatchArtistArgs = {
  excludeIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  term: Scalars['String']['input'];
};


export type ViewerMatchConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  entities?: InputMaybe<Array<SearchEntity>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  mode?: InputMaybe<SearchMode>;
  page?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  term: Scalars['String']['input'];
};


export type ViewerMatchPartnerArgs = {
  query: Scalars['String']['input'];
};


export type ViewerNodeArgs = {
  id: Scalars['ID']['input'];
};


export type ViewerNotificationPreferencesArgs = {
  authenticationToken?: InputMaybe<Scalars['String']['input']>;
};


export type ViewerNotificationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  notificationTypes?: InputMaybe<Array<InputMaybe<NotificationTypesEnum>>>;
};


export type ViewerOrderedSetArgs = {
  id: Scalars['String']['input'];
};


export type ViewerOrderedSetsArgs = {
  key: Scalars['String']['input'];
  public?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ViewerOrderedSetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  term?: InputMaybe<Scalars['String']['input']>;
};


export type ViewerPageArgs = {
  id: Scalars['ID']['input'];
};


export type ViewerPagesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  term?: InputMaybe<Scalars['String']['input']>;
};


export type ViewerPartnerArgs = {
  id: Scalars['String']['input'];
};


export type ViewerPartnerArtistDocumentsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  artistID: Scalars['String']['input'];
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  partnerID: Scalars['String']['input'];
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type ViewerPartnerArtworksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  partnerID: Scalars['String']['input'];
  private?: InputMaybe<Scalars['Boolean']['input']>;
  viewingRoomID?: InputMaybe<Scalars['String']['input']>;
};


export type ViewerPartnerCategoriesArgs = {
  categoryType?: InputMaybe<PartnerCategoryType>;
  internal?: InputMaybe<Scalars['Boolean']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type ViewerPartnerCategoryArgs = {
  id: Scalars['String']['input'];
};


export type ViewerPartnerShowDocumentsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  partnerID: Scalars['String']['input'];
  showID: Scalars['String']['input'];
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type ViewerPartnersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  defaultProfilePublic?: InputMaybe<Scalars['Boolean']['input']>;
  eligibleForListing?: InputMaybe<Scalars['Boolean']['input']>;
  excludeFollowedPartners?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  includePartnersNearIpBasedLocation?: InputMaybe<Scalars['Boolean']['input']>;
  includePartnersWithFollowedArtists?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  maxDistance?: InputMaybe<Scalars['Int']['input']>;
  near?: InputMaybe<Scalars['String']['input']>;
  partnerCategories?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sort?: InputMaybe<PartnersSortType>;
  type?: InputMaybe<Array<InputMaybe<PartnerClassification>>>;
};


export type ViewerPhoneNumberArgs = {
  phoneNumber: Scalars['String']['input'];
  regionCode?: InputMaybe<Scalars['String']['input']>;
};


export type ViewerPreviewSavedSearchArgs = {
  attributes?: InputMaybe<PreviewSavedSearchAttributes>;
};


export type ViewerProfileArgs = {
  id: Scalars['String']['input'];
};


export type ViewerProfilesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  term?: InputMaybe<Scalars['String']['input']>;
};


export type ViewerPurchaseArgs = {
  id: Scalars['String']['input'];
};


export type ViewerPurchasesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  artistId?: InputMaybe<Scalars['String']['input']>;
  artworkId?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  saleId?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type ViewerRecentlySoldArtworksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type ViewerRequestLocationArgs = {
  ip?: InputMaybe<Scalars['String']['input']>;
};


export type ViewerSaleArgs = {
  id: Scalars['String']['input'];
};


export type ViewerSaleAgreementArgs = {
  id: Scalars['ID']['input'];
};


export type ViewerSaleAgreementsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<SaleAgreementStatus>;
};


export type ViewerSaleArtworkArgs = {
  id: Scalars['String']['input'];
};


export type ViewerSaleArtworksConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  aggregations?: InputMaybe<Array<InputMaybe<SaleArtworkAggregation>>>;
  artistIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  biddableSale?: InputMaybe<Scalars['Boolean']['input']>;
  estimateRange?: InputMaybe<Scalars['String']['input']>;
  excludeClosedLots?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  geneIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  includeArtworksByFollowedArtists?: InputMaybe<Scalars['Boolean']['input']>;
  isAuction?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  liveSale?: InputMaybe<Scalars['Boolean']['input']>;
  marketable?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  saleID?: InputMaybe<Scalars['ID']['input']>;
  saleSlug?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type ViewerSalesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  auctionState?: InputMaybe<AuctionState>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  isAuction?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  live?: InputMaybe<Scalars['Boolean']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  registered?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<SaleSorts>;
  term?: InputMaybe<Scalars['String']['input']>;
};


export type ViewerSearchConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  aggregations?: InputMaybe<Array<InputMaybe<SearchAggregation>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  entities?: InputMaybe<Array<InputMaybe<SearchEntity>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  mode?: InputMaybe<SearchMode>;
  page?: InputMaybe<Scalars['Int']['input']>;
  query: Scalars['String']['input'];
};


export type ViewerShortcutArgs = {
  id: Scalars['ID']['input'];
};


export type ViewerShowArgs = {
  id: Scalars['String']['input'];
  includeAllShows?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ViewerShowsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  atAFair?: InputMaybe<Scalars['Boolean']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  displayable?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  hasLocation?: InputMaybe<Scalars['Boolean']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<ShowSorts>;
  status?: InputMaybe<EventStatus>;
  term?: InputMaybe<Scalars['String']['input']>;
};


export type ViewerStaticContentArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type ViewerTagArgs = {
  id: Scalars['String']['input'];
};


export type ViewerUserArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};


export type ViewerUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  term?: InputMaybe<Scalars['String']['input']>;
};


export type ViewerVanityUrlEntityArgs = {
  id: Scalars['String']['input'];
};


export type ViewerVerifyAddressArgs = {
  input: VerifyAddressInput;
};


export type ViewerVerifyUserArgs = {
  email: Scalars['String']['input'];
  recaptchaToken: Scalars['String']['input'];
};


export type ViewerViewingRoomArgs = {
  id: Scalars['ID']['input'];
};


export type ViewerViewingRoomsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  featured?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  partnerID?: InputMaybe<Scalars['ID']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  statuses?: InputMaybe<Array<ViewingRoomStatusEnum>>;
};


export type ViewerViewingRoomsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  featured?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  partnerID?: InputMaybe<Scalars['ID']['input']>;
  statuses?: InputMaybe<Array<ViewingRoomStatusEnum>>;
};

export type ViewingRoom = {
  __typename?: 'ViewingRoom';
  artworkIDs: Array<Scalars['String']['output']>;
  artworksConnection?: Maybe<ArtworkConnection>;
  body?: Maybe<Scalars['String']['output']>;
  distanceToClose?: Maybe<Scalars['String']['output']>;
  distanceToOpen?: Maybe<Scalars['String']['output']>;
  endAt?: Maybe<Scalars['String']['output']>;
  exhibitionPeriod?: Maybe<Scalars['String']['output']>;
  firstLiveAt?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use image field instead */
  heroImageURL?: Maybe<Scalars['String']['output']>;
  href?: Maybe<Scalars['String']['output']>;
  image?: Maybe<GravityArImage>;
  internalID: Scalars['ID']['output'];
  introStatement?: Maybe<Scalars['String']['output']>;
  partner?: Maybe<Partner>;
  partnerArtworksConnection?: Maybe<ArtworkConnection>;
  partnerID: Scalars['String']['output'];
  published: Scalars['Boolean']['output'];
  pullQuote?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  startAt?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  subsections: Array<ViewingRoomSubsection>;
  timeZone?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  viewingRoomArtworks: Array<ViewingRoomArtwork>;
};


export type ViewingRoomArtworksConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type ViewingRoomDistanceToCloseArgs = {
  short?: Scalars['Boolean']['input'];
};


export type ViewingRoomDistanceToOpenArgs = {
  short?: Scalars['Boolean']['input'];
};


export type ViewingRoomPartnerArtworksConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type ViewingRoomArtwork = {
  __typename?: 'ViewingRoomArtwork';
  artworkID: Scalars['ID']['output'];
  internalID: Scalars['ID']['output'];
  published: Scalars['Boolean']['output'];
};

export type ViewingRoomArtworkInput = {
  artworkID: Scalars['ID']['input'];
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  internalID?: InputMaybe<Scalars['ID']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
};

export type ViewingRoomAttributes = {
  body?: InputMaybe<Scalars['String']['input']>;
  endAt?: InputMaybe<Scalars['String']['input']>;
  introStatement?: InputMaybe<Scalars['String']['input']>;
  pullQuote?: InputMaybe<Scalars['String']['input']>;
  startAt?: InputMaybe<Scalars['String']['input']>;
  timeZone?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ViewingRoomConnection = {
  __typename?: 'ViewingRoomConnection';
  edges?: Maybe<Array<Maybe<ViewingRoomEdge>>>;
  pageCursors: PageCursors;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type ViewingRoomEdge = {
  __typename?: 'ViewingRoomEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<ViewingRoom>;
};

export type ViewingRoomOrErrorsUnion = Errors | ViewingRoom;

export type ViewingRoomPublishedNotificationItem = {
  __typename?: 'ViewingRoomPublishedNotificationItem';
  partner?: Maybe<Partner>;
  viewingRoomIDs?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  viewingRoomsConnection?: Maybe<ViewingRoomsConnection>;
};


export type ViewingRoomPublishedNotificationItemViewingRoomsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export enum ViewingRoomStatusEnum {
  Closed = 'closed',
  Draft = 'draft',
  Live = 'live',
  Scheduled = 'scheduled'
}

export type ViewingRoomSubsection = {
  __typename?: 'ViewingRoomSubsection';
  body?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  image?: Maybe<ArImage>;
  imageURL?: Maybe<Scalars['String']['output']>;
  internalID: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type ViewingRoomSubsectionAttributes = {
  body?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ViewingRoomSubsectionInput = {
  attributes?: InputMaybe<ViewingRoomSubsectionAttributes>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  image?: InputMaybe<ArImageInput>;
  internalID?: InputMaybe<Scalars['ID']['input']>;
};

export type ViewingRoomsConnection = {
  __typename?: 'ViewingRoomsConnection';
  edges?: Maybe<Array<Maybe<ViewingRoomsEdge>>>;
  pageCursors: PageCursors;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type ViewingRoomsEdge = {
  __typename?: 'ViewingRoomsEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<ViewingRoom>;
};

export enum Visibility {
  Listed = 'LISTED',
  Unlisted = 'UNLISTED'
}

export type WireTransfer = {
  __typename?: 'WireTransfer';
  isManualPayment: Scalars['Boolean']['output'];
};

export type YearRange = {
  __typename?: 'YearRange';
  endAt?: Maybe<Scalars['Int']['output']>;
  startAt?: Maybe<Scalars['Int']['output']>;
};

export type AddOrderedSetItemFailure = {
  __typename?: 'addOrderedSetItemFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type AddOrderedSetItemMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  geminiToken?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  itemId: Scalars['String']['input'];
  position?: InputMaybe<Scalars['Int']['input']>;
};

export type AddOrderedSetItemMutationPayload = {
  __typename?: 'addOrderedSetItemMutationPayload';
  addOrderedSetItemResponseOrError?: Maybe<AddOrderedSetItemResponseOrError>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type AddOrderedSetItemResponseOrError = AddOrderedSetItemFailure | AddOrderedSetItemSuccess;

export type AddOrderedSetItemSuccess = {
  __typename?: 'addOrderedSetItemSuccess';
  set?: Maybe<OrderedSet>;
  setItem?: Maybe<OrderedSetItem>;
};

export type AddUserRoleFailure = {
  __typename?: 'addUserRoleFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type AddUserRoleMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  role_type: Scalars['String']['input'];
};

export type AddUserRoleMutationPayload = {
  __typename?: 'addUserRoleMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  userOrError?: Maybe<AddUserRoleResponseOrError>;
};

export type AddUserRoleResponseOrError = AddUserRoleFailure | AddUserRoleSuccess;

export type AddUserRoleSuccess = {
  __typename?: 'addUserRoleSuccess';
  user?: Maybe<User>;
};

export enum AddressType {
  Business = 'BUSINESS',
  Other = 'OTHER',
  Temporary = 'TEMPORARY'
}

export enum ContactType {
  Admin = 'ADMIN',
  Partner = 'PARTNER'
}

export type CreateAlertInput = {
  acquireable?: InputMaybe<Scalars['Boolean']['input']>;
  additionalGeneIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  artistIDs: Array<InputMaybe<Scalars['String']['input']>>;
  artistSeriesIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  atAuction?: InputMaybe<Scalars['Boolean']['input']>;
  attributionClass?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  colors?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dimensionRange?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['String']['input']>;
  inquireableOnly?: InputMaybe<Scalars['Boolean']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  locationCities?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  majorPeriods?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  materialsTerms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  offerable?: InputMaybe<Scalars['Boolean']['input']>;
  partnerIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  priceRange?: InputMaybe<Scalars['String']['input']>;
  settings?: InputMaybe<AlertSettingsInput>;
  sizes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  width?: InputMaybe<Scalars['String']['input']>;
};

export type CreateAlertPayload = {
  __typename?: 'createAlertPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  responseOrError?: Maybe<CreateAlertResponseOrError>;
};

export type CreateCollectionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  shareableWithPartners?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CreateCollectionPayload = {
  __typename?: 'createCollectionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  responseOrError?: Maybe<CreateCollectionResponseOrError>;
};

export type CreateFeatureResponseOrError = CreateFeatureFailure | CreateFeatureSuccess;

export type CreateHeroUnitFailure = {
  __typename?: 'createHeroUnitFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type CreateHeroUnitResponseOrError = CreateHeroUnitFailure | CreateHeroUnitSuccess;

export type CreateHeroUnitSuccess = {
  __typename?: 'createHeroUnitSuccess';
  heroUnit?: Maybe<HeroUnit>;
};

export type CreateOrderedSetFailure = {
  __typename?: 'createOrderedSetFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type CreateOrderedSetResponseOrError = CreateOrderedSetFailure | CreateOrderedSetSuccess;

export type CreateOrderedSetSuccess = {
  __typename?: 'createOrderedSetSuccess';
  set?: Maybe<OrderedSet>;
};

export type CreatePartnerOfferFailure = {
  __typename?: 'createPartnerOfferFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type CreatePartnerOfferMutationInput = {
  artwork_id: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  discount_percentage: Scalars['Int']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
};

export type CreatePartnerOfferMutationPayload = {
  __typename?: 'createPartnerOfferMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  partnerOfferOrError?: Maybe<CreatePartnerOfferResponseOrError>;
};

export type CreatePartnerOfferResponseOrError = CreatePartnerOfferFailure | CreatePartnerOfferSuccess;

export type CreatePartnerOfferSuccess = {
  __typename?: 'createPartnerOfferSuccess';
  partner?: Maybe<Partner>;
  partnerOffer?: Maybe<PartnerOffer>;
};

export type CreatePurchaseInput = {
  artsyCommission?: InputMaybe<Scalars['Float']['input']>;
  artworkID?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  discoverAdminID?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  fairID?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  ownerID?: InputMaybe<Scalars['String']['input']>;
  ownerType?: InputMaybe<Scalars['String']['input']>;
  saleAdminID?: InputMaybe<Scalars['String']['input']>;
  saleDate?: InputMaybe<Scalars['String']['input']>;
  saleID?: InputMaybe<Scalars['String']['input']>;
  salePrice?: InputMaybe<Scalars['Float']['input']>;
  source?: InputMaybe<Scalars['String']['input']>;
  userID?: InputMaybe<Scalars['String']['input']>;
};

export type CreatePurchasePayload = {
  __typename?: 'createPurchasePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  responseOrError?: Maybe<CreatePurchaseResponseOrError>;
};

export type CreateUserAdminNoteFailure = {
  __typename?: 'createUserAdminNoteFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type CreateUserAdminNoteMutationInput = {
  body: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
};

export type CreateUserAdminNoteMutationPayload = {
  __typename?: 'createUserAdminNoteMutationPayload';
  adminNoteOrError?: Maybe<CreateUserAdminNoteResponseOrError>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type CreateUserAdminNoteResponseOrError = CreateUserAdminNoteFailure | CreateUserAdminNoteSuccess;

export type CreateUserAdminNoteSuccess = {
  __typename?: 'createUserAdminNoteSuccess';
  adminNote?: Maybe<UserAdminNotes>;
};

export type CreateUserInterestForUserFailure = {
  __typename?: 'createUserInterestForUserFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type CreateUserInterestForUserResponseOrError = CreateUserInterestForUserFailure | CreateUserInterestForUserSuccess;

export type CreateUserInterestForUserSuccess = {
  __typename?: 'createUserInterestForUserSuccess';
  user?: Maybe<User>;
  userInterest?: Maybe<UserInterest>;
};

export type DeleteAlertInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
};

export type DeleteAlertPayload = {
  __typename?: 'deleteAlertPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  responseOrError?: Maybe<DeleteAlertResponseOrError>;
};

export type DeleteCollectionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
};

export type DeleteCollectionPayload = {
  __typename?: 'deleteCollectionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  responseOrError?: Maybe<DeleteCollectionResponseOrError>;
};

export type DeleteHeroUnitFailure = {
  __typename?: 'deleteHeroUnitFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type DeleteHeroUnitMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
};

export type DeleteHeroUnitMutationPayload = {
  __typename?: 'deleteHeroUnitMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  heroUnitOrError?: Maybe<DeleteHeroUnitResponseOrError>;
};

export type DeleteHeroUnitResponseOrError = DeleteHeroUnitFailure | DeleteHeroUnitSuccess;

export type DeleteHeroUnitSuccess = {
  __typename?: 'deleteHeroUnitSuccess';
  heroUnit?: Maybe<HeroUnit>;
};

export type DeleteOrderedSetFailure = {
  __typename?: 'deleteOrderedSetFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type DeleteOrderedSetItemFailure = {
  __typename?: 'deleteOrderedSetItemFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type DeleteOrderedSetItemMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  itemId: Scalars['String']['input'];
};

export type DeleteOrderedSetItemMutationPayload = {
  __typename?: 'deleteOrderedSetItemMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deleteOrderedSetItemResponseOrError?: Maybe<DeleteOrderedSetItemResponseOrError>;
};

export type DeleteOrderedSetItemResponseOrError = DeleteOrderedSetItemFailure | DeleteOrderedSetItemSuccess;

export type DeleteOrderedSetItemSuccess = {
  __typename?: 'deleteOrderedSetItemSuccess';
  set?: Maybe<OrderedSet>;
  setItem?: Maybe<OrderedSetItem>;
};

export type DeleteOrderedSetMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
};

export type DeleteOrderedSetMutationPayload = {
  __typename?: 'deleteOrderedSetMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  orderedSetOrError?: Maybe<DeleteOrderedSetResponseOrError>;
};

export type DeleteOrderedSetResponseOrError = DeleteOrderedSetFailure | DeleteOrderedSetSuccess;

export type DeleteOrderedSetSuccess = {
  __typename?: 'deleteOrderedSetSuccess';
  set?: Maybe<OrderedSet>;
};

export type DeletePurchaseInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
};

export type DeletePurchasePayload = {
  __typename?: 'deletePurchasePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  responseOrError?: Maybe<DeletePurchaseResponseOrError>;
};

export type DeleteUserAdminNoteFailure = {
  __typename?: 'deleteUserAdminNoteFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type DeleteUserAdminNoteMutationInput = {
  adminNoteId: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
};

export type DeleteUserAdminNoteMutationPayload = {
  __typename?: 'deleteUserAdminNoteMutationPayload';
  adminNoteOrError?: Maybe<DeleteUserAdminNoteResponseOrError>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type DeleteUserAdminNoteResponseOrError = DeleteUserAdminNoteFailure | DeleteUserAdminNoteSuccess;

export type DeleteUserAdminNoteSuccess = {
  __typename?: 'deleteUserAdminNoteSuccess';
  adminNote?: Maybe<UserAdminNotes>;
};

export type DeleteUserInterestForUserFailure = {
  __typename?: 'deleteUserInterestForUserFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type DeleteUserInterestForUserResponseOrError = DeleteUserInterestForUserFailure | DeleteUserInterestForUserSuccess;

export type DeleteUserInterestForUserSuccess = {
  __typename?: 'deleteUserInterestForUserSuccess';
  user?: Maybe<User>;
  userInterest?: Maybe<UserInterest>;
};

export type DeleteUserRoleFailure = {
  __typename?: 'deleteUserRoleFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type DeleteUserRoleMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  role_type: Scalars['String']['input'];
};

export type DeleteUserRoleMutationPayload = {
  __typename?: 'deleteUserRoleMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  userOrError?: Maybe<DeleteUserRoleResponseOrError>;
};

export type DeleteUserRoleResponseOrError = DeleteUserRoleFailure | DeleteUserRoleSuccess;

export type DeleteUserRoleSuccess = {
  __typename?: 'deleteUserRoleSuccess';
  user?: Maybe<User>;
};

export type Dimensions = {
  __typename?: 'dimensions';
  cm?: Maybe<Scalars['String']['output']>;
  in?: Maybe<Scalars['String']['output']>;
};

export type PartnerBiographyBlurb = {
  __typename?: 'partnerBiographyBlurb';
  text?: Maybe<Scalars['String']['output']>;
};

export type Purchases = {
  __typename?: 'purchases';
  totalAuctionCount: Scalars['Int']['output'];
  totalPrivateSaleCount: Scalars['Int']['output'];
};

export type SetOrderFulfillmentOptionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  fulfillmentOption: FulfillmentOptionInput;
  id: Scalars['ID']['input'];
};

export type SetOrderFulfillmentOptionPayload = {
  __typename?: 'setOrderFulfillmentOptionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  orderOrError?: Maybe<OrderMutationResponse>;
};

export enum Sort {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StartIdentityVerificationMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  identityVerificationId: Scalars['String']['input'];
};

export type StartIdentityVerificationMutationPayload = {
  __typename?: 'startIdentityVerificationMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  startIdentityVerificationResponseOrError?: Maybe<StartIdentityVerificationResponseOrError>;
};

export type SubmitOrderInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  confirmationToken?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  oneTimeUse?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SubmitOrderPayload = {
  __typename?: 'submitOrderPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  orderOrError?: Maybe<OrderMutationResponse>;
};

export type UnsetOrderFulfillmentOptionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type UnsetOrderFulfillmentOptionPayload = {
  __typename?: 'unsetOrderFulfillmentOptionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  orderOrError?: Maybe<OrderMutationResponse>;
};

export type UnsetOrderPaymentMethodInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type UnsetOrderPaymentMethodPayload = {
  __typename?: 'unsetOrderPaymentMethodPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  orderOrError?: Maybe<OrderMutationResponse>;
};

export type UpdateAlertInput = {
  acquireable?: InputMaybe<Scalars['Boolean']['input']>;
  additionalGeneIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  artistIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  artistSeriesIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  atAuction?: InputMaybe<Scalars['Boolean']['input']>;
  attributionClass?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  colors?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dimensionRange?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  inquireableOnly?: InputMaybe<Scalars['Boolean']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  locationCities?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  majorPeriods?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  materialsTerms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  offerable?: InputMaybe<Scalars['Boolean']['input']>;
  partnerIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  priceRange?: InputMaybe<Scalars['String']['input']>;
  settings?: InputMaybe<AlertSettingsInput>;
  sizes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  width?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateAlertPayload = {
  __typename?: 'updateAlertPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  responseOrError?: Maybe<UpdateAlertResponseOrError>;
};

export type UpdateArtworkFailure = {
  __typename?: 'updateArtworkFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type UpdateArtworkResponseOrError = UpdateArtworkFailure | UpdateArtworkSuccess;

export type UpdateArtworkSuccess = {
  __typename?: 'updateArtworkSuccess';
  artwork?: Maybe<Artwork>;
};

export type UpdateCollectionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  private?: InputMaybe<Scalars['Boolean']['input']>;
  shareableWithPartners?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateCollectionPayload = {
  __typename?: 'updateCollectionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  responseOrError?: Maybe<UpdateCollectionResponseOrError>;
};

export type UpdateCollectorProfileResponseOrError = UpdateCollectorProfileFailure | UpdateCollectorProfileSuccess;

export type UpdateHeroUnitFailure = {
  __typename?: 'updateHeroUnitFailure';
  mutationError?: Maybe<GravityMutationError>;
};

export type UpdateHeroUnitResponseOrError = UpdateHeroUnitFailure | UpdateHeroUnitSuccess;

export type UpdateHeroUnitSuccess = {
  __typename?: 'updateHeroUnitSuccess';
  heroUnit?: Maybe<HeroUnit>;
};

export type UpdateMeCollectionsMutationInput = {
  attributes: Array<UpdateMeCollectionInput>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateMeCollectionsMutationPayload = {
  __typename?: 'updateMeCollectionsMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  meCollectionsOrErrors: Array<UpdateMeCollectionsResponseOrError>;
};

export type UpdateNotificationPreferencesMutationInput = {
  authenticationToken?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  subscriptionGroups: Array<NotificationPreferenceInput>;
};

export type UpdateNotificationPreferencesMutationPayload = {
  __typename?: 'updateNotificationPreferencesMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  notificationPreferences: Array<NotificationPreference>;
};


export type UpdateNotificationPreferencesMutationPayloadNotificationPreferencesArgs = {
  authenticationToken?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateOrderInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  creditCardWalletType?: InputMaybe<OrderCreditCardWalletTypeEnum>;
  id: Scalars['ID']['input'];
  paymentMethod?: InputMaybe<OrderPaymentMethodEnum>;
  stripeConfirmationToken?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateOrderPayload = {
  __typename?: 'updateOrderPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  orderOrError?: Maybe<OrderMutationResponse>;
};

export type UpdateOrderShippingAddressInput = {
  buyerPhoneNumber?: InputMaybe<Scalars['String']['input']>;
  buyerPhoneNumberCountryCode?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  shippingAddressLine1?: InputMaybe<Scalars['String']['input']>;
  shippingAddressLine2?: InputMaybe<Scalars['String']['input']>;
  shippingCity?: InputMaybe<Scalars['String']['input']>;
  shippingCountry?: InputMaybe<Scalars['String']['input']>;
  shippingName?: InputMaybe<Scalars['String']['input']>;
  shippingPostalCode?: InputMaybe<Scalars['String']['input']>;
  shippingRegion?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateOrderShippingAddressPayload = {
  __typename?: 'updateOrderShippingAddressPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  orderOrError?: Maybe<OrderMutationResponse>;
};

export type UpdatePurchaseInput = {
  artsyCommission?: InputMaybe<Scalars['Float']['input']>;
  artworkID?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  discoverAdminID?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  fairID?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  ownerID?: InputMaybe<Scalars['String']['input']>;
  ownerType?: InputMaybe<Scalars['String']['input']>;
  saleAdminID?: InputMaybe<Scalars['String']['input']>;
  saleDate?: InputMaybe<Scalars['String']['input']>;
  saleID?: InputMaybe<Scalars['String']['input']>;
  salePrice?: InputMaybe<Scalars['Float']['input']>;
  source?: InputMaybe<Scalars['String']['input']>;
  userID?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePurchasePayload = {
  __typename?: 'updatePurchasePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  responseOrError?: Maybe<UpdatePurchaseResponseOrError>;
};

export type UpdateQuizMutationInput = {
  artworkId: Scalars['String']['input'];
  clearInteraction?: InputMaybe<Scalars['Boolean']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['String']['input'];
};

export type UpdateQuizMutationPayload = {
  __typename?: 'updateQuizMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  quiz?: Maybe<Quiz>;
};

export type ActivityStatsToolQueryVariables = Exact<{
  partnerId: Scalars['String']['input'];
  period: AnalyticsQueryPeriodEnum;
}>;


export type ActivityStatsToolQuery = { __typename?: 'Query', partner?: { __typename?: 'Partner', name?: string | null, analytics?: { __typename?: 'AnalyticsPartnerStats', pageviews?: { __typename?: 'AnalyticsPageviewStats', totalCount: number, percentageChanged: number, artworkViews?: number | null, galleryViews?: number | null, showViews?: number | null, uniqueVisitors?: number | null, timeSeries: Array<{ __typename?: 'AnalyticsPartnerTimeSeriesStats', count?: number | null, startTime?: any | null, endTime?: any | null }> } | null } | null } | null };

export type ArtworksPublishedStatsToolQueryVariables = Exact<{
  partnerId: Scalars['String']['input'];
  period: AnalyticsQueryPeriodEnum;
}>;


export type ArtworksPublishedStatsToolQuery = { __typename?: 'Query', partner?: { __typename?: 'Partner', name?: string | null, analytics?: { __typename?: 'AnalyticsPartnerStats', artworkPublished?: { __typename?: 'AnalyticsPartnerStatsArtworksPublished', totalCount: number, percentageChanged: number, timeSeries: Array<{ __typename?: 'AnalyticsPartnerStatsArtworksPublishedTimeSeries', count?: number | null, startTime?: any | null, endTime?: any | null }> } | null } | null } | null };

export type AudienceStatsToolQueryVariables = Exact<{
  partnerId: Scalars['String']['input'];
  period: AnalyticsQueryPeriodEnum;
  includeGroupedStats: Scalars['Boolean']['input'];
}>;


export type AudienceStatsToolQuery = { __typename?: 'Query', partner?: { __typename?: 'Partner', name?: string | null, analytics?: { __typename?: 'AnalyticsPartnerStats', audience?: { __typename?: 'AnalyticsPartnerAudienceStats', uniqueVisitors: number, commercialVisitors: number } | null, topCountries?: { __typename?: 'AnalyticsGroupedStatsConnection', edges?: Array<{ __typename?: 'AnalyticsGroupedStatsEdge', node?: { __typename?: 'AnalyticsGroupedStats', groupedEntity: { __typename?: 'AnalyticsVisitorsByCountry', name: string, value: number, percent: number } | { __typename?: 'AnalyticsVisitorsByDevice' } | { __typename?: 'AnalyticsVisitorsByLandingPage' } | { __typename?: 'AnalyticsVisitorsByReferral' } } | null } | null> | null } | null, topDevices?: { __typename?: 'AnalyticsGroupedStatsConnection', edges?: Array<{ __typename?: 'AnalyticsGroupedStatsEdge', node?: { __typename?: 'AnalyticsGroupedStats', groupedEntity: { __typename?: 'AnalyticsVisitorsByCountry' } | { __typename?: 'AnalyticsVisitorsByDevice', name: string, value: number, percent: number } | { __typename?: 'AnalyticsVisitorsByLandingPage' } | { __typename?: 'AnalyticsVisitorsByReferral' } } | null } | null> | null } | null, topReferrals?: { __typename?: 'AnalyticsGroupedStatsConnection', edges?: Array<{ __typename?: 'AnalyticsGroupedStatsEdge', node?: { __typename?: 'AnalyticsGroupedStats', groupedEntity: { __typename?: 'AnalyticsVisitorsByCountry' } | { __typename?: 'AnalyticsVisitorsByDevice' } | { __typename?: 'AnalyticsVisitorsByLandingPage' } | { __typename?: 'AnalyticsVisitorsByReferral', name: string, value: number, percent: number } } | null } | null> | null } | null } | null } | null };

export type CompleteAnalyticsToolQueryVariables = Exact<{
  partnerId: Scalars['String']['input'];
  period: AnalyticsQueryPeriodEnum;
}>;


export type CompleteAnalyticsToolQuery = { __typename?: 'Query', partner?: { __typename?: 'Partner', name?: string | null, analytics?: { __typename?: 'AnalyticsPartnerStats', pageviews?: { __typename?: 'AnalyticsPageviewStats', totalCount: number, percentageChanged: number, artworkViews?: number | null, galleryViews?: number | null, showViews?: number | null, uniqueVisitors?: number | null } | null, sales?: { __typename?: 'AnalyticsPartnerSalesStats', orderCount: number, orderResponseTime?: number | null, totalCents: number, total?: string | null } | null, inquiry?: { __typename?: 'AnalyticsPartnerInquiryStats', inquiryCount: number, inquiryResponseTime?: number | null } | null, audience?: { __typename?: 'AnalyticsPartnerAudienceStats', uniqueVisitors: number, commercialVisitors: number } | null, artworkPublished?: { __typename?: 'AnalyticsPartnerStatsArtworksPublished', totalCount: number, percentageChanged: number } | null, rankedStats?: { __typename?: 'AnalyticsRankedStatsConnection', edges?: Array<{ __typename?: 'AnalyticsRankedStatsEdge', node?: { __typename?: 'AnalyticsRankedStats', value: number, entity?: { __typename: 'Artist' } | { __typename: 'Artwork', id: string, slug: string, title?: string | null, artist?: { __typename?: 'Artist', name?: string | null } | null } | { __typename: 'Show' } | { __typename: 'ViewingRoom' } | null } | null } | null> | null } | null } | null } | null };

export type InquiriesStatsToolQueryVariables = Exact<{
  partnerId: Scalars['String']['input'];
  period: AnalyticsQueryPeriodEnum;
}>;


export type InquiriesStatsToolQuery = { __typename?: 'Query', partner?: { __typename?: 'Partner', name?: string | null, analytics?: { __typename?: 'AnalyticsPartnerStats', inquiry?: { __typename?: 'AnalyticsPartnerInquiryStats', inquiryCount: number, inquiryResponseTime?: number | null, timeSeries?: Array<{ __typename?: 'AnalyticsPartnerInquiryCountTimeSeriesStats', count?: number | null, startTime?: any | null, endTime?: any | null }> | null } | null } | null } | null };

export type InquiryTimeSeriesQueryVariables = Exact<{
  partnerId: Scalars['String']['input'];
  period: AnalyticsQueryPeriodEnum;
  cumulative?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type InquiryTimeSeriesQuery = { __typename?: 'Query', partner?: { __typename?: 'Partner', name?: string | null, analytics?: { __typename?: 'AnalyticsPartnerStats', inquiry?: { __typename?: 'AnalyticsPartnerInquiryStats', inquiryCount: number, inquiryResponseTime?: number | null, timeSeries?: Array<{ __typename?: 'AnalyticsPartnerInquiryCountTimeSeriesStats', count?: number | null, startTime?: any | null, endTime?: any | null }> | null } | null } | null } | null };

export type SalesStatsToolQueryVariables = Exact<{
  partnerId: Scalars['String']['input'];
  period: AnalyticsQueryPeriodEnum;
}>;


export type SalesStatsToolQuery = { __typename?: 'Query', partner?: { __typename?: 'Partner', name?: string | null, analytics?: { __typename?: 'AnalyticsPartnerStats', sales?: { __typename?: 'AnalyticsPartnerSalesStats', orderCount: number, orderResponseTime?: number | null, totalCents: number, total?: string | null, timeSeries?: Array<{ __typename?: 'AnalyticsPartnerSalesTimeSeriesStats', startTime?: any | null, endTime?: any | null, count: number, countDisplay?: string | null }> | null } | null } | null } | null };

export type SalesTimeSeriesQueryVariables = Exact<{
  partnerId: Scalars['String']['input'];
  period: AnalyticsQueryPeriodEnum;
  cumulative?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type SalesTimeSeriesQuery = { __typename?: 'Query', partner?: { __typename?: 'Partner', name?: string | null, analytics?: { __typename?: 'AnalyticsPartnerStats', sales?: { __typename?: 'AnalyticsPartnerSalesStats', orderCount: number, orderResponseTime?: number | null, totalCents: number, total?: string | null, timeSeries?: Array<{ __typename?: 'AnalyticsPartnerSalesTimeSeriesStats', count?: number | null, total?: string | null, totalCents: number, startTime?: any | null, endTime?: any | null }> | null } | null } | null } | null };

export type TopArtworksToolQueryVariables = Exact<{
  partnerId: Scalars['String']['input'];
  period: AnalyticsQueryPeriodEnum;
  limit: Scalars['Int']['input'];
}>;


export type TopArtworksToolQuery = { __typename?: 'Query', partner?: { __typename?: 'Partner', name?: string | null, analytics?: { __typename?: 'AnalyticsPartnerStats', rankedStats?: { __typename?: 'AnalyticsRankedStatsConnection', edges?: Array<{ __typename?: 'AnalyticsRankedStatsEdge', node?: { __typename?: 'AnalyticsRankedStats', value: number, entity?: { __typename: 'Artist' } | { __typename: 'Artwork', id: string, slug: string, title?: string | null, isUnlisted: boolean, artist?: { __typename?: 'Artist', name?: string | null } | null, image?: { __typename?: 'Image', cropped?: { __typename?: 'CroppedImageUrl', url: string } | null } | null } | { __typename: 'Show' } | { __typename: 'ViewingRoom' } | null } | null } | null> | null } | null } | null } | null };

export type TopContentQueryVariables = Exact<{
  partnerId: Scalars['String']['input'];
  period: AnalyticsQueryPeriodEnum;
  objectType: AnalyticsRankedStatsObjectTypeEnum;
  first?: InputMaybe<Scalars['Int']['input']>;
}>;


export type TopContentQuery = { __typename?: 'Query', partner?: { __typename?: 'Partner', name?: string | null, analytics?: { __typename?: 'AnalyticsPartnerStats', rankedStats?: { __typename?: 'AnalyticsRankedStatsConnection', edges?: Array<{ __typename?: 'AnalyticsRankedStatsEdge', node?: { __typename?: 'AnalyticsRankedStats', value: number, entity?: { __typename: 'Artist', id: string, nationality?: string | null, birthday?: string | null, artistSlug: string, artistName?: string | null } | { __typename: 'Artwork', id: string, artworkSlug: string, artworkTitle?: string | null, artist?: { __typename?: 'Artist', name?: string | null } | null, image?: { __typename?: 'Image', url?: string | null } | null } | { __typename: 'Show', id: string, startAt?: string | null, endAt?: string | null, showSlug: string, showTitle?: string | null, showStatus?: string | null } | { __typename: 'ViewingRoom', published: boolean, viewingRoomSlug: string, viewingRoomTitle: string, viewingRoomStatus: string } | null } | null } | null> | null } | null } | null } | null };

export type VisitorDemographicsQueryVariables = Exact<{
  partnerId: Scalars['String']['input'];
  period: AnalyticsQueryPeriodEnum;
  metric: AnalyticsGroupedStatsMetricEnum;
  objectType: AnalyticsGroupedStatsObjectTypeEnum;
  first?: InputMaybe<Scalars['Int']['input']>;
}>;


export type VisitorDemographicsQuery = { __typename?: 'Query', partner?: { __typename?: 'Partner', name?: string | null, analytics?: { __typename?: 'AnalyticsPartnerStats', groupedStats?: { __typename?: 'AnalyticsGroupedStatsConnection', edges?: Array<{ __typename?: 'AnalyticsGroupedStatsEdge', node?: { __typename?: 'AnalyticsGroupedStats', groupedEntity: { __typename?: 'AnalyticsVisitorsByCountry', metric: string, name: string, percent: number, type: string, value: number } | { __typename?: 'AnalyticsVisitorsByDevice', metric: string, name: string, percent: number, type: string, value: number } | { __typename?: 'AnalyticsVisitorsByLandingPage', metric: string, name: string, percent: number, type: string, value: number } | { __typename?: 'AnalyticsVisitorsByReferral', metric: string, name: string, percent: number, type: string, value: number } } | null } | null> | null } | null } | null } | null };


export const ActivityStatsToolQueryDocument = gql`
    query activityStatsToolQuery($partnerId: String!, $period: AnalyticsQueryPeriodEnum!) {
  partner(id: $partnerId) {
    name
    analytics {
      pageviews(period: $period) {
        totalCount
        percentageChanged
        artworkViews
        galleryViews
        showViews
        uniqueVisitors
        timeSeries {
          count
          startTime
          endTime
        }
      }
    }
  }
}
    `;
export const ArtworksPublishedStatsToolQueryDocument = gql`
    query artworksPublishedStatsToolQuery($partnerId: String!, $period: AnalyticsQueryPeriodEnum!) {
  partner(id: $partnerId) {
    name
    analytics {
      artworkPublished(period: $period) {
        totalCount
        percentageChanged
        timeSeries(cumulative: false) {
          count
          startTime
          endTime
        }
      }
    }
  }
}
    `;
export const AudienceStatsToolQueryDocument = gql`
    query audienceStatsToolQuery($partnerId: String!, $period: AnalyticsQueryPeriodEnum!, $includeGroupedStats: Boolean!) {
  partner(id: $partnerId) {
    name
    analytics {
      audience(period: $period) {
        uniqueVisitors
        commercialVisitors
      }
      topCountries: groupedStats(
        metric: VISITOR_BY_LOCATION
        period: $period
        objectType: COUNTRY
        first: 10
      ) @include(if: $includeGroupedStats) {
        edges {
          node {
            groupedEntity {
              ... on AnalyticsVisitorsByCountry {
                name
                value
                percent
              }
            }
          }
        }
      }
      topDevices: groupedStats(
        metric: VISITOR_BY_DEVICE
        period: $period
        objectType: DEVICE
        first: 10
      ) @include(if: $includeGroupedStats) {
        edges {
          node {
            groupedEntity {
              ... on AnalyticsVisitorsByDevice {
                name
                value
                percent
              }
            }
          }
        }
      }
      topReferrals: groupedStats(
        metric: VISITOR_BY_REFERRAL
        period: $period
        objectType: REFERRAL
        first: 10
      ) @include(if: $includeGroupedStats) {
        edges {
          node {
            groupedEntity {
              ... on AnalyticsVisitorsByReferral {
                name
                value
                percent
              }
            }
          }
        }
      }
    }
  }
}
    `;
export const CompleteAnalyticsToolQueryDocument = gql`
    query completeAnalyticsToolQuery($partnerId: String!, $period: AnalyticsQueryPeriodEnum!) {
  partner(id: $partnerId) {
    name
    analytics {
      pageviews(period: $period) {
        totalCount
        percentageChanged
        artworkViews
        galleryViews
        showViews
        uniqueVisitors
      }
      sales(period: $period) {
        orderCount
        orderResponseTime
        totalCents
        total
      }
      inquiry(period: $period) {
        inquiryCount
        inquiryResponseTime
      }
      audience(period: $period) {
        uniqueVisitors
        commercialVisitors
      }
      artworkPublished(period: $period) {
        totalCount
        percentageChanged
      }
      rankedStats(objectType: ARTWORK, period: $period, first: 10) {
        edges {
          node {
            value
            entity {
              __typename
              ... on Artwork {
                id
                slug
                title
                artist {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
}
    `;
export const InquiriesStatsToolQueryDocument = gql`
    query inquiriesStatsToolQuery($partnerId: String!, $period: AnalyticsQueryPeriodEnum!) {
  partner(id: $partnerId) {
    name
    analytics {
      inquiry(period: $period) {
        inquiryCount
        inquiryResponseTime
        timeSeries(cumulative: false) {
          count
          startTime
          endTime
        }
      }
    }
  }
}
    `;
export const InquiryTimeSeriesQueryDocument = gql`
    query inquiryTimeSeriesQuery($partnerId: String!, $period: AnalyticsQueryPeriodEnum!, $cumulative: Boolean) {
  partner(id: $partnerId) {
    name
    analytics {
      inquiry(period: $period) {
        inquiryCount
        inquiryResponseTime
        timeSeries(cumulative: $cumulative) {
          count
          startTime
          endTime
        }
      }
    }
  }
}
    `;
export const SalesStatsToolQueryDocument = gql`
    query salesStatsToolQuery($partnerId: String!, $period: AnalyticsQueryPeriodEnum!) {
  partner(id: $partnerId) {
    name
    analytics {
      sales(period: $period) {
        orderCount
        orderResponseTime
        totalCents
        total
        timeSeries(cumulative: true) {
          startTime
          endTime
          count: totalCents
          countDisplay: total
        }
      }
    }
  }
}
    `;
export const SalesTimeSeriesQueryDocument = gql`
    query salesTimeSeriesQuery($partnerId: String!, $period: AnalyticsQueryPeriodEnum!, $cumulative: Boolean) {
  partner(id: $partnerId) {
    name
    analytics {
      sales(period: $period) {
        orderCount
        orderResponseTime
        totalCents
        total
        timeSeries(cumulative: $cumulative) {
          count
          total
          totalCents
          startTime
          endTime
        }
      }
    }
  }
}
    `;
export const TopArtworksToolQueryDocument = gql`
    query topArtworksToolQuery($partnerId: String!, $period: AnalyticsQueryPeriodEnum!, $limit: Int!) {
  partner(id: $partnerId) {
    name
    analytics {
      rankedStats(objectType: ARTWORK, period: $period, first: $limit) {
        edges {
          node {
            value
            entity {
              __typename
              ... on Artwork {
                id
                slug
                title
                artist {
                  name
                }
                image {
                  cropped(width: 300, height: 300) {
                    url
                  }
                }
                isUnlisted
              }
            }
          }
        }
      }
    }
  }
}
    `;
export const TopContentQueryDocument = gql`
    query topContentQuery($partnerId: String!, $period: AnalyticsQueryPeriodEnum!, $objectType: AnalyticsRankedStatsObjectTypeEnum!, $first: Int) {
  partner(id: $partnerId) {
    name
    analytics {
      rankedStats(period: $period, objectType: $objectType, first: $first) {
        edges {
          node {
            value
            entity {
              __typename
              ... on Artwork {
                id
                artworkSlug: slug
                artworkTitle: title
                artist {
                  name
                }
                image {
                  url
                }
              }
              ... on Show {
                id
                showSlug: slug
                showTitle: name
                startAt
                endAt
                showStatus: status
              }
              ... on Artist {
                id
                artistSlug: slug
                artistName: name
                nationality
                birthday
              }
              ... on ViewingRoom {
                viewingRoomSlug: slug
                viewingRoomTitle: title
                viewingRoomStatus: status
                published
              }
            }
          }
        }
      }
    }
  }
}
    `;
export const VisitorDemographicsQueryDocument = gql`
    query visitorDemographicsQuery($partnerId: String!, $period: AnalyticsQueryPeriodEnum!, $metric: AnalyticsGroupedStatsMetricEnum!, $objectType: AnalyticsGroupedStatsObjectTypeEnum!, $first: Int) {
  partner(id: $partnerId) {
    name
    analytics {
      groupedStats(
        period: $period
        metric: $metric
        objectType: $objectType
        first: $first
      ) {
        edges {
          node {
            groupedEntity {
              ... on AnalyticsVisitorsByCountry {
                metric
                name
                percent
                type
                value
              }
              ... on AnalyticsVisitorsByDevice {
                metric
                name
                percent
                type
                value
              }
              ... on AnalyticsVisitorsByReferral {
                metric
                name
                percent
                type
                value
              }
              ... on AnalyticsVisitorsByLandingPage {
                metric
                name
                percent
                type
                value
              }
            }
          }
        }
      }
    }
  }
}
    `;