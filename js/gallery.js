$(document).ready(function(){
  $('ul.first').bsPhotoGallery({
    "classes" : "col-lg-2 col-md-4 col-sm-3 col-xs-4 col-xxs-12",
    "hasModal" : true
  });
  
});

// $(document).ready(function(){
//    $('li img').on('click',function(){
//         var src = $(this).attr('src');
//         var img = '<img src="' + src + '" class="img-responsive"/>';
//         $('#myModal').modal();
//         $('#myModal').on('shown.bs.modal', function(){
//             $('#myModal .modal-body').html(img);
//         });
//         $('#myModal').on('hidden.bs.modal', function(){
//             $('#myModal .modal-body').html('');
//         });
//    });
// })