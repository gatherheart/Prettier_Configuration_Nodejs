export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type Mutation = {
  __typename?: 'Mutation'
  sample1: SampleMessage
  sample2: User
}

export type MutationSample1Args = {
  channel: Scalars['String']
  text: Scalars['String']
}

export type MutationSample2Args = {
  userName: Scalars['String']
  email: Scalars['String']
}

export type Query = {
  __typename?: 'Query'
  sample1: SampleResponse
  sample2: Scalars['String']
}

export type QuerySample1Args = {
  name: Scalars['String']
}

export type SampleMessage = {
  __typename?: 'SampleMessage'
  channel: Scalars['String']
  text: Scalars['String']
}

export type SampleResponse = {
  __typename?: 'SampleResponse'
  text: Scalars['String']
  error: Scalars['Boolean']
}

export type Subscription = {
  __typename?: 'Subscription'
  sample1: SampleMessage
}

export type SubscriptionSample1Args = {
  channel: Scalars['String']
}

export type User = {
  __typename?: 'User'
  userName: Scalars['String']
  email: Scalars['String']
}
