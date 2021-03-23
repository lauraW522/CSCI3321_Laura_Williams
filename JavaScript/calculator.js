 
  var need_paren = false;
function kill_buttons() {
  document.getElementById("equal").disabled = true;
  document.getElementById("backspace").disabled = true;
  disable_func_ops();
  document.getElementById("inverse").disabled = false;
  document.getElementById("root").disabled = false;
  document.getElementById("MC").disabled = true;
  document.getElementById("MR").disabled = true;
  document.getElementById("M+").disabled = true;
  document.getElementById("M-").disabled = true;
  document.getElementById("MS").disabled = true;
}
function user_click(clicked_button) {
  var val_button = document.getElementById(clicked_button).value;
  enable_start();
  if (need_paren == true) {
     if (isNaN(val_button) == true && val_button != "-") {
        document.getElementById("screen").value += ")";
        need_paren = false;
     }
  }
  if (document.getElementById("screen").value == "") {
     document.getElementById("screen").value = val_button;  
  }
  else {
     document.getElementById("screen").value += val_button;
  }
  if (val_button == "¹/" || val_button == "√(") {
     disable_func_ops();
     document.getElementById("root").disabled = true;
     document.getElementById("inverse").disabled = true;
     enable_nums();
     if (val_button == "√(") {
        need_paren = true;
     }
  }
  else if (val_button == "÷" || val_button == "×" || val_button == "−" || val_button == "+") {
     disable_func_ops();
     enable_nums();
  }
  else if (val_button == "²") {
     disable_nums();
  }
  else {
     enable_func_ops();
     enable_nums();
  }
}
function enable_start() {
  document.getElementById("equal").disabled = false;
  document.getElementById("backspace").disabled = false;
}
function user_delete() {
  document.getElementById("screen").value = document.getElementById("screen").value.slice(0, document.getElementById("screen").value.length - 1);
  enable_func_ops();
  if (document.getElementById("screen").value == "") {
     clear_screen();
  }
}
function clear_screen() {
  document.getElementById("screen").value = "";
  disable_func_ops();
  document.getElementById("equal").disabled = true;
  document.getElementById("backspace").disabled = true;
  document.getElementById("inverse").disabled = false;
  document.getElementById("root").disabled = false;
  enable_nums()
  need_paren = false;
}
function disable_func_ops() {
  document.getElementById("percent").disabled = true;
  document.getElementById("square").disabled = true;
  document.getElementById("divide").disabled = true;
  document.getElementById("multiply").disabled = true;
  document.getElementById("minus").disabled = true;
  document.getElementById("plus").disabled = true;
}
function enable_func_ops() {
  document.getElementById("inverse").disabled = false;
  document.getElementById("percent").disabled = false;
  document.getElementById("square").disabled = false;
  document.getElementById("root").disabled = false;
  document.getElementById("divide").disabled = false;
  document.getElementById("multiply").disabled = false;
  document.getElementById("minus").disabled = false;
  document.getElementById("plus").disabled = false;
}
function disable_nums() {
  document.getElementById("zero").disabled = true;
  document.getElementById("decimal").disabled = true;
  document.getElementById("one").disabled = true;
  document.getElementById("two").disabled = true;
  document.getElementById("three").disabled = true;
  document.getElementById("four").disabled = true;
  document.getElementById("five").disabled = true;
  document.getElementById("six").disabled = true;
  document.getElementById("seven").disabled = true;
  document.getElementById("eight").disabled = true;
  document.getElementById("nine").disabled = true;
  document.getElementById("pos-neg").disabled = true;
}
function enable_nums() {
  document.getElementById("zero").disabled = false;
  document.getElementById("decimal").disabled = false;
  document.getElementById("one").disabled = false;
  document.getElementById("two").disabled = false;
  document.getElementById("three").disabled = false;
  document.getElementById("four").disabled = false;
  document.getElementById("five").disabled = false;
  document.getElementById("six").disabled = false;
  document.getElementById("seven").disabled = false;
  document.getElementById("eight").disabled = false;
  document.getElementById("nine").disabled = false;
  document.getElementById("pos-neg").disabled = false;
}
function disable_all() {
  document.getElementById("equal").disabled = true;
  document.getElementById("backspace").disabled = true;
  document.getElementById("root").disabled = true;
  document.getElementById("inverse").disabled = true;
  disable_nums();
  disable_func_ops();
}
function solve_expr() {
  var real_expr = "";
  var solution = "";
  if (need_paren == true) {
     document.getElementById("screen").value += ")";
     need_paren = false;
  }
  real_expr = document.getElementById("screen").value.replaceAll("¹/","1/");
  real_expr = real_expr.replaceAll('²',"**2");
  real_expr = real_expr.replaceAll('√',"Math.sqrt");
  real_expr = real_expr.replaceAll('÷','/');
  real_expr = real_expr.replaceAll('×','*');
  real_expr = real_expr.replaceAll('%',"/(100)");
  real_expr = real_expr.replaceAll('−','-');
  real_expr = real_expr.replaceAll('--','+');
  try {
     solution = eval(real_expr);
    } catch (e) {
    if (e instanceof SyntaxError) {
       solution = "Err";
       disable_all();
       }
    } 
  if (isNaN(solution)) {
     solution = "Err";
     disable_all();
  }
  document.getElementById("screen").value = solution;

}
