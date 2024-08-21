import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
    width: 100%;
    min-height: 50%;
    height: fit-content;
    color: white;
    box-sizing: border-box;
    padding: 0% 2%;

    display: flex;
    flex-direction: column;
    gap: 16px;

    
    & * {
        font-size: 1.2rem;
    }
`;

const Title = styled.h1`
    font-size: 1.5rem;
`;

const RequirementsContainer = styled.div`
    height: fit-content;
    background-color: #202024;
    border-radius: 10px;

    box-sizing: border-box;
    padding: 5%;

    display: flex;
    flex-direction: column;
    gap: 30px;
`;

const Platforms = styled.div`
    display: flex;
    height: calc(auto + 10px);
    gap: 30px;
`;

const PlatformItem = styled.button`
    width: fit-content;
    background-color: transparent;
    color: white;
    font-weight: 600;

    border-bottom: 3px solid #0078f2;
`;

const MinRecRequirements = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
`

const RequirementType = styled.div`
    font-weight: 600;
    font-size: 1.5rem;

    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const RequirementInfo = styled.h2`
    color: rgba(255, 255, 255, 0.65);
    font-weight: 500;
    
    & p {
        font-weight: 600;
        color: white;
    }
`

export default function GameRequirements({ gameInfo }) {

    return (
        <Container>
            <Title>{gameInfo.data.name} System Requirements</Title>
            <RequirementsContainer>
                <Platforms>
                    <PlatformItem>Windows</PlatformItem>
                </Platforms>
                <MinRecRequirements>
                    <RequirementType>
                        Minimum
                        <RequirementInfo>
                            OS version
                            <p>Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1, Windows Vista 64 Bit Service Pack 2* (*NVIDIA video card recommended if running Vista OS)</p>
                        </RequirementInfo>
                        <RequirementInfo>
                            Processor
                            <p>Intel Core 2 Quad CPU Q6600 @ 2.40GHz (4 CPUs) / AMD Phenom 9850 Quad-Core Processor (4 CPUs) @ 2.5GHz</p>
                        </RequirementInfo>
                        <RequirementInfo>
                            Graphics
                            <p>NVIDIA 9800 GT 1GB / AMD HD 4870 1GB (DX 10, 10.1, 11)</p>
                        </RequirementInfo>
                        <RequirementInfo>
                            Memory
                            <p>4 GB RAM</p>
                        </RequirementInfo>
                        <RequirementInfo>
                            Storage
                            <p>120 GB available space</p>
                        </RequirementInfo>
                    </RequirementType>

                    <RequirementType>
                        Recommended
                        <RequirementInfo>
                            OS version
                            <p>Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1</p>
                        </RequirementInfo>
                        <RequirementInfo>
                            Processor
                            <p>Intel Core i5 3470 @ 3.2GHZ (4 CPUs) / AMD X8 FX-8350 @ 4GHZ (8 CPUs)</p>
                        </RequirementInfo>
                        <RequirementInfo>
                            Graphics
                            <p>NVIDIA GTX 660 2GB / AMD HD7870 2GB</p>
                        </RequirementInfo>
                        <RequirementInfo>
                            Memory
                            <p>8 GB RAM</p>
                        </RequirementInfo>
                        <RequirementInfo>
                            Storage
                            <p>120 GB available space</p>
                        </RequirementInfo>
                    </RequirementType>
                </MinRecRequirements>
            </RequirementsContainer>
        </Container>
    )
}

GameRequirements.propTypes = {
    gameInfo: PropTypes.object.isRequired,
};
