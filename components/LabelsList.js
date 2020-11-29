import React from 'react'
import Labels from './Labels'

const LabelsList = ({racks}) => {
    return (
        <div className="scroll">
            <Labels img="/img/icons/direccion.svg" name="Dirección" value="Carrera 9 n.° 51-11"/>
            <Labels img="/img/icons/precio.svg" name="Precio" value="$10 / min"/>
            <Labels img="/img/icons/horario.svg" name="Horario" value="6am / 8pm"/>
            <Labels img="/img/icons/categoria.svg" name="Categoría" value="Oro"/>
            <Labels img="/img/icons/racks.svg" name="Racks disponibles" value={`${racks.freeRacks} / ${racks.totalRacks}`}/>

            <style jsx>{`
            
                .scroll {
                    margin: auto;
                    width: 285px;
                    height: 340px;
                    overflow: auto;
                }

                .scroll::-webkit-scrollbar {
                    width: 7px;
                }

                .scroll::-webkit-scrollbar-thumb {
                    background-color: var(--gray);
                    border-radius: 5px;
                }

                .scroll::-webkit-scrollbar-track {
                    background-color: #3b3b3b22;
                    border-radius: 5px;
                }
            
            `}</style>

        </div>
    )
}

export default LabelsList
