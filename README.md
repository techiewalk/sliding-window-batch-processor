# Sliding Window Batch Processor


[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

When it comes to dealing with high frequency updates debouncing/ throttling what pro developers usually do, but there are cases where we would like to container the messages in addition to batch them. We could achieve this many way, simple solution use RxJs. Using RxJs bufferTime we can pool messages and update UI frequently after certain interval, but what happens if these updates are too frequent/often that leaves UI rendering, only option is we have to increse the bufferTime. 

How about a solution that could slides bufferTime based on message arrival, I called this as SlidingWindow Batching.

### Tech

Dillinger uses a number of open source projects to work properly:

* [JavaScript] 
* [Html5] - Editor
* [VS Code] - Editor
* [WebPack] 


### Running


     npm install
     npm run start

License
----

MIT
