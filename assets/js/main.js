// document.addEventListener('DOMContentLoaded', function() {
//   // Mobile menu toggle
//   const menuToggle = document.querySelector('.menu-toggle');
//   const mainNav = document.querySelector('.main-nav');
  
//   if (menuToggle) {
//     menuToggle.addEventListener('click', function() {
//       mainNav.classList.toggle('active');
//       this.classList.toggle('active');
//     });
//   }
  
//   // Smooth scrolling for anchor links
//   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//       e.preventDefault();
      
//       const target = document.querySelector(this.getAttribute('href'));
//       if (target) {
//         window.scrollTo({
//           top: target.offsetTop - 70,
//           behavior: 'smooth'
//         });
//       }
//     });
//   });
  
//   // Initialize any interactive demos
//   initializeDemos();
// });

// function initializeDemos() {
//   // Example: Initialize a Plotly chart if it exists
//   const plotlyDemo = document.getElementById('plotly-demo');
//   if (plotlyDemo) {
//     const x = [];
//     const y = [];
    
//     for (let i = 0; i < 100; i++) {
//       x.push(i);
//       y.push(Math.sin(i/10) * Math.exp(-i/50));
//     }
    
//     Plotly.newPlot('plotly-demo', [{
//       x: x,
//       y: y,
//       type: 'scatter',
//       mode: 'lines',
//       line: {color: '#0366d6'}
//     }], {
//       margin: {t: 0},
//       xaxis: {title: 'Time'},
//       yaxis: {title: 'Value'}
//     });
//   }
// }
