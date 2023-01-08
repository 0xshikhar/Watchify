import { Container, Row, Col } from "postcss"
import CategoriesBar from "../components/categoriesBar"
import Video from '../components/video'

const HomePage = () => {
    return (
        <Container>
            <CategoriesBar />
            <Row>
                {/* for video component - creating dummy array of 16 element */}
                {
                    [...new Array(20)].map(() => (
                        <Col lg={3} md={4}>
                            <Video />
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

export default HomePage;