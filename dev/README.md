## Optimizations

Grunt has been used to build the project.
Check out gruntjs.org for installation and usage help.

After installing Grunt run default ```$grunt``` command to uglify and minify js, css and html files.

### 1.Critical Rendering Path (index.html)
- Optimized images
- Inlined CSS in index.html
- Minified files (js, css, html)
- Async render blocking css
- Optimized web fonts load
- Moved scripts to the end of the file

### 2. Improving Frame Rate (pizza.html)
* A faster WEB API (like ```getElementById()```, ```getElementsByClassName()```) were used for DOM call, instead of ```querySelector()```
* Variable declarations and direct DOM calls were moved outside the ```for``` loops.
* Number of moving pizzas in background were optimized to a minimum, necessary to fill the screen.
* Batched layout and style triggering in 2 separate loops to minimize jank for Scrolling.
* Added ```transform: translateZ(0);``` to the ```.mover``` in views/css/style.css.
* Add hardware accelerated CSS in views/css/style.css to ```.mover```


### 3. Computation Efficiency (pizza.html)
- Used preset fixed values for pizzas style changing loop, instead of computated (layout triggering) ones.
