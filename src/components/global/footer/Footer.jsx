import { Link } from "react-router-dom";
import styled from 'styled-components';
import { Facebook, Youtube, Twitter, ChevronUp } from 'lucide-react';

const FooterContainer = styled.footer`
    background-color: #202020;

    box-sizing: border-box;
    padding: 2% 5%;

    color: #ccc;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Header = styled.div`
    height: fit-content;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Socials = styled.div`
    display: flex;
    gap: 10px;
`;

const SocialsItem = styled(Link)`
    &:hover,
    &:focus {
        color: #0078f2;
    }
`;

const GoUpFunctionality = styled.button`
    width: 30px;
    height: 30px;
    background-color: transparent;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    border: 2px solid white;

    &:hover,
    &:focus-visible {
        color: #0078f2;
        border-color: #0078f2;
    }
`;

const CopyrightContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

const CopyrightText = styled.p`
    font-size: 0.9rem;
`;

const HrLine = styled.hr`
    border-top: 1px solid #4b4b4e;
`;

const TosContainer = styled.div`
    display: flex;
    gap: 10px;
`;

const TosItem = styled(Link)`
    color: white;

    &:hover,
    &:focus {
        color: #0078f2;
    }
`;

export default function Footer() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }; 

    return (
        <FooterContainer>
            <Header>
                <Socials>
                    <SocialsItem>
                        <Facebook />
                    </SocialsItem>
                    <SocialsItem>
                        <Youtube />
                    </SocialsItem>
                    <SocialsItem>
                        <Twitter />
                    </SocialsItem>
                </Socials>

                <GoUpFunctionality type='click' onClick={scrollToTop}>
                    <ChevronUp />
                </GoUpFunctionality>
            </Header>

            <HrLine />

            <CopyrightContainer>
                <CopyrightText>
                    © 2024, ***, Inc. All rights reserved. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non leo sed massa accumsan tempor. Etiam gravida mi nec consectetur pellentesque. Nunc mi sapien, egestas ac finibus eget, suscipit eget massa. Pellentesque ac ante ipsum. Pellentesque sit amet eros ex. Maecenas sed sem erat. Pellentesque eget odio massa. Integer vitae maximus lacus. Quisque ac ante at nisi sollicitudin rhoncus.
                </CopyrightText>
                <CopyrightText>
                    Our websites may contain links to other sites and resources provided by third parties. These links are provided for your convenience only. *** has no control over the contents of those sites or resources, and accepts no responsibility for them or for any loss or damage that may arise from your use of them.
                </CopyrightText>
            </CopyrightContainer>

            <TosContainer>
                <TosItem>Terms of Service</TosItem>
                <TosItem>Privacy Policy</TosItem>
                <TosItem>Store Refund Policy</TosItem>
            </TosContainer>
        </FooterContainer>
    )
}
