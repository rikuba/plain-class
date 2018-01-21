# plain-class [![Build Status](https://travis-ci.org/rikuba/plain-class.svg?branch=master)](https://travis-ci.org/rikuba/plain-class)

Base class to return a plain object from your class.

Even if it is required to be a plain object, you can use class syntax (also TypeScript).

## Install

```sh
npm install plain-class
```

## Example

### Redux with TypeScript

```typescript
import Plain from 'plain-class';

export class RequestPosts extends Plain {
  readonly type = 'REQUEST_POSTS';
  constructor(
    public subreddit: string
  ) { super(); }
}
```

```typescript
import Plain from 'plain-class';
import { Reducer } from 'redux';
import { Action } from '../actions';

class Posts extends Plain {
  isFetching = false;
  didInvalidate = false;
  items: string[] = [];
  lastUpdated: number | undefined = undefined;
}

const posts: Reducer<Posts> = (state = new Posts, action: Action) => {
  // ...
};
```

## License

Unlicense
