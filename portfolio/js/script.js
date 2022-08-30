function generatePdf(){
    const element = document.getElementById("resume");
    var opt = {
        margin: 1,
        filename: 'Michael_Oracion.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().from(element).set(opt).save();
}