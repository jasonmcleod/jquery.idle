## jQuery.Idle

Simple script to notify you when the mouse has been inactive over a particular element for a customized period of time.

### Stupid simple example:

    $(document).ready(function() {  
      $("#content").idle(
        function() { 
          // When idle
          $("#content").fadeTo("slow",.1);
        }, 
        function() {
          // When active again
          $("#content").fadeTo("fast",1);
        }, 
        { after: 2000 }
      );
    });

### API:

    $(selector).idle( onidle [, onactive, options])

**The following are all valid ways to call this plugin:**

* `$(selector).idle( onidle )`
* `$(selector).idle( onidle, options )`
* `$(selector).idle( onidle, onactive )`
* `$(selector).idle( onidle, onactive, options )`

You can globally override options before calling `idle` like this:

    jQuery.fn.idle.defaults.active = 2500; // 2.5 seconds

### Options:

_**`key`** ( `default` )_

* **`after`** ( `5000` ):  
Number of milliseconds without movement before an element is considered idle
* **`interval`** ( `100` ):  
Number of milliseconds between tests for movement