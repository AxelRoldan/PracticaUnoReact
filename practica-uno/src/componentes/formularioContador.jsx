import React, {useState} from 'react'

export const FormularioContador = () => {

    const [contador, setContador] = useState(0)

    return (
        <div>

            <h1>INGRESE SUS DATOS EN EL FORMULARIO</h1>

            <form action="POST">
                <label htmlFor="nombre" className="bloque">Nombre</label>
                <input name="nombre" id="nombre" placeholder="ingrese nombre" className="bloque"></input>

                <label htmlFor="apellido" className="bloque">Apellido</label>
                <input name="apellido" id="apellido" placeholder="ingrese apellido" className="bloque"></input>

                <label htmlFor="casado" className="bloque">Casado</label>
                <label htmlFor="casado" className="">Si</label>
                <input type="radio" name="casado" id="casado" ></input>
                <label htmlFor="casado" className="">No</label>
                <input type="radio" name="casado" id="casado"></input>

                <label htmlFor="hijos" className="bloque">Cantidad de hijos</label>
                <button type='button' onClick={()=>(setContador( (prevState) => prevState + 1))}>+</button>
                <button type='button' onClick={()=>(setContador( (prevState) => prevState - 1))}>-</button>
                <p>{contador}</p>

                <label htmlFor="enviar" className="bloque">Enviar</label>
                <input type="submit" className="bloque"></input>

            </form>

            <p>Al dar click en el boton "enviar" usted esta aceptando nuestros terminos y condiciones</p>
        </div>
    )
}
