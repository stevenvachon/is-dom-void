import isDOMElement from "is-dom-element";
import voidElements from "void-elements";

export default element => isDOMElement(element) && element.tagName.toLowerCase() in voidElements;
