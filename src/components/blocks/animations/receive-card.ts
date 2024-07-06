import CardImage from "../../../assets/card.png";
import LinesImage from "../../../assets/lines.png";

export const createReceiveCardBlock = () => {
  return {
    id: "receive-card",
    label: "Анімація отримання картки",
    category: "Анімація",
    media:
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-card-receive"><rect x="2" y="2" width="20" height="20" rx="2" ry="2"/><path d="M7 12h10"/><path d="M9 10h6"/><path d="M9 14h6"/></svg>',
    content: `
            <div class="card-receive-animation" id="CARD_PAY_ANIMATION">
                <img src="${LinesImage}" alt="" class="lines" />
                <img src="${CardImage}" alt="" class="card" />
            </div>
            <style>
                .card-receive-animation {
                    width: 100%;
                    height: 100px;
                
                    position: relative;
                    scale: 0.7;
                
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .card-receive-animation .lines {
                    position: absolute;
                    scale: 0.3;
                
                    animation: linesFadeInOut 2s ease-in infinite both;
                }
                
                .card-receive-animation .card {
                    position: absolute;
                    scale: 0.6;
                    z-index: 999;
                
                    animation: cardPulse 2s ease infinite both, cardMove 10s linear infinite both;
                }
                
                @keyframes linesFadeInOut {
                    0% {
                    opacity: 0.4;
                    }
                    50% {
                    opacity: 1;
                    }
                    100% {
                    opacity: 0.4;
                    }
                }
                
                @keyframes cardPulse {
                    0% {
                    scale: 0.3;
                    }
                    50% {
                    scale: 0.37;
                    }
                    100% {
                    scale: 0.3;
                    }
                }
                
                @keyframes cardMove {
                    0% {
                    translate: 100px;
                    }
                    25% {
                    translate: 0;
                    }
                    50% {
                    translate: 0;
                    }
                    75% {
                    translate: 0;
                    }
                    100% {
                    translate: 100px;
                    }
                }
            </style>
        `,
  };
};
