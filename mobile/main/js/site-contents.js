/**
*
**/

jQuery(document).ready(function($){
   jQuery.ajax({
         url:"menu.html",
         dataType:"html",
         async:false,
         success:function(data1){
         jQuery(".aemm-menu").html(data1);
         }
      });  
         jQuery.ajax({
         url:"/json/contents.json",
         dataType:"json",
         async:false,
         success:function(aemm_data){
         jQuery('.aemm-site-name').text(aemm_data.title);
         var image='<img src="'+aemm_data.logo.src+'"  alt="'+aemm_data.logo.alt+'" />';
         jQuery('.aemm-site-logo').html(image);
         }
      });  

});