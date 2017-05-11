/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-05-10 21:01:58
 * @version $Id$
 */

var count = 1;
function add() {
var tbl = document.all.ci;
var rows = tbl.rows.length;
var tr = tbl.insertRow(rows);
 
var e_id = tr.insertCell(0);
e_id.innerHTML = '<input type="text" name="e_id' + count + '" size="7" />';
 
var class_id = tr.insertCell(1);
class_id.innerHTML = '';
 
var memo = tr.insertCell(2);
memo.innerHTML = '<input type="text" name="memo' + count + '" size="14" />';
 
var del = tr.insertCell(3);
del.innerHTML = '<input type="button" onclick="del(this)" value="删除" />';
count++;
}
 
function del(btn) {
var tr = btn.parentElement.parentElement;
var tbl = tr.parentElement;
if (tr.rowIndex >= 1) {
tbl.deleteRow(tr.rowIndex);
} else {
 
}
};