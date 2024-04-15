import dynamic from 'next/dynamic';

const Map = dynamic(() => import('../../src/app/components/LeafletMap'), {
    ssr: false
})

export default Map