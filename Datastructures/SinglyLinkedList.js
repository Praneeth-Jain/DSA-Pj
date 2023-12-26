class Node{
    constructor(val){
        this.val=val;
        this.next=null;
    }

}

class SinglyLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0
    }

    push(val){
        let list=new Node(val)
        if(!this.head){
            this.head=list;
            this.tail=this.head;
        }
        else{
        this.tail.next=list
        this.tail=list
        }
        this.length++
        return this;
    }

    travarse(){
        let current=this.head;
        while(current){
            console.log(current.val);
            current=current.next
        }
    }
    
    pop(){
        if(!this.head){
            return undefined;
        }
        let current=this.head;
        let pre=current;
        while(current.next!==null){
            pre=current
            current=current.next;
        }
        this.tail=pre;
        this.tail.next=null;
        this.length--
        if(this.length===0){
            this.head=null;
            this.tail=null;
        }
        return current;
    }

    shift(){
        if(!this.head){
            return undefined;
        }
        let current = this.head;
        this.head=current.next;
        this.length--;
        if(this.length==0){
            this.head=null;
            this.tail=null;
        }
        return current.val
        }

        unshift(val){
            let newNode=new Node(val)
            if(!this.head){
                this.head=newNode
                this.tail=newNode
            }
            else{
                newNode.next=this.head
                this.head=newNode
            }
            this.length++
            return newNode;
        }
        getVal(ind){
            let count=0;
            let current=this.head
            // console.log(this.length);
            if(ind<0 || ind >= this.length) return null
            // for(let i=0;i<this.length;i++){
            //     if(count===ind){
            //         return current.val;
            //     }
            //     else {
            //         current=current.next
            //         count++
            //     }
            // }
            while(ind!==count){
                current=current.next
                count++
            }
            return current
        }
        set(i,newVal){
            let node=this.getVal(i)
            if(!node){
                return false;
            }
            node.val=newVal
            return true;
        }
        insert(ind,val){
            if(ind <0 || ind>this.length){
                return false;
            }
            if(ind===0){
                this.unshift(val)
                return true;
            }
            if(ind===this.length){
                this.push(val)
                return true
            }
            let current=this.getVal(ind-1)
            let nextNode=current.next
            let insNode=new Node(val)
            current.next=insNode;
            insNode.next=nextNode;
            this.length++
            return true            
        }
        remove(ind){
            if(ind <0 || ind>=this.length){
                return false;
            }
            if(ind===this.length-1){
                return this.pop(ind)
            }
            if(ind===0){
                return this.shift()
            }
            let currentNode=this.getVal(ind-1)
            let rmvNode=currentNode.next
            currentNode.next=rmvNode.next
            this.length--
            return rmvNode
        }
        reverse(){
            let temp=this.head
            this.head=this.tail
            this.tail=temp
            let prev=this.tail
            let current=prev.next
            let next=current.next
            while(next.next!==null){
                current.next=prev
                next.next=current
            }
            return this;
        }
}

first=new SinglyLinkedList()
first.unshift("2")
first.unshift("1")
// console.log(first.set(3,"5"));
// console.log(first.getVal(2));
console.log(first.insert(2,"6"));
// console.log(first.remove(1));
console.log(first.reverse());
console.log(first);

