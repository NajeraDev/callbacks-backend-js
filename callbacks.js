// Practica:
// Objetivo: Plasmar en funciones y callbacks el oroces de aplicación de kodemia
// 1.- Entrevista
// 2.- Oferta
// 3.- Inscripción
// 4.- Asistir a clase
//
// Materia prima: El Koder
// - entrevistado
// - Ofertado
// - inscrito
// - enClase


//declaracion de clase

const koder = {
    Entrevistado: false,
    Ofertado: false,
    Inscrito: false,
    enClase: false,
};

//declaracion de funciones

function entrevistar(koderAentrevistar, cb) {
    koderAentrevistar.Entrevistado = true;
    let error = null;
    if (koderAentrevistar.Entrevistado === false) {
        error = 'No se pudo entrevistar';
    }
    cb(error, koderAentrevistar)
}

function ofertar(koderAofertar, cb) {
    koderAofertar.Ofertado = true;
    let error = null;
    if (koderAofertar.Ofertado === false) {
        error = 'No se pudo ofertar';
    }
    cb(error, koderAofertar)
}

function inscribir(koderAInscribir, cb) {
    koderAInscribir.Inscrito = true;
    let error = null;
    if (koderAInscribir.Inscrito === false) {
        error = 'No se pudo inscribir';
    }
    cb(error, koderAInscribir)
}

function meterAClase(koderAMeter, cb) {
    koderAMeter.enClase = true;
    let error = null;
    if (koderAMeter.Entrevistado === false) {
        error = 'No se pudo meter a clase';
    }
    cb(error, koderAMeter)
}

//Desplegado

entrevistar(koder, (errorDeEntrevista, koderEntrevistado) => {
    if (errorDeEntrevista) {
      console.error("Error de entrevista:", errorDeEntrevista);
      return; 
    }
    console.log('Entrevistado')

    ofertar(koderEntrevistado, (errorDeOferta, koderOfertado) => {
      if (errorDeOferta) {
        console.error("Error de oferta:", errorDeOferta);
        return;
      }
        console.log('ofertado')

      inscribir(koderOfertado, (errorDeInscripcion, koderInscrito) => {
        if (errorDeInscripcion) {
          console.error("Error de inscripcion:", errorDeInscripcion);
          return;
        }
        console.log('Inscrito')

        meterAClase(koderInscrito, (errorDeMetida, koderMetido) =>{
            if(errorDeMetida){
                console.error("Error de metida a clase: ", errorDeMetida)
                return;
            }
            console.log('Koder en Clase')

            console.log("KODER KODEANDO", koderMetido);
        })


        
      });
    });
  });