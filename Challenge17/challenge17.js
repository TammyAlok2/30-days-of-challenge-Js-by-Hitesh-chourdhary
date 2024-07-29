/****Day 17 : Data Structures ********/

// ACITIVITY 1 : lINKED LIST

 // TASK 1 : Implement a node to class to represent an element in a linked list wit properties value and next
 class Node{
    constructor(value){
        this.value = value;
        this.next = null;

    }

 }

  /*let head =new  Node(10);
 head.next = new Node(20);
 head.next.next = new Node(30);
 console.log(head.value)

 */
 // traversing in the linked list 
function traverse(head){
    while(head!=null){
        console.log(head.value);
        head=head.next;
     }
}

 // Task 2 : Implement a linked list class with methods to add a node to the end , remove a node from the end , and display all the nodes 
 class Node1{
    constructor(value){
        this.value = value;
        this.next = null
    }


 }
 function addNewNode(head,val){
    let newNode = new Node(val)
    if(head==null){
        head = newNode;
        return head;
    }
    let last = head;
    while(last.next!=null){
        last = last.next;

    }
   
    last.next = newNode;
    return head;
 }

 function deleteFromLast(head){
    let temp = head;
    let temp1 = head;
    while(temp.next!=null){
        temp1 =temp;
        temp  = temp.next;

    }
    temp1.next = null
    delete(temp) 
}
let head = new Node1(10);
head.next = new Node1(20)
//addNewNode(head,30)
deleteFromLast(head)

 
traverse(head)


 // ACTIVITY : STACK 
 // TASK 3 : Implement a stack class with methods push (add element) , pop(remove element) and peek view the top element
 class Stack{
    constructor(){
        this.stack=[]

    }

    // method to add an element to the stack 
    push(element){
        this.stack.push(element)
    }
    // method to remove an element from the stack 
    pop(){
        if(this.isEmpty()){
            throw new Error("Stack is empty cannot pop")

        }
        return this.stack.pop()
    }
    peek(){
        if(this.isEmpty()){
            throw new Error("Stack is empty cannot pop")

        }
        return this.stack[this.stack.length-1]
    }

    isEmpty(){
        return this.stack.length === 0
    }
    size(){
        return this.stack.length
    }


 }

 const stack = new Stack()
 stack.push(10)
 stack.push(29)
 stack.push(10)
 stack.push(29)

 console.log(stack.peek()); // Output: 
console.log(stack.pop());  // Output: 
console.log(stack.peek()); // Output:
console.log(stack.size()); // 


// task 4 : Use the stack class to reverse a string by pushing all the charcters onto the stack and the popping them off 
function reverseString(str){
    const stack = new Stack()
    for(let i =0;i<str.length;i++){
        stack.push(str[i])
    }
    let reverse = ""
    while(!stack.isEmpty()){
        reverse += stack.pop()
    }
    return reverse
    
}
const originalString = "Hello, World!";
const reversedString = reverseString(originalString);
console.log(reversedString);
// ACITVITY : 3 qUEUE
// TASK 5 : Implement a Queue class with methods enqueue (add element ) , deque (remove elemnet ) and front (view the first element )

class Queue{
    constructor(){
        this.queue  =[]

    }

    push(element){
        this.queue.push(element)
    }
    pop(){
        if(this.isEmpty()){
            return "Queue is empty";
        }
        return this.queue.shift()
    }
    front(){
        if(this.isEmpty()){
            return "queue is emepty "
        }
           return this.queue[0]
    }
    isEmpty(){
        return this.queue.length === 0

    }
    size() {
        return this.queue.length;
    }
}

const queue = new Queue()
queue.push(10)
queue.push(20)
queue.push(30)
console.log(queue.front())


// Task 6 : Use the queue to simulate printe queue where print jobs are added to queue and prcessed in order 


class Printer{
    constructor(){
        this.printQueue = new Queue()
    }
    addPrintJob(printJob) {
        this.printQueue.enqueue(printJob);
        console.log(`Print job added: ${printJob}`);
    }

    // Method to process the next print job in the queue
    processNextJob() {
        if (this.printQueue.isEmpty()) {
            console.log("No print jobs in the queue.");
        } else {
            const nextJob = this.printQueue.dequeue();
            console.log(`Processing print job: ${nextJob}`);
        }
    }

    // Method to view the next print job in the queue
    viewNextJob() {
        if (this.printQueue.isEmpty()) {
            console.log("No print jobs in the queue.");
        } else {
            const nextJob = this.printQueue.front();
            console.log(`Next print job in the queue: ${nextJob}`);
        }
    }

    // Method to check if the print queue is empty
    isQueueEmpty() {
        return this.printQueue.isEmpty();
    }

    // Method to get the number of print jobs in the queue
    getQueueSize() {
        return this.printQueue.size();
    }

}

 // ACTIVITY 4 : BINARY TREE : 
  // TASK 7 ; Implement a treeNode class to represent a node in binary tree with properites value, left and right
  
  class TreeNode {
    constructor(value) {
    this.value = value
    this.left = null
    this.right = null

    }
  }

  const rootNode = new TreeNode(1);
const leftNode = new TreeNode(2);
const rightNode = new TreeNode(3);

rootNode.left = leftNode;
rootNode.right = rightNode;

console.log(rootNode);

 // task 8 : Implement a binary tree class with methods for inserting values and performing in order traversal to display nodes 
 



 // ACITVITY 5 : GRAPH 
  // TASK 9 : Implment a grapth classa with methods to add vertices , add edges and perform bfs 