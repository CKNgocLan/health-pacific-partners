'use client'

import { Status, Wrapper } from '@googlemaps/react-wrapper'
import { CircularProgress } from '@mui/material'
import MyMapComponent from './MapComponent'

const HEAD_QUARTER_CENTER: google.maps.LatLngLiteral = {
	lat: Number.parseFloat(process.env.NEXT_PUBLIC_GOOGLE_HEAD_QUARTER_LAT),
	lng: Number.parseFloat(process.env.NEXT_PUBLIC_GOOGLE_HEAD_QUARTER_LNG),
}

const zoom = 15

const render = (status: Status) => {
	switch (status) {
		case Status.LOADING:
			return <CircularProgress />
		case Status.FAILURE:
			return <h1>Error</h1>
		case Status.SUCCESS:
			return <MyMapComponent center={HEAD_QUARTER_CENTER} zoom={zoom} />
	}
}

const GoogleMap = () => (
	<Wrapper
		apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}
		render={render}
	>
		<MyMapComponent center={HEAD_QUARTER_CENTER} zoom={zoom} />
	</Wrapper>
)

export default GoogleMap