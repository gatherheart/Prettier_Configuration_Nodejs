export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Message = {
  __typename?: 'Message';
  channel: Scalars['String'];
  text: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  sendHello: Message;
};


export type MutationSendHelloArgs = {
  channel: Scalars['String'];
  text: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  sayBye: Scalars['String'];
  sayHello: SayHelloResponse;
};


export type QuerySayHelloArgs = {
  name: Scalars['String'];
};

export type SayHelloResponse = {
  __typename?: 'SayHelloResponse';
  text: Scalars['String'];
  error: Scalars['Boolean'];
};

export type Subscription = {
  __typename?: 'Subscription';
  message: Message;
};


export type SubscriptionMessageArgs = {
  channel: Scalars['String'];
};
