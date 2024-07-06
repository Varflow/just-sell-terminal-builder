export const createLocaleSwitcherStyles = () => `
    .locale-container {
        position: absolute;
        top: 10px;
        left: -62px;

        display: flex;
        justify-content: center;
        align-items: center;
        column-gap: 10px;

        width: max-content;
        padding: 4px 12px;
        
        border-radius: 8px;
        background-color: rgb(229 231 235);

        transition: all .25s ease;
    }

    .locale-container--active {
        left: 0;
        background-image: url();
    }

    .flag-image {
        width: 50px;
        height: 50px;
        cursor: pointer;
    }

    .flag-image svg{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;
