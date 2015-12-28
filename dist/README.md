## Website Performance Optimization portfolio project

Grunt has been used to uglify and minify css, as well as minify html.

####Part 1: Optimize PageSpeed Insights score for index.html
- Optimized images
- Async render blocking css
- Optimized web fonts load

####Part 2: Optimize Frames per Second in pizza.html

- Used preset fixed values for pizzas style changing loop, instead of computated (layout triggering) ones.

- Batched layout and style triggering in 2 separate loops to minimize jank for Scrolling.