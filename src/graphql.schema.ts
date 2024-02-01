
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export abstract class IQuery {
    abstract me(): Nullable<User> | Promise<Nullable<User>>;
}

export class User {
    id: string;
    username: string;
    password: string;
    displayName?: Nullable<string>;
}

type Nullable<T> = T | null;
