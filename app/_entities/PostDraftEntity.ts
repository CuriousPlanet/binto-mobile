import { PostEntity } from "./PostEntity";

export default class PostDraftEntity extends PostEntity {
  public draftLastUpdated = new Date();
}