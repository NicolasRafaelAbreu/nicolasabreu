window.addEventListener('load', inicio);

function inicio(){
    document.querySelector("#btnNovedades").addEventListener('click', enviarCorreoNuevoServicio);
    document.querySelector("#btnStandar").addEventListener('click', enviarCorreoStandar)
    document.querySelector("#btnPlatinum").addEventListener('click', enviarCorreoPlatinum)
    document.querySelector("#btnSelect").addEventListener('click', enviarCorreoSelect);
    document.querySelector("#btnNuevoServicio").addEventListener('click', enviarCorreoNuevoServicio);
    document.querySelector("#btnMetodosDePagos").addEventListener('click', enviarCorreoMetodosDePagos);
    document.querySelector("#btnMasInformacion").addEventListener('click', enviarCorreoMasInformacion);
    document.querySelector("#btnTrabajaConNosotros").addEventListener('click', enviarCorreoTrabajaConNosotros);
};

function enviarCorreoStandar(){
    const sendEmail = document.getElementById('correoA');
    let asunto = "Más información sobre la cuenta STANDAR!";
    let mensaje = `Buenos días, quería obtener más información sobre la cuenta STANDAR. Aguardo su respuesta, saludos cordiales.`
    sendEmail.setAttribute(
        'href',
        `mailTo:Nicolas.abreuromero@outlook.es?subject=${asunto}&body=${mensaje}`
    );
    sendEmail.click();
};
function enviarCorreoPlatinum(){
    const sendEmail = document.getElementById('correoA');
    let asunto = "Más información sobre la cuenta PLATINUM!";
    let mensaje = `Buenos días, quería obtener más información sobre la cuenta PLATINUM. Aguardo su respuesta, saludos cordiales.`
    sendEmail.setAttribute(
        'href',
        `mailTo:Nicolas.abreuromero@outlook.es?subject=${asunto}&body=${mensaje}`
    );
    sendEmail.click();
};
function enviarCorreoSelect(){
    const sendEmail = document.getElementById('correoA');
    let asunto = "Más información sobre la cuenta SELECT!";
    let mensaje = `Buenos días, quería obtener más información sobre la cuenta SELECT. Aguardo su respuesta, saludos cordiales.`
    sendEmail.setAttribute(
        'href',
        `mailTo:Nicolas.abreuromero@outlook.es?subject=${asunto}&body=${mensaje}`
    );
    sendEmail.click();
};
function enviarCorreoNuevoServicio(){
    const sendEmail = document.getElementById('correoA');
    let asunto = "Solicitud de nuevo servicio!";
    let mensaje = `Buenos días, quería obtener un nuevo servicio. Aguardo su respuesta, saludos cordiales.`
    sendEmail.setAttribute(
        'href',
        `mailTo:Nicolas.abreuromero@outlook.es?subject=${asunto}&body=${mensaje}`
    );
    sendEmail.click();
};
function enviarCorreoMetodosDePagos(){
    const sendEmail = document.getElementById('correoA');
    let asunto = "Métodos de pagos!";
    let mensaje = `Buenos días, quería obtener más información sobre los métodos de pago. Aguardo su respuesta, saludos cordiales.`
    sendEmail.setAttribute(
        'href',
        `mailTo:Nicolas.abreuromero@outlook.es?subject=${asunto}&body=${mensaje}`
    );
    sendEmail.click();
};
function enviarCorreoMasInformacion(){
    const sendEmail = document.getElementById('correoA');
    let asunto = "Más información!";
    let mensaje = `Buenos días, quería obtener más información de como funcionan las webs. Aguardo su respuesta, saludos cordiales.`
    sendEmail.setAttribute(
        'href',
        `mailTo:Nicolas.abreuromero@outlook.es?subject=${asunto}&body=${mensaje}`
    );
    sendEmail.click();
};
function enviarCorreoTrabajaConNosotros(){
    const sendEmail = document.getElementById('correoA');
    let asunto = "Trabaja con nosotros!";
    let mensaje = `Buenos días, adjunto mi CV porque esoty interesado en formar parte del equipo. Aguardo su respuesta, saludos cordiales.`
    sendEmail.setAttribute(
        'href',
        `mailTo:Nicolas.abreuromero@outlook.es?subject=${asunto}&body=${mensaje}`
    );
    sendEmail.click();
};