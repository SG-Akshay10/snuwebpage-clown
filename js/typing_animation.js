// Type writing text //
$(document).ready(function(){
  $('#typewriteText').typewrite({
      actions: [
          {delay: 300},
          {type: "Tamil Nadu's first State Private Univerity after 90 years"},          
          {delay: 1500},
          {remove: {num: 57, type: 'World Class University'}}, 
          {type: 'World Class University'},         
          {delay: 2000},
          {remove: {num: 26, type: '230 Acres Lush Green Campus'}},
          {type: '230 Acres WiFi-enabled Lush Green Campus'},
          {delay: 300},     
          {remove: {num: 40}},  
      ]
  });
});

