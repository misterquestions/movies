import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type CreateMovieInput = {
  cover: Scalars['Upload'];
  name: Scalars['String'];
  rating: Scalars['Float'];
  releaseDate: Scalars['DateTime'];
};

export type FindMovieByIdInput = {
  id: Scalars['Int'];
};

export type Movie = {
  __typename?: 'Movie';
  coverURL: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  rating: Scalars['Float'];
  releaseDate: Scalars['DateTime'];
};

export type MovieResponse = {
  __typename?: 'MovieResponse';
  code?: Maybe<Scalars['Int']>;
  data?: Maybe<Movie>;
  message?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createMovie: MovieResponse;
};


export type MutationCreateMovieArgs = {
  input: CreateMovieInput;
};

export type Query = {
  __typename?: 'Query';
  movie: MovieResponse;
};


export type QueryMovieArgs = {
  input: FindMovieByIdInput;
};

export type CreateMovieMutationVariables = Exact<{
  input: CreateMovieInput;
}>;


export type CreateMovieMutation = { __typename?: 'Mutation', createMovie: { __typename?: 'MovieResponse', code?: number | null | undefined, message?: string | null | undefined, data?: { __typename?: 'Movie', id: number, name: string, coverURL: string, rating: number, releaseDate: any } | null | undefined } };


export const CreateMovieDocument = gql`
    mutation createMovie($input: CreateMovieInput!) {
  createMovie(input: $input) {
    code
    message
    data {
      id
      name
      coverURL
      rating
      releaseDate
    }
  }
}
    `;
export type CreateMovieMutationFn = Apollo.MutationFunction<CreateMovieMutation, CreateMovieMutationVariables>;

/**
 * __useCreateMovieMutation__
 *
 * To run a mutation, you first call `useCreateMovieMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMovieMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMovieMutation, { data, loading, error }] = useCreateMovieMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateMovieMutation(baseOptions?: Apollo.MutationHookOptions<CreateMovieMutation, CreateMovieMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMovieMutation, CreateMovieMutationVariables>(CreateMovieDocument, options);
      }
export type CreateMovieMutationHookResult = ReturnType<typeof useCreateMovieMutation>;
export type CreateMovieMutationResult = Apollo.MutationResult<CreateMovieMutation>;
export type CreateMovieMutationOptions = Apollo.BaseMutationOptions<CreateMovieMutation, CreateMovieMutationVariables>;