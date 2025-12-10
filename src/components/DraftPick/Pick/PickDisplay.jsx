import { TEAM_SIZE } from '../../../constants/gameConstant';
import { useDraftContext } from '../../../contexts/DraftContext';
import TournamentLogo from '/src/assets/TournamentLogo.png'

export default function PickDisplay({ grid }) {
    const { pickSelection, animationClasses:{pick: animationClasses}} = useDraftContext()
    const { blue: bluePicks, red: redPicks } = pickSelection
    const { blue: animationBlueClass, red: animationRedClass } = animationClasses;
    
    const renderPicks = (picks, animationClass) => {
        return Array.from({ length: TEAM_SIZE }).map((_, index) => (
            <div className="bg-center w-29 h-45" key={index}>
                <div className="absolute flex items-center bg-[linear-gradient(180deg,#5170FF_0%,#5170FF_28%,#191931_100%)] border w-29 h-45">
                    <img src={TournamentLogo} alt="" className="top-1/2 w-29 h-fit"/>
                </div>
                <img className={`relative w-full object-cover ${animationClass[index]}`} src={picks[index].img} alt="" />
            </div>
        ));
    };

    return (
        <>
            <div className={`flex w-fit ${grid.Blue}`}>
                {renderPicks(bluePicks, animationBlueClass)}
            </div>
            <div className={`flex flex-row-reverse w-fit ${grid.Red}`}>
                {renderPicks(redPicks, animationRedClass)}
            </div>
        </>
    );
}
