export interface Query {
  sayBye: string
  sayHello: SayHelloResponse
}

export interface SayHelloQueryArgs {
  name: string
}

export interface SayHelloResponse {
  text: string
  error: boolean
}
