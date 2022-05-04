var disjuntor = 0;

function clicar () {
    if (disjuntor === 0) {
        document.getElementById('luz').src='../images/lampada on.png'
        document.getElementById('interruptor').src='../images/switch on.png'
        console.log(disjuntor, 'acendeu')
        disjuntor = 1;
        console.log('disjuntor recebe', disjuntor)
    }
    else {
        disjuntor == 1
        document.getElementById('luz').src='../images/Lampada off.png'
        document.getElementById('interruptor').src='../images/switch off.png'
        console.log(disjuntor, 'apagou')      
        disjuntor = 0;
        console.log('disjuntor recebe',  disjuntor)
    }
}