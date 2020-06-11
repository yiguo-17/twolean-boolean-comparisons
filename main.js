/********************
 * YOUR CODE BELOW! *
 ********************/
// functions

function moreThan5(num){
  return num > 5;
}

function topScore(yourscore, tpsc){
  return yourscore > tpsc;
}

function isInDanger(score){
  return score>= 60 && score <= 71;
}
function isCoasting(score){
  return score >= 72 && score <= 83;
}

function isSucceeding(score){
  return score >= 84 && score <= 92;
}

function isFailing(sc){
  return sc< 60;
}
function isAcing(sc){
  return sc> 92;
}

function isStudent(r){
  return r==='student';
}
function isTeacher(r){
  return r=== 'teacher';
}

function isAdmin(r){
  return r=== 'admin';
}
function isElementary(l){
  return l === 'elementary';
}

function differentPeople (n1 , n2){
  return n1===n2;
}
function isMiddleSchoolTeacher(r, l){
  return r==='teacher'&& l>= 6&& l<=8;
}
function notAnElementarySchoolAdministrator(l, r){
  return l != 'elementary'|| r!='admin';
}
/********************************************************************************************
 * CODE BELOW IS FOR EXPORTING THE VARIABLES AND FUNCTIONS YOU WROTE ABOVE TO MAIN.TEST.JS. *
 *                              THIS IS FOR INTERNAL USE ONLY                               *
 *                          DON'T ADD TO OR CHANGE ANYTHING BELOW!                          *
 ********************************************************************************************/


if (typeof moreThan5 === 'undefined') {
  moreThan5 = undefined;
}

if (typeof topScore === 'undefined') {
  topScore = undefined;
}

if (typeof isInDanger === 'undefined') {
  isInDanger = undefined;
}

if (typeof isCoasting === 'undefined') {
  isCoasting = undefined;
}

if (typeof isSucceeding === 'undefined') {
  isSucceeding = undefined;
}

if (typeof isFailing === 'undefined') {
  isFailing = undefined;
}

if (typeof isAcing === 'undefined') {
  isAcing = undefined;
}

if (typeof isStudent === 'undefined') {
  isStudent = undefined;
}

if (typeof isTeacher === 'undefined') {
  isTeacher = undefined;
}

if (typeof isAdmin === 'undefined') {
  isAdmin = undefined;
}

if (typeof isElementary === 'undefined') {
  isElementary = undefined;
}

if (typeof differentPeople === 'undefined') {
  differentPeople = undefined;
}

if (typeof notAnElementarySchoolAdministrator === 'undefined') {
  notAnElementarySchoolAdministrator = undefined;
}

if (typeof isMiddleSchoolTeacher === 'undefined') {
  isMiddleSchoolTeacher = undefined;
}


module.exports = {
  moreThan5,
  topScore,
  isInDanger,
  isCoasting,
  isSucceeding,
  isFailing,
  isAcing,
  isStudent,
  isTeacher,
  isAdmin,
  isElementary,
  differentPeople,
  notAnElementarySchoolAdministrator,
  isMiddleSchoolTeacher,
}
