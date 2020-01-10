


<!-- Modal -->
<div class="modal fade" id="edit_form" tabindex="-1" role="dialog" aria-labelledby="edit_form" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Keisti</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
          <div class="col">
              <form action="editDoctor.php" method="post">
                  <input type="hidden" id="hidden-id" name="id" value="">
                   <div class="form-group">
                         <input type="text" class="form-control" name="name" value="" placeholder="Doctor name" required>
                   </div>
                   <div class="form-group">
                         <input type="text" class="form-control" name="lastname" value="" placeholder="Doctor lastname" required>
                   </div>
                   <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                   <button type="submit" class="btn btn-primary">Keisti</button>
               </form>
          </div>
      </div>
    </div>
  </div>
</div>
