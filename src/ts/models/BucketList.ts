export interface IBucketListItem {
  task: string;
  completed: boolean;
}

export class BucketListItem {
  constructor(public task: string, public completed: boolean) {}
}
