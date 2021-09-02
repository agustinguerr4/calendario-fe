import gql from 'graphql-tag'


export const CREATE_USER = gql` 
mutation createUser(
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
){
  createUser(input:{
    username: $username
    email: $email
    password: $password
    confirmPassword: $confirmPassword
  }){
    token
    username
    email
    _id
  }
}
`

export const LOGIN_USER = gql` 
mutation loginUser(
    $username: String!
    $password: String!
){
  loginUser(input:{
    username: $username
    password: $password
  }){
    token
    _id  
  }
}
`