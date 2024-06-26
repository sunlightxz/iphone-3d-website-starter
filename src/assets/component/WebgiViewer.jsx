import React ,{useRef , useState , useCallback ,forwardRef,useImperativeHandle, useEffect} from 'react'
import {
    ViewerApp,
    AssetManagerPlugin,
    GBufferPlugin,
    ProgressivePlugin,
    TonemapPlugin,
    SSRPlugin,
    SSAOPlugin,
    BloomPlugin,
    GammaCorrectionPlugin
} from "webgi";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { scrollAnimation } from '../lib/scroll-animation';

gsap.registerPlugin(ScrollTrigger);
const WebgiViewer = () => {
    const canvaRef = useRef(null);

    const memoizedScrollAnimation = useCallback(
        (position,target,onUpdate) => {
            if (position && target && onUpdate){
                scrollAnimation(position,target,onUpdate);
            }
        },[]
    )
    const setupViewer = useCallback(async()=> {

        const viewer = new ViewerApp({
            canvas: canvaRef.current
        })
        const manager = await viewer.addPlugin(AssetManagerPlugin)

        const camera = viewer.scene.activeCamera ;
        const position = camera.position;
        const target = camera.target ;
    
        await viewer.addPlugin(GBufferPlugin)
        await viewer.addPlugin(new ProgressivePlugin(32))
        await viewer.addPlugin(new TonemapPlugin(true))
        await viewer.addPlugin(GammaCorrectionPlugin)
        await viewer.addPlugin(SSRPlugin)
        await viewer.addPlugin(SSAOPlugin)
        await viewer.addPlugin(BloomPlugin)
    
        viewer.renderer.refreshPipeline()
        // Import and add a GLB file.
        // await viewer.load("scene.glb")
        await manager.addFromPath("rabbit.glb")
        
        viewer.getPlugin(TonemapPlugin).config.clipBackground = true;
        viewer.scene.activeCamera.setCameraOptions({controlsEnabled:false});
        // window.screenTop(0,0);

        let needsUpdate = true ;

        const onUpdate =()=> {
            needsUpdate = true;
            viewer.setDirty();
        }
        viewer.addEventListener("preFrame",() => {
            if(needsUpdate){
                camera.positionTargetUpdated(true);
                needsUpdate = false ;
            }
        });
        memoizedScrollAnimation(position,target,onUpdate);
    },[]);
    
    useEffect(()=>{
        setupViewer();

    },[])
  return (
    <div id="webgi-canvas-container" className='webgi-viewer'>
        <canvas id='webgi-canvas' ref={canvaRef}/>
    </div>
  )
}

export default WebgiViewer