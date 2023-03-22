export interface IBucketListItem {
  item: string;
  completed: boolean;
}

export class BucketListItem {
  constructor(public item: string, public completed: boolean) {}
}
