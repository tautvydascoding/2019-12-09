

<!-- Modal -->
<div class="modal fade" id="registration" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Registracija</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
          <div class="col">
              <form action="createDoctor.php" method="post">
                   <div class="form-group">
                         <input type="text" class="form-control" name="name" placeholder="Doctor name" required>
                   </div>
                   <div class="form-group">
                         <input type="text" class="form-control" name="lastname" placeholder="Doctor lastname">
                   </div>
                   <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                   <button type="submit" class="btn btn-primary">Kurti naują gydytoją</button>
               </form>
          </div>
      </div>
    </div>
  </div>
</div>
