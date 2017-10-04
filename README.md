# dependency-algorithm


*A software package can be installed when all of its dependencies have been installed, or when it doesn't have any dependencies at all.

*When a package has already been resolved, we don't need to visit it again.

*A circular dependency is occurring when we see a software package more than once, unless that software package has all its dependencies resolved.


A couple of notes:

I took a lot of help from various blogs and wiki pages on depth-first-search, topological sorting, and recursion.

In addition, this code is still incomplete as far as running tests and error handling.  It can still accept packages that are not
properly formatted.  This was due to time constraints on the agreed upon deadline and the more advanced nature of the levels in 
this exercise.

I will say that I had a ton of fun wrapping my head around the logic and mathematics and feel accomplished in
being able to visualize the call stack enough to explain it.