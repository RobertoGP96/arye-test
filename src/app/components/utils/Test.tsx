import { useRef } from 'react';
import { OverlayPanel } from 'primereact/overlaypanel';
import RatesToolTip from './RatesToolTip';

export default function Test({mount}:{mount: number}) {
    const op = useRef<OverlayPanel>(null);

    return (
        <div className="flex justify-content-center cursor-pointer items-center p-1">
            <i className='pi pi-exclamation-circle' onClick={(e) => op.current.toggle(e)}></i>
            <OverlayPanel ref={op}>
                {mount!=0 && 
                <RatesToolTip exchange='usd' mount={mount}/>
                }
                {!mount && 
                <span className='text-sm max-w-[50px]'>No hay valores</span>
                }
            </OverlayPanel>
        </div>
    );
}