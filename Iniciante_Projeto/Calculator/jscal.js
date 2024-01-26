function insert(num)
{
    var numero = document.getElementById('experiment').innerHTML;
    document.getElementById('experiment').innerHTML = numero + num;
}
function clean()
{
    document.getElementById('experiment').innerHTML = "";
}
function back()
{
    var experiment = document.getElementById('experiment').innerHTML;
    document.getElementById('experiment').innerHTML = experiment.substring(0, experiment.length -1);
}
function calculare()
{
    var experiment = document.getElementById('experiment').innerHTML;
    if(experiment)
    {
        document.getElementById('experiment').innerHTML = eval(experiment);
    }
    else
    {
        alert(" Erro! ... Nothing Typed ...")
    }
}