$(document).ready(function(){

    function editDoctorAjax() {
        $('#edit_form').on('show.bs.modal', function (e) {
            // alert("veikia");
            var id = $(e.relatedTarget).data('id');
            console.log(id);
            $.ajax({
                type : 'post',
                url : 'getDoctor-ajax.php', //Here you will fetch records
                data :  {'id': id}, //Pass $id
                // data :  'id='+ id, //Pass $id
                success : function(data){
                    console.log(data);

                    var doctor = JSON.parse(data);
                     console.log(doctor);
                $('#hidden-id').val(doctor.ID);
                $("input[name='name']").val(doctor.Name);
                $("input[name='lastname']").val(doctor.LastName);//Show fetched data from database
            },
                error: function(e) {
                     //called when there is an error
                     //console.log(e.message);
                     $("#results").append( "Request failed: " + e );
                     console.log("NESUVEIKE!@@@");
               }
            });
         });
    }

editDoctorAjax();



    function deleteDoctorAjax() {
        $('.trinti').on('click', function (e) {
        var del_id= $(this).attr('id');
        var row = $(this).parent().parent();

        console.log(del_id);
        $.ajax({
            type : 'post',
            url : 'deleteDoctor-ajax.php', //Here you will fetch records
            data : {'del_id': del_id}, //Pass $id
            // data :  'id='+ id, //Pass $id
            success : function(data){
                        row.fadeOut().remove();
                    },
            error: function(e) {
                 //called when there is an error
                 //console.log(e.message);
                 $(".trinti").append( "Request failed: " + e );
                 console.log("NESUVEIKE!@@@");
           }
        });
    });

     };

deleteDoctorAjax();

});
