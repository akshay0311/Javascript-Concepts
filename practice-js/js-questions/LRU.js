class Node {
    constructor(key, value) {
        this.key = key;
        this.val = value;
        this.next = null;
    }
}


class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.head = null;
        this.count = 0
    }

    get(key) {
        let prev = this.head;
        let curr = this.head.next;
        let foundVal, node;
        if (this.head.key !== key)
        {
            // traversing and removing the element 
            while(curr !== null) {
                if (curr.key === key) {
                    foundVal = curr.val;
                    prev.next = curr.next;
                    node = curr
                    break;
                }
                prev = prev.next;
                curr = curr.next;
            }
            if (!foundVal)
                return -1;
            // Adding the element to the start of the list 
            node.next = this.head;
            this.head = node;
            return foundVal;
        }
        return this.head.val 
    }

    put(key, value) {
        this.count += 1;
        if (this.capacity === 1 && this.count > 1) 
            return;

        // evicting last element if current element count > capacity 
        if (this.count > this.capacity) {
            let prev = this.head;
            let curr = this.head.next;
            while(curr.next !== null) {
                prev = prev.next;
                curr = curr.next;
            }
            prev.next = null;
        }

        // Adding new node to the list
        const node = new Node(key, value);
        if (this.head == null) {
            this.head = node;
        }
        else {
            let traverse = this.head;
            while(traverse.next !== null) {
                traverse = traverse.next;
            }
            traverse.next = node;
        }
    }

    display() {
        let traverse = this.head;
        while(traverse !== null) {
            console.log(traverse.val);
            traverse = traverse.next;
        }
    }
}

const cache = new LRUCache(3);

cache.put(1, "Akshay");
cache.put(2, "Amit");
console.log(cache.get(2)) // Output : Akshay
cache.put(3, "Patrik");
console.log(cache.get(1)) // Output : -1
console.log(cache.get(3))
 