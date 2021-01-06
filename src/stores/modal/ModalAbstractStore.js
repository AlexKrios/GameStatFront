import {observable} from "mobx";

export default class ModalAbstractStore {
  @observable
  loading = true;

  fields = new Map();

  config = {};

  formId = "";

  constructor() {

  }
}
