'use client'

import { CircularProgress } from '@mui/material'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'
import { memo, useCallback, useState } from 'react'

const containerStyle = {
	width: '100%',
	height: '420px',
}

const center = {
	lat: Number(process.env.NEXT_PUBLIC_GOOGLE_HEAD_QUARTER_LAT),
	lng: Number(process.env.NEXT_PUBLIC_GOOGLE_HEAD_QUARTER_LNG),
}

function MapMigrated() {
	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY,
	})

	const [map, setMap] = useState<google.maps.Map | null>(null)

	const onLoad = useCallback(function callback(map: google.maps.Map) {
		// This is just an example of getting and using the map instance!!! don't just blindly copy!
		const bounds = new window.google.maps.LatLngBounds(center)
		map.fitBounds(bounds)

		setMap(map)
	}, [])

	const onUnmount = useCallback(function callback(_map: google.maps.Map) {
		setMap(null)
	}, [])

	if (!isLoaded) {
		return <CircularProgress />
	}

	return (
		<GoogleMap
			mapContainerStyle={containerStyle}
			center={center}
			zoom={10}
			onLoad={onLoad}
			onUnmount={onUnmount}
		>
			<Marker position={center} title='Health Pacific Partners' />
			<h1>Test</h1>
		</GoogleMap>
	)
}

export default memo(MapMigrated)
