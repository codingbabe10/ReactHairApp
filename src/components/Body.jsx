import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Sidebar from './Sidebar';

export default function Body({ sidebar, children }) {
    return (
        <Container>
            <Stack direction='horizontal'>
                {sidebar && <Sidebar />}
                <Container>
                    {/* Image */}
                    <img 
                        height={800}
                        width={1000}
                        src="https://images.pexels.com/photos/7195811/pexels-photo-7195811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="Hair Care Image" 
                    />
                    {/* Text */}
        <div>
            <p>Best in class hair-care. Nice salon, nice price, and more perks.</p>
            <p style={{ color: 'white' }}>Best in class hair-care...</p>
        </div>

                    
                    {/* Children */}
                    {children}
                </Container>
            </Stack>
        </Container>
    );
}
