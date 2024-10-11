const frm=document.querySelector('#frm');
const output=document.querySelector('#output');
const spinner=document.querySelector('#loading');
const qrcodeElement=document.querySelector('#qrcode');
const btnsave=document.querySelector('#btn-save');
function generateQRCode(e){
    e.preventDefault();
    const url=document.querySelector('#url').value;
    const size=document.querySelector('#size').value;
    const clrDark=document.querySelector('#colorDark').value;
    const clrLight=document.querySelector('#colorLight').value;
    if(url===""){
        alert("Please Enter The Website Link")
    }else{
        spinner.style.display="flex";
        setTimeout(()=>{
            spinner.style.display="none";
            qrcodeElement.innerHTML="";
            const qrcode=new QRCode('qrcode',{
                text: url,
                width: size,
                height: size,
                colorDark: clrDark,
                colorLight: clrLight,
                correctLevel: QRCode.CorrectLevel.H
            })
        },1000)
    }
}
frm.addEventListener('submit',generateQRCode);
btnsave.addEventListener('click', () => {
    const imgSrc = qrcodeElement.querySelector('img').src;
    const link = document.createElement('a');
    link.href = imgSrc;
    link.download = 'qrcode.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
