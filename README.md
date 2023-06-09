# @svelte-kits/store

A drop-in replacement for Svelte stores, safe to use with [SvelteKit](https://kit.svelte.dev/) SSR.
This library exposes the same API as `svelte/store`, but with modified stores that are safe to use with SvelteKit SSR.

This library has `svelte` and `@sveltejs/kit` as peer dependencies, so it cannot be used without SvelteKit.


## Installation

Install `@svelte-kits/store` with your favorite package manager.

```bash
$ npm install -D @svelte-kits/store
$ yarn add -D @svelte-kits/store
$ pnpm add -D @svelte-kits/store
```


## Usage/Examples

Since `@svelte-kits/store` is a drop-in replacement, just replace `svelte/store` with `@svelte-kits/store` in your code.
All of the original svelte stores are available, and the API is identical.

Some of the stores are modified to be safe to use with SvelteKit SSR.
`@svelte-kits/store` re-exports the rest of unmodified stores and types from `svelte/store` for convenience.

```diff
- import { get, writable, derived, type Updater } from "svelte/store";
+ import { get, writable, derived, type Updater } from "@svelte-kits/store";
  
  export const count = writable(0); // Safe to use with SSR!
```


## Why?
Shared stores are a great way to share state between components, but they can be tricky to use with SvelteKit SSR.
Since shared stores are global, if they are used in a long-running environment like a server, they can leak state between requests. 

SvelteKit explicitly documents that storing global variable [should be avoided](https://kit.svelte.dev/docs/state-management#avoid-shared-state-on-the-server), and there is active discussion ongoing about [the dangerous behavior of stores with SSR](https://github.com/sveltejs/kit/discussions/4339).

This library provides a drop-in replacement for Svelte stores that are safe to use with SvelteKit SSR, by providing a new set of stores that are isolated to each request.
With `@svelte-kits/store`, you can safely use shared stores in your SvelteKit app in the same manner as before, without keeping them in context manually or worrying about leaking state between requests.

Currently only the `writable` store is modified since it is the only store that is not safe to use with SSR. Other stores does not save any state within them, so they are fundamentally safe to use with SSR (unless you kept a state in a global variable somewhere else in your code. please don't to that).


## Implementation detail

Since it is relatively simple, you can have a look at [code](https://github.com/svelte-kits/store/blob/main/src/lib/writable.ts).


## Authors

- [@devunt](https://github.com/devunt)


## Contributing

Contributions are always welcome!
