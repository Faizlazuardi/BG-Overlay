export const useSwitchTeam = ({ setTeamSelection, setPlayerInputs, setTeamInput }) => {
    
    const switchTeam = () => {
        setPlayerInputs(prev => ({ blue: prev.red, red: prev.blue }));
        setTeamSelection(prev => ({ blue: prev.red, red: prev.blue }));
        setTeamInput(prev => ({ blue: prev.red, red: prev.blue }));
    };
    
    return { switchTeam };
};