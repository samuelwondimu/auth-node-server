import { API } from "@editorjs/editorjs";
import ReactDOM from "react-dom";
import MembersOnlyComponent from "./MembersOnlyComponent";

export default class MembersOnly {
  public api: API;
  private data: any;
  public nodes: any;

  static get isReadOnlySupported() {
    return true;
  }

  static get contentless() {
    return true;
  }

  static get toolbox() {
    return {
      title: "Only Members",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z"/></svg>',
    };
  }

  constructor(params: any) {
    this.api = params.api;
    this.data = params.data;
    this.nodes = {
      holder: null,
    };
  }

  render() {
    const rootNode = document.createElement("div");
    this.nodes.holder = rootNode;

    ReactDOM.render(<MembersOnlyComponent />, rootNode);

    return this.nodes.holder;
  }

  save() {
    return this.data;
  }
}
