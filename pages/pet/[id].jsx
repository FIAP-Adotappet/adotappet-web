import Container from '../../components/container'
import { useRouter } from 'next/router'

export default function PetItem() {
	const router = useRouter()
	const {id} = router.query

	return (
		<Container>
			pet: {id}
		</Container>
	)
}
