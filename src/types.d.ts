import { ISlot } from './db/slot/slot.model'

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
  sample2: Sample2Response
}

export type MutationSample1Args = {
  channel: Scalars['String']
  text: Scalars['String']
}

export type MutationSample2Args = {
  slotId: Scalars['String']
  position: Position
  typeName: Scalars['String']
}

export type Position = {
  __typename?: 'Position'
  x?: Maybe<Scalars['Float']>
  y?: Maybe<Scalars['Float']>
  angle?: Maybe<Scalars['Float']>
}

export type PositionArgs = {
  x?: Maybe<Scalars['Float']>
  y?: Maybe<Scalars['Float']>
  angle?: Maybe<Scalars['Float']>
}

export type Query = {
  __typename?: 'Query'
  sample1: SampleResponse
  sample2: Sample2Response
}

export type QuerySample1Args = {
  name: Scalars['String']
}

export type QuerySample2Args = {
  slotId: Scalars['String']
}

export type Sample2Response = {
  __typename?: 'Sample2Response'
  slot?: Maybe<ISlot>
  errorMessage?: Maybe<Scalars['String']>
  error: Scalars['Boolean']
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

export type Slot = {
  __typename?: 'Slot'
  slotId: Scalars['String']
  position: Position
  state?: Maybe<SlotState>
  typeName: Scalars['String']
}

export enum SlotState {
  Free = 'FREE',
  Occupied = 'OCCUPIED',
  Sold = 'SOLD',
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
  uid: Scalars['String']
  userName: Scalars['String']
  email: Scalars['String']
}
