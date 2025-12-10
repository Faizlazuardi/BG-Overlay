import TournamentLogo from '/src/assets/TournamentLogo.png';
import { useGameContext } from '../../contexts/GameContext';
import { useDraftContext } from '../../contexts/DraftContext';

export default function MatchSummary({ grid }) {
    const { requiredWins, selectedRound} = useGameContext();
    const { teamSelection } = useDraftContext()
    const { blue: blueTeamSelection, red: redTeamSelection } = teamSelection;

    const winCard = (team, teamSelection, style) => {
        return (
            <div className="flex flex-col items-center gap-3">
                <img className="w-16 h-16" id={`logo-${team}`} src={teamSelection.Logo} alt="" />
                <div className={`flex justify-center gap-2.5 h-8 ${style}`}>
                    {Array.from({ length: requiredWins }).map((_, index) => (
                        <img src={teamSelection.WinCheck[index] ? TournamentLogo : null} key={index} className="w-fit h-full" />
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className={`${grid}`}>
            <div className="relative flex flex-col gap-2 bg-[linear-gradient(180deg,#5170FF_0%,#5170FF_50%,#191931_100%)] pb-16 w-85 h-69">
                <div className="mx-auto max-w-40 h-fit">
                    <img className="w-full h-full" src={TournamentLogo} alt="Tournament Logo" />
                </div>
                <span className="drop-shadow-lg font-extrabold text-[#A7FFE5] text-2xl text-center">{selectedRound}</span>
                <span className='drop-shadow-lg font-extrabold text-[#A7FFE5] text-2xl text-center'>GLOW AND GAME</span>
            </div>
        </div>
    );
}