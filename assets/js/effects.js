function toggler($Num) {
  var $flip, $panel
  $flip = "#flip" + $Num;
  $panel = "#panel" + $Num;

  $(document).ready(function(){
    $($flip).click(function(){
      $($panel).fadeToggle("2000");
    });
  });
}

toggler(0);
toggler(1);
toggler(2);
toggler(3);