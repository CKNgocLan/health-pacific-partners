import { useEffect, useRef, type FC } from 'react'

type MapProps = {
	center: google.maps.LatLngLiteral
	zoom: number
}

const MapComponent: FC<MapProps> = ({ center, zoom }) => {
	const ref = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (ref.current) {
			new window.google.maps.Map(ref?.current, {
				center,
				zoom,
			})
		}
	}, [])

	return <div ref={ref} id='map' />
}

export default MapComponent