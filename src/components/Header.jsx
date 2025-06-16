import { logoApp } from "../assets/index";
import Container from './Container';
import Button from './Button';
import ElipseBlueBlur from './theme/Header';

function Header() {
    return (
        <div className="border-b border-stroke-1">
            <Container className={"relative bg-n-9"}>
                <div className="relative z-10 flex items-center justify-between py-4 lg:py-6">
                    <img src={logoApp} width={104} height={32} alt="App_logo" />
                    <Button theme="secondary">Login</Button>
                </div>
                <ElipseBlueBlur/>
            </Container>
        </div>
    );
};

export default Header;