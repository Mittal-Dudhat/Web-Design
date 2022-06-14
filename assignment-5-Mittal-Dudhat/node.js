/**
* A Node represents an HTML Element. A node can have a tag name,
* a list of CSS classes and a list of children nodes.
*/
var count = 0;
var arr = [];
var temp;

class Node {

  constructor(tag, children, classes, id) {
    // Tag name of the node.
    this.tag = tag;
    // Array of CSS class names (string) on this element.
    this.classes = classes;
    // Array of Ids of the element.
    this.id = id;
    // Array of child nodes.
    this.children = children; // All children are of type Node
  }
  
  /**
  * Returns descendent nodes matching the selector. Selector can be 
  * a tag name or a CSS class name.
  * 
  * For example: 
  * 
  * 1.
  * <div> 
  *   <span id="span-1"></span>
  *   <span id="span-2"></span>
  *   <div>
  *     <span id="span-3"></span>
  *   </div>
  * </div>
  * Selector `span` should return 3 span nodes in this order
  * span-1 -> span-2 -> span-3.
  *
  * 2.
  * <div> 
  *   <span id="span-1" class="note"></span>
  *   <span id="span-2"></span>
  *   <div>
  *     <span id="span-3"></span>
  *   </div>
  * </div>
  * Selector `.note` should return one span node with `note` class.
  *
  * 3.
  * <div> 
  *   <span id="span-1"></span>
  *   <span id="span-2"></span>
  *   <article>
  *     <div>
  *       <span id="span-3"></span>
  *     </div>
  *   </article>
  * </div>
  * Selector `div span` should return three span nodes in this order
  * span-1 -> span-2 -> span-3.
  * 
  * @param {string} the selector string.
  * @returns {Array} Array of descendent nodes.
  * @public
  */
  search(selector) {
    temp = [];
    //getting deta from Node class
    let parentId = this.id;
    
    try {
      if (/\.?[a-z]/.test(selector)) {
        //creating empty array to store children
        let child = document.getElementById(parentId).querySelectorAll(selector);
        if(child.length <= 0){
          console.log("Not Found!");
        }
        if(count < child.length){
          arr.push(child[count].id);
          count++;
          this.search(selector);
        }
        else{
          temp = arr;
          count = 0;
          arr = [];
        }
        return temp;
      }
      else {
        console.log("enter valid input")
      }
    }
    catch(err) {
      console.log(err.message);
    }
  }
}

//Creating Objects
let spanNode1 = new Node("span", [], ["note"], "span-1");

let spanNode2 = new Node("span", [], [""], "span-2");

let spanNode3 = new Node("span", [], ["sub1-span3"], "span-3");
let p1 = new Node("p", [], ["sub1-p1 ,note"], "para-1");
let divNode2 = new Node("div", [p1, spanNode3], ["subContainer1"], "div-2");

let lable1 = new Node("lable", [], [""], "lbl-1");
let section1 = new Node("section", [lable1], [""], "sec-1");
let divNode3 = new Node("div", [section1, lable1], ["subContainer2"], "div-3");

let spanNode4 = new Node("span", [], ["mania"], "span-4");
let spanNode5 = new Node("span", [], ["note mania"], "span-5");
let divNode4 = new Node("div", [spanNode4, spanNode5], [""], "div-4");

let divNode1 = new Node("div",[ spanNode1, spanNode2, divNode2,divNode3,divNode4], ["mainContainer"], "div-1");

let randomNode = new Node("span", [], ["randomSpan"], "span-6");

let body = new Node("body",[divNode1, randomNode], [""], "content");

console.log("Started...");

// Test case 1 -
console.log(divNode1.search("span"));
// Test case 2 -
console.log(divNode1.search(".note"));
// Test case 3 -
console.log(divNode1.search("label"));
// Test case 4 -
console.log(p1.search(".note"));
// Test case 5 -
console.log(divNode1.search("div"));
// Test case 6 -
console.log(randomNode.search("div"));
// Test case 7 -
console.log(divNode2.search("section"));
// Test case 8 -
console.log(body.search());
// Error conditions need to be handled
// invalid input need to be handled
// Test case 9 -
console.log(body.search("section"));
// Test case 10 -
console.log(divNode1.search(".randomSpan"));
// randomSpan is some Span outside your divNode1 closed
