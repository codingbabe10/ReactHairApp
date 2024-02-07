import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Packages from './Packages';
import './body.css'; // Import the CSS file

export default function Body({ sidebar, children }) {
    return (
         <Container>
             <Stack direction='horizontal'>
                 {/* {sidebar && <Sidebar />} */}
                 <Container>
                     
        <div>
            <p></p>
            <p style={{ color: 'white' }}>Best in class hair-care...</p>
        </div>

                    
                    {/* Children */}
                    {children}
                </Container>
            </Stack>
        </Container>
    );
}
