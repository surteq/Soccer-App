import { RiTimerLine } from "react-icons/ri";
import { GiSoccerKick, GiCardPlay, GiSoccerBall } from "react-icons/gi";
import { TfiExchangeVertical } from "react-icons/tfi";

export const TimelineType = ({ type, home_score, away_score }) => {
  let iconRedCard = { transform: "rotate(180deg)", color: "#c9170e" };
  let iconYellowCard = { transform: "rotate(180deg)", color: "#f5d32f" };

  const typeToTextIcon = {
    match_started: { text: "KICK OFF", icon: <RiTimerLine /> },
    match_ended: { text: "MATCH ENDED", icon: <RiTimerLine /> },
    period_score: { text: "HALF-TIME", icon: <RiTimerLine /> },
    corner_kick: { text: "CORNER KICK", icon: <GiSoccerKick /> },
    yellow_card: {
      text: "YELLOW CARD",
      icon: <GiCardPlay style={iconYellowCard} />,
    },
    red_card: {
      text: "RED CARD",
      icon: <GiCardPlay style={iconRedCard} />,
    },
    score_change: {
      text: `GOAL!!!  ${home_score} : ${away_score}`,
      icon: <GiSoccerBall />,
    },
    substitution: {
      text: "SUBSTITUTION",
      icon: <TfiExchangeVertical />,
    },
  };
  return typeToTextIcon[type];
};
