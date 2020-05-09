import { observable, action } from 'mobx'

export class MiscStore {
  @observable usingCommonNickname = true

  @action setUsingCommonNickname = (state: boolean): void => {
    this.usingCommonNickname = state
  }
}

export const miscStore = new MiscStore()
