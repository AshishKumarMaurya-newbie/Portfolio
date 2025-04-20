let counter = 0;
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('counterButton').addEventListener('click', function() {
        counter++;
        document.getElementById('counterDisplay').textContent = counter;
    });
    document.getElementById('resetButton').addEventListener('click',function(){
        counter=0;
        document.getElementById('counterDisplay').textContent=counter;
    })
});


