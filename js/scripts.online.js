<script>
function getRandom(min, max){
return Math.floor(Math.random() * (max - min + 1)) + min;
}
document.getElementById('user-page').innerHTML = getRandom(5,15);
</script>