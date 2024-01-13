import { PostSequenceAttachment } from "../_components/ui/Editor/base/View";

export type PostContentSequenceFormat = (string | PostSequenceAttachment)[];

export class PostEntity {

  public _id?: string;

  public ownerIds: string[];
  public title: string;
  public content: PostContentSequenceFormat;
  public isPublic: boolean = false;
  public views: number = 0;

  constructor(ownerIds: string[], title: string, content: PostContentSequenceFormat) {
    this.ownerIds = ownerIds;
    this.title = title;
    this.content = content;
  }

}