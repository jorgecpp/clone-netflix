import {Info, Play} from 'lucide-react'

export function SliderVideo(){
    return(
        <div className='flex flex-col p-4 gap-4 absolute bottom-20'>
            <h2 className='text-white text-3xl font-semibold '>
                AmidaDev
            </h2>
            <p className='text-white max-w-150'>
                Creando un clon de netflix para obtener
                mas conocimientos sobre el desarrollo de web
                y asi poner lograr ser contratado en alguna empreza
                y lograr ingresos para cumplir mis metas o objetivos
                para lograr esto tengo que aprender ingles lo mas antes
                posible, estoy estudiando en el maximo nivel en mi ciudad
            </p>

            <div className='flex gap-2'>
                <button className='bg-white flex items-center p-3 gap-2 rounded-sm'>
                    <Play className='fill-black'/>
                    <span className='text-black'>Reproducir</span>
                </button>

                <button className='bg-zinc-400 flex items-center p-3 gap-2 rounded-sm'>
                    <Info/>
                    <span>Más Informacion</span>
                </button>
            </div>
        </div>
    )
}