import { Observable } from 'rxjs';
import {SlidingWindowBatchProcessor} from './SlidingWindowBatchProcessor'

var node = document.createElement('li');
var label = document.createElement("Label");
label.id= 'label'
label.innerHTML = 'Counting..'
node.appendChild(label);
document.getElementById("list").appendChild(node);

var node2 = document.createElement('li');
var label2 = document.createElement("Label2");
label2.id= 'label2'
label2.innerHTML = 'Counting..'
node2.appendChild(label2);
document.getElementById("list").appendChild(node2);

var observable = Observable.create((observer: any) => {
   let counter = 1;
    (function timeout() {
        setTimeout(function () {
            if(counter <= 1000) {
                observer.next(counter++);
                timeout();
            }
        }, Math.ceil(Math.random() * 100));
    })();
});

const processor = new SlidingWindowBatchProcessor<number>((tasks, args) => {
    const element = document.getElementById("label2");
        element.innerHTML = `Batch Size ${tasks.length} , Messages Processed ${Math.max(...tasks)}`;    
}, null, 50);

// Approach 1
observable.subscribe(
    (x:any) => {
        const element = document.getElementById("label");
        element.innerHTML = `Items Processed ${x}`;    
    },
    (error: any) => logItem('Error: ' + error),
    () =>  logItem('Completed')
);

// Approach 2
observable.subscribe((x:any) => {
    console.log(`pushing element ${x}`);
    processor.push(x);
    },
    (error: any) => logItem('Error: ' + error),
    () =>  logItem('Completed')
);


function logItem(val:any) {
    var node = document.createElement('li');
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("list").appendChild(node);
}

